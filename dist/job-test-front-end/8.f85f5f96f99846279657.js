(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QXhw:function(t,e,i){"use strict";i.r(e),i.d(e,"Test4Module",function(){return a});var n=i("ofXK"),c=i("tyNb"),o=i("fXoL"),b=i("3Pt+"),r=i("hsfS");const s=[{path:"",component:(()=>{class t{constructor(t,e){this.fb=t,this.httpService=e,this.fromData=this.fb.group({citizen_id:[null]}),this.status="\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a"}get input(){return{citizen_id:this.fromData.value.citizen_id?this.fromData.value.citizen_id:null}}ngOnInit(){}checkCitizenId(){try{this.status="\u0e01\u0e33\u0e25\u0e31\u0e07\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a...",this.httpService.get("https://job-test.suwananpoedpong.repl.co/citizenid",this.input).subscribe(t=>{this.status="\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a",console.log("check",t),this.output=t})}catch(t){console.error(t)}}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(b.b),o.Jb(r.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-test4"]],decls:21,vars:8,consts:[[3,"formGroup"],[1,"row"],[1,"col-lg-2","text-right"],[1,"col-lg-10"],["type","text","formControlName","citizen_id",1,"w-100"],[1,"col-lg-12","mt-5","text-center"],["type","button",1,"btn","btn-outline-primary","w-25",3,"click"],[1,"mt-3"],[1,"border"]],template:function(t,e){1&t&&(o.Mb(0,"form",0),o.Mb(1,"div",1),o.Mb(2,"div",2),o.Mb(3,"label"),o.ec(4,"citizen_id "),o.Lb(),o.Lb(),o.Mb(5,"div",3),o.Kb(6,"input",4),o.Lb(),o.Mb(7,"div",5),o.Mb(8,"button",6),o.Tb("click",function(){return e.checkCitizenId()}),o.ec(9),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(10,"div",7),o.Mb(11,"h4"),o.ec(12,"Input"),o.Lb(),o.Mb(13,"div",8),o.ec(14),o.Wb(15,"json"),o.Lb(),o.Mb(16,"h4"),o.ec(17,"Output"),o.Lb(),o.Mb(18,"div",8),o.ec(19),o.Wb(20,"json"),o.Lb(),o.Lb()),2&t&&(o.Yb("formGroup",e.fromData),o.zb(9),o.gc(" ",e.status," "),o.zb(5),o.gc(" ",o.Xb(15,4,e.input)," "),o.zb(5),o.gc(" ",o.Xb(20,6,e.output)," "))},directives:[b.j,b.g,b.d,b.a,b.f,b.c],pipes:[n.e],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({imports:[[c.c.forChild(s)],c.c]}),t})();var p=i("f/4E");let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({imports:[[n.b,u,p.a]]}),t})()}}]);