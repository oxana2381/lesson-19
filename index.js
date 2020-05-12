 let button=document.querySelectorAll('button' );

step=button[0].style;
step.padding='15px 25px';
step.color='white';

step=button[1].style;
step.padding='15px 25px';
step.color='white';

step=button[2].style;
step.padding='15px 25px';
step.color='white';


 button[0].style.backgroundColor='steelblue';
 button[1].style.backgroundColor='olivedrab';
 button[2].style.backgroundColor='salmon';


let page=document.querySelector('p');


class Buttons {
    constructor(elem){
        this.elem=elem;
        elem.onclick=this.onClick.bind(this);
       
    }
    first(){
    
        page.textContent='You clicked First button';
    }
    second(){
        page.textContent='You clicked Second button';
    }
    third (){
        page.textContent='You clicked Third button'
    }
    onClick(event){
        let action=event.target.dataset.action;
        if (action){
            this[action]();
        }
     };
}
  new Buttons(menu);
  

for(let elem of document.querySelectorAll('div')){

elem.addEventListener('click',e=>
   console.log(event.target.tagName,event.currentTarget.tagName));
};












