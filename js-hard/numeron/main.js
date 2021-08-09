'use strict';

{
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const countShow = document.getElementById('remainTurn');

    const nums = [];
    for (let i = 0; i <= 9; i++)nums[i] = i;

    const cpNums = [];
    for (let i = 0; i <= 2; i++) {
        cpNums[i] = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
    }

    let originInputNums;
    let arrayInputNums;

    let countEat = 0;
    let countBite = 0;
    //残りゲーム回数
    let count =10;
    countShow.textContent = `あと${count}回`;


    function reset() {
        countEat = 0;
        countBite = 0;
    }

    function check() {
        reset();
        arrayInputNums.forEach((arrayInputNum, index) => {
            if (cpNums[index] === arrayInputNum) {
                countEat++;
            }
            cpNums.forEach(cpNum => {
                if (cpNum === arrayInputNum) {
                    countBite++;
                }
            });
        });
        // countEat分引いてバイトの値を出す
        countBite -= countEat;
    }

    //条件に適している状態ならtrue;
    let isOK = true;

    input.addEventListener('keyup',() => {
        if(input.value.length === 3){
            button.focus();
        }
    })

    button.addEventListener('click', () => {

        originInputNums = input.value;
        arrayInputNums = originInputNums.split('').map(Number);

        isOK = true;

        exceptionHandling();

        //addEventListenerの引数となっている関数を脱出
        if(isOK === false)return;

        check();

        alert(`${countEat}EAT ${countBite}BITE`)
        if(countEat===3){
            alert('正解');
        }
        input.value = '';
        input.focus();
        
        countCheck();
    })

    function exceptionHandling(){
        if(arrayInputNums.length !== 3){
            alert('3文字入力しようね');
            isOK = false;
            return;
        }
        if(arrayInputNums.every((v,i,self) => self.indexOf(v) === i)){
            console.log('ok');
        }else{
            alert('それぞれ違う数を入力しようね');
            isOK = false;
            return;
        }
    }
    function countCheck(){
        count--;
        countShow.textContent = `あと${count}回`;
        if(count <= 0){
            alert('残念！しっぱい！もう一回やってねん');
            location.reload();
        }
    }


}