$(document).ready(function(){

    $("#divide-sbs").click(function(){
        console.log("hello")
        var dividend = $("#dividend").val();
        var divisor = $("#divisor").val();
        
        $("#divide-sbs").html('Next');
    });
    $("#divide-skip").click(function(){
        console.log("hello")
        var dividend = $("#dividend").val();
        var divisor = $("#divisor").val();
        
    });
});