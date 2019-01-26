/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */!function(e){function t(t){for(var n,i,a=t[0],c=t[1],p=t[2],d=0,u=[];d<a.length;d++)i=a[d],r[i]&&u.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);u.length;)u.shift()();return s.push.apply(s,p||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={0:0},s=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var p=0;p<a.length;p++)t(a[p]);var l=c;s.push(["../wp4-react-rescope-sass-hmr/App/index.js",1]),o()}({"../parentProject/App/stores sync recursive ^\\.\\/te[^\\\\\\/]+\\.js$":function(e,t){function o(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id="../parentProject/App/stores sync recursive ^\\.\\/te[^\\\\\\/]+\\.js$"},"../parentProject/node_modules/moment/locale sync recursive ^\\.\\/(fr|en|us)$":function(e,t,o){var n={"./fr":"../parentProject/node_modules/moment/locale/fr.js"};function r(e){var t=s(e);return o(t)}function s(e){var t=n[e];if(!(t+1)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="../parentProject/node_modules/moment/locale sync recursive ^\\.\\/(fr|en|us)$"},"../wp4-react-rescope-sass-hmr/App/index.html.tpl":function(e,t){var o;e.exports=((o=function(e){return'<!DOCTYPE html>\x3c!-- ~ Copyright (c)  2018 Wise Wild Web . ~ ~  MIT License ~ ~  Permission is hereby granted, free of charge, to any person obtaining a copy ~  of this software and associated documentation files (the "Software"), to deal ~  in the Software without restriction, including without limitation the rights ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell ~  copies of the Software, and to permit persons to whom the Software is ~  furnished to do so, subject to the following conditions: ~ ~  The above copyright notice and this permission notice shall be included in all ~  copies or substantial portions of the Software. ~ ~  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE ~  SOFTWARE. ~ ~ @author : Nathanael Braun ~ @contact : caipilabs@gmail.com --\x3e<html lang="en"><head> <meta charset="UTF-8"> <title>Really basic drafty rescope + react webpack-inherit example</title> <script>window.__STATE__ ='+(e.state||"{}")+';<\/script></head><body><div id="app">'+(e.app||"")+"</div><script src=\"./App.js\"><\/script><script> App.renderTo(document.getElementById('app'), __STATE__);<\/script></body></html>"}).render=o,o)},"../wp4-react-rescope-sass-hmr/App/index.js":function(e,t,o){"use strict";o.r(t);var n=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/classCallCheck.js"),r=o.n(n),s=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/createClass.js"),i=o.n(s),a=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),c=o.n(a),p=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),l=o.n(p),d=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/inherits.js"),u=o.n(d),h=o("../parentProject/node_modules/react/index.js"),m=o.n(h),f=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/objectSpread.js"),b=o.n(f),O=o("../parentProject/node_modules/react-rnd/lib/index.js"),T=o("../parentProject/node_modules/rscopes/index.js"),E=(o("../parentProject/node_modules/rscopes/spells.js"),o("../parentProject/node_modules/moment/moment.js")),I=o.n(E),w=function(e){var t=e.weatherData;return m.a.createElement("div",{className:"MeteoInfos"},m.a.createElement("div",{className:"location"},t.name,"  ( ",t.weather[0]&&t.weather[0].description," )"),m.a.createElement("div",{className:"picto"},t.weather[0]&&m.a.createElement("img",{src:"http://openweathermap.org/img/w/"+t.weather[0].icon+".png"})),m.a.createElement("div",{className:"infos"},m.a.createElement("div",{className:"dt"}),m.a.createElement("div",{className:"dt"},I()(1e3*t.dt).format("MMMM Do YYYY, h:mm:ss a")),m.a.createElement("div",{className:"wind"},t.wind.speed,"mh")))};!function(){var e=o("../wp4-react-rescope-sass-hmr/node_modules/react-hot-loader/index.js").default;if(e){var n=void 0!==t?t:exports;if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\containers\\MeteoInfos.js")}}else e.register(n,"module.exports","G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\containers\\MeteoInfos.js")}}();var A,S=o("../parentProject/node_modules/superagent/lib/client.js"),g=o.n(S),N=function(e){function t(){return r()(this,t),c()(this,l()(t).apply(this,arguments))}return u()(t,e),i()(t,[{key:"apply",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=n.location;n.results,n.record;return(r=r||o.defaultLocation)==t.location&&t.results?t:r?(this.wait(),g.a.get(o.src+r).then(function(t){r===e.data.location&&(e.push({results:t.body,location:r}),e.$actions.updatePostIt(b()({},o.record,{location:r})))}).then(function(t){return e.release()}).catch(function(t){return e.release()}),{location:r,fetching:!0}):t}}]),t}(T.Store);N.state={src:"http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",autoUpdate:1e4},N.actions={updateSearch:function(e){return e.length,{location:e}}},function(){var e=o("../wp4-react-rescope-sass-hmr/node_modules/react-hot-loader/index.js").default;if(e){var n=void 0!==t?t:exports;if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\stores\\MeteoSearch.js")}}else e.register(n,"module.exports","G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\stores\\MeteoSearch.js")}}();var R=Object(T.reScope)({MeteoSearch:N},{key:"postIt"})(A=Object(T.propsToScope)(["record.location:MeteoSearch.defaultLocation"])(A=Object(T.scopeToProps)(["MeteoSearch"])(A=function(e){function t(){var e,o;r()(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(o=c()(this,(e=l()(t)).call.apply(e,[this].concat(s)))).state={},o.saveState=function(e,t){var n=o.props,r=n.$actions,s=n.MeteoSearch,i=n.record;r.updatePostIt(b()({},i,{location:s.location,size:o.state.size||i.size,position:o.state.position||i.position}))},o}return u()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.record,n=(o=void 0===o?{}:o).position,r=o.size,s=t.record,i=t.MeteoSearch,a=t.$actions,c=t.onSelect,p=t.selected,l=this.state;return m.a.createElement(O.a,{z:p?2e3:1,size:l.size||r,position:l.position||n,onDragStop:this.saveState,onResizeStop:this.saveState,onDrag:function(t,o){!p&&c(s),e.setState({position:{x:o.x,y:o.y}})},onResize:function(t,o,n,r,s){e.setState({position:s,size:{width:n.offsetWidth,height:n.offsetHeight}})}},m.a.createElement("div",{className:"postit handle"},!this.state.editing&&m.a.createElement("div",{className:"text"},(i.fetching?"Loading....":i.results&&m.a.createElement(w,{weatherData:i.results}))||"Edit me !",m.a.createElement("button",{onClick:function(t){return e.setState({editing:!0})},className:"edit"},"🖋"),m.a.createElement("button",{onClick:function(e){return a.rmPostIt(s)},className:"delete"},"🖾"))||m.a.createElement("div",{className:"editor"},m.a.createElement("div",{className:"search"},m.a.createElement("input",{type:"text",onChange:function(t){e.setState({searching:t.target.value}),a.updateSearch(t.target.value)},value:void 0!==l.searching?l.searching:s.location,onMouseDown:function(e){return e.stopPropagation()}})),i.fetching?"Loading....":i.results&&m.a.createElement(w,{weatherData:i.results}),m.a.createElement("button",{disabled:i.fetching,onClick:function(t){return e.setState({editing:!1})}},"💾"))))}}]),t}(m.a.Component))||A)||A)||A;!function(){var e=o("../wp4-react-rescope-sass-hmr/node_modules/react-hot-loader/index.js").default;if(e){var n=void 0!==t?t:exports;if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\containers\\MeteoWidget.js")}}else e.register(n,"module.exports","G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\containers\\MeteoWidget.js")}}();var v,y=o("../parentProject/node_modules/react-dom/server.browser.js"),j=(o("./App/App.scss"),{});(v=o("./App/stores sync recursive ^\\.\\/te[^\\\\\\/]+\\.js$")).keys().forEach(function(e){var t=e.substr(2);j[t]=j[t]||v(e)}),(v=o("../parentProject/App/stores sync recursive ^\\.\\/te[^\\\\\\/]+\\.js$")).keys().forEach(function(e){var t=e.substr(2);j[t]=j[t]||v(e)});var x,P=j;!function(){var e=o("../wp4-react-rescope-sass-hmr/node_modules/react-hot-loader/index.js").default;if(e){var n=void 0!==t?t:exports;if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\wp4-react-rescope-sass-hmr\\App\\MapOf.App_stores_te__js.gen.js")}}else e.register(n,"module.exports","G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\wp4-react-rescope-sass-hmr\\App\\MapOf.App_stores_te__js.gen.js")}}(),console.log(P);var H=Object(T.scopeToState)(["appState","someData"])(x=function(e){function t(){return r()(this,t),c()(this,l()(t).apply(this,arguments))}return u()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.state,o=t.someData,n=t.appState;return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,"Really basic drafty rescope SSR example"),o.items.map(function(t){return m.a.createElement(R,{key:t._id,record:t,onSelect:function(o){return e.$actions.selectPostIt(t._id)},selected:t._id==n.selectedPostItId})}),m.a.createElement("div",{className:"newBtn button",onClick:this.$actions.newPostIt},"Add Post It"),m.a.createElement("div",{className:"saveBtn button",onClick:this.$actions.saveState},"Save state"))}}]),t}(m.a.Component))||x;!function(){var e=o("../wp4-react-rescope-sass-hmr/node_modules/react-hot-loader/index.js").default;if(e){var n=void 0!==t?t:exports;if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\App.js")}}else e.register(n,"module.exports","G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\App.js")}}();var _,L,D,C=o("./node_modules/shortid/index.js"),M=o.n(C),F=o("../parentProject/node_modules/react-dom/index.js"),W=o.n(F),k=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/toConsumableArray.js"),U=o.n(k),G=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js"),z=o.n(G),B=T.spells.asStore,Y=(T.spells.asScope,_={appState:{selectedPostItId:"rkUQHZrqM",selectPostIt:function(e){return{selectedPostItId:e}}},someData:{src:"/api/hello",items:[{_id:"rkUQHZrqM",location:"paris",size:{width:350,height:200},position:{x:321,y:167}},{_id:"r1bcuMrcM",location:"rio",size:{width:350,height:200},position:{x:260,y:576}}],newPostIt:function(){return{items:[].concat(U()(this.nextState.items),[{_id:M.a.generate(),size:{width:350,height:200},position:{x:100+~~(600*Math.random()),y:100+~~(600*Math.random())},text:"New Post It #"+this.nextState.items.length}])}},updatePostIt:function(e){return{items:this.nextState.items.map(function(t){return t._id===e._id?e:t})}},rmPostIt:function(e){return{items:this.nextState.items.filter(function(t){return t._id!==e._id})}},saveState:function(){g.a.post("/",this.scopeObj.serialize()).then(function(e,t){console.log(e,t)})}}},z()(_,"appState",[B],(L=(L=Object.getOwnPropertyDescriptor(_,"appState"))?L.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return L}}),_),z()(_,"someData",[B],(D=(D=Object.getOwnPropertyDescriptor(_,"someData"))?D.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return D}}),_),_);!function(){var e=o("../wp4-react-rescope-sass-hmr/node_modules/react-hot-loader/index.js").default;if(e){var n=void 0!==t?t:exports;if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\AppScope.js")}}else e.register(n,"module.exports","G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\parentProject\\App\\AppScope.js")}}();var $=o("../wp4-react-rescope-sass-hmr/App/index.html.tpl"),V={renderTo:function(e,t){var o=new T.Scope(Y,{id:"App",autoDestroy:!0});window.contexts=T.Scope.scopes,t&&o.restore(t),o.mount(["appState","someData"]).then(function(t){W.a.render(m.a.createElement(H,{__scope:o}),e)})},renderSSR:function(e,t){var o=M.a.generate(),n=new T.Scope(Y,{id:o,autoDestroy:!1});e.state&&n.restore(e.state,{alias:"App"}),n.once("destroy",function(e){return console.log("destroy ",o,"; active ctx :",Object.keys(T.Scope.scopes))}),n.mount(["appState","someData"]).then(function(e){var o,r,s=Object(y.renderToString)(m.a.createElement(H,{__scope:n})),i=n.isStableTree();n.onceStableTree(function(e){try{o=$.render({app:s,state:JSON.stringify(r=n.serialize({alias:"App"}))})}catch(e){return t(e)}console.log("Was ",i?"stable":"not stable",r),t(null,o,!i&&r),n.destroy()})})}};"undefined"!=typeof window&&(window.App=V);t.default=V;!function(){var e=o("../wp4-react-rescope-sass-hmr/node_modules/react-hot-loader/index.js").default;if(e){var n=void 0!==t?t:exports;if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\wp4-react-rescope-sass-hmr\\App\\index.js")}}else e.register(n,"module.exports","G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\wp4-react-rescope-sass-hmr\\App\\index.js")}}()},"../wp4-react-rescope-sass-hmr/node_modules/css-loader/index.js?!../wp4-react-rescope-sass-hmr/node_modules/postcss-loader/src/index.js?!../wp4-react-rescope-sass-hmr/node_modules/sass-loader/lib/loader.js?!./App/App.scss":function(e,t,o){(e.exports=o("../wp4-react-rescope-sass-hmr/node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"@charset \"UTF-8\";\n/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : caipilabs@gmail.com\n */\n/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : caipilabs@gmail.com\n */\n/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : caipilabs@gmail.com\n */\n.button {\n  border: 2px solid green !important; }\n\nh1:after {\n  content: '( overrided with webpack-inherit )';\n  font-size: 12px;\n  font-style: italic; }\n\n/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : caipilabs@gmail.com\n */\n.postit {\n  border: 2px solid green !important; }\n\n.newBtn {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  display: inline-block; }\n\n.saveBtn {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  display: inline-block; }\n\n#app {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.button {\n  background-color: #3bb3e0;\n  padding: 10px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  text-decoration: none;\n  color: #fff;\n  border: solid 1px #186f8f;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#2ca0ca), to(#3eb8e5));\n  background-image: -webkit-linear-gradient(top, #2ca0ca 0%, #3eb8e5 100%);\n  background-image: -o-linear-gradient(top, #2ca0ca 0%, #3eb8e5 100%);\n  background-image: linear-gradient(to bottom, #2ca0ca 0%, #3eb8e5 100%);\n  -webkit-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\n          box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\n  border-radius: 5px; }\n  .button:active {\n    padding-bottom: 9px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 11px;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#3eb8e5), to(#2ca0ca));\n    background-image: -webkit-linear-gradient(top, #3eb8e5 0%, #2ca0ca 100%);\n    background-image: -o-linear-gradient(top, #3eb8e5 0%, #2ca0ca 100%);\n    background-image: linear-gradient(to bottom, #3eb8e5 0%, #2ca0ca 100%); }\n\n.postit {\n  line-height: 1;\n  text-align: center;\n  margin: -10px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0;\n  font-size: 22px;\n  display: inline-block;\n  border: 1px solid #E8E8E8;\n  border-radius: 10px;\n  background: white; }\n  .postit .text {\n    margin-top: 40px; }\n    .postit .text .edit {\n      position: absolute;\n      bottom: 5px;\n      left: 5px; }\n    .postit .text .delete {\n      position: absolute;\n      bottom: 5px;\n      right: 5px; }\n  .postit .editor {\n    position: absolute;\n    bottom: 30px;\n    right: 10px;\n    top: 30px;\n    left: 10px; }\n    .postit .editor textarea {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%; }\n    .postit .editor button {\n      position: absolute;\n      bottom: -25px;\n      left: 0px;\n      width: 100%; }\n",""])},"./App/App.scss":function(e,t,o){var n=o("../wp4-react-rescope-sass-hmr/node_modules/css-loader/index.js?!../wp4-react-rescope-sass-hmr/node_modules/postcss-loader/src/index.js?!../wp4-react-rescope-sass-hmr/node_modules/sass-loader/lib/loader.js?!./App/App.scss");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o("../wp4-react-rescope-sass-hmr/node_modules/style-loader/lib/addStyles.js")(n,r);n.locals&&(e.exports=n.locals)},"./App/stores sync recursive ^\\.\\/te[^\\\\\\/]+\\.js$":function(e,t,o){var n={"./test.js":"./App/stores/test.js"};function r(e){var t=s(e);return o(t)}function s(e){var t=n[e];if(!(t+1)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="./App/stores sync recursive ^\\.\\/te[^\\\\\\/]+\\.js$"},"./App/stores/test.js":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return T});var n=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/objectSpread.js"),r=o.n(n),s=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/classCallCheck.js"),i=o.n(s),a=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/createClass.js"),c=o.n(a),p=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),l=o.n(p),d=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),u=o.n(d),h=o("../wp4-react-rescope-sass-hmr/node_modules/@babel/runtime/helpers/inherits.js"),m=o.n(h),f=o("../parentProject/node_modules/rscopes/index.js"),b=(o("../parentProject/node_modules/rscopes/spells.js"),o("../parentProject/node_modules/superagent/lib/client.js")),O=o.n(b),T=function(e){function t(){return i()(this,t),l()(this,u()(t).apply(this,arguments))}return m()(t,e),c()(t,[{key:"apply",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,s=n.location;n.results,n.record;return(s=s||o.defaultLocation)==t.location&&t.results?t:s?(this.wait(),O.a.get(o.src+s).then(function(t){s===e.data.location&&(e.push({results:t.body,location:s}),e.$actions.updatePostIt(r()({},o.record,{location:s})))}).then(function(t){return e.release()}).catch(function(t){return e.release()}),{location:s,fetching:!0}):t}}]),t}(f.Store);T.state={src:"http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q="},T.actions={updateSearch:function(e){return e.length,{location:e}}},function(){var e=o("../wp4-react-rescope-sass-hmr/node_modules/react-hot-loader/index.js").default;if(e){var n=void 0!==t?t:exports;if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\childProject\\App\\stores\\test.js")}}else e.register(n,"module.exports","G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-rs-inherit\\childProject\\App\\stores\\test.js")}}()}});