(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{a2a3:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nq-page",{attrs:{title:"<nq-table>"}},[a("h2",[e._v("Features")]),a("ul",[a("li",[e._v("Stylized by default")])]),a("h2",[e._v("Attributes")]),a("ul",[a("li",[e._v("Inherits any quasar <q-table> attributes and slots")])]),a("nq-table",{attrs:{tile:"The table",columns:e.columns,data:e.theData,actions:e.actions,"row-key":"id"},scopedSlots:e._u([{key:"body-cell-calc",fn:function(t){return[a("q-td",{attrs:{props:t}},[e._v("\n        "+e._s(t.row.sales)+" x 2 = "),a("q-badge",{attrs:{color:"purple",label:2*t.row.sales}})],1)]}}])}),a("h3",[e._v("Columns:")]),a("pre",[e._v(e._s(e.columns))]),a("h3",[e._v("Actions:")]),a("p",[e._v("An array with "),a("code",[e._v("icon")]),e._v(", "),a("code",[e._v("tooltip")]),e._v(" and "),a("code",[e._v("method")]),e._v(" properties. Method is a method in the page that receives the row as parameter, for example "),a("code",[e._v("this.editBook")]),e._v(". If no "),a("code",[e._v("label")]),e._v(" is set then the button will be rounded")]),a("pre",[e._v(e._s(e.actions))]),a("h3",[e._v("Data:")]),a("pre",[e._v(e._s(e.theData))])],1)},o=[],n={name:"Input",data:function(){return{columns:[{name:"month",label:"Month",field:"month",align:"left"},{name:"sales",label:"Sales",field:"sales"},{name:"calc",label:"Calculation"}],theData:[{id:"m0",month:"January",sales:2},{id:"m1",month:"February",sales:4},{id:"m2",month:"March",sales:6},{id:"m3",month:"April",sales:3},{id:"m4",month:"May",sales:9},{id:"m5",month:"June",sales:1},{id:"m6",month:"July",sales:5}],actions:[{icon:"edit",method:this.edit,tooltip:"Edit",label:"Details"},{icon:"delete",color:"negative",method:this.edit,tooltip:"Delete"}]}},methods:{edit:function(e){console.log("Edit",e)}}},s=n,i=a("2877"),d=a("eebe"),r=a.n(d),c=a("9989"),h=a("eaac"),u=a("db86"),m=a("58a8"),_=Object(i["a"])(s,l,o,!1,null,null,null);t["default"]=_.exports;r()(_,"components",{QPage:c["a"],QTable:h["a"],QTd:u["a"],QBadge:m["a"]})}}]);