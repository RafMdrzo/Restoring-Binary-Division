var index = 0;
var step = 1;
var row = 0
var counter = 0;
var answer = [];
var i = 0;
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
            '<div class = "solution card bg-light">\n' +
            '<div class = "card-header">Initialization</div>' + '\n' +
            '<div class = "card-body">' +
            '<h5 class = "card-title">Q gets dividend. M gets divisor. A is 0.</h5>' +
            '<p class = "card-text">' + answer[0] + '</p>' + '\n' +
            '<p class = "card-text">' + answer[1] + '</p>' + '\n' +
            '<p class = "card-text">' + answer[2] + '</p>' + '\n' +
            '</div>\n</div>\n</div>');

            index += 2;
            i = index;

          $(".row" + row).append(
            '<div class = "solution card bg-light">\n' +
            '<div class="card-header">' + 'Step ' + 1 + ' </div>' + '\n' +
            '<div class = "card-body">' +
            '<h5 class = "card-title">' + answer[i + 1] + '</h5>' +
            '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
            '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
            '</div>\n</div>\n</div>');

            counter += 2;
        });
      }
      else if(answer.length - 1 < index + 3) {
        $(".row" + row).append(
          '<div class = "solution card bg-light">\n' +
          '<div class="card-header">Answer</div>' + '\n' +
          '<div class = "card-body">' +
          '<h5 class = "card-title">' + answer[0] + '</h5>' +
          '<p class = "card-text">' + answer[i + 1] + '</p>' + '\n' +
          '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
          '</div>\n</div>');

        counter += 1;
      }
      else {
        $(".row" + row).append(
          '<div class = "solution card bg-light">\n' +
          '<div class="card-header">' + 'Step ' + step + ' </div>' + '\n' +
          '<div class = "card-body">' +
          '<h5 class = "card-title">' + answer[i + 1] + '</h5>' +
          '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
          '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
          '</div>\n</div>');

          counter += 1;
      }

      if(((answer.length - 5) / 3) + 1 == step) {
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
    answer.length = 0;
    i = 0;

    $(".solution").remove();
    $(".page-header").remove();
    $(".card-deck").remove();
    $("#divide-sbs").show();
    $("#dividend").removeAttr('disabled');
    $("#divisor").removeAttr('disabled');
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
      $("#dividend").attr('disabled', 'true');
      $("#divisor").attr('disabled', 'true');

      $.get('/divide', {dividend: dividend, divisor: divisor}, function(result){
        answer = result;

        for(i = 0; i <= answer.length - 1; i +=3 ) {
          if(counter % 3 == 0) {
            row += 1;
            $("#SBS-solution-box").append(
            '<div class="card-deck row' + row + '"></div><br>');
          }
          if(index == 0) {
            $("center.container").append(
              '<div class = "page-header"><h1>Solution</h1></div>');
            $(".row" + row).append(
              '<div class = "solution card bg-light">\n' +
              '<div class = "card-header">Initialization</div>' + '\n' +
              '<div class = "card-body">' +
              '<h5 class = "card-title">Q gets dividend. M gets divisor. A is 0.</h5>' +
              '<p class = "card-text">' + answer[0] + '</p>' + '\n' +
              '<p class = "card-text">' + answer[1] + '</p>' + '\n' +
              '<p class = "card-text">' + answer[2] + '</p>' + '\n' +
              '</div>\n</div>\n</div>');

              index += 2;
              i = index;

            $(".row" + row).append(
              '<div class = "solution card bg-light">\n' +
              '<div class="card-header">' + 'Step ' + 1 + ' </div>' + '\n' +
              '<div class = "card-body">' +
              '<h5 class = "card-title">' + answer[i + 1] + '</h5>' +
              '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
              '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
              '</div>\n</div>\n</div>');

              counter += 2;
          }
          else if(answer.length - 1 < index + 3) {
            $(".row" + row).append(
              '<div class = "solution card bg-light">\n' +
              '<div class="card-header">Answer</div>' + '\n' +
              '<div class = "card-body">' +
              '<h5 class = "card-title">' + answer[0] + '</h5>' +
              '<p class = "card-text">' + answer[i + 1] + '</p>' + '\n' +
              '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
              '</div>\n</div>');

            counter += 1;
          }
          else {
            $(".row" + row).append(
              '<div class = "solution card bg-light">\n' +
              '<div class="card-header">' + 'Step ' + step + ' </div>' + '\n' +
              '<div class = "card-body">' +
              '<h5 class = "card-title">' + answer[i + 1] + '</h5>' +
              '<p class = "card-text">' + answer[i + 2] + '</p>' + '\n' +
              '<p class = "card-text">' + answer[i + 3] + '</p>' + '\n' +
              '</div>\n</div>');

              counter += 1;
          }

          if(((answer.length - 5) / 3) + 1 == step) {
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

function check(){
  var dividend = $("#dividend").val();
  var divisor = $("#divisor").val();
  if(dividend == "" || divisor == "") {
    $("#divide-sbs").attr('disabled', 'true');
    $("#divide-skip").attr('disabled', 'true');
  }
  else {
    $("#divide-sbs").removeAttr('disabled');
    $("#divide-skip").removeAttr('disabled');
  }
};
