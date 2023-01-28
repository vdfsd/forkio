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
