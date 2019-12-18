// function hello(){
// 	let guess = prompt("how many sides does a triangle have?");
// 	if (guess == 1){
// 		alert("that is wrong");
// 	}
// 	else if (guess == 2){
// 		alert("try again");
// 	}
// 	else if (guess ==3){
// 		alert("correct");
// 	}
// 	else{
// 		alert("keep trying");
// 	}

// }

function hello(){
	let guess = prompt("how many sides does a triangle have?");
	if (guess == 3){
		alert("correct");
	}

	else{
		alert("keep trying");
	}

}

function question(){
	let guess = prompt("if I have 120 on one side and 20 on the other what is the remaining side on a trigangle?");
	if (guess == 40){
		alert("correct");
	}

	else{
		alert("keep trying");
	}

}





















function encrypt(){
var input =prompt ("Type message");
var single = input.split("");
var each =""
for (i=0; i < input.length; i==) {
    if (i % 2!==0){
    each += String.fromCharCode(single[i].charCodeAt()+18)
    }
    else{
        each += String.fromcharCode(single[i].charCodeAt()-5)
    }

}

  console.log(each)
}
encrypt()



function decrypt(){
var input =prompt ("Type message");
var single = input.split("");
var each =""
for (i=0; i < input.length; i==) {
    if (i % 2!==0){
    each += String.fromCharCode(single[i].charCodeAt()-18)
    }
    else{
        each += String.fromcharCode(single[i].charCodeAt()+5)
    }

}

  console.log(each)
}
decrypt()
