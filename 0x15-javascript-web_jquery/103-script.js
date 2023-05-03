$(document).ready(function() {
  $('INPUT#btn_translate, INPUT#language_code').on("click keypress", function(event) {
    if (event.type === "click" || (event.type === "keypress" && event.which === 13)) {
      const langCode = $('INPUT#language_code').val();
      $.getJSON(`https://fourtonfish.com/hellosalut/?lang=${langCode}`, function(data) {
        $('DIV#hello').text(data.hello);
      });
    }
  });
});

