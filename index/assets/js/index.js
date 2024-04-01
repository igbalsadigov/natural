function fibonacci(n) {
    if (n <= 0) {
        alert ("bir natural eded daxil edin.");
    } else if (n === 1 || n === 2) {
    alert (1);
    }
     else {
        var a = 0;
        var b = 1;
        var temp;
        for (var i = 2; i < n; i++) {
            temp = b;
            b = a + b;
            a = temp;
            alert (b);
        }
    }

}

var N = parseInt(prompt("Bir natural eded yaz:"));


console.log(N + "n'inci Fibonacci ededi: " + fibonacci(N));






function welcomeMessageAndBackground() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let message = "";
    let backgroundColor = "";

    if (currentHour >= 6 && currentHour < 12) {
        message = "GÜNORTANIZ XEYİR";
        backgroundColor = "orange";
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "SABAHINIZ XEYIR";
        backgroundColor = "yellow";
    } else if (currentHour >= 18 && currentHour < 22) {
        message = "AXSAMINIZ XEYIR XEYİR";
        backgroundColor = "blue";
    } else {
        message = "GECƏNİZ XEYİR";
        backgroundColor = "black";
    }

    alert(message);

    document.body.style.backgroundColor = backgroundColor;
}

window.onload = welcomeMessageAndBackground;




function naturalEdedler (A) {
    var naturalEdedler = [];
    for (var i = 1; i <= 1000; i++) {
        if (i % A === 0) {
            naturalEdedler.push(i);
        }
    }
    return naturalEdedler;
}

var A = parseInt(prompt("reqem yazin:"));

var result = naturalEdedler(A);
if (result.length > 0) {
    console.log(A + "'A' bolunen tm eded yazin: " + result.join(", "));
} else {
    console.log("1'den 1000'e qeder " + A + "'a tam bölünen reqem .");
}
