//dd: die or dump function
//@dd() ckeck for working condition (DOM elements conncetivity with HTML & JS ) 
//add this to check your code - dd(this, 'clicked', 'c');

function dd(obj, string = 'your target', mode = 'l'){
		switch (mode) {
			case 'l':
				var out = "";
				for(var i in obj){
					out += i + " : " + obj[i] + "\n"
				}
				alert(string + " : " + out);
				// statements_1
				break;
			case 'c':
			console.log(string);
			console.log(obj);
				// statements_def
				break;
		}
}//End