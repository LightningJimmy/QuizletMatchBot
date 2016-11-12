$("button.UIButton.UIButton--hero").trigger("click");
var terms = $("a.cell[data-type=term]"), definitions = $("a.cell[data-type=definition]");
setInterval(function() {
  for (var b = 0;b < terms.length;b++) {
    toEng($(terms[b]).children().children().html()).trigger("click"), $(terms[b]).trigger("click");
  }
}, 1);
function toEng(b) {
  console.log("word: " + b);
  for (var c, a = 0;a < terms.length;a++) {
    $(terms[a]).children().children().html() == b && (c = $(terms[a]).attr("data-id"));
  }
  for (a = 0;a < definitions.length;a++) {
    if ($(definitions[a]).attr("data-id") == c) {
      return $(definitions[a]);
    }
  }
};
