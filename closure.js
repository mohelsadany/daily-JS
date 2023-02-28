function OuterFunction() {
  var outerVariable = 1;
  function InnerFunction() {
    console.log(outerVariable);
  }
  return InnerFunction();
}
var innerFunc = OuterFunction();
innerFunc(); // 1

// so now, when you call innerFunc, it can still access outerVariable which declared in OuterFunction
// "this is Closure"


function Counter(){
    var count = 0;
    function IncreaseCounter(){
        return count+=1;
    }
    return IncreaseCounter;
}
var counter = Counter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// so now, outer function Counter return the reference of inner function IncreaseCounter().
// IncreaseCounter increase the outer variable counter to one 


var counter = (function(){
    var count = 0;
    function changeBy(val){
        return count+= val;
    }
    return {
        increment: function(){
            return changeBy(1);
        },
        decrement: function(){
            return changeBy(-1);
        },
        value: function(){
            return count;
        }
    }
})();
console.log(counter.value()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.decrement()); // 2
console.log(counter.decrement()); // 1
console.log(counter.decrement()); // 0
console.log(counter.decrement()); // -1