function Plane(){
  this.land = function(airport){
    airport.receive(this);
  };
}