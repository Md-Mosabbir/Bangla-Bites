import "../styles/reviews.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function reviews() {
  const reviewsList = [
    {
      name: "Rita D.",
      description:
        "A culinary delight! Bangla Bites is a hidden gem that captures the essence of Bangladeshi flavors. Every dish is a journey into the heart of this rich cuisine. A must-visit for all food enthusiasts!",
    },
    {
      name: "Amit K.",
      description:
        "Incredible! The authenticity of Bangla Bites is unmatched. From the warm hospitality to the flavorful dishes, it's a true taste of Bangladesh. The fish curry is a personal favorite. Highly recommended!",
    },
    {
      name: "Sophia M.",
      description:
        "Bengali Bliss! Bangla Bites is my go-to place for a taste of home. The cozy ambiance and the aromatic spices transport me back to the streets of Dhaka. The staff is friendly, and the food is simply divine.",
    },
    {
      name: "Arjun S.",
      description:
        "Spice Paradise! Bangla Bites knows how to balance the spices perfectly. The menu offers a variety of options, and each dish is a burst of flavors. The kebabs are a must-try. Can't get enough of this place!",
    },
    {
      name: "Priya G.",
      description:
        "Home Away from Home! As someone who grew up with Bangladeshi cuisine, Bangla Bites feels like a home away from home. The attention to detail in each dish is remarkable. The atmosphere is warm, and the staff is welcoming.",
    },
    {
      name: "Rahul B.",
      description:
        "Flavors Galore! Bangla Bites is a flavor explosion. The diversity in the menu ensures there's something for everyone. Whether you're a spice enthusiast or prefer milder dishes, this place caters to all taste buds.",
    },
    {
      name: "Ananya R.",
      description:
        "Sensational Sweets! The desserts at Bangla Bites are a sweet symphony. The traditional Bengali sweets are heavenly, and the presentation is top-notch. A perfect way to end a delightful meal!",
    },
  ]

  const root = document.getElementById("root")

  const aboutWrapper = document.createElement("section")
  aboutWrapper.classList.add("reviews-wrapper")

  const aboutContainer = document.createElement("div")
  aboutContainer.classList.add("reviews-container")

  reviewsList.forEach((review) => {
    const reviewBlock = document.createElement("article")
    reviewBlock.classList.add("review-block")
    const reviewName = document.createElement("h3")
    reviewName.classList.add("review-name")
    reviewName.classList.add("anim")

    reviewName.textContent = review.name

    const reviewDescription = document.createElement("p")
    reviewDescription.classList.add("review-text")

    reviewDescription.textContent = review.description

    reviewBlock.appendChild(reviewName)
    reviewBlock.appendChild(reviewDescription)
    aboutContainer.appendChild(reviewBlock)
  })
  aboutWrapper.appendChild(aboutContainer)

  root.appendChild(aboutWrapper)

  const sections = gsap.utils.toArray(".reviews-container article")

  // Initial state animation

  // Scroll-triggered animation
  const scrollTween = gsap.to(
    sections,

    {
      xPercent: -100 * (sections.length - 1),
      ease: "none",

      scrollTrigger: {
        trigger: ".reviews-wrapper",
        pin: true,
        scrub: 1,

        start: "-=200",
        end: "+=4000",
      },
    },
  )
  const appear = gsap.from(aboutWrapper, {
    scrollTrigger: {
      trigger: ".reviews-wrapper",

      start: "top 80%", // Adjust the start position as needed
      end: "bottom 20%", // Adjust the end position as needed
    },
    opacity: 0,
    y: 30,
    scale: 0.6,
  })
}

export default reviews
