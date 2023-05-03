<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello Translation</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript">
      $(document).ready(function () {
        $('#btn_translate').click(function () {
          const langCode = $('#language_code').val();
          const url = 'https://fourtonfish.com/hellosalut/?lang=' + langCode;
          $.get(url, function (data) {
            $('#hello').html(data.hello);
          });
        });
      });
    </script>
  </head>
  <body>
    <label for="language_code">Enter language code:</label>
    <input type="text" id="language_code" name="language_code" />
    <input type="button" id="btn_translate" value="Translate" />
    <div id="hello"></div>
  </body>
</html>

