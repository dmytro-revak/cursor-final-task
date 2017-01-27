(function implemetGitHubPage() {
  // Change logo when user hover it
  $('.logo').hover(function() {
      $(this).attr("src", "img/github-mark-blue.png");
    }, function(){
      $(this).attr("src", "img/github-mark.png");
    }
  );

  // Redirect user on tru github search page after form submit 
  $('.search-field').submit( function(event) {
    event.preventDefault();
    var searchInfo = $('.search-input').val();
    searchInfo = searchInfo.replace(" ", "+");
    window.location.replace("https://github.com/search?utf8=✓&q=" + searchInfo + "&type=Repositories&ref=searchresults");
  });



})();