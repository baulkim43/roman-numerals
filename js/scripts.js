//business logic
  var romanInput = function(userInput){
    // var hundreds = userInput.length;
    // var thousands = userInput[3];
    // var tens = userInput[1];
    // var ones = userInput[0];
    var resultArray = [];
    if (userInput.length === 3 && parseInt(userInput.join("")) >= 500 && parseInt(userInput.join(""))  <= 899) {
      resultArray.push(userInput[0] = "D"); //hundreds
      console.log(resultArray)
    } else if (userInput.length === 3 && parseInt(userInput.join("")) >= 900) {
    resultArray.push(userInput[0] = "C");
    console.log(resultArray)
    } else if (userInput.length === 3 && parseInt(userInput.join("")) <= 400) {
    resultArray.push(userInput[0] = "C");
    console.log(resultArray)
    }
    if (userInput.length === 2 && parseInt(userInput.join("")) <= 40) {
    resultArray.push( userInput[0] = "X");      //tens
      console.log(resultArray)
    }  else if (userInput.length === 2 && parseInt(userInput.join("")) >= 50 && parseInt(userInput.join(""))  <= 89) {
    resultArray.push(userInput[0] = "L");
      console.log(resultArray)
    } else if (userInput.length === 2 && parseInt(userInput.join("")) >= 90) {
    resultArray.push(userInput[0] = "X")
      console.log(resultArray)
}
    if (userInput.length === 1 && parseInt(userInput.join("")) <= 4){
    resultArray.push(userInput[0] = "I") //ones
      console.log(resultArray)
    }  else if (userInput.length === 1 && parseInt(userInput.join("")) >= 5 && parseInt(userInput.join(""))  <= 8) {
    resultArray.push(userInput[0] = "V");
      console.log(resultArray)
    } else if (userInput.length === 1 && parseInt(userInput.join("")) >= 9) {
    resultArray.push(userInput[0] = "I");
      console.log(resultArray)
}




}

//user interface logic
$(document).ready(function(){
  $("#numbers").submit(function(event){
    var userInput = parseInt($("#usernumbers").val()).toString().split("");
    event.preventDefault();

     var result = romanInput(userInput)

  })

})
