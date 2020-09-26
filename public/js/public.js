var index = 0;
var step = 1;
var row = 0
var counter = 0;
var answer = [];
$(document).ready(function(){
  $(document).on('click', '#divide-sbs', function(e){
    i = index;
    var dividend = $("#dividend").val();
    var divisor = $("#divisor").val();

    if(dividend.length == divisor.length) {
      if(counter % 3 == 0) {
        row += 1;
        $("#SBS-solution-box").append(
        '<div class="card-deck row' + row + '"></div><br>');
      }
      if(index == 0) {
        $.get('/divide', {dividend: dividend, divisor: divisor}, function(result){
          answer = result;
          $("center.container").append(
            '<div class = "page-header"><h1>Solution</h1></div>');
          $(".row" + row).append(
            '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
            '<h5 class = "card-title">Initialization</h5>' + '\n' +
            '<h6 class = "card-subtitle mb-2 text-muted">Q gets dividend. M gets divisor. A is 0.</h6>' +
            '<p class = "card-text">' + answer[0] + '</p>' + '\n' +
            '<p class = "card-text">' + answer[1] + '</p>' + '\n' +
            '<p class = "card-text">' + answer[2] + '</p>' + '\n' +
            '</div>\n</div>\n</div>');

            index += 2;
            i = index;

          $(".row" + row).append(
            '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
            '<h5 class = "card-title">' + 'Step ' + 1 + ' </h5>' + '\n' +
            '<h6 class = "card-subtitle mb-2 text-muted">' + answer[i + 1] + '</h6>' +
            '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
            '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
            '</div>\n</div>\n</div>');

            counter += 2;
        });
      }
      else if(answer.length - 1 < index + 3) {
        $(".row" + row).append(
          '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
          '<h5 class = "card-title">' + 'Answer' + ' </h5>' + '\n' +
          '<h6 class = "card-subtitle mb-2 text-muted">' + answer[0] + '</h6>' +
          '<p class = "card-text">' + answer[i + 1] + '</p>' + '\n' +
          '</div>\n</div>');

        counter += 1;
      }
      else {
        $(".row" + row).append(
          '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
          '<h5 class = "card-title">' + 'Step ' + step + ' </h5>' + '\n' +
          '<h6 class = "card-subtitle mb-2 text-muted">' + answer[i + 1] + '</h6>' +
          '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
          '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
          '</div>\n</div>');

          counter += 1;
      }

      if(((answer.length - 4) / 3) + 1 == step) {
        $("#divide-sbs").attr('disabled', 'true');
      }

      $("#divide-sbs").html('Next');
      $("#divide-skip").html('Clear');
      $("#divide-skip").attr('id', 'clear');

      index += 3;
      step += 1;
    }
    else {
      alert("Unequal number of bits. Please enter an equal number of bits for both dividend and divisor.");
    }
  });

  $(document).on("click", "#clear", function(e){
    index = 0;
    step = 1;
    row = 0
    counter = 0;
    answer = [];

    $(".solution").remove();
    $(".page-header").remove();
    $("#divide-sbs").show();
    $("#divide-sbs").removeAttr('disabled');
    $("#divide-sbs").html('Step-by-step');
    $("#clear").html('Skip to Final Answer');
    $("#clear").attr('id', 'divide-skip');
    $("#dividend").val('');
    $("#divisor").val('');
  });

  $(document).on('click', '#divide-skip', function(e){
    i = index;
    var dividend = $("#dividend").val();
    var divisor = $("#divisor").val();

    if(dividend.length == divisor.length) {
      $.get('/divide', {dividend: dividend, divisor: divisor}, function(result){
        answer = result;

        for(i = 0; i <= answer.length - 1; i +=3 ) {
          if(counter % 3 == 0) {
            row += 1;
            $("#SBS-solution-box").append(
            '<div class="card-deck row' + row + '"></div><br>');
          }
          if(index == 0) {
            $.get('/divide', {dividend: dividend, divisor: divisor}, function(result){
              answer = result;
              $("center.container").append(
                '<div class = "page-header"><h1>Solution</h1></div>');
              $(".row" + row).append(
                '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
                '<h5 class = "card-title">Initialization</h5>' + '\n' +
                '<h6 class = "card-subtitle mb-2 text-muted">Q gets dividend. M gets divisor. A is 0.</h6>' +
                '<p class = "card-text">' + answer[0] + '</p>' + '\n' +
                '<p class = "card-text">' + answer[1] + '</p>' + '\n' +
                '<p class = "card-text">' + answer[2] + '</p>' + '\n' +
                '</div>\n</div>\n</div>');

                index += 2;
                i = index;

              $(".row" + row).append(
                '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
                '<h5 class = "card-title">' + 'Step ' + 1 + ' </h5>' + '\n' +
                '<h6 class = "card-subtitle mb-2 text-muted">' + answer[i + 1] + '</h6>' +
                '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
                '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
                '</div>\n</div>\n</div>');

                counter += 2;
            });
          }
          else if(answer.length - 1 < index + 3) {
            $(".row" + row).append(
              '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
              '<h5 class = "card-title">' + 'Answer' + ' </h5>' + '\n' +
              '<h6 class = "card-subtitle mb-2 text-muted">' + answer[0] + '</h6>' +
              '<p class = "card-text">' + answer[i + 1] + '</p>' + '\n' +
              '</div>\n</div>');

            counter += 1;
          }
          else {
            $(".row" + row).append(
              '<div class = "solution card" style="width: 18rem;">\n<div class = "card-body">' +
              '<h5 class = "card-title">' + 'Step ' + step + ' </h5>' + '\n' +
              '<h6 class = "card-subtitle mb-2 text-muted">' + answer[i + 1] + '</h6>' +
              '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
              '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
              '</div>\n</div>');

              counter += 1;
          }

          if(((answer.length - 4) / 3) + 1 == step) {
            $("#divide-sbs").attr('disabled', 'true');
          }

          $("#divide-sbs").html('Next');
          $("#divide-skip").html('Clear');
          $("#divide-skip").attr('id', 'clear');

          index += 3;
          step += 1;

          $("#divide-sbs").hide();
          $("#divide-skip").html('Clear');
          $("#divide-skip").attr('id', 'clear');
        }
      });
    }
    else {
      alert("Unequal number of bits. Please enter an equal number of bits for both dividend and divisor.");
    }
  });
});
