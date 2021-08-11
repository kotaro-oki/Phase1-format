'use strict';

{
    const table = document.getElementById('view');
    const button = document.getElementById('hitNum');


    //arrs = それぞれ１５個ずつの数の数列が入った配列
    let arrs = Array(5);
    for (let i = 0; i < 5; i++) {
        arrs[i] = [...Array(15)].map((_, j) => j + 1 + i * 15);
    }

    // ランダムに取得する５個ずつの数の配列を保存する配列
    let splicedArrs = Array(5);
    for (let i = 0; i < 5; i++) {
        splicedArrs[i] = [];
    }

    // ランダムに値を取得しつつ、tdに入れてtrにアペチャイしてtrごとにtabkeにアペチャイしてる
    arrs.forEach((v, index) => {
        for (let i = 0; i < 5; i++) {
            splicedArrs[index][i] = v.splice(Math.floor(Math.random() * v.length), 1)[0];
        }
    })

    const letters = ['B', 'I', 'N', 'G', 'O'];
    const trHead = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
        const tdHead = document.createElement('td');
        tdHead.textContent = letters[i];
        trHead.appendChild(tdHead);
    }
    table.appendChild(trHead);


    //反転して入れる
    for (let i = 0; i < 5; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 5; j++) {

            const td = document.createElement('td');
            td.textContent = splicedArrs[j][i];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    table.rows[3].cells[2].innerText = 'FREE';

    button.addEventListener('click', () => {

    })



}