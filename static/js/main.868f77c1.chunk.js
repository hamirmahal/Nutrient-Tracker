(this.webpackJsonpnutrition=this.webpackJsonpnutrition||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/AlmondsHamirMahal.556bbdad.png"},,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(13),n(7)),u=n(3),l=n(6),m=n.n(l);n(14);function s(){var e="https://api.nal.usda.gov/fdc/v1/food/",t=Object(a.useState)([]),n=Object(u.a)(t,2),o=n[0],i=n[1],l=Object(a.useState)(169991),s=Object(u.a)(l,2),h=s[0],p=s[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:m.a,className:"App-logo",alt:"Almonds from Hamir"})," ",r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e+="".concat(h,"?api_key=DEMO_KEY"),fetch(e).then((function(e){return e.json()})).then((function(e){return function(e){var t=Object(c.a)(o);e.foodNutrients.forEach((function(e){for(var n=0;n<t.length;n++)if(t[n].nutrient.id===e.nutrient.id)return t[n].amount=Math.round(1e3*(t[n].amount+e.amount))/1e3;e.id&&t.push(e)})),i(t)}(e)}))}},r.a.createElement("input",{max:"999999",min:"100000",type:"number",onChange:function(e){return p(e.target.value)},value:h})),o.length>0&&r.a.createElement("p",null," Today's total nutritional intake is ",o.map((function(e){return r.a.createElement("li",{key:e.nutrient.id},e.nutrient.name,": ",e.amount,e.nutrient.unitName)}))," "),r.a.createElement("br",null)," ",r.a.createElement("a",{className:"App-link",href:"https://github.com/hamirmahal/Nutrient-Tracker",rel:"noopener noreferrer",target:"_blank"}," View the source material on Hamir Mahal's GitHub "))," ")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.868f77c1.chunk.js.map