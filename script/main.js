(function implemetGitHubPage() {

  setAvatar();
  setUserNameForMenu();
  changeLogo();
  changeFooterLogo();
  setActiveItem();
  implementSearching();
  setRandomDate();
  setRepoAndContributeAmount();
  setFunctionsOnTheButtons();


  // Genetare and set avatar for personal IP
  function setAvatar() {
    $('.avatar').attr('src', 'https://robohash.org/' + userIp + '.png');
    $('.content-avatar').attr('src', 'https://robohash.org/' + userIp + '.png');
  }

  // Set user IP in name field in menu
  function setUserNameForMenu() {
    $('.menu-user-name').text(userIp);
  }

  // Change main-logo when user hover it
  function changeLogo() {
    $('.logo').hover(function() {
        $(this).attr("src", "img/github-mark-blue.png");
      }, function(){
        $(this).attr("src", "img/github-mark.png");
      }
    );
  }

  // Change footer-logo when user hover it
  function changeFooterLogo() {
    $('.footer-logo-picture').hover(function() {
        $(this).attr("src", "img/github-mark-grey.png");
      }, function(){
        $(this).attr("src", "img/github-mark-dark-grey.png");
      }
    );
  }
  
  // Set blue color to active list item 
  function setActiveItem() {
    $('.dropdown-menu li').hover(function () {
      $(this).toggleClass('active');
    });
  }

  // Redirect user on tru github search page after form submit 
  function implementSearching() {
    $('.search-field').submit( function(event) {
      event.preventDefault();
      var searchInfo = $('.search-input').val();
      window.location.href = ("https://github.com/search?utf8=✓&q=" + searchInfo + "&type=Repositories&ref=searchresults");
    });
  }

  // Creates and set random date to forked panel
  function setRandomDate() {
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
  }

  // Set amount of contribute and total repositories
  function setRepoAndContributeAmount() {
    var contributeItemAmount = $('.panel-item-contr');
    var repoItemAmount = $('.panel-item-repo');
    var contributeAmount = contributeItemAmount.length;
    var repositoriesAmount = repoItemAmount.length;
    $('.contribute-amount').text(contributeAmount);
    $('.repo-amount').text(repositoriesAmount);
  }

  // Set difference function for each button
  function setFunctionsOnTheButtons() {
    var switchDahboardContent = $('.dropdown-menu-header.clearfix .close-news'),
        dashboardCloseButton = $('.icon-button-dashboard-wrapper .close-news'),
        newsInformationClose = $('.no-gutter .close-news'),
        repositoriesNavigationButtons = $('.repository-button');
    
    // Change dashboard content and notice user about that
    $(switchDahboardContent).on('click', function () {
      setRandomDate();
      alert('Switch dashboard content');
    });

    // Remove dashboard from the page
    $(dashboardCloseButton).on('click', function () {
      $('.dashboard').css('display', 'none');
    });

    // Remove news panel from the page
    $(newsInformationClose).on('click', function () {
      $('.news-content').css('display', 'none');
    });

    // Change buttons on user repositories panel
    $(repositoriesNavigationButtons).each(function () {
      // Add onclick event for each button
      $(this).on('click', function () {
        // Reset previously checked styles 
        $(repositoriesNavigationButtons).each(function () {
          $(this).removeClass('check-button');
          $(this).css('pointer-events', 'auto');
        });
        // And checked styles for press button
        $(this).css('pointer-events', 'none');
        $(this).addClass('check-button');

        // Save current press button value and show repo to need
        var buttonName = $(this).text();
        removeAnchekedRepoItem(buttonName);
      });
    });

    // Checkes which button user have pressed and show repo to need
    function removeAnchekedRepoItem(buttonName) {
      // Get all panel item
      var repositoriesItem = $('.repositories-item');
      // Hide all of them
      $(repositoriesItem).each(function () {
        $(this).css('display', 'none');
      });
      $(repositoriesItem).each(function (indexOfElement, itemElement) {
        // Get each item parameters
        var currentItemParameters = $(this).attr('data-class');
        currentItemParameters = currentItemParameters.split(', ');
        // Do item visible when need button has pressed
        for (i = 0; i < currentItemParameters.length; i++) {
          if (buttonName === currentItemParameters[i]) {
            $(itemElement).css('display', 'block');
          }
        }
      });
    }
  }
})();
