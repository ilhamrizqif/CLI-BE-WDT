let ctt=(a,b)=>{
 
    let x = 0
    let y=0
 
    a.forEach( (value,index)=>{
 
     let aa = a[index]
     let bb = b[index]
     
     if (aa ===bb)
       return;
 
      aa>bb ? x+=1 : y +=1
 
    })
    return [x,y]
 
 }
 
 let ab =ctt([5,6,7],[3,6,10])
 console.log(ab)