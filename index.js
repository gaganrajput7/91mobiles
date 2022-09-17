let input2 = [50, 80, 70, 60, 50, 40];
let input3 = [2, 4, 6, 7, 9, 7];
input2 = input2.sort((a,b)=>b-a)
console.log(input2)
input3 = input3.sort((a, b) => a - b);
console.log(input3);
let sum = 0;
for (let i = 0; i < 6; i++) {
  if (input3[i] != input3[i + 1]) {
    sum += input2[i];
  }
  else {
    if (input2[i] > input2[i + 1]) {
      sum += input2[i];
    } else {
      sum += input2[i + 1];
    }
    i=i+1;
  }
}
console.log(sum);
