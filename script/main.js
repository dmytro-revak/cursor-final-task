(function implemetGitHubPage() {

  // Genetare and set avatar for personal IP
  (function setAvatar() {
    $('.avatar').attr('src', 'https://robohash.org/' + userIp + '.png');
  })();

  // Set user IP in name field in menu
  (function setUserNameForMenu() {
    $('.menu-user-name').text(userIp);
  })();

  // Change logo when user hover it
  (function changeLogo() {
    $('.logo').hover(function() {
        $(this).attr("src", "img/github-mark-blue.png");
      }, function(){
        $(this).attr("src", "img/github-mark.png");
      }
    );
  })();

  // Redirect user on tru github search page after form submit 
  (function implementSearching() {
    $('.search-field').submit( function(event) {
      event.preventDefault();
      var searchInfo = $('.search-input').val();
      window.location.href = ("https://github.com/search?utf8=✓&q=" + searchInfo + "&type=Repositories&ref=searchresults");
    });
  })();




})();