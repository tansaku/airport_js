describe('The whole Airport', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });
  // As an air traffic controller 
  // To get passengers to a destination 
  // I want to instruct a plan to land at an airport
  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
  });
});