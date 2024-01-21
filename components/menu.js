import gsap from "gsap"
import "../styles/menus.css"
import footerModule from "./footer"

function menu() {
  const root = document.getElementById("root")

  const menuItems = [
    {
      name: "Fish Curry",
      description: "Delicious fish curry cooked with authentic Bengali spices.",
      price: "$15.99",
      imageSrc: "../assets/fish-curry.jpg",
    },
    {
      name: "Biryani",
      description:
        "Flavorful rice dish with aromatic spices and choice of meat.",
      price: "$12.99",
      imageSrc: "../assets/biryani.jpg",
    },
    {
      name: "Shorshe Ilish",
      description: "Hilsa fish marinated in mustard sauce, a Bengali delicacy.",
      price: "$18.99",
      imageSrc: "../assets/shorshe-ilish.jpg",
    },

    {
      name: "Machher Matha Diye Dal",
      description: "Lentils cooked with fish head for a unique flavor.",
      price: "$13.99",
      imageSrc: "../assets/machher-matha-diye-dal.jpg",
    },

    {
      name: "Chicken Korma",
      description: "Chicken cooked in a rich, creamy, and mildly spiced curry.",
      price: "$16.99",
      imageSrc: "../assets/chicken-korma.jpg",
    },

    // Add more items as needed
  ]

  const menuContainer = document.createElement("div")
  menuContainer.classList.add("menu-container")
  menuContainer.classList.add("full-bleed")

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")

    // Create div for the image
    const imageContainer = document.createElement("div")
    imageContainer.classList.add("menu-image-container")

    const itemImage = document.createElement("img")
    itemImage.src = item.imageSrc
    itemImage.alt = item.name
    itemImage.loading = "lazy"

    imageContainer.appendChild(itemImage)

    // Create div for text content
    const textContainer = document.createElement("div")
    textContainer.classList.add("menu-text-container")

    const itemName = document.createElement("h3")
    itemName.textContent = item.name

    const itemDescription = document.createElement("p")
    itemDescription.textContent = item.description

    const itemPrice = document.createElement("p")
    itemPrice.textContent = `${item.price}`
    itemPrice.classList.add("price")

    textContainer.appendChild(itemName)
    textContainer.appendChild(itemDescription)
    textContainer.appendChild(itemPrice)

    // Append both image and text containers to the main menu item container
    menuItem.appendChild(imageContainer)
    menuItem.appendChild(textContainer)

    menuContainer.appendChild(menuItem)
  })

  root.appendChild(menuContainer)
  footerModule()

  // GSAP Animation
  gsap.from(".menu-item", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
  })
}

export default menu
