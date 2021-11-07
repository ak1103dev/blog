const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require('gatsby-awesome-pagination')
const _ = require('lodash')


exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const basePath = themeOptions.basePath || `/`

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const templateTags = path.resolve('./src/templates/tag.js')

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              category
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  const tags = posts.reduce((list, post) => {
    return [...list, ...(post?.frontmatter?.tags || [])]
  }, [])
  const categories = posts.map(post => post?.frontmatter?.category)

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  if (tags.length > 0) {
    tags.forEach((tag, index) => {
      const postsWithTag = posts.filter(post =>
        (post?.frontmatter?.tags || []).includes(tag)
      )
      const tagPagination = basePath === '/'
        ? `/tag/${_.kebabCase(tag)}`
        : `/${basePath}/tag/${_.kebabCase(tag)}`
      paginate({
        createPage,
        items: postsWithTag,
        itemsPerPage: 10,
        pathPrefix: tagPagination,
        component: templateTags,
        context: {
          tag,
          basePath: basePath === '/' ? '' : basePath,
          paginationPath: tagPagination,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
