import Ember from 'ember';

export default Ember.Route.extend({
    model() { return this.store.createRecord('product'); },

    actions: {
      add() {
        this.modelFor(this.routeName).save().then(function() {
          this.transitionTo('index');
        }.bind(this));
      },
      cancel() {
        this.modelFor(this.routeName).rollbackAttributes();
        this.transitionTo('index');
      }
    }
});
