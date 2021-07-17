// Computes interest from investment
function compute() {
    var principal = parseInt(document.getElementById('principal').value);
    
    // Computation guarded by form validation
    if (principal > 0) {
        var rate = parseFloat(document.getElementById('rate').value);
        var years = parseInt(document.getElementById('years').value);
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + years;

        document.getElementById('result').innerHTML='If you deposit <mark>' + principal + '</mark>,\<br\>at an interest rate of <mark>' + rate + '%</mark>\<br\>You will receive an amount of <mark>' + parseFloat(interest).toLocaleString() + '</mark>,\<br\>in the year <mark>' + year + '</mark>\<br\>';
    } else {
        alert('Enter a positive number');
        document.getElementById('principal').focus();
    }
}

// Links the slider and stated interest rate together properly
function updateRate() {
    var rateVal = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rateVal;
}