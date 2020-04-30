(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{a186:function(e,l,t){"use strict";var n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("q-list",[t("q-item",{attrs:{to:"field"}},[e._v("NqField")]),t("q-item",{attrs:{to:"input"}},[e._v("NqInput")]),t("q-item",{attrs:{to:"number"}},[e._v("NqNumber")]),t("q-item",{attrs:{to:"currency"}},[e._v("NqCurrency")]),t("q-item",{attrs:{to:"percentage"}},[e._v("NqPercentage")]),t("q-item",{attrs:{to:"select"}},[e._v("NqSelect")])],1)},o=[],a={name:"FieldsMenu"},s=a,i=t("2877"),d=t("eebe"),c=t.n(d),r=t("1c1c"),u=t("66e5"),p=Object(i["a"])(s,n,o,!1,null,null,null);l["a"]=p.exports;c()(p,"components",{QList:r["a"],QItem:u["a"]})},f266:function(e,l,t){"use strict";t.r(l);var n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("nq-page",{attrs:{title:"<nq-input>"}},[t("template",{slot:"aside"},[t("fields-menu")],1),t("h2",[e._v("Features")]),t("ul",[t("li",[e._v("Stylized by default with outline and light grey background, and the input text size to 1.25em")])]),t("h2",[e._v("Attributes")]),t("ul",[t("li",[e._v("Inherits any quasar <q-input> attributes and slots")]),t("li",[e._v("Size: Change the tinput's text size: "),t("code",[e._v("xs")]),e._v(", "),t("code",[e._v("sm")]),e._v(", "),t("code",[e._v("md")]),e._v(", "),t("code",[e._v("lg")]),e._v(" and "),t("code",[e._v("xl")]),e._v(". If the size atribute is set to "),t("code",[e._v("xs")]),e._v(" or "),t("code",[e._v("sm")]),e._v(", the "),t("code",[e._v("dense")]),e._v(" attribute will be automatically set")])]),t("p",[e._v("Model: "),t("code",[e._v(e._s(e.theModel))])]),t("nq-form",{attrs:{"no-actions":""}},[t("nq-input",{staticClass:"col-6",model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"event",color:"orange"}})]},proxy:!0}]),model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Label",hint:"The hint",counter:"",maxlength:"12"},scopedSlots:e._u([{key:"before",fn:function(){return[t("q-icon",{attrs:{name:"event"}})]},proxy:!0},{key:"append",fn:function(){return[t("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"}})]},proxy:!0}]),model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Password",type:"password"},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Disabled",disabled:""},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Readonly",readonly:""},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Disabled and readonly",disabled:"",readonly:""},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Borderless",readonly:"",borderless:""},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Size: xs",size:"sm"},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Size: sm",size:"sm"},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Size: md",size:"md"},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Size: lg",size:"lg"},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-6",attrs:{label:"Size: xl",size:"xl"},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}}),t("nq-input",{staticClass:"col-12",attrs:{label:"Size: xl",size:"xl",dense:"",type:"textarea"},model:{value:e.theModel,callback:function(l){e.theModel=l},expression:"theModel"}})],1),t("h3",[e._v("Sample code")]),t("vue-code-highlight",[e._v('\n<nq-form no-actions>\n  <nq-input v-model="theModel" class="col-6" />\n  <nq-input v-model="theModel" class="col-6"  >\n    <template v-slot:append>\n      <q-icon name="event" color="orange" />\n    </template>\n  </nq-input>\n  <nq-input v-model="theModel" label="Label" hint="The hint" counter maxlength="12"  class="col-6"  >\n    <template v-slot:before>\n      <q-icon name="event" />\n    </template>\n    <template v-slot:append>\n      <q-btn round dense flat icon="add" />\n    </template>\n  </nq-input>\n  <nq-input v-model="theModel" label="Password" type="password" class="col-6" />\n  <nq-input v-model="theModel" label="Disabled" disabled class="col-6"/>\n  <nq-input v-model="theModel" label="Readonly" readonly class="col-6"/>\n  <nq-input v-model="theModel" label="Disabled and readonly" disabled readonly class="col-6"/>\n  <nq-input v-model="theModel" label="Borderless" readonly borderless class="col-6"/>\n  <nq-input v-model="theModel" label="Size: xs" class="col-6" size="sm" />\n  <nq-input v-model="theModel" label="Size: sm" class="col-6" size="sm" />\n  <nq-input v-model="theModel" label="Size: md" class="col-6" size="md" />\n  <nq-input v-model="theModel" label="Size: lg" class="col-6" size="lg" />\n  <nq-input v-model="theModel" label="Size: xl" class="col-6" size="xl" />\n  <nq-input v-model="theModel" label="Size: xl" class="col-12" size="xl" dense type="textarea" />\n</nq-form>\n    ')])],2)},o=[],a=t("a186"),s={name:"Input",components:{FieldsMenu:a["a"]},data:function(){return{theModel:"The text"}}},i=s,d=t("2877"),c=t("eebe"),r=t.n(c),u=t("9989"),p=t("27f9"),h=t("0378"),m=t("0016"),v=t("9c40"),b=Object(d["a"])(i,n,o,!1,null,null,null);l["default"]=b.exports;r()(b,"components",{QPage:u["a"],QInput:p["a"],QForm:h["a"],QIcon:m["a"],QBtn:v["a"]})}}]);