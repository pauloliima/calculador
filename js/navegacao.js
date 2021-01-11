$(document).ready(function() {
    $(".multi-button button").click(function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    $(".itens").load(href + " .itens");    
    });
});