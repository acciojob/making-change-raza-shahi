const makeChange = (c) => {
  // your name here
	let amount = c;
	let obj = { 0: ["q", 0.25], 1: ["d", 0.10], 2: ["n", 0.05], 3: ["p", 0.01] };
	let res = {};

for (let i =0;i<4;i++){
  let [coin, value] = obj[i];
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
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
