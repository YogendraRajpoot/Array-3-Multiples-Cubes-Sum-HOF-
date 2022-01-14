// Given an array of numbers find the sum of cubes if the number is divisible by 3

const arr =[2,3,4,5,6,9]

const cube = (x,y) => y%3===0 ? x+(y*y*y) : x+0

console.log(arr.reduce(cube,0))