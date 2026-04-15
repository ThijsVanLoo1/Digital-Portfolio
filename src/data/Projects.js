import Project from "../components/Project.jsx";
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
        longDescription: "Smaakspraak is a digital solution designed to make restaurant menus more accessible for people with visual impairments. Instead of relying on printed menus or on-the-spot explanations, users can explore restaurant menus beforehand in a clear, structured, and accessible way.\n" +
            "\n" +
            "The platform allows users to discover participating restaurants, browse their menus digitally, and decide what they want to order before arriving. This reduces stress and uncertainty during the dining experience and increases independence for users with visual limitations.\n" +
            "\n" +
            "During development, accessibility was a key focus. Clear typography, logical navigation, and screen-reader-friendly content structures were taken into account to ensure the application remains usable for a broad audience. Smaakspraak demonstrates how thoughtful digital design can directly improve real-world experiences.",
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
        longDescription: "Novara Health is a wellbeing application focused on helping users better understand both their mental and physical health. The platform allows users to track their daily mood, reflect through journaling, and gain insights through data visualisation.\n" +
            "\n" +
            "By combining daily input with AI-powered insights, Novara Health helps users recognise patterns in their emotional state over time. Clear graphs and trends make it easier to understand how moods evolve, while the journal feature encourages reflection on past days and experiences.\n" +
            "\n" +
            "The project places strong emphasis on user experience and clarity. Complex data is presented in an accessible way, ensuring users can focus on self-reflection rather than being overwhelmed by information. Novara Health explores how technology can support personal wellbeing without becoming intrusive.",
        screenshots: novarahealthScreenshots,
        icons: ["HTML", "CSS", "Javascript", "PHP", "TailwindCSS"],
        status: "Showcase",
        liveURL: "https://cmgt.hr.nl/projecten/novara"
    },
    {
        slug: "natuurtocht",
        image: natuurTocht,
        title: "Natuurtocht",
        description: "Natuurtocht turns exploring nature into a game.\n" +
            "Select a species card, get clues on where to find it, go out and explore, and take a photo as proof to complete your card and grow your collection.",
        longDescription: "Natuurtocht turns exploring nature into an interactive and educational game. Players select a species card and receive clues about where that species can be found in the real world. By going outside, exploring their surroundings, and taking a photo as proof, users can complete cards and build a growing collection.\n" +
            "\n" +
            "The project encourages physical activity, curiosity, and learning by blending game mechanics with real-world exploration. Instead of traditional progression systems, Natuurtocht rewards observation and engagement with nature.\n" +
            "\n" +
            "This project highlights the use of gamification as a tool for education and engagement. By combining exploration, photography, and collection mechanics, Natuurtocht demonstrates how digital applications can motivate users to interact more actively with their environment.",
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
        longDescription: "Scale is a challenging strategic platformer set in a dark and mysterious world. The core mechanic allows the player to climb any wall visible in the background, fundamentally changing how levels are approached and explored.\n" +
            "\n" +
            "Rather than focusing on fast reflexes, Scale emphasises planning and decision-making. Players must carefully consider where to go, which abilities to use, and which risks are worth taking. Each choice can lead to progress—or force the player to rethink their strategy.\n" +
            "\n" +
            "The game’s atmosphere and mechanics work together to create a sense of tension and discovery. Scale explores how unconventional movement mechanics can redefine level design and player freedom within a platforming experience.",
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
        longDescription: "Elemental Quest is a game in which players explore an abandoned mine in search of valuable ores and chemical elements. By collecting elements and combining them, players can create new substances that unlock deeper levels of the mine.\n" +
            "\n" +
            "The game blends exploration with light educational elements, encouraging players to learn about chemical components through experimentation. Progression is tied to discovery, rewarding curiosity and logical thinking.\n" +
            "\n" +
            "Elemental Quest demonstrates how gameplay systems and educational concepts can reinforce each other. The project focuses on clear mechanics and gradual progression to create a cohesive experience beneath the surface.",
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
        longDescription: "Sonarpop is an innovative music platform focused on music discovery, with transparency and user control at its core. Unlike traditional streaming services, where recommendation algorithms often function as a black box, Sonarpop makes its AI system visible and actively adjustable by the user.\n" +
            "\n" +
            "Users can shape their music preferences through various interactions, such as liking tracks, adjusting genre preferences, and controlling the level of personalization. Additionally, the platform allows users to blacklist artists, genres, and songs, ensuring unwanted content is completely excluded from recommendations. This combination of positive and negative feedback results in a dynamic and highly personalized recommendation model.\n" +
            "\n" +
            "To further increase transparency, Sonarpop includes a statistics page where users can explore their listening behavior and understand what data is used to generate recommendations. This helps improve users’ understanding of how AI systems work and promotes AI literacy.\n" +
            "\n" +
            "Beyond personalized recommendations, users can also manage their own music by creating playlists. This combines intelligent music discovery with the familiar functionality of traditional music platforms.\n" +
            "\n" +
            "Sonarpop is designed for users who not only want to discover new music, but also want control over how those recommendations are generated. By making AI both visible and adjustable, the platform encourages a more transparent and conscious interaction with algorithmic systems.",
        screenshots: sonarpopScreenshots,
        icons: ["React", "TailwindCSS"],
        status: "Showcase",
        liveURL: "https://cmgt.hr.nl/projecten/Sonarpop"
    },
];
