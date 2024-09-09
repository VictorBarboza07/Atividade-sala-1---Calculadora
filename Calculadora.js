function insert(num) {
    document.getElementById("display").value += num;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    var display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0, display.length - 1);
}

function calculate() {
    var display = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(display);
    } catch (e) {
        document.getElementById("display").value = "Erro";
    }
}