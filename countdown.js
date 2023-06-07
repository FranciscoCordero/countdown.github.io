var launch = new Date("june 12, 2023 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var diff = launch - now ;

    var days = Math.floor(diff / (1000* 60*60*24));

    var hours = Math.floor((diff % (1000* 60*60*24)) / (1000* 60*60));

    var minutes = Math.floor((diff % (1000* 60*60)) / (1000* 60));

    var seconds = Math.floor((diff % (1000* 60)) / 1000);

    document.getElementById("launch-dd").innerHTML = days
    document.getElementById("launch-hh").innerHTML = hours
    document.getElementById("launch-mm").innerHTML = minutes
    document.getElementById("launch-ss").innerHTML = seconds
}, 1000)

var limit_date = new Date("june 19, 2023 00:00:00").getTime();

var y = setInterval(function(){
    var now = new Date().getTime();
    var diff = limit_date - now ;

    var days = Math.floor(diff / (1000* 60*60*24));

    var hours = Math.floor((diff % (1000* 60*60*24)) / (1000* 60*60));

    var minutes = Math.floor((diff % (1000* 60*60)) / (1000* 60));

    var seconds = Math.floor((diff % (1000* 60)) / 1000);

    document.getElementById("deploy-dd").innerHTML = days
    document.getElementById("deploy-hh").innerHTML = hours
    document.getElementById("deploy-mm").innerHTML = minutes
    document.getElementById("deploy-ss").innerHTML = seconds
}, 1000)
