$(document).ready(function(){

    $("#divide-sbs").click(function(){
        console.log("hello")
        var dividend = $("#dividend").val();
        var divisor = $("#divisor").val();

        $.get('/divide', {dividend: dividend, divisor: divisor}, function(result){
          $("#SBS-solution-box").append(
            '<pre>' + result + '</pre>');
        });

        $("#divide-sbs").html('Next');
    });

    $("#divide-skip").click(function(){
        console.log("hello")
        var dividend = $("#dividend").val();
        var divisor = $("#divisor").val();
        console.log(divisor);
    });
});
