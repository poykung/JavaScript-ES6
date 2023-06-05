//rest parameter ใช้ในการส่งค่า parameter เข้าไปทำงานใน function โดยไม่จำกัดจำนวน ใช้เครื่องหมาย ... ในการนิยาม rest parameter

/*
sumation = (x,y)=>{
    return x+y;
}
console.log(sumation(20,30));
 
//ตัวอย่างโปรแกรมผลรวมเลข โดยใช้ rest parameter
sumation =  (...numbers)=>{  //ประกาศให้เป็น rest parameter เพื่อใช้รับข้อมูลที่เป็น arrays และกระจายข้อมูลใน array
    let result = 0; //ประกาศตัวแปรเพื่อหาผลรวมของ arrays ที่ส่งเข้ามา
    for (let number of numbers) result+=number //ใช้ลูปเพื่อแสดงข้อมูลที่อยู่ใน array
    //การทำงานโปรแกรม ส่ง arrays จาก numbers เข้ามาทำงานใน function sumation และถึงสมาชิกที่อยู่ใน array เข้ามาทำงานและเก็บลงในตัวแปร
    //และเอาตัว number ที่รับเข้ามาไป + กับตัวแปร result เพื่อหาผลรวม จากนั้นส่งค่าที่ได้จาก result เพื่อนำไปแสดงผล

    return result; //นำผลรวมของ result + number ไปแสดงผล
}

console.log(sumation(100,200,300,1000)); //arrays ที่ส่งเข้าไปทำงานใน function sumation

ความแตกต่างระหว่าง parameter แบบปกติ และ rest parameter
โดย parameter แบบปกติต้องกำหนด parameter เพื่อรับค่าให้ตรงกับค่าที่ส่งเข้ามาไม่สามารถรับค่าเกิน หรือค่าที่ส่งเข้ามาไม่ครบจำนวน
ส่วน rest parameter จะแปลงค่าที่ส่งเข้ามาให้อยู่ในรูปแบบของ array จึงสามารถกำหนดค่าได้อย่างยืดหยุ่นกว่า

*/