// push,pop,shift,unshift

//push array เพิ่มข้อมูลเข้าไปต่อท้ายใน array
const colors = ["red","green","blue"]; //ประกาศตัวแปรเพื่อเก็บ array
colors.push(...["white","black","gray"]) //push ค่าเข้าไปเพิ่มใน array
//หากไม่ใส่ ... spread operator ค่าที่ส่งเข้าไปจะถูกมองเป็น array ทั้งก้อน

//pop เป็นการลบข้อมูล array ที่อยู่ในตำแหน่งท้ายสุด
colors.pop(); //ชื่อ array ตามด้วยคำสั่ง pop
colors.shift(); // ตรงข้ามกับ pop โดย shift จะเป็นการลบ array ตำแหน่งที่อยู่ด้านหน้าสุด
colors.unshift(...["pink","salmon"]); //ตรงข้ามกับ push โดย inshift จะเป็นการเพิ่มข้อมูล array เข้าไปต่อที่ด้านหน้าสุด

console.log(colors);









