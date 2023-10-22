//Task one//

const arr = ['Hiko', 'Fahad', 'Kanan'];

for (let index = 0; index < arr.length; index++) {
  if (arr[index] === 'Fahad') {
    arr[index] = 'Classified';
    break;
  }
}

console.log(arr);

//Task Two//

let array = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

console.log(`Episode 4: ${array[0]}`);
console.log(`Episode 5: ${array[1]}`);
console.log(`Episode 6: ${array[2]}`);

//part two//

let array1 = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
for(let index = 0;index<array1.length;index++){
    const element= array1[index];
    console.log(`Episode ${index+4}: ${element}`);
}


//Task three//

let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];

function getTotalsalary(){
    let Totalsalary=0
    for(let Index =0;Index<salary.length;Index++){
        const element1 = salary[Index];
        for(let J =0;j<element1.length;j++){
            Totalsalary+=element1[j]
        }
    }
    return Totalsalary
}

function getMonthysalary(num){
    let Montlysalary = []
    for(let Index =0;Index<salary.length;Index++){
        Montlysalary.push(salary[Index][num-1]);
    }
    return Montlysalary;
}

console.log(getMonthysalary(6))

function getQuartersalary(num){
    let Quatertotal = 0;
    let QuaterStart = (num-1)*3;
    let QuaterEnd = QuaterStart+3;
    for (let Index =0;Index<salary.length;Index++) {
        for(let q = QuaterStart; q<QuaterEnd;q++){
            Quatertotal += salary[Index][q];
        }
    }
   return Quatertotal;
}

getQuartersalary();


//Task four//

let input =prompt("Enter five different digits splited with commas");
let Array = input.split(",");
const min = Array.reduce((a, b) => Math.min(a, b))
console.log(min)


//task five//



const arr0 = "32, 31, 34, 36, 31";
const newArr0=arr0.replaceAll(",",";");
console.log(newArr0);




