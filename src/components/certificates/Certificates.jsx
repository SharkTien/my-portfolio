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
import soict_cert from '../../assets/cert/soict2025.webp';
import coursera_logo from '../../assets/logos/coursera.svg';
import nv_nvidia_certified_associate_accelerated_data_science from "../../assets/cert/nvidia/nvidia-certified-associate-accelerated-data-science.webp";
import nv_ai_advisor_program_certification from "../../assets/cert/nvidia/ai-advisor-program-certification.webp";
import nv_ai_factory_reference_architectures_certificate from "../../assets/cert/nvidia/ai-factory-reference-architectures-certificate.webp";
import nv_nvidia_enterprise_support_portal_certificate from "../../assets/cert/nvidia/nvidia-enterprise-support-portal-certificate.webp";
import nv_dgx_ai_compute_sales_curriculum from "../../assets/cert/nvidia/dgx-ai-compute-sales-curriculum.webp";
import nv_ai_ignite_curriculum from "../../assets/cert/nvidia/ai-ignite-curriculum.webp";
import nv_cumulus_linux_essentials_certificate from "../../assets/cert/nvidia/cumulus-linux-essentials-certificate.webp";
import nv_infiniband_essentials_certificate from "../../assets/cert/nvidia/infiniband-essentials-certificate.webp";
import nv_netq_deployment_and_installation_certificate from "../../assets/cert/nvidia/netq-deployment-and-installation-certificate.webp";
import nv_npn_marketing_guidelines_curriculum from "../../assets/cert/nvidia/npn-marketing-guidelines-curriculum.webp";
import nv_visualization_technical_curriculum from "../../assets/cert/nvidia/visualization-technical-curriculum.webp";
import nv_dgx_ai_compute_installation_curriculum from "../../assets/cert/nvidia/dgx-ai-compute-installation-curriculum.webp";
import nv_dgx_ai_compute_technical_curriculum from "../../assets/cert/nvidia/dgx-ai-compute-technical-curriculum.webp";
import nv_embedded_compute_technical_curriculum from "../../assets/cert/nvidia/embedded-compute-technical-curriculum.webp";
import nv_nvidia_enterprise_software_technical_curriculum from "../../assets/cert/nvidia/nvidia-enterprise-software-technical-curriculum.webp";
import nv_compute_technical_curriculum from "../../assets/cert/nvidia/compute-technical-curriculum.webp";
import nv_ai_infrastructure_technologies_curriculum from "../../assets/cert/nvidia/ai-infrastructure-technologies-curriculum.webp";
import nv_networking_technical_curriculum from "../../assets/cert/nvidia/networking-technical-curriculum.webp";
import nv_nvidia_technologies_curriculum from "../../assets/cert/nvidia/nvidia-technologies-curriculum.webp";


export const certificatesData = [
    {
        id: 100,
        title: "NVIDIA Certified Associate: Accelerated Data Science",
        issuer: "NVIDIA",
        image: nv_nvidia_certified_associate_accelerated_data_science,
        link: "https://drive.google.com/file/d/1BiSLiaPJN0PdQp1aNe7jlSpXZp0nbXBS/view",
        date: "Sep 16, 2026",
        featured: true,
    },
    {
        id: 101,
        title: "NVIDIA AI Advisor: AI Ignite",
        issuer: "NVIDIA",
        image: nv_ai_advisor_program_certification,
        link: "https://www.credly.com/go/Gb9gLV3f",
        date: "Aug 28, 2026",
        featured: true,
    },
    {
        id: 102,
        title: "AI Factory Reference Architectures",
        issuer: "NVIDIA",
        image: nv_ai_factory_reference_architectures_certificate,
        link: "https://drive.google.com/file/d/1bPBYzL5BcUOHL-tvSg7xuOH24oNbvFOy/view",
        date: "Sep 3, 2026",
    },
    {
        id: 103,
        title: "NVIDIA Enterprise Support Portal",
        issuer: "NVIDIA",
        image: nv_nvidia_enterprise_support_portal_certificate,
        link: "https://drive.google.com/file/d/1VQKo_YAhBYSseL3FjnJjcQKlvXe93zD5/view",
        date: "Sep 3, 2026",
    },
    {
        id: 104,
        title: "DGX AI Compute Sales Curriculum",
        issuer: "NVIDIA",
        image: nv_dgx_ai_compute_sales_curriculum,
        link: "https://drive.google.com/file/d/14XB9mF0lMniexOIgaAIzPA2t6ybz5EVe/view",
        date: "Sep 2, 2026",
    },
    {
        id: 105,
        title: "AI Ignite Curriculum",
        issuer: "NVIDIA",
        image: nv_ai_ignite_curriculum,
        link: "https://drive.google.com/file/d/1VsSf1crKjBECkB_JNBW7sH7iCHq95sWF/view",
        date: "Aug 28, 2026",
    },
    {
        id: 106,
        title: "Cumulus Linux Essentials",
        issuer: "NVIDIA",
        image: nv_cumulus_linux_essentials_certificate,
        link: "https://drive.google.com/file/d/1dm01fl6TCUvxT4cTVZ4iurg2bLmwpE1o/view",
        date: "Aug 28, 2026",
    },
    {
        id: 107,
        title: "InfiniBand Essentials",
        issuer: "NVIDIA",
        image: nv_infiniband_essentials_certificate,
        link: "https://drive.google.com/file/d/1DspzrYfL-plsH2aK2ZGoPL4uEAe2kmk2/view",
        date: "Aug 28, 2026",
    },
    {
        id: 108,
        title: "NetQ Deployment and Installation",
        issuer: "NVIDIA",
        image: nv_netq_deployment_and_installation_certificate,
        link: "https://drive.google.com/file/d/1FY244pjN3Tdb8FNea6yW3j93mwCgeLac/view",
        date: "Aug 28, 2026",
    },
    {
        id: 109,
        title: "NPN Marketing Guidelines Curriculum",
        issuer: "NVIDIA",
        image: nv_npn_marketing_guidelines_curriculum,
        link: "https://drive.google.com/file/d/1RNoKGPO-d462c8S90okb-btPq01zE4kg/view",
        date: "Aug 28, 2026",
    },
    {
        id: 110,
        title: "Visualization Technical Curriculum",
        issuer: "NVIDIA",
        image: nv_visualization_technical_curriculum,
        link: "https://drive.google.com/file/d/12KzEQdb_09WM3y0y9GarCQfnH8-7H4Sh/view",
        date: "Aug 28, 2026",
    },
    {
        id: 111,
        title: "DGX AI Compute Installation Curriculum",
        issuer: "NVIDIA",
        image: nv_dgx_ai_compute_installation_curriculum,
        link: "https://drive.google.com/file/d/1tt8hEDXk2dNK2vEfOtGhaPW6tGIXjJfJ/view",
        date: "Aug 27, 2026",
    },
    {
        id: 112,
        title: "DGX AI Compute Technical Curriculum",
        issuer: "NVIDIA",
        image: nv_dgx_ai_compute_technical_curriculum,
        link: "https://drive.google.com/file/d/1SgD-t0HZFnZpvMyW9Ows-ATOjTUOyacq/view",
        date: "Aug 27, 2026",
    },
    {
        id: 113,
        title: "Embedded Compute Technical Curriculum",
        issuer: "NVIDIA",
        image: nv_embedded_compute_technical_curriculum,
        link: "https://drive.google.com/file/d/1RhuR3o7Zonezvtm2dJV_jSuLUYsTTw8z/view",
        date: "Aug 27, 2026",
    },
    {
        id: 114,
        title: "NVIDIA Enterprise Software Technical Curriculum",
        issuer: "NVIDIA",
        image: nv_nvidia_enterprise_software_technical_curriculum,
        link: "https://drive.google.com/file/d/1GzWRlQA5pYLoTf-dqDYfP6otOFvpmXYN/view",
        date: "Aug 27, 2026",
    },
    {
        id: 115,
        title: "Compute Technical Curriculum",
        issuer: "NVIDIA",
        image: nv_compute_technical_curriculum,
        link: "https://drive.google.com/file/d/1eboXZ8hCTVzeAgbvfBxt73m7ykzcOWH0/view",
        date: "Aug 26, 2026",
    },
    {
        id: 116,
        title: "AI Infrastructure Technologies Curriculum",
        issuer: "NVIDIA",
        image: nv_ai_infrastructure_technologies_curriculum,
        link: "https://drive.google.com/file/d/1aK0TwP14__m68Gv_qYWJSZSRJzaXTGTa/view",
        date: "Aug 24, 2026",
    },
    {
        id: 117,
        title: "Networking Technical Curriculum",
        issuer: "NVIDIA",
        image: nv_networking_technical_curriculum,
        link: "https://drive.google.com/file/d/1WKjrVGWgjwekyWfz6j6V1KtiUPgiI8xj/view",
        date: "Aug 23, 2026",
    },
    {
        id: 118,
        title: "NVIDIA Technologies Curriculum",
        issuer: "NVIDIA",
        image: nv_nvidia_technologies_curriculum,
        link: "https://drive.google.com/file/d/1CEsw4vRNYVMoKZ-dnimuPQjeqFUG8jLS/view",
        date: "Aug 19, 2026",
    },
    {
        id: 1,
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google / Coursera",
        image: google_cert,
        logo: coursera_logo,
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
        id: 9,
        title: "Certificate of Attendance – SoICT 2025, 14th International Symposium on Information and Communication Technology",
        issuer: "SoICT 2025 · Hanoi University of Science and Technology & VNUHCM-University of Science",
        image: soict_cert,
        link: "https://drive.google.com/file/d/1iFp5efrf05b4I3qUpZd5ghBiX2EJYObj/view",
        date: "Dec 14, 2025"
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
