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


interface productInterface {
  brand: string;
  model: number;
  speedCalc(value: number): void
}

const product: productInterface = {
  brand: "Notebook",
  model: 3456,
  speedCalc(){
    console.log(`this ${this.brand} with model ${this.model}`);
  }
}

let unionType: number | string | boolean;

unionType = 34;

unionType = "Diego";

unionType = true;