const imageWhisper =
  "http://fernandoimages.imgix.net/prueba/whisper.jpg?auto=compress&cs=tinysrgb&dpr=4&h=400&w=300";
const imageAmazon =
  "http://fernandoimages.imgix.net/prueba/amazon.png?auto=compress&cs=tinysrgb&dpr=4&h=750&w=300";
const imageDashboard =
  "http://fernandoimages.imgix.net/prueba/dashboard.jpg?auto=compress&cs=tinysrgb&dpr=4&h=750&w=300";
const imageEcommerce =
  "http://fernandoimages.imgix.net/prueba/ecommerce.jpg?auto=compress&cs=tinysrgb&dpr=4&h=400&w=300";
export const projects = [
  {
    id: 1,
    image: imageWhisper,
    title: "Whisper",
    description:
      "Whisper is an app based on the Twitter layout with some changes 😁. You can add emojis, upload images and gifs.Also you can use the option 'PERFIL' and see your posts and change your profile image 👨‍💻.",
    technologies: ["React", "Firebase", "Styled-components"],
    URLapp: "https://whisper-2bc9b.web.app",
    URLcode: "https://github.com/FernandoAltamirano/whisper",
  },
  {
    id: 2,
    image: imageEcommerce,
    title: "Ecommerce Gloves Store",
    description:
      "Fullstack aplication developed for a glove sales company. On this aplication you can login with Google or an email, add or remove products to the cart, see a pay method using Strip. Also there is an admin module to manage products and sales.",
    technologies: [
      "React",
      "Express",
      "Stripe",
      "Firebase",
      "Styled Components",
    ],
    URLapp: "https://ecommerce-guantes.web.app",
    URLcode: "https://github.com/FernandoAltamirano/ecommerce-gloves-store",
  },
  {
    id: 3,
    image: imageDashboard,
    title: "Social Media Dashboard",
    description:
      "This app is an implementation of a frontendmentor challenge using basic techonologies like HTML and CSS. Also I could implement light and dark mode 🌗 with a button toggle. Also this page has full responsive design.",
    technologies: ["HTML", "CSS", "Javascript"],
    URLapp: "https://fernandoaltamirano.github.io/social-media-dashboard/",
    URLcode: "https://github.com/FernandoAltamirano/social-media-dashboard",
  },
  {
    id: 4,
    image: imageAmazon,
    title: "Amazon Clone",
    description:
      "Amazon Clone is an app when you will can sign in or register, also I could implement the logic of an ecommerce 🛒 , you can add or remove products from the cart. Also this page has full responsive design.",
    technologies: ["React", "Firebase", "CSS"],
    URLapp: "https://clone-46db0.web.app",
    URLcode: "https://github.com/FernandoAltamirano/Amazon-clone/tree/master",
  },
];
