import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  isEvent: DS.attr('boolean'),
  isRead: DS.attr('boolean'),
  isAction: DS.attr('boolean'),	
  timestamp: DS.attr('number')
});
