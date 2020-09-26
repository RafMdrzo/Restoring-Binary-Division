var index = 0;
var limit = 0;
var answer = [];
$(document).ready(function(){
  $("#divide-sbs").click(function(){
    i = index;
    console.log(index)
    var dividend = $("#dividend").val();
    var divisor = $("#divisor").val();

    if(i == 0) {
      $.get('/divide', {dividend: dividend, divisor: divisor}, function(result){
        answer = result;
        $("#SBS-solution-box").append(
          '<div class = "solution">\n' +
          '<div>' + answer[i] + '</div>' + '\n' +
          '<div>' + answer[i + 1] + '</div>' + '\n' +
          '<div>' + answer[i + 2] + '</div>' + '\n' +
          '<div>' + answer[i + 3] + '</div>' + '\n' +
          '</div>');
        });
    }
    else if(answer.length - 1 < index + 3) {
      $(".solution").remove();
      $("#SBS-solution-box").append(
        '<div class = "solution">\n' +
        '<div>' + answer[0] + '</div>' + '\n' +
        '<div>' + answer[i + 1] + '</div>' + '\n' +
        '</div>');
    }
    else {
      $(".solution").remove();
      $("#SBS-solution-box").append(
        '<div class = "solution">\n' +
        '<div>' + answer[0] + '</div>' + '\n' +
        '<div>' + answer[i + 1] + '</div>' + '\n' +
        '<div>' + answer[i + 2] + '</div>' + '\n' +
        '<div>' + answer[i + 3] + '</div>' + '\n' +
        '</div>');
    }
    $("#divide-sbs").html('Next');
    index += 3;
  });

  $("#divide-skip").click(function(){
    console.log("hello")
    var dividend = $("#dividend").val();
    var divisor = $("#divisor").val();
    console.log(divisor);
  });
});
