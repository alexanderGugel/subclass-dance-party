var BlinkyDancer = function(top, left, timeBetweenSteps){
  //this = new object of Dancer prototype
  // this.step is overrriden with a new step function
  // keep a reference to the old Dancer step
  this._oldStep = Dancer.prototype.step;
  //call Dancer constructor passing in the
  //BlinkyDancer instance as an argument,with the other arguments
  this.$node = $('<span class="dancer"></span>');
  timeBetweenSteps = timeBetweenSteps*10;
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  //call the old step function
  this._oldStep();
  //Toggle the span tag using jQuery
  this.$node.toggle();
};

