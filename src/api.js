var Q = require('q');
var qs = require('querystring');
var request = require('request');

var Strains = require('./strains');

module.exports = function(options) {
  if(!options) {
    throw new Error('Please provide an object with an appId and apiKey');
  }

  if(!options.appId) {
    throw new Error('Please provide an appId');
  }

  if(!options.appKey) {
    throw new Error('Please provide an appKey');
  }

  this.appId = options.appId;
  this.appKey = options.appKey;

  this.get = function(path, options, query) {
    var deferred = Q.defer();

    path = query ? path + '?' + querystring(query) : path;

    request({
      url: path,
      method: 'GET',
      headers: {
        'app_id': this.appId,
        'app_key': this.appKey
      },
      json: true,
      body: {
        page: options.page,
        take: options.count
      }
    }, function(err, res, body) {
      if(err) {
        deferred.reject(err);
      }
      deferred.resolve(res, body);
    })

    return deferred.promise;
  }

  this.strains = new Strains(this);

}
