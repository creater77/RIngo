const application = document.querySelector('.application--sent');
const appBtn = document.querySelector('#app--btn');
const forms = document.querySelectorAll('.validateForm');

// validate
const validateBtn = document.querySelectorAll('.validateBtn');
let activeForm;

function removeErr() {
  let err = document.querySelectorAll('.err');

  for (let i = 0; i < err.length; i++) {
    err[i].classList.remove('err');
  }
}

for (let i = 0; i < validateBtn.length; i++) {
  validateBtn[i].addEventListener('click', function(event) {
    event.preventDefault();
    let e = 0;

    removeErr();

    activeForm = validateBtn[i].parentNode;
    console.log(activeForm);

    const fields = activeForm.querySelectorAll('.field');

    for (let i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        fields[i].classList.add('err');
        e++;
      }
    }

    if (e == 0) {
      popupBg.classList.add('active');
      popupPartner.classList.remove('active');
      popupGif.classList.remove('active');
      application.classList.add('active');

      scrollPage(application);
    }
  })
}

appBtn.addEventListener('click', () => {
  removeErr();

  for (let i = 0; i < forms.length; i++) {
    forms[i].reset();
  }

  popupBg.classList.remove('active');
  application.classList.remove('active');

  scrollPage(popupGif);
})
