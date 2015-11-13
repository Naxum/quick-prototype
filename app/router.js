import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  didTransition(transition) {
      this._super(...arguments);
      window.scrollTo(0, 0);
      return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }
});

Router.map(function() {
  this.route('products');
  this.route('customers');
});

export default Router;
