const makeChange = (c) => {
  // your name here
	const change = {q:0,d:0,n:0,p:0};
	change.q = Math.floor(c/25);
	c = c%25;
	change.d = Math.floor(c/10);
	c = c%10;
	chage.n = Math.floor(c/5);
	c = c%5;
	change.p = c;
	return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
