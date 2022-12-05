"use strict";(self["webpackChunkpas_fe"]=self["webpackChunkpas_fe"]||[]).push([[649],{4348:function(e,t,r){r.d(t,{Z:function(){return c}});var s=r(3396),l=r(7139);const a=(0,s.Uk)("Button");function o(e,t,r,o,i,n){return(0,s.wg)(),(0,s.iD)("button",{class:(0,l.C_)(["rounded",[n.getAction,n.getColor]])},[(0,s.WI)(e.$slots,"default",{},(()=>[a]))],2)}var i={name:"TheButton",props:{action:Boolean,setColor:{type:String,default:"primary"},outline:Boolean},computed:{getAction(){return this.action?"py-1 px-1":"py-2 px-4"},getColor(){let e;switch(this.setColor){case"primary":e="btn-primary";break;case"warning":e="btn-warning";break;case"error":e="btn-error";break;default:e="btn-primary";break}return e=this.outline?"text-"+e+" border-2 border-"+e:"text-white bg-"+e,e}}},n=r(89);const d=(0,n.Z)(i,[["render",o]]);var c=d},599:function(e,t,r){r.d(t,{Z:function(){return C}});var s=r(3396);const l={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},a=(0,s._)("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),o={class:"fixed inset-0 z-10 overflow-y-auto"},i={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},n={class:"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},d={class:"mx-auto flex h-20 w-20 items-center justify-center rounded-full"},c={class:"mt-3 text-center sm:mt-5"},u={class:"text-lg font-medium leading-6 text-gray-900",id:"modal-title"},m=(0,s.Uk)("Are you sure?"),h={class:"mt-2"},g={class:"text-sm text-gray-500"},p=(0,s.Uk)("You won’t be able to revert this!"),f={class:"mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"},y=(0,s.Uk)("No"),w=(0,s.Uk)("Yes");function b(e,t,r,b,x,k){const v=(0,s.up)("Icon"),_=(0,s.up)("TheButton");return(0,s.wg)(),(0,s.iD)("div",l,[a,(0,s._)("div",o,[(0,s._)("div",i,[(0,s._)("div",n,[(0,s._)("div",null,[(0,s._)("div",d,[(0,s.WI)(e.$slots,"icon",{},(()=>[(0,s.Wm)(v,{name:"exclamation-circle",class:"h-24 w-24 text-orange-300"})]))]),(0,s._)("div",c,[(0,s._)("h3",u,[(0,s.WI)(e.$slots,"title",{},(()=>[m]))]),(0,s._)("div",h,[(0,s._)("p",g,[(0,s.WI)(e.$slots,"description",{},(()=>[p]))])])])]),(0,s._)("div",f,[(0,s.Wm)(_,{outline:"","set-color":"error",onClick:t[0]||(t[0]=t=>e.$emit("confirm","no"))},{default:(0,s.w5)((()=>[y])),_:1}),(0,s.Wm)(_,{"set-color":"primary",onClick:t[1]||(t[1]=t=>e.$emit("confirm","yes"))},{default:(0,s.w5)((()=>[w])),_:1})])])])])])}var x=r(97),k=r(4348),v={name:"TheModal",components:{Icon:x.Z,TheButton:k.Z}},_=r(89);const D=(0,_.Z)(v,[["render",b]]);var C=D},7649:function(e,t,r){r.r(t),r.d(t,{default:function(){return ke}});var s=r(3396),l=r(9242);const a=(0,s.Uk)("Daftar Sekolah"),o=(0,s.Uk)("Tambah Sekolah"),i=(0,s.Uk)("Detail"),n=(0,s.Uk)("Edit"),d=(0,s.Uk)("Delete");function c(e,t,r,c,u,m){const h=(0,s.up)("Button"),g=(0,s.up)("router-link"),p=(0,s.up)("TheTable"),f=(0,s.up)("v-container"),y=(0,s.up)("TheModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(f,null,{title:(0,s.w5)((()=>[a])),content:(0,s.w5)((()=>[(0,s.Wm)(p,{rows:u.dataTable,column:u.headerTable,ref:"table"},{"nav-right":(0,s.w5)((()=>[(0,s.Wm)(g,{to:"/schools/create"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[o])),_:1})])),_:1})])),default:(0,s.w5)((e=>[(0,s.Wm)(h,{onClick:t=>m.goTo("detail",e.id),class:"mx-0.5",action:""},{default:(0,s.w5)((()=>[i])),_:2},1032,["onClick"]),(0,s.Wm)(h,{onClick:t=>m.goTo("edit",e.id),class:"mx-0.5","set-color":"warning",action:""},{default:(0,s.w5)((()=>[n])),_:2},1032,["onClick"]),(0,s.Wm)(h,{onClick:t=>m.goTo("delete",e.id),class:"mx-0.5","set-color":"error",action:""},{default:(0,s.w5)((()=>[d])),_:2},1032,["onClick"])])),_:1},8,["rows","column"])])),_:1}),(0,s.wy)((0,s.Wm)(y,{"set-type":"confirm",class:"w-[425px]",onConfirm:m.confirmHandle},null,8,["onConfirm"]),[[l.F8,u.isShowModal]])],64)}var u=r(7139);const m={class:"flex items-center my-2"},h={class:"relative"},g=(0,s._)("label",{for:"search_school",class:"hidden"},"Search School",-1),p={class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},f=["placeholder"],y=(0,s.Uk)("Cari"),w={class:"sm:flex sm:items-center justify-between px-1"},b={class:"flex justify-center items-center space-x-2"},x=(0,s._)("div",null,"Show",-1),k=(0,s._)("option",{value:"10"},"10",-1),v=(0,s._)("option",{value:"20"},"20",-1),_=(0,s._)("option",{value:"50"},"50",-1),D=(0,s._)("option",{value:"100"},"100",-1),C=[k,v,_,D],S=(0,s._)("div",null,"entries",-1),W={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},T={class:"mt-2 flex flex-col"},z={class:""},U={class:"inline-block min-w-full py-2 align-middle md:px-1 lg:px-1"},P={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-sm"},$={class:"min-w-full divide-y divide-gray-300"},A={class:"bg-gray-50"},Z={key:0,scope:"col",class:"px-4 py-3.5 text-left text-sm font-semibold text-gray-900"},B={class:"flex space-x-2 items-center bg-center"},H={key:0},I={key:0,class:"divide-y divide-gray-200 bg-white"},M={key:0,class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900"},Y={key:1,class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900"},j={key:1,class:"divide-y divide-gray-200 bg-white"},N=["colspan"],K={class:"flex items-center justify-between bg-white py-3 px-1"},O=(0,s._)("div",{class:"flex flex-1 justify-between sm:hidden"},[(0,s._)("a",{href:"#",class:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},"Previous"),(0,s._)("a",{href:"#",class:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},"Next")],-1),q={class:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"},L={class:"text-sm text-gray-700"},R=(0,s.Uk)(" Showing "),E={class:"font-medium"},F=(0,s.Uk)(" to "),V={class:"font-medium"},G=(0,s.Uk)(" of "),J={class:"font-medium"},Q=(0,s.Uk)(" results "),X={class:"isolate inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination"},ee={class:"relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"},te=(0,s._)("span",{class:"sr-only"},"Previous",-1),re={key:0,class:"relative h-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 z-10"},se=["onClick"],le=(0,s._)("span",{class:"sr-only"},"First",-1),ae=["onClick"],oe=(0,s._)("span",{class:"sr-only"},"Next",-1),ie={key:3,class:"relative h-10 inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-text"},ne=["onClick"],de=(0,s._)("span",{class:"sr-only"},"Last",-1);function ce(e,t,r,a,o,i){const n=(0,s.up)("Icon"),d=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",m,[(0,s._)("div",h,[g,(0,s._)("div",p,[(0,s.Wm)(n,{name:"search",class:"h-3.5 w-4 stroke-primary"})]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.keyword=e),onKeyup:t[1]||(t[1]=(0,l.D2)((e=>i.getDataSearch()),["enter"])),class:"w-['229px'] h-9 py-2.5 pl-9 pr-2 mr-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500",placeholder:`Cari ${o.title}`,type:"search"},null,40,f),[[l.nr,o.keyword]])]),(0,s._)("div",null,[(0,s.Wm)(d,{onClick:t[2]||(t[2]=e=>i.getDataSearch())},{default:(0,s.w5)((()=>[y])),_:1})])]),(0,s._)("div",w,[(0,s._)("div",b,[x,(0,s.wy)((0,s._)("select",{onClick:t[3]||(t[3]=e=>i.getData()),"onUpdate:modelValue":t[4]||(t[4]=e=>o.perPage=e),id:"countries",class:"bg-gray-50 border w-16 py-2 px-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"},C,512),[[l.bM,o.perPage]]),S]),(0,s._)("div",W,[(0,s.WI)(e.$slots,"nav-right")])]),(0,s._)("div",T,[(0,s._)("div",z,[(0,s._)("div",U,[(0,s._)("div",P,[(0,s._)("table",$,[(0,s._)("thead",A,[(0,s._)("tr",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.headers,((e,t)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:t},["undefined"===typeof e.show||e?.show?((0,s.wg)(),(0,s.iD)("th",Z,[(0,s._)("div",B,[(0,s._)("span",null,(0,u.zw)(e.title),1),"action"!==e?.key?((0,s.wg)(),(0,s.iD)("span",H,["undefined"!==typeof e?.sort?((0,s.wg)(),(0,s.j4)(n,{key:0,onClick:r=>i.getDataSort(t,e.key),name:"ASC"===o.headers[t].sort?"chevron-down":"chevron-up",class:"h-4 w-4 cursor-pointer"},null,8,["onClick","name"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])])):(0,s.kq)("",!0)],64)))),128))])]),o.items.length>0?((0,s.wg)(),(0,s.iD)("tbody",I,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.items,((t,r)=>((0,s.wg)(),(0,s.iD)("tr",{key:r},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.headers,((r,l)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:l},["undefined"!==typeof r.show&&!r?.show||"action"===r?.key?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("td",M,(0,u.zw)(t[r.key]),1)),"undefined"!==typeof r.key&&"action"===r?.key?((0,s.wg)(),(0,s.iD)("td",Y,[(0,s.WI)(e.$slots,"default",{id:t.id})])):(0,s.kq)("",!0)],64)))),128))])))),128))])):((0,s.wg)(),(0,s.iD)("tbody",j,[(0,s._)("tr",null,[(0,s._)("td",{class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center",colspan:o.headers.length-1}," No Data ",8,N)])]))])])])])]),(0,s._)("div",K,[O,(0,s._)("div",q,[(0,s._)("div",null,[(0,s._)("p",L,[R,(0,s._)("span",E,(0,u.zw)(o.fulldata.from),1),F,(0,s._)("span",V,(0,u.zw)(o.fulldata.to),1),G,(0,s._)("span",J,(0,u.zw)(o.fulldata.total),1),Q])]),(0,s._)("div",null,[(0,s._)("nav",X,[(0,s._)("div",ee," Page "+(0,u.zw)(o.fulldata.current_page)+" of "+(0,u.zw)(o.fulldata.last_page),1),(0,s._)("a",{href:"#",onClick:t[5]||(t[5]=(0,l.iM)((e=>i.getData(o.fulldata.first_page_url)),["prevent"])),class:"relative h-10 inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"},[te,(0,s.Wm)(n,{name:"chevron-double-left",class:"h-4 w-4"})]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.links,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[e.label==o.fulldata.current_page?((0,s.wg)(),(0,s.iD)("div",re,(0,u.zw)(e.label),1)):"pagination.previous"==e.label?((0,s.wg)(),(0,s.iD)("div",{key:1,onClick:t=>i.getData(e.url),href:"#",class:"relative h-10 inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer"},[le,(0,s.Wm)(n,{name:"chevron-left",class:"h-4 w-4"})],8,se)):"pagination.next"==e.label?((0,s.wg)(),(0,s.iD)("div",{key:2,onClick:t=>i.getData(e.url),href:"#",class:"relative h-10 inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer"},[oe,(0,s.Wm)(n,{name:"chevron-right",class:"h-4 w-4"})],8,ae)):"..."==e.label?((0,s.wg)(),(0,s.iD)("div",ie,(0,u.zw)(e.label),1)):((0,s.wg)(),(0,s.iD)("div",{key:4,onClick:t=>i.getData(e.url),class:"relative h-10 inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer"},(0,u.zw)(e.label),9,ne))])))),128)),(0,s._)("a",{href:"#",onClick:t[6]||(t[6]=(0,l.iM)((e=>i.getData(o.fulldata.last_page_url)),["prevent"])),class:"relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"},[de,(0,s.Wm)(n,{name:"chevron-double-right",class:"h-4 w-4"})])])])])])],64)}var ue=r(4348),me=r(97),he=r(65),ge={name:"TheTable",data(){return{fulldata:{from:0,to:0,total:0,current_page:0,last_page:0,first_page_url:null},token:(0,he.oR)().getters["auth/getToken"],title:this.rows.title,items:[],headers:this.column,links:[],perPage:10,keyword:this.rows.keyword,sort:this.rows.sort,sortOrder:this.rows.sortOrder,url:this.rows.url}},props:{rows:Object,column:Array},components:{Button:ue.Z,Icon:me.Z},methods:{getData(e=null){null!==e&&(this.url=e);let t={perPage:this.perPage,keyword:this.keyword,sort:this.sort,sortOrder:this.sortOrder};const r={headers:{Authorization:`Bearer ${this.token}`}};this.axios.post(this.url,t,r).then((e=>{this.fulldata=e.data,this.items=e.data.data,this.links=e.data.links})).catch(console.log)},getDataSearch(){this.getData(this.url)},getDataSort(e){const t="ASC"==this.headers[e].sort?"DESC":"ASC";this.headers[e].sort=t,this.sort=this.headers[e].key,this.sortOrder=t,this.getData()}},created(){this.url="http://8.215.34.112:8081"+this.rows.url,this.getData()}},pe=r(89);const fe=(0,pe.Z)(ge,[["render",ce]]);var ye=fe,we=r(599),be={name:"SchoolList",data(){return{id:null,isShowModal:!1,suffixURL:"/school",dataTable:{perPage:10,keyword:null,sort:"NPSN",sortOrder:"ASC",url:"/school/table",title:"Sekolah"},headerTable:[{title:"NPSN",key:"npsn",sort:"ASC"},{title:"Nama Sekolah",key:"name",sort:"ASC"},{title:"Kab/Kota",key:"city"},{title:"Provinsi",key:"province"},{title:"Kode Pos",key:"postal_code"},{title:"Alamat",key:"address"},{title:"Aksi",key:"action"}]}},components:{TheTable:ye,Button:ue.Z,TheModal:we.Z},methods:{confirmHandle(e){if(this.isShowModal=!1,"yes"===e){const t="http://8.215.34.112:8081"+this.suffixURL+"/"+this.id;this.axios.delete(t).then((e=>{this.$refs.table.getData(),console.log(e),console.log(this.$refs.table)})).catch(console.log),console.log(e)}},goTo(e,t){switch(e){case"detail":this.$router.push("/schools/"+t+"/detail");break;case"edit":this.$router.push("/schools/"+t+"/edit");break;case"delete":this.isShowModal=!0,this.id=t;break;default:break}console.log(t)}}};const xe=(0,pe.Z)(be,[["render",c]]);var ke=xe}}]);
//# sourceMappingURL=649.f4c58a4a.js.map