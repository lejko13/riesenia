import { html ,render} from "lit-html";
import {AllcategoriBtn} from './allcategoribtn'

export const Cardheading2 = ({text,number,info}) => {
    console.log(info.length);
    

    return html`
    <div class = "c-wrappercardheadenig">
        <div class = "c-mainWrapper">
         <span class = "c-maincategorytaext">${text}</span>
            <div class ="c-rouder">${number}</div>
        </div>
       

    <div
            class="c-gridmap2"

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