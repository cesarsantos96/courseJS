function obtermedia() {

    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    var media = (a + b + c) / 3;

    document.getElement("resultado").innerHTML = "Resultado: " + media;

    console.log(a + b + c);

}