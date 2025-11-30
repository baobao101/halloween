function upDate(previewPic) {

    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    document.getElementById('image').innerHTML = "";


}

function unDo() {

    document.getElementById('image').style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML = "<h3>Hover over an image below to preview here.</h3>";

}

const button = document.getElementById('language');
button.addEventListener('click', () => translate());
let en = true;
function translate() {
    const t1 = document.getElementById("translate1");
    const t2 = document.getElementById('image');
    if (en) {

        t1.innerHTML = "<p>Masques et rires remplissent la nuit, fantômes et glamour à la lumière de la lune.<br/>Effrayants, doux, ils tournoient avec joie, chaque pas de danse, un plaisir à entendre. 🧡👻</p>"

        t2.innerHTML = "<h3>Cliquez sur une image ci-bas pour la voir ici.</h3>"
    } else {
        t1.innerHTML = "<p>Masks and laughter fill the night, ghosts and glam in moonlit light. <br />Scary, sweet, they twirl with cheer, every step a joy to hear. 🧡👻</p>"

        t2.innerHTML = "<h3>Click an image below to preview here.</h3>"

    }
    en = !en;
}
console.log('hi')
