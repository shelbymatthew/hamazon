
const cTable = require('console.table');
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log("\n\n")
        console.table(results)
        console.log("\n\n")
        inquirer
            .prompt([
                {
                    name: "id_number",
                    type: "input",
                    message: "Which item would you like to buy? (please give the item_id number)"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase?",

                }])
            .then(function (answer) {
                query(answer.id_number, answer.quantity);
            });
    });
}


function query(product, userQuery) {

    connection.query("SELECT * FROM products WHERE item_id =" + product + "", function (err, res) {
        if (res[0].stock_quantity > userQuery) {
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: res[0].stock_quantity - userQuery
                    },
                    {
                        item_id: res[0].item_id
                    }
                ],
                function (error) {
                    if (error) throw error
                    else {
                        console.log("Item(s) purchased!");
                        endConnection();
                    };
                })
        } else {
            console.log("\n\n\nNot enough inventory currently, please select a lower quantity!");
            start();
        }
    }
    )
};

function endConnection() {
    connection.end();
}