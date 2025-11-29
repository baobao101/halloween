function upDate(previewPic) {

    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    document.getElementById('image').innerHTML = previewPic.alt;


}

function unDo() {

    document.getElementById('image').style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML = "<h3>Hover over an image below to preview here.</h3>";

}


