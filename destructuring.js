//Destructuring

/* destructuring การสลายโครงสร้าง คือการกำหนดค่าที่อยู่ภายใน array หรือ object
โดยใช้วิธีการจับคู่คตัวแปรกับค่าใน array หรือ object


//array ปกติ
const colors = ["pink","white","green","gray","purple"];
const getcolor = colors[1]; //กางอ้างอิงถึงข้อมูลใน array แบบปกติ โดยอ้างอิงผ่านตัวเลข index ที่อยู่ใน array
console.log(getcolor); //โดยเก็บค่าตำแหน่ง index ของ array ไว้ในตัวแปร และแสดง print ค่าตัวแปรออกมา


//Destructuring array
const numbers = [1,2,3,4,5]; //ประกาศ array
const [one,two,three,four,five] = numbers //ใช้งาน Destructuring เพื่อจับคู่ให้กับ array โดยใช้ตัวแปรในการอ้างอิงการเข้าถึง
console.log(four); //print เพื่อแสดงผลข้อมูล array ที่ถูกจับคู่


//Object
const personal = {
    fname : "Thaweekhun",
    lname : "Ninkhammee",
    age : 23,
    gender : "ชายแท้"
}
//console.log(personal.fname); //การเข้าถึงข้อมูลในรูปแบบปกติ

//Destructuring Onject
const {fname:getname,lname:getlname,age:getage,gender:getgender} = personal
//Destructuring Onject โดยฝั่งที่เป็นตัวแปรจะอยู่ทางฝั่งซ้ายมือ ส่วนด้านขวามือจะเป็น object
// const {fname,lname,age,gender} = personal หากชื่อตัวแปรตรงกับชื่อ properties สามารถอ้างอิงถึงชื่อเพียงอย่างเดียวได้
console.log(getgender);
*/