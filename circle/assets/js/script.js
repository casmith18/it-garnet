$(document).ready(function(){
    $("#btnCalculate").click(function(){
        if($("#CircleForm").valid()){
            var radius = parseFloat($("#radius").val());
            var diameter = calcDiameter(radius);
            var circumference = calcCircumference(radius);
            var area = calcArea(radius);

            $("#diameter").text(diameter.toFixed(2));
            $("#circumference").text(circumference.toFixed(2));
            $("#area").text(area.toFixed(2));
        }
    });

    $("#btnClear").click(function(){
        clearForm();
    });
});

function calcDiameter(radius){
    return 2 * radius;
}

function calcCircumference(radius){
    return 2 * Math.PI * radius;
}

function calcArea(radius){
    return Math.PI * radius * radius;
}

function clearForm(){
    $("#radius").val('');
    $("#diameter").text('');
    $("#circumference").text('');
    $("#area").text('');
}