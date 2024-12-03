import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/Work3.png";
import Work4 from "../../assets/Work4.png";
import Work5 from "../../assets/Work5.png";
import Work6 from "../../assets/Work6.png";
import report from "../../assets/Technical_report_temporun.pdf";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'Spotengfy - Music player - 2023',
        category: ['web'],
        link: "https://sharktien.github.io/spotengfy/"
    },
    {
        id: 2,
        image: Work2,
        title: 'Astraea - 2021',
        category: ['application'],
        link: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsharktien.github.io%2Fprofile%2Fstatic%2Fmedia%2Fastraea%25C2%25A9sharktien.6812a191754b482ea7a8.docx&wdOrigin=BROWSELINK",
    },
    {
        id: 3,
        image: Work3,
        title: 'AI| Event Retrieval from Visual Data - 2024',
        category: ['AI', 'web', 'application'],
        link: "https://github.com/chisngooo/HCM-AIC24"
    },
    {
        id: 4,
        image: Work4,
        title: 'Freelancer| Loptamlyhoc',
        category: ['web', 'design'],
        link: "https://loptamlyhoc.com/"
    },
    {
        id: 5,
        image: Work5,
        title: 'Freelancer| Navis Danang',
        category: ['web', 'design'],
        link: "https://www.navisdanang.com/"
    },
    {
        id: 6,
        image: Work6,
        title: 'AI| Signboard detection using YOLO11x.',
        category: ['AI'],
        link: report
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
    }
]