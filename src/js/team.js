import "../css/team.scss";
import "./main";

var $ = require("jquery");
window.jQuery = $;
window.$ = $;

$(".card").click(function() {
    $(".card").not(this).children(".info").slideUp();
    $(".info", this).slideToggle();
});