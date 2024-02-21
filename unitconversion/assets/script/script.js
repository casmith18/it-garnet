function calculate() {
    "use strict";

    var form = $( "#myform" );
    
    if (form.valid()) {
        
        var FromValue = document.getElementById("FromValue").value;

        var FromUnit;
        if (document.getElementById("FromUnitcm").checked) {
            FromUnit = document.getElementById("FromUnitcm").value;
        }
        if (document.getElementById("FromUnitm").checked) {
            FromUnit = document.getElementById("FromUnitm").value;
        }
        if (document.getElementById("FromUnitkm").checked) {
            FromUnit = document.getElementById("FromUnitkm").value;
        }
        if (document.getElementById("FromUnitin").checked) {
            FromUnit = document.getElementById("FromUnitin").value;
        }
        if (document.getElementById("FromUnitft").checked) {
            FromUnit = document.getElementById("FromUnitft").value;
        }
        if (document.getElementById("FromUnityd").checked) {
            FromUnit = document.getElementById("FromUnityd").value;
        }
        if (document.getElementById("FromUnitmi").checked) {
            FromUnit = document.getElementById("FromUnitmi").value;
        }
        
        var ToUnit;
        if (document.getElementById("ToUnitcm").checked) {
            ToUnit = document.getElementById("ToUnitcm").value;
        }
        if (document.getElementById("ToUnitm").checked) {
            ToUnit = document.getElementById("ToUnitm").value;
        }
        if (document.getElementById("ToUnitkm").checked) {
            ToUnit = document.getElementById("ToUnitkm").value;
        }
        if (document.getElementById("ToUnitin").checked) {
            ToUnit = document.getElementById("ToUnitin").value;
        }
        if (document.getElementById("ToUnitft").checked) {
            ToUnit = document.getElementById("ToUnitft").value;
        }
        if (document.getElementById("ToUnityd").checked) {
            ToUnit = document.getElementById("ToUnityd").value;
        }
        if (document.getElementById("ToUnitmi").checked) {
            ToUnit = document.getElementById("ToUnitmi").value;
        }

        CalculateResult(FromValue, FromUnit, ToUnit);
    }
}

async function CalculateResult(FromValue, FromUnit, ToUnit) {
        
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("FromUnitcm").checked = false;
    document.getElementById("FromUnitm").checked = false;
    document.getElementById("FromUnitkm").checked = false;
    document.getElementById("FromUnitin").checked = false;
    document.getElementById("FromUnitft").checked = false;
    document.getElementById("FromUnityd").checked = false;
    document.getElementById("FromUnitmi").checked = false;
    document.getElementById("ToUnitcm").checked = false;
    document.getElementById("ToUnitm").checked = false;
    document.getElementById("ToUnitkm").checked = false;
    document.getElementById("ToUnitin").checked = false;
    document.getElementById("ToUnitft").checked = false;
    document.getElementById("ToUnityd").checked = false;
    document.getElementById("ToUnitmi").checked = false;
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("ToUnitMsg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});