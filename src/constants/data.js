import images from "./images";
import Pdfs from "./pdfs";

const header = [
    {
        image: `${images.Creama}`
    }
]

const about_me = [
    {
        image: `${images.UniOfBristol}`,
        title: "University of Bristol",
        paragraph: "During this time, I studied BSc Computer Science. I studied a broad range of modules, including data science, algorithms, and software engineering. In my final year, I wrote my disseration on the topic of deep learning (you can read more about this in the projects section). As a result of my hard work, I was awarded a high 2:1 (67%) with honours."
    },
    {
        image: `${images.Noggin}`,
        title: "NogginHQ",
        paragraph: "This was an internship I undertook in the summer of 2023. I worked independently on SEO, as well as data scraping for live updates to their database."
    },
    {
        image: `${images.ShapePerformance}`,
        title: "Shape Performance",
        paragraph: "This is a job primarily for the summer, which helped to fund my university studies. I was given the role of a sports coach, and had to manage and supervise large groups of children."
    },
    {
        image: `${images.StMarys}`,
        title: "St Mary's Catholic School",
        paragraph: "My secondary school was a place that allowed me to thrive throughout GCSES and A-Levels. I achieved 3 A*'s at A-level, in Maths, Further Maths, and Physics. In addition, I achieved 2 A's, one in my EPQ, and the other in Thinking Skills. Finally, in my GCSEs I achieved four 9's, seven 8's, and one 7 - with 9's in both English and Maths."
    }
]

const features = [
    {
        image: `${images.Cricket}`,
        title: "Deep Learning for UIE",
        paragraph: "My dissertation studying use of GANs for underwater image enhancement",
        link: Pdfs.Dissertation,
        filename: 'dissertation.pdf'
    },
    {
        image: `${images.Wine}`,
        title: "ML for Weather Forecasting",
        paragraph: "Applied Data Science project from MET Office exploring methods for forecasting.",
        link: Pdfs.ADS,
        filename: 'ads.pdf'
    },
    {
        image: `${images.Beers}`,
        title: "ML Model Analysis",
        paragraph: "Machine learning coursework exploring effectiveness of a variety of models for different data",
        link: Pdfs.ML,
        filename: "ml-coursework.pdf"
    },
    {
        image: `${images.Split}`,
        title: "Dartboard Detector",
        paragraph: "Exploring classical computer vision methods for detecting dartboards in images",
        link: Pdfs.IPCV1,
        filename: "dartboard.pdf"
    },
    {
        image: `${images.Beers}`,
        title: "Scene Reconstruction",
        paragraph: "Using stereo vision to reconstruct a 3-Dimensional scene.",
        link: Pdfs.IPCV2,
        filename:"stereovision.pdf"
    },
    {
        image: `${images.Split}`,
        title: "Software Engineering Project",
        paragraph: "Creating a full-stack web application for the university vet school's database",
        link: Pdfs.SPE,
        filename:"spe.pdf"
    }
]

const team = [
    {
        image: `${images.UniOfBristol}`,
        name: "University of Bristol",
        post: "BSc Computer Science"
    },
    {
        image: `${images.Noggin}`,
        name: "Noggin",
        post: "Data Science Intern"
    },
    {
        image: `${images.ShapePerformance}`,
        name: "Shape Performance",
        post: "Sports Coach"
    },
    {
        image: `${images.StMarys}`,
        name: "St Mary's Catholic School",
        post: "Secondary School"
    },
    // {
    //     image:`${images.Mob}`,
    //     name: "Matthew O'Brien",
    //     post: "Vet"
    // },
    // {
    //     image:`${images.Eleanor}`,
    //     name: "Eleanor Lincoln",
    //     post: "Physicist"
    // },
    // {
    //     image:`${images.Alanah}`,
    //     name: "Alanah Hammond",
    //     post: "Reporter"
    // },
    // {
    //     image:`${images.John}`,
    //     name: "John Carr",
    //     post: "Runner"
    // },
    // {
    //     image:`${images.George}`,
    //     name: "George Atkinson",
    //     post: "Goat"
    // },
    // {
    //     image:`${images.Gabi}`,
    //     name: "Gabi Nagy",
    //     post: "Aussie rep"
    // },
]

const data = {about_me, features, team, header};

export default data;