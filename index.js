const btnadd = document.getElementById('add');
const btnsub = document.getElementById('sub');

let output = document.getElementById('output')




btnadd.addEventListener('click', function() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = parseInt(num1) + parseInt(num2)
    output.innerHTML = num3
})

btnsub.addEventListener('click', function() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = parseInt(num1) - parseInt(num2); // Subtract num2 from num1
    output.innerHTML = num3;
});