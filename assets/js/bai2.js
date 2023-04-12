function numberOneTriangle(n){    
    if(1<n  && n <10){
        for(let i =1;i<=n;i++){
            for(let j =1;j<=i;j++){
                 document.write("* ")
            }
           document.write("<br/>");
        }
    } else{
        alert('Giá trị nhập bị sai!');
    }
    
}
let n = Number(prompt('Nhập giá trị  n'));
numberOneTriangle(n);
