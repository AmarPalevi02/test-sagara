import { global, empowering, expertise } from "../assets"
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiCursorClick } from "react-icons/hi";
import { RiBook2Fill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa"
import { FaGraduationCap } from "react-icons/fa6";

export const items = [
   {
      icon: global,
      title: 'Global Credibility Boost',
      des: 'Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.',
   },
   {
      icon: expertise,
      title: 'Empowering Careers',
      des: 'Equipped to advance your career, secure promotions, and pursue new job opportunities in the ever-evolving tech industry. ',
   },
   {
      icon: empowering,
      title: 'Expertise Validation',
      des: 'Showcase your expertise and validate your skills with globally recognized certifications that employers trust.',
   },
]

export const certifications = [
   {
      hastag: '#1',
      title: 'Register Account',
      icon: <HiMiniUserGroup />,
      des: 'Begin your journey by creating an account on Sagara IT Certification platform. Simply fill out the registration form to get started.'
   },
   {
      hastag: '#2',
      title: 'Select the Type ',
      icon: <HiCursorClick />,
      des: 'Choose from a variety of IT certification options tailored to your career goals and interests.  Select the certification that aligns with your expertise.'
   },
   {
      hastag: '#3',
      title: 'Register and Pay',
      icon: <RiBook2Fill />,
      des: 'Enroll in your chosen certification program by completing the registration process and making payment securely through our platform.'
   },
   {
      hastag: '#4',
      title: 'Take Test',
      icon: <FaClipboardList />,
      des: 'Prepare for your certification exam and schedule a convenient time to take the test online. '
   },
   {
      hastag: '#5',
      title: 'Get the certificate',
      icon: <FaGraduationCap />,
      des: 'Upon successful completion of the exam, receive your certification digitally, instantly validating your skills and expertise in the chosen IT field.'
   }
]