var App = new (Backbone.View.extend({
	Models: {},
	Collections: {},
	Views: {},
	ViewportHeight: null,

	events: {
		'click a[data-backbone]': function(e){
	      e.preventDefault();
	      Backbone.history.navigate(e.target.pathname, { trigger: true });
	    },
	    'click .app-backbutton': function(e){
	    	window.history.back();
	    }
	},

	start: function(){
		this.ViewportHeight = document.documentElement.clientHeight;
		Backbone.history.start();
	}

}))({el: document.body});

$(function(){App.start()});