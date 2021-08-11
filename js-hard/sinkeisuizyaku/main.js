'use strict';

{
    const field = document.getElementById('field');

    class Panel {
        constructor() {
            this.panel = document.createElement('div');
            //ランダムな数を指定
            this.num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
            this.panel.classList.add('card','back');
            
            field.appendChild(this.panel);
        }
        
        getNum(){
            return this.num;
        }
    }

    
    const nums = [];
    for (let i = 1; i <= 4; i++) {
        nums.push(i);
        nums.push(i);
    }
    
    let panels = [
        new Panel(),
        new Panel(),
        new Panel(),
        new Panel(),
        new Panel(),
        new Panel(),
        new Panel(),
        new Panel(),
    ]
    
    let clickCount = 0;
    let selectPanelIndex;
    
    panels.forEach((element,index) => {
        element.panel.addEventListener('click', () => {
            clickCount++;
            console.log(element.getNum());
            element.panel.classList.remove('back');
            element.panel.textContent = element.num;

            if(clickCount%2 === 1){
                //最初に選択したpanelの左から数えて０から何番目かを取得
                selectPanelIndex = index;
            }else if(clickCount%2 === 0){
                setTimeout(function(){
                    if(element.num !== panels[selectPanelIndex].num){
                        element.panel.classList.add('back');
                        element.panel.textContent = '';
                        
                        panels[selectPanelIndex].panel.classList.add('back');
                        panels[selectPanelIndex].panel.textContent = '';
                    }else{
                        element.panel.style.visibility = 'hidden';
                        panels[selectPanelIndex].panel.style.visibility = 'hidden';
                    }
                },500)
            }

        })
    })
}