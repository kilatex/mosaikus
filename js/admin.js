$(document).ready(function(){
    
  if(screen.width <= 720){
    $('.admin-interfaz .verificadores.card .accordion').css('display','block');
   $('#responsiveIden').click(function(){
     $('#idenResp').toggle();
   });
   $('#responsiveVerif').click(function(){
     $('.admin-interfaz .verificadores.card .accordion').toggle();
   });
  }
  
  else{
    $('#idenResp').css('display','block');
   $('.admin-interfaz .verificadores.card .accordion').css('display','block');
  }

    var actOpt =  document.getElementById('actOpt');
    var verifOpt =  document.getElementById('verifOpt');
    var date =  document.getElementById('date');
    var arbol =  document.getElementById('arbol');
    
  document.getElementById('btnSEND').addEventListener('click', function(e){
    e.preventDefault();

    /* PARA LA OPCIONES DE ACTIVIDAD*/
    if(actOpt.value==0 || actOpt.value==''){
        actOpt.setAttribute('style','border:1px solid red;');
        document.getElementById('errorAct').setAttribute('style','display:block;');
    }
    if(arbol.value==0 || arbol.value==''){
        arbol.setAttribute('style','border:1px solid red;');
        document.getElementById('errorArbol').setAttribute('style','display:block;');
    }

    if(verifOpt.value==0 || verifOpt.value==''){
        verifOpt.setAttribute('style','border:1px solid red;');
        document.getElementById('errorVerif').setAttribute('style','display:block;');
    }
    if(date.value==0 || date.value==''){
        date.setAttribute('style','border:1px solid red;');
        document.getElementById('errorDate').setAttribute('style','display:block;');
    }
    }); 

    actOpt.addEventListener('click',()=>{
        actOpt.setAttribute('style','border:none;');
        document.getElementById('errorAct').setAttribute('style','display:none;');
    });
    verifOpt.addEventListener('click',()=>{
        verifOpt.setAttribute('style','border:none;');
        document.getElementById('errorVerif').setAttribute('style','display:none;');

    });
    date.addEventListener('click',()=>{
        date.setAttribute('style','border:none;');
        document.getElementById('errorDate').setAttribute('style','display:none;');
    });
    arbol.addEventListener('click',()=>{
        arbol.setAttribute('style','border:none;');
        document.getElementById('errorArbol').setAttribute('style','display:none;');
    });

    $('.select-admin').select2({
        placeholder: 'Seleccione'
        
    });
});