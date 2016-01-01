'use strict';


describe("A spy, when configured to throw an error", function () {
  var foo, bar;

  beforeEach(function () {
    foo = {
      setBar: function (value) {
        bar = value;
      }
    };

    spyOn(foo, "setBar").and.throwError("quux");
  });

  it("throws the value", function () {
    expect(function () {
      foo.setBar(123);
    }).toThrowError("quux");
  });

  it('should throw an error', function () {
    //expect(foo.setBar).toHaveBeenCalled();
    expect(foo.setBar).toThrowError("quux");
    //expect(foo.setBar(123)).toThrowError("quux");
  });

});


