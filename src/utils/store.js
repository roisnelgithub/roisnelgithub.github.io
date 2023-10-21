import htmlIcon from "../assets/icons/html_icon.svg";
import reactIcon from "../assets/icons/react_icon.svg";
import cssIcon from "../assets/icons/css_icon.svg";
import craIcon from "../assets/icons/create_react_app.svg";
import viteIcon from "/vite.svg";
import reactIconsIcon from "../assets/icons/react_icons_icon.svg";
import reduxIcon from "../assets/icons/redux_icon.svg";
import reactRouterIcon from "../assets/icons/react_router.svg";
import axiosIcon from "../assets/icons/axios_icon.svg";
import momentJsIcon from "../assets/icons/momentjs.svg";
import tailwindCSSIcon from "../assets/icons/tailwindcss_icon.svg";

import portafolioImg from "../assets/images/portafolio_pc.png";
import portafolioMobileImg from "../assets/images/portafolio_mobile.png";
import jobsterImg from "../assets/images/dashboard_jobster.png";
import jobsterMobileImg from "../assets/images/jobster_mobile.png";
import shopiImg from "../assets/images/platzi_shopi.png";
import teaStationImg from "../assets/images/tea_station.png";
import teaStationMobileImg from "../assets/images/tea_station_mobile.png";

export const mainTools = [
  {
    id: 1,
    name: "HTML",
    image: htmlIcon,
  },
  {
    id: 2,
    name: "React.js",
    image: reactIcon,
  },
  {
    id: 3,
    name: "CSS",
    image: cssIcon,
  },
];

export const projects = [
  {
    id: 1,
    name: "Portafolio",
    image: portafolioImg,
    mobileImage: portafolioMobileImg,
    tools: [
      {
        name: "React.js",
        url: reactIcon,
      },
      {
        name: "Vite.js",
        url: viteIcon,
      },
      {
        name: "React Icons",
        url: reactIconsIcon,
      },
    ],
    url_public: "URL del sitio publicado",
    url_git_hub: "URL del código en GitHub",
    responsive: true,
    version: "1.0",
    description:
      "Inspirado en el Curso de Platzi. \n Maquetación: Mobile First.",
  },
  {
    id: 2,
    name: "Jobster",
    image: jobsterImg,
    mobileImage: jobsterMobileImg,
    tools: [
      {
        name: "React",
        url: reactIcon,
      },
      {
        name: "Create React App",
        url: craIcon,
      },
      {
        name: "React Icons",
        url: reactIconsIcon,
      },
      {
        name: "Redux",
        url: reduxIcon,
      },
      {
        name: "React Router",
        url: reactRouterIcon,
      },
      {
        name: "Axios",
        url: axiosIcon,
      },
      {
        name: "MomentJS",
        url: momentJsIcon,
      },
    ],
    url_public: "",
    url_git_hub: "",
    responsive: true,
    version: "1.0",
    description:
      "Curso en UDEMY: React Tutorial and Projects Course. Destacar el uso de recharts para los gráficos.",
  },
  {
    id: 3,
    name: "Shopi",
    image: shopiImg,
    mobileImage: "",
    tools: [
      {
        name: "React",
        url: reactIcon,
      },
      {
        name: "React Router",
        url: reactRouterIcon,
      },
      {
        name: "Vite.js",
        url: viteIcon,
      },
      {
        name: "TailwindCSS",
        url: tailwindCSSIcon,
      },
    ],
    url_public: "",
    url_git_hub: "",
    responsive: false,
    version: "1.0",
    description:
      "Curso en Platzi: Curso de React.js con Vitejs y TailwindCSS. Es una tiene online de productos.",
  },
  {
    id: 4,
    name: "Tea Station",
    image: teaStationImg,
    mobileImage: teaStationMobileImg,
    tools: [
      {
        name: "HTML",
        url: htmlIcon,
      },
      {
        name: "CSS",
        url: cssIcon,
      },
    ],
    url_public: "",
    url_git_hub: "",
    responsive: true,
    version: "1.0",
    description: "Curso en Udemy: HTML CSS-Tutorial_and_Projects_Course",
  },
];

export const approvedJavaScriptCoursesPlatzi = [
  { id: 1, name: "Básico de JavaScript." },
  { id: 2, name: "ECMAScript: Historia y versiones de JavaScript." },
];

export const approvedFrondCoursesPlatzi = [
  { id: 1, name: "Introducción a React.js." },
  { id: 2, name: "React.js. Patrones de render y composición." },
  { id: 3, name: "React.js. Manejo profesional del estado." },
  { id: 4, name: "React.js. Navegación con React Router." },
  { id: 5, name: "React.js con Vite.js y TailwindCSS." },
  { id: 6, name: "Responsive design: Maquetación mobile first." },
];

export const approvedOthersCoursesPlatzi = [
  { id: 1, name: "Curso profesional de Git y GitHub." },
];

export const approvedBackendCoursesPlatzi = [
  { id: 1, name: "Fundamentos de Node.js" },
  { id: 2, name: "Backend con Node.js: API REST con Express.js" },
  { id: 3, name: "Backend con Node.js: Bases de datos con PostgreSQL" },
  { id: 5, name: "Backend con Node.js: Autenticación con Passport.js y JWT" },
  { id: 6, name: "Base de datos con MongoDB y WebSockets." },
  { id: 7, name: "Backend con Nestjs." },
  { id: 8, name: "Nest.js: Programación modular." },
  { id: 9, name: "Nest.js: Persistencia de datos con TypeORM." },
  { id: 10, name: "Nest.js: Autenticación con passport y JWT." },
];
