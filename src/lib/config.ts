import p1img from "@/assets/projects/dracocraftweb.webp"
import p2img from "@/assets/projects/73rsa.webp"
import p3img from "@/assets/projects/2fa.webp"
import p4img from "@/assets/projects/livechat.webp"

export const settings = {
  title: "Tantalum",
  description: "Condemned to eternal thirst before an unreachable spring.",
  icon: "/favicon.png",
  url: "tantalum.vercel.app",
  color: "#d32f2f"
}

export const socials = [
  {href: "", icon: "tabler:brand-github-filled"},
  {href: "", icon: "tabler:brand-discord-filled"},
  {href: "", icon: "tabler:brand-instagram-filled"},
  {href: "", icon: "tabler:mail-filled"},
]

export const skills = [
  "PYTHON", "TYPESCRIPT", "C", "JULIA", "NIM", "HTML", "CSS", "TAILWINDCSS", "NEXT.JS", "DISCORD.JS", "DISCORD.PY", "ASTRO.JS", "INKSCAPE", "PTERODACTYL", "JEXACTYL", "PAPERMC", "SPIGOT/BUKKIT"
]

export const projects = [
  {
    img: p1img.src,
    subname: "VPS, DEDICATED & GAME SERVER HOSTING",
    name: "DRACOCRAFT",
    description: "Dracocraft is a game hosting, vps, and dedicated server provider with the best suppliers on the market. Offering low prices and great deals.",
    techs: ["TYPESCRIPT", "NEXT.JS"],
    link: "https://dracocraft.vercel.app/"
  }, {
    img: p2img.src,
    subname:  "RSA ALGORITHM",
    name: "73RSA",
    description: "RSA generator and cipher built from scratch in Python. Ideal for studying cryptography and understanding how it works internally.",
    techs: ["PYTHON", "MATH", "NUMPY"],
    link: "https://github.com/xe-4f14-5d3-6s2/73RSA"
  }, {
    img: p3img.src,
    subname: "2FA ALGORITHM",
    name: "2FA CODES GENERATOR",
    description: "Simple console-based TOTP generator using base32. Secure, fast, and perfect for learning about two-step authentication.",
    techs:["PYTHON", "FLASK"],
    link: "https://github.com/xe-4f14-5d3-6s2/2fa-codes-generator"
  }, {
    img: p4img.src,
    subname: "CHAT FRONT END",
    name: "LIVE CHAT",
    description: "Live chat application with Websockets and a lightweight backend. Enables seamless real-time communication with multiple users.",
    techs: ["TYPESCRIPT", "ASTRO"],
    link:"https://github.com/xe-4f14-5d3-6s2/livehat"
  }
]
