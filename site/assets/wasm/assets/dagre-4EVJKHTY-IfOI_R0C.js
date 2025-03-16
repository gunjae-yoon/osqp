import{_ as e,aa as n,ab as t,ac as r,ad as a,l as i,c as o,ae as s,af as d,$ as c,a4 as l,a0 as g,Y as f,ag as p,ah as u,ai as h}from"./mermaid-CDOObNDr.js";import{G as w}from"./graph-DD86GxBj.js";import{l as v}from"./layout-B-3ZIovx.js";import{i as m}from"./_baseUniq-DsWCmHXU.js";import{c as y}from"./clone-DhY2T0wI.js";import{m as X}from"./min-ZOoB4xGq.js";import"./index-nRV3XiJW.js";import"./transform-CdY8z5kT.js";import"./step-xJWGRC3d.js";import"./_baseEach-CB5vBlN3.js";import"./sortBy-CdH_91US.js";import"./_baseMap-Dc9yWF7V.js";function b(e){var n={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:E(e),edges:N(e)};return m(e.graph())||(n.value=y(e.graph())),n}function E(e){return X(e.nodes(),(function(n){var t=e.node(n),r=e.parent(n),a={v:n};return m(t)||(a.value=t),m(r)||(a.parent=r),a}))}function N(e){return X(e.edges(),(function(n){var t=e.edge(n),r={v:n.v,w:n.w};return m(n.name)||(r.name=n.name),m(t)||(r.value=t),r}))}var C=new Map,x=new Map,S=new Map,I=e((()=>{x.clear(),S.clear(),C.clear()}),"clear"),D=e(((e,n)=>{const t=x.get(n)||[];return i.trace("In isDescendant",n," ",e," = ",t.includes(e)),t.includes(e)}),"isDescendant"),O=e(((e,n)=>{const t=x.get(n)||[];return i.info("Descendants of ",n," is ",t),i.info("Edge is ",e),e.v!==n&&e.w!==n&&(t?t.includes(e.v)||D(e.v,n)||D(e.w,n)||t.includes(e.w):(i.debug("Tilt, ",n,",not in descendants"),!1))}),"edgeInCluster"),j=e(((e,n,t,r)=>{i.warn("Copying children of ",e,"root",r,"data",n.node(e),r);const a=n.children(e)||[];e!==r&&a.push(e),i.warn("Copying (nodes) clusterId",e,"nodes",a),a.forEach((a=>{if(n.children(a).length>0)j(a,n,t,r);else{const o=n.node(a);i.info("cp ",a," to ",r," with parent ",e),t.setNode(a,o),r!==n.parent(a)&&(i.warn("Setting parent",a,n.parent(a)),t.setParent(a,n.parent(a))),e!==r&&a!==e?(i.debug("Setting parent",a,e),t.setParent(a,e)):(i.info("In copy ",e,"root",r,"data",n.node(e),r),i.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==r,"node!==clusterId",a!==e));const s=n.edges(a);i.debug("Copying Edges",s),s.forEach((a=>{i.info("Edge",a);const o=n.edge(a.v,a.w,a.name);i.info("Edge data",o,r);try{O(a,r)?(i.info("Copying as ",a.v,a.w,o,a.name),t.setEdge(a.v,a.w,o,a.name),i.info("newGraph edges ",t.edges(),t.edge(t.edges()[0]))):i.info("Skipping copy of edge ",a.v,"--\x3e",a.w," rootId: ",r," clusterId:",e)}catch(s){i.error(s)}}))}i.debug("Removing node",a),n.removeNode(a)}))}),"copy"),k=e(((e,n)=>{const t=n.children(e);let r=[...t];for(const a of t)S.set(a,e),r=[...r,...k(a,n)];return r}),"extractDescendants"),G=e(((e,n,t)=>{const r=e.edges().filter((e=>e.v===n||e.w===n)),a=e.edges().filter((e=>e.v===t||e.w===t)),i=r.map((e=>({v:e.v===n?t:e.v,w:e.w===n?n:e.w}))),o=a.map((e=>({v:e.v,w:e.w})));return i.filter((e=>o.some((n=>e.v===n.v&&e.w===n.w))))}),"findCommonEdges"),B=e(((e,n,t)=>{const r=n.children(e);if(i.trace("Searching children of id ",e,r),r.length<1)return e;let a;for(const i of r){const e=B(i,n,t),r=G(n,t,e);if(e){if(!(r.length>0))return e;a=e}}return a}),"findNonClusterChild"),P=e((e=>C.has(e)&&C.get(e).externalConnections&&C.has(e)?C.get(e).id:e),"getAnchorId"),J=e(((e,n)=>{if(!e||n>10)i.debug("Opting out, no graph ");else{i.debug("Opting in, graph "),e.nodes().forEach((function(n){e.children(n).length>0&&(i.warn("Cluster identified",n," Replacement id in edges: ",B(n,e,n)),x.set(n,k(n,e)),C.set(n,{id:B(n,e,n),clusterData:e.node(n)}))})),e.nodes().forEach((function(n){const t=e.children(n),r=e.edges();t.length>0?(i.debug("Cluster identified",n,x),r.forEach((e=>{D(e.v,n)^D(e.w,n)&&(i.warn("Edge: ",e," leaves cluster ",n),i.warn("Descendants of XXX ",n,": ",x.get(n)),C.get(n).externalConnections=!0)}))):i.debug("Not a cluster ",n,x)}));for(let n of C.keys()){const t=C.get(n).id,r=e.parent(t);r!==n&&C.has(r)&&!C.get(r).externalConnections&&(C.get(n).id=r)}e.edges().forEach((function(n){const t=e.edge(n);i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let r=n.v,a=n.w;if(i.warn("Fix XXX",C,"ids:",n.v,n.w,"Translating: ",C.get(n.v)," --- ",C.get(n.w)),C.get(n.v)||C.get(n.w)){if(i.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=P(n.v),a=P(n.w),e.removeEdge(n.v,n.w,n.name),r!==n.v){const a=e.parent(r);C.get(a).externalConnections=!0,t.fromCluster=n.v}if(a!==n.w){const r=e.parent(a);C.get(r).externalConnections=!0,t.toCluster=n.w}i.warn("Fix Replacing with XXX",r,a,n.name),e.setEdge(r,a,t,n.name)}})),i.warn("Adjusted Graph",b(e)),A(e,0),i.trace(C)}}),"adjustClustersAndEdges"),A=e(((e,n)=>{var t,r;if(i.warn("extractor - ",n,b(e),e.children("D")),n>10)return void i.error("Bailing out");let a=e.nodes(),o=!1;for(const i of a){const n=e.children(i);o=o||n.length>0}if(o){i.debug("Nodes = ",a,n);for(const o of a)if(i.debug("Extracting node",o,C,C.has(o)&&!C.get(o).externalConnections,!e.parent(o),e.node(o),e.children("D")," Depth ",n),C.has(o))if(!C.get(o).externalConnections&&e.children(o)&&e.children(o).length>0){i.warn("Cluster without external connections, without a parent and with children",o,n);let a="TB"===e.graph().rankdir?"LR":"TB";(null==(r=null==(t=C.get(o))?void 0:t.clusterData)?void 0:r.dir)&&(a=C.get(o).clusterData.dir,i.warn("Fixing dir",C.get(o).clusterData.dir,a));const s=new w({multigraph:!0,compound:!0}).setGraph({rankdir:a,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));i.warn("Old graph before copy",b(e)),j(o,e,s,o),e.setNode(o,{clusterNode:!0,id:o,clusterData:C.get(o).clusterData,label:C.get(o).label,graph:s}),i.warn("New graph after copy node: (",o,")",b(s)),i.debug("Old graph after copy",b(e))}else i.warn("Cluster ** ",o," **not meeting the criteria !externalConnections:",!C.get(o).externalConnections," no parent: ",!e.parent(o)," children ",e.children(o)&&e.children(o).length>0,e.children("D"),n),i.debug(C);else i.debug("Not a cluster",o,n);a=e.nodes(),i.warn("New list of nodes",a);for(const t of a){const r=e.node(t);i.warn(" Now next level",t,r),(null==r?void 0:r.clusterNode)&&A(r.graph,n+1)}}else i.debug("Done, no node has children",e.nodes())}),"extractor"),R=e(((e,n)=>{if(0===n.length)return[];let t=Object.assign([],n);return n.forEach((n=>{const r=e.children(n),a=R(e,r);t=[...t,...a]})),t}),"sorter"),T=e((e=>R(e,e.children())),"sortNodesByHierarchy"),M=e((async(n,t,r,a,o,w)=>{i.warn("Graph in recursive render:XAX",b(t),o);const m=t.graph().rankdir;i.trace("Dir in recursive render - dir:",m);const y=n.insert("g").attr("class","root");t.nodes()?i.info("Recursive render XXX",t.nodes()):i.info("No nodes found for",t),t.edges().length>0&&i.info("Recursive edges",t.edge(t.edges()[0]));const X=y.insert("g").attr("class","clusters"),E=y.insert("g").attr("class","edgePaths"),N=y.insert("g").attr("class","edgeLabels"),x=y.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const n=t.node(e);if(void 0!==o){const n=JSON.parse(JSON.stringify(o.clusterData));i.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",n.height,"\nParent cluster",o.height),t.setNode(o.id,n),t.parent(e)||(i.trace("Setting parent",e,o.id),t.setParent(e,o.id,n))}if(i.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),null==n?void 0:n.clusterNode){i.info("Cluster identified XBX",e,n.width,t.node(e));const{ranksep:o,nodesep:c}=t.graph();n.graph.setGraph({...n.graph.graph(),ranksep:o+25,nodesep:c});const l=await M(x,n.graph,r,a,t.node(e),w),g=l.elem;s(n,g),n.diff=l.diff||0,i.info("New compound node after recursive render XAX",e,"width",n.width,"height",n.height),d(g,n)}else t.children(e).length>0?(i.trace("Cluster - the non recursive path XBX",e,n.id,n,n.width,"Graph:",t),i.trace(B(n.id,t)),C.set(n.id,{id:B(n.id,t),node:n})):(i.trace("Node - the non recursive path XAX",e,x,t.node(e),m),await c(x,t.node(e),{config:w,dir:m}))})));const S=e((async()=>{const e=t.edges().map((async function(e){const n=t.edge(e.v,e.w,e.name);i.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),i.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),i.info("Fix",C,"ids:",e.v,e.w,"Translating: ",C.get(e.v),C.get(e.w)),await h(N,n)}));await Promise.all(e)}),"processEdges");await S(),i.info("Graph before layout:",JSON.stringify(b(t))),i.info("############################################# XXX"),i.info("###                Layout                 ### XXX"),i.info("############################################# XXX"),v(t),i.info("Graph after layout:",JSON.stringify(b(t)));let I=0,{subGraphTitleTotalMargin:D}=l(w);return await Promise.all(T(t).map((async function(e){var n;const r=t.node(e);if(i.info("Position XBX => "+e+": ("+r.x,","+r.y,") width: ",r.width," height: ",r.height),null==r?void 0:r.clusterNode)r.y+=D,i.info("A tainted cluster node XBX1",e,r.id,r.width,r.height,r.x,r.y,t.parent(e)),C.get(r.id).node=r,g(r);else if(t.children(e).length>0){i.info("A pure cluster node XBX1",e,r.id,r.x,r.y,r.width,r.height,t.parent(e)),r.height+=D,t.node(r.parentId);const a=(null==r?void 0:r.padding)/2||0,o=(null==(n=null==r?void 0:r.labelBBox)?void 0:n.height)||0,s=o-a||0;i.debug("OffsetY",s,"labelHeight",o,"halfPadding",a),await f(X,r),C.get(r.id).node=r}else{const e=t.node(r.parentId);r.y+=D/2,i.info("A regular node XBX1 - using the padding",r.id,"parent",r.parentId,r.width,r.height,r.x,r.y,"offsetY",r.offsetY,"parent",e,null==e?void 0:e.offsetY,r),g(r)}}))),t.edges().forEach((function(e){const n=t.edge(e);i.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(n),n),n.points.forEach((e=>e.y+=D/2));const o=t.node(e.v);var s=t.node(e.w);const d=p(E,n,C,r,o,s,a);u(n,d)})),t.nodes().forEach((function(e){const n=t.node(e);i.info(e,n.type,n.diff),n.isGroup&&(I=n.diff)})),i.warn("Returning from recursive render XAX",y,I),{elem:y,diff:I}}),"recursiveRender"),F=e((async(e,s)=>{var d,c,l,g,f,p;const u=new w({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:(null==(d=e.config)?void 0:d.nodeSpacing)||(null==(l=null==(c=e.config)?void 0:c.flowchart)?void 0:l.nodeSpacing)||e.nodeSpacing,ranksep:(null==(g=e.config)?void 0:g.rankSpacing)||(null==(p=null==(f=e.config)?void 0:f.flowchart)?void 0:p.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=s.select("g");n(h,e.markers,e.type,e.diagramId),t(),r(),a(),I(),e.nodes.forEach((e=>{u.setNode(e.id,{...e}),e.parentId&&u.setParent(e.id,e.parentId)})),i.debug("Edges:",e.edges),e.edges.forEach((e=>{if(e.start===e.end){const n=e.start,t=n+"---"+n+"---1",r=n+"---"+n+"---2",a=u.node(n);u.setNode(t,{domId:t,id:t,parentId:a.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),u.setParent(t,a.parentId),u.setNode(r,{domId:r,id:r,parentId:a.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),u.setParent(r,a.parentId);const i=structuredClone(e),o=structuredClone(e),s=structuredClone(e);i.label="",i.arrowTypeEnd="none",i.id=n+"-cyclic-special-1",o.arrowTypeEnd="none",o.id=n+"-cyclic-special-mid",s.label="",a.isGroup&&(i.fromCluster=n,s.toCluster=n),s.id=n+"-cyclic-special-2",u.setEdge(n,t,i,n+"-cyclic-special-0"),u.setEdge(t,r,o,n+"-cyclic-special-1"),u.setEdge(r,n,s,n+"-cyc<lic-special-2")}else u.setEdge(e.start,e.end,{...e},e.id)})),i.warn("Graph at first:",JSON.stringify(b(u))),J(u),i.warn("Graph after XAX:",JSON.stringify(b(u)));const v=o();await M(h,u,e.type,e.diagramId,void 0,v)}),"render");export{F as render};
