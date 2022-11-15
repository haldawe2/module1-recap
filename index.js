/// Iteration 2: getMaxNum
// Assuming numbers > 0 and at least 1 number
function getMaxNum(array) {
  let maxNum = 0;
  for (const item of array) {
    if (typeof item === "number") {
      if (item > maxNum) {
        maxNum = item;
      }
    }
  }
  return maxNum;
}

// Iteration 2 tests:
// console.log(getMaxNum([45, 67, 12, 34])); // Should return 67
// console.log(getMaxNum(["hello", [0, 1, 2], 34, 45, 12, 0])); // Should return 45

/// Iteration 3: changeItem

function changeItem (array, num1, num2) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num1) {
            array[i] = num2;
        }
    }
    return array;
}

// Iteration 3 tests:
// console.log(changeItem([3, 5, 7], 3, 4)) // Should return [4,5,7]
// console.log(changeItem([17, 18, 6, 18, 3], 18, 2)) // Should return [17, 2, 6, 2, 3];
// console.log(changeItem([1, 1, 3, 2, 4, 1, 1], 1, 8)) // Should return [8, 8, 3, 2, 4, 8, 8]

/// Iteration 4: orderByDate

function orderByDate (array) {
    return array.sort((person1, person2) => person1.year - person2.year);
}

// Iteration 4 tests:
// const birthdays = [
//   {
//     name: 'Bob',
//     year: 1989,
//   },
//   {
//     name: 'Rosita',
//     year: 1990,
//   },
//   {
//     name: 'Stevie',
//     year: 1988,
//   },
//   {
//     name: 'Marlon',
//     year: 1979,
//   },
// ]
// const importantDates = [
//   {
//     title: 'Wedding aniversary',
//     year: 2014,
//   },
//   {
//     name: "Daddy's birthday",
//     year: 2013,
//   },
//   {
//     name: 'Graduation party',
//     year: 2019,
//   }
// ]
// console.log(orderByDate(birthdays)) // Should return them ordered 1979, 1988, 1989, 1990
// console.log(orderByDate(importantDates)) // Should return them ordered 2013, 2014, 2019

/// Iteration 5: new machine gun

class Weapon {
    constructor (type, power, ammo) {
        this.type = type;
        this.power = power;
        this.ammo = ammo;
    }

    shoot() {
        
    }
}

// Iteration 5 tests
// const machineGun = new Weapon('Machine gun', 90, 50);
// console.log('Begin:')
// machineGun.shoot();
// setTimeout(() => machineGun.stopShooting(), 1000);
// setTimeout(() => machineGun.reload(35), 1500);
