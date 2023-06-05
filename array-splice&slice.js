// array splice & slice

//splice (ตำแหน่งที่ต้องการลบ, จำนวนที่ต้องการลบ,สามารถแทรกข้อมูลเข้าไปแทนที่ข้อมูลตัวที่ลบออกไปได้)
//slice (ตำแหน่งที่เริ่มต้น , ตำแหน่งสุดท้าย -1)

//splice ลบข้อมูล
let numbers = [1,2,3,4,5,6,7,8,9];

//numbers.splice(1,5,4); //splice เป็นการลบข้อมูล array ที่อ้างอิงตำแหน่ง index และสามารถนำข้อมูลเข้าไปแทนที่ข้อมูลตัวที่ลบออกไปได้
//การใช้ slice ลบข้อมูล โดยข้อมูลใน array ที่ถูกลบไปแล้วจะส่งผลต่อข้อมูลที่อยู่ภายใน array ด้วย

//slice แสดงผลข้อมูล

getnumber = numbers.slice(3,7) //slice เป็นการแสดงผลข้อมูลโดยเริ่มจากตำแหน่ง index ที่ต้องการ print และสิ้นสุดด้วยตำแหน่งสุดท้าย 
console.log(getnumber);

