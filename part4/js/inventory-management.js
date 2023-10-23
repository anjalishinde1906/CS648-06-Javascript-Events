function display() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System!");
    window.console.log("");
    window.console.log("Inventory command menu");
    window.console.log("Show - Show all commands");
    window.console.log("View - View inventory");
    window.console.log("Update - Update an existing products inventory");
    window.console.log("Exit - Exit system");
    window.console.log("");
}
function view(inventory) {
    "use strict";
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var foundsku = false;
    var quantityUpdated = false;
    var skuNumber = parseInt(window.prompt("Enter the sku number of the product"), 10);
    inventory.forEach(function (product) {
        if (product[0] === skuNumber) {
            foundsku = true;
            while(!quantityUpdated) {
                var quantity = parseInt(window.prompt("Enter the new quantity"), 10);
                if (!isNaN(quantity)) {
                    product[2] = quantity;
                    window.console.log("Quantity updated successfully")
                    quantityUpdated = true;
                } else {
                    window.console.log("Please enter a valid number as quantity");
                    window.console.log("");
                }
            }
        }  
    });
    if (!foundsku){
        window.console.log("Product with sku number:" + skuNumber + " not found"); 
    } 
}

function main() {
    "use strict";
    var inventory = [[1001, "Caps", 12, 18.99],[1002, "Shirts", 25, 59.99],[1003, "Jeans", 26, 19.99],[1004, "Hoodie", 8, 12.99],[1005, "Poncho", 5, 29.99]];
    display();
    var quit = false;

    while(!quit) {
        var command = window.prompt("Type the command of you choice :'show','view','update','exit'");
        if(command !== null) {
            switch(command.toLowerCase()) {
                case "show":
                    display();
                    break;
                case "view":
                    view(inventory);
                    break;
                case "update":
                    update(inventory);
                    break;
                case "exit":
                    quit = true;
                    break;
                default:
                    window.alert("Please enter a valid command");
                    break;
            }
        } else {
            break;
        }
    }
    window.console.log("Program Terminated")
}

main();