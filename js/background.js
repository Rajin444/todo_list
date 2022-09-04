//이미지를 랜덤으로 가져오게 하기
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.className = "bg";
bgImage.src = `img/${chosenImage}`;

//append는 뒤에, prepend는 앞에 오게 할 수 있다.
document.body.appendChild(bgImage);