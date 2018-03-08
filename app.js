var item1 = "item 1";
var item2 = "item 2";
var item3 = "item 3";
var item4 = "item 4";
var arr = [item1, item2, item3, item4];

var string = "hi";

function removal(){
  arr.pop();
  arr.push(string);
  return arr;
}
console.log(removal());

function loops(){
  for(var i = 0; i <= arr.length; i++){
    document.getElementById("fourth").appendChild(arr[i]);
  }
}
console.log(loops());


var obj = {
  name: "bob",
  Height:"5ft 7in", 
  skin: "light"
}
 console.log(obj);


function dom(){
 document.getElementById("fourth").appendChild(obj);
}
console.log(dom())