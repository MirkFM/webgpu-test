!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function r(e){var t=document.getElementById(e);if(!t)throw Error("#"+e+" is not found.");return t}function i(e,t){void 0===e&&(e=document.body);var n=e.querySelector(t);if(!n)throw Error(t+" is not found.");return n}function o(e,t){void 0===e&&(e=document.body);var n=e.querySelectorAll(t);return Array.from(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.getElementById=r,t.querySelector=i,t.querySelectorAll=o},function(e,t,n){"use strict";function r(e,t){c.set(e,t)}var i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function u(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(u,a)}s((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(u=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(o,n[1])).done)return u;switch(o=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,o=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){s.label=n[1];break}if(6===n[0]&&s.label<u[1]){s.label=u[1],u=n;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(n);break}u[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],o=0}finally{i=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,u,a,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var u,a=n(0);!function(e){e[e.SETUP=0]="SETUP",e[e.READY=1]="READY",e[e.RUNNING=2]="RUNNING"}(u=t.State||(t.State={}));var s;!function(e){e[e.NONE=0]="NONE",e[e.SUCCESS=1]="SUCCESS",e[e.FAILED=2]="FAILED"}(s=t.Result||(t.Result={}));var c=new Map,d=function(){function e(e){var t=this;this.$base=e,this._state=u.SETUP,this._result=s.NONE,this.$runButton=a.querySelector(e,".Playground-Run"),this.$runButton.disabled=this.state!==u.READY,this.$runButton.addEventListener("click",function(){return t.onRunButtonClick()}),this.$log=a.querySelector(e,".Playground-Log"),this.testId=e.dataset.test||"",this.setupAsync().then(function(){return t.setState(u.READY)})}return Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"result",{get:function(){return this._result},enumerable:!0,configurable:!0}),e.prototype.setupAsync=function(){return i(this,void 0,void 0,function(){return o(this,function(e){return[2]})})},e.prototype.setState=function(e){this.$runButton.disabled=e!==u.READY,this.$base.classList.toggle("Playground-state-setup",e===u.SETUP),this.$base.classList.toggle("Playground-state-ready",e===u.READY),this.$base.classList.toggle("Playground-state-running",e===u.RUNNING),this._state=e},e.prototype.onRunButtonClick=function(){this.run()},e.prototype.onTestFinish=function(e,t){switch(this.$base.classList.toggle("Playground-result-success",e===s.SUCCESS),this.$base.classList.toggle("Playground-result-failed",e===s.FAILED),e){case s.FAILED:this.print(t.message)}this.setState(u.READY),this._result=e},e.prototype.print=function(e){this.$log.innerText+=e+"\n"},e.prototype.run=function(){return i(this,void 0,void 0,function(){var e,t;return o(this,function(n){switch(n.label){case 0:if(this.state!==u.READY)return[2];if(this.setState(u.RUNNING),!c.has(this.testId))return[2,this.onTestFinish(s.FAILED,new Error("Test '"+this.testId+"' is not found."))];e=c.get(this.testId),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,e(this)];case 2:return n.sent(),[3,4];case 3:return t=n.sent(),[2,this.onTestFinish(s.FAILED,t)];case 4:return[2,this.onTestFinish(s.SUCCESS,null)]}})})},e}();t.default=d,t.registerTest=r},function(e,t,n){"use strict";function r(){i.querySelectorAll(document.body,".Playground").forEach(function(e){return new o.default(e)})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(1);n(5),document.addEventListener("DOMContentLoaded",r)},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(2),n(3)},function(e,t,n){"use strict";function r(e,t){return i(this,void 0,void 0,function(){var n,r,i,u,a,s,c;return o(this,function(o){if(!(n=document.createElement("canvas").getContext("webgpu")))throw new Error("WebGPURenderingContext initialization failed.");return r=n.createLibrary("void kernel noop(){}"),i=n.createComputePipelineState(r.functionWithName("noop")),u=n.createCommandQueue(),a=u.createCommandBuffer(),s=a.createComputeCommandEncoder(),s.setComputePipelineState(i),s.dispatch({width:e[0],height:e[1],depth:e[2]},{width:t[0],height:t[1],depth:t[2]}),s.endEncoding(),c=a.completed,a.commit(),[2,c]})})}var i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function u(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(u,a)}s((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(u=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(o,n[1])).done)return u;switch(o=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,o=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){s.label=n[1];break}if(6===n[0]&&s.label<u[1]){s.label=u[1],u=n;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(n);break}u[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],o=0}finally{i=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,u,a,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},u=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(1);a.registerTest("browser_support",function(e){return i(u,void 0,void 0,function(){var t,n,r;return o(this,function(i){if(t="WebGPURenderingContext"in window,e.print("('WebGPURenderingContext' in window) == "+t),n="WebGPUComputePipelineState"in window,e.print("('WebGPUComputePipelineState' in window) == "+n),r="WebGPUComputeCommandEncoder"in window,e.print("('WebGPUComputeCommandEncoder' in window) == "+r),!t)throw new Error("WebGPU is not supported.");if(!n)throw new Error("WebGPUComputePipelineState is not supported.");if(!r)throw new Error("isComputeCommandEncoder is not supported.");return[2]})})}),a.registerTest("simplest_kernel_1",function(e){return i(u,void 0,void 0,function(){return o(this,function(e){return[2,r([1,1,1],[1,1,1])]})})}),a.registerTest("simplest_kernel_2",function(e){return i(u,void 0,void 0,function(){return o(this,function(e){return[2,r([1,1,1],[8,1,1])]})})}),a.registerTest("simplest_kernel_3",function(e){return i(u,void 0,void 0,function(){return o(this,function(e){return[2,r([1,1,1],[8,8,1])]})})}),a.registerTest("simplest_kernel_4",function(e){return i(u,void 0,void 0,function(){return o(this,function(e){return[2,r([1,1,1],[8,8,8])]})})}),a.registerTest("simplest_kernel_5",function(e){return i(u,void 0,void 0,function(){return o(this,function(e){return[2,r([8,1,1],[1024,1,1])]})})}),a.registerTest("copy_kernel",function(e){return i(u,void 0,void 0,function(){var e,t,n,r,i,u,a,s,c,d,l,f,a;return o(this,function(o){switch(o.label){case 0:if(!(e=document.createElement("canvas").getContext("webgpu")))throw new Error("WebGPURenderingContext initialization failed.");for(t=e.createLibrary("\nkernel void copy(const device float *A[[buffer(0)]], \n                 device float *B[[buffer(1)]]) \n{\n    for (int i = 0; i < 100; i++)\n    {\n        B[i] = A[i];\n    }\n}\n"),n=e.createComputePipelineState(t.functionWithName("copy")),r=e.createCommandQueue(),i=r.createCommandBuffer(),u=new Float32Array(100),a=0;a<100;a++)u[a]=a;return s=new Float32Array(100),c=e.createBuffer(u),d=e.createBuffer(s),l=i.createComputeCommandEncoder(),l.setComputePipelineState(n),l.setBuffer(c,0,0),l.setBuffer(d,0,1),l.dispatch({width:1,height:1,depth:1},{width:1,height:1,depth:1}),l.endEncoding(),f=i.completed,i.commit(),[4,f];case 1:for(o.sent(),u=new Float32Array(c.contents),s=new Float32Array(d.contents),a=0;a<100;a++)if(s[a]!==u[a])throw new Error("Assertion failed: A["+a+"](="+u[a]+") !== B["+a+"](="+s[a]+")");return[2,f]}})})}),a.registerTest("thread_position_qualifier1",function(e){return i(u,void 0,void 0,function(){var t,n,r,i,u,a,s,c,d,l,f,s,s;return o(this,function(o){switch(o.label){case 0:if(!(t=document.createElement("canvas").getContext("webgpu")))throw new Error("WebGPURenderingContext initialization failed.");for(n=t.createLibrary("\n#include <metal_stdlib>\nusing namespace metal;\n\nkernel void copy(device float *A[[buffer(0)]],\n                 uint3 thread_position_in_grid[[thread_position_in_grid]],\n                 uint3 thread_position_in_threadgroup[[thread_position_in_threadgroup]],\n                 uint thread_index_in_threadgroup[[thread_index_in_threadgroup]],\n                 uint3 threadgroup_position_in_grid[[threadgroup_position_in_grid]],\n                 uint3 threads_per_grid[[threads_per_grid]],\n                 uint3 threads_per_threadgroup[[threads_per_threadgroup]],\n                 uint3 threadgroups_per_grid[[threadgroups_per_grid]],\n                 uint thread_execution_width[[thread_execution_width]])\n{\n    if (thread_position_in_grid[0] != 2*5-1 ||\n        thread_position_in_grid[1] != 3*6-1 ||\n        thread_position_in_grid[2] != 4*7-1) return;\n    \n    A[0] = thread_position_in_grid[0];\n    A[1] = thread_position_in_grid[1];\n    A[2] = thread_position_in_grid[2];\n    A[3] = thread_position_in_threadgroup[0];\n    A[4] = thread_position_in_threadgroup[1];\n    A[5] = thread_position_in_threadgroup[2];\n    A[6] = thread_index_in_threadgroup;\n    A[7] = threadgroup_position_in_grid[0];\n    A[8] = threadgroup_position_in_grid[1];\n    A[9] = threadgroup_position_in_grid[2];\n    A[10] = threads_per_grid[0];\n    A[11] = threads_per_grid[1];\n    A[12] = threads_per_grid[2];\n    A[13] = threads_per_threadgroup[0];\n    A[14] = threads_per_threadgroup[1];\n    A[15] = threads_per_threadgroup[2];\n    A[16] = threadgroups_per_grid[0];\n    A[17] = threadgroups_per_grid[1];\n    A[18] = threadgroups_per_grid[2];\n    A[19] = thread_execution_width;\n}\n"),r=t.createComputePipelineState(n.functionWithName("copy")),i=t.createCommandQueue(),u=i.createCommandBuffer(),a=new Float32Array(20),s=0;s<20;s++)a[s]=0;return c=t.createBuffer(a),d=u.createComputeCommandEncoder(),d.setComputePipelineState(r),d.setBuffer(c,0,0),d.dispatch({width:2,height:3,depth:4},{width:5,height:6,depth:7}),d.endEncoding(),l=u.completed,u.commit(),[4,l];case 1:for(o.sent(),a=new Float32Array(c.contents),f=[9,17,27,4,5,6,209,1,2,3,10,18,28,5,6,7,2,3,4,32],s=0;s<20;s++)e.print("A["+s+"] = "+a[s]);for(s=0;s<20;s++)if(a[s]!==f[s])throw new Error("Assertion failed: A["+s+"](="+a[s]+") !== "+f[s]);return[2,l]}})})}),a.registerTest("thread_position_qualifier2",function(e){return i(u,void 0,void 0,function(){var e,t,n,r,i,u,a,s,c,d,l,f,a;return o(this,function(o){switch(o.label){case 0:if(!(e=document.createElement("canvas").getContext("webgpu")))throw new Error("WebGPURenderingContext initialization failed.");for(t=e.createLibrary("\n#include <metal_stdlib>\nusing namespace metal;\n\nkernel void copy(const device float *A[[buffer(0)]],\n                 device float *B[[buffer(1)]],\n                 uint gid[[thread_position_in_grid]],\n                 uint num_threads[[threads_per_grid]])\n{\n    for (uint i = gid; i < 4096; i += num_threads)\n    {\n        B[i] = A[i];\n    }\n}\n"),n=e.createComputePipelineState(t.functionWithName("copy")),r=e.createCommandQueue(),i=r.createCommandBuffer(),u=new Float32Array(4096),a=0;a<4096;a++)u[a]=a;return s=new Float32Array(4096),c=e.createBuffer(u),d=e.createBuffer(s),l=i.createComputeCommandEncoder(),l.setComputePipelineState(n),l.setBuffer(c,0,0),l.setBuffer(d,0,1),l.dispatch({width:1,height:1,depth:1},{width:1024,height:1,depth:1}),l.endEncoding(),f=i.completed,i.commit(),[4,f];case 1:for(o.sent(),u=new Float32Array(c.contents),s=new Float32Array(d.contents),a=0;a<4096;a++)if(s[a]!==u[a])throw new Error("Assertion failed: A["+a+"](="+u[a]+") !== B["+a+"](="+s[a]+")");return[2,f]}})})}),a.registerTest("memory_barrier",function(e){return i(u,void 0,void 0,function(){var e,t,n,r,i,u,a,s,c,d,a;return o(this,function(o){switch(o.label){case 0:if(!(e=document.createElement("canvas").getContext("webgpu")))throw new Error("WebGPURenderingContext initialization failed.");for(t=e.createLibrary("\n#include <metal_stdlib>\nusing namespace metal;\n\nkernel void copy(device float *A[[buffer(0)]], \n                 uint gid[[thread_position_in_grid]]) \n{\n    for (uint i = 0; i < 4; i++)\n    {\n        uint pos = i * 1024 + gid;\n        float v = (pos < 4095) ? A[pos + 1] : 0;\n\n        threadgroup_barrier(mem_flags::mem_device);\n\n        if (pos < 4095) A[pos] = v;\n    }\n}\n"),n=e.createComputePipelineState(t.functionWithName("copy")),r=e.createCommandQueue(),i=r.createCommandBuffer(),u=new Float32Array(4096),a=0;a<4096;a++)u[a]=a;return s=e.createBuffer(u),c=i.createComputeCommandEncoder(),c.setComputePipelineState(n),c.setBuffer(s,0,0),c.dispatch({width:1,height:1,depth:1},{width:1024,height:1,depth:1}),c.endEncoding(),d=i.completed,i.commit(),[4,d];case 1:for(o.sent(),u=new Float32Array(s.contents),a=1;a<4095;a++)if(u[a-1]!==a)throw new Error("Assertion failed: A["+a+" - 1](="+u[a-1]+") !== "+a);return[2,d]}})})})}]);