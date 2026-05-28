import smaakSpraak from "../assets/smaakspraak.png";
import elementalQuest from "../assets/elementalQuest.png";
import novaraHealth from "../assets/novaraHealth.png";
import natuurTocht from "../assets/natuurtocht.jpg";
import scale from "../assets/scale.png";
import sonarpop from "../assets/sonarpop.png";

import {smaakspraakScreenshots} from "../assets/smaakspraak/screenshotsSmaakSpraak.js";
import {elementalquestScreenshots} from "../assets/elementalQuest/elementalquest.js";
import {scaleScreenshots} from "../assets/scale/scale.js";
import {novarahealthScreenshots} from "../assets/novaraHealth/novaraHealth.js";
import {natuurtochtScreenshots} from "../assets/natuurtocht/natuurtocht.js";
import {sonarpopScreenshots} from "../assets/sonarpop/sonarpop.js";

export const projects = [
    {
        slug: "smaapspraak",
        image: smaakSpraak,
        title: "Smaakspraak",
        description: "Digitally accessible restaurant menus. " +
            "Designed for people with visual impairments to make dining out easier.\n" +
            "Discover restaurants, browse menus, and decide before you go.",
        longDescription: "Smaakspraak was a project which was made in a special assignment called 'Make the World Accessible. The design challenge I was faced with involved improving the experience of dining out for our target audience: people with a visual impairment." +
            "By taking away the pains of having to order from a tiny menu in a poorly lit & busy environment, we managed to create an webapplication that let the user decide what they wanted to eat at a specific restaurant before they would arrive there." +
            "With the addition of the WCAG guidelines built throughout this project, we succesfully managed to put a smile on our target audience.",
        screenshots: smaakspraakScreenshots,
        icons: ["HTML", "CSS", "Javascript", "PHP"],
        status: "Not published"
    },
    {
        slug: "novarahealth",
        image: novaraHealth,
        title: "Novara Health",
        description: "Novara Health helps you monitor your physical and mental wellbeing.\n" +
            "Track your mood daily, get AI-powered insights, view mood trends through clear graphs, and reflect on past days with the journal feature.",
        longDescription: "Novara Health is an app about tracking your mental health and daily routines. " +
            "I was challenged with creating a diary/calendar overview in which the user could see their past entries & summaries about their days and habits. " +
            "This was a fun challenge starting with many low-fidelity wireframes and user tests to make sure my feature would be exactly what my target audience would be looking for." +
            " This was also a fun project in which I could finetune & refresh my skills in Javascript and PHP.",
        screenshots: novarahealthScreenshots,
        icons: ["HTML", "Javascript", "PHP", "TailwindCSS"],
        status: "Showcase",
        liveURL: "https://cmgt.hr.nl/projecten/novara"
    },
    {
        slug: "natuurtocht",
        image: natuurTocht,
        title: "Natuurtocht",
        description: "Natuurtocht turns exploring nature into a game.\n" +
            "Select a species card, get clues on where to find it, go out and explore, and take a photo as proof to complete your card and grow your collection.",
        longDescription: "Natuurtocht is one of the projects I found to be the most fun to work on. The target audience was focused on young kids who just left a green program created by Natuurmonumenten. " +
            "By creating an experience that made exploring nature fun, we managed to create a 'gamified' webapplication in which the user could find and collect cards of flora found in the broad nature of the Netherlands. " +
            "During this project, I focused on back-end functionalities, like database structures, creating endpoints & live (seasonal) changes.",
        screenshots: natuurtochtScreenshots,
        icons: ["Laravel", "TailwindCSS"],
        status: "Showcase",
        liveURL: "https://cmgt.hr.nl/projecten/natuurtocht"
    },
    {
        slug: "scale",
        image: scale,
        title: "Scale",
        description: "In this challenging ‘strategic’ platformer, you can climb any wall in the background. " +
            "Think carefully on where to go, how you get there, what abilities you'll use and what risks to take. " +
            "This strange and dark world won't let you escape easily...",
        longDescription: "Scale is a hobby project built in the game engine Unity in small team. It's a strategic platformer in which the player is challenged to climb out of a cave." +
            " There is no failing, there is no game over screen. It's all about falling down and getting back up. " +
            "I was challenged in creating an immersive environment and mechanics filled with mystery and life in them. " +
            "This was also my first 'big' project I ever worked on and for that it always has a special place in my heart. It's still available to download & play, so check it out!",
        screenshots: scaleScreenshots,
        icons: ["Unity"],
        status: "Published",
        liveURL: "https://studio-scale.itch.io/scale"
    },
    {
        slug: "elementalquest",
        image: elementalQuest,
        title: "Elemental Quest",
        description: "In Elemental Quest you explore an abandoned mine for valuable ores. " +
            "Find all chemical elements, create new  substances and use them to activate the elevator to even deeper levels.\n" +
            "\n" +
            "What lies beneath the surface?",
        longDescription: "Elemental Quest was a big design challenge by randomly combining target audience, player type & social impact theme. " +
            "Alongside a small team, I managed to create an educational game for the submissive player type in which they were tasked to explore an abandoned mine, collect ores and create new chemical substances to progress. " +
            "By combining lots of research and commitment (because let's face it: I'm not a chemist) I created the educational purpose for this game, alongside the main mechanic of breaking & collecting ores. " +
            "This game is available to download & play right now, so check it out!",
        screenshots: elementalquestScreenshots,
        icons: ["Unity"],
        status: "Published",
        liveURL: "https://thijsvanloo1.itch.io/elemental-quest"
    },
    {
        slug: "sonarpop",
        image: sonarpop,
        title: "Sonarpop",
        description: "Sonarpop is a music discovery platform that uses a transparent and customizable AI recommendation system. Instead of acting as a “black box,” it gives users control over their recommendations through features like likes, genre preferences, and content blacklisting.",
        longDescription: "Sonarpop was created in an assignment about ethical design. By creating a music platform that actively tries to break you out of your music bubble algorithm, this project was about AI and the responsibility of the developer. " +
            "This was also the first project I specialized in a field: I was part of the front-end development team! " +
            "By creating intuitive flows and ethically responsible UX's, I believe I managed to break through the 'black box' that AI is for lots of people.",
        screenshots: sonarpopScreenshots,
        icons: ["React", "TailwindCSS", "Vite"],
        status: "Showcase",
        liveURL: "https://cmgt.hr.nl/projecten/Sonarpop"
    },
];
