
const key = keyHolder.NYT_KEY;
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
let queryString = '';
let startYear = 0;
let endYear = 0;
let numberOfArticles = 10;

const clearForm = () => {
  $("#searchTerm").val('');
  $("#selectNumber").val('');
  $("#startYear").val('');
  $("#endYear").val('');
  queryString = '';
  startYear = 0;
  endYear = 0;
  numberOfArticles = 10;
  url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
}

const formatYear = (year) => {
  year === moment().format('YYYY')
    ? year = moment().format('YYYYMMDD')
    : year === $("#end-year").val()
      ? year = `${year}1231`
      : year = `${year}0101`
  return year;
}

const appendTitle = (article) => {
  let headline = '';
  if (article.document_type === 'article'){
    if (article.headline.print_headline !== ''){
      headline = article.headline.print_headline;
    } else {
      headline = article.headline.main;
    }
  } else {
    headline = article.headline.main;
  }
  $(".article-list").append(`<div class='well'><h4><a href=${article.web_url}>${headline}</a></h4><p class='caps'>${article.byline.original}</p></div>`);
}

$("#clearResults").on("click", (e) => {
    e.preventDefault();
    clearForm();
  })
  
  $("#searchButton").on("click", (e) => {
    e.preventDefault();
    $(".articleList").empty();
  
    queryString = $("#searchTerm").val();
        var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + searchTerm + "&facet_field=day_of_week&begin_date=" + StartDate + "&end_date=" + EndDate + "&api-key=ce7b9c363002463cb0f66eff0dfe284f";
    
        $.ajax({
            queryURL,
            method: "GET",
          }).done((results) => {
            numberOfArticles = $("#selectNumber").val();
            for (let i = 0; i < numberOfArticles; i++) {
              appendTitle(results.response.docs[i]);
            }
          })      
        
        })