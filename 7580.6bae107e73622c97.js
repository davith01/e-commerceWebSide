"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7580],{7580:(L,g,s)=>{s.r(g),s.d(g,{ServicesListPageModule:()=>M});var c=s(6895),m=s(4719),a=s(1558),l=s(5012),e=s(6738),d=s(2216),u=s(7221),p=s(529),v=s(6289);let h=(()=>{class t{constructor(i,n){this.http=i,this.storage=n,this.apiUrl="https://www.google.com/?hl=es",this.services=[]}getServices(){return new Promise((i,n)=>{this.http.get(this.apiUrl).pipe((0,d.V)(6e4),(0,u.K)(o=>{throw console.log(o),o.status&&o.statusText&&o.statusText.indexOf("Gateway Timeout")>=0?new Error("No est\xe1 conectado a internet"):o.status&&o.statusText?new Error(`Consultando el servicio de configuraci\xf3n de la app: ${o.status} - ${o.statusText}`):new Error("Consultando el servicio de configuraci\xf3n de la app")})).subscribe(o=>{i(o)},o=>{n(o)})})}mockServices(){return[{id:1,name:"Evaluaci\xf3n de donadoras y receptoras",url_image:"https://invitrocolombia.com.co/wp-content/uploads/2021/03/DSC_0047-1024x683.jpg"},{id:2,name:"Sincronizaci\xf3n de receptoras",url_image:"https://invitrocolombia.com.co/wp-content/uploads/2021/03/DSC_0227-1024x683.jpg"},{id:3,name:"Aspiraci\xf3n folicular",url_image:"https://invitrocolombia.com.co/wp-content/uploads/2021/03/aspira1-2-1024x683.jpg"},{id:4,name:"Fertilizaci\xf3n In vitro (FIV)",url_image:"https://invitrocolombia.com.co/wp-content/uploads/2021/03/101-1-1024x683.jpg"},{id:5,name:"Transferencia de embriones",url_image:"https://invitrocolombia.com.co/wp-content/uploads/2021/03/fotoslab5-1024x615.jpg"},{id:6,name:"Diagn\xf3stico de gestaci\xf3n y entrega de pre\xf1eces",url_image:"https://invitrocolombia.com.co/wp-content/uploads/2021/03/FullSizeRender16-768x554.jpg"},{id:7,name:"Venta de gen\xe9tica",url_image:"https://invitrocolombia.com.co/wp-content/uploads/2021/03/congelacion-1024x683.jpg"}]}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(p.eN),e.LFG(v.Ke))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=s(4662);const P=function(t,r,i){return{"pr-1":t,"pl-1":r,"pt-1":i}};function S(t,r){if(1&t&&(e.TgZ(0,"ion-col",9)(1,"div",10),e._uU(2),e.qZA(),e._UZ(3,"img",11),e.qZA()),2&t){const i=r.$implicit,n=r.index,o=e.oxw();e.Q6J("size",o.largeScreen?0==n||1==n||5==n||6==n?6:2==n||3==n||4==n||7==n||8==n||9==n?4:12:12),e.xp6(2),e.Oqu(i.name),e.xp6(1),e.Q6J("src",i.url_image,e.LSH)("ngClass",e.kEZ(4,P,o.largeScreen&&(0==n||2==n||3==n||5==n||7==n||8==n),o.largeScreen&&(1==n||3==n||4==n||6==n||8==n||9==n),o.largeScreen&&n>=2||!o.largeScreen&&n>0))}}const b=function(t){return{"background-image":t}},w=[{path:"",component:(()=>{class t{constructor(i){this.servicesApi=i,this.largeScreen=window.innerWidth>=768,this.banner={url:"https://invitrocolombia.com.co/wp-content/uploads/2021/03/DSC_0045-1-1024x683.jpg",description:"Duis mollis, est non commodo luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",title:"Nuestros servicios",footer:"Duis molestie"}}ngOnInit(){this.services=this.servicesApi.mockServices()}onResize(i){this.largeScreen=i.target.innerWidth>=768}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-services-list"]],hostBindings:function(i,n){1&i&&e.NdJ("resize",function(x){return n.onResize(x)},!1,e.Jf7)},decls:16,vars:8,consts:[[1,"ion-no-border","padding-container"],[1,"padding-container"],[1,"banner-image"],[1,"banner-image-title","fs-3","mt-4"],[1,"banner-image-desc","fs-1","mt-2"],[1,"banner-image-footer","fs-0","mt-1","pl-6"],[1,"mt-2","p-0"],[1,"services-section","p-0"],[3,"size",4,"ngFor","ngForOf"],[3,"size"],[1,"title","fs-2","mt-4"],[1,"service-img",3,"src","ngClass"]],template:function(i,n){1&i&&(e.TgZ(0,"ion-header",0),e._UZ(1,"ion-toolbar"),e.qZA(),e.TgZ(2,"ion-content")(3,"div",1)(4,"ion-row")(5,"div",2)(6,"div",3),e._uU(7),e.qZA(),e.TgZ(8,"div",4),e._uU(9),e.qZA(),e.TgZ(10,"div",5),e._uU(11),e.qZA()()(),e.TgZ(12,"ion-grid",6)(13,"ion-row",7),e.YNc(14,S,4,8,"ion-col",8),e.qZA()()(),e._UZ(15,"app-footer"),e.qZA()),2&i&&(e.xp6(5),e.Akn(e.VKq(6,b,"url("+n.banner.url+")")),e.xp6(2),e.Oqu(n.banner.title),e.xp6(2),e.Oqu(n.banner.description),e.xp6(2),e.Oqu(n.banner.footer),e.xp6(3),e.Q6J("ngForOf",n.services))},dependencies:[c.mk,c.sg,a.wI,a.W2,a.jY,a.Gu,a.Nd,a.sr,f.c],styles:[".banner-image[_ngcontent-%COMP%]{height:30vw!important;width:100%!important;background-repeat:no-repeat;background-size:auto;background-size:100% 100%;text-align:center}.banner-image[_ngcontent-%COMP%]   .banner-image-title[_ngcontent-%COMP%], .banner-image[_ngcontent-%COMP%]   .banner-image-footer[_ngcontent-%COMP%], .banner-image[_ngcontent-%COMP%]   .banner-image-desc[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast);font-family:YoutubeSansLight}.banner-image[_ngcontent-%COMP%]   .banner-image-desc[_ngcontent-%COMP%]{width:50%;margin:auto}.banner-image[_ngcontent-%COMP%]   .banner-image-title[_ngcontent-%COMP%]{font-family:YoutubeSansBold}@media (max-width: 1200px){.banner-image[_ngcontent-%COMP%]   .banner-image-desc[_ngcontent-%COMP%]{width:70%}}.services-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast);font-family:YoutubeSansBold;position:relative;z-index:2;cursor:pointer;top:0;width:56%;margin:auto;padding-bottom:.5vw;border-bottom:.2vw solid white}.services-section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:1vw;height:18vw;text-align:center}.services-section[_ngcontent-%COMP%]   .service-img[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100vw;height:18vw;opacity:1;max-width:100%;filter:brightness(.7)}@media (max-width: 768px){.services-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:50%}.services-section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%], .services-section[_ngcontent-%COMP%]   .service-img[_ngcontent-%COMP%]{height:33vw;width:90%;margin-left:2.5%}}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(w),l.Bz]}),t})();var O=s(2777);let M=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,m.u5,a.Pc,C,O.K]}),t})()}}]);