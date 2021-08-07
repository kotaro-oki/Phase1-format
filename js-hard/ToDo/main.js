'use strict';

{
    const input = document.getElementById('add-area');
    const addBtn = document.querySelector('.add-btn');
    const lists = document.querySelector('.lists');


    addBtn.onclick = function () {
        if (input.value === '') {
            alert('入力してくれっぴ');
            return;
        }
        const text = input.value;
        const list = document.createElement('li');
        list.textContent = text;
        const delBtn = document.createElement('button');
        delBtn.textContent = '完了';
        delBtn.onclick = function () {
            delBtn.parentNode.remove();
        }
        list.appendChild(delBtn);
        lists.appendChild(list);
        input.value = '';
    };
}