import { html } from "lit-html";

export const Cardphoto = ({ children, index,colorStyle,radius }) => {
  let photos = [
    { i: 0, photo: "/elektrika.jpg" },
    { i: 1, photo: "/zahrada.jpg" },
    { i: 2, photo: "/upratovanie.png" },
    { i: 3, photo: "/ruka.jpg" },
    { i: 4, photo: "/prislusenstvo.jpg" },
    { i: 5, photo: "/vrtackyhlvanve.jpg" },
    { i: 6, photo: "/prvafotka.jpg" },
  ];

  const found = photos.find(p => p.i === index);

  console.log(index);
  
  return html`
    <div class="c-cartphoto " style=${radius}>
    <div class = "c-color" style=${colorStyle}></div>
      <img class="c-photocard" src=${found?.photo} style=${radius} />
      <div class = "c-chiddren">${children || ""}</div>
      
    </div>
  `;
};