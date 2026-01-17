//Global scope
var globalVar ="I'm a global variable";
let globalLet ="I'm also global, bu scoped with let";
const globalConst ="I'm a global consant";

{
    //Block scope
    var blockVar ="I'm a block-scoped var";
    let blockLet ="I'm a block-scoped let";
    const blockConst ="I'm a block-scoped const";
}

//Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    //console.log(functionVar);
    //console.log(functionLet);
   // console.log(functionConst);

    function papu(){
        const name = "Papu";
        var age = 22;
        age = 2222;
        
    }
    papu();

   let age = 22;
   let canVote = age >= 18 ? "Yes" : "No";
   console.log(canVote);
   console.log(typeof(canVote));