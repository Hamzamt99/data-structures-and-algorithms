' use strict'

//case 1

// test the reversed array [20, 18, 12, 8, 5, -2]

inputArray = [20, 18, 12, 8, 5, -2]

function Insert(sorted, value) {
    let i = 0;
    while (value > sorted[i]) {
      i++;
    }
    while (i < sorted.length) {
      let temp = sorted[i];
      sorted[i] = value;
      value = temp;
      i++;
    }
    sorted.push(value);
  }
  
  function InsertionSort(input) {
    let sorted = [];
    sorted[0] = input[0];
    for (let i = 1; i < input.length; i++) {
      Insert(sorted, input[i]);
    }
    return sorted;
  }
  const sortedArray = InsertionSort(inputArray);
  console.log(sortedArray);
  
  // Output: [-2, 5, 8, 12, 18, 20]
  

  //case 2

  // test the Few uniques array [5, 12, 7, 5, 5, 7]

  const inputUniquesArray = [5, 12, 7, 5, 5, 7];

  function Insert(sorted, value) {
    let i = 0;
    while (value > sorted[i]) {
      i++;
    }
    while (i < sorted.length) {
      let temp = sorted[i];
      sorted[i] = value;
      value = temp;
      i++;
    }
    sorted.push(value);
  }
  
  function InsertionSort(input) {
    let sorted = [];
    sorted[0] = input[0];
    for (let i = 1; i < input.length; i++) {
      Insert(sorted, input[i]);
    }
    return sorted;
  }
  
 
  const sortedUniquesArray = InsertionSort(inputUniquesArray);
  console.log(sortedUniquesArray); 
  
  // Output: [5, 5, 5, 7, 7, 12]
  

  //case 3


  // test the Nearly-sorted array : [2,3,5,7,13,11]

  const inputNearlyArray = [2, 3, 5, 7, 13, 11];

  function Insert(sorted, value) {
    let i = 0;
    while (value > sorted[i]) {
      i++;
    }
    while (i < sorted.length) {
      let temp = sorted[i];
      sorted[i] = value;
      value = temp;
      i++;
    }
    sorted.push(value);
  }
  
  function InsertionSort(input) {
    let sorted = [];
    sorted[0] = input[0];
    for (let i = 1; i < input.length; i++) {
      Insert(sorted, input[i]);
    }
    return sorted;
  }
  

  const sortedNearlyArray = InsertionSort(inputNearlyArray);
  console.log(sortedNearlyArray);
  
  // Output: [2, 3, 5, 7, 11, 13]
  