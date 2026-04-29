import { html } from "lit-html";


export const CardBtn = ({item,text,props}) => {

      return html`
      <button class = "c-btn-card" style=${props}>${text}</button>
      `
}