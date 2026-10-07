function sum(){
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var num3=parseInt(document.getElementById("n3").value);
    var add=num1+num2+num3;
    document.write("Sum of "+num1+","+num2+" and "+num3+": "+add);
}