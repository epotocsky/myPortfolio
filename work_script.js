var imgs = document.getElementsByTagName("img");
for(var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    img.onclick = function(event) {
         window.location.href = this.id + '.html';
    };
}
