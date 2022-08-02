const customSelect = () => {
  
    const elSelectCustom = document.getElementsByClassName("select__wrapper")[0];

    if(!elSelectCustom) return

    const elSelectCustomValue = elSelectCustom.querySelector('.select__value');
    const elSelectCustomOptions = elSelectCustom.querySelectorAll('.select__options-item');
    

    for(let i = 0; i < elSelectCustomOptions.length; i++) {
        elSelectCustomOptions[i].addEventListener("click", (e) => {
            elSelectCustomValue.textContent = e.target.textContent;
            elSelectCustom.classList.remove("isActive");
          });
    }
    
    elSelectCustomValue.addEventListener("click", (e) => {
      elSelectCustom.classList.toggle("isActive");
    });
    
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectCustom.contains(event.target);
      if (didClickedOutside) {
        elSelectCustom.classList.remove("isActive");
      }
    });
}

export default customSelect;