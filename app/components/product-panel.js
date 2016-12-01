import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  classNames: ['col-sm-3'],

  actions: {
    addToCart() {
      this.get('shoppingCart').addProduct(this.get('product'));
    }
  }
});
