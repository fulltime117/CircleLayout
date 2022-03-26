$(document).ready(function(){

    function item_click() {
        $("main").css("display", "none");   
    }
    
    $(".item").click(function () {
        item_click();        
    });

    $("#item1").click(function(){
        $("#scenario1").css("display", "block");
    });
});