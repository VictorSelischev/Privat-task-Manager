"use strict";(self.webpackChunkprivat_task_manager=self.webpackChunkprivat_task_manager||[]).push([[925],{925:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var s=n(791),r=n(434),a=function(t){return t.tasks.loading},i=function(t){return t.tasks.items},u=n(299),c="TaskEditor_form__NXWha",l="TaskEditor_input__WXNoz",o="TaskEditor_button__qGfcX",_=n(184),d=function(){var t=(0,r.I0)();return(0,_.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,s=n.elements.text.value;if(""!==s)return t((0,u.gI)(s)),void n.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,_.jsx)("input",{className:l,type:"text",name:"text"}),(0,_.jsx)("button",{type:"submit",className:o,children:"Add task"})]})},x="Task_wrapper__zvx3s",f="Task_text__IwwM2",m="Task_button__dYLbw",k=function(t){var e=t.id,n=t.text,s=(0,r.I0)();return(0,_.jsxs)("div",{className:x,children:[(0,_.jsx)("p",{className:f,children:n}),(0,_.jsx)("button",{type:"button",className:m,onClick:function(){s((0,u._5)(e))},children:"Delete"})]})},v="TaskList_list__Q1M-x",p=function(){var t=(0,r.v9)(i);return(0,_.jsx)("ul",{className:v,children:t.map((function(t){var e=t.id,n=t.text;return(0,_.jsx)("li",{children:(0,_.jsx)(k,{id:e,text:n})},e)}))})};function h(){var t=(0,r.I0)(),e=(0,r.v9)(a);return(0,s.useEffect)((function(){t((0,u.Jv)())}),[t]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("title",{children:"Your tasks"}),(0,_.jsx)(d,{}),(0,_.jsx)("div",{children:e&&"Request in progress..."}),(0,_.jsx)(p,{})]})}}}]);
//# sourceMappingURL=925.b92668b0.chunk.js.map