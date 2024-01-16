import "../styles/about.css"

function aboutUs() {
  const root = document.getElementById("root")

  const aboutContainer = document.createElement("section")

  aboutContainer.classList.add("about-us")

  aboutContainer.innerHTML = `
    <div class="about-text-container">
        <p class = "about-text-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ab non
            quos optio maiores. Nulla ut itaque consequatur esse error, nobis
            minus eligendi asperiores mollitia a similique tempore dignissimos
            architecto incidunt accusamus deserunt nemo nisi eveniet corrupti unde
            voluptatibus? Atque minus quae aspernatur fugit reiciendis dolore fuga
            voluptates magni itaque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis, enim.
        </p>
    </div>
  `

  root.appendChild(aboutContainer)
}

export default aboutUs
