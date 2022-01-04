

const hello =()=>{
  return "Hello";
}
const world =()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("World!");
    }, 2000);
  })
}

const callFunction = async function(){
  let val1 = hello();
  console.log(val1);
  let val2 = await world();
  console.log(val2);
}

callFunction();