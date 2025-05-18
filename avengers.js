const avengers = [
  {
    name: "Tony Stark",
    designation: "Iron Man",
    image:
      "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png", // Placeholder image
  },
  {
    name: "Steve Rogers",
    designation: "Captain America",
    image:
      "https://w0.peakpx.com/wallpaper/21/365/HD-wallpaper-steve-rogers-america-captain-shield.jpg",
  },
  {
    name: "Thor",
    designation: "God of Thunder",
    image:
      "https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg",
  },
  // Add more team members as needed
];

document.addEventListener("DOMContentLoaded", renderCards());

function renderCards() {
    avengers.forEach(element => {
        createCard(element.name, element.designation, element.image);
    });
}


function createCard(name, designation, image){
    let cardstr = `<div class="card">
        <div class="image-box">
          <image class="card-image" src="${image}"></image>
        </div>
        <div class="text-box">
            <h2>${name}</h2>
            <h3>${designation}</h3>
        </div>
      </div>`;    

    const cardContainer = document.getElementsByClassName("container")[0];
    cardContainer.innerHTML+=cardstr;

}




