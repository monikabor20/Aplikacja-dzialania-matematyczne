function dzialania() {
    const wartoscZPierwszegoOkna = document.getElementById("inputOne").value;
    const wartoscZDrugiegoOkna = document.getElementById("inputTwo").value;

    const dodawanie = +wartoscZPierwszegoOkna + +wartoscZDrugiegoOkna;
    const odejmowanie = wartoscZPierwszegoOkna - wartoscZDrugiegoOkna;
    const mnozenie = wartoscZPierwszegoOkna * wartoscZDrugiegoOkna;
    const dzielenie = wartoscZPierwszegoOkna / wartoscZDrugiegoOkna;

    const wynikDodawania = document.getElementById("wynikDodawania").innerHTML = dodawanie;
    const wynikOdejmowania = document.getElementById("wynikOdejmowania").innerHTML = odejmowanie;
    const wynikMnozenia = document.getElementById("wynikMnozenia").innerHTML = mnozenie;
    const wynikDzielenia = document.getElementById("wynikDzielenia").innerHTML = dzielenie;
}

function clr() {
     
     document.getElementById("inputOne").value = null;
    document.getElementById("inputTwo").value = null;
}
