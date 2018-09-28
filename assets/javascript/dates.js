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


      // Constructing HTML containing articles with the search information requested 
      var headline = $("<h1>").text(response.docs.headline);
      var articleURL = $("<a>").attr("href", response.docs.web_url).append(//"search information");
      var snippet = $("<h2>").text(response.docs.snippet);
      var published = $("<h2>").text(response.docs.pub_date);
   
      // Empty the contents of the search-div, append the new articles
      $("#search-div").empty();
      $("#search-div").append(headline, published, snippet, articleURL);


//probably need to change this and add in a loop to get all the articles on the page 