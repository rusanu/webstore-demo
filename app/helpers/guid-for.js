import Ember from 'ember';

export function guidFor([obj, suffix]) {
  return [Ember.guidFor(obj), suffix].join('-');
}

export default Ember.Helper.helper(guidFor);
