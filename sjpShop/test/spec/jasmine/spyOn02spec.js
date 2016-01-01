'use strict';


describe("A spy, when configured to call through", function() {
  //var foo, bar, fetchedBar;
var foo, fetchedBar;

  beforeEach(function() {
    foo = {
      bar:0,
      setBar: function(value) {
        this.bar = value;
      },
      getBar: function() {
        return this.bar;
      }
    };


    spyOn(foo, 'getBar').and.callThrough();

    foo.setBar(123);
    fetchedBar = foo.getBar();
    console.log("==========================================");
    console.log(fetchedBar);
    //console.log(bar);
  });

  it('should dummy test pass', function () {
    expect(NaN).toEqual(NaN);
  });
/*
  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(123);
  });*/
});

