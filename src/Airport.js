function Airport(){
  var plane_store = [];
  this.planes = function(){ 
    return plane_store; 
  }
  this.receive = function(plane) { 
    plane_store.push(plane); 
  };
}