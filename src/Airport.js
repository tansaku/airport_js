function Airport(){
  var hanger = [];
  this.planes = function(){ 
    return hanger; 
  }
  this.clearForLanding = function(plane) { 
    if(this.isStormy()) {
      throw new Error('cannot land during storm');
    }
    hanger.push(plane); 
  };
  this.clearForTakeOff = function(plane){
    if(this.isStormy()) {
      throw new Error('cannot takeoff during storm');
    }
    hanger = [];
  };
  this.isStormy = function(){
    return false;
  };
}