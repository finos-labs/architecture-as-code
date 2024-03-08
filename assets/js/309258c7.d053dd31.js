"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[178],{8678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(5893),r=a(1151);const s={sidebar_position:2,slug:"/calm-core/example"},i="Getting Started",o={id:"calm-core/example",title:"Getting Started",description:"As we discussed in the Fast Track the CALM Core Manifest is structured around nodes and relationships. In this section we're going to look at how to model a super simple three tier application using the CALM Core Manifest.",source:"@site/docs/calm-core/example.md",sourceDirName:"calm-core",slug:"/calm-core/example",permalink:"/architecture-as-code/calm-core/example",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/calm-core/example"},sidebar:"docsSidebar",previous:{title:"CALM Core",permalink:"/architecture-as-code/calm-core"},next:{title:"Domains",permalink:"/architecture-as-code/domains"}},c={},l=[];function d(e){const t={a:"a",h1:"h1",mermaid:"mermaid",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(t.p,{children:["As we discussed in the ",(0,n.jsx)(t.a,{href:"/#fast-track",children:"Fast Track"})," the CALM Core Manifest is structured around ",(0,n.jsx)(t.strong,{children:"nodes"})," and ",(0,n.jsx)(t.strong,{children:"relationships"}),". In this section we're going to look at how to model a super simple three tier application using the CALM Core Manifest."]}),"\n",(0,n.jsx)(t.p,{children:"Let's look at the following simple C4 Container Diagram."}),"\n",(0,n.jsx)(t.mermaid,{value:'    C4Container\n    \n    Container_Boundary(c1, "Three Tier App") {\n        Container(spa, "Single-Page App", "JavaScript, Angular", "Exposes amazing features to customers via their web browser")\n        Container(web_app, "Web Application", "Java, Spring MVC", "Delivers the amazing features of the application to the Single-Page App")\n        ContainerDb(database, "Database", "SQL Database", "Stores user info, and details of the users interactions")\n    }\n\n    Rel(web_app, spa, "Delivers")\n    Rel_Back(database, web_app, "Reads from and writes to", "JDBC")\n    \n    UpdateLayoutConfig($c4ShapeInRow="1", $c4BoundaryInRow="1")'})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);