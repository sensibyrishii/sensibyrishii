
function findSensi(){

let phone = document.getElementById("phone").value.toLowerCase();
let output = document.getElementById("output");

let devices = {

"iphone 15":"General: 100<br>Red Dot: 95<br>2x Scope: 90<br>4x Scope: 85",
"iphone 14":"General: 100<br>Red Dot: 96<br>2x Scope: 92<br>4x Scope: 86",

"samsung s24":"General: 100<br>Red Dot: 100<br>2x Scope: 95<br>4x Scope: 90",
"samsung a54":"General: 95<br>Red Dot: 92<br>2x Scope: 88<br>4x Scope: 84",

"oneplus 12":"General: 100<br>Red Dot: 98<br>2x Scope: 94<br>4x Scope: 88",

"realme gt":"General: 98<br>Red Dot: 94<br>2x Scope: 90<br>4x Scope: 85",

"redmi note 13":"General: 96<br>Red Dot: 92<br>2x Scope: 88<br>4x Scope: 84",

"vivo v30":"General: 97<br>Red Dot: 93<br>2x Scope: 89<br>4x Scope: 85"

};


let found=false;

for(let device in devices){

if(phone.includes(device)){

output.innerHTML=
"🔥 "+device.toUpperCase()+" SENSI 🔥<br><br>"+
devices[device];

found=true;
break;

}

}


if(!found){

output.innerHTML=
"❌ Device not found<br>Soon adding more phones 🔥";

}

}
