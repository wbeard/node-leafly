var baseUrl = 'http://data.leafly.com';

module.exports = function(api) {

  function searchRequest = function(path, options, query, cb, cberr) {

    var deferred = Q.defer();

    if(!options) {
      options = {};
      options.page = 0;
      options.count = 10;
    }

    api.get(baseUrl + '/strains/' + path, options, query).then(function(res, body) {
      deferred.resolve(res, body);
    }).catch(function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };

  this.search = function(options, query, cb, cberr) {
    return this.searchRequest('', options, query, cb, cberr);
  };

  this.details = function(strain, options, query, cb, cberr) {
    return this.searchRequest(strain, options, query, cb, cberr);
  };

  this.reviews = function(strain, options, query, cb, cberr) {
    var path = options.reviewId ? strain + '/reviews/' + options.reviewId : strain + '/reviews';
    return this.searchRequest(path, options, query, cb, cberr);
  };

  this.pictures = function(strain, options, query, cb, cberr) {
    var path = strain + '/pictures';
    return this.searchRequest(path, options, query, cb, cberr);
  };

  this.availability = function(strain, options, query, cb, cberr) {
    var path = strain + '/availability';
    return this.searchRequest(path, options, query, cb, cberr);
  };

};
