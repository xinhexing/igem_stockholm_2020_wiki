import "../css/human_practices.scss";
import "./main";

var $ = require("jquery");
window.jQuery = $;
window.$ = $;

$(".building").click(function () {
  if ($(".building").hasClass("selected")) {
    $(".building").removeClass("selected");
  } else {
    $(".building").addClass("selected");
  }
});

/*
$(".card").click(function() {
    $(".card").not(this).children(".info").slideUp();
    $(".info", this).slideToggle();
});
*/