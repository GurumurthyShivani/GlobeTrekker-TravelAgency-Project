import pakg1 from './assets/pakg1.jpg'
import pakg2 from './assets/pakg2.jpg'
import pakg3 from './assets/pakg3.jpg'
import pakg4 from './assets/pakg4.jpg'
import pakg5 from './assets/pakg5.jpg'
import pakg6 from './assets/pakg6.jpg'
import { FaBox } from 'react-icons/fa'
import { RiVerifiedBadgeFill} from 'react-icons/ri'
import { BiSupport } from 'react-icons/bi'

export const tourpackages = [
    {
        name: "Thailand Temples & Beach Getway",
        about: "Explore Thailand’s magnificent temples and relax on its breathtaking beaches for the perfect cultural and tropical escape.",
        btn: "view Tour Detail",
        price: "$299",
        days: "4D/3N",
        pax: "4",
        image: pakg1,
    },
    {
        name: "Swiss Alps & Scenic Train Journey",
        about: "Experience the breathtaking beauty of the Swiss Alps with a relaxing scenic train ride through snow-covered mountains and charming alpine villages in Switzerland.",
        btn: "view Tour Detail",
        price: "$399",
        days: "7D/6N",
        pax: "2",
        image: pakg2,
    },
    {
        name: "New York & Las Vegas City Escape",
        about: "Discover the vibrant energy of New York City and the dazzling nightlife of Las Vegas, famous for entertainment, casinos, and iconic attractions.",
        btn: "view Tour Detail",
        price: "$599",
        days: "5D/3N",
        pax: "3",
        image: pakg3,
    },
    {
        name: "South Korea Seoul & Jeju Island Discovery Tour",
        about: "Explore the vibrant city of Seoul and experience the natural beauty of Jeju City, known for its stunning landscapes and coastal views.",
        btn: "view Tour Detail",
        price: "$276",
        days: "4D/2N",
        pax: "6",
        image: pakg4,
    },
    {
        name: "Egypt Ancient Wonders & Nile Cruise Tour",
        about: "Explore the historic wonders of Cairo, visit the legendary Great Pyramid of Giza, and enjoy a scenic cruise along the Nile River.",
        btn: "view Tour Detail",
        price: "$359",
        days: "7D/5N",
        pax: "6",
        image: pakg5,
    },
    {
        name: "New Zealand Ultimate Scenic Road Trip",
        about: "Discover the breathtaking landscapes of New Zealand, from the lively city of Auckland to the adventure hub Queenstown.",
        btn: "view Tour Detail",
        price: "$899",
        days: "5D/4N",
        pax: "2",
        image: pakg6,
    },
];

export const features = [
    {
        icon: FaBox,
        name: "Professional Tour Guide",
        about: "Our professional tour guides ensure every journey is informative, safe, and truly unforgettable.",
    },
    {
        icon: RiVerifiedBadgeFill,
        name: "Certified Travel Agency",
        about: "As a certified travel agency, we ensure trusted service, professional planning, and safe journeys.",
    },
    {
        icon: BiSupport,
        name: "24/7 Premium Support",
        about: "Our dedicated support team is available 24/7 to ensure a smooth and stress-free travel experience.",
    },
];
