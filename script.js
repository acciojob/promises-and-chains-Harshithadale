const age = document.getElementById("age");
const name = document.getElementById("name");
document.getElementById("btn").onclick = ()=>{
	if(age.value == "" || name.value == ""){
		alert("Please enter valid details.")
		return 
	}
	const myPromise = new Promise((res,rej) =>{
		if(age.value >= 18){
			setTimeout(()=>{
				res("Welcome, . You can vote.")
			,4000})
		}
		else{
			setTimeout(()=>{
				rej("Oh sorry . You aren't old enough.")
			},4000)
		}
	})
	myPromise.then(data=>{
	alert(data)
	})
	.catch(err=>{
		alert(err)
	})
}