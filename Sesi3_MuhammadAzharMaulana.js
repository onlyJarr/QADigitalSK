let i = 4;

for (let f = 1; f <= i; f++) {
    let x = "";
    for (let j = 1; j <= f; j++) {
        try{
            x += "*";
        }catch(error){
            console.log(error);
        }
        
    }
    console.log(x);
}



