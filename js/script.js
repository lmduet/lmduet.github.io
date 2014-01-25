
$(document).ready(function() {

    var srcRegexp = /^.*img\/(\d).jpg$/i;


    $("#desktop-switch-tab").click(function(event) {
        var el = $(this),
            images = $("#images"),
            concerts = $("#concerts");

        if (images.is(":visible")) {
            images.hide(function() {
                el.text("Voir les images");
                concerts.show();
            });
        } else {
            concerts.hide(function() {
                el.text("Voir tous les concerts");
                images.show();
            });
        }
    });

    window.setInterval(function () {

        var img = $("#desktop-cur-img");
            curIdx = parseInt(img.attr("src").match(srcRegexp)[1]),
            nextIdx = isNaN(curIdx) || curIdx ===  4 ? 2 : ++curIdx;
        img.fadeOut(function() {
            img.attr("src", "img/" + nextIdx + ".jpg");
            img.load(function() {
                img.fadeIn();
            })
        })
    }, 6000);

})