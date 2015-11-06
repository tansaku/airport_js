function Plane(){
  var location;
  this.land = function(airport) {
    airport.clearForLanding(this);
    location = airport;
  };
  this.takeoff = function() {
    location.clearForTakeOff('')
  };
}