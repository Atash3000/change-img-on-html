
const imgContainer = document.querySelector(".images");

const createImage = ()=>{
return new Promise((resolve,reject)=>{
  let random = Math.floor(Math.random()*3)+1
  let newImg= document.createElement('img')
newImg.className='img-pic'
  resolve(newImg.src=`./images/img-${random}.jpg`)
  document.querySelector('.images').appendChild(newImg)
  reject('i dont know what to write in reject.. maybe it shoud delete photo after each click')
})
}

// create a wait function
const waitFor = function () {
return new Promise(resolve=>{
setTimeout(resolve,2000)
})

}

document.body.onclick=()=>{
  waitFor().then(resolved=> createImage(resolved))
  .catch(rejected=>console.log(rejected))
}



//call createImage with then and catch



