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

function renderArticles() {
$("#search-div").empty();

var results = response.docs

for (var i; i < results.legth; i++)

var article = $("<div>")

      // Constructing HTML containing articles with the search information requested 
      var headline = $("<h1>").text(results[i].headline);
      var articleURL = $("<a>").attr("href", results[i].web_url).append(//"search information");
      var snippet = $("<h2>").text(results[i].snippet);
      var published = $("<h2>").text(results[i].pub_date);
   
      // Empty the contents of the search-div, append the new articles
      $("#search-div").empty();
      $("#search-div").append(headline, published, snippet, articleURL);
}
}
//probably need to change this and add in a loop to get all the articles on the page 