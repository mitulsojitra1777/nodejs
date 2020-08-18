var studemt=function(){
    this.name="mitul";
    this.age=20;
    this.email="mitul@gmail.com";
}
studemt.prototype={
    address:"vichhavad",
    gename:function(){
        return this.name;
    }
}
var stud=new studemt();
console.log(stud.gename());