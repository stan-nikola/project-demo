document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))})),function(){var e={openNavBtn:document.querySelector("[data-mobile-nav-open]"),closeNavBtn:document.querySelector("[data-mobile-nav-close]"),nav:document.querySelector("[data-mobile-nav]")};function o(){e.nav.classList.toggle("is-hidden")}e.openNavBtn.addEventListener("click",o),e.closeNavBtn.addEventListener("click",o),document.body.addEventListener("closeSideNav",(function(){e.nav.classList.contains("is-hidden")||e.nav.classList.add("is-hidden")}))}(),function(){var e={openModalBtn:document.querySelectorAll("[data-modal-open-hero]"),closeModalBtn:document.querySelector("[data-modal-close-hero]"),modal:document.querySelector("[data-modal-hero]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")||document.body.dispatchEvent(new Event("closeSideNav"))}e.openModalBtn.forEach((function(e){return e.addEventListener("click",o)})),e.closeModalBtn.addEventListener("click",o)}(),function(){function e(e){var o=e.target.closest(".products__item");if(o){var t=o.querySelector(".products__overlay");t&&t.classList.toggle("products__overlay--show")}}document.querySelectorAll(".products__button").forEach((function(o){return o.addEventListener("click",e)}))}(),$(".single-item").slick({dots:!0,arrows:!1}),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open-fr]"),closeModalBtn:document.querySelector("[data-modal-close-fr]"),modal:document.querySelector("[data-modal-fr]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}();
//# sourceMappingURL=index.8df0d283.js.map
