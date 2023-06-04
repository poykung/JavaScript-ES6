//arrow function การลดรูปการเขียน function


//แบบเดิม
function fullname(){
    return "Thaweekhun Ninkhammee";
}
$print = fullname();
console.log($print);

//arrow function 
getname=(fname,lname)=>fname+lname;
console.log(getname("Thaweekuhn","Ninkhammee"));


