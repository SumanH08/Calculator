var arr = [],
  result = 0;

function compute(val) {

  if (val == "AC" || val == "CE") {
    $('#display-screen').text("");
  } else {
    $('#display-screen').text(val);
    arr.push(val);
  }
  if (val == "=") {
    //moving elements of the array to a string "result"
    for (var i = 0; i < arr.length - 1; i++) {
      console.log(arr[i]);
      result += arr[i]
    }
    //call different functions depending on floating point or integer
    if (result.indexOf("/") >= 0 || result.indexOf(".") >= 0) {
      calculateDecimal(result);
    } else {
      calculateInteger(result);
    }
  }
}

function calculateDecimal(result) {
  console.log("This is for decimal");
}

function calculateInteger(result) {

  var finalResult = eval(result);
  console.log("This is the result:" + eval(result));

  $('#display-screen').text(result + " = " + finalResult);
  arr.length = 0;
  result = 0;
}
