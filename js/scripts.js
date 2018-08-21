var getInitial = function(firstName,lastName) {
  return firstName.charAt(0)+lastName.charAt(0);
}

var Account = function (firstName, lastName, initialDeposit){
  this.firstName = firstName;
  this.lastName= lastName;
  this.balance=initialDeposit;
  this.index = 1;
  this.id = getInitial(firstName, lastName);
  while (this.id in accounts){
    this.id= getInitial(firstName, lastName) + this.index;
    this.index++;
  }
}

var accounts = {};



Account.prototype.fullname = function (firstName, lastName){
  return this.firstName + this.lastName;
}

Account.prototype.validate = function (amount){
  if(this.balance < amount) {
    return false;
  } else {
    return true;
  }
}

Account.prototype.deposit = function (amount){
  this.balance += amount;
}

Account.prototype.withdraw = function (amount){
  if(this.validate(amount)) {
    this.balance -= amount;
  }
  else {
    alert("Not ");
  }
  // this.balance = (this.validate()) ? this.balance-amount:this.balance;
}


$(document).ready(function() {
  $("#register").submit(function(event){
    event.preventDefault();
    var inputFirstName = $("#inputFirstName").val();
    var inputLastName = $("#inputLastName").val();
    var inputInitialDeposit = parseInt($("#inputInitialDeposit").val());
    var accountInstance = new Account (inputFirstName,inputLastName, inputInitialDeposit);


    $(".current-balance p").html("Account ID: "+accountInstance.id +"<br>"+"Current Balance: $"+accountInstance.balance);
    accounts[accountInstance.id] = accountInstance;

    $(".accounts-list p").text("");
    Object.keys(accounts).forEach(function(key) {
      account = accounts[key];
      $(".accounts-list p").append("Account ID: "+account.id +"<br>"+"Current Balance: $"+account.balance+"<br>");
    })
  });

  $("#deposit-withdraw").submit(function(event){
    event.preventDefault();
    var inputTransaction = $("input:radio[name=transaction]:checked").val();
    var inputAmount = parseInt($("#amount").val());
    var inputId = $("#id").val();
    var accountInstance = accounts[inputId];

    if (inputTransaction === "deposit") {
      accountInstance.deposit(inputAmount);
    }
    else {
      accountInstance.withdraw(inputAmount);
    }
    $(".current-balance p").html("Account ID: "+accountInstance.id +"<br>"+"Current Balance: $"+accountInstance.balance);

    $(".accounts-list p").text("");
    Object.keys(accounts).forEach(function(key) {
      account = accounts[key];
      $(".accounts-list p").append("Account ID: "+account.id +"<br>"+"Current Balance: $"+account.balance+"<br>");
    })

  });
});
