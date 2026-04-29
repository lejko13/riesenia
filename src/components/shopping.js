import { html,render } from "lit-html";
import {ShoppingBtn} from './shopingbtn'
import {Counter} from './counter'
export const Shopping = ({prize,count,minusClick,plusClick,shoppingcard}) => {

    console.log(prize);
    
    return html`
    <div class = "c-shopping">
    <div class = "c-btnshop"> 



    ${Counter({
        count:count,
        minusClick:minusClick,
        plusClick:plusClick
    })}
    ${ShoppingBtn({
        shoppingcard:shoppingcard
    })}

 
  
    
    
    </div>
   </div>
    `
}


