var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'lkjhgfdsaq' }, function(err, tunnel) {
  console.log('LT running')
});