import logo from './logo.png'
import miss from './miss.jpg'
import profile from './profile.jpg' 
import dropdown from './dropdown.png'
import profiles from './profiles.png'
import Arrow from './Arrow.png'
import s from './s.jpg'
import heart from './heart.jpg'
import Gastroenterologist from './Gastroenterologist.jpg'
import physician from './physician.jpg'
import Dermatologist from './Dermatologist.jpg'
import Gynecologist from './Gynecologist.jpg'
import Pediatricians from './Pediatricians.jpg'
import Neurologist from './Neurologist.jpg'
import banner from './banner.png'
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
import banner3 from './banner3.jpg'
import banner4 from './banner4.png'
import footerbanner from './footerbanner.png'
import team from './team.png'
import hello from './hello.jpg'
import doc1 from './doc1.jpg'
import doc2 from './doc2.jpg'
import doc3 from './doc3.jpg'
import doc4 from './doc4.jpg'
import doc5 from './doc5.jpg'
import doc6 from './doc6.jpg'
import doc7 from './doc7.jpg'
import doc8 from './doc8.jpg'
import doc9 from './doc9.jpg'
import doc10 from './doc10.jpg'
import doc11 from './doc11.png'
import varified_icon from './varified_icon.png'
import info_icon from './info_icon.png'
import love from './love.png'
import care from './care.jpg'
import sushmita from './sushmita.jpg'
import menu from './menu.png'
import cross_icon from './cross_icon.png'

export const assets ={
    cross_icon,
    menu,
    sushmita,
    miss,
    care,
    logo,
    profile,
    dropdown,
    profiles,
    Arrow,
    s,
    heart,
    team,
    banner,
    banner1,
    banner2,
    banner3,
    banner4,
    footerbanner,
    hello,
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    varified_icon,
    info_icon,
    love
}


export const specialityData =[
    {
        speciality : 'General physician',
        image : physician
    },
    {
        speciality : 'Gynecologist',
        image : Gynecologist
    },
    {
        speciality : 'Dermatologist',
        image : Dermatologist
    },
    {
        speciality : 'Pediatricians',
        image : Pediatricians
    },
    {
        speciality : 'Neurologist',
        image : Neurologist
    },
    {
        speciality : 'Gastroenterologist',
        image : Gastroenterologist
    }

]

export const doctors =[
    {
        _id : 'doc1',
        name : 'Dr. Shova Tharu',
        image : doc1,
        speciality : 'Gynecologist',
        degree : 'M.D.',
        experience : '10 years',
        about : 'Dr. Shova has a goal to provide comprehensive, evidence-based care that promotes the reproductive and overall health of women throughout all stages of life. This includes performing preventive screenings, diagnosing and managing gynecological conditions, supporting patients through pregnancy and menopause, and advocating for quality and equity in women’s healthcare.',
        fees : 190000,
        address : {
            line1 : 'Shova Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc2',
        name : 'Dr. Hanna Bhattarai',
        image : doc2,
        speciality : 'Pediatricians',
        degree : 'D.O.',
        experience : '9 years',
        about : 'Dr. Hanna goal is to promote and safeguard the health, growth, and development of children from birth through adolescence by providing comprehensive, preventive, and individualized medical care. Pediatricians aim to prevent disease and injury through regular check-ups, immunizations, and anticipatory guidance, while also diagnosing and treating acute and chronic illnesses. They build trusting relationships with families, offer education and support on nutrition, safety, and healthy lifestyles, and advocate for the physical, emotional, and developmental well-being of every child.',
        fees : 10000,
        address : {
            line1 : 'Hanna Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc3',
        name : 'Dr. Sampson Chaudhary',
        image : doc3,
        speciality : 'Neurologist',
        degree : 'MBBS',
        experience : '10 years',
        about : 'Dr. Sampson goal is to provide compassionate, effective, and evidence-based care for patients with disorders of the nervous system, including the brain, spinal cord, nerves, and muscles. Neurologists aim to accurately diagnose and manage a wide range of neurological conditions by obtaining thorough patient histories, performing comprehensive neurological examinations, and utilizing appropriate diagnostic tools. They strive to localize neurological problems, create prioritized differential diagnoses, and initiate timely treatment, especially in emergencies.',
        fees : 30000,
        address : {
            line1 : 'Sampson Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc4',
        name : 'Dr. Rajina Thapa Magar',
        image : doc4,
        speciality : 'Pediatricians',
        degree : 'D.O.',
        experience : '10 years',
        about : 'Dr. Rajina goal is to promote optimal physical, mental, and social health for infants, children, adolescents, and young adults through preventive care, early intervention, and comprehensive medical support. They focus on routine check-ups, immunizations, growth monitoring, and developmental screenings to detect and address health issues promptly, while managing acute and chronic illnesses across diverse setting.',
        fees : 40000,
        address : {
            line1 : 'Rajina Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },

    {
        _id : 'doc5',
        name : 'Dr. Rogen Ghimire',
        image : doc5,
        speciality : 'Dermatologist',
        degree : 'M.D.',
        experience : '8 years',
        about : 'Dr. Roger goal  is to promote and maintain the health of the skin, hair, and nails by providing expert diagnosis, treatment, and prevention of a wide range of conditions, from common issues like acne and eczema to serious diseases such as skin cancer. Dermatologists aim to deliver patient-centered care by developing personalized treatment plans, performing medical and cosmetic procedures, and educating patients on effective skincare, sun protection, and preventive measures.',
        fees : 41000,
        address : {
            line1 : 'Roger Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },


    {
        _id : 'doc6',
        name : 'Dr. Thompson Shahi',
        image : doc6,
        speciality : 'Dermatologist',
        degree : 'M.D.',
        experience : '9 years',
        about : 'Dr. Thompson goal  is to promote and maintain the health of the skin, hair, and nails by providing expert diagnosis, treatment, and prevention of a wide range of conditions, from common issues like acne and eczema to serious diseases such as skin cancer. Dermatologists aim to deliver patient-centered care by developing personalized treatment plans, performing medical and cosmetic procedures, and educating patients on effective skincare, sun protection, and preventive measures.',
        fees : 12000,
        address : {
            line1 : 'Thompson Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc7',
        name : 'Dr. Ram B. Thami',
        image : doc7,
        speciality : 'General Physician',
        degree : 'M.D.',
        experience : '5 years',
        about : 'Dr. Ram goal is to provide comprehensive, patient-centered primary care that promotes overall health and well-being for individuals and families across all ages and backgrounds. General physicians serve as the first point of contact in the healthcare system, diagnosing and treating a wide range of acute and chronic conditions, offering preventive care through regular check-ups, screenings, immunizations, and health education, and guiding patients in making healthy lifestyle choices. They coordinate care by referring patients to specialists when necessary, manage ongoing health concerns, and advocate for their patients’ needs within the healthcare system. By building long-term relationships and delivering holistic care, general physicians play a crucial role in improving health outcomes, reducing disease burden, and ensuring continuity of care within the community.',
        fees : 14000,
        address : {
            line1 : 'Ram Bahadur Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc8',
        name : 'Dr. Annah Shrestha',
        image : doc8,
        speciality : 'Neurologist',
        degree : 'M.D.',
        experience : '5 years',
        about : 'Dr. Annah has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 18000,
        address : {
            line1 : 'Annah Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc9',
        name : 'Dr. Kelly Hussan',
        image : doc9,
        speciality : 'General Physician',
        degree : 'M.D.',
        experience : '5 years',
        about : 'Dr. Kelly goal is to provide comprehensive, patient-centered primary care that promotes overall health and well-being for individuals and families across all ages and backgrounds. General physicians serve as the first point of contact in the healthcare system, diagnosing and treating a wide range of acute and chronic conditions, offering preventive care through regular check-ups, screenings, immunizations, and health education, and guiding patients in making healthy lifestyle choices. They coordinate care by referring patients to specialists when necessary, manage ongoing health concerns, and advocate for their patients’ needs within the healthcare system. By building long-term relationships and delivering holistic care, general physicians play a crucial role in improving health outcomes, reducing disease burden, and ensuring continuity of care within the community.',
        fees : 14000,
        address : {
            line1 : 'Kelly Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc10',
        name : 'Dr. Denver Funky',
        image : doc10,
        speciality : 'Gastroenterologist',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Denver has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 90000,
        address : {
            line1 : 'California Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc11',
        name : 'Dr. Marilyn Thapa',
        image : doc11,
        speciality : 'Gastroenterologist',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Marilyn has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 40000,
        address : {
            line1 : 'Marilyn Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
]


export default assets