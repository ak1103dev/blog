(self.webpackChunkblog=self.webpackChunkblog||[]).push([[969],{9535:function(e,t,n){"use strict";var r=n(7294),u=n(5444),a=n(6125);t.Z=function(){var e,t=null===(e=(0,u.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return r.createElement("div",{className:"bio"},r.createElement(a.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpeg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:n(8765)}),(null==t?void 0:t.name)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,t.name)," ",(null==t?void 0:t.summary)||null," "))}},1621:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.title;return r.createElement("span",{className:"tag"},t)}},5847:function(e,t,n){"use strict";n.r(t);var r=n(1804),u=n.n(r),a=n(7294),i=n(5444),f=n(9535),c=n(7198),l=n(3751),o=n(1621);t.default=function(e){var t=e.data,n=e.location,r=e.pageContext.tag,s=t.allMarkdownRemark.nodes;return 0===s.length?a.createElement(c.Z,{location:n,title:r},a.createElement(l.Z,{title:r}),a.createElement(f.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(c.Z,{location:n,title:r},a.createElement(l.Z,{title:r}),a.createElement(f.Z,null),a.createElement("ol",{style:{listStyle:"none"}},s.map((function(e){var t,n=e.frontmatter.title||e.fields.slug,r=(null==e||null===(t=e.frontmatter)||void 0===t?void 0:t.tags)||[];return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},n))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})),a.createElement("section",{style:{display:"flex",gap:5,marginTop:5}},r.map((function(e){return a.createElement(i.Link,{key:e,to:"/tag/"+u()(e),itemProp:"url"},a.createElement(o.Z,{title:e}))})))))}))))}},2663:function(e){e.exports=function(e,t,n,r){var u=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++u]);++u<a;)n=t(n,e[u],u,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},5393:function(e,t,n){var r=n(2663),u=n(3816),a=n(8748),i=RegExp("['’]","g");e.exports=function(e){return function(t){return r(a(u(t).replace(i,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+u+"]",i="\\d+",f="[\\u2700-\\u27bf]",c="["+n+"]",l="[^\\ud800-\\udfff"+u+i+t+n+r+"]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+r+"]",p="(?:"+c+"|"+l+")",m="(?:"+d+"|"+l+")",b="(?:['’](?:d|ll|m|re|s|t|ve))?",x="(?:['’](?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",E="[\\ufe0e\\ufe0f]?",v=E+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",o,s].join("|")+")"+E+g+")*"),h="(?:"+[f,o,s].join("|")+")"+v,y=RegExp([d+"?"+c+"+"+b+"(?="+[a,d,"$"].join("|")+")",m+"+"+x+"(?="+[a,d+p,"$"].join("|")+")",d+"?"+p+"+"+b,d+"+"+x,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,h].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},3816:function(e,t,n){var r=n(9389),u=n(9833),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(a,r).replace(i,"")}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},8748:function(e,t,n){var r=n(9029),u=n(3157),a=n(9833),i=n(2757);e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?u(e)?i(e):r(e):e.match(t)||[]}},8765:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f843cb78936bd6692f5b98cf3984b394/d24ee/profile-pic.jpg","srcSet":"/static/f843cb78936bd6692f5b98cf3984b394/d24ee/profile-pic.jpg 50w,\\n/static/f843cb78936bd6692f5b98cf3984b394/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/f843cb78936bd6692f5b98cf3984b394/d4bf4/profile-pic.avif 50w,\\n/static/f843cb78936bd6692f5b98cf3984b394/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/f843cb78936bd6692f5b98cf3984b394/3faea/profile-pic.webp 50w,\\n/static/f843cb78936bd6692f5b98cf3984b394/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-tag-js-f011a9ae0521c172828d.js.map