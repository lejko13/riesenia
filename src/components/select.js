import { html } from "lit-html";

export const Select = ({ text, name, value, onChange, options = [] }) => {
  return html`
    <div class="c-inputplaceholdern" @click=${(e) => e.stopPropagation()}>
      <span class="c-upText">
        ${text}<span class="c-colorinint"> *</span>
      </span>

      <select
      class = "c-select"
        name=${name}
        .value=${value}
        @change=${onChange}
      >
        ${options.map(
          (opt) => html`
            <option 
 
            value=${opt.value}>
              ${opt.label}
            </option>
          `
        )}
      </select>
    </div>
  `;
};