import Ember from 'ember';

export default Ember.Service.extend({
    content: [],

    addProduct(product) {
      this.get('content').pushObject(product);
    }
});
