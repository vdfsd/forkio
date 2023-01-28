// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()







// const listBoxPrice = document.querySelectorAll('.wrapper-subscription');
// const productName = '';
// const textMuted = '';

// const productNameValue = '';
// const textMutedValue = '';


// listBoxPrice.forEach(element => {
//   element.addEventListener('click', (e) => {
//       // console.log(e.currentTarget.dataset.type);
//       // console.log(e.currentTarget.dataset.price);
//       window.location.href="./checkouti-form.html" 
//   })
// });

// if(window.location.href === "./checkouti-form.html") {
//   console.log(1);
//   window.addEventListener('DOMContentLoaded', () => {
//     productName = document.querySelector('.product-name');
//     textMuted = document.querySelector('.text-muted')
 
//    productNameValue = e.currentTarget.dataset.type;
//   textMutedValue = e.currentTarget.dataset.price;
//    // productName.textContent = e.currentTarget.dataset.type;
//    // textMuted.textContent = e.currentTarget.dataset.price;
//  })
// }

"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const menuList = document.querySelector(".menu-list");
  const wrapLogo = document.querySelector(".wrap-logo");
  const logoText = document.querySelector(".logo-text");

  //logo
  wrapLogo.addEventListener("mouseenter", (event) => {
    logoText.classList.add("active-logo");
    logoText.classList.remove("default-logo");
  });

  wrapLogo.addEventListener("mouseleave", (event) => {
    logoText.classList.add("default-logo");
    logoText.classList.remove("active-logo");
  });

  //burger
  burgerMenu.addEventListener("click", (e) => {
    if (e.target.parentElement.matches(".burger-menu")) {
      menuList.classList.toggle("active-menu");
      burgerMenu.classList.toggle("burger-active");
    }
  });

  //menu List
  menuList.addEventListener("mouseover", (e) => {

    setTimeout(() => {
      e.target.classList.remove("link-active");
      burgerMenu.classList.remove("burger-active");
      menuList.classList.remove("active-menu");
    }, 500);
  });

  //Modal

  const modalTrigger = document.querySelector("[data-modal]");
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector("[data-close]");

  setTimeout(() => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }, 15000);

  modalTrigger.addEventListener("click", () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  });

  //formToBuy
  const listBoxPrice = document.querySelectorAll(".wrapper-subscription");
  listBoxPrice.forEach((element) => {
    element.addEventListener("click", (e) => {
      window.location.href = "./checkouti-form.html";
    });
  });

  //login
  const login = document.querySelector(".login");
  const modalLogin = document.querySelector(".modal-l");
  const input = document.querySelectorAll("input");
  let p = document.createElement("p");

  login.addEventListener("click", () => {
    modalLogin.classList.remove("hide");
  });

  modalLogin.addEventListener("click", (event) => {
    if (event.target === modalLogin) {
      modalLogin.classList.add("hide");
      input.forEach((item) => (item.value = ""));
      p.classList.add("hide");
    }
  });

  function password() {
    const boxLogin = document.querySelector(".modal__dialog-login");
    const welcome = document.querySelector(".welcome");
    let inputFirst = document.querySelector(".input-password-first");
    let inputSecond = document.querySelector(".input-password-second");
    let button = document.querySelector(".btn");

    let eye = document.querySelectorAll(".eye");

    Array.from(eye).forEach((item) => {
      item.addEventListener("click", changeEye);
    });

    function changeEye() {
      this.classList.toggle("fa-eye");
      this.classList.toggle("icon-password");
      this.classList.toggle("fa-eye-slash");
      this.classList.toggle("icon-password");

      this.previousElementSibling.type === "password"
        ? (this.previousElementSibling.type = "text")
        : (this.previousElementSibling.type = "password");
    }

    p.textContent = `Incorrect login or password`;
    p.style.cssText = `
      top: 322px;
      left: 153px
      position: absolute;
      color: red;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      text-align: center;
      `;
    p.classList.add("hide");
    button.before(p);
    button.addEventListener("click", () => {
      let valueFirstInput = inputFirst.value;
      let valueSecondInput = inputSecond.value;

      if (
        valueFirstInput === valueSecondInput &&
        valueFirstInput !== "" &&
        valueSecondInput !== ""
      ) {
        p.classList.add("hide");
        boxLogin.classList.add("hide");
        welcome.classList.remove("hide");
        setTimeout(() => {
          boxLogin.classList.remove("hide");
          welcome.classList.add("hide");
          modalLogin.classList.add("hide");
          input.forEach((item) => (item.value = ""));
        }, 1000);
      } else if (valueFirstInput !== valueSecondInput) {
        p.classList.remove("hide");
      }
    });
  }
  password();

  //tab

  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelectorAll(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent,
    addEventListener("click", (event) => {
      const target = event.target;

      if (target && target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
