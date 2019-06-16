//console.log(process.argv);
//var flag = process.argv.indexOf('--user');
//console.log(flag+1);
process.stdout.write('ask me a question');
process.stdin.on('data', function(answer){
	console.log(answer.toString());
});