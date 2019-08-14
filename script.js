function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateForm(e) {

    e.preventDefault();


    // Tarkista salasana    
    var x = document.forms['lomake']['salasana'].value;
    if (x.length < 6) {
        document.getElementById('salasana_err').innerHTML = 'Salasanan tulee olla vähintään 6 merkkiä pitkä!';
    } else {
        document.getElementById('salasana_err').innerHTML = '';
    }
    // Tarkista nimi
    x = document.forms["lomake"]["nimi"].value;
    if (x.length < 4) {
        document.getElementById("nimi_err").innerHTML = "Nimi on liian lyhyt!";
    } else {
        document.getElementById("nimi_err").innerHTML = "";
    }
    // Tarkista osoite
    x = document.forms["lomake"]["osoite"].value;
    if (x.length < 5) {
        document.getElementById("osoite_err").innerHTML = "Osoite on liian lyhyt!";
    } else {
        document.getElementById("osoite_err").innerHTML = "";
    }
    // Tarkista id
    x = document.forms["lomake"]["id"].value;
    if (x.length < 6) {
        document.getElementById("id_err").innerHTML = "ID tulee olla vähintään 6 merkkiä pitkä!";
    } else {
        document.getElementById("id_err").innerHTML = "";
    }

    // Tarkista postinumero
    x = document.forms["lomake"]["postinumero"].value;
    if (!isNaN(x) && x.length == 5) {
        document.getElementById("postinumero_err").innerHTML = "";
    } else {
        document.getElementById("postinumero_err").innerHTML = "Postinumero on viallinen";
    } 

    // Tarkista sähköposti
    x = document.forms["lomake"]["email"].value;
    if (!validateEmail(x)) {
        document.getElementById("email_err").innerHTML = "Email on viallinen";
    } else {
        document.getElementById("email_err").innerHTML = "";
    }

    // Tarkista sukupuoli
    x = document.forms["lomake"]["sukupuoli"].value;
    if (x != "on") {
        document.getElementById("sukupuoli_err").innerHTML = "Yksi vaihtoehto on valittava!";
    } else {
        document.getElementById("sukupuoli_err").innerHTML = "";
    }

    // Tarkista kieli
    x = document.forms["lomake"]["kieli"].value;
    if (x != "on") {
        document.getElementById("kieli_err").innerHTML = "Yksi vaihtoehto on valittava!";
    } else {
        document.getElementById("kieli_err").innerHTML = "";
    }
}
