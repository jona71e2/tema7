document.addEventListener("DOMContentLoaded", start);

let menuData = [];
let endpoint = "https://spreadsheets.google.com/feeds/list/17Dd7DvkPaFamNUdUKlrFgnH6POvBJXac7qyiS6zNRw0/od6/public/values?alt=json";

function start() {
    console.log("start");
    hentData();

}

async function hentData() {
    console.log("data");
    const response = await fetch(endpoint);
    console.log("response", response);
    menuData = await response.json();
    console.log("menuData", menuData);
    visRetter();
}


function visRetter() {
    console.log("visRetter");
    const destination = document.querySelector("article");
    const container = document.querySelector("#data-container");
    const retterTemplate = document.querySelector("template");

    menuData.feed.entry.forEach(ret => {
        let klon = retterTemplate.cloneNode(true).content;
        klon.querySelector("h3").textContent = `${ret.gsx$navn.$t}`;
        klon.querySelector("img").src = `imgs/small/${ret.gsx$billede.$t}-sm.jpg`;
        klon.querySelector("p:nth-child(3)").textContent += `${ret.gsx$kort.$t}`;
        klon.querySelector("p:nth-child(4)").textContent += `Pris: ${ret.gsx$pris.$t},-`;
        container.appendChild(klon);


    })

}
