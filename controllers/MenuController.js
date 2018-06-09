const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor() {
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Get the date",
                    "Exit"
                ]
            }
        ];
        this.contacts = [];
    }

    main() {
        console.log('Welcome to AddressBloc!');
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch (response.mainMenuChoice) {
                case "Add new contact":
                    this.addContact();
                    break;
                case "Get the date":
                    this.getDate();
                    break;
                case "Exit":
                    this.exit();
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    clear() {
        console.log("\x1Bc");
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
      }

    getDate(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        console.log("Today is " + today);
    }

    exit() {
        console.log("Thanks for using AddressBloc!");
        process.exit();
    }
}