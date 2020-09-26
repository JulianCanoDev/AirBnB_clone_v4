$(document).ready(function () {
    $('input[type=checkbox]').click(function () {
      const myListName = [];
      const myId = [];
      $('input[type=checkbox]:checked').each(function () {
        myListName.push($(this).attr('data-name'));
        myId.push($(this).attr('data-id'));
      });
      if (myListName.length === 0) {
        $('.amenities h4').html('&nbsp;');
      } else {
        $('.amenities h4').text(myListName.join(', '));
      }
      console.log(myId);
    });
});

$.ajax ({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    datatype: 'json',

    success: function(json) {
        $('#api-status').addClass('available');
    },

    error: function(xhr, status) {
        console.log('error ' + status);
    }
});

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  type: 'POST',
  data: '{}',
  dataType: 'json',
  contentType: 'application/json',
  success: function (data) {
    console.log(data);
    for (let obj of data) {
      $('.places').append('<article><div class="title"><h2>' + obj['name'] + '</h2> <div class="price_by_night">' + obj['price_by_night'] + '</div></div> <div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria hidden="true"></i><br />' + obj['max_guest'] + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria hidden="true"></i><br />' + obj['number_rooms'] + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + obj['number_bathrooms'] + ' Bathroom</div></div><div class="description"><br />' + obj['description'] + '</div></article>');
    }
  },
  error: function (e) {
    console.log('Failed response');
  }
});
