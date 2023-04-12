const $numberA = document.getElementById('number-a');
const $numberB = document.getElementById('number-b');
const $result = document.getElementById('result');
var btn_kt = document.querySelector("#btn_kt");

function check(e){
    e.preventDefault();
    if($numberA.value.trim()==""){
        alert('Bạn chưa số a');
        return;
    }else if($numberB.value.trim()==""){
        alert('Bạn chưa nhập số b');
        return;
    }else if(Number($numberA.value)  > Number($numberB.value)){
        alert('Số a phải bé hơn số b');
        return;
    }  

    var tong = 0;
    for (let i = Number($numberA.value); i <= Number($numberB.value); i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }


        if (i > 1 && flag == 0) {
            tong = tong + i;

        }
    }
    $result.innerHTML= 'Tổng các số nguyên tố trong khoảng '+$numberA.value+' và '+$numberB.value+' là '+ tong;
    console.log(tong);
    
  

}
btn_kt.addEventListener('click', check);