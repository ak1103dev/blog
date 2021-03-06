/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  main {
    min-height: calc(100vh - 200px);
  }
`
const Footer = styled.footer`
  border-top: 1px solid #333;
  padding-top: 20px;
  text-align: center;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built by AK1103DEV
        </Footer>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
