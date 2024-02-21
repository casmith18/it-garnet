function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var operand1 = document.getElementById("FromValue").value;

        // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var operator;
        if (document.getElementById("CmOperator1").checked) {
            operator = document.getElementById("CmOperator1").value;
        }
        if (document.getElementById("MtOperator1").checked) {
            operator = document.getElementById("MtOperator1").value;
        }
        if (document.getElementById("KlOperator1").checked) {
            operator = document.getElementById("KlOperator1").value;
        }
        if (document.getElementById("InOperator1").checked) {
            operator = document.getElementById("InOperator1").value;
        }
        if (document.getElementById("FtOperator1").checked) {
            operator = document.getElementById("FtOperator1").value;
        }
        if (document.getElementById("YdOperator1").checked) {
            operator = document.getElementById("YdOperator1").value;
        }
        if (document.getElementById("MlOperator1").checked) {
            operator = document.getElementById("MlOperator1").value;
        }
        
        // Operand 2
        var operator2;
        if (document.getElementById("CmOperator2").checked) {
            operator2 = document.getElementById("CmOperator2").value;
        }
        if (document.getElementById("MtOperator2").checked) {
            operator2 = document.getElementById("MtOperator2").value;
        }
        if (document.getElementById("KlOperator2").checked) {
            operator2 = document.getElementById("KlOperator2").value;
        }
        if (document.getElementById("InOperator2").checked) {
            operator2 = document.getElementById("InOperator2").value;
        }
        if (document.getElementById("FtOperator2").checked) {
            operator2 = document.getElementById("FtOperator2").value;
        }
        if (document.getElementById("YdOperator2").checked) {
            operator2 = document.getElementById("YdOperator2").value;
        }
        if (document.getElementById("MlOperator2").checked) {
            operator2 = document.getElementById("MlOperator2").value;
        }

        CalculateResult(operand1, operator, operator2);
    }
}

async function CalculateResult(operand1, operator, operator2) {
        
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?operand1=" + encodeURIComponent(operand1) + "&operator=" + encodeURIComponent(operator) + "&operator2=" + encodeURIComponent(operator2);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("operator2").value = "";
    document.getElementById("Operand2Msg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});