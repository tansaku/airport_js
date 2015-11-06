describe('Airport FEATURE', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });
  // As an air traffic controller 
  // To get passengers to a destination 
  // I want to instruct a plan to land at 
  //     an airport and confirm that it has landed
  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  // As an air traffic controller 
  // To get passengers to a destination 
  // I want to instruct a plan to take off from 
  //     an airport and confirm that it is no longer in the airport
  it('planes can be instructed to takeoff', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
  // As an air traffic controller 
  // To ensure safety 
  // I want to prevent takeoff when weather is stormy 
  it('blocks takeoff when weather is stormy', function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
  // As an air traffic controller 
  // To ensure safety 
  // I want to prevent landing when weather is stormy 
  it('blocks landing when weather is stormy', function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
    expect(airport.planes()).toEqual([]);
  });

  // weather should be random and come in via dependency injection?

  // need capacity?
});