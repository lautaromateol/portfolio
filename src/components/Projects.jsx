import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandRedux, IconBrandTailwind, IconBrandVite, IconCode } from "@tabler/icons-react"
import ProjectCard from "./ProjectCard"

const TAGS = {
  NextJS:
  {
    name: "NextJS",
    icon: <IconBrandNextjs className="w-4 h-4"/>,
    styles: "bg-black"
  },
  MongoDB:
  {
    name: "MongoDB",
    icon: <IconBrandMongodb className="w-4 h-4"/>,
    styles: "bg-[#2b8a3e]"
  },
  ViteJS: {
    name: "ViteJS",
    icon: <IconBrandVite className="w-4 h-4"/>,
    styles: "bg-[#364fc7]"
  },
  TailwindCSS: {
    name: "TailwindCSS",
    icon: <IconBrandTailwind className="w-4 h-4"/>,
    styles: "bg-[#003159]"
  },
  Redux: {
    name: "Redux",
    icon: <IconBrandRedux className="w-4 h-4"/>,
    styles: "bg-[#5f3dc4]"
  }, 
  Html: {
    name: "HTML",
    icon: <IconBrandHtml5 className="w-4 h-4"/>,
    styles: "bg-[#f76707]"
  },
  Css: {
    name: "CSS",
    icon: <IconBrandCss3 className="w-4 h-4"/>,
    styles: "bg-[#228be6]"
  },
  Javascript: { 
    name: "Javascript",
    icon: <IconBrandJavascript className="w-4 h-4"/>,
    styles: "bg-[#ffd43b]"
  }
}

const PROJECTS = [
  {
    title: "Pure Decor e-commerce",
    description: "Tienda online de muebles para el hogar con diseño responsivo y múltiples funcionalidades. Carrito de compras, pagos con Stripe, sección de comentarios, perfil y autenticación de usuario, panel de administración y más.",
    image: "./img/projects/pure-decor.png",
    repoLink: "https://github.com/lautaromateol/demo-ecom",
    deployLink: "https://sup-ecom.vercel.app/",
    tags: [TAGS.NextJS, TAGS.MongoDB, TAGS.TailwindCSS]
  },
  {
    title: "Rick & Morty SPA",
    description: "Aplicacion de pagina individual, consume la API de Rick & Morty e utiliza Redux para gestion de estado global.",
    image: "./img/projects/rick-and-morty.png",
    repoLink: "https://github.com/lautaromateol/SPA-rick-and-morty",
    deployLink: "https://rick-and-morty-wiki-lautaromateol.vercel.app/",
    tags: [TAGS.ViteJS, TAGS.Redux, TAGS.TailwindCSS]
  },
  {
    title: "FitSync landing page",
    description: "Landing page para aplicacion ficticia desarrollada unicamente en HTML, CSS y Javascript.",
    image: "./img/projects/fitsync.png",
    repoLink: "https://github.com/lautaromateol/fitsync-landing",
    deployLink: "https://fitsync.netlify.app/",
    tags: [TAGS.Html, TAGS.Css, TAGS.Javascript]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-2 text-3xl font-semibold mb-8">
          <IconCode stroke={2} />
          Proyectos
        </h2>
        <div className="flex flex-col gap-y-8">
        {PROJECTS.map(({title, description, image, deployLink, repoLink, tags}) => {
          return(
            <ProjectCard 
            title={title} 
            description={description} 
            image={image} 
            deployLink={deployLink} 
            repoLink={repoLink}
            tags={tags}
            />
          )
        })}
        </div>
      </div>
    </section>
  )
}
