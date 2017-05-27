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
  setResizeForFooter();
  setPageName();
  fillActivityPanel();
  setHeightOfRepoPanelItem();
  setColorLanguageDescripionIcon();
  hoverChangeCommitsButtonLogo('open');


  // Generate and set avatar for personal IP
  function setAvatar() {
    var headerAvatar = $('.avatar'),
        dropdownButtonAvatar = $('.content-avatar'),
        userPageMainAvatar = $('.user-avatar-picture'),
        avatars = [headerAvatar, dropdownButtonAvatar, userPageMainAvatar];
    $(avatars).each(function () {
      $(this).attr('src', 'https://robohash.org/' + userIp + '.png');
    });
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
    $('.search-input-form').submit( function(event) {
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
      var currentDateElement = $('.forked-date')[i];
      $(currentDateElement).text(date);
    }
  }

  // Creates random date between two dates
  function randomDate(start, end) {
    return new Date( start.getTime() + Math.random() * ( end.getTime() - start.getTime() ) );
  }

  // Set amount of contribute and total repositories
  function setRepoAndContributeAmount() {
    var contributeItemAmount = $('.panel-item-contr'),
        repoItemAmount = $('.panel-item-repo'),
        contributeAmount = contributeItemAmount.length,
        repositoriesAmount = repoItemAmount.length;
    $('.contribute-amount').text(contributeAmount);
    $('.repo-amount').text(repositoriesAmount);
  }

  // Set difference function for each button
  function setFunctionsOnTheButtons() {
    var switchDahboardContent = $('.dropdown-menu-header.clearfix .close-news.main-page-button'),
        dashboardCloseButton = $('.icon-button-dashboard-wrapper .close-news'),
        newsInformationClose = $('.no-gutter .close-news'),
        repositoriesNavigationButtons = $('.repository-button'),
        userRepoNavigationButtons = $('.user-repo-nav-link'),
        signOutButton = $('.sign-out-link'),
        customizeRepoPanelButton = $('.repositories-panel-title-link'),
        publickPrivateChekedButtons = $('.check-item'),
        yearChangeButtons = $('.list-group-item'),
        commitsPanelButton = $('.commits-link'),
        moreActivityButton = $('.more-activity');

    // Notice user when he sign out
    $(signOutButton).on('click', function () {
      alert('You sign out');
    });

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
      alert('You close messages panel');
      $('.news-content').css('display', 'none');
    });

    // Change buttons on user repositories panel
    $(repositoriesNavigationButtons).each(function () {
      // Add onclick event for each button
      $(this).on('click', function () {
        changeButtonStyleForClick(this, repositoriesNavigationButtons, 'check-button');
        // Save current press button value and show repo to need
        var buttonName = $(this).text();
        removeAnchekedRepoItem(buttonName);
      });
    });

    // Change checked style after user click on show public/private contributions button
    $(publickPrivateChekedButtons).each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        changeButtonStyleForClick(this, publickPrivateChekedButtons, 'checked-item');
        alert('Change contributions to show');
      });
    });

    // Add changeButtonStyle function for user repositories navigation buttons
    $(userRepoNavigationButtons).each(function () {
      $(this).on('click', function () {
        changeButtonStyleForClick(this, userRepoNavigationButtons, 'active-link');        
      });
    });

    // Notice user about customizing repos panel
    $(customizeRepoPanelButton).on('click', function () {
      alert('Customize your repositories panel');
    });

    // Change style of year button in commits activity panel
    $(yearChangeButtons).on('click', function (e) {
      e.preventDefault();
      changeButtonStyleForClick(this, yearChangeButtons, 'active'); 
    });

    // Change commits icon when user presses it and hide or show commits list. Default list are visible. Also change style when user hovers this icon
    var state = 'open';
    $(commitsPanelButton).on('click', function (e) {
      e.preventDefault();
      if (state === 'open') {
        state = 'close';
        $('.commits-list-symbol').attr("src", "img/close-commits-list.png");
        $('.commits-list').css('display', 'none');
        hoverChangeCommitsButtonLogo(state);
      } else {
        state = 'open';
        $('.commits-list-symbol').attr("src", "img/open-commits-list.png");
        $('.commits-list').css('display', 'block');
        hoverChangeCommitsButtonLogo(state);
      }
    });

    // Notice user for showing more commits activity
    $(moreActivityButton).on('click', function () {
      alert('Show more activity');
    });

    // Check which button user have pressed and show repo to need
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
        for (var i = 0; i < currentItemParameters.length; i++) {
          if (buttonName === currentItemParameters[i]) {
            $(itemElement).css('display', 'block');
          }
        }
      });
    }
  }

  // Set and change footer text align 
  function setResizeForFooter() {
    // Set default text align
    changeFooterTextAlign();
    // Add resize event handler
    $(window).resize(function () {
      changeFooterTextAlign();
    });
    // Changes footer text align when user change the screen width
    function changeFooterTextAlign() {
      if (screen.width < 800) {
        $('.right-wrap').css('text-align', 'left');
      } else {
        $('.right-wrap').css('text-align', 'right');
      }
    }
  }

  // Set the certain name for user-profile page 
  function setPageName() {
    var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    if (pageName === 'user-page.html') {
      document.title = userIp;
    }
  }

  // Add curtain style class for certain button from buttons
  function changeButtonStyleForClick(clickedItem, buttonsArray, className) {
    // Remove checked class from all buttons
    $(buttonsArray).each(function () {
      $(this).removeClass(className);
      $(this).css('pointer-events', 'auto');
    });
    // And checked styles for press button
    $(clickedItem).css('pointer-events', 'none');
    $(clickedItem).addClass(className);
  }

  // Generate and set visual panel item and set random background for it
  function fillActivityPanel() {
    var activityPanel = $('.each-days-activity-panel');
    // All possible color for items
    var colorsForActivityItem = ['#eee', '#D6E685', '#8CC665', '#44A340', '#1E6823'];
    // Generate all amount of items
    for (var i = 0; i < 476; i++) {
      // Choose random color and create the item
      var randomColor = colorsForActivityItem[Math.floor(Math.random() * colorsForActivityItem.length)],
          currentVisualItem = $('<div class="each-days-activity-panel-item"/>'),
          randomContribureDate = randomDate( new Date(2016, 0, 1), new Date(2017, 0, 1) );
      randomContribureDate = moment(randomContribureDate).format('Do MMM YYYY');
      // Set hover attributes
      currentVisualItem.attr({
        'data-toggle': 'tooltip',
        'data-placement': 'top',
        'title': '<b>№ contributions </b> <span class="tooltip-text"> on ' + randomContribureDate +' </span>',    
      });
      // Add class for customize tooltip panel
      currentVisualItem.addClass('custom-tooltip');
      // Set bg-color
      currentVisualItem.css('background-color', randomColor);
      //Add item to the panel
      $(activityPanel).append(currentVisualItem);
    }
  $('[data-toggle="tooltip"]').tooltip({html: true});
  }

  // Set equals  height for tww elements in repo table line
  function setHeightOfRepoPanelItem() {
    var repotablesRowsList = $('.repositories-tables-item');
    $(repotablesRowsList).each( function () {
      var currentRepoDescriptions = $(this).find('.repo-item-description'),
          listOfHeightes = [];
      $(currentRepoDescriptions).each( function () {
        var currentelementHeight = parseInt( $(this).css('height') );
        listOfHeightes.push(currentelementHeight);
      });
      var maxHeight = Math.max(...listOfHeightes);
      $(currentRepoDescriptions).each( function () {
        $(this).css('height', maxHeight);
      });
    });
  }

  // Set needed color for each repo item logo
  function setColorLanguageDescripionIcon() {
    var allRepoLanguageLogos = $('.language-logo'),
        colorIconRules = {
          'HTML': '#E44B23',
          'CSS': '#563D7C',
          'JavaScript': '#F1E05A'
        }; 
    $(allRepoLanguageLogos).each( function () {
      // Get rule for logo color from next description element
      var currentLogoItemColor = $(this).next().text();
      // Set needed color
      $(this).css('background-color', colorIconRules[currentLogoItemColor]);
    });
  }

  // Change commits block logo when user hover it
  function hoverChangeCommitsButtonLogo(state) {
    $('.commits-link').hover(function() {
        $('.commits-list-symbol').attr("src", "img/" + state + "-commits-list-blue.png");
      }, function(){
        $('.commits-list-symbol').attr("src", "img/" + state + "-commits-list.png");
      }
    );
  }

})();
