describe('Plane',function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });
  it('can land at an airport', function(){
    plane.land('airport');
  });
});