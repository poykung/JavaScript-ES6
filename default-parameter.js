personal = (fname,lname='kung')=>{ 
    //default parameter เป็นการกำหนดค่าเริ่มต้นให้กับ parameter ในกรณีที่ไม่ได้มีการส่งค่าเข้ามาทำงานโดยค่าที่กำหนดจะถูกกำหนดเป็นค่าเริ่มต้น
    const showdata = `ชื่อลูกค้า ${fname} นามสกุล ${lname}`
    return showdata;
}

console.log(personal('poy',))