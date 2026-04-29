import { html,render } from "lit-html";

export const Input = ({text,children,name,value,onInput}) => {

    return html`
    <div class = "c-inputplaceholdern">
    <span class = "c-upText">${text}<span class = "c-colorinint"> *</span></span>

        <input
        class = "c-inputpalce"
      name=${name}
      .value=${value}
      @input=${onInput}
    />

    </div>
    `
}