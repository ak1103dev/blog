"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[678],{9535:function(e,t,l){var i=l(7294),a=l(5444),c=l(6125);t.Z=function(){var e,t=null===(e=(0,a.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return i.createElement("div",{className:"bio"},i.createElement(c.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpeg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(8765)}),(null==t?void 0:t.name)&&i.createElement("p",null,"Written by ",i.createElement("strong",null,t.name)," ",(null==t?void 0:t.summary)||null," "))}},7704:function(e,t,l){l.r(t);var i=l(7294),a=l(5444),c=l(9535),r=l(7198),n=l(3751);t.default=function(e){var t,l=e.data,o=e.location,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=l.allMarkdownRemark.nodes;return 0===f.length?i.createElement(r.Z,{location:o,title:s},i.createElement(n.Z,{title:"All posts"}),i.createElement(c.Z,null),i.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):i.createElement(r.Z,{location:o,title:s},i.createElement(n.Z,{title:"All posts"}),i.createElement(c.Z,null),i.createElement("ol",{style:{listStyle:"none"}},f.map((function(e){var t=e.frontmatter.title||e.fields.slug;return i.createElement("li",{key:e.fields.slug},i.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},i.createElement("header",null,i.createElement("h2",null,i.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},i.createElement("span",{itemProp:"headline"},t))),i.createElement("small",null,e.frontmatter.date)),i.createElement("section",null,i.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},8765:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f843cb78936bd6692f5b98cf3984b394/d24ee/profile-pic.jpg","srcSet":"/static/f843cb78936bd6692f5b98cf3984b394/d24ee/profile-pic.jpg 50w,\\n/static/f843cb78936bd6692f5b98cf3984b394/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/f843cb78936bd6692f5b98cf3984b394/d4bf4/profile-pic.avif 50w,\\n/static/f843cb78936bd6692f5b98cf3984b394/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/f843cb78936bd6692f5b98cf3984b394/3faea/profile-pic.webp 50w,\\n/static/f843cb78936bd6692f5b98cf3984b394/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-38d7005b8128851c6974.js.map