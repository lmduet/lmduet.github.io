(function() {
    var rand = Math.random();
    if (rand < 0.3) {
        document['pic'].src = 'img/3.jpg';
    } else if (rand < 0.6) {
        document['pic'].src = 'img/4.jpg';
    };
    document['pic'].style.display = "block";

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("sect-toggle").onclick = function toggle() {
            var home = document.getElementById('home'),
                concerts = document.getElementById('concerts');

            if(home.style.display === "block") {
                home.style.display = "none";
                concerts.style.display = "block";
            } else {
                home.style.display = "block";
                concerts.style.display = "none";
            }
        }
    })


}).call(this);
