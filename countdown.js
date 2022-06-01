var launch = new Date("oct 1, 2022 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var diff = launch - now ;

    var days = Math.floor(diff / (1000* 60*60*24));
    console.log(days)
    
    var hours = Math.floor((diff % (1000* 60*60*24)) / (1000* 60*60));
    console.log(hours)
    
    var minutes = Math.floor((diff % (1000* 60*60)) / (1000* 60));
    console.log(minutes)
    
    var seconds = Math.floor((diff % (1000* 60)) / 1000);
    console.log(seconds)

    document.getElementById("countdown").innerHTML = "&nbsp "+ days + "&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp" + hours + " &nbsp;&nbsp;:&nbsp;&nbsp;  " + minutes + " &nbsp;:&nbsp;&nbsp" + seconds 
}, 1000)