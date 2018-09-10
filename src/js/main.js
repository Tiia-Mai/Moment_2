"use strict";

$(document).ready(function(){
    $("h1").hover(function(){
        $(this).css("color", "black");
        }, function(){
        $(this).css("color", "pink");
    });
});