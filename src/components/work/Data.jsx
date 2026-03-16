import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/Work3.png";
import Work4 from "../../assets/Work4.png";
import Work5 from "../../assets/Work5.png";
import Work6 from "../../assets/Work6.png";
import Work7 from "../../assets/Work7.png";
import Work8 from "../../assets/Work8.png";
import Work9 from "../../assets/Work9.png";
import Work10 from "../../assets/Work10.png";
import Work11 from "../../assets/Work11.png";
import Work12 from "../../assets/Work12.png";
import Work13 from "../../assets/Work13.png";
import Work14 from "../../assets/Work14.png";
import Work15 from "../../assets/Work15.png";
import Work16 from "../../assets/Work16.png";
import report from "../../assets/Technical_report_Temporun.pdf";
import dashboardPdf from "../../assets/AIV dashboard.pdf";
import cyclisticImg from "../../assets/cyclistic_case_study.png";
import cyclisticPdf from "../../assets/Huynh Viet Tien _ CASE Study Cyclistic.pdf";
import iucnImg from "../../assets/projectPic/IUCN.png";
import reportPdf from "../../assets/REPORT.pdf";


export const projectsData = [
    {
        id: 18,
        image: iucnImg,
        title: "CS313 - Data Mining and Applications",
        category: ['data', 'University', 'AI'],
        link: reportPdf,
        github: "https://github.com/temneidh/iucn-species-prediction",
        description: "A data mining project focused on predicting species status using various machine learning techniques, developed as part of the CS313 course.",
        techstack: "Python, Machine Learning, Data Mining"
    },
    {
        id: 17,
        image: cyclisticImg,
        title: 'Data Analysis | Case Study Cyclistic',
        category: ['data'],
        link: cyclisticPdf,
        description: 'This case study analyzes 12 months of Cyclistic bike-share data to uncover behavioral differences between casual riders and annual members. Using Python and visualization tools, I explored ride volume, duration patterns, weekday vs. weekend behavior, seasonality, and rideable-type preferences. The findings reveal that casual riders behave like leisure users — riding longer and favoring weekends and warm months — while members show consistent weekday commuting patterns. Based on these insights, I developed three strategic recommendations focused on targeted weekend marketing, value-based messaging for long-duration riders, and seasonal membership campaigns. This project demonstrates my ability to work with large datasets, create compelling visualizations, and translate analysis into actionable business decisions.',
        techstack: 'Python, Google BigQuery, SQL'
    },
    {
        id: 16,
        image: Work16,
        title: 'AIESEC| AIV Dashboard',
        category: ['Web', 'application'],
        link: dashboardPdf,
        github: "https://github.com/SharkTien/aiv-dashboard",
        description: 'A detailed data dashboard for AIESEC developed to provide interactive visualization and analytics for organizational insights.',
        techstack: 'NextJs, SQL, Linux, PM2, Git Actions, DNS Management, SSL, Nginx, Webflow'
    },
    {
        id: 15,
        image: Work15,
        title: 'AI| [Gucci] Case Study - "AI Co-Worker" Engine',
        category: ['AI', 'application'],
        link: "https://drive.google.com/file/d/1VPJe8g4mL97RAQWYscbWydDrpu1lSd6N/view?usp=sharing",
        github: "https://github.com/SharkTien/AI-CoWorker-Engine",
        description: 'An innovative AI Co-Worker Engine developed as a case study for Gucci, leveraging generative AI to streamline workflows.',
        techstack: 'Python, FastAPI, Docker, Milvus'
    },
    {
        id: 10,
        image: Work10,
        title: 'ROOMELSA | AI Challenge',
        category: ['AI'],
        github: 'https://github.com/SharkTien/ROOM_ELSA_BUCCI_GANG',
        description: 'A machine learning solution developed during the ROOMELSA AI Challenge to solve complex data interpretation problems.',
        techstack: 'Python, Faiss, InternVL, CLIP, PyTorch'
    },
    {
        id: 3,
        image: Work3,
        title: 'AI| Event Retrieval from Visual Data - 2024',
        category: ['AI', 'web', 'application'],
        link: "https://github.com/SharkTien/Cross-Modal-Video-Retrieval-Engine-with-Vision-and-Text",
        description: 'An AI engine utilizing cross-modal vision and text models to retrieve specific events from visual data effectively.',
        techstack: 'FastAPI, Javascript, VLM, CLIP, Milvus, Websocket, Nginx, Docker'
    },
    {
        id: 6,
        image: Work6,
        title: 'AI| Signboard detection using YOLO11x.',
        category: ['AI'],
        link: report,
        description: 'A computer vision project that applies the advanced YOLO11x model for accurate signboard detection and localization.',
        techstack: 'Python, YOLO, Augmentation'
    },
    {
        id: 2,
        image: Work1,
        title: 'Spotengfy - Music player - 2023',
        category: ['web'],
        link: "https://sharktien.github.io/spotengfy/",
        github: "https://github.com/SharkTien/spotengfy",
        description: 'This is my first page, a music player web application designed to provide users with a seamless audio streaming experience, featuring playlist management and modern UI.',
        techstack: 'Javascript'
    },
    {
        id: 11,
        image: Work11,
        title: 'SE104 Project | CUE Billiard',
        category: ['web', 'application', 'University'],
        link: 'https://github.com/SharkTien/CUE-PMS',
        description: 'A comprehensive billiard pool management web application created for a university project, featuring booking and resource tracking.',
        techstack: 'SQL, PHP'
    },
    {
        id: 4,
        image: Work4,
        title: 'Freelancer| Loptamlyhoc',
        category: ['web', 'design'],
        link: "https://loptamlyhoc.com/",
        description: 'A responsive and elegantly designed website for Loptamlyhoc, tailored to provide psychological counseling information.',
        techstack: 'PHP, SQL, Wordpress'
    },
    {
        id: 5,
        image: Work5,
        title: 'Freelancer| Navis Danang',
        category: ['web', 'design'],
        link: "https://www.navisdanang.com/",
        description: 'A professional business website for Navis Danang, showcasing their services with a modern layout and optimal user experience.',
        techstack: 'Wix'
    },
    {
        id: 7,
        image: Work7,
        title: 'Freelancer | BabooHouse.',
        category: ['web'],
        link: 'https://baboohouse.com.vn/',
        description: 'A clean and optimized commercial website developed for BabooHouse to strengthen their online presence and reach.',
        techstack: 'PHP, SQL'
    },
    {
        id: 8,
        image: Work8,
        title: 'Freelancer | Leximco.',
        category: ['web'],
        link: 'https://leximco.co.jp/',
        description: 'A corporate website for Leximco featuring an intuitive design, cross-browser compatibility, and a professional aesthetic.',
        techstack: 'PHP, SQL'
    },
    {
        id: 9,
        image: Work9,
        title: 'Freelancer | Ttcenter.',
        category: ['web'],
        link: 'https://ttcenter.com.vn/',
        description: 'A scalable and responsive web platform built for Ttcenter, focusing on performance and user engagement.',
        techstack: 'SQL, Laravel'
    },
    {
        id: 12,
        image: Work12,
        title: 'Freelancer | Utopia',
        category: ['web', 'design'],
        link: 'https://utopia.com.vn/',
        description: 'A creative and vibrant website for Utopia, emphasizing aesthetic UI/UX design and interactive user elements.',
        techstack: 'Wordpress'
    },
    {
        id: 13,
        image: Work13,
        title: 'Freelancer | Center2',
        category: ['web', 'design'],
        link: 'https://center2.tgndigital.xyz/',
        description: 'An elegant digital presence designed and developed for Center2, providing a bespoke user experience.',
        techstack: 'Wordpress'
    },
    {
        id: 14,
        image: Work14,
        title: 'Freelancer | AuraVibe',
        category: ['web', 'design'],
        link: 'https://www.auravibe.org/',
        description: 'A modern, dynamic website for AuraVibe that blends creative web design with seamless browsing functionality.',
        techstack: 'Wix'
    },
    {
        id: 1,
        image: Work2,
        title: 'Astraea - 2021',
        category: ['application'],
        link: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsharktien.github.io%2Fprofile%2Fstatic%2Fmedia%2Fastraea%25C2%25A9sharktien.6812a191754b482ea7a8.docx&wdOrigin=BROWSELINK",
        github: "https://github.com/hoangm960/Astraea",
        description: 'A desktop application project focused on delivering core functionalities with a robust and user-friendly interface.',
        techstack: 'Python, SQL'
    }
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'design',
    },
    {
        name: 'AI',
    },
    {
        name: 'application'
    },
    {
        name: 'University',
    },
    {
        name: 'data',
    }
]