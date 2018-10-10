// var a;
// if(a===undefined){
//     console.log(" a is not defined")
// }
// else{
//     console.log("a is defined")
// }

// function greet(name)
// {
//
//     name=name||'<Your name here>'; // deppends on value if we have passed name, name will be printed
//     // if name is undefined, 'your name here will be printed'
//     console.log(name);
//
// }
// greet(); //won't throw an error instead it will pprint undefiined
// greet('nitin'); // print nitin
//console.log(3<2<1);
// here there will bee coersion
// 3<2=> false
// false<1 => false will be converted to number which is 0
// so we get 0<1
// which is true
//part 3 last video

//-----------------------------Objects and functions
var person= new Object();
person["firstname"]="Nits";
person["lastname"]="Gahlawat";
 var name="firstname";
 // console.log(person);
 // console.log(person[name]);

 person.address=new Object();
 person.address.city="delhi";
 person.address.regeion="south";
 //console.log(person.address.city);
 //console.log(person.address.regeion);
//console.log(person["address"]["regeion"]); // line 39 and 40 are doing the same work

//----------------objects using objects literals
var person={
 firstname:"Nitin",
    lastname:"Gahlawat",
    address:{
  city:"delhi",
        regeion:'south'
    }
};
// console.log(person);
// console.log(person.firstname);
// console.log(person.address.city);

// function greet(ans){
//     console.log("hi there"+ans.lastname);
// }
// greet(person);
// greet({
//     firstname:"xyz",
//     lastname:"humpydumpy"
// });
//-----------------------------------Using namespaces to avoid variable and function collision
var greet="hello";
var greet="hola";
console.log(greet);
var english={};
var spanish={};
english.greet="hello";
spanish.greet="hola";
//console.log(english.greet);
//console.log(spanish.greet);
//----------------------------------------Json

var details={
    name:'Nitin',
    level:'beginner'
};
//console.log(JSON.stringify(details)); // converting json format to a string format

 var result=JSON.parse('{"name":"nitin","level":"beginner"}'); // string to a json format
 //console.log(result);

//---------------------FIRST CLASS FUNCTIONS

function log(a){
   // console.log(a);
// to run the fn passed to the log simply use a();
    a();
}
log(function(){
   // console.log("hello everyone this is passed as a fn to log");
});

//----------------Arrays
var arr=[1,
    true,
    {
        name:'nitin',
        location:'ncr'
    },
    function(name){
    var greeting="Hola!!"
console.log(greeting+name);
},
    "Nits"
    ];
console.log(arr);
arr[3](arr[2].name);