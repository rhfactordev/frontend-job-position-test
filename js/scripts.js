class Validator {

  constructor() {
    this.validations = [
      
     
     
      'data-email-validate',
      'data-required',
      'data-password-validate',
    ]
  }

  
  validate(form) {

   
    let currentValidations = document.querySelectorAll('form .error-validation');

    if(currentValidations.length) {
      this.cleanValidations(currentValidations);
    }

    
    let inputs = form.getElementsByTagName('input');
    
    let inputsArray = [...inputs];

    
    inputsArray.forEach(function(input, obj) {

     
      for(let i = 0; this.validations.length > i; i++) {
        if(input.getAttribute(this.validations[i]) != null) {

          
          let method = this.validations[i].replace("data-", "").replace("-", "");

         
          let value = input.getAttribute(this.validations[i])

          
          this[method](input,value);

        }
      }

    }, this);

  }

  
 

  
 
  emailvalidate(input) {
    let re = /\S+@\S+\.\S+/;

    let email = input.value;

    let errorMessage = `Insira um e-mail no padrão joaodasilva@email.com`;

    if(!re.test(email)) {
      this.printMessage(input, errorMessage);
    }

  }

 
  
 
  required(input) {

    let inputValue = input.value;

    if(inputValue === '') {
      let errorMessage = `Este campo é obrigatório`;

      this.printMessage(input, errorMessage);
    }

  }

 
  passwordvalidate(input) {

    
    let charArr = input.value.split("");

    let uppercases = 0;
    let numbers = 0;

    for(let i = 0; charArr.length > i; i++) {
      if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
        uppercases++;
      } else if(!isNaN(parseInt(charArr[i]))) {
        numbers++;
      }
    }

    if(uppercases === 0 || numbers === 0) {
      let errorMessage = `A senha precisa de um caractere maiúsculo e um número`;

      this.printMessage(input, errorMessage);
    }

  }

 
  printMessage(input, msg) {
  
   
    let errorsQty = input.parentNode.querySelector('.error-validation');

   
    if(errorsQty === null) {
      let template = document.querySelector('.error-validation').cloneNode(true);

      template.textContent = msg;
  
      let inputParent = input.parentNode;
  
      template.classList.remove('template');
  
      inputParent.appendChild(template);
    }

  }

 
  cleanValidations(validations) {
    validations.forEach(el => el.remove());
  }

}

let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');

let validator = new Validator();


submit.addEventListener('click', function(e) {
  e.preventDefault();

  validator.validate(form);
});

function cookies(functions) {
  const container = document.querySelector('.cookies-container');
  const save = document.querySelector('.cookies-save');
  if (!container || !save) return null;

  const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
  if (localPref) activateFunctions(localPref);

  function getFormPref() {
    return [...document.querySelectorAll('[data-function]')]
      .filter((el) => el.checked)
      .map((el) => el.getAttribute('data-function'));
  }

  function activateFunctions(pref) {
    pref.forEach((f) => functions[f]());
    container.style.display = 'none';
    window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
  }

  function handleSave() {
    const pref = getFormPref();
    activateFunctions(pref);
  }

  save.addEventListener('click', handleSave);
}

function marketing() {
  console.log('Função de marketing');
}

function analytics() {
  console.log('Função de analytics');
}

cookies({
  marketing,
  analytics,
});

if (localStorage.email); {
  document.getElementById('email').value=
  localStorage.email;
}

if (localStorage.name); {
  document.getElementById('name').value=
  localStorage.name;
}

if (localStorage.lastname); {
  document.getElementById('lastname').value=
  localStorage.lastname;
}
var salvarData = function() {
  var email= document.getElementById('email').value;
  var  name= document.getElementById('name').value;
  var lastname= document.getElementById('lastname').value;

 
 
  localStorage.setItem('email', email);
  localStorage.setItem('name', email);
  localStorage.setItem('lastname', email);
};

document.onchange = salvarData;