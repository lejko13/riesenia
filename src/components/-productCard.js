import { html,render } from "lit-html";
import {CardBtn} from './cardBtn'
import {IconCard} from './iconbtn'
import { StarComponent } from './-starComponent';
import {Crossprizr} from './crossprice'
import {Shopping} from './shopping'
let photos = [
    { i: "1", photo: "/vrtacka1.png" },
    { i: "2", photo: "/vrtacka2.png" }
];

let icon = [
  {
    i: 0,
    svg: html`
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" 
        viewBox="0 0 24 24" fill="none" stroke="currentColor" 
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
      </svg>
    `
  },
  {
    i: 1,
    svg: html`
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"  
        viewBox="0 0 24 24" fill="none" stroke="currentColor" 
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3v18"/>
        <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/>
        <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/>
        <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/>
        <path d="M7 21h10"/>
      </svg>
    `
  }
];


export const ProductCard = ({shoppingcard,minusClick,plusClick,item,stock,current,count,priceWithoutVAT,salePrice,onClick,data,onEnter,onLeave,isActive,active,hodnotenie,name,sku,prize}) => {
    const image = photos.find(p => p.i === item.id);



const mapBtn = item.badges

    return html`
  <div class="c-productCard">

    <div
      class="c-photoWrapper"
      @click=${onClick}
      @mouseenter=${onEnter}
      @mouseleave=${onLeave}
    >

      <div class="c-wrapper-up">

        <div class="c-wrapper-btn">
          ${mapBtn.map((item) =>
            CardBtn({
              text: item.label,
              props:
                item.label === "Novinka"
                  ? "background-color: green;"
                  : "background-color: purple;"
            })
          )}
        </div>

        <div
          class="c-wrapper-btn"
          style=${`opacity: ${item.isActive ? 1 : 0};`}
        >
          ${icon.slice(0, 2).map((item) =>
            IconCard({
              item: item,
              icon: item.svg
            })
          )}
        </div>

      </div>

      <img class="c-picture" src=${image?.photo} alt="" />

    </div>

    <div class="c-textwrapper">

      <div class="c-starwrapper">
        <div>${StarComponent({ active })}</div>
        <div class="c-texttype">(${hodnotenie})</div>
      </div>

      <div class="c-starwrapper">
        <span class="c-thickName">${name}</span>
      </div>

      <div class="c-starwrapper">
        <span class="c-textsmall">${sku}</span>
      </div>

      <div class="c-starwrapper">
        <div class="c-prizing">

          ${Crossprizr({ prize })}

          <span class="c-mainprize">
            ${salePrice}${current}
          </span>

          <span class="c-textsmall">
            ${priceWithoutVAT}€ bez DPH
          </span>

        </div>
      </div>

      <div class="c-starwrapper">
        <span class="c-greenText">${stock}</span>
      </div>

      ${Shopping({
        prize: "kook",
        minusClick,
        plusClick,
        count,
        shoppingcard
      })}

    </div>

  </div>
`;
};


//  <div class="c-textwrapper">${data}</div>