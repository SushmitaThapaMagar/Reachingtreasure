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
import varified_icon from './varified_icon.png'
import info_icon from './info_icon.png'
import love from './love.png'

export const assets ={
    miss,
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
        name : 'Dr. Juliet Denner',
        image : doc1,
        speciality : 'Gynecologist',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Denner has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 4000,
        address : {
            line1 : 'Juliet Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc2',
        name : 'Dr. Jennith Beiber',
        image : doc2,
        speciality : 'Pediatricians',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Jenneith has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 4000,
        address : {
            line1 : 'Jenneith Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc3',
        name : 'Dr. Sampson Kedrick',
        image : doc3,
        speciality : 'Neurologist',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Sampson has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 4000,
        address : {
            line1 : 'Sampson Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc4',
        name : 'Dr. Henna Lee Swa',
        image : doc4,
        speciality : 'Pediatricians',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Henna has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 4000,
        address : {
            line1 : 'Henna Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },

    {
        _id : 'doc5',
        name : 'Dr. Roger Adinando',
        image : doc5,
        speciality : 'Dermatologist',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Roger has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 4000,
        address : {
            line1 : 'Roger Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },


    {
        _id : 'doc6',
        name : 'Dr. Thompson Jehar',
        image : doc6,
        speciality : 'Dermatologist',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Thompson has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 4000,
        address : {
            line1 : 'Thompson Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc7',
        name : 'Dr. Margeto Filence',
        image : doc7,
        speciality : 'General Physician',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Margeto has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 4000,
        address : {
            line1 : 'Simana Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
    {
        _id : 'doc8',
        name : 'Dr. Annah Ortega',
        image : doc8,
        speciality : 'Neurologist',
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Annah has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 4000,
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
        degree : 'MBBS',
        experience : '5 years',
        about : 'Dr. Kelly has a strong skill to deal with people who are losing their mind and soul. She inspires many patients to overcome the disease.',
        fees : 4000,
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
        fees : 4000,
        address : {
            line1 : 'California Niwas, Coloni Line',
            line2 : 'Kathmandu, Nepal'
        }

    },
]
