var n = 0;
var a = "Hello!";
var isSummer = false;
var names = ["Diego", "Pedro", "João"];
var some = ["Diego", "Pedro", 5];
a = 123;
isSummer = true;
function getName() {
    console.log(isSummer);
}
function printName(heroes) {
    console.log(heroes);
}
printName({ name: "Superman", age: 12 });
printName({ name: "Batman" });
var product = {
    brand: "Notebook",
    model: 3456,
    speedCalc: function () {
        console.log("this " + this.brand + " with model " + this.model);
    }
};
var unionType;
unionType = 34;
unionType = "Diego";
unionType = true;
