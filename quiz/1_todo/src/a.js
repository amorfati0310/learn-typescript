let arr = [
  {gender: 'male', name: 'john'},
  {gender: 'male', name: 'john2'},
  {gender: 'female', name: 'john3'}
]

let filtered = arr.filter(function(item){
  return item.gender === 'female'
})

console.log(filtered)