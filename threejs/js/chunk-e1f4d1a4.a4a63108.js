(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1f4d1a4"],{"38c9":function(t,e,i){},6908:function(t,e,i){"use strict";i.r(e);var n=i("f2bf"),l=i("d009"),s=(t,e)=>{const i=t.__vccOpts||t;for(const[n,l]of e)i[n]=l;return i};const o=Object(n["defineComponent"])({name:"House"}),r={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},a=Object(n["createElementVNode"])("path",{fill:"currentColor",d:"M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"},null,-1),c=[a];function h(t,e,i,l,s,o){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",r,c)}var d=s(o,[["render",h]]);const u=Object(n["defineComponent"])({name:"FullScreen"}),p={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},g=Object(n["createElementVNode"])("path",{fill:"currentColor",d:"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"},null,-1),m=[g];function b(t,e,i,l,s,o){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",p,m)}var v=s(u,[["render",b]]);const f=Object(n["defineComponent"])({name:"Crop"}),A={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w=Object(n["createElementVNode"])("path",{fill:"currentColor",d:"M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"},null,-1),x=Object(n["createElementVNode"])("path",{fill:"currentColor",d:"M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"},null,-1),y=[w,x];function _(t,e,i,l,s,o){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",A,y)}var C=s(f,[["render",_]]);const E=Object(n["defineComponent"])({name:"UserFilled"}),$={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},O=Object(n["createElementVNode"])("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"},null,-1),j=[O];function k(t,e,i,l,s,o){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",$,j)}var V=s(E,[["render",k]]);const L=Object(n["defineComponent"])({name:"VideoCamera"}),S={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z=Object(n["createElementVNode"])("path",{fill:"currentColor",d:"M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"},null,-1),B=[z];function F(t,e,i,l,s,o){return Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",S,B)}var M=s(L,[["render",F]]);
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class N{constructor(t,e,i,n,l="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),N.nextNameID=N.nextNameID||0,this.$name.id="lil-gui-name-"+ ++N.nextNameID,this.$widget=document.createElement(l),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}listen(t=!0){return this._listening=t,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class D extends N{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function H(t){let e,i;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!i&&"#"+i}const I={isPrimitive:!0,match:t=>"string"==typeof t,fromHexString:H,toHexString:H},P={isPrimitive:!0,match:t=>"number"==typeof t,fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},Y={isPrimitive:!1,match:Array.isArray,fromHexString(t,e,i=1){const n=P.fromHexString(t);e[0]=(n>>16&255)/255*i,e[1]=(n>>8&255)/255*i,e[2]=(255&n)/255*i},toHexString:([t,e,i],n=1)=>P.toHexString(t*(n=255/n)<<16^e*n<<8^i*n<<0)},T={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,i=1){const n=P.fromHexString(t);e.r=(n>>16&255)/255*i,e.g=(n>>8&255)/255*i,e.b=(255&n)/255*i},toHexString:({r:t,g:e,b:i},n=1)=>P.toHexString(t*(n=255/n)<<16^e*n<<8^i*n<<0)},G=[I,P,Y,T];class J extends N{constructor(t,e,i,n){var l;super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(l=this.initialValue,G.find(t=>t.match(l))),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const t=H(this.$text.value);t&&this._setValueFromHexString(t)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class X extends N{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",t=>{t.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class K extends N{constructor(t,e,i,n,l,s){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(l);const o=void 0!==s;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=t),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=t=>{const e=parseFloat(this.$input.value);isNaN(e)||(this._snapClampSetValue(e+t),this.$input.value=this.getValue())};let e,i,n,l,s,o=!1;const r=t=>{if(o){const n=t.clientX-e,l=t.clientY-i;Math.abs(l)>5?(t.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(n)>5&&a()}if(!o){const e=t.clientY-n;s-=e*this._step*this._arrowKeyMultiplier(t),l+s>this._max?s=this._max-l:l+s<this._min&&(s=this._min-l),this._snapClampSetValue(l+s)}n=t.clientY},a=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",a)};this.$input.addEventListener("input",()=>{const t=parseFloat(this.$input.value);isNaN(t)||this.setValue(this._clamp(t))}),this.$input.addEventListener("keydown",e=>{"Enter"===e.code&&this.$input.blur(),"ArrowUp"===e.code&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),"ArrowDown"===e.code&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))}),this.$input.addEventListener("wheel",e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))}),this.$input.addEventListener("mousedown",t=>{e=t.clientX,i=n=t.clientY,o=!0,l=this.getValue(),s=0,window.addEventListener("mousemove",r),window.addEventListener("mouseup",a)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=t=>{const e=this.$slider.getBoundingClientRect();let i=(n=t,l=e.left,s=e.right,o=this._min,r=this._max,(n-l)/(s-l)*(r-o)+o);var n,l,s,o,r;this._snapClampSetValue(i)},e=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",i)};let n,l,s=!1;const o=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),s=!1},r=e=>{if(s){const t=e.touches[0].clientX-n,i=e.touches[0].clientY-l;Math.abs(t)>Math.abs(i)?o(e):(window.removeEventListener("touchmove",r),window.removeEventListener("touchend",a))}else e.preventDefault(),t(e.touches[0].clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",r),window.removeEventListener("touchend",a)},c=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",n=>{this._setDraggingStyle(!0),t(n.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",t=>{t.touches.length>1||(this._hasScrollBar?(n=t.touches[0].clientX,l=t.touches[0].clientY,s=!0):o(t),window.addEventListener("touchmove",r),window.addEventListener("touchend",a))}),this.$slider.addEventListener("wheel",t=>{if(Math.abs(t.deltaX)<Math.abs(t.deltaY)&&this._hasScrollBar)return;t.preventDefault();const e=this._normalizeMouseWheel(t)*this._step;this._snapClampSetValue(this.getValue()+e),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(c,400)})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}}class W extends N{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(t=>{const e=document.createElement("option");e.innerHTML=t,this.$select.appendChild(e)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=-1===e?t:this._names[e],this}}class R extends N{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",t=>{"Enter"===t.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let U=!1;class Z{constructor({parent:t,autoPlace:e=void 0===t,container:i,width:n,title:l="Controls",injectStyles:s=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",t=>{"Enter"!==t.code&&"Space"!==t.code||(t.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(l),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!U&&s&&(function(t){const e=document.createElement("style");e.innerHTML=t;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(e,i):document.head.appendChild(e)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),U=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this.domElement.addEventListener("keydown",t=>t.stopPropagation()),this.domElement.addEventListener("keyup",t=>t.stopPropagation())}add(t,e,i,n,l){if(Object(i)===i)return new W(this,t,e,i);const s=t[e];switch(typeof s){case"number":return new K(this,t,e,i,n,l);case"boolean":return new D(this,t,e);case"string":return new R(this,t,e);case"function":return new X(this,t,e)}console.error("gui.add failed\n\tproperty:",e,"\n\tobject:",t,"\n\tvalue:",s)}addColor(t,e,i=1){return new J(this,t,e,i)}addFolder(t){return new Z({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(e=>{e instanceof X||e._name in t.controllers&&e.load(t.controllers[e._name])}),e&&t.folders&&this.folders.forEach(e=>{e._title in t.folders&&e.load(t.folders[e._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof X)){if(t._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);e.controllers[t._name]=t.save()}}),t&&this.folders.forEach(t=>{if(t._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);e.folders[t._title]=t.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=t=>{t.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),void 0!==this._onChange&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Q={class:"toolbar"},q={id:"carouselMenu",style:{display:"none"}},tt={class:"menubuttons"},et=Object(n["createTextVNode"])(" 新建 "),it=Object(n["createTextVNode"])(" 拍摄 "),nt=Object(n["createTextVNode"])(" 播放 "),lt={class:"scrollbar-flex-content"},st=["src"];var ot=Object(n["defineComponent"])({setup(t){const e=Object(n["ref"])([""]),i=["全屏","剖切","漫游","录制"],s=Object(n["ref"])([]),o=Object(n["ref"])(""),r=()=>{l["a"].scene.flyTo(l["a"].scene.homePosition.x,l["a"].scene.homePosition.y,l["a"].scene.homePosition.z,l["a"].scene.homeTarget.x,l["a"].scene.homeTarget.y,l["a"].scene.homeTarget.z)};let a=!1;const c=t=>{a=!a;let e=document.documentElement;a?e.requestFullscreen():document.exitFullscreen()};let h=!1;const u=t=>{h=!h,l["a"].scene.setSection(h)};let p,g=!1;const m=t=>{if(g=!g,l["a"].scene.setFirstPerson(g),null==p){let t=document.getElementById("container");t.style.marginLeft,p=new Z,p.domElement.style.position="absolute",p.domElement.style.left="50%",p.domElement.style.top="5px",p.domElement.style.marginLeft="-122px",t.appendChild(p.domElement),t.style.display,p.root.title("漫游设置"),p.add({"漫游速度":5},"漫游速度",1,100).onChange(t=>{l["a"].scene.firstPersonSpeed=t/1e3,window.setTimeout(()=>{l["a"].scene.goldenContainer.focus()},100)}),p.add({"重力":!1},"重力").onChange(t=>{l["a"].scene.setGravity(t)}),p.add({"碰撞":!1},"碰撞").onChange(t=>{l["a"].scene.collision=t,window.setTimeout(()=>{l["a"].scene.goldenContainer.focus()},100)})}p.domElement.style.display=g?"":"none"};let b=!1;const f=t=>{b=!b,s.value=[],s.value=l["a"].scene.pathAnimations,0==l["a"].scene.pathAnimations.length&&(l["a"].scene.newCapture(),o.value=l["a"].scene.curPathAnimation.name),document.getElementById("carouselMenu").style.display=b?"":"none"},A=t=>{s.value=[],l["a"].scene.captureFinish(),l["a"].scene.newCapture(),s.value=l["a"].scene.pathAnimations,o.value=l["a"].scene.curPathAnimation.name},w=(t,e)=>{let i=Number(t.index);l["a"].scene.curPathAnimation=l["a"].scene.pathAnimations[i]},x=()=>{s.value=[],l["a"].scene.capture(),s.value=l["a"].scene.pathAnimations,o.value=l["a"].scene.curPathAnimation.name},y=(t,e)=>{l["a"].scene.curPathAnimation=l["a"].scene.pathAnimations[t],l["a"].scene.curPathAnimation.selIndex=e;let i=l["a"].scene.curPathAnimation.paths[l["a"].scene.curPathAnimation.selIndex];l["a"].scene.flyTo(i.position.x,i.position.y,i.position.z,i.target.x,i.target.y,i.target.z)},_=()=>{l["a"].scene.curPathAnimation.play(l["a"].scene.curPathAnimation.selIndex)},E=t=>{for(let e=0;e<l["a"].scene.pathAnimations.length;e++){const i=l["a"].scene.pathAnimations[e];if(i.name==t){s.value=[],l["a"].scene.pathAnimations.splice(e,1),l["a"].scene.pathAnimations.length>0&&(o.value=l["a"].scene.pathAnimations[0].name,l["a"].scene.curPathAnimation=l["a"].scene.pathAnimations[0]),s.value=l["a"].scene.pathAnimations;break}}};return(t,l)=>{const a=Object(n["resolveComponent"])("el-button"),h=Object(n["resolveComponent"])("el-tooltip"),p=Object(n["resolveComponent"])("el-card"),g=Object(n["resolveComponent"])("el-radio-button"),b=Object(n["resolveComponent"])("el-radio-group"),$=Object(n["resolveComponent"])("el-scrollbar"),O=Object(n["resolveComponent"])("el-tab-pane"),j=Object(n["resolveComponent"])("el-tabs"),k=Object(n["resolveComponent"])("el-icon"),L=Object(n["resolveComponent"])("el-checkbox-button"),S=Object(n["resolveComponent"])("el-checkbox-group");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Q,[Object(n["createElementVNode"])("div",q,[Object(n["createElementVNode"])("div",tt,[Object(n["createVNode"])(h,{effect:"dark",content:"新建动画",placement:"left"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(a,{circle:"",size:"large",type:"info",style:{"margin-top":"7px"},onClick:A},{default:Object(n["withCtx"])(()=>[et]),_:1})]),_:1}),Object(n["createVNode"])(h,{effect:"dark",content:"保存视角",placement:"left"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(a,{circle:"",size:"large",type:"info",style:{"margin-top":"7px","margin-left":"2px"},onClick:x},{default:Object(n["withCtx"])(()=>[it]),_:1})]),_:1}),Object(n["createVNode"])(h,{effect:"dark",content:"播放动画",placement:"left"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(a,{circle:"",size:"large",type:"info",style:{"margin-top":"7px","margin-left":"2px"},onClick:_},{default:Object(n["withCtx"])(()=>[nt]),_:1})]),_:1})]),Object(n["createVNode"])(j,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),onTabClick:w,onTabRemove:E},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(s.value,(t,e)=>(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:e,label:t.name,name:t.name,closable:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])($,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",lt,[Object(n["createVNode"])(b,{modelValue:t.selIndex,"onUpdate:modelValue":e=>t.selIndex=e},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t.paths,(t,i)=>(Object(n["openBlock"])(),Object(n["createBlock"])(g,{label:i,class:"scrollbar-demo-item",onChange:t=>y(e,i)},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,{"body-style":{padding:"0px"},shadow:"hover"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("img",{class:"image",src:t.url},null,8,st)]),_:2},1024)]),_:2},1032,["label","onChange"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),Object(n["createVNode"])(S,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),size:"large"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{effect:"dark",content:"主视图",placement:"top"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(a,{icon:Object(n["unref"])(d),color:"#4b4b4b",size:"large",onClick:r,style:{"border-radius":"0"}},null,8,["icon"])]),_:1}),Object(n["createVNode"])(h,{effect:"dark",content:"全屏",placement:"top"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(L,{onChange:c,key:i[0],label:i[0]},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(k,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(Object(n["unref"])(v),{size:"large"})]),_:1})]),_:1},8,["label"])]),_:1}),Object(n["createVNode"])(h,{effect:"dark",content:"剖切",placement:"top"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(L,{onChange:u,key:i[1],label:i[1]},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(k,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(Object(n["unref"])(C),{size:"large"})]),_:1})]),_:1},8,["label"])]),_:1}),Object(n["createVNode"])(h,{effect:"dark",content:"漫游",placement:"top"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(L,{onChange:m,key:i[2],label:i[2]},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(k,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(Object(n["unref"])(V),{size:"large"})]),_:1})]),_:1},8,["label"])]),_:1}),Object(n["createVNode"])(h,{effect:"dark",content:"录制",placement:"top"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(L,{onChange:f,key:i[3],label:i[3]},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(k,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(Object(n["unref"])(M),{size:"large"})]),_:1})]),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue"])])}}});i("f001");const rt=ot;e["default"]=rt},f001:function(t,e,i){"use strict";i("38c9")}}]);
//# sourceMappingURL=chunk-e1f4d1a4.a4a63108.js.map