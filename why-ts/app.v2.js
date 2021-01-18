// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * 
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * 
 * @param {number} id 
 * @returns {Promise<User>}
 */
function fetchUser(id){
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

// async function JSDOc 이 주석 못 잡는 것 같다. 
// async function startApp() {
//   try {
//     const { data: user } = await fetchUser(1);
//         console.log('user', user)
//         // TODO: 이름, 이메일, 주소 표시하기
//   }
//   catch(error){
//     console.error(error)
//     // handleError 
//   }
// }


async function startApp() {
  fetchUser(1).then(function(response){
    // Promise는 잘 잡음 
    console.log(response.address.city)
  })
}

startApp();
