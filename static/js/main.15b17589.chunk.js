(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Joe Da Dpoe man","position":"dope dealer","salary":100000},{"id":2,"name":"Silky Johnson","position":"Playa Hater","salary":250000},{"id":3,"name":"John Edwards","position":"giant Douche","salary":"vagina slime"},{"id":4,"name":"Matt Damon","position":"Matt Damon","salary":"Matt Damon"},{"id":5,"name":"sloth","position":"goonie","salary":"One eyed willys treasure"},{"id":6,"name":"Dr Evil","position":"Supervillain","salary":"one MILLION dollars...."}]')},,,function(e,n,t){e.exports=t(19)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),l=t.n(r),i=(t(13),t(3)),c=t(4),s=t(7),m=t(6);t(14);var u=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Name:")," ",e.name),o.a.createElement("li",null,o.a.createElement("strong",null,"Position:")," ",e.position),o.a.createElement("li",null,o.a.createElement("strong",null,"Salary:")," ",e.salary))),o.a.createElement("button",{onClick:function(){return e.removeEmployee(e.id)},id:"remove",type:"button",class:"btn btn-light"},"Remove here"))};t(15);var p=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",null,"Employee Directory"))};t(16);var y=function(e){return o.a.createElement("h1",{class:"display-4",className:"title"},e.children)};t(17);var d=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)},E=t(5),v=(t(18),function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={employees:E},e.removeEmployee=function(n){var t=e.state.employees.filter((function(e){return e.id!==n}));e.setState({employees:t})},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(d,null,o.a.createElement(y,null,"Employee Directory"),this.state.employees.map((function(n){return o.a.createElement(u,{removeEmployee:e.removeEmployee,id:n.id,key:n.id,name:n.name,position:n.position,salary:n.salary})})),o.a.createElement(p,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.15b17589.chunk.js.map