//Array Filter ใช้คัดกรองสมาชิกที่อยู่ภายใน array ที่ผ่านเงื่อนไขตามที่ได้กำหนดขึ้น


/*
array filter with number

const numbers = [10,20,30,40]
result = numbers.filter(ele =>ele>30 || ele>10); //ใช้ operator เปรียบเทียบค่าทางตรรกศาสตร์ในการกรอง filter และส่งค่าที่เป็น true ออกไปแสดงผล
console.log(result) //print



array filter with object 

const personal = [
  {fname : 'panda', lname : 'bear', age : 50},
  {fname : 'tiger', lname : 'liger', age : 25},
  {fname : 'lion', lname : 'tilon', age : 33},
  {fname : 'payut', lname : 'bastard', age : 1}
]

const result = personal.filter(element =>{
  return element.fname === 'payut'
})

console.log(result)
*/