(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{23:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),c=s(12),a=s.n(c),i=s(13),l=s(14),o=s(17),j=s(16);s(23);var u=function(e){return Object(r.jsx)("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})};var d=function(e){return Object(r.jsx)("div",{className:"container",style:e.style,children:e.children})};var h=function(e){return Object(r.jsx)("div",{className:"row",children:e.children})};var m=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(r.jsx)("div",{className:t,children:e.children})},b=s(15),f=s.n(b),O=function(){return f.a.get("https://randomuser.me/api/?results=50&nat=us")};s(42);var x=function(e){return Object(r.jsx)("form",{className:"search",style:{width:"100%",height:"auto",overflow:"hidden"},children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)(h,{children:[Object(r.jsxs)(m,{size:"md-9",children:[Object(r.jsx)("label",{htmlFor:"employee",children:"Search by Employee Name:"}),Object(r.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"employee",type:"text",className:"form-control",placeholder:"Type Employee Name to Search",id:"employee"})]}),Object(r.jsxs)(m,{size:"md-3",children:[Object(r.jsx)("label",{htmlFor:"sortby",children:"Sort by:"}),Object(r.jsxs)("select",{id:"sortOptions",onChange:e.sortBy,className:"form-control",children:[Object(r.jsx)("option",{value:"Last Name",children:"Last Name"}),Object(r.jsx)("option",{value:"First Name",children:"First Name"}),Object(r.jsx)("option",{value:"Years Working",children:"Years Working"})]})]})]})})})};s(43),s(44);var p=function(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-header",children:Object(r.jsxs)("h3",{children:[e.firstname," ",e.lastname]})}),Object(r.jsx)("div",{className:"card-body",children:Object(r.jsxs)(h,{children:[Object(r.jsxs)(m,{size:"md-4",children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("h5",{children:"Email: "}),e.email]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("h5",{children:"Phone: "}),e.phone]})]}),Object(r.jsxs)(m,{size:"md-4",children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("h5",{children:"Address: "})," ",e.housenumber," ",e.streetname,", ",e.city,", ",e.state," ",e.zipcode]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("h5",{children:"Years Working: "}),e.age]})]}),Object(r.jsx)(m,{size:"md-4",children:Object(r.jsx)("img",{alt:"Pic",src:e.image,className:"img-fluid"})})]})})]})};var g=function(e){return Object(r.jsx)("ul",{className:"list-group search-results",children:e.results.map((function(e){return Object(r.jsx)("li",{className:"list-group-item",children:Object(r.jsx)(p,{firstname:e.name.first,lastname:e.name.last,phone:e.phone,email:e.email,image:e.picture.large,age:e.registered.age,housenumber:e.location.street.number,streetname:e.location.street.name,city:e.location.city,zipcode:e.location.postcode,state:e.location.state})},e.email)}))})},v=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:"",sortby:"",results:[],filterResults:[],error:""},e.handleInputChange=function(t){console.log(e.state.results);var s=e.state.results.filter((function(e){return(e.name.first.toLowerCase()+" "+e.name.last.toLowerCase()).indexOf(t.target.value.toLowerCase())>=0}));e.setState({filterResults:s})},e.sortBy=function(t){console.log(t.target.value.toLowerCase());var s=t.target.value.toLowerCase();if("first name"===s){var r=e.state.results.sort((function(e,t){return e.name.first>t.name.first?1:-1}));console.log(r),e.setState({filterResults:r})}if("last name"===s){var n=e.state.results.sort((function(e,t){return e.name.last>t.name.last?1:-1}));console.log(n),e.setState({filterResults:n})}if("years working"===s){var c=e.state.results.sort((function(e,t){return e.registered.age>t.registered.age?1:-1}));console.log(c),e.setState({filterResults:c})}},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){console.log(t.data.results),e.setState({results:t.data.results}),e.setState({filterResults:t.data.results}),console.log(e.state.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(u,{backgroundImage:"search.jpg",children:Object(r.jsx)("h1",{children:"Employee Directory"})}),Object(r.jsx)(d,{style:{marginTop:30},children:Object(r.jsx)(h,{children:Object(r.jsx)(m,{size:"md-12",children:Object(r.jsx)("div",{children:Object(r.jsxs)(d,{style:{minHeight:"80%"},children:[Object(r.jsx)(x,{handleInputChange:this.handleInputChange,sortBy:this.sortBy}),Object(r.jsx)(g,{results:this.state.filterResults})]})})})})})]})}}]),s}(n.Component);s(45);var y=function(){return Object(r.jsx)("footer",{className:"footer text-center",children:Object(r.jsx)("span",{children:"Employee Directory 2021"})})};s(46);var N=function(e){return Object(r.jsx)("main",{className:"wrapper",children:e.children})};var w=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(N,{children:[Object(r.jsx)(v,{}),Object(r.jsx)(y,{})]})})};s(47),s(48);a.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.0b037d4d.chunk.js.map