let user = {
    name: 'giorgi',
    age: 20,
    studentStatus: "active"
}

if (user.age <18 && user.studentStatus == "active"){
    console.log("hello");
}else if(user.name == 'levani'){
    console.log('hello levani');
}else if(user.age < 25){
    console.log('hello world');
}else{
    console.log('eror');
}