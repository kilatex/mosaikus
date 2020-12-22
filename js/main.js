$(document).ready(function(){



  const companySelect =  document.getElementById('image');
  const confirmButton = document.getElementById('company-confirm');
  const rombusNavImg = document.getElementById('rombusNavImg');
  const zaldivarNavImg =  document.getElementById('zaldivarNavImg');
  const option1 = document.querySelector('#option1');
  const option2 = document.getElementById('option2');


   
  confirmButton.addEventListener('click',()=>{
     if(option1.checked){
       zaldivarNavImg.setAttribute('style',"display: inline;");
     }
     else{
      zaldivarNavImg.setAttribute('style',"display: none;");

     }

     if(option2.checked){
      rombusNavImg.setAttribute('style',"display: inline;");

     }else{
      rombusNavImg.setAttribute('style',"display: none;");


     }

     if(option1.checked || option2.checked){
       companySelect.setAttribute('src','./img/154-2.png');
     }else{
      companySelect.setAttribute('src','./img/154.png');

     }
  });
  
  const btnNav  = document.getElementById('btnNav');
  const options = document.getElementById('userOptions');
  const icon  = document.getElementById('angles');
  iconType=0;
  btnNav.addEventListener('click',()=>{
    $(options).toggle();

    if(iconType==0){
     icon.classList.remove('fa-angle-left');
     icon.classList.add('fa-angle-right');
     iconType = 1;
    }else{
     icon.classList.remove('fa-angle-right');
     icon.classList.add('fa-angle-left');
     iconType = 0;
    }
   
 });
 


  
  $('.menu-nav li:has(ul)').click(function(e){
    
    e.preventDefault();
     if($(this).hasClass('activo')){
       $(this).removeClass('activo');
       $(this).children('ul').slideUp();
     }else{
        $('.menu-nav li ul').slideUp();
        $('.menu-nav li').removeClass('activo');
        $(this).addClass('activo');
        $(this).children('ul').slideDown();     
     }
     
  });

  
 
  $('.main-menu').mouseleave(function(e){
    $('.menu-nav li').removeClass('activo');
    $('.menu-nav li:has(ul)').children('ul').slideUp();
  });

 
  

 
  /* ----- PARA CERRAR EL MENU SI EL USUARIO REALIZA UN MOUSELEAVE ----- */
  


  

  const lanEs =  document.getElementById('spanish');
  const lanEn = document.getElementById('english');
  lanEs.addEventListener('click',()=>{
    lanEn.checked = false;
   });
   lanEn.addEventListener('click',()=>{
    lanEs.checked = false;
   });
  

   $('#link-my-user').click(function(e){
     e.preventDefault();
     document.querySelector('.config-my-user').setAttribute('style','display:block;');
     document.querySelector('.config-general').setAttribute('style','display:none;');
     document.querySelector('.config-interface').setAttribute('style','display:none;');

     $(this).addClass('config-active');
     $('#link-general').removeClass('config-active');
     $('#link-interface').removeClass('config-active');
   });

   $('#link-general').click(function(e){

    e.preventDefault();
    
    document.querySelector('.config-my-user').setAttribute('style','display:none;');
    document.querySelector('.config-general').setAttribute('style','display:block;');
    document.querySelector('.config-interface').setAttribute('style','display:none;');
     
    $(this).addClass('config-active');
    $('#link-my-user').removeClass('config-active');
    $('#link-interface').removeClass('config-active');
   });

   $('#link-interface').click(function(e){
    e.preventDefault();

    document.querySelector('.config-my-user').setAttribute('style','display:none;');
    document.querySelector('.config-general').setAttribute('style','display:none;');
    document.querySelector('.config-interface').setAttribute('style','display:block;');

    $(this).addClass('config-active');
    $('#link-general').removeClass('config-active');
    $('#link-my-user').removeClass('config-active');
   });
  



    $('#linkInfoToggle').click(function(){
      $('#cardToggle').toggle();
    });

    $('#linkInfoToggle2').click(function(){
      $('#cardToggle2').toggle();
    });

 


   
   

});
 

