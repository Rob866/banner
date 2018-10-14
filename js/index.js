$(document).ready(function(){
    $("#menu").click(function(){
        $("#main").slideToggle("slow")
    });

    $("#openMenu").click(function(){
        $("#main").slideToggle("slow")
    });


    $('#aniimated-thumbnials').lightGallery({
        thumbnail:true
    }); 
    $('#captions').lightGallery(); 



});