// array reduce การนำข้อมูลที่อยู่ใน array มารวมผลลัพธ์และแสดงค่าผลลัพธ์ return ออกไป

const cart = [
  {product : 'กระเป๋า' , price : 680},
  {product : 'รองเท้า' , price : 1200},
  {product : 'เสื้อ' , price : 599}
]

const result = cart.reduce((element,sum) => { //ใช้ parameter 2 ตัว (ค่าที่ถูกประมวลผล) และ (ค่าเริ่มต้น)
  const sumation = sum.price+element //คำสั่งให้ค่าที่อยู่ใน array มาวนรอบจะได้ผลรวม
  return  sumation //return ค่าที่ได้จากการรวม
},0) //กำหนดค่าเริ่มต้นให้ = 0

console.log("รวมราคาสินค้า",result) //print
