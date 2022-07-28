var launch = new Date("november 7, 2022 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var diff = launch - now ;

    var days = Math.floor(diff / (1000* 60*60*24));
    
    var hours = Math.floor((diff % (1000* 60*60*24)) / (1000* 60*60));
    
    var minutes = Math.floor((diff % (1000* 60*60)) / (1000* 60));
    
    var seconds = Math.floor((diff % (1000* 60)) / 1000);

    document.getElementById("countdown").innerHTML = "&nbsp "+ days + "&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp" + hours + " &nbsp;&nbsp;:&nbsp;&nbsp;  " + minutes + " &nbsp;:&nbsp;&nbsp" + seconds 
}, 1000)

var limit_date = new Date("august 15, 2022 00:00:00").getTime();

var y = setInterval(function(){
    var now = new Date().getTime();
    var diff = limit_date - now ;

    var days = Math.floor(diff / (1000* 60*60*24));
    
    var hours = Math.floor((diff % (1000* 60*60*24)) / (1000* 60*60));
    
    var minutes = Math.floor((diff % (1000* 60*60)) / (1000* 60));
    
    var seconds = Math.floor((diff % (1000* 60)) / 1000);

    document.getElementById("limit_date").innerHTML = "&nbsp "+ days + "&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp" + hours + " &nbsp;&nbsp;:&nbsp;&nbsp;  " + minutes + " &nbsp;:&nbsp;&nbsp" + seconds 
}, 1000)