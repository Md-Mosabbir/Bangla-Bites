import "../styles/home.css"

function home() {
  const root = document.getElementById("root")

  const heroContainer = document.createElement("div")
  heroContainer.classList.add("hero-container")
  heroContainer.classList.add("full-bleed")

  heroContainer.innerHTML = `
    <div class="hero-front-container">
        <div class="image-container">
            <img
                src="./assets/delicious-fresh-food-plate.jpg"
                alt="image of a fish curry"
            />
        </div>
         <section class="hero-text">
            <h1>Discover The Rich World Of Bangla Flavours</h1>
            <h2>your passport ot Desi Delights!</h2>
        </section>
    </div>
    
    `

  root.appendChild(heroContainer)
}

export default home
