import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	firebase: new window.Firebase('https://glaring-fire-229.firebaseio.com')
});
