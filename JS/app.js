function getInputValueById(inputId){
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}
function getElementById(textElement){
  const element = document.getElementById(textElement);
  return element;
}
function doPercentage(number){
  const thePercentage = number / 100;
  return thePercentage;
}

document.getElementById('calculate').addEventListener('click', function(){
  const earningValue = getInputValueById('earning-field');
  const foodCost = getInputValueById('food-field');
  const rentCost = getInputValueById('rent-field');
  const shoppingCost = getInputValueById('shopping-cost');
  const totalExpenses = foodCost + rentCost + shoppingCost;
  const totalCostElement = getElementById('total-cost');
  totalCostElement.innerText = totalExpenses;
  const balanceElement = getElementById('balance');
  const currentBalance = earningValue - totalExpenses;
  balanceElement.innerText = currentBalance;
})

document.getElementById('save-btn').addEventListener('click', function(){
  const balanceElement = getElementById('balance');
  const earningValue = getInputValueById('earning-field');
  const percentageField = document.getElementById('percentage-field');
  const percentageNumber = percentageField.value;
  const rate =  doPercentage(percentageNumber);
  const savingMoney = earningValue * rate;
  const savingMoneyElement = getElementById('saving-money');
  savingMoneyElement.innerText = savingMoney;
  const remainingMoneyElement = getElementById('remaining-balance');
  const haveBalance = balanceElement.innerText;
  const remainingBalance = haveBalance - savingMoney;
  remainingMoneyElement.innerText = remainingBalance;
})