const age = document.getElementById("age");
const name = document.getElementById("name");
document.getElementById("btn").onclick = (e)=>{
	e.preventDefault()
	if(age.value == "" || name.value == ""){
		window.alert("Please enter valid details")
		return 
	}
	const myPromise = new Promise((res,rej) =>{
		if(Number(age.value) >= 18){
			setTimeout(()=>{
				res(`Welcome, ${name.value}. You can vote`)
			,4000})
		}
		else{
			setTimeout(()=>{
				rej(`Oh sorry ${name.value}. You aren't old enough`)
			},4000)
		}
	})
	myPromise.then(data=>{
	window.alert(data)
	})
	.catch(err=>{
		window.alert(err)
	})
}