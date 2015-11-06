describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['receive']);
  });
  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.receive).toHaveBeenCalledWith(plane);
  });
});