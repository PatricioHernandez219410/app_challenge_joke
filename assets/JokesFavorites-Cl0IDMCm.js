import{r as l,o as i,c as f,w as e,a as r,b as t,d as h,t as m,n as B,u as F,e as S,f as N,g as J,h as b,i as g,F as j,j as D,_ as E}from"./index-NjASdEyC.js";const H={class:"font-weight-bold"},L={class:"",style:{"font-size":"3rem"}},O={__name:"CounterCard",props:{item:Object},setup(c){return(k,s)=>{const d=l("v-icon"),v=l("v-sheet");return i(),f(v,{rounded:"",elevation:"1",class:B(`d-flex pa-2 justify-space-between  ${c.item.color}`)},{default:e(()=>[r("div",null,[t(d,{size:"50px",class:"d-block"},{default:e(()=>[h(m(c.item.icon||"mdi-default-outline"),1)]),_:1}),r("span",H,m(c.item.title||"Title"),1)]),r("div",L,m(c.item.value||0),1)]),_:1},8,["class"])}}},P={class:"float-left"},R={class:"d-flex align-center justify-center pa-4"},U={class:"mx-2 text-caption"},G={__name:"JokesFavorites",setup(c){const k=J(),s=F(),d=S(""),v=()=>k.push({name:"home"}),w=N(()=>[{icon:"mdi-emoticon-happy-outline",title:"Total jokes",value:s.jokes.length,color:"text-info"},{icon:"mdi-heart-outline",title:"Total favorite jokes",value:s.favorites.length,color:"text-orange"},{icon:"mdi-thumb-up-outline",title:"Total likes jokes",value:s.likes,color:"text-green"},{icon:"mdi-thumb-down-outline",title:"Total dislike jokes",value:s.dislikes,color:"text-red"}]);return(q,n)=>{const y=l("v-icon"),p=l("v-btn"),a=l("v-col"),u=l("v-row"),C=l("v-text-field"),T=l("v-toolbar"),x=l("v-container"),V=l("v-data-iterator");return i(),f(x,null,{default:e(()=>[t(u,null,{default:e(()=>[t(a,{cols:"12",class:"text-h5 text-md-h4 text-center text-grey-darken-5 comic-neue-bold"},{default:e(()=>[r("div",P,[t(p,{variant:"tonal",onClick:n[0]||(n[0]=o=>v())},{default:e(()=>[t(y,{size:"20px"},{default:e(()=>n[2]||(n[2]=[h(" mdi-arrow-left ")])),_:1})]),_:1})]),t(a,{class:"items-center h-100"},{default:e(()=>n[3]||(n[3]=[h(" Favorites jokes page! ")])),_:1})]),_:1})]),_:1}),t(u,null,{default:e(()=>[t(a,{cols:"12"},{default:e(()=>[t(u,null,{default:e(()=>[(i(!0),b(j,null,g(w.value,o=>(i(),f(a,{cols:"12",sm:"6",lg:"3"},{default:e(()=>[t(O,{item:o},null,8,["item"])]),_:2},1024))),256))]),_:1})]),_:1}),t(a,{cols:"12"},{default:e(()=>[t(V,{items:D(s).favorites,"items-per-page":6,search:d.value,height:"80vh"},{header:e(()=>[t(u,null,{default:e(()=>[t(a,{cols:"12"},{default:e(()=>[t(T,{class:"px-2"},{default:e(()=>[t(C,{modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=o=>d.value=o),density:"comfortable",placeholder:"Search jokes for setup","prepend-inner-icon":"mdi-magnify",variant:"tonal",clearable:"","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),default:e(({items:o})=>[t(x,{class:"pa-2"},{default:e(()=>[t(u,null,{default:e(()=>[(i(!0),b(j,null,g(o,_=>(i(),f(a,{key:_.raw.setup,cols:"12",md:"6"},{default:e(()=>[t(E,{joke:_.raw},null,8,["joke"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),footer:e(({page:o,pageCount:_,prevPage:$,nextPage:z})=>[r("div",R,[t(p,{disabled:o===1,density:"comfortable",icon:"mdi-arrow-left",variant:"tonal",rounded:"",onClick:$},null,8,["disabled","onClick"]),r("div",U," Page "+m(o)+" of "+m(_),1),t(p,{disabled:o>=_,density:"comfortable",icon:"mdi-arrow-right",variant:"tonal",rounded:"",onClick:z},null,8,["disabled","onClick"])])]),_:1},8,["items","search"])]),_:1})]),_:1})]),_:1})}}};export{G as default};
