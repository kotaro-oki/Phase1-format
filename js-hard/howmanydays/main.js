'use strict';

{
    const textArea = document.createElement('p');
    const body = document.querySelector('body');
    body.appendChild(textArea);

    let difD;
    let difH;
    let difM;
    let difS;

    function show(){
        setTimeout(() => {
            cal();
            textArea.textContent = `ドラえもんが生まれるまで後${difD}日${difH}時間${difM}分${difS}秒`
            show();
        }, 1000);
    }

    show();

    function cal(){
        const nowDate = moment();
        const futureDate = moment('2112-09-03');
        const dif = futureDate.diff(nowDate,'seconds');
        difS = dif%60;
        difM = (Math.floor(dif/60))%60;
        difH = (Math.floor(Math.floor(dif/60)/60))%24;
        difD = (Math.floor(Math.floor(Math.floor(dif/60)/60)/24));
    }

}