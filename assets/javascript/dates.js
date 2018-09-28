var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "ce7b9c363002463cb0f66eff0dfe284f"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

var StartDate = 0;
var EndDate = 0;

StartDate = $('#startdate').val().trim();
EndDate = $('#enddate').val().trim();
