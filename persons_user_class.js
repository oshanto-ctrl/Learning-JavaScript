/*
Learning about class in javascript.
Model a User, a Person.
Greet and deescribe the user using methods.
*/

// Modeling a User class.
// User have first name / forename
// User have username and password.

function User(forename, username, password, contact){

    this.forename = forename
    this.username = username
    this.password = password
    this.contact = contact

    // Method showUser print user's forename, username, contact 
    User.prototype.showUser = function(){
        let describeUser = "";

        describeUser += "Name: " + this.forename + "\nUsername: " + this.username + "\nContact: " + this.contact;
        
        console.log(describeUser);
    }

    // Method greetUser print user a greeting message.
    User.prototype.greetUser = function(){
        let greetingMessage = ""
        
        greetingMessage += "\n...Welcome...\nHappy to see you " + this.username + "\n";

        console.log(greetingMessage)
    }
}

// Creating an instance of User class
user123 = new User("Rejoan", "Oshanto", "xxxyyAbc1", "Mirpur, Dhaka")

user123.greetUser() // calling greetUser method 
user123.showUser() // calling showUser method






// Modeling a Person class.
// Person have full name, age, sex, address

function Person(name, age, sex, address){

    this.name = name
    this.age = age
    this.sex = sex
    this.address = address

    // Method personDetails for details of a person.
    Person.prototype.personDetails = function(){

        let describePerson = ""

        describePerson += "Name: " + this.name + "\nAge: " + this.age + "\nSex: " + this.sex + "\nAddress: " + this.address + "\n";
        console.log(describePerson)
        

    }

    // Method greetPerson for greeting a fellow person.
    Person.prototype.greetPerson = function(){
        
        console.log("\n...Welcome...\n");
        
        let goodName = this.name.charAt(0).toUpperCase() + this.name.substr(1).toLowerCase();
        
        if(this.sex == "M"){
            console.log("Welcome Mr. " + goodName + " ... Happy to see you sir.");
        }else if(this.sex == "F"){
            console.log("Welcome Miss " + goodName + " ... Happy to see you ma'am.");
        }else{
            console.log("Welcome " + goodName + " ... Happy to see you here."); 
        }
    }

}



// Creating a instance of Person Class.
// have to have (Name, age, sex, address)

// me instance. 
me = new Person("rejoan siddiky", 22, "M", "Mirpur, Dhaka");
me.greetPerson()
me.personDetails()

// wife instance.
wife = new Person("jane doe", 20, "F", "Anywhere in the world.")
wife.greetPerson()
wife.personDetails()
// demo instance using parameter sex as nothing.
demoPerson = new Person("demoDemo", 29, "", "N/A")
demoPerson.greetPerson()
demoPerson.personDetails()








