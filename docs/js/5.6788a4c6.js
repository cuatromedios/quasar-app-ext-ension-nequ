(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{a186:function(e,t,l){"use strict";var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-list",[l("q-item",{attrs:{to:"field"}},[e._v("NqField")]),l("q-item",{attrs:{to:"input"}},[e._v("NqInput")]),l("q-item",{attrs:{to:"number"}},[e._v("NqNumber")]),l("q-item",{attrs:{to:"currency"}},[e._v("NqCurrency")]),l("q-item",{attrs:{to:"percentage"}},[e._v("NqPercentage")]),l("q-item",{attrs:{to:"select"}},[e._v("NqSelect")]),l("q-item",{attrs:{to:"datetime"}},[e._v("NqDateTime")])],1)},a=[],d={name:"FieldsMenu"},m=d,s=l("2877"),i=l("eebe"),n=l.n(i),c=l("1c1c"),r=l("66e5"),h=Object(s["a"])(m,o,a,!1,null,null,null);t["a"]=h.exports;n()(h,"components",{QList:c["a"],QItem:r["a"]})},a7c6:function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("nq-page",{attrs:{title:"<nq-date-time>"}},[l("template",{slot:"aside"},[l("fields-menu")],1),l("h2",[e._v("Features")]),l("ul",[l("li",[e._v("Shows a formatted date different from the model format")])]),l("h2",[e._v("Attributes")]),l("ul",[l("li",[l("code",[e._v("model-format")]),e._v(' The moment format the date will use when the model is emitted. Default "YYYY-MM-DDTHH:mm:ssZ"')]),l("li",[l("code",[e._v("display-format")]),e._v(' The moment format the date will use when the model is viewed in the document. Default "MMMM Do YYYY, kk:mm"')]),l("li",[l("code",[e._v("display-format")]),e._v(' The moment format the date will use when the model is viewed in the document. Default "MMMM Do YYYY, kk:mm"')]),l("li",[l("code",[e._v("date-icon")]),e._v(' Icon to use to open the date picker. Default "event"')]),l("li",[l("code",[e._v("time-icon")]),e._v(' Icon to use to open the date picker. Default "access_time"')]),l("li",[l("code",[e._v("no-time")]),e._v(' Hide the time picker. Default "false"')])]),l("h3",[e._v("Model 1: "),l("code",[e._v(e._s(e.theModel1))])]),l("nq-form",{attrs:{"no-actions":""}},[l("nq-date-time",{staticClass:"col-12",attrs:{label:"Model 1 with default model and display formats"},model:{value:e.theModel1,callback:function(t){e.theModel1=t},expression:"theModel1"}}),l("nq-date-time",{staticClass:"col-12",attrs:{label:"Model 1 with display-format set",displayFormat:"YYYY/MM/DD"},model:{value:e.theModel1,callback:function(t){e.theModel1=t},expression:"theModel1"}}),l("nq-date-time",{staticClass:"col-12",attrs:{label:"Model 1 with display-format set",displayFormat:"dddd, MMMM Do YYYY, h:mm:ss a"},model:{value:e.theModel1,callback:function(t){e.theModel1=t},expression:"theModel1"}})],1),l("h3",[e._v("Model 2: "),l("code",[e._v(e._s(e.theModel2))])]),l("nq-form",{attrs:{"no-actions":""}},[l("nq-date-time",{staticClass:"col-12",attrs:{label:"Model 2 with display-format and model-format set",modelFormat:"2020-03-03 HH:mm",displayFormat:"2020/03/03 HH:mm"},model:{value:e.theModel2,callback:function(t){e.theModel2=t},expression:"theModel2"}}),l("nq-date-time",{staticClass:"col-12",attrs:{label:"Model 2 with display-format set",modelFormat:"2020-03-03 HH:mm",displayFormat:"dddd, MMMM Do YYYY HH:mm a"},model:{value:e.theModel2,callback:function(t){e.theModel2=t},expression:"theModel2"}}),l("nq-date-time",{staticClass:"col-12",attrs:{label:"Model 2 with no-time set",modelFormat:"2020-03-03",displayFormat:"2020/03/03","no-time":""},model:{value:e.theModel2,callback:function(t){e.theModel2=t},expression:"theModel2"}})],1),l("h3",[e._v("Sample code")]),l("vue-code-highlight",[e._v("\n\n  <h3>Model 1: <code>"+e._s(e.theModel1)+'</code></h3>\n  <nq-date-time label="Model 1 with default model and display formats" v-model="theModel1" class="col-12" />\n  <nq-date-time label="Model 1 with display-format set" v-model="theModel1" displayFormat="YYYY/MM/DD" class="col-12" />\n  <nq-date-time label="Model 1 with display-format set" v-model="theModel1" displayFormat="dddd, MMMM Do YYYY, h:mm:ss a" class="col-12" />\n\n  <h3>Model 2: <code>'+e._s(e.theModel2)+'</code></h3>\n  <nq-date-time label="Model 2 with display-format and model-format set" v-model="theModel2" modelFormat="2020-03-03 HH:mm" displayFormat="2020/03/03 HH:mm" class="col-12" />\n  <nq-date-time label="Model 2 with display-format set" v-model="theModel2" modelFormat="2020-03-03 HH:mm" displayFormat="dddd, MMMM Do YYYY HH:mm a" class="col-12" />\n  <nq-date-time label="Model 2 with no-time set" v-model="theModel2" modelFormat="2020-03-03" displayFormat="2020/03/03" no-time class="col-12" />\n\n  ')])],2)},a=[],d=l("a186"),m={name:"DateTime",components:{FieldsMenu:d["a"]},data:function(){return{theModel1:"2020-03-03T14:25:13-06:00",theModel2:"2020-03-03 15:30"}}},s=m,i=l("2877"),n=l("eebe"),c=l.n(n),r=l("9989"),h=l("52ee"),M=l("0378"),u=Object(i["a"])(s,o,a,!1,null,null,null);t["default"]=u.exports;c()(u,"components",{QPage:r["a"],QDate:h["a"],QForm:M["a"]})}}]);