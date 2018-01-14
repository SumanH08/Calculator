var arr = [], result = "", interim = 0, resultOnce = false, finalResult = 0, tempArr = [];
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
    if(resultOnce & (val == "/" || val == "*"|| val == "+"|| val == "-")){
      // interim += finalResult;
      // console.log("interim value 1" + interim);
      //
      // interim += val;
      // console.log("interim value 2" + interim);
      arr.push(val);
      tempArr.push(finalResult);
      interim = tempArr.join("");
      interim += val;
      $('#display-screen').text(interim);
      tempArr.push(val);
      resultOnce = false;
    }
    else {
      interim = arr.join("");
      interim += val;
      $('#display-screen').text(interim);
      arr.push(val);
    }

  }

  //calculation
  if(val == "="){
    console.log("This is the array inside result part" + arr);
    for(var i=0; i<arr.length-1; i++){
      result += arr[i];
    }
    finalResult = eval(result).toFixed(2);
    $('#display-screen').text(result + " = " + finalResult);
    arr.length = 0;
    resultOnce = true;
    result = "";
    interim = 0;
  }

}
