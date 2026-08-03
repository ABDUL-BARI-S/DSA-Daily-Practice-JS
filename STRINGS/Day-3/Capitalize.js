let str = "hello world javascipt";
let modstr = '';

for (let i = 0; i<str.length;i++){
    if(i === 0 ){
        modstr += str[i].toUpperCase();
       
        
    }else if(str[i-1] === ' '){
        
      modstr +=  str[i].toUpperCase();
      
       
    }
    else {
       modstr +=  '' + str[i];
      
    }
}
console.log(modstr);
