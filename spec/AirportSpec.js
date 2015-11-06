describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  it('has planes', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can receive planes', function(){
    airport.receive(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});