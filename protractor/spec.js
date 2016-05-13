describe('protractor testing my h1 app', function() {
  var inputField = element(by.model('heyHo'));
  var deleteButton = element(by.id('deletebutton'));
  var calvin = element(by.id('calvin'));

  beforeEach(function() {
    browser.get('http://localhost:1234');
  });
  it('should equal what is in the text box', function() {
    inputField.sendKeys('hello calvin!!');

    expect(calvin.getText()).toEqual('hello calvin!!');
    expect(true).toEqual(true);
    // expect(true).toEqual(false);
  });
  it('should delete h1 header when button is clicked', function() {
    deleteButton.click();
    inputField.sendKeys('hey hobbes!! delete me!!!');
    expect(calvin.getText()).toEqual('hey hobbes!! delete me!!!');
    deleteButton.click();
    expect(calvin.getText()).toEqual('');
  });
});
