const submit = document.getElementById('submitLogin');
const email = document.getElementById('emailLogin');
const password = document.getElementById('passwordLogin');
const expresiones =  { 	
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

}

const errorEmail =  document.getElementById('errorEmail');
const errorPass = document.getElementById('errorPass');
const errorGeneral =  document.getElementById('errorGeneral');
submit.addEventListener('click',(e)=>{
	e.preventDefault();
	const passLength = password.value;
	
	if(!expresiones.correo.test(email.value) ){
		errorEmail.setAttribute('style','display:block;');
	}

	if((passLength.length <6)){
		errorPass.setAttribute('style','display:block;');
	}

	if(email.value == 'incorrecto@gmail.com'){
		errorGeneral.setAttribute('style','display:block');
	}

});

email.addEventListener('focus',()=>{
	errorEmail.setAttribute('style','display:none;');
});

password.addEventListener('focus',()=>{
	errorPass.setAttribute('style','display:none;');
});

