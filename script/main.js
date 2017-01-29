(function implemetGitHubPage() {

  // Genetare and set avatar for personal IP
  (function setAvatar() {
    $('.avatar').attr('src', 'https://robohash.org/' + userIp + '.png');
    $('.content-avatar').attr('src', 'https://robohash.org/' + userIp + '.png');
  })();

  // Set user IP in name field in menu
  (function setUserNameForMenu() {
    $('.menu-user-name').text(userIp);
  })();

  // Change main-logo when user hover it
  (function changeLogo() {
    $('.logo').hover(function() {
        $(this).attr("src", "img/github-mark-blue.png");
      }, function(){
        $(this).attr("src", "img/github-mark.png");
      }
    );
  })();

  // Change footer-logo when user hover it
  (function changeFooterLogo() {
    $('.footer-logo-picture').hover(function() {
        $(this).attr("src", "img/github-mark-grey.png");
      }, function(){
        $(this).attr("src", "img/github-mark-dark-grey.png");
      }
    );
  })();
  
  // Set blue color to active list item 
  (function setActiveItem() {
    $('.dropdown-menu li').hover(function () {
      $(this).toggleClass('active');
    });
  })();

  // Redirect user on tru github search page after form submit 
  (function implementSearching() {
    $('.search-field').submit( function(event) {
      event.preventDefault();
      var searchInfo = $('.search-input').val();
      window.location.href = ("https://github.com/search?utf8=✓&q=" + searchInfo + "&type=Repositories&ref=searchresults");
    });
  })();

  // Creates and set random date to forked panel
  (function setRandomDate() {
    var datesList = [];
    for (var i = 0; i < 4; i++) {
      var date = randomDate( new Date(2016 - i, 0, 1), new Date(2017 - i, 0, 1) );
      date = moment(date).format('Do MMM YYYY');
      // Set date to panel
      var cuttentDateElement = $('.forked-date')[i];
      $(cuttentDateElement).text(date);
    }
    // Creates random date beetwen two dates
    function randomDate(start, end) {
      return new Date( start.getTime() + Math.random() * (end.getTime() - start.getTime()) );
    }
  })();

  // Set amount of contribute and total repositories
  (function setRepoAndContributeAmount() {
    var contributeItemAmount = $('.panel-item-contr');
    var repoItemAmount = $('.panel-item-repo');
    var contributeAmount = contributeItemAmount.length;
    var repositoriesAmount = repoItemAmount.length;
    $('.contribute-amount').text(contributeAmount);
    $('.repo-amount').text(repositoriesAmount);
  })();



  (function setFunctionsOnTheButtons() {
    var switchDahboardContent = $('.dropdown-menu-header.clearfix .close-news'),
        dashboardCloseButton = $('.icon-button-dashboard-wrapper .close-news'),
        newsInformationClose = $('.no-gutter .close-news'),
        repositoriesNavigationButtons = $('.repository-button');
    
    $(switchDahboardContent).on('click', function () {
      // setRandomDate();
      alert('Switch dashboard content');
    });

    $(dashboardCloseButton).on('click', function () {
      $('.dashboard').css('display', 'none');
    });

    $(newsInformationClose).on('click', function () {
      $('.news-content').css('display', 'none');
    });

    $(repositoriesNavigationButtons).each(function () {
      var repositoriesItem = $('.repositories-item');
      $(this).on('click', function () {
          $(repositoriesItem).each(function () {
            $(this).css('display', 'block');
          });
        $(repositoriesNavigationButtons).each(function () {
          $(this).removeClass('check-button');
          $(this).css('pointer-events', 'auto');
        });
        $(this).css('pointer-events', 'none');
        $(this).addClass('check-button');
        var repoNumber = repositoriesItem.index(this);
        // debugger
        // todo  !!!!!!!!!!!!!!!!!!!!!!!!!
        $(repositoriesItem[repoNumber]).css('display', 'none');
      });
    });

  })();
    
    

    // (function setCheckedSymbol() {
    //   var checkedSymbols = $('.check-item');
    //   $(checkedSymbols).each(function () {
    //   debugger
    //     $(this).on('click', function () {
    //       $($(this) > '.check-sumbol').toggleClass('.hidden-symbol');
    //     }); 
    //   });
    // })();
      
    // todo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



})();