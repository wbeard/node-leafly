jest.dontMock('../src/api');

var LeaflyApi = require('../api');

describe('index', function() {

  var appKey = 'abc123';
  var appId = 'abc123';

  it('throws an exception if no appId or appKey is provided', function() {
    expect(function() { new LeaflyApi() }).toThrow();
  });

  it('throws an exception if an appId is not provided', function() {
    var api = function() {
      new LeaflyApi({
        appKey: appKey
      });
    };

    expect(api).toThrow(new Error('Please provide an appId'));
  });

  it('throws an exception if an appKey is not provided', function() {
    var api = function() {
        new LeaflyApi({
        appId: appId
      });
    };

    expect(api).toThrow(new Error('Please provide an appKey'));
  });



});
