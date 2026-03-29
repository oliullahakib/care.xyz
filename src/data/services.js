import { FaBaby, FaUserNurse, FaHospitalUser } from 'react-icons/fa';
export const services = [
  {
    id: 1,
    title: "Baby Care",
    icon: <FaBaby className="w-16 h-16" />,
    image: "https://www.portea.com/static/f69323d3c0939f32bd92dca3b7cea576/b728a/1366x522_baby-care.jpg",
    price: 800,
    priceUnit: "per hours",
    shortDesc: "Professional & loving care for your little ones",
    description: "Our experienced and caring babysitters provide safe, nurturing, and developmental care for infants and toddlers in the comfort of your home.",
    
    highlights: [
      "Newborn care specialists available",
      "Trained in infant CPR and first aid",
      "Daily activity and progress reports",
      "Flexible timing (full day / half day)",
      "Background verified caregivers"
    ],

    whatWeProvide: [
      "Feeding & nutrition management",
      "Diaper changing & hygiene care",
      "Sleep routine establishment",
      "Playtime & early learning activities",
      "Safety monitoring and supervision"
    ],

    suitableFor: "Infants (0-12 months) and Toddlers (1-4 years)",
    minDuration: 4,
    maxDuration: 24,
    availability: "Available 7 days a week"
  },
  {
    id: 2,
    title: "Elderly Care",
    icon: <FaUserNurse className="w-16 h-16" />,
    image: "https://kiidu.com/imgs/landing/senior-caregiver.webp",
    price: 1200,
    priceUnit: "per hours",
    shortDesc: "Compassionate care for senior citizens",
    description: "We provide respectful, dignified, and personalized care for elderly family members, helping them maintain independence while ensuring their safety and comfort.",
    
    highlights: [
      "24/7 emergency support available",
      "Experienced caregivers for seniors",
      "Medication management & reminders",
      "Companionship to reduce loneliness",
      "Assistance with daily living activities"
    ],

    whatWeProvide: [
      "Personal hygiene and bathing assistance",
      "Mobility support and walking aid",
      "Light housekeeping and meal preparation",
      "Doctor visit accompaniment",
      "Emotional support and conversation"
    ],

    suitableFor: "Senior citizens aged 60+",
    minDuration: 6,
    maxDuration: 24,
    availability: "Available 7 days a week"
  },
  {
    id: 3,
    title: "Sick Care",
    icon: <FaHospitalUser className="w-16 h-16" />,
    image: "https://www.cdc.gov/flu/media/images/2024/09/caring-for-someone-sick.jpg",
    price: 1500,
    priceUnit: "per hours",
    shortDesc: "Professional care for patients & recovery",
    description: "Dedicated medical and personal care support for individuals recovering from illness, surgery, or managing chronic health conditions at home.",
    
    highlights: [
      "Trained in basic nursing care",
      "Post-operative recovery support",
      "Vital signs monitoring",
      "Wound dressing and medication management",
      "Doctor coordination when needed"
    ],

    whatWeProvide: [
      "Post-surgery recovery assistance",
      "Chronic illness management",
      "IV drip and injection support",
      "Pain management assistance",
      "24/7 caregiver availability"
    ],

    suitableFor: "Patients recovering from surgery, illness, or with chronic conditions",
    minDuration: 8 ,
    maxDuration: 24,
    availability: "Available 7 days a week (24/7 on request)"
  }
];