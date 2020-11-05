// Exercise 1 //
console.log("EXERCISE 1");
String.prototype.filter = function(str){
    return this.split(" ").filter(w => w!=str).join(" ");
	//return this.replaceAll(str, "");
}
console.log("This house is not nice".filter("not"));

// Exercise 2 //
console.log("\nEXERCISE 2");
Array.prototype.bubbleSort = function(){
    let noSwaps = false;
    while(!noSwaps){
        noSwaps = true;
        for(let j=0; j<this.length-1; j++){
            if(this[j]>this[j+1]){
                noSwaps = false;
                let aux = this[j];
                this[j] = this[j+1];
                this[j+1] = aux;
            }
        }
    }
    return this;
}
console.log([6,4,0,3,-2,-1].bubbleSort());

// Exercise 3 //
console.log("\nEXERCISE 3");
//3.1//
    console.log("  --With function constructor:");
    function Person1(inputName){
        this.name = inputName;
    }
	function Teacher1(inputNname, subject){	// const Teacher1 = function(inputName){
        Person1.call(this, inputName);
		this.subject = subject;
    }
    Teacher1.prototype = Object.create(Person1.prototype);
    //
    Teacher1.prototype.teach1 = function(){
        console.log("Teacher "+this.name+" is now teaching "+ this.subject);
    }
    const teacher = new Teacher1('Hua Wang','Math');
    teacher.teach1();

//3.2//
    console.log("  --With Object.create():");
    const Person2 = {
        name : "unknown"
    }
    const Teacher2 = Object.create(Person2);
    //
    Teacher2.teach2 = function(subject){
        console.log("Teacher "+this.name+" is now teaching "+subject);
    }
    const teacherWang = Object.create(Teacher2);
    teacherWang.name = 'Hua Wang';
    teacherWang.teach2("Math");

// Exercise 4 //
console.log("\nEXERCISE 4");
//4.1//
	console.log("  --With prototype approach:");
    const Person3 = {
        name : "unknown",
        age : 0,
        greeting : function(){
            console.log("Greetings, my name is "+this.name+" and I am "+this.age+" years old.");
        },
        salute : function(){
            console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
        },
    }

    const Student3 = Object.create(Person3);
    Student3.major = "null";
    Student3.greeting = function(){
        console.log("Hey, my name is "+this.name+" and I am studying "+this.major+".");
    }

    const Professor3 = Object.create(Person3);
    Professor3.department = "null";
    Professor3.greeting = function(){
        console.log("Good day, my name is "+this.name+" and I am in the "+this.department+" department.");
    }

    //objects created
    const kalu = Object.create(Professor3);
    kalu.name = "Obina Kalu";
    kalu.age = 40;
    kalu.department = "Computer Science";
    kalu.greeting();
    kalu.salute();

    const salazar = Object.create(Student3);
    salazar.name = "Pedro Salazar";
    salazar.age = 24;
    salazar.major = "Systems Engineering";
    salazar.greeting();
    salazar.salute();

//4.2//
    console.log("  --With function constructor approach:");
    function Person4(name, age){
        this.name = name;
        this.age = age;
    }
    Person4.prototype.greeting = function(){
        console.log("Greetings, my name is "+this.name+" and I am "+this.age+" years old.");
    };
    Person4.prototype.salute = function(){
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    };

    function Student4(name, age, major){
        Person4.call(this, name, age);
        this.major = major;
    }
    Student4.prototype = Object.create(Person4.prototype);
    Student4.prototype.greeting = function(){
        console.log("Hey, my name is "+this.name+" and I am studying "+this.major+".");
    }

    function Professor4(name, age, department){
        Person4.call(this, name, age);
        this.department = department;
    }
    Professor4.prototype = Object.create(Person4.prototype);
    Professor4.prototype.greeting = function(){
        console.log("Good day, my name is "+this.name+" and I am in the "+this.department+" department.");
    }

    //objects created
    const kalu4 = new Professor4("Obina Kalu", 40, "Computer Science");
    kalu4.greeting();
    kalu4.salute();

    const salazar4 = new Student4("Pedro Salazar", 24, "Systems Engineering");
    salazar4.greeting();
    salazar4.salute();