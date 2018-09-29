$("#clearResults").on("click", (){
    e.preventDefault();
    clearForm();
  })
  
  $("#searchButton").on("click", (){
    preventDefault();
    $(".article-list").empty();

  })

    function searchTerm(response){
        var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=ce7b9c363002463cb0f66eff0dfe284f";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response){
        var result = response.data;
        
        for(var i =0; i < results.length; i++) {
            
        }
        
        })
    }

