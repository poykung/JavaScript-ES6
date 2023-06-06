//search in array

//ค้นหาข้อมูลภายใน array
//indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่เจอ ถ้าไม่มีข้อมูลจะได้ undifined
//findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าไม่เจอจะได้ -1

const animals = ["bear","tiger","lion","dog","cat","panda"];

const getani = animals.indexOf("tiger"); //ผลการค้นหาจะได้ตำแหน่งเลข index
const select = animals.find(element=>element==="bear"); //ผลการค้นหาจะได้ข้อมูลที่อยู่ใน array
const search = animals.findIndex(element=>element ==="dog"); //ผลการค้นหาจะได้ตำแหน่ง index ที่อยู่ใน array
console.log(select);