var compteur =1;
(function () {
    var voy = function () {
        var lesvoy=["a","e","i","o","u","y"];
        var rdm = Math.floor(Math.random() * 6);
        var voyalea = lesvoy[rdm];
        return voyalea;
    }
    $("#voyelle").click(function () {

       var voyelle =voy();
       console.log(compteur);
        $("#l"+compteur).html(voyelle);
        if(compteur<=9){
            compteur++;
        }
        if(compteur == 10){
            document.getElementById("voyelle").setAttribute("disabled", "disabled");
            document.getElementById("consonne").setAttribute("disabled", "disabled");
        }

        $.ajax({
            method: "GET",
            url: "traitement.php",
            data: { "lettre": voyelle}
        })
            .done(function(e) {
                console.log("data " + e );
            });

    })




    var cons = function () {
        var lescons=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
        var rdm1 = Math.floor(Math.random() * 20);
        var consalea = lescons[rdm1];
        return consalea;
    }
    $("#consonne").click(function () {

        var consonne =cons();
        console.log(compteur);
        $("#l"+compteur).html(consonne);
        if(compteur<=9){
            compteur++;

        }


        if(compteur  == 10){
            document.getElementById("voyelle").setAttribute("disabled", "disabled");
            document.getElementById("consonne").setAttribute("disabled", "disabled");
        }


        $.ajax({
            method: "GET",
            url: "traitement.php",
            data: { "lettre": consonne}
        })
            .done(function(e) {
                console.log("data " + e );
            });



    })

    $("#btnreset").click(function () {
        window.location.reload();
    })

})();