const accordion = () => {

  const acc = document.getElementsByClassName('accordion');

    var windowWidth = window.innerWidth;


    if(windowWidth > 992) {
        for (let i = 0; i < acc.length; i++) {
            acc[i].classList.add("active");   
            let panel = acc[i].nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        return;
    }else {
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {             
                this.classList.toggle("active");     
                    let panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }  
            });
        }
    }

}

const accArtical = () => {
  
  const accArtical = document.querySelectorAll('.accordion--artical');

  for(let i = 0; i < accArtical.length; i++) {
    accArtical[i].classList.remove('is-active')
  accArtical[i].addEventListener('click' , function () {
    if(accArtical[i].classList.contains('is-active')) {
      accArtical[i].classList.remove('is-active')
    }else{
      accArtical[i].classList.add('is-active')
    }
  })
  }
}


const removeEvent = (handler) => {
  
    const acc = document.getElementsByClassName('accordion');
  
    for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener('click', handler)
    }
}






export {accordion, accArtical};