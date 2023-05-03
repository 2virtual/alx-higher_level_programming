$.ajax({
  type: 'GET',
  url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
  success: function (data) {
    $.each(data['results'], function (k, v) {
      let title = v['title'];
      $('#list_movies').append(`<li>${title}</li>`);
    });
  },
  dataType: 'json'
});
