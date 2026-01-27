
const array= [1, -2, 3, -4, 5];
const newArr=array.filter((element)=>{
    return element>=0;
})
console.log(newArr)



document.getElementById("demo").innerHTML = "New array : "+newArr;