const ratingBtnSection =
  document.getElementsByClassName("rating_btn_section")[0];
let selectedRating = "";

ratingBtnSection.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    const ratingBtns = document.querySelectorAll(".rating_btn");
    for (let i = 0; i < ratingBtns.length; i++) {
      ratingBtns[i].classList.remove("active");
    }

    const elm = event.target;
    elm.classList.add("active");

    selectedRating = elm.innerText;
  }
});

const submitBtn = document.getElementsByClassName("sub_rating_btn")[0];

submitBtn.onclick = submitClick;

function submitClick() {
  if (selectedRating == "") return;

  document.querySelector(".container").remove();

  const tnxContainer = document.createElement("div");
  tnxContainer.classList.add("thank_you_container");

  const imgBox = document.createElement("div");
  imgBox.classList.add("img_box");
  const tnxImg = document.createElement("img");
  tnxImg.src = "./images/illustration-thank-you.svg";
  imgBox.appendChild(tnxImg);

  const selectedRatingTextBox = document.createElement("div");
  selectedRatingTextBox.classList.add("selected_rating");
  selectedRatingTextBox.innerText = `You selected ${selectedRating} out of 5`;

  const textThanksYouBox = document.createElement("div");
  textThanksYouBox.classList.add("text_thank_you");

  const headerText = document.createElement("h2");
  headerText.innerText = "Thank you!";

  const textBox = document.createElement("p");
  textBox.innerText =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  textThanksYouBox.appendChild(headerText);
  textThanksYouBox.appendChild(textBox);

  tnxContainer.appendChild(imgBox);
  tnxContainer.appendChild(selectedRatingTextBox);
  tnxContainer.appendChild(textThanksYouBox);

  document.body.appendChild(tnxContainer);
}
