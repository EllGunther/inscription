let go = document.getElementById("go");
let condition = document.getElementById("condition");
let precedent = document.getElementById("endgo");
let precedent2 = document.getElementById("endgo2");
let inscription = document.getElementById("inscription");
let page = document.getElementById("page");
let valider = document.getElementById("valider");
let valider2 = document.getElementById("valider2");
let final = document.getElementById("final");
let merci = document.getElementById("merci");
valider2.addEventListener("click", () => {
    home.style.left = "0%";
    final.style.left = "200%";
    page.style.left = "200%";
});
valider.addEventListener("click", () => {
    let x = 0;
    let nom = "";
    for (i in page.childNodes) {
        //console.log(page.childNodes[i]);
        if (page.childNodes[i].nodeName == "INPUT") {
            nom = page.childNodes[1].value;
            if (page.childNodes[i].value) {
                x++;
            }
        }
    }
    if (x != 5) {
        x = 0;
        alert("completer tout les champs")
    }
    else {
        final.style.left = "0%";
        merci.textContent = `Merci mr(mn) ${nom} pour votre inscription. Passer a nos bureau dans 48 heurs pour deposer tout les documents et valider votre inscription.`
    }
});

inscription.addEventListener("click", () => {
    page.style.left = "0%";
    condition.style.left = "-100%"; 
});
precedent.addEventListener("click", () => {
    condition.style.left = "200%";
    home.style.left = "0%";
});
precedent2.addEventListener("click", () => {
    page.style.left = "200%";
    condition.style.left = "0%"; 
    home.style.left = "-100%";
});
let home = document.getElementById("home");
go.addEventListener("click", () => {
    condition.style.left = "0%"; 
    home.style.left = "-100%";
});