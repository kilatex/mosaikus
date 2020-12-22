$(document).ready(function(){
    $('#btn-personalizar').click(function(){
       $('.filtros-personalizar').toggle(80);
    });
    $('.filtro-item').click(function(e){
       this.setAttribute('style',"display: none !important;");
    });

    $('#btn-filtros').click(function(e){
        $('.filtros-rapidos').toggle(80);
    });
    $('.btn-prototipado').click(function(){
        $(this).toggleClass('btn-clicked');
    });

    var colorFlecha = 0;
    $('.table-prototipado tr th').click(function(e){
        $(this).toggleClass('clicked');
    });

    
});