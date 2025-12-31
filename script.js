const makeChange = (c) => {
  // your name here
	let res = {};

for (let i =0;i<4;i++){
  let [coin, value] = c[i];
  value = value * 100;
  let count = Math.floor(amount / value);
  if (count >= 0){
    res[coin] = count;
    amount -= value * count;
  }
}
	console.log(res);
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
