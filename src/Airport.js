function Airport(){
  var hanger = [];
  this.planes = function(){ 
    return hanger; 
  }
  this.clearForLanding = function(plane) { 
    hanger.push(plane); 
  };
  this.clearForTakeOff = function(plane){
    if(this.isStormy()) {
      throw new Error('cannot takeoff during storm')
    }
    hanger = [];
  };
  this.isStormy = function(){
    return false;
  };
}