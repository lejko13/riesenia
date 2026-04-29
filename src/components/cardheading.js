import { html ,render} from "lit-html";
import {AllcategoriBtn} from './allcategoribtn'

export const Cardheading = ({text,number,info}) => {
    console.log(info.length);
    

    return html`
    <div class = "c-wrappercardheadenig">
        <div class = "c-mainWrapper">
         <span class = "c-maincategorytaext">${text}</span>
            <div class ="c-rouder">${number}</div>
        </div>
       

    <div
            class="c-gridmap"
            style=${`display: grid; grid-template-columns: ${
                info?.length > 3 && info?.length <= 8 ? "1fr 1fr" : "1fr"
            };`}
            >
            ${info?.map(
                (item) => html`
                <div class="c-wrapperifno">
           <span class = "c-linia"></span>
                    <div>${item.name}</div>
                </div>
                `
            )}
    </div>
        <div>${AllcategoriBtn()}</div>
            </div>

    
    </div>
    `}