// loop in array
//for loop - for each - for of

let numbers = [1,2,3,4,5];

// for loop

for (let number = 0 ; number<numbers.length; number++){ 
    console.log(number); 
}


//for each

numbers.forEach(element => {
    console.log(element);
});


//for of

for (const result of numbers) {
    console.log("=>", result);
}



// java script for each / for in / for of

//forEach ใช้ในการวนลูปอาร์เรย์

const arr = ['B', 'a', 'b', 'e', 'l']
arr.forEach((element, index, array) => console.log(element, index, array))

//for-in ใช้ในการวนลูปรอบอ็อบเจ็กต์

const person = {
    name: 'POY',
    age: 23, // ใกล้ตายแล้ว
    gender: 'male',
  }
  
for (let data in person){
    console.log(data , "=>" , person[data])
}

//สามารถใช้ for-in ในการวนลูป array ได้ด้วย

for (let char in arr){
    console.log(char , "=>" , arr[char]);
}

// for-of วนลูปรอบ Iterable Object


function* even(n) {
    let index = 0
  
    while (index <= n) {
      yield index
  
      index += 2
    }
  }
  
  const evenGenerator = even(10)
  
  for (let i of evenGenerator) {
    console.log(i)
  }


