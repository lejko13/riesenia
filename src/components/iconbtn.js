import { html } from "lit-html";

export const IconCard = ({item,onClick,icon}) => {
        return html`<div class = "c-iconBtn" >
        <div class = "c-icon">${icon}</div>
        </div>`
}