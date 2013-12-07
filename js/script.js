(function() {


    document.addEventListener('DOMContentLoaded', function() {

        var toggler = document.getElementById("sect-toggle"),
            home = document.getElementById('home'),
            concerts = document.getElementById('concerts'),
            switcher = document.getElementById('switch');

        toggler.onclick = function toggle() {

            switcher.classList.add("hide");

            setTimeout(function() {

                if(toggler.innerHTML === "Concerts") {
                    toggler.innerHTML = "Accueil";
                    home.style.display = "none";
                    concerts.style.display = "block";
                } else {
                    toggler.innerHTML = "Concerts";
                    home.style.display = "block";
                    concerts.style.display = "none";
                }

                switcher.classList.remove("hide");

            }, 500);

        }

    })

    var srcRegexp = /^.*img\/(\d).jpg$/i

    function changeImage() {
        var img = document.getElementById("pic"),
            curidx, nextidx;
        img.classList.add("hide");
        setTimeout(function(){
            curidx = parseInt(img.src.match(srcRegexp)[1])
            nextidx = curidx === 4 ? 0 : curidx + 1;
            img.src = "img/" + nextidx + ".jpg";
            img.classList.remove("hide");
        }, 500);
    }

    var interval = window.setInterval(changeImage, 6000);

    document.getElementById("pic").onclick = changeImage;

}).call(this);
