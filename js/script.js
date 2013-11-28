(function() {
    var rand = Math.random();
    if (rand < 0.3) {
        document['pic'].src = 'img/2.jpg';
    } else if (rand < 0.6) {
        document['pic'].src = 'img/3.jpg';
    };
    document['pic'].style.display = "block";
}).call(this);