
import { html } from "lit-html";

export const Popup = ({ show, text }) => {
  return html`
    <div
      class="c-popup"
      role="status"
      aria-live="polite"
      aria-hidden="${show ? "false" : "true"}"
      style="
        opacity: ${show ? 1 : 0};
        pointer-events: ${show ? "auto" : "none"};
      "
    >
      <span class="c-titlepopoup">
        ${text}
      </span>
    </div>
  `;
};