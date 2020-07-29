function showNav(){
    $("#nav").show();
}

function hideNav(){
    $("#nav").hide();
}

$("#btn").on("click",showNav);
$("#xx").on("click", hideNav);
