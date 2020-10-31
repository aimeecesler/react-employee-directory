(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{19:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t(1),i=t.n(r),o=t(11),c=t.n(o),l=t(8),m=t(10),n=t(3),d=t(4),h=t(6),p=t(5),b=t(2),u=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={search:"",searchCategory:""},e.handleInputChange=function(a){var t=a.target,s=t.value,r=t.name;e.setState(Object(b.a)({},r,s)),e.props.handleSearch(a.target.value,e.state.searchCategory)},e.handleSubmit=function(a){a.preventDefault(),e.props.handleSearch(e.state.search,e.state.searchCategory)},e.selectCategory=function(a){e.setState({searchCategory:a.target.value})},e.handleResetClick=function(a){document.getElementById("search-form").reset(),e.props.handleReset()},e}return Object(d.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("form",{id:"search-form",onSubmit:this.handleSubmit,children:[Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("select",{ref:"category",className:"form-control",id:"searchCategory",onChange:this.selectCategory,value:this.state.searchCategory,children:[Object(s.jsx)("option",{value:"",children:"Choose a Category to Search"}),this.props.categories.map((function(e,a){return Object(s.jsx)("option",{value:e.label,children:e.text},a)}))]})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{name:"search",type:"text",className:"form-control",id:"search",placeholder:"Search",onChange:this.handleInputChange})}),Object(s.jsxs)("div",{className:"text-center mb-2",children:[Object(s.jsx)("button",{type:"submit",className:"btn btn-primary mr-1",children:"Submit"}),Object(s.jsx)("button",{type:"button",className:"btn btn-danger ml-1",onClick:this.handleResetClick,children:"Reset"})]}),Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",style:{opacity:this.props.display?1:0},children:this.props.error})]})}}]),t}(r.Component),f=t(12),j=t.n(f),x=(t(19),function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{className:"profile-image",src:e.employee.image,alt:"".concat(e.employee.firstName," ").concat(e.employee.lastName)})}),Object(s.jsx)("td",{children:e.employee.firstName}),Object(s.jsx)("td",{children:e.employee.lastName}),Object(s.jsx)("td",{children:e.employee.emailAddress}),Object(s.jsx)("td",{children:e.employee.phoneNumber}),Object(s.jsx)("td",{children:j()(e.employee.DOB).format("L")})]})}),O=function(e){return Object(s.jsx)("th",{scope:"col",children:Object(s.jsxs)("button",{className:"btn font-weight-bold",id:e.id,order:e.data.sortOrder,onClick:function(){return e.handleSort(e.data.label,e.data.sortOrder,e.id)},children:[e.data.text," ",Object(s.jsx)("i",{className:"fas fa-sort"})]})})},y=function(e){return Object(s.jsxs)("table",{className:"table table-hover",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col"}),e.data.headers.map((function(a,t){return Object(s.jsx)(O,{data:a,id:t,handleSort:e.handleSort},t)}))]})}),Object(s.jsx)("tbody",{children:e.data.employees.map((function(e,a){return Object(s.jsx)(x,{employee:e},a)}))})]})},N=(t(20),t(9)),g=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={errorMessage:"",employees:N,display:!1,headers:[{text:"First Name",label:"firstName",sortOrder:"asc"},{text:"Last Name",label:"lastName",sortOrder:"asc"},{text:"Email Address",label:"emailAddress",sortOrder:"asc"},{text:"Phone Number",label:"phoneNumber",sortOrder:"asc"},{text:"Birth Date",label:"DOB",sortOrder:"asc"}]},e.searchFunction=function(e,a){return function(t){return t[a].includes(e)}},e.handleSearch=function(a,t){""===t?e.setState({errorMessage:"You must select a category in order to search.",display:!0}):e.setState({display:!1,employees:e.state.employees.filter(e.searchFunction(a,t))})},e.handleSort=function(a,t,s){if("asc"===t){var r=Object(m.a)(e.state.headers),i=Object(l.a)({},r[s]);i.sortOrder="desc",r[s]=i,e.setState({employees:e.state.employees.sort(e.ascSortFunction(a)),headers:r})}else if("desc"===t){var o=Object(m.a)(e.state.headers),c=Object(l.a)({},o[s]);c.sortOrder="asc",o[s]=c,e.setState({employees:e.state.employees.sort(e.descSortFunction(a)),headers:o})}},e.ascSortFunction=function(e){return function(a,t){return a[e]===t[e]?0:a[e]<t[e]?-1:1}},e.descSortFunction=function(e){return function(a,t){return a[e]===t[e]?0:a[e]<t[e]?1:-1}},e.handleReset=function(a){e.setState({display:!1,employees:N})},e}return Object(d.a)(t,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsx)("div",{className:"row main-header mb-5",children:Object(s.jsx)("div",{className:"col-sm-12 my-auto",children:Object(s.jsx)("h1",{className:"ml-3",id:"banner-header",children:"Employee Directory"})})})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row mb-2",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)("h3",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-4"}),Object(s.jsx)("div",{className:"col-sm-4",children:Object(s.jsx)(u,{handleSearch:this.handleSearch,categories:this.state.headers,error:this.state.errorMessage,display:this.state.display,handleReset:this.handleReset})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12 text-center",children:Object(s.jsx)(y,{data:this.state,handleSort:this.handleSort})})})]})]})}}]),t}(r.Component);var B=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(g,{})})};t(21);c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"firstName":"Mark","lastName":"Gurnow","image":"https://images.unsplash.com/photo-1585402627084-e80d83061b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","emailAddress":"mark@example.com","phoneNumber":"(239) 561-8574","DOB":"1965-05-19"},{"firstName":"John","lastName":"Smith","image":"https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60","emailAddress":"john@example.com","phoneNumber":"(404) 558-2298","DOB":"1990-01-04"},{"firstName":"Jack","lastName":"Nicholson","image":"https://images.unsplash.com/photo-1509399693673-755307bfc4e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"jack@example.com","phoneNumber":"(474) 202-5766","DOB":"1946-12-25"},{"firstName":"Jaimie","lastName":"Bocco","image":"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","emailAddress":"jaimie@example.com","phoneNumber":"(404) 995-1195","DOB":"1989-11-09"},{"firstName":"Joshua","lastName":"Blankenship","image":"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60","emailAddress":"joshua@example.com","phoneNumber":"(772) 447-9999","DOB":"2001-01-01"},{"firstName":"Allison","lastName":"Cordelle","image":"https://images.unsplash.com/photo-1553867745-6e038d085e86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","emailAddress":"allison@example.com","phoneNumber":"(887) 992-4879","DOB":"1994-05-04"},{"firstName":"Bernice","lastName":"Shields","image":"https://images.unsplash.com/photo-1603471567567-8e2c7517b908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"bernice@example.com","phoneNumber":"(654) 654-4498","DOB":"1956-03-14"},{"firstName":"Sandra","lastName":"Harvey","image":"https://images.unsplash.com/photo-1530577197743-7adf14294584?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"sandra@example.com","phoneNumber":"(658) 987-4659","DOB":"1963-07-23"},{"firstName":"Marcus","lastName":"White","image":"https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","emailAddress":"marcus@example.com","phoneNumber":"(555) 555-5555","DOB":"1936-05-18"},{"firstName":"Frederick","lastName":"Sanderson","image":"https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","emailAddress":"fred@example.com","phoneNumber":"(992) 854-8574","DOB":"1978-07-09"},{"firstName":"Jorge","lastName":"Lopez","image":"https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","emailAddress":"jorge@example.com","phoneNumber":"(998) 665-9826","DOB":"1983-08-02"},{"firstName":"Matthew","lastName":"Esler","image":"https://images.unsplash.com/photo-1546458904-143d1674858d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"matthew@example.com","phoneNumber":"(456) 777-7777","DOB":"1976-09-18"},{"firstName":"Cindy","lastName":"Kelley","image":"https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"cindy@example.com","phoneNumber":"(222) 222-2222","DOB":"1965-10-26"},{"firstName":"Shannon","lastName":"McAlister","image":"https://images.unsplash.com/photo-1595897952944-878f3abafb5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"shannon@example.com","phoneNumber":"(678) 258-9241","DOB":"1980-01-05"},{"firstName":"Steve","lastName":"Corbin","image":"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"steve@example.com","phoneNumber":"(941) 947-3906","DOB":"1989-10-14"},{"firstName":"Georgia","lastName":"Beaufort","image":"https://images.unsplash.com/photo-1543123820-ac4a5f77da38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"georgia@example.com","phoneNumber":"(545) 646-4545","DOB":"1970-02-14"},{"firstName":"Leslie","lastName":"Plazas","image":"https://images.unsplash.com/photo-1583324217880-5f4d23550f94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"leslie@example.com","phoneNumber":"(885) 885-8585","DOB":"1996-02-29"},{"firstName":"James","lastName":"Dalia","image":"https://images.unsplash.com/photo-1592778777771-a0653b590581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"james@example.com","phoneNumber":"(422) 464-6353","DOB":"1971-03-26"},{"firstName":"Valarie","lastName":"Luciani","image":"https://images.unsplash.com/photo-1593595066849-7e0b34d0f026?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"valarie@example.com","phoneNumber":"(889) 445-7798","DOB":"1979-04-30"},{"firstName":"Mitchell","lastName":"Godley","image":"https://images.unsplash.com/photo-1578635073855-a89b3dd5cc18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60","emailAddress":"mitchell@example.com","phoneNumber":"(404) 995-7163","DOB":"1977-06-27"}]')}},[[22,1,2]]]);
//# sourceMappingURL=main.5ad0bceb.chunk.js.map