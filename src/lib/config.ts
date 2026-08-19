import p1img from "@/assets/projects/dracocraftweb.webp"
import p2img from "@/assets/projects/73rsa.webp"
import p3img from "@/assets/projects/2fa.webp"
import p4img from "@/assets/projects/craftingtable.webp"
import p5img from "@/assets/projects/73neuronalnetwork.webp"
import p6img from "@/assets/projects/thefederation.webp"

export const settings = {
  title: "Tantalum",
  description: "Condemned to eternal thirst before an unreachable spring.",
  icon: "/favicon.png",
  url: "https://ta73.dev",
}

export const socials = [
  {href: "https://github.com/xe-4f14-5d3-6s2/", icon: "tabler:brand-github-filled"},
  {href: "https://discord.com/users/1324376858933985392", icon: "tabler:brand-discord-filled"},
  {href: "https://instagram.com/xe.4f14.5d3.6s2", icon: "tabler:brand-instagram-filled"},
  {href: "mailto:xe.4f14.5d3.6s2@proton.me", icon: "tabler:mail-filled"},
]

export const skills = [
  "PYTHON", "TYPESCRIPT", "C", "JULIA", "NIM", "HTML", "CSS", "TAILWINDCSS", "NEXT.JS", "DISCORD.JS", "DISCORD.PY", "ASTRO.JS", "INKSCAPE", "PTERODACTYL", "JEXACTYL", "PAPERMC", "SPIGOT/BUKKIT"
]

export const projects = [
  {
    img: p6img.src,
    subname: "IN GOLD WE TRUST.",
    name: "THE FEDERATION",
    description: "Law builds nations, but economy rules them. Survive the market, forge a monopoly or lead the federation.",
    techs: ["PAPERMC", "MINECRAFT"],
    link: "https://federationmc.com/"
  },
  {
    img: p1img.src,
    subname: "VPS, DEDICATED & GAME SERVER HOSTING",
    name: "DRACOCRAFT",
    description: "Dracocraft is a game hosting, vps, and dedicated server provider with the best suppliers on the market. Offering low prices and great deals.",
    techs: ["TYPESCRIPT", "NEXT.JS"],
    link: "https://dracocraft.vercel.app/"
  }, {
    img:p5img.src,
    subname: "DATA TRAINING & PREDICTION ALGORITHM",
    name: "73NEURALNETWORK",
    description: "73neuralnetwork is a data training and prediction algorithm built completely from scratch in the Julia programming language.",
    techs: ["JULIA", "MATHS"],
    link: "https://github.com/xe-4f14-5d3-6s2/73neuralnetwork",
  }, {
    img: p4img.src,
    subname: "MINECRAFT RECIPE & CRAFTING SYSTEM",
    name: "CRAFTINGTABLE",
    description: "CraftingTable is a system to manage and simulate Minecraft crafting recipes in a fast, simple, and interactive way.",
    techs: ["C"],
    link: " https://github.com/xe-4f14-5d3-6s2/CraftingTable "
  }, {
    img: p2img.src,
    subname:  "RSA ALGORITHM",
    name: "73RSA",
    description: "RSA generator and cipher built from scratch in Python. Ideal for studying cryptography and understanding how it works internally.",
    techs: ["PYTHON", "MATHS", "NUMPY"],
    link: "https://github.com/xe-4f14-5d3-6s2/73RSA"
  }, {
    img: p3img.src,
    subname: "2FA ALGORITHM",
    name: "2FA CODES GENERATOR",
    description: "Simple console-based TOTP generator using base32. Secure, fast, and perfect for learning about two-step authentication.",
    techs:["PYTHON", "FLASK"],
    link: "https://github.com/xe-4f14-5d3-6s2/2fa-codes-generator"
  }
]
