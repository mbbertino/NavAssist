import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
	provider: DS.attr('string'),
  provider_id: DS.attr('string'),
  createdTimeStamp: DS.attr('number')
});
