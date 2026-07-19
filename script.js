function findSensi(){

    let phone = document.getElementById("phone").value.toLowerCase();
    let output = document.getElementById("output");

    if(phone.includes("iphone")){
        output.innerHTML = 
        "iPhone Sensi 🔥<br><br>" +
        "General: 100<br>" +
        "Red Dot: 95<br>" +
        "2x Scope: 90<br>" +
        "4x Scope: 85";
    }

    else if(phone.includes("samsung")){
        output.innerHTML =
        "Samsung Sensi 🔥<br><br>" +
        "General: 100<br>" +
        "Red Dot: 100<br>" +
        "2x Scope: 95<br>" +
        "4x Scope: 90";
    }

    else if(phone.includes("realme")){
        output.innerHTML =
        "Realme Sensi 🔥<br><br>" +
        "General: 95<br>" +
        "Red Dot: 90<br>" +
        "2x Scope: 85<br>" +
        "4x Scope: 80";
    }

    else{
        output.innerHTML =
        "Device not found 😎<br>" +
        "Soon adding more phones...";
    }

}
