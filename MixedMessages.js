let names = ["Adrian","Bob","Charlie","Darren","Emily","Fanny","Garen","Henry","Isabelle",
"John","Kristin","Langdon","Mary","Nick","Owen","Prisha","Robert","Queen","Steven","Timmy","Uvana",
"Vex","Winson","Xenith","Yin","Zana"];
let adjectives = ["funny","scary","friendly","nice","easy-going","smart","good-looking",
"amicable","strict","helpful","hardworking", "awesome", "one of a kind"];
let occupations = ["police officer","server", "teacher", "friend", "person", "student", "CEO", "plumber", "neighbor",
"landlord", "gardener", "lawyer", "child", "adult", "soldier", "technician"];
const choose = (arr) =>{
    return arr[Math.floor(Math.random()*arr.length)];
}
let name = choose(names);
let adjective = choose(adjectives);
let occupation = choose(occupations);
console.log(`${name} is a ${adjective} ${occupation}`);