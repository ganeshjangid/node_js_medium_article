const _=require('lodash');
const obj11 = {
  name: 'Ram',
  age: 20,
  location: {
    city: 'NY',
    state: 'NY'
  }
};

const obj22 = {
    name: 'Ram',
    age: 20,
    location: {
      city: 'NY',
      state: 'NY'
    }
  };

  console.log(_.isEqual(obj11,obj22));
  

console.log('=====================================================');

const obj1 = { name: 'David' };
console.log('obj1:', _.isEmpty(obj1)); // false

const obj2 = {};
console.log('obj2:', _.isEmpty(obj2)); // true

const array1 = [];
console.log('array1:', _.isEmpty(array1)); // true

const array2 = [2, 3];
console.log('array2:', _.isEmpty(array2)); // false

const nullValue = null;
console.log('nullValue:', _.isEmpty(nullValue)); // true

const undefinedValue = undefined;
console.log('undefinedValue:', _.isEmpty(undefinedValue)); // true

console.log('====================sortby=================================');


const users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];

 console.log(_.sortBy(users,(user)=> user.age));
  
 console.log('====================orderby=================================');

 console.log(_.orderBy(users,['user'],['desc']));
 
 console.log('===================Union=================================');
// The union method returns the unique values from all the arrays passed.

console.log(_.union([1], [1, 2, 3], [-1, 0, 4], [2, 2, 3]));


const searchBox = document.querySelector("input");
const onSearchText = (event) => {
  const query = searchBox.value;
  axios.get(`https://www.reddit.com/search.json?q=${query}`)
  .then(result => {
   let output = "<ul>";
    result.data.data.children.map(res => {
     output +=`<li>${res.data.title}</li>`;
    });
   output +="</ul>";
   document.querySelector('#result').innerHTML = output;
 });  
};
const debFunction = _.debounce(onSearchText, 1000);