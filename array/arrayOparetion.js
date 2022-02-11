const students = [
    {
        id:1,
        username: 'Mst Toma Akter',
        age: 18
    },
    {
        id:2,
        username: 'Mst Amena Akter',
        age: 19
    },
    {
        id:3,
        username: 'Mst Sabina Akter',
        age: 20
    }
]

const findOneStudent = students.find((val, index)=>{
    return val.id === 1
})

// mutalbe 
// const deleteOneItem = students.findIndex((val)=>{
//     return val.id === 1
// })

// const arr1 = students.splice(deleteOneItem, 1)

// imutable
const deleteOneItem = students.filter((val)=>{
    return val.id !== 1
})

console.log(students);
console.log(deleteOneItem);