const imageWhisper = "/whisper.png";
const imageSGEA = "/sgea.png";
const imageKcera = "/kacera.png";
const imageEcommerce = "/ecommerce.png";
export const projects = [
  {
    id: 1,
    image: imageSGEA,
    title: "Academic Events Management System",
    description:
      "SGEA is a system where you can find many academic events and register your assistance or register a new event who organizer 👨‍🎓. Also, you will have access to a dashboard to have better control of your profile, events, events requests and inscriptions to the events 📝. Finally there are an module to admin where she/he can accept or reject requests.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node - Express",
      "MySQL",
      "AWS - RDS",
      "Firebase",
    ],
    URLapp: "https://sgea-fa6fa.web.app/",
    URLcode: "https://github.com/FernandoAltamirano/sgea-frontend",
  },

  {
    id: 2,
    image: imageKcera,
    title: "Ecommerce - Kacera",
    description:
      "This app is an ecommerce mainly focused in healthy food 🥬. This app can list many categories and login with Facebook and Google. Also was implemented a chat layout and profile setting when you can see your user options and you deliveries list 🥕",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Chakra UI",
      "NextJS",
      "Typescript",
    ],
    URLapp: "https://kcera-dev.vercel.app/",
  },
  {
    id: 3,
    image: imageEcommerce,
    title: "Gloves Ecommerce",
    description:
      "Fullstack aplication developed for a glove sales company. On this aplication you can login with Google or an email, add or remove products to the cart 🛒, see a pay method using Strip. Also there is an admin module to manage products and sales.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node - Express",
      "Stripe",
      "Firebase",
      "Styled Components",
    ],
    URLapp: "https://ecommerce-guantes.web.app",
    URLcode: "https://github.com/FernandoAltamirano/ecommerce-gloves-store",
  },
  {
    id: 4,
    image: imageWhisper,
    title: "Whisper",
    description:
      "Whisper is an app based on the Twitter layout with some changes 😁. You can add emojis, upload images and gifs.Also you can use the option 'PERFIL' and see your posts and change your profile image 👨‍💻.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Firebase",
      "Styled-components",
    ],
    URLapp: "https://whisper-2bc9b.web.app",
    URLcode: "https://github.com/FernandoAltamirano/whisper",
  },
];
