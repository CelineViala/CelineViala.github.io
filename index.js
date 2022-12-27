const itemsElms=document.querySelectorAll('.item');
const fractalElm=document.querySelector('.fractals-detail');
const returnLinks=document.querySelectorAll('.return');
const blocsElm=document.querySelector('.blocs');
const detailElms=document.querySelectorAll('.detail');
const loc=window.location.href

itemsElms.forEach((itemElm)=>{

    itemElm.addEventListener('click',(e)=>{
        const elm=document.querySelector(`.${e.currentTarget.dataset.page}`);
        elm.style.display='flex';
        blocsElm.style.display="none";
       
    })
})
returnLinks.forEach(returnLink=>{

    returnLink.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log("test")
        blocsElm.style.display="flex";
        detailElms.forEach(elm=>{
            elm.style.display="none"
        })
    })
})

window.onpopstate = function(e) {
        
      
        window.location.href='index.html'
        
    
}