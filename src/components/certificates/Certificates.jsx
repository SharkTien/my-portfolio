import React from 'react';
import { motion } from 'framer-motion';
import './certificates.css';
import google_cert from '../../assets/cert/google_cert.png';
import aic_cert from '../../assets/cert/PotentialAIC.png';
import kyoto_cert from '../../assets/cert/KyotoUni.png';
import avepoint_cert from '../../assets/cert/Avepoint.png';
import nvidia_cert from '../../assets/cert/NVIDIA.png';
import udemy_cert from '../../assets/cert/udemy_AIreact.png';
import aiesec_cert from '../../assets/cert/AIESEC_1.png';


const certificatesData = [
    {
        id: 1,
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google / Coursera",
        image: google_cert,
        link: "https://www.credly.com/badges/99953c7a-127a-4055-9af4-2bbcc42fcc3e/linked_in_profile",
        date: "March 16, 2026"
    },
    {
        id: 8,
        title: "React.js AI Chatbot built with ChatGPT, Gemini and DeepSeek",
        issuer: "Udemy",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-14727a1b-bf32-4f6a-9c3d-7021d1fe4568.pdf",
        image: udemy_cert,
        date: "Feb 28, 2026"
    },
    {
        id: 6,
        title: "Software Developer Immersive Trainee Program Certificate",
        issuer: "MaivenPoint Academy",
        link: "https://drive.google.com/file/d/1ATdkuaVHFuWLMb-CtfU_FS5XzKPX8fiR/view?usp=sharing",
        image: avepoint_cert,
        date: "Feb 6, 2026"
    },
    {
        id: 4,
        title: "AI Challenge – Ho Chi Minh City 2025 - Top 24",
        issuer: "HCMC AI Department",
        link: "https://drive.google.com/file/d/1LXG3CYcK0uP8Rh3T7oRX1Sfxz8F4oigO/view?usp=sharing",
        image: aic_cert,
        date: "Nov 24, 2025"
    },
    {
        id: 7,
        title: "Applications of AI for Anomaly Detection",
        issuer: "NVIDIA",
        link: "https://learn.nvidia.com/certificates?id=dsw74d0xT4aM07akEt6U5Q",
        image: nvidia_cert,
        date: "Nov 13, 2025"
    },
    {
        id: 5,
        title: "Student Exchange Program",
        issuer: "Kyoto University (Graduate School of Global Environmental Studies)",
        link: "https://drive.google.com/file/d/1x_EFMHUqjrGT3uvCYysqCw6XhQIk54QJ/view?usp=sharing",
        image: kyoto_cert,
        date: "Aug 15, 2025"
    },
    {
        id: 2,
        title: "Guest Speaker – AIESEC Future Leaders Winter Peak 2024",
        issuer: "AIESEC in Jakarta",
        image: aiesec_cert,
        link: "https://drive.google.com/file/d/1CegH8ctDlFpj4eUlASMEfZptrwK2fJx5/view?usp=sharing",
        date: "Dec 14, 2024"
    }
];

const Certificates = () => {
    return (
        <div className="certificates__inventory">
            <h3 className="certificates__inventory-title">Certificates Inventory</h3>
            <div className="certificates__container-inventory grid">
                {certificatesData.map((item, index) => (
                    <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="certificates__slot"
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <div className="certificates__slot-img-wrapper">
                            <img src={item.image} alt={item.title} className="certificates__slot-img" />
                            <div className="certificates__slot-overlay-permanent">
                                <div className="certificates__slot-info">
                                    <h4 className="certificates__slot-title">{item.title}</h4>
                                    <p className="certificates__slot-date">{item.date}</p>
                                </div>
                                <div className="certificates__slot-link-icon">
                                    <i className="uil uil-external-link-alt"></i>
                                </div>
                            </div>
                        </div>
                    </motion.a>
                ))}
                {[...Array(Math.max(0, 6 - certificatesData.length))].map((_, i) => (
                    <div className="certificates__slot certificates__slot-empty" key={`empty-${i}`}></div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
