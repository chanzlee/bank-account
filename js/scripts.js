var getInitial = function(name) {
  //Hyewon Cho
  var firstName = name.split(" ")[0];
  var lastName = name.split(" ")[1];
  return firstName.charAt(0)+lastName.charAt(0);
}

var Account = function (name, initialDeposit){
  this.name = name;
  this.balance=initialDeposit;
  this.id= getInitial(inputName);
}

$(document).ready(function() {
  $("#input").submit(function(event){
    event.preventDefault();
    var inputName = $("#inputName").val();
    var inputInitialDeposit = parseInt($("#inputInitialDeposit").val());
    var accountInstance = new Account (inputName, inputInitialDeposit);
    console.log(accountInstance);
  });
});
