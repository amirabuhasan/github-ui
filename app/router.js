import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', function() {
    this.route('mike');
  });
  this.route('orgs'); // /orgs
  this.route('org', { path: 'org/:id' }, function() { // /org/e
    this.route('repos');
    this.route('repo', { path: ':repoid' }, function() {
      this.route('contributors');
      this.route('issues');
    }); // org/jquery/jquery-ui
  });
  this.route('notfound', {path: '*path' });
});

export default Router;
