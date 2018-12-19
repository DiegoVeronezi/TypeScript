class Person {
  name : String;

  constructor(value : String) {
    this.name = value;
  }

  dance() {
    console.log(this.name + " is dancing.");
  }
}

var bran = new Person("Bran");

bran.dance();

class AwesomePerson extends Person {
  dance() {
    console.log("So Cool!");
    super.dance();
  }  
}

var robb = new AwesomePerson("Robb");

robb.dance();