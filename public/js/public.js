
function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}

$(document).ready(function(){
    var first_pass = true
    var iter = 0
    var filtered = []

    $("#divide-sbs").click(function(){
        var dividend = $("#dividend").val();
        var divisor = $("#divisor").val();
        
        

        if(first_pass == true){
            var resd = $.ajax({
                type: 'GET',       
                url: "/divide",
                data: {dividend: dividend, divisor: divisor} ,
                dataType: 'text',
                context: document.body,
                global: false,
                async:false,
                success: function(data) {
                    return data;
                }
            }).responseText;

            resd = resd.split("\n");
            filtered = filter_array(resd);

            $("#SBS-solution-box").append(
                "<pre>" + filtered[0] + "<br><br>" + "</pre>");
                first_pass = false;
                
            iter = 1
        } else {
            console.log(iter)
        }
        
        $("#divide-sbs").html('Next');
        //change the element id of step-by-step to next-step
    });

    $("#divide-skip").click(function(){
        var dividend = $("#dividend").val();
        var divisor = $("#divisor").val();
        
        

        if(first_pass == true){
            var resd = $.ajax({
                type: 'GET',       
                url: "/divide",
                data: {dividend: dividend, divisor: divisor} ,
                dataType: 'text',
                context: document.body,
                global: false,
                async:false,
                success: function(data) {
                    return data;
                }
            }).responseText;


            $("#SBS-solution-box").append(
                "<pre>" + resd + "</pre>");
                first_pass = false;
                
            iter = 1
        } else {
            console.log(iter)
        }
    });
});
