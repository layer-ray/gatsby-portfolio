(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),l=a(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Layer's lair"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),l=a(4),c=a.n(l),s=a(161),o=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Layer's lair",description:"Have a look at my portfolio, a site where you can find a showcase of my best projects!",author:"Layer R-"}}}}},154:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),l=a(4),c=a.n(l),s=a(33),o=a.n(s),u=(a(148),i.a.createContext({})),m=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};var d=a(156),p=a.n(d),f=function(e){e.siteTitle;return i.a.createElement("header",{className:p.a.header},i.a.createElement("div",{className:p.a.title},i.a.createElement("h2",{className:"hidden"},"Header"),i.a.createElement("h2",null,"LAYER"),i.a.createElement("p",null,"Web developer")),i.a.createElement("nav",{className:p.a.navBar},i.a.createElement("h2",{className:"hidden"},"Navigation elements"),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/about",activeClassName:p.a.active},"About")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/",activeClassName:p.a.active},"Home"))))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var E=f,h=(a(157),a(155)),y=a(149),v=a(158),g=a.n(v),w=function(e){var t=e.link,a=e.className,n=e.children;return i.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("li",null,i.a.createElement(y.b.Provider,{value:{size:"2em",className:a,style:{verticalAlign:"middle"}}},i.a.createElement("div",null,n))))},N=function(){return i.a.createElement("footer",{className:g.a.footer},i.a.createElement("h2",{className:"hidden"},"Footer - social icons"),i.a.createElement("ul",{className:g.a.navlist},i.a.createElement(w,{link:"https://www.freecodecamp.org/forum/u/Layer/summary",className:[g.a.fccIcon,g.a.icon].join(" ")},i.a.createElement(h.b,null)),i.a.createElement(w,{link:"https://github.com/layer-ray",className:[g.a.githubIcon,g.a.icon].join(" ")},i.a.createElement(h.c,null))),"Layer © ",(new Date).getFullYear())},b=(a(159),a(160)),k=a.n(b),T=function(e){var t=e.children;return i.a.createElement(m,{query:"755544856",render:function(e){return i.a.createElement("div",{className:k.a.layoutContainer},i.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",{className:k.a.content},i.a.createElement("h2",{className:"hidden"},"Projects"),t),i.a.createElement(N,null))},data:n})};T.propTypes={children:c.a.node.isRequired};t.a=T}}]);
//# sourceMappingURL=component---src-pages-404-js-864297a196a9aa642e26.js.map