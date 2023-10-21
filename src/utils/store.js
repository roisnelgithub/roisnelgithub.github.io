import htmlIcon from "../assets/icons/html_icon.svg";

export const mainTools = [
  {
    id: 1,
    name: "HTML",
    image: htmlIcon,
  },
  {
    id: 2,
    name: "React.js",
    image: "/src/assets/icons/react_icon.svg",
  },
  {
    id: 3,
    name: "CSS",
    image: "/src/assets/icons/css_icon.svg",
  },
];

export const projects = [
  {
    id: 1,
    name: "Portafolio",
    image: "/src/assets/images/portafolio_pc.png",
    mobileImage: "/src/assets/images/mobile_100x60.png",
    tools: [
      {
        name: "React.js",
        url: "/src/assets/icons/react_icon.svg",
      },
      {
        name: "Vite.js",
        url: "/vite.svg",
      },
      {
        name: "React Icons",
        url: "/src/assets/icons/react_icons_icon.svg",
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
    image: "/src/assets/images/dashboard_jobster.png",
    mobileImage: "/src/assets/images/jobster_mobile.png",
    tools: [
      {
        name: "React",
        url: "/src/assets/icons/react_icon.svg",
      },
      {
        name: "Create React App",
        url: "/src/assets/icons/create_react_app.svg",
      },
      {
        name: "React Icons",
        url: "/src/assets/icons/react_icons_icon.svg",
      },
      {
        name: "Redux",
        url: "/src/assets/icons/redux_icon.svg",
      },
      {
        name: "React Router",
        url: "/src/assets/icons/react_router.svg",
      },
      {
        name: "Axios",
        url: "/src/assets/icons/axios_icon.svg",
      },
      {
        name: "MomentJS",
        url: "/src/assets/icons/momentjs.svg",
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
    image: "/src/assets/images/platzi_shopi.png",
    mobileImage: "",
    tools: [
      {
        name: "React",
        url: "/src/assets/icons/react_icon.svg",
      },
      {
        name: "React Router",
        url: "/src/assets/icons/react_router.svg",
      },
      {
        name: "Vite.js",
        url: "/vite.svg",
      },
      {
        name: "TailwindCSS",
        url: "/src/assets/icons/tailwindcss_icon.svg",
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
    image: "/src/assets/images/tea_station.png",
    mobileImage: "/src/assets/images/tea_station_mobile.png",
    tools: [
      {
        name: "HTML",
        url: "/src/assets/icons/html_icon.svg",
      },
      {
        name: "CSS",
        url: "/src/assets/icons/css_icon.svg",
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
