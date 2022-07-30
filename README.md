# Design Pattern In Practice
I've created this project to practice a few known design patterns, for this I'm using:
* javascript: because it is very friendly and easy language to get along with 
* typescript: because javascript doesn't undestand the concepts of interfaces and also because its power of creating other useful types 
* node: get the results in the computer console is much simpler than needing to use the browser.


## Get it up and running

### With Node and NPM/YARN Installed (Execute this process to the api and client project) .

1 - Install the dependencies

```bash
yarn
```

2 - Execute the project

```bash
yarn runit
```

# SOLID

Everything starts here, to get to undestand design patterns we need to know the concepts of SOLID very well

## S: Single Responsability principle

Functions, Method, Classes shouldn't be doing more than one thing neither having more than one purpose.

## O: OPEN Closed Principle

Open to extension vs Close to modification - NOT TOO CLEAR RIGHT?
Not to be confused with extending classes for inheritance.

Make less changeable classes, if you have too many if/switch statements you're probably
breaking this principle. Let other classes implement the interface your client class need,
and don't worry with comparing instaces of them. The strategy design patter is a great example
to show what this principle is all about.


## L: Livosky Substitution Principle

use children classes without breaking the logic of the parent, Polimofism in practice.

## I: Interface Segregation Principle

Don't force classes to implement functions that they'll not need

instead of
```
interface Machine {
  print(): void;
  scan(): void;
}
```

Do

```
interface Printer {
  print()
}

Interface Scanner {
  scan()
}

class OldFashionedPrinter implements Printer {
  print() {
    //implementation
  }

}

```

## D: Dependency Inversion Principle


High Level Modules should not depend on low level modules instead
they should depend on Abstractions (interfaces implemented by classes that represent the low level modules)

For example:
class UserData (HighModule) depends on an abstraction
USerDataInterface instead of an Implementation such as MySqlConection, MongoConnection, OracleConnection...


```

//Abstraction / Interface
interface USerDataInterface {
  adress(): string;
  age(): number;
  contact(): string;
}

//Low Module Class
class MySQL implements USerDataInterface {

  private mySqlConextion = new MySqlConection()

  public string getAddress(User user) {
    return mySqlConextion.getAddress(user)
  }

  public int getAge(User user) {
    return mySqlConextion.getAge(user)
  }

  public string address(User user) {
    return mySqlConextion.getContact(user)
  }
}

//High Level Module
class UserData {

    private UserDataInterface database;
    private User user;

    public UserData(USerDataInterface dataBase, User user){
    	this.database = dataBase;
    	this.user = user;
    }
    
    int getAge() {
    	return database.getAge(this.user)
    }
    
    public string getAdress() {
    	return database.getAdress(this.user)
    }
    
    public string getContact() {
    	return database.getContact(this.user)
    }
}

```
