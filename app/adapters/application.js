import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({  // Can serialize/deserialize JSON correctly with DS.ActiveModelAdapter
  namespace: 'api/v1',
  host: 'http://localhost:3000'
});
