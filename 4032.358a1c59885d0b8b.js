"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4032],{4032:(z,m,c)=>{c.r(m),c.d(m,{ContactPageModule:()=>S});var s=c(6895),a=c(4719),i=c(1558),u=c(5012),n=c(6738),p=c(6144),_=c(9817),f=c(4662);const v=["slides"],b=function(){return{color:"gray"}};function C(o,e){if(1&o&&(n.TgZ(0,"div",16),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.Q6J("ngStyle",n.DdM(2,b)),n.xp6(1),n.hij(" caracteres ",null==t.banner||null==t.banner.__contactForm||null==t.banner.__contactForm.value||null==t.banner.__contactForm.value.message?null:t.banner.__contactForm.value.message.length," / 500")}}const w=function(o,e,t,r,l,F,I,A,J,T,U){return{"background-color":o,"font-size":e,"font-family":t,"font-weight":r,color:l,"border-color":F,"border-style":I,"border-radius":A,"border-width":J,"text-align":T,"box-shadow":U}},g=function(o){return{color:o}},h=function(o){return{"border-radius":o}};function P(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"div",5)(1,"form",6),n.NdJ("ngSubmit",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.contactSendForm(l.banner.__contactForm))}),n.TgZ(2,"p",7)(3,"span",8),n._uU(4,"*"),n.qZA(),n.TgZ(5,"span",1),n._uU(6," Nombre "),n.qZA()(),n._UZ(7,"input",9),n.TgZ(8,"p",7)(9,"span",8),n._uU(10,"*"),n.qZA(),n.TgZ(11,"span",1),n._uU(12," Correo electr\xf3nico "),n.qZA()(),n._UZ(13,"input",10),n.TgZ(14,"p",7)(15,"span",8),n._uU(16,"*"),n.qZA(),n.TgZ(17,"span",1),n._uU(18," Asunto "),n.qZA()(),n._UZ(19,"input",11),n.TgZ(20,"textarea",12),n._uU(21,"                        "),n.qZA(),n.YNc(22,C,2,3,"div",13),n.TgZ(23,"ion-button",14)(24,"ion-label"),n._uU(25," Enviar Mensaje"),n.qZA(),n._UZ(26,"ion-icon",15),n.qZA()()()}if(2&o){const t=n.oxw();n.Q6J("ngStyle",n.rFY(8,w,[t.banner.backgroundColor,t.banner.fontSize+"px",t.banner.fontFamily?t.banner.fontFamily:"YoutubeSansMedium",t.banner.fontWeight,t.banner.fontColor,t.banner.border&&"none"!=t.banner.border.style?t.banner.border.color:"",t.banner.border&&"none"!=t.banner.border.style?t.banner.border.style:"",t.banner.border.radius+"px",t.banner.border.width+"px",t.banner.textAlign,t.banner.shadowActivate?(null==t.banner?null:t.banner.shadowRight)+"px "+(null==t.banner?null:t.banner.shadowDown)+"px "+(null==t.banner?null:t.banner.shadowDisperse)+"px "+(null==t.banner?null:t.banner.shadowExpand)+"px "+((null==t.banner?null:t.banner.shadowColor)||"black"):""])),n.xp6(1),n.Q6J("formGroup",t.banner.__contactForm),n.xp6(4),n.Q6J("ngStyle",n.VKq(20,g,t.banner.fontColor)),n.xp6(6),n.Q6J("ngStyle",n.VKq(22,g,t.banner.fontColor)),n.xp6(6),n.Q6J("ngStyle",n.VKq(24,g,t.banner.fontColor)),n.xp6(3),n.Q6J("ngStyle",n.VKq(26,h,.3*t.banner.size.w+"px")),n.xp6(2),n.Q6J("ngIf",(null==t.banner||null==t.banner.__contactForm||null==t.banner.__contactForm.value||null==t.banner.__contactForm.value.message?null:t.banner.__contactForm.value.message.length)>0),n.xp6(1),n.Q6J("disabled",!(null!=t.banner.__contactForm&&t.banner.__contactForm.valid))}}function M(o,e){if(1&o&&(n.TgZ(0,"div")(1,"a",20),n._UZ(2,"img",21),n.TgZ(3,"div",22),n._uU(4),n.qZA()()()),2&o){const t=e.$implicit;n.Gre("zoom-scale social-content-item-",e.index," position-absolute z-index-1"),n.xp6(1),n.Q6J("href",t.url,n.LSH),n.xp6(1),n.Q6J("src",t.image_url,n.LSH),n.xp6(2),n.hij(" ",t.text,"")}}function x(o,e){if(1&o&&(n.TgZ(0,"ion-col",2)(1,"div",17),n._UZ(2,"ion-img",18),n.YNc(3,M,5,6,"div",19),n.qZA()()),2&o){const t=n.oxw();n.xp6(2),n.Q6J("src",t.bannerImage.image_url),n.xp6(1),n.Q6J("ngForOf",t.bannerImage.social)}}const d=function(){return{height:"4vw"}},O=[{path:"",component:(()=>{class o{constructor(t,r,l){this.formBuilder=t,this.appService=r,this.loading=l}ionViewWillEnter(){window.dispatchEvent(new CustomEvent("onChange:menuSide",{detail:{segmentInit:4}}))}ngOnInit(){this.loading.present({message:"Cargando..."}),this.appService.getAppSite().then(t=>{this.loading.dismiss(),this.initializeContact()},t=>{this.loading.dismiss()})}initializeContact(){this.banner={groupMode:!0,size:{x:347,y:642},contact:{name:""},backgroundColor:"#ffffff",fontColor:"#000000",fontSize:"13",shadowActivate:!0,shadowRight:-8,shadowDown:4,shadowDisperse:21,shadowExpand:-16},this.banner=Object.assign(this._defaultBanner("Contact"),this.banner),this.banner.__contactForm=this.formBuilder.group({name:["",a.kI.required],email:["",a.kI.required],message:["",a.kI.required],subject:["",a.kI.required]}),this.bannerImage={size:{x:114,y:105},position:{x:156,y:195},image_url:"https://res.cloudinary.com/deueufyac/image/upload/v1636592421/sublimacion/celu_blanck_ba9tw0.png"},this.bannerImage=Object.assign(this._defaultBanner("Image"),this.bannerImage),this.bannerImage.social=[{text:"Whatsapp",url:"https://",image_url:"https://res.cloudinary.com/deueufyac/image/upload/v1636595884/sublimacion/ctab_Instagram_jkve9l.png"},{text:"Instagram",url:"https://",image_url:"https://res.cloudinary.com/deueufyac/image/upload/v1636595884/sublimacion/ctab_Instagram_jkve9l.png"},{text:"Facebook",url:"https://",image_url:"https://res.cloudinary.com/deueufyac/image/upload/v1636595884/sublimacion/ctab_Instagram_jkve9l.png"},{text:"Twitter",url:"https://",image_url:"https://res.cloudinary.com/deueufyac/image/upload/v1636595884/sublimacion/ctab_Instagram_jkve9l.png"}]}_defaultBanner(t){return{id:(new Date).valueOf(),type:t,border:{style:"none"}}}contactSendForm(t){}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(a.qu),n.Y36(p.z),n.Y36(_.b))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-contact"]],viewQuery:function(t,r){if(1&t&&n.Gf(v,7),2&t){let l;n.iGM(l=n.CRH())&&(r.ionSlides=l.first)}},decls:11,vars:6,consts:[[1,"ion-no-border","padding-container"],[3,"ngStyle"],["size","12","size-md","6"],["class","p-3 m-auto contact-form",3,"ngStyle",4,"ngIf"],["size","12","size-md","6",4,"ngIf"],[1,"p-3","m-auto","contact-form",3,"ngStyle"],[3,"formGroup","ngSubmit"],[1,"d-flex","mt-1"],[2,"color","rgb(224, 62, 45)"],["formControlName","name","type","text",1,"ion-text-start","mt-1"],["formControlName","email","type","text",1,"ion-text-start","mt-1"],["formControlName","subject","type","text",1,"ion-text-start","mt-1"],["placeholder","Mensaje","type","text","rows","6","cols","20","maxlength","500","formControlName","message",1,"contact-text-area","ion-text-justify","mt-1",3,"ngStyle"],["}","",3,"ngStyle",4,"ngIf"],["color","primary","type","submit",1,"mt-1",3,"disabled"],["slot","end","name","paper-plane-outline"],["}","",3,"ngStyle"],[1,"m-auto"],[1,"social-content","z-index--1",3,"src"],[3,"class",4,"ngFor","ngForOf"],["target","_blank",3,"href"],[3,"src"],[1,"fs-1"]],template:function(t,r){1&t&&(n.TgZ(0,"ion-header",0),n._UZ(1,"ion-toolbar"),n.qZA(),n.TgZ(2,"ion-content")(3,"ion-grid"),n._UZ(4,"ion-row",1),n.TgZ(5,"ion-row")(6,"ion-col",2),n.YNc(7,P,27,28,"div",3),n.qZA(),n.YNc(8,x,4,2,"ion-col",4),n.qZA(),n._UZ(9,"ion-row",1),n.qZA(),n._UZ(10,"app-footer"),n.qZA()),2&t&&(n.xp6(4),n.Q6J("ngStyle",n.DdM(4,d)),n.xp6(3),n.Q6J("ngIf",r.banner&&r.banner.__contactForm),n.xp6(1),n.Q6J("ngIf",r.bannerImage),n.xp6(1),n.Q6J("ngStyle",n.DdM(5,d)))},dependencies:[s.sg,s.O5,s.PC,a._Y,a.Fj,a.JJ,a.JL,a.nD,a.sg,a.u,i.YG,i.wI,i.W2,i.jY,i.Gu,i.gu,i.Xz,i.Q$,i.Nd,i.sr,f.c],styles:[".social-content[_ngcontent-%COMP%]{width:35vw}.mt-1[_ngcontent-%COMP%]{margin-top:.7vw!important}.contact-form[_ngcontent-%COMP%]{background-color:#fff;border:1px solid rgba(0,0,0,.3);width:25vw;border-radius:1em}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;position:relative;top:-16px;height:3vw}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:9vw}@media screen and (max-width: 768px){.social-content[_ngcontent-%COMP%]{width:60vw;margin:7vw auto}.mt-1[_ngcontent-%COMP%]{margin-left:1.8vw!important}.contact-form[_ngcontent-%COMP%]{width:67vw}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:90%;height:7vw;top:-2vw}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:28vw}}.social-content-item-0[_ngcontent-%COMP%]{top:2vw;width:18vw;left:13vw}.social-content-item-0[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;transform:rotate(9deg);top:2.5vw;left:5vw}.social-content-item-1[_ngcontent-%COMP%]{top:9vw;width:18vw;left:11.2vw}.social-content-item-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;transform:rotate(9deg);top:2.5vw;left:5vw}.social-content-item-2[_ngcontent-%COMP%]{top:16vw;width:18vw;left:9.7vw}.social-content-item-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;transform:rotate(9deg);top:2.5vw;left:5vw}.social-content-item-3[_ngcontent-%COMP%]{top:23vw;width:18vw;left:8.2vw}.social-content-item-3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;transform:rotate(9deg);top:2.5vw;left:5vw}@media screen and (max-width: 768px){.social-content-item-0[_ngcontent-%COMP%]{top:10vw;width:31vw;left:39vw}.social-content-item-0[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{top:4vw;left:8vw}.social-content-item-1[_ngcontent-%COMP%]{top:22vw;width:31vw;left:36.5vw}.social-content-item-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{top:4vw;left:8vw}.social-content-item-2[_ngcontent-%COMP%]{top:34vw;width:31vw;left:34.1vw}.social-content-item-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{top:4vw;left:8vw}.social-content-item-3[_ngcontent-%COMP%]{top:46vw;width:31vw;left:31.5vw}.social-content-item-3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{top:4vw;left:8vw}}"]}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.Bz.forChild(O),u.Bz]}),o})();var Z=c(2777);let S=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.ez,a.u5,a.UX,i.Pc,y,Z.K]}),o})()}}]);