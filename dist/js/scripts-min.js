(()=>{"use strict";const e=document.querySelectorAll(".needs-validation");Array.from(e).forEach(e=>{e.addEventListener("submit",t=>{e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")},!1)})})(),window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger-menu"),t=document.querySelector(".menu-list"),s=document.querySelector(".wrap-logo"),o=document.querySelector(".logo-text");s.addEventListener("mouseenter",e=>{o.classList.add("active-logo"),o.classList.remove("default-logo")}),s.addEventListener("mouseleave",e=>{o.classList.add("default-logo"),o.classList.remove("active-logo")}),e.addEventListener("click",s=>{s.target.parentElement.matches(".burger-menu")&&(t.classList.toggle("active-menu"),e.classList.toggle("burger-active"))}),t.addEventListener("mouseover",s=>{setTimeout(()=>{s.target.classList.remove("link-active"),e.classList.remove("burger-active"),t.classList.remove("active-menu")},500)});const a=document.querySelector("[data-modal]"),c=document.querySelector(".modal"),i=document.querySelector("[data-close]");function d(){c.classList.add("hide"),c.classList.remove("show"),document.body.style.overflow=""}setTimeout(()=>{c.classList.add("show"),c.classList.remove("hide"),document.body.style.overflow="hidden"},15e3),a.addEventListener("click",()=>{c.classList.add("show"),c.classList.remove("hide"),document.body.style.overflow="hidden"}),i.addEventListener("click",d),c.addEventListener("click",e=>{e.target===c&&d()}),document.addEventListener("keydown",e=>{"Escape"===e.code&&d()}),document.querySelectorAll(".wrapper-subscription").forEach(e=>{e.addEventListener("click",e=>{window.location.href="./checkouti-form.html"})});const l=document.querySelector(".login"),r=document.querySelector(".modal-l"),n=document.querySelectorAll("input");let u=document.createElement("p");l.addEventListener("click",()=>{r.classList.remove("hide")}),r.addEventListener("click",e=>{e.target===r&&(r.classList.add("hide"),n.forEach(e=>e.value=""),u.classList.add("hide"))}),function(){const e=document.querySelector(".modal__dialog-login"),t=document.querySelector(".welcome");let s=document.querySelector(".input-password-first"),o=document.querySelector(".input-password-second"),a=document.querySelector(".btn"),c=document.querySelectorAll(".eye");function i(){this.classList.toggle("fa-eye"),this.classList.toggle("icon-password"),this.classList.toggle("fa-eye-slash"),this.classList.toggle("icon-password"),"password"===this.previousElementSibling.type?this.previousElementSibling.type="text":this.previousElementSibling.type="password"}Array.from(c).forEach(e=>{e.addEventListener("click",i)}),u.textContent="Incorrect login or password",u.style.cssText='\n      top: 322px;\n      left: 153px\n      position: absolute;\n      color: red;\n      font-family: "Montserrat";\n      font-style: normal;\n      font-weight: 800;\n      font-size: 14px;\n      text-align: center;\n      ',u.classList.add("hide"),a.before(u),a.addEventListener("click",()=>{let a=s.value,c=o.value;a===c&&""!==a&&""!==c?(u.classList.add("hide"),e.classList.add("hide"),t.classList.remove("hide"),setTimeout(()=>{e.classList.remove("hide"),t.classList.add("hide"),r.classList.add("hide"),n.forEach(e=>e.value="")},1e3)):a!==c&&u.classList.remove("hide")})}();const m=document.querySelectorAll(".tabheader__item"),v=document.querySelectorAll(".tabcontent");document.querySelectorAll(".tabheader__items");function L(){v.forEach(e=>{e.classList.add("hide"),e.classList.remove("show","fade")}),m.forEach(e=>{e.classList.remove("tabheader__item_active")})}function h(e=0){v[e].classList.add("show","fade"),v[e].classList.remove("hide"),m[e].classList.add("tabheader__item_active")}L(),h(),addEventListener("click",e=>{const t=e.target;t&&t.classList.contains("tabheader__item")&&m.forEach((e,s)=>{t==e&&(L(),h(s))})})}),(()=>{"use strict";const e=document.querySelectorAll(".needs-validation");Array.from(e).forEach(e=>{e.addEventListener("submit",t=>{e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")},!1)})})();