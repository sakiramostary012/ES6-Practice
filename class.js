class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kholil school";
    }
}
const student1 = new student(012, "Sakira");
const student2 = new student(013, "Sahara");
const student3 = new student(014, "Sakib");
console.log(student1, student2, student3);
console.log(student1.name, student2.name);