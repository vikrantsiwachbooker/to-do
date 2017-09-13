import Ember from 'ember';

export default Ember.Route.extend({
	sample:[{login:'asd'}],
	len: function()
	{

		return this.get('sample').length;
	},
	model: function(){
		var url = 'https://api.github.com/users';
		let that = this;
		return Ember.$.getJSON(url).then(function(data){
			console.log(data);
			that.set('sample',data);
			console.log(that.get('sample'));
			

			var posts = this.store.find(data);
		})
	}
});
