App.Views.Home = Backbone.View.extend({
	idDashboard: null,
	className: 'home',
	template: _.template($('#homeTpl').html()),

	initialize: function(){
		$(document).on('templateLoaded', {self: this}, this.ready);
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	},

	ready: function(e){
		// When DOM is ready do:
	}

});