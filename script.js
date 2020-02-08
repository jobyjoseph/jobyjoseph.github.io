var num1Array = [1, 2, 3, 4];
var num2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

$(document).ready(function(){

  loadQuestion();

  $(".inputBtn").on("click", function(e) {
    var answer = $(e.target).text();
    var num1 = parseInt($("#num1").text());
    var num2 = parseInt($("#num2").text());
    var isCorrect = false;
    if(num1 * num2 == answer) {
      $(".resultStatus").text("Correct!").css("color", "#4CAF50");
    } else {
      $(".resultStatus").text("Wrong!").css("color", "#f44336");
    }
    $(".app").hide();
    $(".appResult").show();

    $(".resultSummary").text(num1 + " x " + num2 + " = " + (num1 * num2));
  });

  $("#newQuestion").click(function(){
    loadQuestion();
    $(".app").show();
    $(".appResult").hide();
  });
  
});

function loadQuestion() {
  var num1 = num1Array[generateRandomIndex(num1Array.length)];
  var num2 = num2Array[generateRandomIndex(num2Array.length)];

  $("#num1").text(num1);
  $("#num2").text(num2);

  var answer = num1 * num2;
  var wrongAnswer;
  if(generateRandomIndex(10) % 2 == 0) {
    wrongAnswer = answer + generateRandomIndex(answer) + 1;
    $("#btn1").text(wrongAnswer);
    $("#btn2").text(answer);
  } else {
    wrongAnswer = answer - generateRandomIndex(answer) + 1;
    $("#btn1").text(answer);
    $("#btn2").text(wrongAnswer);
  }
}

function generateRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function verifyAnswer(num1, num2, answer) {
  return num1 * num2 == answer;
}