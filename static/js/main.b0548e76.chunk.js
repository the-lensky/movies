(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),i=c.n(s),r=(c(10),c(0)),l=function(){return Object(r.jsx)("nav",{className:"purple",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#",className:"brand-logo",children:"REACT MOVIES"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/the-lensky/movies",target:"_blank",children:"Repo"})})})]})})},o=function(){return Object(r.jsx)("footer",{className:"page-footer purple lighten-1",children:Object(r.jsx)("div",{className:"footer-copyright purple lighten-1",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Have a nice day!\ud83d\ude3c",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/the-lensky/movies",target:"_blank",children:"Repo"})]})})})},j=c(2),h=c(5),d=function(e){var t=e.Title,c=e.Year,a=e.imdbID,n=e.Type,s=e.Poster;return Object(r.jsxs)("div",{id:a,className:"card movie",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(r.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x400?text=".concat(t),alt:"poster"}):Object(r.jsx)("img",{className:"activator",src:s,align:"movie poster",alt:"poster"})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(r.jsxs)("p",{children:[c," ",Object(r.jsx)("span",{className:"right",children:n})]})]})]})},b=function(e){var t=e.movies,c=void 0===t?[]:t;return Object(r.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(r.jsx)(d,Object(h.a)({},e),e.imdbID)})):Object(r.jsx)("h4",{children:" Nothing found"})})},p=function(){return Object(r.jsx)("div",{className:"progress purple preloader",children:Object(r.jsx)("div",{className:"indeterminate purple lighten-3"})})},u=function(e){var t=e.searchMovies,c=Object(a.useState)(""),n=Object(j.a)(c,2),s=n[0],i=n[1],l=Object(a.useState)("all"),o=Object(j.a)(l,2),h=o[0],d=o[1],b=function(e){d(e.target.dataset.type),t(s,e.target.dataset.type)};return Object(r.jsx)("div",{className:"row ",children:Object(r.jsxs)("div",{className:"col s12 ",children:[Object(r.jsxs)("div",{className:"input-field ",children:[Object(r.jsx)("input",{placeholder:"search",type:"search",className:"validate",value:s,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t(s,h)}}),Object(r.jsx)("button",{className:"btn btn-search purple lighten-1",onClick:function(){return t(s,h)},children:"Search"})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap purple",name:"type",type:"radio","data-type":"all",onChange:b,checked:"all"===h}),Object(r.jsx)("span",{children:"All"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:b,checked:"movie"===h}),Object(r.jsx)("span",{children:"Movies"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:b,checked:"series"===h}),Object(r.jsx)("span",{children:"Series"})]})]})]})})},m="7678bfd1",O=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),i=Object(j.a)(s,2),l=i[0],o=i[1];return Object(a.useEffect)((function(){fetch("http://www.omdbapi.com/?apikey=".concat(m,"&s=mortal-kombat")).then((function(e){return e.json()})).then((function(e){n(e.Search),o(!1)})).catch((function(e){console.log(e),o(!1)}))}),[]),Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(u,{searchMovies:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";o(!0),n([]),fetch("http://www.omdbapi.com/?apikey=".concat(m,"&s=").concat(e).concat("all"!==t?"&type=".concat(t):"","&plot=full&i")).then((function(e){return e.json()})).then((function(e){n(e.Search),o(!1)})).catch((function(e){console.log(e),o(!1)}))}}),l?Object(r.jsx)(p,{}):Object(r.jsx)(b,{movies:c})]})};var x=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(O,{}),Object(r.jsx)(o,{})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.b0548e76.chunk.js.map