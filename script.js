var arr = [], result = "", interim = 0;
function compute(val){
  // All clear
  if(val == "AC"){
    $('#display-screen').text("");
    arr.length = 0;
    result = "";
    interim = 0;
  }
  // clear one element at a time
  else if(val == "CE") {
    var newArr = arr.splice(-1, 1);
    var newStr = arr.join("");
    $('#display-screen').text(newStr);
    result = "";
    // interim = newArr.slice();

  }
  //display the final elements to be calculated on screen
  else {
    interim = arr.join("");
    interim += val;
    console.log(interim);
    $('#display-screen').text(interim);
    arr.push(val);
  }

  //calculation
  if(val == "="){
    console.log("This is the array" + arr);
    for(var i=0; i<arr.length-1; i++){
      result += arr[i];
      console.log("This is the result:" + result);
    }

    console.log(eval(result).toFixed(2));
    $('#display-screen').text(result + " = " + eval(result).toFixed(2));
    arr.length = 0;
    result = "";
    interim = 0;
  }

}
