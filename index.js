const myAccount = {
  name: "John",
  expenses:[],
};
function addExpenses(description,ammount){
  object={
    Des:description,
    Expense:ammount,
  };
  myAccount.expenses.push(object);
}

function getAccountSummary(){
  let total=0;
  myAccount.expenses.forEach(function(el){
    total=total+el.Expense;
  })
  console.log("Total Pengeluaran "+myAccount.name+" Rp."+total);
}

addExpenses("Beli Makanan", 10000);
addExpenses("Kuota Internet", 65000);
addExpenses("Ongkir",10000);
getAccountSummary();