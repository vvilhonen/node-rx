var Rx = require("rx").Rx

function test() {
  var as = new Rx.AsyncSubject()
  setTimeout(function() {
    as.OnNext("works!")
    as.OnCompleted()
  }, 500)
  return as
}

var a = test().Subscribe(function(result) {
  console.log("Got result: "+result)
})
