import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    musicSearch(params){
      this.transitionTo('musicsearch', params.search);
    }
  }
});
