import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('contact', params.contact_id);
  }
});

// Will use the params from the URL to return desired contact from Ember Data's store
