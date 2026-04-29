import { html ,render} from "lit-html";
import { loadData } from "../dataLoader.js";
import {ProductCard} from '../components/-productCard.js'
import {renderLayout} from '../main.js'
import {Cardphoto} from '../components/cardphoto.js'
import {Cardheading} from '../components/cardheading.js'
import {Popup} from '../components/popup.js'
import {Cardheading2} from '../components/cardheading2.js'
import {Form} from '../components/-form.js'




/**
 * Solution Page
 */


//main state


export let state = {
  data: null,
  cart:[],
  pop:false,

  text:"",
  form:{
  email: "",
  phone: "",
  name: "",
  witch:"",

  
},
modal:false

};

//rerender app
const renderApp = () => {
  renderLayout(html`
    ${renderModal()}
    ${renderSolutionPage(state.data)}
  `);
};


 


//modal open
const handleCtaClick = () => {
  state.modal = true;
  document.body.style.overflow = "hidden";
  renderApp(); 
};

//modal open
const closeModal = () => {
  state.modal = false;
  Object.assign(state.form, {
    email: "",
    phone: "",
    name: "",
    witch: ""
  });
  document.body.style.overflow = "";
  renderApp();
};



//modal render
const renderModal = () => {
  if (!state.modal) return html``;

  return html`
    <div class="modal" @click=${closeModal}>
      <div @click=${(e) => e.stopPropagation()}>
        ${Form({
          klik: closeModal
        })}
      </div>
    </div>
  `;
};



const handleBannerClick = () => {
  console.log("Banner button clicked");
};


const app = document.querySelector("#app");

   



// Solution main banner
const solutionBanner = (banner) => html`
    <div class="c-solution-banner">
        <div class="c-solution-banner__image">
        ${Cardphoto({
          radius: "border-radius: 0px",
          colorStyle: "opacity: 0.5",
          index:6,
          children:html`
        <div class="c-solution-banner__overlay"></div>
          <div class="c-solution-banner__content">
            <h1 class="c-solution-banner__content__title">${banner.title}</h1>
            <div class="c-solution-banner__content__description">${banner.description}</div>
            <button class="c-solution-banner__content__button" @click=${() => handleBannerClick()}>

                <span class="sb-text">${banner.ctaText}</span>

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
          </div>
          `
        })}
        </div>
       
    </div>
`;



// Solution CTA section
const solutionCta = (ctaBanner) => html`
    <div class="c-solution-cta">
      ${Cardphoto({
          index:5,
          radius: "border-radius: 0",
          colorStyle: "opacity: 1",
          children:html`
          <div class="c-solution-cta__content">
            <h2 class="c-solution-cta__content__title">${ctaBanner.title}</h2>

            <div class="c-solution-cta__content__description">${ctaBanner.description}</div>

            <button class="c-solution-cta__content__button" @click=${() => handleCtaClick()}>
                <span class="sc-text">${ctaBanner.ctaText}</span>

                <svg
                    class="sc-icon"
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
        </div>
          `
        })}
       
  
        
    </div>
`;




const root = document.getElementById("app");





// pop up 
export const timer = ({ props }) => {
  state.pop = true;
  state.text = props;
  const el = document.createElement("div");
  el.className = "c-block";
  document.body.appendChild(el);
  renderApp();

  setTimeout(() => {
    state.pop = false;
    state.text = "";
    renderApp();

    el.remove(); 
  }, 2000);

};
// pop up 


// product card
const solutionPro = (products) => html`
  ${products.map((item) => ProductCard({
    item: item,
    data: item.count,
    hodnotenie: item.reviewCount,
    name: item.name,
    sku: item.sku,
    prize: item.originalPrice,
    current: item.currency,
    stock: item.stock,
    count: item.count,

    shoppingcard: () => {
      const product = state.data.products.find(p => p.id === item.id);
      const card = state.cart.find(p => p.id === item.id);


      console.log(product);
      
      if (product.count === 0) {
        console.log("Zvol množstvo");
        timer({props:"Zvol množstvo"})
      }

      else if (card) {
       card.pocet += product.count;
        console.log(state);
        console.log(card);
         product.count = 0
         timer({props:`${product.name} pridane kosika celkovy pocet ${card.pocet}`})
        renderApp()    
      }


      else{
        state.cart.push({
          id:item.id,
          pocet:product.count
        })
        console.log(state);
          timer({props:`Celkovy pocet ${product.name} v kosiku je  ${product.count}`})
        product.count = 0
        renderApp()
        
      }},

    minusClick: () => {
      const product = state.data.products.find(p => p.id === item.id);

      if (product.count > 0) {
        product.count -= 1;
        renderApp();
      } else {
        console.log("minimum je 0");
             timer({props:"Minimum je 0"})
      }
    },

    plusClick: () => {
      const product = state.data.products.find(p => p.id === item.id);

      if (product.count < 10) {
        product.count += 1;
        renderApp();
      } else {
        console.log("maximum je 10");
           timer({props:"Maximum je 10"})
      }
    },

    salePrice: item.salePrice,
    active: item.rating,
    priceWithoutVAT: item.priceWithoutVAT,

    onEnter: () => {
      const product = state.data.products.find(p => p.id === item.id);
      product.isActive = true;
      renderApp();
    },

    onLeave: () => {
      const product = state.data.products.find(p => p.id === item.id);
      product.isActive = false;
      renderApp();
    },

    onClick: () => {
      const product = state.data.products.find(p => p.id === item.id);
      product.count++;
      renderApp();
    }
  }))}
`;
// product card
    
    


const top = (categories) => html`
  ${categories.slice(0, 2).map((item, index) => html`
    <div class="c-gridone">
      ${Cardphoto({
        item:item,
        index:index,
        children: html`
          <div class="c-infowrapper">
            ${Cardheading({
                        text: item.name,
                        number:item.productCount,
                        info:item.subcategories
            })}

   
          
           
          </div>
        `
      })}
    </div>
  `)}
`;

// down
const down = (categories) => html`
  ${categories.slice(2,4).map((item,index) => html`
    <div class = "c-gridone">
    ${Cardphoto({
        item:item,
        index:index,
        children: html`
          <div class="c-infowrapper">


          ${Cardheading({
                        text: item.name,
                        number:item.productCount,
                        info:item.subcategories
                      })}

   
          
           
          </div>
        `
      })}
    </div>
  `)}
`;

// left
const right = (categories) => html`
  <div class="c-gridone2">
 
      ${Cardphoto({
        item:categories[4],
        index:4,
        children: html`
          <div class="c-infowrapper">


          ${Cardheading2({
                        text: categories[4].name,
                        number: categories[4].productCount,
                        info: categories[4].subcategories
                      })}

   
          
           
          </div>
        `
      })}

  </div>
`;




// Main page template
export const renderSolutionPage = (data) => {
    
  console.log(data.categories);
     const root = document.getElementById("app");

    if (!data) {
        return html`<div class="l-solution">Loading...</div>`;
    }

    console.log("data.banner:\n", data.banner);
    console.log("data.ctaBanner:\n", data.ctaBanner);
    console.log("data.products:\n", data.products);
    console.log("data.categories:\n", data.categories);

    return html`
  
      ${renderModal()}
        <div class="l-solution">

            <div class="l-solution__banner">
                  <div>${Popup({
                    show:state.pop,
                    text:state.text,
                 
                  })}</div>
                <div class="l-container one">${data.banner ? solutionBanner(data.banner) : html``}</div>
            </div>

            <div class="l-solution__content">
                <div class="l-container is-shorter">
                    <div class="c-solution-content">

                   <div class="c-solution-content__cta">
                            ${data.ctaBanner ? solutionCta(data.ctaBanner) : html``}
                         </div>

                       <div class="c-solution-content__products">
                           ${data.products ? solutionPro(data.products) : html``}
                         </div>
                        
                    </div>
                </div>
            </div>

            <div class="l-solution__categories">
                <div class="l-container is-shorter">
                <div class ="c-title">Top kategorie produktov</div>
                    <div class="c-solution-categories">
                    
                    <div class = "c-left">

                        <div class = "c-up2">
                           ${data.categories ? top(data.categories) : html``}
                        </div>

                        <div class = "c-up3">
                            ${data.categories ? down(data.categories) : html``}
                        </div>
                               
                    </div>

                        <div class = "c-up">
                        ${data.categories ? right(data.categories) : html``}
                        </div>
                               

                   
                   

                 
                  

                   

 

            
                    
                    </div>
                </div>
            </div>

      
        </div>
    `;
};




/**
 * Load data and render the solution page
 */
export const loadAndRenderSolutionPage = async () => {
    try {
        const data2 = await loadData();
        state.data = data2
        state.data.products = state.data.products.map(p => ({...p,
        isActive: false,
        count:0
      
    }));

      return renderSolutionPage(state.data);

    
    } catch (error) {
        return html`<div class="l-solution">Error loading data: ${error.message}</div>`;
    }
};


 

