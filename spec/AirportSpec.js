describe('Airport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
  });
  it('has planes', function(){
    expect(airport.planes()).toEqual([]);
  });
});