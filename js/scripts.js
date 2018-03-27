$(document).ready(function() {
  $("#count").submit(function(event){
    event.preventDefault();

    var countTo = parseInt($("#count-to").val());
    var countBy = parseInt($("#count-by").val());
    var myTotal = 0;
    console.log(countTo);
    console.log(countBy);

    if (countTo == NaN || countBy == NaN){
        alert("Please enter a valid number!")
      } else if (countBy <= countTo){
        for (var i = 0; i < countTo; i += countBy) {
          console.log(i);
          myTotal += countBy
          $("#result").append(myTotal + ", ");
          }
      }
  });
});
