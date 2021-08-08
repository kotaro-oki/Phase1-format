'use strict';

{
    //ストップボタンたち
    const stop1 = document.getElementById('setTime1');
    const stop2 = document.getElementById('setTime2');
    const stop3 = document.getElementById('setTime3');
    const stops = [stop1,stop2,stop3];

    const start = document.getElementById('startTimer');

    // スロットボタンたち
    const slot1 = document.getElementById('nowTime1');
    const slot2 = document.getElementById('nowTime2');
    const slot3 = document.getElementById('nowTime3');
    const slots = [slot1,slot2,slot3];

    let isRolling = false;
    let count = 0;

    start.addEventListener('click',() => {
        if(isRolling)return;
        isRolling = true;
        slots.forEach((slot,index) => {
            roll(index);
        })
    });

    let nums = [0,0,0];
    let timeoutIds = [undefined,undefined,undefined];

    //分からんけど（間接的に呼び出すぽい）これでstack max のエラーは解除された
    function roll(i) {
        timeoutIds[i] = setTimeout(() => {
            nums[i]++;
            if(nums[i]>9)nums[i]=0;
            slots[i].textContent = nums[i];
            roll(i);
        },100);
    }


    stops.forEach((stop,index) => {
        stops[index].addEventListener('click', () => {
            clearTimeout(timeoutIds[index]);
            count++;
            if(count === 3){
                check();
                count = 0;
                isRolling = false;
            }
        });
    })

    function check() {
        if(slot1.textContent === slot2.textContent && slot1.textContent === slot3.textContent){
            alert('ないすぅ');
        }else{
            alert('もう一回やろう');
        }
    }



}