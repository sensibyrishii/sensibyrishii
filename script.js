
function findSensi() {

    let phone = document.getElementById("phone").value.toLowerCase().trim();
    let output = document.getElementById("output");

    let devices = {

        "iphone": {
            name: "🍎 iPhone",
            sensi: "General: 100<br>Red Dot: 95<br>2x Scope: 90<br>4x Scope: 85"
        },

        "samsung": {
            name: "📱 Samsung",
            sensi: "General: 100<br>Red Dot: 100<br>2x Scope: 95<br>4x Scope: 90"
        },

        "realme": {
            name: "⚡ Realme",
            sensi: "General: 95<br>Red Dot: 90<br>2x Scope: 85<br>4x Scope: 80"
        },

        "oneplus": {
            name: "🚀 OnePlus",
            sensi: "General: 100<br>Red Dot: 98<br>2x Scope: 92<br>4x Scope: 88"
        },

        "xiaomi": {
            name: "🔥 Xiaomi",
            sensi: "General: 95<br>Red Dot: 94<br>2x Scope: 90<br>4x Scope: 85"
        },

        "vivo": {
            name: "💙 Vivo",
            sensi: "General: 96<br>Red Dot: 92<br>2x Scope: 88<br>4x Scope: 82"
        },

        "oppo": {
            name: "💚 OPPO",
            sensi: "General: 95<br>Red Dot: 90<br>2x Scope: 85<br>4x Scope: 80"
        }

    };

    let found = false;

    for (let brand in devices) {

        if (phone.includes(brand)) {

            output.innerHTML = `
                <h2>${devices[brand].name} SENSI 🎯</h2>
                <hr>
                ${devices[brand].sensi}
            `;

            found = true;
            break;
        }
    }

    if (!found) {
        output.innerHTML = `
            <h3>❌ Device Not Found</h3>
            <p>Rishii Team will add this device soon 🚀</p>
        `;
    }
}
