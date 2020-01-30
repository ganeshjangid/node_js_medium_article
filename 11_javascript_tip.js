// 1.
// !! (double-negation operator).



function Account(cash) {
    this.cash = cash;
    this.hasMoney = !!cash;
}

var account = new Account(100.50);
console.log(account.cash);
console.log(account.hasMoney);


var emptyAccount = new Account(0);
console.log(emptyAccount.cash); 
console.log(emptyAccount.hasMoney);


// 2. Converting to Number Using the + Operator
console.log('========================================');

function toNumber(strNumber) {
    return +strNumber;
}

console.log(toNumber("1234"));
console.log(toNumber("ACB"));
console.log(+new Date())


//3.  Short-Circuit Conditionals
//user && user.login();

//4.Default Values Using the || Operator
console.log('========================================');

function User(name,age){
    this.name=name || 'ganesh suthar';
    this.age=age || 27;
}

let user1=new User();
console.log(user1.name);
console.log(user1.age);


var user2 = new User("Barry Allen", 25);
console.log(user2.name); // Barry Allen
console.log(user2.age); // 25

//5. Caching the array.length in the Loop
console.log('========================================');
let array=[1,2,3,4,5,6];
for (let i =0, length=array.length; i< length; i++){
    console.log(array[i]);
}

//6. Getting the Last Item in the Array
console.log('========================================');
let count=array.length;
console.log(array[count-1]);

console.log(array.slice(-1));
console.log(array.slice(-3));



//7. Truncating Array
console.log('========================================');
console.log(array.slice(0,4));
array.length=2;
console.log(array);

//8. Replace All

console.log('========================================');
var string = "john john";
console.log(string.replace(/hn/,'ganesh'));
console.log(string.replace(/hn/g,'ganesh'));

// 10 merging array
console.log('========================================');
var array1 = [1,2,3];
var array2 = [4,5,6];
console.log(array1.concat(array2));
console.info('this is method not suitable for large array combine for memory issue');

console.log(array1.push.apply(array1,array2));
console.log(array1);

//11. Shuffling an Array’s Elements
console.log('========================================');

var list=[1,2,3];
console.log(list.sort(()=> Math.random() - 0.5 ));


