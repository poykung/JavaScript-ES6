// join concat in array

//join คำสั่งที่ใช้ในการเปลี่ยนข้อมูลภายใน array ให้เป็นรูปแบบ string ในการแสดงผลโดยจะไม่ส่งผลกระทบต่อค่าข้อมูลที่อยู่ภายใน array

const colors = ["red","green","blue"]; //ประกาศตัวแปรเพื่อเก็บข้อมูล array
const addcolor = ["white","black"];
const color = colors.join("*"); //ประกาศตัวแปรเพื่อแปลงข้อมูลที่อยู่ใน array ให้เป็นรูปแบบ string
//ภายในคำสั่ง join สามารถแทรกตัวอักษรหรือเครื่องหมายที่คั่นระหว่างข้อมูลใน string ได้
console.log(color); //print ตัวแปรที่ทำการแปลงค่า array เป็น string

//concat คือการนำเอาข้อมูล array ไปต่อท้ายกับข้อมูล array อีกตัว

const getcolors = colors.concat(addcolor); //ประกาศตัวแปรเพื่อนำค่า array ทั้งสองมาต่อกัน
console.log(getcolors); //นำตัวแปรที่ได้มาแสดงผล