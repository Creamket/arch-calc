(this["webpackJsonparch-calc"]=this["webpackJsonparch-calc"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var c=a(1),l=a.n(c),s=a(5),r=a.n(s),n=a(4),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),l(e),s(e),r(e)}))},o=a(2),m=(a(19),a(20),"BEAM/CHANGE_VALUE"),j="BEAM/CALC_RESULT",b="BEAM/CHANGE_CONCRETE";function d(e,t){return{type:m,payload:[e,t]}}var h=a(0),u={changeValue:d},p=Object(o.b)((function(e){return{scheme:e.beam.scheme,loadQInput:e.beam.loadQ,widthBInput:e.beam.widthB,heightHInput:e.beam.heightH,lengthLInput:e.beam.lengthL}}),u)((function(e){var t=e.loadQInput,a=e.widthBInput,c=e.heightHInput,l=e.lengthLInput,s=e.scheme,r=e.changeValue,n=function(e){var t=parseFloat(e.target.value);r([e.target.name],t)};return Object(h.jsx)("div",{className:"card bg-dark",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430 \u0431\u0430\u043b\u043a\u0438"}),Object(h.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsx)("label",{htmlFor:"scheme",className:"col-5 col-form-label col-form-label-sm",children:"\u0421\u0445\u0435\u043c\u0430:"}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("select",{id:"scheme",value:s,className:"form-select form-select-sm","aria-label":"Scheme select",name:"scheme",onChange:n,children:[Object(h.jsx)("option",{value:"1",children:"\u0428\u0430\u0440\u043d\u0438\u0440-\u0428\u0430\u0440\u043d\u0438\u0440"}),Object(h.jsx)("option",{value:"2",children:"\u041a\u043e\u043d\u0441\u043e\u043b\u044c"})]})})]})}),Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsx)("label",{htmlFor:"loadQInput",className:"col-5 col-form-label col-form-label-sm",children:"\u041d\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0430 \u0431\u0430\u043b\u043a\u0443 q"}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("div",{className:"input-group input-group-sm",children:[Object(h.jsx)("input",{type:"number",min:"0",className:"form-control",id:"loadQInput",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",value:t,name:"loadQ",onChange:n}),Object(h.jsx)("span",{className:"input-group-text",children:"\u043a\u0433/\u043c"})]})})]})}),Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsx)("label",{htmlFor:"widthBInput",className:"col-5 col-form-label col-form-label-sm",children:"\u0428\u0438\u0440\u0438\u043d\u0430 \u0441\u0435\u0447\u0435\u043d\u0438\u044f b"}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("div",{className:"input-group input-group-sm",children:[Object(h.jsx)("input",{type:"number",min:"0",step:"0.01",className:"form-control",id:"widthBInput",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",value:a,name:"widthB",onChange:n}),Object(h.jsx)("span",{className:"input-group-text",children:"\u043c"})]})})]})}),Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsx)("label",{htmlFor:"heightHInput",className:"col-5 col-form-label col-form-label-sm",children:"\u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u0435\u0447\u0435\u043d\u0438\u044f h"}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("div",{className:"input-group input-group-sm",children:[Object(h.jsx)("input",{type:"number",min:"0",step:"0.01",className:"form-control",id:"heightHInput",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",value:c,name:"heightH",onChange:n}),Object(h.jsx)("span",{className:"input-group-text",children:"\u043c"})]})})]})}),Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsx)("label",{htmlFor:"lengthLInput",className:"col-5 col-form-label col-form-label-sm",children:"\u0414\u043b\u0438\u043d\u0430 \u0431\u0430\u043b\u043a\u0438 L"}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("div",{className:"input-group input-group-sm",children:[Object(h.jsx)("input",{type:"number",min:"0",step:"0.01",className:"form-control",id:"lengthLInput",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",value:l,name:"lengthL",onChange:n}),Object(h.jsx)("span",{className:"input-group-text",children:"\u043c"})]})})]})})]})]})})})),O={changeValue:d,changeConcrete:function(e){switch(e){case"B10":e=[e,61e4,57e3];break;case"B20":e=[e,117e4,9e4];break;case"B25":e=[e,148e4,105e3]}return{type:b,payload:e}}},x=Object(o.b)((function(e){return{concreteType:e.beam.concreteType,armatureType:e.beam.armatureType}}),O)((function(e){var t=e.concreteType,a=e.armatureType,c=e.changeValue,l=e.changeConcrete;return Object(h.jsx)("div",{className:"card bg-dark",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0431\u0430\u043b\u043a\u0438"}),Object(h.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsx)("label",{htmlFor:"concreteType",className:"col-5 col-form-label col-form-label-sm",children:"\u041a\u043b\u0430\u0441\u0441 \u0431\u0435\u0442\u043e\u043d\u0430:"}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("select",{id:"concreteType",value:t.type,className:"form-select form-select-sm","aria-label":"Concrete select",name:"concreteType",onChange:function(e){l(e.target.value)},children:[Object(h.jsx)("option",{value:"B10",children:"C8/10 \u0438\u043b\u0438 B10"}),Object(h.jsx)("option",{value:"B20",children:"C16/20 \u0438\u043b\u0438 B20"}),Object(h.jsx)("option",{value:"B25",children:"C20/25 \u0438\u043b\u0438 B25"})]})})]})}),Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsx)("label",{htmlFor:"armatureType",className:"col-5 col-form-label col-form-label-sm",children:"\u041a\u043b\u0430\u0441\u0441 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b:"}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("select",{id:"armatureType",value:a,className:"form-select form-select-sm","aria-label":"Armature select",name:"armatureType",onChange:function(e){var t=parseInt(e.target.value);c([e.target.name],t)},children:[Object(h.jsx)("option",{value:"21900000",children:"\u0413\u043b\u0430\u0434\u043a\u0430\u044f S240, A240"}),Object(h.jsx)("option",{value:"36200000",children:"\u041f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f S400, A400"}),Object(h.jsx)("option",{value:"44300000",children:"\u041f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f S500, A500"})]})})]})})]})]})})})),v=a(10);function g(e){var t=e.result;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h5",{className:"card-title",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u044c\u043d\u0430\u044f \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0430:"}),"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0433\u043e \u0441\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0435\u0440\u0436\u043d\u044f: ",+t.area.toFixed(4)," \u0441\u043c\xb2 ",Object(h.jsx)("br",{}),"\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0441\u0442\u0435\u0440\u0436\u043d\u044f: ",t.diameter," \u043c\u043c ",Object(h.jsx)("br",{}),"\u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u0435\u0441 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b: ",t.weight," \u043a\u0433/\u043c \u043f\u043e\u0433.",1===t.scheme&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h5",{className:"card-title mt-3",children:"\u041f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u0430\u044f \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0430:"}),t.cross?"\u041f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f.":t.height<=.45?"\u041d\u0430 \u043f\u0440\u0438\u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0443\u0447\u0430\u0441\u0442\u043a\u0430\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u0443\u044e \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0443 \u0441 \u0448\u0430\u0433\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 ".concat(.5*t.height<.15?.5*t.height:.15," \u043c \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435 ").concat(.25*t.length," \u043c \u043e\u0442 \u043e\u043f\u043e\u0440\u044b. "):"\u041d\u0430 \u043f\u0440\u0438\u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0443\u0447\u0430\u0441\u0442\u043a\u0430\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u0443\u044e \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0443 \u0441 \u0448\u0430\u0433\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 ".concat(.33*t.height<.5?.33*t.height:.5," \u043c \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435 ").concat(.25*t.length," \u043c \u043e\u0442 \u043e\u043f\u043e\u0440\u044b. "),Object(h.jsx)("br",{}),!t.cross&&"\u0412 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043f\u0440\u043e\u043b\u0435\u0442\u0430 ".concat(t.height>.3?"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u0443\u044e \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0443 \u0441 \u0448\u0430\u0433\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 ".concat(.75*t.height<.5?.75*t.height:.5," \u043c."):"\u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u0430\u044f \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0430 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f.")]})]})}var f={calcResult:function(e,t,a,c,l,s,r){return{type:j,payload:[e,t,a,c,l,s,r]}}},N=Object(o.b)((function(e){return{scheme:e.beam.scheme,loadQ:e.beam.loadQ,widthB:e.beam.widthB,heightH:e.beam.heightH,lengthL:e.beam.lengthL,layerC:e.beam.protectiveLayerC,Rb:e.beam.concreteType.Rb,Rbt:e.beam.concreteType.Rbt,Rs:e.beam.armatureType,result:e.beam.result,armatureN:1===e.beam.scheme?e.beam.armatureBelow:e.beam.armatureAbove,tableValues:e.beam.tableValues}}),f)((function(e){var t=e.result,a=e.calcResult,c=e.heightH,l=e.layerC,s=e.loadQ,r=e.lengthL,n=e.Rb,i=e.Rbt,o=e.widthB,m=e.Rs,j=e.armatureN,b=e.scheme,d=e.tableValues;return Object(h.jsx)("div",{className:"card bg-dark",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12",children:"default"===t.area?t.defaultMessage:"error"===t.area?t.errorMessage:Object(h.jsx)(g,{result:t})}),Object(h.jsx)("div",{className:"col mt-2",children:Object(h.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){var e=1.2*s+o*c*2500,t=c-l-.007,h=e*r/2<=.6*i*o*t,u=e*r*r/(1===b?8:2),p=1e4*(.9*n*o*(1-Math.sqrt(1-u/(n*o*t*t)*2))*t/m)/j||"error",O=d.filter((function(e){return p<=e[1]}))[0]||["\u0431\u043e\u043b\u0435\u0435 40","","\u2014"],x=Object(v.a)(O,3),g=x[0],f=x[2];a(p,g,f,h,b,c,r)},children:"\u041f\u043e\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044c!"})})]})})})})),y={changeValue:d},w=Object(o.b)((function(e){return{protectiveLayerC:e.beam.protectiveLayerC,protectiveLayerC1:e.beam.protectiveLayerC1}}),y)((function(e){var t=e.title,a=e.name,c=e.changeValue,l=e.protectiveLayerC,s=e.protectiveLayerC1;return Object(h.jsx)("div",{className:"card bg-dark",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("h5",{className:"card-title",children:['\u0412\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u044f "',t,'"']}),Object(h.jsx)("ul",{className:"list-group list-group-flush",children:Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsx)("label",{htmlFor:a,className:"col-5 col-form-label col-form-label-sm",children:"\u0417\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u0441\u043b\u043e\u0439"}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("div",{className:"input-group input-group-sm",children:[Object(h.jsx)("input",{type:"number",className:"form-control",id:a,min:"0",step:"0.01",placeholder:"\u043a\u0433/\u043c",value:"protectiveLayerC"===a?l:s,name:a,onChange:function(e){var t=parseFloat(e.target.value);c([e.target.name],t)}}),Object(h.jsx)("span",{className:"input-group-text",children:"\u043c"})]})})]})})})]})})})),C={changeValue:d},B=Object(o.b)((function(e){return{isExtra:e.beam.isExtraArm,armatureBelow:e.beam.armatureBelow,armatureAbove:e.beam.armatureAbove,scheme:e.beam.scheme}}),C)((function(e){var t=e.changeValue,a=e.isExtra,c=e.armatureAbove,l=e.armatureBelow,s=e.scheme,r=function(e){var a="checkbox"===e.target.type?e.target.checked:"change"===e.type?parseInt(e.target.value):e.target.value;t([e.target.name],a)};return Object(h.jsx)("div",{className:"card bg-dark",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:"\u0410\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(h.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsxs)("label",{htmlFor:"numberOfArmature",className:"col-5 col-form-label col-form-label-sm",children:["\u041a\u043e\u043b-\u0432\u043e \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b ",1===s?"\u0441\u043d\u0438\u0437\u0443":"\u0441\u0432\u0435\u0440\u0445\u0443",":"]}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("select",{id:"numberOfArmature",value:1===s?l:c,className:"form-select form-select-sm","aria-label":"Armature select",name:1===s?"armatureBelow":"armatureAbove",onChange:r,children:[Object(h.jsx)("option",{value:"1",children:"1 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0430"}),Object(h.jsx)("option",{value:"2",children:"2 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b"}),Object(h.jsx)("option",{value:"3",children:"3 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b"}),Object(h.jsx)("option",{value:"4",children:"4 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b"}),Object(h.jsx)("option",{value:"5",children:"5 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"6",children:"6 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"7",children:"7 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"8",children:"8 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"9",children:"9 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"10",children:"10 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"})]})})]})}),Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)("input",{className:"form-check-input",onChange:r,type:"checkbox",id:"isExtra",name:"isExtraArm",checked:a}),Object(h.jsxs)("label",{className:"form-check-label",htmlFor:"isExtra",children:["+ \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0430 ",2===s?"\u0441\u043d\u0438\u0437\u0443":"\u0441\u0432\u0435\u0440\u0445\u0443"]})]})}),!0===a&&Object(h.jsx)("li",{className:"list-group-item form-item",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsxs)("label",{htmlFor:"numberOfArmature1",className:"col-5 col-form-label col-form-label-sm",children:["\u041a\u043e\u043b-\u0432\u043e \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b ",2===s?"\u0441\u043d\u0438\u0437\u0443":"\u0441\u0432\u0435\u0440\u0445\u0443",":"]}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsxs)("select",{id:"numberOfArmature1",value:2===s?l:c,className:"form-select form-select-sm","aria-label":"Armature select",name:2===s?"armatureBelow":"armatureAbove",onChange:r,children:[Object(h.jsx)("option",{value:"1",children:"1 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0430"}),Object(h.jsx)("option",{value:"2",children:"2 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b"}),Object(h.jsx)("option",{value:"3",children:"3 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b"}),Object(h.jsx)("option",{value:"4",children:"4 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b"}),Object(h.jsx)("option",{value:"5",children:"5 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"6",children:"6 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"7",children:"7 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"8",children:"8 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"9",children:"9 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"}),Object(h.jsx)("option",{value:"10",children:"10 \u0430\u0440\u043c\u0430\u0442\u0443\u0440"})]})})]})})]})]})})})),L=Object(o.b)((function(e){return{isExtra:e.beam.isExtraArm}}))((function(e){var t=e.isExtra;return Object(h.jsx)("form",{children:Object(h.jsxs)("div",{className:"row g-0",children:[Object(h.jsxs)("div",{className:"col-12 col-md-4",children:[Object(h.jsx)(x,{}),Object(h.jsx)(w,{title:"c",name:"protectiveLayerC"})]}),Object(h.jsxs)("div",{className:"col-12 col-md-4 align-self-end order-last order-md-1",children:[Object(h.jsx)(p,{}),Object(h.jsx)(N,{})]}),Object(h.jsxs)("div",{className:"col-12 col-md-4 order-2",children:[Object(h.jsx)(B,{}),!0===t&&Object(h.jsx)(w,{title:"c1",name:"protectiveLayerC1"})]})]})})}));function A(){return Object(h.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-sm",children:[Object(h.jsxs)("a",{className:"navbar-brand",href:"/arch-calc",children:[Object(h.jsx)("i",{className:"me-2 fas fa-calculator"}),"Arch-calc"]}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarContent",children:[Object(h.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link","aria-current":"page",href:"https://github.com/Creamket/arch-calc",rel:"noreferrer",target:"_blank",children:"GitHub"})})}),Object(h.jsx)("div",{className:"navbar-text",children:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0436\u0435\u043b\u0435\u0437\u043e\u0431\u0435\u0442\u043e\u043d\u043d\u043e\u0439 \u0431\u0430\u043b\u043a\u0438"})]})]})})}var E=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{children:Object(h.jsx)(A,{})}),Object(h.jsx)("main",{children:Object(h.jsx)("div",{className:"container-md pt-3",children:Object(h.jsx)(L,{})})})]})},T=a(6),k=a(3),I={scheme:1,loadQ:1400,widthB:.2,heightH:.5,lengthL:6,concreteType:{type:"B10",Rb:61e4,Rbt:57e3},armatureType:219e5,armatureBelow:1,armatureAbove:1,isExtraArm:!1,protectiveLayerC:.02,protectiveLayerC1:.02,tableValues:[[8,.503,.395],[10,.789,.617],[12,1.131,.888],[14,1.539,1.208],[16,2.011,1.578],[18,2.545,1.998],[20,3.142,2.466],[22,3.801,2.984],[25,4.909,3.853],[28,6.158,4.834],[32,8.042,6.313],[36,10.18,7.99],[40,12.56,9.805]],result:{area:"default",diameter:0,weight:0,cross:!0,scheme:1,height:0,length:0,defaultMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!",errorMessage:"\u0423\u0432\u0435\u043b\u0438\u0447\u044c\u0442\u0435 \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0435 \u0441\u0435\u0447\u0435\u043d\u0438\u0435 \u043b\u0438\u0431\u043e \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439 \u0431\u0435\u0442\u043e\u043d."}},F=Object(n.a)({beam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(k.a)(Object(k.a)({},e),{},Object(T.a)({},t.payload[0],t.payload[1]));case b:return Object(k.a)(Object(k.a)({},e),{},{concreteType:{type:t.payload[0],Rb:t.payload[1],Rbt:t.payload[2]}});case j:return Object(k.a)(Object(k.a)({},e),{},{result:Object(k.a)(Object(k.a)({},e.result),{},{area:t.payload[0],diameter:t.payload[1],weight:t.payload[2],cross:t.payload[3],scheme:t.payload[4],height:t.payload[5],length:t.payload[6]})});default:return e}}}),R=Object(n.c)(F,Object(n.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),_=Object(h.jsx)(o.a,{store:R,children:Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(E,{})})});r.a.render(_,document.getElementById("root")),i()}},[[22,1,2]]]);
//# sourceMappingURL=main.426d0e5d.chunk.js.map