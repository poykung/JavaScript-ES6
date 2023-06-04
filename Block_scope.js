/*
Block/Scope (Let /const)
ประกาศนิยามตัวแปร Let แทน var เนื่องจาก var เป็นตัวแปรที่ถูกมองว่าเป็น global variable
จึงทำงานทะลุขอบเขตของ block ได้

ประกาศนิยามตัวแปร const ในกรณีที่ตัวแปรเป็นค่าคงที่

*/

var $number = 50;
let $_number = 50;

if($number == 50){
    var $y = 500;
    let $yy = 500;
    console.log("ตัวแปร y ภายในเงื่อนไข if :",$y);
    console.log("ตัวแปร yy ภายในเงื่อนไข if :",$yy);
}

document.write($y); //เนื่องจากนิยามการประกาศตัวแปรเป็น var ตัวแปรจึงถูกมองว่าเป็น global สามารถเรียกใช้ได้แม้จะอยู่ภายนอก scope
document.write($yy); //ตัวแปรจะไม่ถูกนำมาแสดงเนื่องจากนิยามตัวแปรเป็น let จึงจะทำงานภายใน block ที่ประกาศตัวแปรเพียงเท่านั้น


