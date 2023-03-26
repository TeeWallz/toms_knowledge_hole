"use strict";(self.webpackChunktoms_knowledge_hole=self.webpackChunktoms_knowledge_hole||[]).push([[2047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,u=m["".concat(s,".").concat(p)]||m[p]||g[p]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o="Data Engineering",l={unversionedId:"programming/data-engineering/data-engineering",id:"programming/data-engineering/data-engineering",title:"Data Engineering",description:"Knowledge",source:"@site/docs/programming/data-engineering/data-engineering.md",sourceDirName:"programming/data-engineering",slug:"/programming/data-engineering/",permalink:"/docs/programming/data-engineering/",draft:!1,editUrl:"https://github.com/TeeWallz/teewallz_knowledge_hole/tree/main/docs/programming/data-engineering/data-engineering.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Why is backup & restore such a shit show?",permalink:"/docs/programming/data/postgres/backup-restore-shitshow"},next:{title:"Data engineering blogs worth reading",permalink:"/docs/programming/data-engineering/data-engineering-blogs-worth-reading"}},s={},d=[{value:"Knowledge",id:"knowledge",level:2},{value:"2022 data buzzwords translated to their actual meaning",id:"2022-data-buzzwords-translated-to-their-actual-meaning",level:3},{value:"Links",id:"links",level:2}],c={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-engineering"},"Data Engineering"),(0,r.kt)("h2",{id:"knowledge"},"Knowledge"),(0,r.kt)("h3",{id:"2022-data-buzzwords-translated-to-their-actual-meaning"},(0,r.kt)("a",{parentName:"h3",href:"https://www.reddit.com/r/dataengineering/comments/zqqsqx/2022_data_buzzwords_translated_to_their_actual/"},"2022 data buzzwords translated to their actual meaning")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ELT: \u201cshift your cost center to your warehouse\u201d"),(0,r.kt)("li",{parentName:"ul"},"Modern Data Stack - \u201cshift your cost center to your warehouse\u201d"),(0,r.kt)("li",{parentName:"ul"},"Zero ETL:  \u201cshift your cost center to your warehouse ",(0,r.kt)("em",{parentName:"li"},"now with more lock in!"),"\u201d"),(0,r.kt)("li",{parentName:"ul"},"Credits:  \u201cshift your costs to\u2026.variable\u201d"),(0,r.kt)("li",{parentName:"ul"},"No code: \u201cshift to needing two tools for the same job\u201d"),(0,r.kt)("li",{parentName:"ul"},"Low code: \u201cshift to coding normally\u201d"),(0,r.kt)("li",{parentName:"ul"},"Batch:  \u201cBusiness model for NYSE:SNOW\u201d"),(0,r.kt)("li",{parentName:"ul"},"Real-time: \u201csomewhere between nano seconds and hours\u201d"),(0,r.kt)("li",{parentName:"ul"},"Data quality: \u201cthe thing we keep talking about and would like to get to someday\u201d"),(0,r.kt)("li",{parentName:"ul"},"Streaming SQL: \u201cVendor-specific mashups of various strategies for bolting notions of time variance into a language not designed for it\u201d"),(0,r.kt)("li",{parentName:"ul"},"Schemaless: \u201cthere is a schema, but we don\u2019t know what it is\u201d"),(0,r.kt)("li",{parentName:"ul"},'Bonus alternative ELT definition: "we changed our schema and broke the data pipeline, but we can make the analysts deal with it" ')),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dataengineering/comments/p3kpq9/1_year_of_mustread_articles/"},"reddit- 1 year of mustread articles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dataengineering/comments/vhcn7n/the_state_of_data_engineering_2022/"},"https://www.reddit.com/r/dataengineering/comments/vhcn7n/the_state_of_data_engineering_2022/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.archive.org/web/20200916201147/https://peterdannemann.com/babys-first-data-pipeline/"},"https://web.archive.org/web/20200916201147/https://peterdannemann.com/babys-first-data-pipeline/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dataengineering/comments/vi2iv0/almost_opensource_data_stack_for_a_personal_de/"},"https://www.reddit.com/r/dataengineering/comments/vi2iv0/almost_opensource_data_stack_for_a_personal_de/")),(0,r.kt)("li",{parentName:"ul"})))}g.isMDXComponent=!0}}]);