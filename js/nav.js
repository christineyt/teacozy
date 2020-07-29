function showNav(){
    $("#nav").show();
}

function hideNav(){
    $("#nav").hide();
}

$("#btn").on("click",showNav);
$("#nav").on("click", hideNav);
