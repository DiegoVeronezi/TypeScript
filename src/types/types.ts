var n : Number = 0;
var a : any = "Hello!";
var isSummer : boolean = false;
var names : string[] = ["Diego","Pedro","João"];
var some : any[] = ["Diego","Pedro",5];

a = 123;
isSummer = true;

function getName() : void {
  console.log(isSummer);
}

interface Heroes {
  name : String;
  age?  : Number; // is a optional
}

function printName(heroes : Heroes) : void {
  console.log(heroes);
}

printName({name: "Superman", age: 12});
printName({name: "Batman"});