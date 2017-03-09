// The second argument/parameter is expected to be a function

function findWaldo(arr, found, element) {
  arr.forEach(function(element, i) {
    if ([element] == "Waldo") {
      found(i);
    }
  });

}

function actionWhenFound(element) {
  console.log(`Found Waldo at index: ${element}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);