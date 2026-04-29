import { html,render } from "lit-html";
import {ShoppingBtn} from './shopingbtn'

export const Counter = ({count,minusClick,plusClick}) => {


    
    return html`
    <div class = "c-counter">

    <div 
   @click=${minusClick}
    class = "c-antore">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg></div>

    <span class = "c-midlle-coute">${count}</span>

      <div 
         @click=${plusClick}
      class = "c-antore"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg></div>
  
    
   </div>
    `
}