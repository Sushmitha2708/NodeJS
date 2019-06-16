var readline = require('readline');
var rl= readline.createInterface(process.stdin, process.stdout);
rl.question("what is your name?",function(name){
	rl.setPrompt(name + "how old are you?");
	rl.prompt();
	rl.on('line',(age)=>{
		if(age<18){
			console.log(name + "because you are" + age +" years old, you cannot proceed");


		}
		else {
			console.log(name + " is great the you are "+ age + "years old, because now you can enjoy our services");
		}
	});
});