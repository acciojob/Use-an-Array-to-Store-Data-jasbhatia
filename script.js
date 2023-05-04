
// var yourArray=[ "abc", 2, true, false, "one"];
// // console.log(yourArray);
// return yourArray;
let yourArray = [];
for(let i = 0; i < 5; i++){
	let obj = {`str${i + 1}`, i, true};
	let obj = {`str&{i + 1}`, i, true};
	yourArray.push(obj);
}
console.log(yourArray.length);