function attachEventsListeners() {
    let button = document.getElementById("convert");
    button.addEventListener("click", convert);//document.getElementById('convert').addEventListener('click', convert);

    function convert() {
        let input = Number(document.getElementById("inputDistance").value);
        let output = document.getElementById("outputDistance");
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        let inputToM = 0;
        let result = 0;
        switch (inputUnits) {
            case "km": inputToM = input * 1000; break;
            case "m": inputToM = input; break;//  case "m": inputToM = input*1; break;
            case "cm": inputToM = input * 0.01; break;
            case "mm": inputToM = input * 0.001; break;
            case "mi": inputToM = input * 1609.34; break;
            case "yrd": inputToM = input * 0.9144; break;
            case "ft": inputToM = input * 0.3048; break;
            case "in": inputToM = input * 0.0254; break;
        }
        switch (outputUnits) {
            case "km": result = inputToM / 1000; break;
            case "m": result = inputToM; break;//   case "m": result = inputToM/1; break;
            case "cm": result = inputToM / 0.01; break;
            case "mm": result = inputToM / 0.001; break;
            case "mi": result = inputToM / 1609.34; break;
            case "yrd": result = inputToM / 0.9144; break;
            case "ft": result = inputToM / 0.3048; break;
            case "in": result = inputToM / 0.0254; break;
        }
        output.value = result;
    }
}