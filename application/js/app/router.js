App.ApplicationRouter = new (Backbone.Router.extend({
  routes: { 
  	"": "home",
  	"home": "home",
  	"bookmarks": "bookmarks"
  },

  initialize: function(){
    console.log('app init');
  },

  home: function(){
    var homeView = new App.Views.Home();
    homeView.render();
    this.transition(homeView.el);
  },


  bookmarks: function(){
    var bookmarksView = new App.Views.Bookmarks();
    bookmarksView.render();
    this.transition(bookmarksView.el);
  },

  transition: function(to){
  	/*var appcontainer = $('#app').toggleClass('slideOutLeft').toggleClass('slideInRight');
  	setTimeout(function(){
  		appcontainer.html(to).toggleClass('slideOutLeft').toggleClass('slideInRight');
  		$(document).trigger('templateLoaded');
  	}, 2000);*/

    var appcontainer = $('#app').addClass('animated bounceOutLeft');
    appcontainer.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
      appcontainer.html(to)
                  .removeClass('animated bounceOutLeft')
                  .addClass('animated bounceInRight');
      $(document).trigger('templateLoaded');
    });

  }

}));

