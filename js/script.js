(function() {
    var rand = Math.random();
    if (rand < 0.3) {
        document['pic'].src = 'img/1.jpg';
    } else if (rand < 0.6) {
        document['pic'].src = 'img/2.jpg';
    };
    document['pic'].classList.remove("hide");

    document.addEventListener('DOMContentLoaded', function() {
        toggler = document.getElementById("sect-toggle");
        toggler.onclick = function toggle() {
            var home = document.getElementById('home'),
                concerts = document.getElementById('concerts'),
                switcher = document.getElementById('switch');

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

    function changeImage() {
        var img = document.getElementById("pic");
        img.classList.add("hide");
        setTimeout(function(){
            img.src = "img/" + x + ".jpg";
            x++;
            if(x >= 4){
                x = 0;
            }
            img.classList.remove("hide");
        }, 500);
    }

    var x = 0;

    setInterval(changeImage, 6000);


}).call(this);
