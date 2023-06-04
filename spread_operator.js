//spread operator ใช้สำหรับกระจายตัวข้อมูลที่อยู่ใน arrays 

let $color = ["red","grenn","blue"];
let $newcolor = ["yellow","gray","white",...$color]; //สัญญาลักษณ์ ... เป็นการประกาศใช้ spread operator
let $allcolor = ["black"];  

$newcolor.push(...$allcolor); //หากไม่ใช้ spread operator ... ตัว array ที่ถูกเพิ่มเข้าไปต่อท้ายจะถูกมองว่าเป็น array 1 อัน[]

console.log($newcolor);