class customers {
    private FirstN: String;
    private LastN: String;
    private phone: String;
    private age: number;
    
    constructor(FirstN: String, LastN: String, phone: String, age: number) {
        this.FirstN = FirstN;
        this.LastN = LastN;
        this.phone = phone;
        this.age = age;
    }

    set setFirstN(FirstN: string) {
        this.FirstN = FirstN;
    }

    set setLastN(LastN: string) {
        this.LastN = LastN;
    }
    set setPhone(phone: String) {
        this.phone = phone;
    }
    set setAge(age: any) {
        this.age = age;
    }

    get getFirstN() {
        return this.FirstN;
    }

    get getLastN() {
        return this.LastN;
    }
    get getPhone() {
        return this.phone;
    }
    get getAge() {
        return this.age;
    }

    toString() {
        return "Customer's Name is " + this.FirstN + ", " + this.LastN + " and his phone is " + this.phone + " and he is " + this.age + " years old" + "<br>";
    }

}


var cust1 = new customers("alaa", "taha", "0548203400", 20);
var cust2 = new customers("jaeda", "zuabi", "0533304059", 21);

document.write(cust1.toString())
document.write(cust2.toString())