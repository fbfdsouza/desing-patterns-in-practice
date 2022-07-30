# <p style="text-align:center; color:blue"> Design Pattern In Practice</p>

<pre>I've created this project to practice a few known design patterns, for this I'm using:
javascript: because it is very friendly and easy language to get along with 
typescript: because javascript doesn't undestand the concepts of interfaces and also because its power of creating other useful types 
node: get the results in the computer console is much simpler than needing to use the browser.

</pre>

## <span style="color:purple">Get it up and running</span>

### <span style="color:gray">With Node and NPM/YARN Installed (Execute this process to the api and client project) .</span>

1 - Install the dependencies

```bash
yarn
```

2 - Execute the project

```bash
yarn runit
```

# <span style="color:red">S</span><span style="color:orange">O</span><span style="color:#CCCC00">L</span><span style="color:green">I</span><span style="color:blue">D</span>

<pre>Everything starts here, to get to undestand design patters we need to know the concepts of SOLID very well</pre>

## <span style="color:red">S: Single Responsability principle</span>

<pre>
Functions, Method, Classes shouldn't be doing more than one thing neither having more than one purpose.</pre>

## <span style="color:orange">O: OPEN Closed Principle</span>

<pre>
Open to extension vs Close to modification - NOT TOO CLEAR RIGHT?
Not to be confused with extending classes for inheritance.

Make less changeable classes, if you have too many if/switch statements you're probably
breaking this principle. Let other classes implement the interface your client class need,
and don't worry with comparing instaces of them.
</pre>

## <span style="color:#CCCC00">L: Livosky Substitution Principle</span>

use children classes without breaking the logic of the parent, Polimofism in practice.

## <span style="color:green">I: Interface Segregation Principle</span>

<pre>Don't force classes to implement functions that they'll not need</pre>

<pre>instead of</pre>

```
interface Machine {
  print(): void;
  scan(): void;
}
```

<pre>Do</pre>

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

## <span style="color:blue">D: Dependency Inversion Principle</span>

<pre>
High Level Modules should not depend on low level modules instead
they should depend on Abstractions (interfaces implemented by classes that represent the low level modules)

For example:
class UserData (HighModule) depends on an abstraction
USerDataInterface instead of an Implementation such as MySqlConection, MongoConnection, OracleConnection...
</pre>

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
