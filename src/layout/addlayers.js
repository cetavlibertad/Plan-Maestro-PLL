import React from 'react'


const test = (op) =>{
    const objt = document.querySelectorAll(".remodelation")
    console.log(op.build)
    if (op.build == false) {
        objt.forEach((element)=>{ element.style.display = 'none'})
    }else{
        objt.forEach((element)=>{ element.style.display = 'block'})
    }

   
}

export default test