var index = 0;
var step = 1;
var answer = [];
$(document).ready(function(){
  $(document).on('click', '#divide-sbs', function(e){
    i = index;
    var dividend = $("#dividend").val();
    var divisor = $("#divisor").val();

    if(index == 0) {
      $.get('/divide', {dividend: dividend, divisor: divisor}, function(result){
        answer = result;
        $("#SBS-solution-box").append(
          '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
          '<h5 class = "card-title">' + 'Step ' + 1 + ' </h5>' + '\n' +
          '<h6 class = "card-subtitle mb-2 text-muted">' + answer[i + 1] + '</h6>' +
          '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
          '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
          '</div>\n</div>\n</div>');
      });
    }
    else if(answer.length - 1 < index + 3) {
      $("#SBS-solution-box").append(
        '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
        '<h5 class = "card-title">' + 'Answer' + ' </h5>' + '\n' +
        '<h6 class = "card-subtitle mb-2 text-muted">' + answer[0] + '</h6>' +
        '<p class = "card-text">' + answer[i + 1] + '</p>' + '\n' +
        '</div>\n</div>');
    }
    else {
      $("#SBS-solution-box").append(
        '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
        '<h5 class = "card-title">' + 'Step ' + step + ' </h5>' + '\n' +
        '<h6 class = "card-subtitle mb-2 text-muted">' + answer[i + 1] + '</h6>' +
        '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
        '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
        '</div>\n</div>');
    }

    if(((answer.length - 2) / 3) + 1 == step) {
      $("#divide-sbs").attr('id', 'clear');
      $("#divide-sbs").html('Clear');
    }
    else {
      $("#divide-sbs").html('Next');
    }

    index += 3;
    step += 1;
  });

  $(document).on("click", "#clear", function(e){
    index = 0;
    step = 1;
    answer = [];

    $(".solution").remove();
    $("#clear").html('Divide (Step-by-Step)');
    $("#clear").attr('id', 'divide-sbs');
  });

  $(document).on('click', '#divide-skip', function(e){
    i = index;
    var dividend = $("#dividend").val();
    var divisor = $("#divisor").val();

    $.get('/divide', {dividend: dividend, divisor: divisor}, function(result){
      answer = result;

      for(i = 0; i <= answer.length - 1; i +=3 ) {
        if(i == 0) {
          $("#skip-solution-box").append(
            '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
            '<h5 class = "card-title">' + 'Step ' + 1 + ' </h5>' + '\n' +
            '<h6 class = "card-subtitle mb-2 text-muted">' + answer[i + 1] + '</h6>' +
            '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
            '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
            '</div>\n</div>\n</div>');
        }
        else if(answer.length - 1 < index + 3) {
          $("#skip-solution-box").append(
            '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
            '<h5 class = "card-title">' + 'Answer' + ' </h5>' + '\n' +
            '<h6 class = "card-subtitle mb-2 text-muted">' + answer[0] + '</h6>' +
            '<p class = "card-text">' + answer[i + 1] + '</p>' + '\n' +
            '</div>\n</div>');
        }
        else {
          $("#skip-solution-box").append(
            '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
            '<h5 class = "card-title">' + 'Step ' + step + ' </h5>' + '\n' +
            '<h6 class = "card-subtitle mb-2 text-muted">' + answer[i + 1] + '</h6>' +
            '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
            '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
            '</div>\n</div>');
        }
        index += 3;
        step += 1;
      }
    });
  });
});
