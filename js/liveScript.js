var burgerName = document.getElementById("name");
var ingredientsList = document.querySelectorAll(".ingredients input");
var calculateBtn = document.querySelector(".submit > button ")
var coupon = document.getElementById("coupon")


calculateBtn.addEventListener("click", function () {
    var checkedItems = [];
    var cost = parseInt(50);

    for (var index = 0; index < ingredientsList.length; index++) {
        var ingredient = ingredientsList[index];
        console.log(ingredient)

        if (ingredient.checked) {
            checkedItems.push(ingredient.value)
        }
    }


    if (checkedItems.length > 0) {
        var target = document.getElementById("price")
       

        for (var index = 0; index < checkedItems.length; index++) {
           var itemChecked= checkedItems[index]
           itemChecked = parseInt (itemChecked)
           
           cost = mySum (itemChecked, cost)
           
           
        }    
        var boolExist = itemExist(burgerName.value)
        if (boolExist){
            cost = saleApply(coupon, cost)
            target.innerHTML = cost
        }else{
            alert ("Dai un nome al tuo Burger")
        }
    }else{
        alert ("Devi selezionare almeno un ingrediente speciale")
    }

 

   

})




function controlCoupon (inserimento){
    var check = false
    if (inserimento === sconto1 || inserimento === sconto2 || inserimento === sconto3){
        check = true
    }
    return check
}

function mySum (addedItem, condition){   
    
    condition += addedItem

    return condition

}

function itemExist (searchingItem) {
     var control = false

     if(searchingItem){
         control= true
     }

     return control
}

function saleApply (element, initialPrice )
{
    var sales = ["FlorianLeica", "FlavioCordari", "FabioForghieri", "FrancescoElia"]

    for (var index = 0; index < sales.length; index++) {
        sale = sales[index];

        if (sale === element.value){
            initialPrice = initialPrice * 50 / 100
            return initialPrice
        }else{
            return initialPrice
        }
        
    }

    

}