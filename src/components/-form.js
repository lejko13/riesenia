import { html } from "lit-html";

import { validateEmail } from '../api/emailApi'

import {ShoppingBtn} from '../components/shopingbtn'
import {Input} from '../components/input'
import {Select} from '../components/select'

import {state} from '../pages/solution'
import {timer} from '../pages/solution'

 
export const Form = ({klik}) => {



const prazdny = []

const rules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Neplatný email"
  },

  phone: {
    pattern: /^(?:\+421|0)\d{9}$/,
    message: "Neplatné telefónne číslo"
  },

  name: {
    pattern: /^[A-Za-zÁ-ž\s]{2,}$/,
    message: "Zadaj meno a priezvisko"
  },

  witch: {
    pattern: /.+/,
    message: "Vyber možnosť"
  }
};

const klik43 = (e) => {
  state.form.email = e.target.value.trim()
  .replace(/\s+/g, " ");

}

const klik2 = (e) => {
   state.form.name = e.target.value.trim()
  .replace(/\s+/g, " ");

}

const klik3 = (e) => {
   state.form.phone = e.target.value.trim()
  .replace(/\s+/g, " ");

  
}

const klik5 = (e) => {
   state.form.witch = e.target.value

}

const handleBannerClick = async (from) => {

  const error = [];

  for (const key in rules) {

    const podmienka = rules[key].pattern.test(from[key]);
    const veta = rules[key].message;

    if (!podmienka) {
      error.push({
        hodnota: key,
        veta:veta
      });
      timer({props:`${error[0].veta}`})
      return
    }
     

  }

  if (error.length === 0) {

      const res = await validateEmail(state.form.email.trim());

  
  if (!res.success) {
    timer({ props: res.message });
    return;
  }


    

  

    state.modal = false;
  
    Object.assign(state.form, {
      email: "",
      phone: "",
      name: "",
      witch: ""
    });
    document.body.style.overflow = "";
        timer({ props: "Všetko je v poriadku E-mail odoslany"});
    renderApp();
    
  }
     


};

 return html`
  <div class="l-form" @click=${(e) => e.stopPropagation()}>
    
    <div @click=${klik} class="c-cross">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-x-icon lucide-x"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </div>

    <div class="c-uptext">
      <div class="c-textmain">
        Tajná ponuka produktov Dewalt len pre vás
      </div>
      <div class="c-smallText">*povinné polia</div>
    </div>

    <div class="c-uptext">
      ${Input({
        text: "E-mail",
        name: "email",
        value: state.form.email,
        onInput: klik43
      })}
    </div>

    <div class="c-uptext2">
      ${Input({
        text: "Meno a Priezvisko",
        name: "nameandsurname",
        value: state.form.name,
        onInput: klik2
      })}

      ${Input({
        text: "Telefónne číslo (mobil)",
        name: "number",
        value: state.form.phone,
        onInput: klik3
      })}
    </div>

    <div class="c-uptext">
      ${Select({
        text: "Odkiaľ si sa dozvedel",
        name: "source",
        value: state.form.witch,
        onChange: klik5,
        options: [
          { value: "google", label: "Google" },
          { value: "facebook", label: "Facebook" },
          { value: "instagram", label: "Instagram" }
        ]
      })}
    </div>

    <div class="c-bottomForm">
      
      <button
        class="c-solution-banner__content__button"
        @click=${() => handleBannerClick(state.form)}
      >
        <span class="sb-text">Ziskat tajnu ponuku</span>
        <svg
          class="sb-icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16669M15.8333 10L9.99996 15.8334"
            stroke="currentColor"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="c-text">
        <div class="c-textwrapper">
          <span>
            Odoslaním formuláru súhlasíte so
            <span class="c-textcolor">spracovaním osobných údajov</span>
          </span>
        </div>
      </div>

    </div>

  </div>
`;}