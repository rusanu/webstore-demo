import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-panel', 'Integration | Component | product panel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('product', {name: 'The Name', description: 'The Description', stock: 1, price: 1});

  this.render(hbs`{{product-panel product=product}}`);

  assert.equal(this.$().text().replace(/[\s\r\n]+/g,''), 'TheNameTheDescriptionStock:1Price:1AddToCart');
});
