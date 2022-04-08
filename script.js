/* // lecture 55 Rxercise intervie question 2
const array1 = ["a", "b", "c", "d"];
const array2 = ["x", "y", "z"];

function containesCommonItem2(arr1, arr2) {
  // loop throught he first array and create an object,where properties of object = items of array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      let item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);
  //   loop through second array and check if items in second array exists on created Object
  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      return true;
    }
  }

  return false;
}

console.log(containesCommonItem2(array1, array2));

function containesCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containesCommonItem3(array1, array2));
 */

// ////// Implementing an array in javascript////
//arrays in javascript are just objects with integer based keys and thats what we are gonna build
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[lastItem];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// newArray.push(2);
// newArray.push(4);
// newArray.push(5);
// newArray.push(6);
// newArray.push(7);
// newArray.push(8);
// console.log(newArray);
// console.log(newArray.pop());
// console.log(newArray);
// console.log(newArray.pop());
// console.log(newArray);
// console.log(newArray.pop());
// console.log(newArray);
// console.log(newArray.pop());
// console.log(newArray);
// console.log(newArray.pop());
// console.log(newArray);
// console.log(newArray.pop());
// console.log(newArray);
// console.log(newArray.delete(1));
// console.log(newArray);
// console.log(newArray.delete(1));
// console.log(newArray);
// console.log(newArray.delete(1));
// console.log(newArray);

//InterviewQuestion reverese a string
//write a function to reverese a string .i.e "Hi i am Ajay" should be "yajA ma i iH"

/* function reverseString(words) {
  const reversedword = words.split("").reverse().join("");
  console.log(words);
  console.log(reversedword);
  return reversedword;
}

console.log(reverseString("Hi i am Ajay"));

 */

/* function reverseString2(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmm thats not good";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
} */

// console.log(reverseString2("Hi I Am Ajay"));

// Merge sorted arrays
// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
//[0,3,,4,4,6,30,31]

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
