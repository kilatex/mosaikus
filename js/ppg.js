$(document).ready(function(){

  $(document).ready(function(){
    $('.input-semanal-option').selectpicker();
});

    $('#OptionsPpg').click(function(){
        $('#subOptionsPpg').toggle(100);
      });

    
    $('#backToStep0').click(function(){
      $('.step0').attr('style','display:block !important;');
      $('.step1').attr('style','display:none;');
    });
    $('#nextToStep1').click(function(){
      $('.step1').attr('style','display:block !important;');
      $('.step0').attr('style','display:none;');
    });

    $('#backToStep1').click(function(){
      $('.step2').attr('style','display:none;');
      $('.step1').attr('style','display:block !important;');
    });

    $('#backToStep2').click(function(){
      $('.step3').attr('style','display:none;');
      $('.step2').attr('style','display:block !important;');
    });

    $('#nextToStep2').click(function(){
      $('.step1').attr('style','display:none;');
      $('.step2').attr('style','display:block !important;');    
    });
    
    $('#backToStep1').click(function(){
      $('.step2').attr('style','display:none;');
      $('.step1').attr('style','display:block !important;');
    }); 

    $('#nextToStep3').click(function(){
      $('.step2').attr('style','display:none;');
      $('.step3').attr('style','display:block !important;');    
    });

    $('#backToStep3').click(function(){
      $('.step4').attr('style','display:none;');
      $('.step3').attr('style','display:block !important;');
    }); 

    $('#backToStep4').click(function(){
      $('.step5').attr('style','display:none;');
      $('.step4').attr('style','display:block !important;');
    }); 


    $('#nextToStep4').click(function(){
      $('.step3').attr('style','display:none;');
      $('.step4').attr('style','display:block !important;');    
    });
    $('#nextToStep5').click(function(){
      $('.step4').attr('style','display:none;');
      $('.step5').attr('style','display:block !important;');    
    });

    $('.vista1-btn').click(function(){
      $('.ppg-1').attr('style','display:grid !important');
      $('.bloques-vista1').attr('style','display:flex !important');
      $('.ppg-2').attr('style','display:none !important');
      $('.ppg-3').attr('style','display:none !important');
    });

    $('.vista2-btn').click(function(){
      $('.ppg-1').attr('style','display:none !important');
      $('.ppg-2').attr('style','display:block !important');
      $('.ppg-3').attr('style','display:none !important');
      $('.bloques-vista1').attr('style','display:none !important');
    });

    $('.vista3-btn').click(function(){
      $('.ppg-1').attr('style','display:none !important');
      $('.ppg-2').attr('style','display:none !important');
      $('.ppg-3').attr('style','display:block !important');
      $('.bloques-vista1').attr('style','display:none !important');
    });
    

    /* OPCIONES DEL STEP 4 */
    var ndays;
    $('#1-step4').click(function(){
      $('.semanal-option').attr('style','display:none !important');
      $('.fecha-inicio').attr('style','display:block !important');
      $('.ndays-option').attr('style','display:none !important');
      ndays = 1;
    });
    $('#2-step4').click(function(){
      $('.ndays-option').attr('style','display:block !important');
      $('.fecha-inicio').attr('style','display:block !important');
      $('.semanal-option').attr('style','display:none !important');
      ndays = 1;

    });
    $('#3-step4').click(function(){
      $('.ndays-option').attr('style','display:block !important');
      $('.repetir-cada').attr('style','display:none !important');
      $('.fecha-inicio').attr('style','display:block !important');
      $('.semanal-option').attr('style','display:none !important');
      ndays = 1;

    });
    
    $('#4-step4').click(function(){
      $('.semanal-option').attr('style','display:block !important');
      $('.fecha-inicio').attr('style','display:none !improtant');
      $('.ndays-option').attr('style','display:none !important');
      ndays = 0;
      if(ndays==0){
        $('.fecha-inicio').attr('style','display:none !important');
      }
    });

});