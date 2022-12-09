// definimos variables
var nativePicker = document.querySelector(".nativeDatePicker");
var fallbackPicker = document.querySelector(".fallbackDatePicker");
var fallbackLabel = document.querySelector(".fallbackLabel");

var yearSelect = document.querySelector("#year");
var monthSelect = document.querySelector("#month");
var daySelect = document.querySelector("#day");

// Ocultamos el select inicialmente
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// testeamos si la nueva entrada es de tipo fecha o texto
var test = document.createElement("input");

try {
    test.type = "date";
} catch (e) {
    console.log(e.description);
}

// si lo es, se ejecuta el código dentro del bloque if() {}
if (test.type === "text") {
    // oculta el nativo y muestra el fallback
    nativePicker.style.display = "none";
    fallbackPicker.style.display = "block";
    fallbackLabel.style.display = "block";

    // introduce los datos de los días y los años dinámicamente
    // (Los meses son siempre los mismos)
    populateDays(monthSelect.value);
    populateYears();
}

function populateDays(month) {
    // borra la actual muestra de elementos <option> que quedan fuera
    // del <select> para el día, listo para que los siguentes días sean inyectados
    while (daySelect.firstChild) {
        daySelect.removeChild(daySelect.firstChild);
    }

    // Crea una variable que guarda el nuevo número de días a ser inyectados.
    var dayNum;

    // ¿Son 31 o 30 días?
    if (
        (month === "January") |
        (month === "March") |
        (month === "May") |
        (month === "July") |
        (month === "August") |
        (month === "October") |
        (month === "December")
    ) {
        dayNum = 31;
    } else if (
        (month === "April") |
        (month === "June") |
        (month === "September") |
        (month === "November")
    ) {
        dayNum = 30;
    } else {
        // Si el mes es febrero, calcula si el año es bisiesto o no.
        var year = yearSelect.value;
        var isLeap = new Date(year, 1, 29).getMonth() == 1;
        isLeap ? (dayNum = 29) : (dayNum = 28);
    }

    // Inyecta el número adecuado de nuevos elementos <option> dentro del <select> para los días
    for (i = 1; i <= dayNum; i++) {
        var option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Si el día previo ya ha sido establecido, establece el valor de daySelect
    // a ese día, para evitar saltar a uno cuando
    // el año cambie
    if (previousDay) {
        daySelect.value = previousDay;

        // Si el día anterior fue establecido en un número alto, digamos 31, y luego
        // y elegimos un mes con menos días (por ejemplo febrero),
        // esta parte del código se asegura de que el día con el valor más grande sea seleccionado
        // en vez de  mostrat un daySelect en blanco.
        if (daySelect.value === "") {
            daySelect.value = previousDay - 1;
        }

        if (daySelect.value === "") {
            daySelect.value = previousDay - 2;
        }

        if (daySelect.value === "") {
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears() {
    // tomar este año como un número
    var date = new Date();
    var year = date.getFullYear();

    // Hacer que este año y los cien años anteriores estén en el <select>
    for (var i = 0; i <= 100; i++) {
        var option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

// cuando los valores del los elementos <select> del año o el mes son cambiados, vuelve a correr populateDays()
// en el caso de que el cambio afecte al número de días disponible
yearSelect.onchange = function () {
    populateDays(monthSelect.value);
};

monthSelect.onchange = function () {
    populateDays(monthSelect.value);
};

//preserva el día seleccionado
var previousDay;

// actualiza que día ha sido establecido anteriormente
// fíjate en el final de populateDays() para entender el uso
daySelect.onchange = function () {
    previousDay = daySelect.value;
};
