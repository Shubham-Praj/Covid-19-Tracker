(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),i=a(17),n=a.n(i),s=(a(24),a(21)),l=a.n(s),d=a(27),o=a(16),j=(a(30),a(47)),b=a(46),u=a.p+"static/media/corona.05feb86b.svg",h=a(1);var v=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(j.a.Brand,{href:"#home",children:[Object(h.jsx)("img",{alt:"Covid 19 Tracker",src:u,width:"30",height:"30",className:"d-inline-block align-top"}),"Covid 19 Tracker"]})})})})};var x=function(e){var t=e.filteredData,a=e.filterList,r=e.clearFilteredData,i=e.setSelectedData,n=Object(c.useState)(""),s=Object(o.a)(n,2),l=s[0],d=s[1];function j(e){d(e.target.innerText),i(e.target.innerText),r()}return Object(h.jsx)("div",{className:"search-div",children:Object(h.jsxs)("div",{style:{display:"flex",width:"50%",flexDirection:"column"},children:[Object(h.jsx)("div",{className:"search-component-div",children:Object(h.jsx)("input",{onChange:function(e){var t;t=e.target.value,d(t),a(t)},className:"search-box",placeholder:"Search Countries or States e.g. India, Mumbai",value:l,onBlur:function(){setTimeout((function(){r()}),100)}})}),0!==t.length&&Object(h.jsx)("div",{className:"search-recommendation-div",children:t.filter((function(e){return e.toLowerCase().includes(l.toLowerCase())?e:""})).map((function(e,t){return Object(h.jsx)("div",{className:"search-results",children:Object(h.jsx)("h5",{style:{marginBottom:"0px",cursor:"pointer"},onClick:j,children:e})},t)}))})]})})},O=a(34),f=a(13);f.e.register(f.d,f.i,f.b,f.n,f.o,f.g);var p=function(e){var t=e.data,a={labels:["Cases"],datasets:[{label:"Recovered",data:[t.recovered],borderRadius:10,backgroundColor:["rgba(57, 200, 106, 0.7)"],borderColor:["rgba(57, 200, 106, 0.7)"],borderWidth:1},{label:"Confirmed",data:[t.confirmed],borderRadius:10,backgroundColor:["rgba(245, 195, 36, 0.7)"],borderColor:["rgba(245, 195, 36, 0.7)"],borderWidth:1},{label:"Deaths",data:[t.deaths],borderRadius:10,backgroundColor:["rgba(255, 107, 107, 0.7)"],borderColor:["rgba(255, 107, 107, 0.7)"],borderWidth:1}]};return Object(h.jsx)("div",{style:{width:"100%",height:"100%",padding:"5% 0px"},children:Object(h.jsx)(O.a,{data:a,options:{scales:{y:{type:"linear",grace:"5%"}}}})})};var m=function(e){var t=e.data;return Object(h.jsx)("div",{className:"chartDiv",children:Object(h.jsx)(p,{data:t})})};var g=function(e){var t=e.data,a=e.title;return Object(h.jsxs)("div",{className:"dataDiv",children:[Object(h.jsxs)("div",{className:"dataHeaders",children:[Object(h.jsx)("h1",{children:Object(h.jsx)("b",{children:a})}),Object(h.jsx)("h4",{children:"Asia"})]}),Object(h.jsxs)("div",{className:"subHeadersDiv",children:[Object(h.jsxs)("div",{className:"labels",children:[Object(h.jsx)("div",{className:"labelTextDiv",children:Object(h.jsx)("h4",{children:"Captial"})}),Object(h.jsx)("div",{className:"labelTextDiv",children:Object(h.jsx)("h4",{children:"Population"})}),Object(h.jsx)("div",{className:"labelTextDiv",children:Object(h.jsx)("h4",{children:"Life Expecentacy"})}),Object(h.jsx)("div",{className:"labelTextDiv",children:Object(h.jsx)("h4",{children:"Location"})})]}),Object(h.jsxs)("div",{className:"values",children:[Object(h.jsx)("div",{className:"valuesTextDiv",children:Object(h.jsx)("h4",{children:t.capital_city?t.capital_city:"N/A"})}),Object(h.jsx)("div",{className:"valuesTextDiv",children:Object(h.jsx)("h4",{children:t.population?t.population:"N/A"})}),Object(h.jsx)("div",{className:"valuesTextDiv",children:Object(h.jsx)("h4",{children:t.life_expectancy?t.life_expectancy:"N/A"})}),Object(h.jsx)("div",{className:"valuesTextDiv",children:Object(h.jsx)("h4",{children:t.location?t.location:"N/A"})})]})]})]})};var N=function(e){var t=e.data,a=e.title;return Object(h.jsx)("div",{className:"chartSection",children:Object(h.jsxs)("div",{className:"SectionHolderDiv",children:[Object(h.jsx)(g,{data:t,title:a}),Object(h.jsx)(m,{data:t})]})})},D={};var y=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)([]),n=Object(o.a)(i,2),s=n[0],j=n[1],b=Object(c.useState)([]),u=Object(o.a)(b,2),O=u[0],f=u[1],p=Object(c.useState)("India"),m=Object(o.a)(p,2),g=m[0],y=m[1];function C(e){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(l.a.mark((function e(t){var a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in a=[],t)for(r in D[c]=t[c].All,a.push([c][0]),t[c])"All"!==r&&(D[r]=t[c][r],a.push([r][0]));j(a),console.log(D),console.log(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(t),console.log(t),r(D[t]);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://covid-api.mmediagroup.fr/v1/cases"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,C(a);case 8:r(a.India.All);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)(x,{filteredData:O,filterList:function(e){var t=s.filter((function(t){return""===e||t.toLowerCase().includes(e.toLowerCase())?t:null}));f(t)},clearFilteredData:function(){f([])},setSelectedData:function(e){return w.apply(this,arguments)}}),Object(h.jsx)(N,{data:a,title:g})]})};n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.24ef2a97.chunk.js.map