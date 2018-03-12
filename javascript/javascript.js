function dzialania() {
    var wartoscZPierwszegoOkna = document.getElementById("inputOne").value;
    var wartoscZDrugiegoOkna = document.getElementById("inputTwo").value;

    var dodawanie = +wartoscZPierwszegoOkna + +wartoscZDrugiegoOkna;
    var odejmowanie = wartoscZPierwszegoOkna - wartoscZDrugiegoOkna;
    var mnozenie = wartoscZPierwszegoOkna * wartoscZDrugiegoOkna;
    var dzielenie = wartoscZPierwszegoOkna / wartoscZDrugiegoOkna;

    var wynikDodawania = document.getElementById("wynikDodawania").innerHTML = dodawanie;
    var wynikOdejmowania = document.getElementById("wynikOdejmowania").innerHTML = odejmowanie;
    var wynikMnozenia = document.getElementById("wynikMnozenia").innerHTML = mnozenie;
    var wynikDzielenia = document.getElementById("wynikDzielenia").innerHTML = dzielenie;
}
