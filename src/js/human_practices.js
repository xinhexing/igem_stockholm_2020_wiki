import "../css/human_practices.scss";
import "./main";

var $ = require("jquery");
window.jQuery = $;
window.$ = $;

$(".building").click(function () {
  $(".building").not(this).removeClass("selected");
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    $(this).addClass("selected");
  }
});

$(".building").click(function() {
  $(".building").not(this).parent().children(".info").slideUp();
  $(this).parent().children(".info").slideToggle();
});
