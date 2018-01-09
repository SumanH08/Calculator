var arr = [], result = 0;
function compute(val){
  $('#display-screen').text(val);

  arr.push(val);
  // if(val == "="){
  //   result = str;
  // }
  if(val == "="){
    for(var i=0; i<arr.length; i++){
      console.log(arr[i]);
      result += arr[i]
    }
    console.log("This is the result:" + result);
  }
}
