import{a as be,b as fe}from"./chunk-GIV5TJFX.js";import{a as ve}from"./chunk-LMC3TDFT.js";import{b as oe,c as le,d as se,e as ce,h as de,k as me,l as pe,m as ue,o as he,u as ge}from"./chunk-NIX56OHX.js";import{a as x,b as ye}from"./chunk-CQF3O75Q.js";import{$ as o,C as L,Ea as k,G as T,Gd as ae,I as G,Ia as w,Ja as I,Jb as z,P as d,Pa as i,Q as m,Qa as F,Ra as D,Sa as V,Sd as re,T as J,Xc as ee,Ya as H,Za as U,cc as Y,da as B,dd as te,ed as ie,fd as ne,ia as A,ib as O,kb as j,lc as q,na as f,nb as W,qc as K,tc as Q,uc as Z,va as N,vc as $,wa as P,xa as e,xc as X,ya as t,za as n}from"./chunk-E6NPD3YY.js";import{a as y,e as S,f as C,g as E}from"./chunk-ZG7TN3SX.js";var Se=(()=>{let r=class r{constructor(){this.mainChart={type:"line"},this.initMainChart()}random(l,s){return Math.floor(Math.random()*(s-l+1)+l)}initMainChart(l="Month"){let s=x("--cui-success")??"#4dbd74",v=x("--cui-info")??"#20a8d8",b=ye(x("--cui-info")??"#20a8d8",10),_=x("--cui-danger")??"#f86c6b";this.mainChart.elements=l==="Month"?12:27,this.mainChart.Data1=[],this.mainChart.Data2=[],this.mainChart.Data3=[];for(let g=0;g<=this.mainChart.elements;g++)this.mainChart.Data1.push(this.random(50,240)),this.mainChart.Data2.push(this.random(20,160)),this.mainChart.Data3.push(65);let c=[];if(l==="Month")c=["January","February","March","April","May","June","July","August","September","October","November","December"];else{let g=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];c=g.concat(g,g,g)}let h=[{backgroundColor:b,borderColor:v,pointHoverBackgroundColor:v,borderWidth:2,fill:!0},{backgroundColor:"transparent",borderColor:s||"#4dbd74",pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:_||"#f86c6b",pointHoverBackgroundColor:_,borderWidth:1,borderDash:[8,5]}],u=[y({data:this.mainChart.Data1,label:"Current"},h[0]),y({data:this.mainChart.Data2,label:"Previous"},h[1]),y({data:this.mainChart.Data3,label:"BEP"},h[2])],M={legend:{display:!1},tooltip:{callbacks:{labelColor:g=>({backgroundColor:g.dataset.borderColor})}}},R=this.getScales(),xe={maintainAspectRatio:!1,plugins:M,scales:R,elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};this.mainChart.type="line",this.mainChart.options=xe,this.mainChart.data={datasets:u,labels:c}}getScales(){let l=x("--cui-border-color-translucent"),s=x("--cui-body-color");return{x:{grid:{color:l,drawOnChartArea:!1},ticks:{color:s}},y:{border:{color:l},grid:{color:l},max:250,beginAtZero:!0,ticks:{color:s,maxTicksLimit:5,stepSize:Math.ceil(250/5)}}}}};r.\u0275fac=function(s){return new(s||r)},r.\u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"any"});let p=r;return p})();var Ee=(p,r)=>r.name,we=()=>({"marginTop.px":40});function Me(p,r){if(p&1&&(e(0,"tr")(1,"td",83),n(2,"c-avatar",84),t(),e(3,"td")(4,"div"),i(5),t(),e(6,"div",85)(7,"span"),i(8),t()()(),e(9,"td",83),d(),n(10,"svg",86),t(),m(),e(11,"td")(12,"div",87)(13,"div",88)(14,"strong"),i(15),t()(),e(16,"div",89)(17,"small",17),i(18),t()()(),n(19,"c-progress",90),t(),e(20,"td",83),d(),n(21,"svg",91),t(),m(),e(22,"td")(23,"div",3),i(24,"Last login"),t(),e(25,"div",92),i(26),t()()()),p&2){let a=r.$implicit;o(2),w("src",a.avatar),w("status",a.status),f("size","md"),o(3),F(a.name),o(3),V(" ",a.state," | Registered: ",a.registered," "),o(2),w("id",a.country+a.name),I("name","cif",a.country,""),w("title",a.country),o(5),D("",a.usage,"%"),o(3),D(" ",a.period," "),o(),w("color",a.color),f("value",a.usage),o(2),I("name","cibCc",a.payment,""),o(5),F(a.activity)}}var Ue=(()=>{var r,a,l,s,v;let b=class b{constructor(){C(this,r,void 0);C(this,a,void 0);C(this,l,void 0);C(this,s,void 0);C(this,v,void 0);E(this,r,T(J)),E(this,a,T(j)),E(this,l,T(B)),E(this,s,T(Se)),this.users=[{name:"Yiorgos Avraamu",state:"New",registered:"Jan 1, 2021",country:"Us",usage:50,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Mastercard",activity:"10 sec ago",avatar:"./assets/images/avatars/1.jpg",status:"success",color:"success"},{name:"Avram Tarasios",state:"Recurring ",registered:"Jan 1, 2021",country:"Br",usage:10,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Visa",activity:"5 minutes ago",avatar:"./assets/images/avatars/2.jpg",status:"danger",color:"info"},{name:"Quintin Ed",state:"New",registered:"Jan 1, 2021",country:"In",usage:74,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Stripe",activity:"1 hour ago",avatar:"./assets/images/avatars/3.jpg",status:"warning",color:"warning"},{name:"En\xE9as Kwadwo",state:"Sleep",registered:"Jan 1, 2021",country:"Fr",usage:98,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Paypal",activity:"Last month",avatar:"./assets/images/avatars/4.jpg",status:"secondary",color:"danger"},{name:"Agapetus Tade\xE1\u0161",state:"New",registered:"Jan 1, 2021",country:"Es",usage:22,period:"Jun 11, 2021 - Jul 10, 2021",payment:"ApplePay",activity:"Last week",avatar:"./assets/images/avatars/5.jpg",status:"success",color:"primary"},{name:"Friderik D\xE1vid",state:"New",registered:"Jan 1, 2021",country:"Pl",usage:43,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Amex",activity:"Yesterday",avatar:"./assets/images/avatars/6.jpg",status:"info",color:"dark"}],this.mainChart={type:"line"},this.mainChartRef=A(void 0),E(this,v,O(()=>{this.mainChartRef()&&this.setChartStyles()})),this.chart=[],this.trafficRadioGroup=new ce({trafficRadio:new de("Month")})}ngOnInit(){this.initCharts(),this.updateChartOnColorModeChange()}initCharts(){this.mainChart=S(this,s).mainChart}setTrafficPeriod(c){this.trafficRadioGroup.setValue({trafficRadio:c}),S(this,s).initMainChart(c),this.initCharts()}handleChartRef(c){c&&this.mainChartRef.set(c)}updateChartOnColorModeChange(){let c=S(this,l).listen(S(this,a).documentElement,"ColorSchemeChange",()=>{this.setChartStyles()});S(this,r).onDestroy(()=>{c()})}setChartStyles(){this.mainChartRef()&&setTimeout(()=>{let c=y({},this.mainChart.options),h=S(this,s).getScales();this.mainChartRef().options.scales=y(y({},c.scales),h),this.mainChartRef().update()})}};r=new WeakMap,a=new WeakMap,l=new WeakMap,s=new WeakMap,v=new WeakMap,b.\u0275fac=function(h){return new(h||b)},b.\u0275cmp=G({type:b,selectors:[["ng-component"]],standalone:!0,features:[H],decls:254,vars:17,consts:[[1,"my-4"],["sm","5"],["id","traffic",1,"card-title","mb-0"],[1,"small","text-body-secondary"],["sm","7",1,"d-none","d-md-block"],["cButton","","color","primary","aria-label","Download",1,"float-end"],["cIcon","","name","cilCloudDownload"],[3,"formGroup"],["role","group",1,"float-end","me-3"],["formControlName","trafficRadio","type","radio","value","Day","id","dayRadio",1,"btn-check"],["cButton","","cFormCheckLabel","","color","secondary","variant","outline","for","dayRadio",3,"click"],["formControlName","trafficRadio","type","radio","value","Month","id","radioMonth",1,"btn-check"],["cButton","","cFormCheckLabel","","color","secondary","variant","outline","for","radioMonth",3,"click"],["formControlName","trafficRadio","type","radio","value","Year","id","radioYear",1,"btn-check"],["cButton","","cFormCheckLabel","","color","secondary","variant","outline","for","radioYear",3,"click"],[3,"chartRef","data","height","ngStyle","options","type"],[1,"text-center","mb-2",3,"xl","lg","sm","xs","gutter"],[1,"text-body-secondary"],["thin","","color","success","value","40","aria-label","User visits",1,"mt-2"],[1,"fw-semibold","text-truncate"],["thin","","color","info","value","20","aria-label","Unique users",1,"mt-2"],["thin","","color","warning","value","60","aria-label","Page views",1,"mt-2"],["thin","","color","danger","value","80","aria-label","New users",1,"mt-2"],[1,"d-none","d-xl-block"],["thin","","value","40","aria-label","Bounce rate",1,"mt-2"],[3,"withCharts"],[1,"mt-4"],["xs",""],[1,"mb-4"],["md","6","xl","6","xs","12"],["xs","6"],[1,"border-start","border-start-4","border-start-info","py-1","px-3","mb-3"],[1,"text-body-secondary","text-truncate","small"],[1,"fs-5","fw-semibold"],[1,"border-start","border-start-4","border-start-danger","py-1","px-3","mb-3"],[1,"mt-0"],[1,"progress-group","mb-4"],[1,"progress-group-prepend"],[1,"text-body-secondary","small"],[1,"progress-group-bars"],["thin","","color","info","value","34","aria-label","Monday new clients"],["thin","","color","danger","value","78","aria-label","Monday recurring clients"],["thin","","color","info","value","56","aria-label","Tuesday new clients"],["thin","","color","danger","value","94","aria-label","Tuesday recurring clients"],["thin","","color","info","value","12","aria-label","Wednesday new clients"],["thin","","color","danger","value","67","aria-label","Wednesday recurring clients"],["thin","","color","info","value","43","aria-label","Thursday new clients"],["thin","","color","danger","value","91","aria-label","Thursday recurring clients"],["thin","","color","info","value","22","aria-label","Friday new clients"],["thin","","color","danger","value","73","aria-label","Friday recurring clients"],["thin","","color","info","value","53","aria-label","Saturday new clients"],["thin","","color","danger","value","82","aria-label","Saturday recurring clients"],["thin","","color","info","value","9","aria-label","Sunday new clients"],["thin","","color","danger","value","69","aria-label","Sunday recurring clients"],[1,"legend","text-center","d-none","d-md-block"],[1,"badge","badge-pill","badge-sm","bg-info"],[1,"badge","badge-pill","badge-sm","bg-danger"],[1,"border-start","border-start-4","border-start-warning","py-1","px-3","mb-3"],[1,"border-start","border-start-4","border-start-success","py-1","px-3","mb-3"],[1,"progress-group-header"],["cIcon","","name","cilUser",1,"icon","icon-lg","me-2"],[1,"ms-auto","font-semibold"],["thin","","color","warning","value","43","aria-label","Male users"],[1,"progress-group","mb-5"],["cIcon","","name","cilUserFemale",1,"icon","icon-lg","me-2"],["thin","","color","warning","value","37","aria-label","Feale users"],[1,"progress-group"],["cIcon","","name","cibGoogle",1,"icon","icon-lg","me-2"],["thin","","color","success","value","56","aria-label","Organic search"],["cIcon","","name","cibFacebook",1,"icon","icon-lg","me-2"],["thin","","color","success","value","15","aria-label","Facebook"],["cIcon","","name","cibTwitter",1,"icon","icon-lg","me-2"],["thin","","color","success","value","11","aria-label","Twitter"],["cIcon","","name","cibLinkedin",1,"icon","icon-lg","me-2"],["thin","","color","success","value","8","aria-label","LinkedIn"],[1,"divider","d-flex","justify-content-center"],["cButton","","color","transparent","size","sm","type","button","aria-label","Options",1,"text-muted","btn-link"],["cIcon","","name","cil-options"],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","striped"],[1,"text-nowrap","text-truncate"],[1,"bg-body-tertiary","text-center"],["cIcon","","name","cilPeople"],[1,"bg-body-tertiary"],[1,"text-center"],[3,"size","src","status"],[1,"small","text-body-secondary","text-nowrap"],["cIcon","","size","xl",3,"id","name","title"],[1,"d-flex","justify-content-between"],[1,"float-start"],[1,"float-end","ms-1","text-nowrap"],["thin","","aria-label","Usage",3,"value","color"],["cIcon","","size","xl",3,"name"],[1,"fw-semibold","text-nowrap"]],template:function(h,u){h&1&&(n(0,"app-widgets-dropdown"),e(1,"c-card",0)(2,"c-card-body")(3,"c-row")(4,"c-col",1)(5,"h4",2),i(6,"Traffic"),t(),e(7,"div",3),i(8,"January - December 2023"),t()(),e(9,"c-col",4)(10,"button",5),d(),n(11,"svg",6),t(),m(),e(12,"form",7)(13,"c-button-group",8),n(14,"input",9),e(15,"label",10),k("click",function(){return u.setTrafficPeriod("Day")}),i(16," Day "),t(),n(17,"input",11),e(18,"label",12),k("click",function(){return u.setTrafficPeriod("Month")}),i(19," Month "),t(),n(20,"input",13),e(21,"label",14),k("click",function(){return u.setTrafficPeriod("Year")}),i(22," Year "),t()()()()(),e(23,"c-chart",15),k("chartRef",function(R){return u.handleChartRef(R)}),i(24," Main chart "),t()(),e(25,"c-card-footer")(26,"c-row",16)(27,"c-col")(28,"div",17),i(29,"Visits"),t(),e(30,"strong"),i(31,"29.703 Users (40%)"),t(),n(32,"c-progress",18),t(),e(33,"c-col")(34,"div",17),i(35,"Unique"),t(),e(36,"div",19),i(37,"24.093 Users (20%)"),t(),n(38,"c-progress",20),t(),e(39,"c-col")(40,"div",17),i(41,"Page views"),t(),e(42,"div",19),i(43,"78.706 Views (60%)"),t(),n(44,"c-progress",21),t(),e(45,"c-col")(46,"div",17),i(47,"New Users"),t(),e(48,"div",19),i(49,"22.123 Users (80%)"),t(),n(50,"c-progress",22),t(),e(51,"c-col",23)(52,"div",17),i(53,"Bounce Rate"),t(),e(54,"div",19),i(55,"Average Rate (40.15%)"),t(),n(56,"c-progress",24),t()()()(),n(57,"app-widgets-brand",25),e(58,"c-row",26)(59,"c-col",27)(60,"c-card",28)(61,"c-card-header"),i(62),t(),e(63,"c-card-body")(64,"c-row")(65,"c-col",29)(66,"c-row")(67,"c-col",30)(68,"div",31)(69,"div",32),i(70,"New Clients"),t(),e(71,"div",33),i(72,"9,123"),t()()(),e(73,"c-col",30)(74,"div",34)(75,"div",32),i(76," Recurring Clients "),t(),e(77,"div",33),i(78,"22,643"),t()()()(),n(79,"hr",35),e(80,"div",36)(81,"div",37)(82,"span",38),i(83,"Monday"),t()(),e(84,"div",39),n(85,"c-progress",40)(86,"c-progress",41),t()(),e(87,"div",36)(88,"div",37)(89,"span",38),i(90,"Tuesday"),t()(),e(91,"div",39),n(92,"c-progress",42)(93,"c-progress",43),t()(),e(94,"div",36)(95,"div",37)(96,"span",38),i(97,"Wednesday"),t()(),e(98,"div",39),n(99,"c-progress",44)(100,"c-progress",45),t()(),e(101,"div",36)(102,"div",37)(103,"span",38),i(104,"Thursday"),t()(),e(105,"div",39),n(106,"c-progress",46)(107,"c-progress",47),t()(),e(108,"div",36)(109,"div",37)(110,"span",38),i(111,"Friday"),t()(),e(112,"div",39),n(113,"c-progress",48)(114,"c-progress",49),t()(),e(115,"div",36)(116,"div",37)(117,"span",38),i(118,"Saturday"),t()(),e(119,"div",39),n(120,"c-progress",50)(121,"c-progress",51),t()(),e(122,"div",36)(123,"div",37)(124,"span",38),i(125,"Sunday"),t()(),e(126,"div",39),n(127,"c-progress",52)(128,"c-progress",53),t()(),e(129,"div",54),i(130,`
              `),e(131,"small"),i(132,`
                `),e(133,"sup"),i(134,`
                  `),e(135,"span",55),i(136,"\xA0"),t(),i(137,`
                `),t(),i(138,`
                `),e(139,"span"),i(140,"New clients"),t(),i(141,`
                \xA0\xA0
                `),e(142,"sup"),i(143,`
                  `),e(144,"span",56),i(145,"\xA0"),t(),i(146,`
                `),t(),i(147,`
                `),e(148,"span"),i(149,"Recurring clients"),t(),i(150,`
              `),t(),i(151,`
            `),t()(),e(152,"c-col",29)(153,"c-row")(154,"c-col",30)(155,"div",57)(156,"div",32),i(157,"Page views"),t(),e(158,"div",33),i(159,"78,623"),t()()(),e(160,"c-col",30)(161,"div",58)(162,"div",32),i(163,"Organic"),t(),e(164,"div",33),i(165,"49,123"),t()()()(),n(166,"hr",35),e(167,"div",36)(168,"div",59),d(),n(169,"svg",60),m(),e(170,"span"),i(171,"Male"),t(),e(172,"span",61),i(173,"43%"),t()(),e(174,"div",39),n(175,"c-progress",62),t()(),e(176,"div",63)(177,"div",59),d(),n(178,"svg",64),m(),e(179,"span"),i(180,"Female"),t(),e(181,"span",61),i(182,"37%"),t()(),e(183,"div",39),n(184,"c-progress",65),t()(),e(185,"div",66)(186,"div",59),d(),n(187,"svg",67),m(),e(188,"span"),i(189,"Organic Search"),t(),e(190,"span",61),i(191," 191,235 "),e(192,"span",38),i(193,"(56%)"),t()()(),e(194,"div",39),n(195,"c-progress",68),t()(),e(196,"div",66)(197,"div",59),d(),n(198,"svg",69),m(),e(199,"span"),i(200,"Facebook"),t(),e(201,"span",61),i(202," 51,223 "),e(203,"span",38),i(204,"(15%)"),t()()(),e(205,"div",39),n(206,"c-progress",70),t()(),e(207,"div",66)(208,"div",59),d(),n(209,"svg",71),m(),e(210,"span"),i(211,"Twitter"),t(),e(212,"span",61),i(213," 37,564 "),e(214,"span",38),i(215,"(11%)"),t()()(),e(216,"div",39),n(217,"c-progress",72),t()(),e(218,"div",66)(219,"div",59),d(),n(220,"svg",73),m(),e(221,"span"),i(222,"LinkedIn"),t(),e(223,"span",61),i(224," 27,319 "),e(225,"span",38),i(226,"(8%)"),t()()(),e(227,"div",39),n(228,"c-progress",74),t()(),e(229,"div",75)(230,"button",76),d(),n(231,"svg",77),t()()()()()()()(),m(),e(232,"c-row")(233,"c-col",27)(234,"c-card",28)(235,"c-card-body")(236,"table",78)(237,"thead",79)(238,"tr")(239,"th",80),d(),n(240,"svg",81),t(),m(),e(241,"th",82),i(242,"User"),t(),e(243,"th",80),i(244,"Country"),t(),e(245,"th",82),i(246,"Usage"),t(),e(247,"th",80),i(248,"Payment Method"),t(),e(249,"th",82),i(250,"Activity"),t()()(),e(251,"tbody"),N(252,Me,27,17,"tr",null,Ee),t()()()()()()),h&2&&(o(12),f("formGroup",u.trafficRadioGroup),o(11),f("data",u.mainChart.data)("height",300)("ngStyle",U(16,we))("options",u.mainChart.options)("type",u.mainChart.type),o(3),f("xl",5)("lg",4)("sm",2)("xs",1)("gutter",4),o(31),f("withCharts",!0),o(5),D("Traffic ","&"," Sales"),o(174),f("hover",!0)("responsive",!0)("striped",!0),o(16),P(u.users))},dependencies:[fe,Q,Z,ie,te,Y,z,ge,me,oe,pe,le,se,ue,he,K,ee,ve,W,$,ne,ae,be,X,re,q],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}"]});let p=b;return p})();export{Ue as DashboardComponent};
