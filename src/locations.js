var baseUrl = 'http://data.leafly.com';

module.exports = function(api) {

  function locationRequest = function(path, options, query, cb, cberr) {

    var deferred = Q.defer();

    if(!options) {
      options = {};
      options.page = 0;
      options.count = 10;
    }

    api.get(baseUrl + '/locations/' + path, options, query).then(function(res, body) {
      deferred.resolve(res, body);
    }).catch(function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };

  this.search = function(options, query, cb, cberr) {
    return this.searchRequest('', options, query, cb, cberr);
  };

  this.details = function(location, options, query, cb, cberr) {
    return this.searchRequest(location, options, query, cb, cberr);
  };

  this.menu = function(location, options, query, cb, cberr) {
    return this.searchRequest(location + '/menu', options, query, cb, cberr);
  };

  this.reviews = function(location, options, query, cb, cberr) {
    return this.searchRequest(location + '/reviews', options, query, cb, cberr);
  };

  this.specials = function(location, options, query, cb, cberr) {
    return this.searchRequest(location + '/specials', options, query, cb, cberr);
  };

}
