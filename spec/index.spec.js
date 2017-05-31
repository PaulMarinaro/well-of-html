var Browser = require('zombie');
var browser = new Browser();

const server = 'http://localhost:3000';

describe('Product Project', function(){

  beforeEach(function(done) {
    browser.visit(server, done);
  });

  it('should have a title A Well of HTML', function(done){
    browser.assert.text('title', 'A Well of HTML');
    done();
  });


});
