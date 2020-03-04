

 /* var prom_pt = prompt("Please enter your name");
  var start = prompt("enter start value");
  
  if(isNaN(start))
  {
    var start = prompt("Enter Start value");
    var end = prompt("Enter end value");
    alert("output:"+prom_pt.slice(start,end));

  }
  else{
    var end = prompt("Enter end value");
    alert("output : "+prom_pt.slice(start,end));
  }*/
  
  
  //returns sum of two numbers
   function addition(num_1,num_2) {
    let num_1 = 50,num_2 = 20;
    return num_1+num_2;
  }
  //returns difference of two numbers
  function subtract(num_1,num_2) {
    let num_1 = 50,num_2 = 20;
    return num_1-num_2;
  }
  function multiply(num_1,num_2) {
    let num_1 = 50,num_2 = 20;
    return num_1*num_2;
  }
  function division(num_1,num_2) {
    let num_1 = 50,num_2 = 20;
    return num_1/num_2;
  }
    function modulo(num_1,num_2) {
    let num_1 = 50,num_2 = 20;
    return num_1%num_2;
  }
    function power(num_1,num_2) {
    let num_1 = 50,num_2 = 2;
    return num_1**num_2;
  }
    function multiply(num_1,num_2) {
    let num_1 = 50,num_2 = 20;
    return num_1*num_2;
  }
function compareString(str_1,str_2) {
  let str_1 = 'Kavya';
  let str_2 = 'KAVYA';
  return (str_1.toUpperCase())===(str_2?'true':'false');
      }
function compareNum(num_1,num_2) {
  let num_1 = 123;
  let num2 = 1234;
  return (num_1===num2?1:0)
}
  function compareValue(num_1,str_1)
  {
    let num_1 = 123;
    let str_1 = "123";
    return (num_1===str_1?'true':'false')
  }
  console.log(addition());
  console.log(subtract());
  console.log(multiply());
  console.log(division());
  console.log(modulo());
  console.log(power());
  console.log(compareString());
  console.log(compareNum());
  console.log(compareValue());

//check vowels
function isVowel(str_1) {
  let str = 'helloworld';
  for(let i=0;i<str.length;i++)
  {
  if(str.charAt(i)==='a' || str.charAt(i)==='e' || str.charAt(i)==='i' || str.charAt(i)==='o'||str.charAt(i)==='u'
  ||str.charAt(i)==='A'||str.charAt(i)==='E'||str.charAt(i)==='I'||str.charAt(i)==='O'||str.charAt(i)==='U') {
    return str.charAt(i);
  }
}
}

//PRIME NUMBER OR NOT
let str_1 = isVowel();
console.log(str_1);

let num=199,count=0;
for(i=1;i<num;i++)
{
  if(num%i==0)
  {
    count++;
  }
}
if(count==2)
{
  console.log('Prime');
}
else
{
  console.log('Not prime');
}


//GRADEFINDER
let mark = 10;

if(mark>=90 && mark<=100)
{
  console.log('A');
}
else if(mark>=80 && mark<90) {
  console.log('B');
}
else if(mark>=70 && mark<80) {
  console.log('C');
}
else if(mark>=60 && mark<70) {
  console.log('D');
}
else if(mark>=50 && mark<60) {
  console.log('E');
}
else {
  console.log('REAPPER');
}

  

  


 