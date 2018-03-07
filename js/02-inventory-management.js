/*eslint-env browser*/

function displayMenu() {
	"use strict";
	window.console.log("Welcome to Inventory Management Application");
	window.console.log("");
	window.console.log("COMMAND MENU");
	window.console.log("view - view all products");
	window.console.log("update - update stock");
	window.console.log("exit - exit the program");
	window.console.log("");
}
function view(inventory) {
	"use strict";
    if(!localStorage.inventory) {
        localStorage.inventory = JSON.stringify(inventory);
    } else {
        inventory = JSON.parse(localStorage.inventory);
    }
	inventory.sort();
    inventory.forEach(function (product) {
        window.console.log(product[0] + product[1] + "(" + product[2] + ")" + product[3]);        
    });
    window.console.log("");
}
function update(inventory) {
	"use strict";    
    if(!localStorage.inventory) {
        localStorage.inventory = JSON.stringify(inventory);
    } else {
        inventory = JSON.parse(localStorage.inventory);
    }
	var sku = parseInt(window.prompt("enter sku number for product"),10); 
    var i;
    for (i = 0; i < inventory.length; i += 1){
        if(sku === inventory[i][0])
       {
        window.alert(sku);
        var productNo = sku;   
    }
    }
    if (isNaN(sku) || sku !== productNo){
         window.alert("wrong sku number");
    } else {
        var quanity = parseInt(window.prompt("enter quanity"), 10);
        
            if (isNaN(quanity) || quanity < 0){
                window.alert("Enter a valid quantity");
                
            } else {
            inventory.forEach(function (product) { 
             if(sku === product[0]){
            product.splice(2,1, quanity);
             }
         });
            }
        
        localStorage.inventory = JSON.parse(localStorage.inventory);
    }
        /*if(sku === inventory[i][0]){
            var quanity = parseInt(window.prompt("enter quanity"), 10);
            if (isNaN(quanity) || quanity < 0){
                window.alert("Enter a valid quantity");
                break;
            }
         inventory.forEach(function (product) { 
             if(inventory[i][0] == product[0]){
            product.splice(2,1, quanity);
             }
         });
        break;    
            
           
        }else 
            {
                window.alert("wrong sku number");
                
            }*/
    
}
	/*inventory.forEach(function (product) { 
        if (sku === product[0]) {
			var quanity = parseInt(window.prompt("enter quanity"), 10);
            if (isNaN(quanity) || quanity < 0){
                window.alert("Enter a valid quantity");
            }
            window.alert("Thanks");
            //product.splice(2,1, quanity);            
		} else {
            window.alert("provide right sku");
            break;
        }
		
    });
}*/
function main() {
	"use strict";
	var inventory, command;
	displayMenu();
	inventory = [[3223, "Socks", 36, "$9.99"], [2233, "Hat", 12, "$14.99"], [4824, "Shirt", 10, "$15.99"], [9382, "Jackets", 5, "$49.99"], [6343, "Jeans", 22, "$39.99"] ];
	while (true) {
        command = window.prompt("enter command");
        if (command !== null) {
            if (command === "view") {
               view(inventory);
			} else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("command is not valid");
            }
        } else {
        break;
		}
    }
    window.console.log("program terminated");
}
main();