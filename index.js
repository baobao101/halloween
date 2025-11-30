function upDate(previewPic) {

    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    document.getElementById('image').innerHTML = "";


}

function unDo() {

    document.getElementById('image').style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML = "<h3>Hover over an image below to preview here.</h3>";

}

const button = document.getElementById('language');
button.addEventListener('click', ()=> translate());
function translate() {
  const t1 = document.getElementById("translate1");
  t1.innerHTML = "<p>Masques et rires remplissent la nuit, fantômes et glamour à la lumière de la lune.<br/>Effrayants, doux, ils tournoient avec joie, chaque pas de danse, un plaisir à entendre. 🧡👻</p>"
  const t2 = document.getElementById('image');
  t2.innerHTML = "<h3>Choisissez une image ci-dessous pour la voir ici.</h3>"
}

