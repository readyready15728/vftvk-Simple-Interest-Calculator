function compute() {
    var principal = parseInt(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var years = parseInt(document.getElementById('years').value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + years;

    console.log(principal);
    console.log(rate);
    console.log(years);
    console.log(amount);
    console.log(year);

    document.getElementById('result').innerHTML='If you deposit ' + principal + ',\<br\>at an interest rate of ' + rate + '%\<br\>You will receive an amount of ' + parseFloat(interest).toLocaleString() + ',\<br\>in the year ' + year + '\<br\>';
}

function updateRate() {
    var rateVal = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rateVal;
}