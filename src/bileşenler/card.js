import axios from "axios";

const Card = (makale) => {
  const { anabaslik, yazarFoto, yazarAdi } = makale;

  const card = `
    <div class="headline">${anabaslik}</div>
    <div class="author">
      <div class="img-container">
        <img src=${yazarFoto}>
      </div>
      <span>${yazarAdi} tarafından</span>
    </div>
  `;

  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card");
  cardWrapper.innerHTML = card;
  return cardWrapper;
};

const cardEkleyici = (secici) => {
  const subjectAPI = null;
  const container = document.querySelector(secici);
  axios
    .get(`http://localhost:5001/api/makaleler`)
    .then(function (response) {
      const allArticles = response.data.makaleler;

      Object.keys(allArticles).map((article) => {
        allArticles[article].map((item) => {
          console.log(item);
          const card = Card(item);
          container.append(card);
        });
      });
    })
    .catch(function (error) {
      container.textContent = "Hata";
      console.log(error);
    });
};

export { Card, cardEkleyici };
