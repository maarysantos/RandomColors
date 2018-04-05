var btn = document.createElement('input');
btn.type="button";
btn.value="Click me!";
btn.style.color="white";
btn.style.size="24px";
btn.style.borderRadius="5px";
btn.style.backgroundColor ="red";
btn.style.width ="100px";
btn.style.height ="50px";
btn.style.position="absolute";
btn.style.top="30%";
btn.style.left="50%";
btn.style.margin.top="-50%";
btn.style.margin.left="-50%";

document.body.appendChild(btn);
document.body.style.backgroundColor="orange";

btn.addEventListener("click", mudar);

function mudar(){
	var bgColor=("rgb("+Math.floor(Math.random() * 255) +"," + Math.floor(Math.random() * 255) +"," +Math.floor(Math.random() * 255)+")");
	//alert(bgColor);
	document.body.style.backgroundColor= bgColor;

   }

	
	



