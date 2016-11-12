# Quizlet Micromatch Bot
Bot for the new version of Quizlet Microscatter, Micromatch!
<hr></hr>
<h3>How to run:</h3>
<p>Go to the Quizlet set you wish to use the bot on, and make the window smaller so the Gravity Icon disappears. Then press Match. The link at the top of the page should end with "micromatch"</p>
<p>Copy all of this code:</p>
<pre><code>$("button.UIButton.UIButton--hero").trigger("click");
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
</code></pre>
<p>Go to inspect element(F12 or Ctrl+Shift+I on Google Chrome) then Console. Paste all the code into the console and press enter.</p>
