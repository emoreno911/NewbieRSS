App.Views.Bookmarks = Backbone.View.extend({
	className: 'bookmarks',
	template: _.template($('#bookmarksTpl').html()),

	initialize: function(){
		
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}


});