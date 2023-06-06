//array map การนำค่าสมาชิกใน array มาทำการ map ค่า/หรือเปลี่ยนแปลงค่า และสร้างเป็น new array เพื่อนำไปใช้งาน
//.map() โดยหน้าที่คือการวนค่าทุกค่าใน array ตาม function ที่ต้องการ และทำการสร้าง array ใหม่ออกมาพร้อมกับค่าใหม่


/*
//array map with number
const numbers = [10,20,30]; //ประกาศตัวแปรเพื่อเก็บ array
getnumber = numbers.map(ele=>{ //ประกาศ function เพื่อเรียกใช้งาน array map และนำค่าใน array เข้ามาเก็บในตัวแปร
    const result = ele*2 //สร้างตัวแปรเพื่อรับค่าใน array และเพิ่มคำสั่งให้ array
    return result; //นำค่าที่ได้จากการวนรอบ array ไปใช้งาน print
})
console.log(getnumber); 

*/

/*
//array map with string
const weather = ["sunny","cloudy","rainy","strom"]; //ประกาศตัวแปรเพื่อเก็บ array

ex.1
result = weather.map((ele,i)=>{ //สร้าง function เพื่อดึงเข้าข้อมูลจาก array เพื่อไปทำงาน
    return `Day ${i+1} Weather : ${ele} ` //นำตัวแปรมาเพิ่มคำสั่ง และ return ค่าออกไป
})
console.log(result);

ex.2
const fruit = ["watermelon","banana","orang","strawberry"];
result = fruit.map((ele,i) =>{
    return `รายการผลไม้ => ${i+1} ชื่อผลไม้ : ${ele} `
})

console.log(result)

ex.3
const computers = ['mainboard','cpu','ram','case','power supply','ssd','graphic card'];

incase = computers.map((element , i)=>{
    return `=> ${i+1} ชื่ออุปกรณ์ : ${element}`
})

console.log(incase);
*/

/*
//array map with object //map ข้อมูล object ที่อยู่ภายใน array
const getweather = [ //สร้าง array เพื่อเก็บข้อมูล object ด้านใน
    {day:"01/06/2023",wet:"sunny",tem:"28"},  //ข้อมูล object
    {day:"02/06/2023",wet:"cloudy",tem:"26"},
    {day:"03/06/2023",wet:"rainy",tem:"18"}
]
result = getweather.map(ele =>{ //ใช้ function เพื่อเก็บค่าจากตัว array นำไปใช้งาน
    return `วันที่ : ${ele.day} สภาพอากาศ : ${ele.wet} อุณหภูมิ ${ele.tem}` //return ค่าด้านใน array
})
console.log(result);
*/
