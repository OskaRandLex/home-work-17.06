const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const divEl = document.getElementById('TextDiv');

input1.addEventListener('keyup', joinValues, false);
input2.addEventListener('keyup', joinValues, false);
input3.addEventListener('keyup', joinValues, false);

function joinValues(){
    let a = input1.value;
    let b = input2.value;
    let c = input3.value;
    divEl.innerText = `${b} ${a[0]}. ${c[0]}.`;
}