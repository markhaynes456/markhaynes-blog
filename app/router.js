import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("posts",{path:'/'});
  this.route("post",{path:'/post/:post_id'});
  this.route("contact");
  this.route("projects");
});

export default Router;
