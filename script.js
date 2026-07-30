
document.addEventListener("DOMContentLoaded", function () {
    
    const tarix = prompt("Tarixi daxil edin (İl-Ay-Gün formatında, məsələn: 2026-10-25):");

    if (tarix) {
        
        const [il, ay, gun] = tarix.split("-");

        if (il && ay && gun) {
            document.getElementById("netice").innerText = `Nəticə: ${gun}-${ay}-${il}`;
        } else {
            document.getElementById("netice").innerText = "Format səhvdir! Lütfən İl-Ay-Gün şəklində yazın.";
        }
    } else {
        document.getElementById("netice").innerText = "Hər hansı bir tarix daxil edilmədi.";
    }

});