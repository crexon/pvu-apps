"use strict";(self["webpackChunkmichi_apps"]=self["webpackChunkmichi_apps"]||[]).push([[535],{535:(t,e,l)=>{l.r(e),l.d(e,{default:()=>C});var o=l(3673),a=l(2323);const n=(0,o._)("th",{class:"text-center"},"Ronda",-1),u={class:"text-center"},r={class:"text-center"},s={class:"text-center"},c={class:"text-center"},i={class:"text-center"},f=(0,o._)("strong",null,"Configuración manual",-1),d=(0,o.Uk)("Intervalos entre Grupos"),m=(0,o.Uk)("Inicio del Primer Intervalo (UTC/Servidor)");function h(t,e,l,h,p,g){const w=(0,o.up)("q-select"),I=(0,o.up)("q-btn"),_=(0,o.up)("q-card-section"),v=(0,o.up)("q-tooltip"),b=(0,o.up)("q-markup-table"),W=(0,o.up)("q-card"),G=(0,o.up)("q-item-label"),k=(0,o.up)("q-item-section"),Z=(0,o.up)("q-item"),q=(0,o.up)("q-input"),H=(0,o.up)("q-list"),V=(0,o.up)("q-drawer"),z=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,{class:"shadow-10"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"row q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"col",color:"teal",filled:"",options:t.btn,modelValue:t.filtro,"onUpdate:modelValue":e[0]||(e[0]=e=>t.filtro=e),"emit-value":"","map-options":"",label:"Grupo"},null,8,["options","modelValue"]),(0,o.Wm)(I,{class:"col",onClick:e[1]||(e[1]=e=>t.configMenu=!t.configMenu),color:"teal",icon:"settings",label:"Configuración"})])),_:1}),t.hora?((0,o.wg)(),(0,o.j4)(_,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{flat:""},{default:(0,o.w5)((()=>[(0,o._)("thead",null,[(0,o._)("tr",null,[n,(0,o._)("th",u,[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.hora.utc.fecha)+" "+(0,a.zw)(t.hora.utc.tz),1)])),_:1}),(0,o.Uk)(" "+(0,a.zw)(t.hora.utc.hora)+" (UTC) ",1)]),(0,o._)("th",r,[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.hora.local.fecha)+" "+(0,a.zw)(t.hora.local.tz),1)])),_:1}),(0,o.Uk)(" "+(0,a.zw)(t.hora.local.hora)+" (Local) ",1)])])]),(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.rondas,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:e},[(0,o._)("th",s,"# "+(0,a.zw)(e+1),1),(0,o._)("th",c,(0,a.zw)(t.utc),1),(0,o._)("th",i,(0,a.zw)(t.local),1)])))),128))])])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(V,{modelValue:t.configMenu,"onUpdate:modelValue":e[5]||(e[5]=e=>t.configMenu=e),side:"right",bordered:"",class:"bg-grey-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(G,null,{default:(0,o.w5)((()=>[f])),_:1})])),_:1})])),_:1}),(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{modelValue:t.cfgGrupos,"onUpdate:modelValue":e[2]||(e[2]=e=>t.cfgGrupos=e),outlined:"",label:"Número de Grupos",color:"teal",type:"number",min:"2",max:"24"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{modelValue:t.cfgIntervalos,"onUpdate:modelValue":e[3]||(e[3]=e=>t.cfgIntervalos=e),outlined:"",label:"Intervalo (Minutos)",color:"teal",type:"number",min:"0",max:"1440"},null,8,["modelValue"]),(0,o.Wm)(G,{caption:""},{default:(0,o.w5)((()=>[d])),_:1})])),_:1})])),_:1}),(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{modelValue:t.cfgInicio,"onUpdate:modelValue":e[4]||(e[4]=e=>t.cfgInicio=e),outlined:"",label:"Inicio (Minutos)",color:"teal",type:"number",min:"0",max:"59"},null,8,["modelValue"]),(0,o.Wm)(G,{caption:""},{default:(0,o.w5)((()=>[m])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var p=l(120),g=l.n(p),w=l(9348),I=l.n(w);g().extend(I());const _=(0,o.aZ)({name:"Horarios",data:function(){return{config:{},cfgGrupos:0,cfgIntervalos:0,cfgInicio:0,configMenu:!1,hora:null,listado:[],btn:[],filtro:1,difMinute:29,numGrupos:6}},created:async function(){let t;setInterval((()=>{t=g()(),this.hora={utc:{hora:t.utc().format("HH:mm:ss"),fecha:t.utc().format("DD/MM/YYYY"),tz:t.utc().format("Z")},local:{hora:t.local().format("HH:mm:ss"),fecha:t.local().format("DD/MM/YYYY"),tz:t.local().format("Z")}}}),1e3)},mounted:async function(){await this.$axios.get("data/horarios.json").then((t=>{this.cfgGrupos=t.data.grupos,this.cfgIntervalos=t.data.intervalos,this.cfgInicio=t.data.inicio})).catch((()=>{this.cfgGrupos=6,this.cfgIntervalos=30,this.cfgInicio=10})),this.renderHoras()},methods:{renderHoras:function(){this.listado=[];let t=g()().utc().startOf("day").add(this.cfgInicio,"minute");for(let e=0;e<24;e++){let l=e%this.cfgGrupos+1,o=t.add(e*this.cfgIntervalos,"minute");this.listado.push({grupo:l,utc:o.utc().format("HH:mm"),local:o.local().format("HH:mm")})}this.renderGrupos()},renderGrupos:function(){this.btn=[];for(let t=1;t<=this.cfgGrupos;t++)this.btn.push({label:`Grupo ${t}`,value:t})}},computed:{rondas:function(){return this.listado.filter((t=>t.grupo==this.filtro))}},watch:{cfgGrupos:function(t){this.cfgGrupos=parseInt(this.cfgGrupos),this.cfgGrupos>24&&(this.cfgGrupos=24),this.cfgGrupos<2&&(this.cfgGrupos=2),this.renderHoras()},cfgIntervalos:function(){this.cfgIntervalos=parseInt(this.cfgIntervalos),this.cfgIntervalos>1440&&(this.cfgIntervalos=1440),this.cfgIntervalos<0&&(this.cfgIntervalos=0),this.renderHoras()},cfgInicio:function(){this.cfgInicio=parseInt(this.cfgInicio),this.cfgInicio>59&&(this.cfgInicio=59),this.cfgInicio<0&&(this.cfgInicio=0),this.renderHoras()}}});var v=l(4379),b=l(151),W=l(5589),G=l(4704),k=l(4607),Z=l(481),q=l(8870),H=l(2428),V=l(7011),z=l(3414),M=l(2035),Q=l(2350),U=l(4842),x=l(7518),y=l.n(x);_.render=h;const C=_;y()(_,"components",{QPage:v.Z,QCard:b.Z,QCardSection:W.Z,QSelect:G.Z,QBtn:k.Z,QMarkupTable:Z.Z,QTooltip:q.Z,QDrawer:H.Z,QList:V.Z,QItem:z.Z,QItemSection:M.Z,QItemLabel:Q.Z,QInput:U.Z})}}]);