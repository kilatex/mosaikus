$(document).ready(function(){
    const vista1=  document.querySelectorAll('#link-vista-1');
    vista1[0].addEventListener('click',function(){pestana1();}); 
    vista1[1].addEventListener('click',function(){pestana1();}); 
    vista1[2].addEventListener('click',function(){pestana1();}); 
    
    const vista2 = document.querySelectorAll('#link-vista-2');
    vista2[0].addEventListener('click',function(){pestana2();}); 
    vista2[1].addEventListener('click',function(){pestana2();}); 
    vista2[2].addEventListener('click',function(){pestana2();}); 

    const vista3 = document.querySelectorAll('#link-vista-3');
    vista3[0].addEventListener('click',function(){pestana3();}); 
    vista3[1].addEventListener('click',function(){pestana3();}); 
    vista3[2].addEventListener('click',function(){pestana3();}); 

    $('#link-vista-1-res').click(function(){pestana1()});
    $('#link-vista-2-res').click(function(){pestana2()});
    $('#link-vista-3-res').click(function(){pestana3()});
    
 
   
  
    const pestana1 = ()=>{
      document.querySelector('.vista-1').setAttribute('style','display:flex;');
      document.querySelector('.liderazgo').setAttribute('style','display:block;');
  
      
      document.querySelector('.liderazgo-2').setAttribute('style','display:none;');
  
      document.querySelector('.vista-3').setAttribute('style','display:none;');
      document.querySelector('.liderazgo-3').setAttribute('style','display:none;'); 
    }
   
    const pestana2 = ()=>{
      document.querySelector('.liderazgo-2').setAttribute('style','display:grid;');
     
      document.querySelector('.vista-3').setAttribute('style','display:none;');
      document.querySelector('.liderazgo-3').setAttribute('style','display:none;');
  
      document.querySelector('.vista-1').setAttribute('style','display:none;');
      document.querySelector('.liderazgo').setAttribute('style','display:none;');
    }
    
    const pestana3 = ()=>{
      document.querySelector('.vista-3').setAttribute('style','display:flex;');
      document.querySelector('.liderazgo-3').setAttribute('style','display:block;');
 
      document.querySelector('.liderazgo-2').setAttribute('style','display:none;');
  
      document.querySelector('.vista-1').setAttribute('style','display:none;');
      document.querySelector('.liderazgo').setAttribute('style','display:none;'); 
    }
});