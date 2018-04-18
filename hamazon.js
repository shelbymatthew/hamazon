

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
        console.log(results)
        inquirer
            .prompt([
                {
                    name: "id_number",
                    type: "input",
                    message: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i]);
                        }
                        return choiceArray;
                    },
                    message: "Which item would you like to buy? (please give the item_id number)"
                },
                // {
                //     name: "id_number",
                //     type: "input",
                //     message: "What is the id of the prodcuct you would like to buy?",
                // },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase?",

                }])
            .then(function (answer) {
                console.log(answer)
                query(answer.id_number, answer.quantity);
            });
    });
}


function query(product, userQuery) {

    connection.query("SELECT * FROM products WHERE item_id =" + product + "", function (err, res) {
        console.log(res[0].stock_quantity);
        console.log(userQuery);

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
        }else {
        console.log("not enough inventory, sorry!");
        endConnection();
        }
    }          //   else console.log("Out of stock");
    )
};

function endConnection(){
    connection.end();
}