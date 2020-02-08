/**
var em = new EventManager();

em.on("eventA", function(a, b) {console.log(a, b, this.c)}, {c: "baz"});
em.on("eventA", function() {console.log("hello priya")}, {});
em.on("eventB", function() {console.log("boo")}, {});

em.trigger("eventA", "foo", "bar");
em.trigger("eventB");

>> "foo" "bar" "baz"
>> "hello priya"
>> "boo"

*/

function EventManager(){
  this.eventmap = {};
}

EventManager.prototype.on = function on(eventName, cb, context){
  
  if(this.eventmap[eventName]){
    this.eventmap[eventName].push({cb, context});
  }else{
    this.eventmap[eventName] = [{cb, context}];
  }
}

EventManager.prototype.trigger = function trigger(eventName, ...args){
  if(this.eventmap[eventName]){
    this.eventmap[eventName].forEach(entry => entry.cb.call(entry.context,args));
  }
}

var em = new EventManager();

em.on("eventA", function(a, b) {console.log(a, b, this.c)}, {c: "baz"});
em.on("eventA", function() {console.log("hello priya")}, {});
em.on("eventB", function() {console.log("boo")}, {});

em.trigger("eventA", "foo", "bar");
em.trigger("eventB");