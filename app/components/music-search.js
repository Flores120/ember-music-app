import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    musicSearch(){
      var params = {
        search: this.get('search')
      };
      this.sendAction('musiSearch', params);
    }
  }
});
