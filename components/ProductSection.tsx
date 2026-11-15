'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroVisual from '@/components/HeroVisual';

interface ProductPageCopy {
  heroEyebrow: string;
  heroTitle: string;
  heroQuestion?: string;
  heroDescription: string;
  heroAdditionalDescription?: string[];
  heroEmphasis?: string;
  heroPrimaryLabel?: string;
  heroPrimaryHref?: string;
  heroSecondaryLabel?: string;
  heroSecondaryArrow?: boolean;
  heroSecondaryTarget?: string;
  navigationCtaLabel?: string;
  navigationCtaHref?: string;
  navigation: {
    label: string;
    target: string;
  }[];
  benefitsHeading: string;
  benefits: {
    title: string;
    description: string;
  }[];
  aboutHeading: string;
  aboutDescription: string;
  aboutEmphasis?: string;
  aboutCta?: string;
  aboutCtaHref?: string;
  capabilitiesHeading: string;
  capabilities: {
    title: string;
    description: string;
    anchor?: string;
  }[];
  rolesHeading: string;
  rolesEyebrow?: string;
  rolesSupportHeading?: string;
  rolesSectionId?: string;
  roles: {
    role: string;
    description: string;
  }[];
  branches?: {
    eyebrow: string;
    heading: string;
    description: string;
    points: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  bannerHeading: string;
  bannerEmphasis?: string;
  bannerDescription: string;
  bannerCta: string;
  bannerCtaHref?: string;
  bannerClosing?: string;
}

interface ProductItem {
  id: string;
  name: string;
  letter: string;
  letterBg: string;
  tagline: string;
  category: string;
  summary: string;
  status: 'Live' | 'In Development';
  action: string;
  request: string;
  techStack?: string[];
  image: string;
  imageFit?: 'cover' | 'contain';
  imageAlt: string;
  imageCaption: string;
  detailCategory: string;
  detailHeadline: string;
  detailIntro: string;
  detailFeatures: {
    title: string;
    description: string;
  }[];
  detailClosing: string;
  exploreLabel: string;
  sections: {
    heading: string;
    description: string;
  }[];
  highlights: string[];
  productPage?: ProductPageCopy;
}

const products: ProductItem[] = [
  {
    id: 'ferticare',
    name: 'FertiCare',
    letter: 'F',
    letterBg: 'bg-emerald-500',
    tagline: 'Fertility & Women\'s Health',
    category: 'FERTILITY & WOMEN\'S HEALTH',
    summary: 'Specialized fertility and women\'s healthcare workflows for OBGYNs, fertility specialists, IVF centres, and women\'s healthcare clinics.',
    status: 'Live',
    action: 'REQUEST A DEMO',
    request: 'Demo request',
    image: '/Products/ferticare-ascas-dashboard.png',
    imageAlt: 'ASCA fertility clinic dashboard showing billing totals and administrative controls',
    imageCaption: 'ASCA dashboard preview',
    detailCategory: 'FERTILITY & WOMEN’S HEALTH MANAGEMENT',
    detailHeadline: 'Every Patient Journey Matters. Every Detail Counts.',
    detailIntro: 'Fertility care involves complex treatment cycles, couple-based medical histories, clinical documentation, and multiple investigations. Managing these across disconnected systems makes continuity of care difficult. FertiCare brings the entire fertility care workflow together, helping specialists manage patient journeys with better clinical visibility and operational control.',
    detailFeatures: [
      { title: 'Unified Patient Records', description: 'Couple-based profiles, medical histories, and consultation records in one place.' },
      { title: 'Treatment Cycle Management', description: 'Structured tracking of OI, IUI, and IVF journeys.' },
      { title: 'Clinical Documentation', description: 'Specialized templates for consultations, procedures, and investigations.' },
      { title: 'Integrated Operations', description: 'Laboratory reports, billing, packages, and payment tracking.' },
      { title: 'Patient Communication', description: 'Automated appointment reminders and communication workflows.' }
    ],
    detailClosing: 'Built for fertility centres that need more than a general clinic management system.',
    exploreLabel: 'EXPLORE FERTICARE',
    techStack: ['Next.js', 'React', 'Node.js', 'AWS'],
    sections: [
      {
        heading: 'PATIENT MANAGEMENT',
        description: 'Digital registration, Couple-based records, EMR, Medical history, Document storage.'
      },
      {
        heading: 'FERTILITY TRACKING',
        description: 'OI, IUI, and IVF cycle tracking, Treatment history.'
      },
      {
        heading: 'LABORATORIES & BILLING',
        description: 'Investigations / Lab reports, Semen analysis / DFI reports, Packages / Payments.'
      }
    ],
    highlights: ['Couple-based EMR', 'IUI/IVF Tracking', 'Semen & DFI Reports', 'WhatsApp Reminders'],
    productPage: {
      heroEyebrow: 'FERTILITY CENTRE MANAGEMENT PLATFORM',
      heroTitle: 'FertiCare: Complete Fertility Centre Management Software',
      heroQuestion: 'What is FertiCare?',
      heroDescription: 'FertiCare is an all-in-one fertility centre management platform that unifies centre administration, inpatient wards, IVF labs, operation theatres, and multi-branch finances into a single connected ecosystem. By replacing disconnected software, FertiCare ensures seamless patient care and operational clarity.',
      navigation: [
        { label: 'About', target: '#about' },
        { label: 'Platform', target: '#platform' },
        { label: 'Modules', target: '#modules' },
        { label: 'Branches', target: '#branches' }
      ],
      benefitsHeading: 'How does FertiCare improve fertility centre operations?',
      benefits: [
        { title: 'Unifies Patient Records', description: 'Centralises patient registration, unique patient identification, clinical dashboards, continuous monitoring, and patient records in one secure location to eliminate scattered data.' },
        { title: 'Automates Clinical Workflows', description: 'Eliminates missed appointments and manual follow-up calls through smart scheduling and automated WhatsApp reminders.' },
        { title: 'Controls Multi-Branch Operations', description: 'Connects integrated billing, live bed tracking, dedicated IVF lab suites, and multi-branch access control for total financial and laboratory clarity.' }
      ],
      aboutHeading: 'Why choose FertiCare for complete fertility clinic management?',
      aboutDescription: 'Running a fertility centre involves coordinating departments, maintaining laboratory records, tracking procedures, and monitoring finances. FertiCare brings your entire institution together by offering branch-based login, user administration, clinical staff management, and complete system audit trails designed specifically for the complexities of reproductive care.',
      aboutCta: 'Schedule a Product Demonstration',
      capabilitiesHeading: 'What features does FertiCare offer for IVF clinics and fertility centres?',
      capabilities: [
        { title: 'Patient Care & Administration', description: 'Centralises front-office workflows with instant patient registration, unique patient identification, and clinical dashboards. Manages appointment scheduling with automated WhatsApp reminders, generates discharge summaries, and effortlessly processes consultation, scan, procedure, injection, and concession billing.' },
        { title: 'Complete Inpatient (IP) Management', description: 'Provides real-time visibility from admission to settlement through live bed occupancy, ward and recovery-bed tracking, reservations, and patient transfers. Streamlines inpatient billing, treatment packages, additional charges, and outstanding balances alongside automated ALOS and doctor earnings reports.' },
        { title: 'Specialised Fertility Treatment', description: 'Manages reproductive care with dedicated clinical workflows for IVF, ICSI, IUI, and ovulation induction. Tracks treatment progression, manages custom fertility packages and add-on services, and generates detailed fertility analytics.' },
        { title: 'IVF Laboratory & Embryology', description: 'Integrates laboratory records into your operational ecosystem with specialised modules for embryology and andrology. Maintains digital embryology registers, performs real-time embryo tracking, oversees cryopreservation, and generates standardised patient reports.' },
        { title: 'Operation Theatre & Surgery', description: 'Coordinates surgical teams with live OT scheduling, daily OT lists, theatre availability, and in-progress case tracking. Oversees clinical staff, OT administration, barcode generation, outsourced samples, NABH-related OT reports, WhatsApp sharing, and payout management.' },
        { title: 'Procedure & Day-Care Management', description: 'Organises in-house and external procedures with dedicated scheduling, patient lists, outside ASCAS facility management, and external referral tracking. Supports specialised workflows for Cervical Cerclage and D&C procedures alongside fee tracking and discharge documentation.' },
        { title: 'Pharmacy & Financial Control', description: 'Connects drug inventory and daily pharmacy operations directly with institutional finances. Manages comprehensive billing with granular service-wise charges, concessions, packages, and real-time outstanding balance monitoring.' },
        { title: 'Reporting & Institutional Insights', description: 'Converts operational data into actionable clarity with comprehensive reports for pharmacy, billing, and doctor earnings. Provides visual charts and one-click downloads for ALOS, OT, NABH, embryology, andrology, and fertility analytics.' }
      ],
      rolesHeading: 'Who uses FertiCare in a fertility centre?',
      roles: [
        { role: 'Centre Administrators', description: 'Gain full visibility into admissions, live bed occupancy, billing, inventory, and overall institutional performance.' },
        { role: 'Fertility Specialists', description: 'Manage IVF, ICSI, IUI, ovulation induction, and fertility treatment progression in a specialised clinical environment.' },
        { role: 'Embryologists & Lab Teams', description: 'Maintain structured digital records for embryology, embryo tracking, cryopreservation, and andrology reporting.' },
        { role: 'Doctors & Consultants', description: 'Access organised patient histories, OT schedules, and treatment records through dedicated clinical workflows.' },
        { role: 'Front-Office & Admin Teams', description: 'Simplify patient registration, WhatsApp appointment coordination, billing workflows, and everyday administrative tasks.' },
        { role: 'Centre Management', description: 'Review departmental reports, financial activities, fertility analytics, and branch-level operations.' }
      ],
      branches: {
        eyebrow: 'MULTI-BRANCH OPERATIONS',
        heading: 'Keep every fertility centre connected.',
        description: 'Branch-based logins and multi-branch access control help teams manage location-specific workflows, while consolidated financial and operational reporting gives centre management a unified view across locations.',
        points: ['Branch-based logins', 'Multi-branch access control', 'Consolidated financial and operational reporting', 'Complete system audit trails']
      },
      faqs: [
        { question: 'How does FertiCare manage embryology and IVF lab records?', answer: 'FertiCare includes dedicated IVF lab suites that maintain digital embryology registers, perform real-time embryo tracking, oversee cryopreservation, and generate standardised embryology and andrology reports.' },
        { question: 'Can FertiCare handle multi-branch clinic operations?', answer: 'Yes, FertiCare provides multi-branch access control, branch-based logins, and consolidated financial and operational reporting for centre management across all locations.' },
        { question: 'Does FertiCare integrate clinic billing with the pharmacy?', answer: 'Yes, FertiCare connects drug inventory and daily pharmacy operations directly with institutional finances, allowing administrators to manage service-wise charges, concessions, packages, and real-time outstanding balances in one place.' }
      ],
      bannerHeading: 'Your Fertility Centre Deserves More Than Disconnected Software.',
      bannerDescription: 'Manage Better. Coordinate Smarter. Deliver Connected Care—all from one unified platform.',
      bannerCta: 'Schedule a Product Demonstration'
    }
  },
  {
    id: 'gym-pad',
    name: 'GymPad',
    letter: 'G',
    letterBg: 'bg-orange-500',
    tagline: 'Smart Fitness Management',
    category: 'SMART FITNESS MANAGEMENT',
    summary: 'GymPad is tailored to heavy business operations by helping gym owners, trainers, and members coordinate memberships, schedules, attendance, and financial tracking.',
    status: 'In Development',
    action: 'DISCUSS DEVELOPMENT',
    request: 'Development discussion',
    image: '/Products/gympad-fitness-illustration.png',
    imageAlt: 'Fitness website artwork showing gym equipment and a training promotion',
    imageCaption: 'GymPad concept dashboard',
    detailCategory: 'FITNESS & GYM MANAGEMENT',
    detailHeadline: 'Less Time Managing the Gym. More Time Growing It.',
    detailIntro: 'Managing memberships, trainer schedules, attendance, and member progress through separate processes creates unnecessary administrative work and a disconnected fitness experience. GymPad brings gym owners, trainers, and members onto one platform, making everyday fitness operations easier to coordinate and manage.',
    detailFeatures: [
      { title: 'Membership Management', description: 'Goal-aligned subscriptions for weight loss, muscle gain, and fitness programs.' },
      { title: 'Trainer Coordination', description: 'Centralized schedules, trainee assignments, and attendance.' },
      { title: 'Smart Slot Booking', description: 'Simplified training session scheduling and availability management.' },
      { title: 'Member Engagement', description: 'Direct trainer communication and personalized diet guidance.' },
      { title: 'Progress Visibility', description: 'Track attendance, fitness progress, and training activities.' }
    ],
    detailClosing: 'One connected platform. From the front desk to the fitness floor.',
    exploreLabel: 'EXPLORE GYMPAD',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    sections: [
      {
        heading: 'FOR GYM OWNERS',
        description: 'Membership management, Attendance, Trainer records, Daily operations.'
      },
      {
        heading: 'FOR TRAINERS',
        description: 'Schedules, Member attendance, Diet charts, Progress monitoring.'
      },
      {
        heading: 'FOR MEMBERS',
        description: 'Subscriptions, Slot booking, Attendance, Fitness progress.'
      }
    ],
    highlights: ['Goal-Aligned Subscriptions', 'Integrated Trainer Chat', 'Real-Time Slot Booking', 'Direct Trainer Guidance'],
    productPage: {
      heroEyebrow: 'FITNESS & GYM MANAGEMENT',
      heroTitle: 'GymPad: Complete Gym & Fitness Management Software',
      heroQuestion: 'What is GymPad?',
      heroDescription: 'GymPad is an integrated gym management platform that brings member registration, trainer scheduling, session bookings, personalized workout and diet planning, and membership administration into one connected ecosystem. By replacing manual tracking and scheduling chaos with centralised digital workflows, GymPad helps fitness facilities streamline daily operations, improve trainer productivity, and deliver a more organised fitness experience.',
      navigation: [
        { label: 'About', target: '#about' },
        { label: 'Platform', target: '#platform' },
        { label: 'Modules', target: '#modules' },
        { label: "Who It's For", target: '#who-its-for' }
      ],
      benefitsHeading: 'How does GymPad improve gym operations?',
      benefits: [
        { title: 'Eliminates Scheduling Chaos', description: 'Replaces manual whiteboards, scattered calendars, and unorganised appointment tracking with structured session requests and trainer scheduling, helping prevent double-bookings and missed appointments.' },
        { title: 'Empowers Trainers to Do More', description: 'Allows trainers to manage up to three trainees per session while creating personalised workout routines and diet plans, keeping coaching activities organised without unnecessary administrative work.' },
        { title: 'Connects Members and Management', description: 'Brings member registration, membership plans, trainer assignments, session activity, and fitness progress together, giving gym administrators better operational visibility and members a more organised training experience.' }
      ],
      aboutHeading: 'Why choose GymPad for complete gym management?',
      aboutDescription: 'Running a successful fitness facility requires more than providing workout equipment. It involves coordinating trainers, managing session availability, organising memberships, creating personalised fitness plans, and keeping track of member progress. GymPad brings these essential activities together through a centralised platform with dedicated user roles, structured scheduling workflows, trainer management, and member progress tracking designed to simplify everyday gym operations.',
      aboutCta: 'Schedule a Product Demonstration',
      capabilitiesHeading: 'What features does GymPad offer for gyms and fitness studios?',
      capabilities: [
        { title: 'Member Registration & Profile Management', description: 'Simplifies member onboarding through digital sign-ups and centralised member profiles. Maintains membership status and personal fitness information, including weight, BMI, and attendance history, giving members and trainers an organised view of their fitness journey.' },
        { title: 'Trainer & Session Management', description: 'Organises trainer profiles, availability, trainee assignments, and daily session schedules through dedicated management workflows. Allows trainers to manage up to three trainees per session while maintaining structured training schedules.' },
        { title: 'Session Booking & Scheduling', description: 'Replaces manual appointment tracking with a structured session request and booking process. Enables members to request training sessions while helping trainers manage their schedules and avoid overlapping appointments.' },
        { title: 'Personalised Workout Planning', description: "Enables trainers to create, customise, and assign individual workout routines based on each trainee's fitness goals. Keeps training plans accessible so members can follow their assigned workout schedules." },
        { title: 'Diet & Nutrition Planning', description: 'Supports personalised fitness coaching through trainer-created diet plans. Allows members to access their assigned nutrition plans alongside their workout routines.' },
        { title: 'Membership Plan Management', description: 'Centralises membership administration through organised membership plans and tiers. Helps administrators manage member subscriptions and monitor active membership statuses.' },
        { title: 'Member Activity & Progress Tracking', description: 'Maintains fitness-related information such as weight, BMI, attendance, and recent workout activity. Helps members and trainers review progress and maintain visibility into training activities.' },
        { title: 'Administrative & User Management', description: 'Provides administrators with centralised control over trainers, members, membership plans, and facility operations. Supports dedicated access and workflows for administrators, trainers, and members.' }
      ],
      rolesHeading: 'Who uses GymPad in a fitness facility?',
      roles: [
        { role: 'Gym Administrators & Owners', description: 'Manage trainers, membership plans, member registrations, user access, and overall gym operations through centralised administration.' },
        { role: 'Personal Trainers & Coaches', description: 'Manage trainee assignments, handle session requests, organise up to three trainees per session, and create personalised workout and diet plans.' },
        { role: 'Gym Members & Trainees', description: 'Register on the platform, request training sessions, access assigned workout and diet plans, and monitor personal fitness information such as weight, BMI, and attendance.' }
      ],
      faqs: [
        { question: 'What is GymPad gym management software?', answer: 'GymPad is a gym and fitness management platform that helps fitness facilities manage members, trainers, session scheduling, workout plans, diet plans, memberships, and fitness progress through one centralised system.' },
        { question: 'How does GymPad prevent trainer scheduling conflicts?', answer: 'GymPad replaces manual calendars and scattered appointment tracking with structured session requests and trainer scheduling workflows, helping trainers organise their availability and avoid overlapping sessions.' },
        { question: 'How many trainees can a trainer manage in one session?', answer: 'GymPad allows trainers to manage up to three trainees per session, helping them organise their training schedules while maintaining individual workout and diet plans for each trainee.' },
        { question: 'Can trainers create personalised workout and diet plans?', answer: 'Yes. Trainers can create and assign customised workout routines and diet plans to their trainees, making it easier to organise fitness coaching and keep members aligned with their training goals.' },
        { question: 'How can gym members book training sessions through GymPad?', answer: 'Members can register on the platform and submit session requests through their dashboard, giving them a structured way to request training sessions without relying on manual communication.' },
        { question: 'Can gym administrators manage trainers and membership plans?', answer: 'Yes. GymPad provides administrators with centralised management capabilities for trainers, members, membership plans, and facility operations.' },
        { question: 'Can members track their fitness progress through GymPad?', answer: 'Yes. Members can access personal fitness information such as weight, BMI, attendance, and recent workout activity through their dashboards.' }
      ],
      bannerHeading: 'Your Gym Deserves More Than Manual Tracking and Scheduling Chaos.',
      bannerEmphasis: 'Manage Smarter. Empower Trainers. Keep Members Moving Forward.',
      bannerDescription: 'Bring trainers, members, memberships, and fitness activities together through one connected platform.',
      bannerCta: 'Schedule a Product Demonstration'
    }
  },
  {
    id: 'aculabs',
    name: 'AcuLabs',
    letter: 'A',
    letterBg: 'bg-cyan-600',
    tagline: 'Connected Laboratory Operations',
    category: 'LABORATORY MANAGEMENT SOFTWARE',
    summary: 'AcuLabs connects patient registration, test orders, sample tracking, result entry, report verification, and billing through one organised laboratory management platform.',
    status: 'In Development',
    action: 'BOOK A DEMO',
    request: 'Demo request',
    image: '/Products/aculabs-lab-illustration.svg',
    imageAlt: 'Illustration of connected AcuLabs laboratory workflows',
    imageCaption: 'AcuLabs laboratory workflow illustration',
    detailCategory: 'LABORATORY MANAGEMENT',
    detailHeadline: 'From Sample Collection to Verified Reports. One Connected Laboratory.',
    detailIntro: 'AcuLabs brings your laboratory operations together — patient registration, test orders, sample tracking, result entry, report verification and billing.',
    detailFeatures: [
      { title: 'Patient & Test Management', description: 'Register patients, organise test catalogues, and create test orders.' },
      { title: 'Sample & Result Workflows', description: 'Track samples, enter results, and maintain organised result records.' },
      { title: 'Verified Reports & Billing', description: 'Review reports before release and manage test-related billing and payments.' }
    ],
    detailClosing: 'Less manual coordination. More organised workflows. Greater confidence in every report.',
    exploreLabel: 'EXPLORE ACULABS',
    sections: [
      { heading: 'PATIENTS & TEST ORDERS', description: 'Patient registration, test catalogues, and test order tracking.' },
      { heading: 'SAMPLES & RESULTS', description: 'Sample collection, processing stages, and structured result entry.' },
      { heading: 'REPORTS & BILLING', description: 'Report verification, report generation, billing, and payment records.' }
    ],
    highlights: ['Test Order Tracking', 'Sample Management', 'Report Verification', 'Laboratory Billing'],
    productPage: {
      heroEyebrow: 'LABORATORY MANAGEMENT PLATFORM',
      heroTitle: 'From Sample Collection to Verified Reports. One Connected Laboratory.',
      heroDescription: 'AcuLabs brings your laboratory operations together — patient registration, test orders, sample tracking, result entry, report verification and billing.',
      heroEmphasis: 'Less manual coordination. More organised workflows. Greater confidence in every report.',
      heroSecondaryLabel: 'Explore Platform',
      heroSecondaryArrow: false,
      navigation: [
        { label: 'About', target: '#about' },
        { label: 'Platform', target: '#platform' },
        { label: 'Modules', target: '#modules' },
        { label: "Who It's For", target: '#who-its-for' }
      ],
      benefitsHeading: 'A Better Way to Run Your Laboratory',
      benefits: [
        { title: 'Keep Every Test on Track', description: 'Follow each test from order creation to final report without losing track of its progress.' },
        { title: 'Bring Accuracy into Reporting', description: 'Structured result entry and review workflows help reduce manual errors and ensure reports go through verification before approval.' },
        { title: 'Simplify Daily Operations', description: 'Connect patient details, test orders, billing, samples and reports in one organised platform.' }
      ],
      aboutHeading: 'Your Laboratory. One Organised Workflow.',
      aboutDescription: 'Running a laboratory involves more than conducting tests. Every patient, sample, test order and report needs to move through the right process. AcuLabs connects these activities through a centralised laboratory management platform. From the moment a patient walks in to the moment their verified report is ready, your team can manage the entire workflow without switching between disconnected systems.',
      aboutEmphasis: 'One platform. Connected processes. Better laboratory management.',
      aboutCta: 'Schedule a Product Demonstration',
      capabilitiesHeading: 'Everything Your Laboratory Needs to Operate Smoothly.',
      capabilities: [
        { title: 'Patient Management', description: 'Register patients, maintain their information and access their laboratory history.' },
        { title: 'Test Catalogue Management', description: 'Organise available laboratory tests, test details and associated charges.' },
        { title: 'Test Order Management', description: 'Create test requests and track their progress throughout the laboratory workflow.' },
        { title: 'Sample Management', description: 'Manage sample collection and monitor sample processing stages.' },
        { title: 'Result Entry & Management', description: 'Enter test results using structured report templates and maintain organised result records.' },
        { title: 'Report Review & Verification', description: 'Ensure reports pass through review and approval before being released as final reports.' },
        { title: 'Report Generation', description: 'Generate professional laboratory reports and provide access to completed patient reports.' },
        { title: 'Billing & Payments', description: 'Manage test charges, patient bills and payment records alongside laboratory operations.' },
        { title: 'Dashboard & History', description: 'Get an overview of laboratory activities and access previous test records and reports.' }
      ],
      rolesHeading: 'Everyone Has a Role. Every Process Has Its Place.',
      rolesEyebrow: 'DESIGNED AROUND YOUR LABORATORY TEAM',
      roles: [
        { role: 'Laboratory Administrators', description: 'Manage laboratory operations, users, test catalogues and overall activities.' },
        { role: 'Reception & Front-Office Teams', description: 'Register patients, create test orders and handle billing.' },
        { role: 'Laboratory Technicians', description: 'Manage samples, perform assigned tests and enter results.' },
        { role: 'Reviewing Professionals', description: 'Review test results, verify reports and approve them for release.' },
        { role: 'Laboratory Management', description: 'Monitor operations, track activities and maintain visibility across the laboratory.' }
      ],
      faqs: [
        { question: 'What is AcuLabs?', answer: 'AcuLabs is a laboratory management system that helps laboratories manage patient registration, test orders, samples, results, reports and billing through one platform.' },
        { question: 'Can AcuLabs manage the complete testing workflow?', answer: 'Yes. It supports the workflow from patient registration and test ordering through sample handling, result entry, review and final report generation.' },
        { question: 'Can laboratory reports be reviewed before release?', answer: 'Yes. Reports follow a structured workflow of Draft, Under Review and Approved, ensuring results are reviewed before becoming final reports.' },
        { question: 'Can we manage different laboratory tests?', answer: 'Yes. The test catalogue allows laboratories to organise their available tests and associated details.' },
        { question: 'Does AcuLabs support report generation?', answer: 'Yes. Laboratory results can be organised into report templates and generated as final reports.' },
        { question: 'Can we manage billing within the platform?', answer: 'Yes. AcuLabs supports test-related billing and payment record management.' },
        { question: 'Can different staff members have different access?', answer: 'Yes. Role-based access helps ensure that staff members can access the functions relevant to their responsibilities.' }
      ],
      bannerHeading: 'Make Every Laboratory Process Count.',
      bannerDescription: 'Stop managing laboratory operations through disconnected records and manual coordination. Bring your patients, tests, samples, results and reports together with AcuLabs.',
      bannerCta: 'Book a Demo'
    }
  },
  {
    id: 'motor-consult',
    name: 'MotorConsult',
    letter: 'M',
    letterBg: 'bg-blue-600',
    tagline: 'Motor Insurance Workflows',
    category: 'MOTOR INSURANCE WORKFLOWS',
    summary: 'MotorConsult streamlines insurance professionals to organize client records, policy activities, renewals, claims, commissions, and revenue operations.',
    status: 'In Development',
    action: 'DISCUSS DEVELOPMENT',
    request: 'Development discussion',
    image: '/Products/motorconsult-development-illustration.jpg',
    imageAlt: 'Motor insurance platform workspace preview',
    imageCaption: 'MotorConsult platform overview',
    detailCategory: 'MOTOR INSURANCE MANAGEMENT',
    detailHeadline: 'Don’t Let Policy Renewals, Claims, and Commissions Slip Through the Cracks.',
    detailIntro: 'Insurance professionals handle multiple customers, policy renewals, claims, documents, and commission records every day. When these activities are scattered across spreadsheets and manual follow-ups, important details can easily get overlooked. MotorConsult brings these operations into a centralized workspace, helping insurance businesses stay organized and maintain better control over their customer and policy lifecycle.',
    detailFeatures: [
      { title: 'Customer & Policy Management', description: 'Centralized customer profiles and policy records.' },
      { title: 'Renewal Tracking', description: 'Stay ahead of upcoming renewals and customer follow-ups.' },
      { title: 'Claims Management', description: 'Organize claim registrations, supporting documents, and settlement progress.' },
      { title: 'Commission Tracking', description: 'Monitor commissions, service charges, and payment records.' },
      { title: 'Business Visibility', description: 'Keep track of policy activities and revenue operations.' }
    ],
    detailClosing: 'From the first policy to the next renewal, keep every interaction accounted for.',
    exploreLabel: 'EXPLORE MOTORCONSULT',
    techStack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
    sections: [
      {
        heading: 'POLICIES & RENEWALS',
        description: 'Registration, Renewals tracker, Policy history, Customer alerts.'
      },
      {
        heading: 'CLAIMS TRACKING',
        description: 'Claim registration, Document uploads, Status tracking, Settlement records.'
      },
      {
        heading: 'COMMISSION TRACKER',
        description: 'Service charges, Commission, Payment monitoring, Revenue analytics.'
      }
    ],
    highlights: ['Automated Renewal Alerts', 'Claims Management', 'WhatsApp Notifications', 'Revenue & Commission Tracking']
  },
  {
    id: 'box-care',
    name: 'Box Care',
    letter: 'B',
    letterBg: 'bg-purple-600',
    tagline: 'CRM & E-Commerce for Packaging',
    category: 'CRM & E-COMMERCE FOR PACKAGING',
    summary: 'Box Care connects packaging selection, custom sizing, brand printing, order placement, and fulfilment in one digital storefront.',
    status: 'In Development',
    action: 'DISCUSS DEVELOPMENT',
    request: 'Development discussion',
    image: '/Products/boxcare-development-illustration.jpg',
    imageAlt: 'Packaging manufacturing management platform',
    imageCaption: 'BoxCare packaging management workflow',
    detailCategory: 'PACKAGING BUSINESS MANAGEMENT',
    detailHeadline: 'From Customer Enquiry to Final Delivery. Nothing Gets Lost.',
    detailIntro: 'Packaging businesses deal with customized requirements, frequent quotation revisions, order approvals, production coordination, and delivery tracking. When these processes operate independently, businesses lose visibility into orders and struggle to maintain a smooth customer experience. BoxCare connects the entire order lifecycle, bringing customer management, quotations, production, and delivery into one coordinated system.',
    detailFeatures: [
      { title: 'Enquiry Management', description: 'Capture customer requirements and packaging specifications.' },
      { title: 'Quotation Automation', description: 'Create and manage customized quotations.' },
      { title: 'Order Management', description: 'Convert approved quotations into confirmed orders.' },
      { title: 'Production Visibility', description: 'Monitor order progress and production activities.' },
      { title: 'Delivery Coordination', description: 'Keep customers informed with order and delivery updates.' },
      { title: 'Inventory Awareness', description: 'Improve visibility into raw material requirements and stock.' }
    ],
    detailClosing: 'From the first customer enquiry to the final shipment, keep your operations connected.',
    exploreLabel: 'EXPLORE BOXCARE',
    techStack: ['React', 'Express', 'MongoDB', 'AWS'],
    sections: [
      {
        heading: 'ENQUIRY & QUOTATION',
        description: 'Customer enquiry, Packaging requirements, Customize quotations.'
      },
      {
        heading: 'APPROVAL & ORDERS',
        description: 'Quotation approvals, Customer confirmation, Quotation-to-order workflow.'
      },
      {
        heading: 'PRODUCTION & DELIVERY',
        description: 'Production progress, Order tracking, Delivery updates.'
      }
    ],
    highlights: ['Interactive 3D Box Builder', 'Custom Packaging Catalogue', 'Order Tracking', 'Packaging Fulfilment'],
    productPage: {
      heroEyebrow: 'PACKAGING & E-COMMERCE PLATFORM',
      heroTitle: "From Factory Floor to Your Customer's Doorstep. Packaging, Made Effortless.",
      heroDescription: 'Box Care brings your packaging supply chain into one place: standard corrugated cartons, custom-printed mailers, interactive 3D sizing, pricing and order tracking.',
      heroEmphasis: 'Exact-fit sizing. Packaging that carries your brand.',
      heroPrimaryLabel: 'Shop Custom Boxes',
      heroPrimaryHref: '/contact?product=Box%20Care&request=Custom%20boxes',
      heroSecondaryLabel: 'Launch 3D Builder',
      heroSecondaryArrow: false,
      heroSecondaryTarget: '/contact?product=Box%20Care&request=3D%20Builder%20inquiry',
      navigationCtaLabel: 'Launch 3D Builder',
      navigationCtaHref: '/contact?product=Box%20Care&request=3D%20Builder%20inquiry',
      navigation: [
        { label: 'About', target: '#about' },
        { label: 'Platform', target: '#platform' },
        { label: 'Capabilities', target: '#modules' },
        { label: "Who It's For", target: '#who-its-for' }
      ],
      benefitsHeading: 'A Smarter Way to Source Your Packaging',
      benefits: [
        { title: 'Get the Size Right the First Time', description: 'Design packaging around your product dimensions with an interactive 3D preview, and review the fit before production begins.' },
        { title: 'Factory-Direct Pricing for Growing Orders', description: 'Explore standard and custom-printed packaging options, with pricing suited to your order requirements.' },
        { title: 'Track Your Orders Through Delivery', description: 'Follow each order from artwork confirmation through production and dispatch, with tracking information as it moves through fulfilment.' }
      ],
      aboutHeading: 'Your Packaging Supply Chain. One Connected Experience.',
      aboutDescription: "Packaging is more than a brown box. Every parcel is your brand's first physical contact with a customer, and it needs to fit well, resist crushing and use materials suited to the product. Box Care connects e-commerce brands, retailers, cloud kitchens and manufacturers with packaging production. From sizing a box and previewing it in 3D, to placing bulk re-orders and coordinating delivery, your team can manage packaging procurement in one digital storefront.",
      aboutEmphasis: 'One platform. Factory-direct quality. Better protection in transit.',
      capabilitiesHeading: 'Everything Your Brand Needs for End-to-End Packaging.',
      capabilities: [
        { title: 'Interactive 3D Box Builder', description: 'Enter length, width and height, preview the box in 3D and review applicable pricing before placing an order.' },
        { title: 'Find My Size', description: 'Filter ready-to-ship corrugated boxes and mailers by your product dimensions or industry.' },
        { title: 'Custom Logo & Brand Printing', description: 'Personalise packaging with custom logo and brand printing. Confirm available print and finish options before production.' },
        { title: 'Multi-Category Packaging Catalogue', description: 'Browse mailer boxes, shipping cartons, pizza boxes, mono-cartons, bubble wrap, courier bags and tapes in one catalogue.' },
        { title: 'Wholesale Volume Pricing', description: 'Review available pricing for larger orders and confirm current order thresholds and terms with Box Care.' },
        { title: 'Sample & Material Review', description: 'Contact Box Care to check sample availability and review board strength, fold quality and print finish before a bulk order.' },
        { title: 'Fulfilment Coordination', description: 'Coordinate order dispatch and delivery through the available fulfilment network.' },
        { title: 'Checkout & Payments', description: 'Review order totals and payment details as part of the checkout process.' },
        { title: 'Order Tracking', description: 'Follow each order from artwork confirmation through production, dispatch and delivery.' }
      ],
      rolesHeading: 'Built for Every Scale. Useful for Every Team.',
      rolesEyebrow: "WHO IT'S FOR",
      roles: [
        { role: 'E-Commerce & D2C Founders', description: 'Explore branded unboxing options and custom packaging without needing to navigate complex procurement workflows.' },
        { role: 'Warehouse & Fulfilment Managers', description: 'Find packaging options for standard shipping needs and manage orders through fulfilment.' },
        { role: 'Procurement & Operations Heads', description: 'Review packaging options, order details and invoice information for purchasing workflows.' },
        { role: 'Creative & Packaging Designers', description: 'Preview packaging structure in 3D before confirming production requirements.' },
        { role: 'Retail & Cloud Kitchen Operators', description: 'Explore packaging options suited to retail and takeaway operations.' }
      ],
      faqs: [
        { question: 'What is Box Care?', answer: 'Box Care is an online packaging platform for custom-printed corrugated mailers, shipping cartons and protective packaging.' },
        { question: 'What is the minimum order quantity?', answer: 'Minimum order quantities depend on the packaging type, size and print requirements. Contact Box Care to confirm the current minimum for your order.' },
        { question: 'Can I design a custom size and preview it in 3D?', answer: 'Yes. The 3D Box Builder lets you enter dimensions, preview the box and review applicable pricing. Confirm available board and construction options with Box Care before production.' },
        { question: 'How long do production and delivery take?', answer: 'Production and delivery timelines depend on the order and destination. Contact Box Care for a current estimate and order progress information.' },
        { question: 'Are Box Care materials recyclable?', answer: 'Material and disposal properties can vary by packaging option. Contact Box Care for current material specifications and recycling guidance for the product you select.' },
        { question: 'Can I order samples before a bulk order?', answer: 'Contact Box Care to check whether plain or printed samples are available for your selected packaging before placing a larger order.' },
        { question: 'Do you provide GST invoices?', answer: 'Contact Box Care to confirm invoice and tax details for your order.' }
      ],
      bannerHeading: 'Protect Your Products. Elevate Your Brand.',
      bannerDescription: 'Stop juggling inconsistent suppliers, transit damage and delayed turnarounds. Scale with reliable, factory-direct packaging from Box Care.',
      bannerCta: 'Launch 3D Builder',
      bannerCtaHref: '/contact?product=Box%20Care&request=3D%20Builder%20inquiry'
    }
  },
  {
    id: 'clinic-cms',
    name: 'AcuCare',
    letter: 'C',
    letterBg: 'bg-teal-500',
    tagline: 'General Clinic Administration',
    category: 'GENERAL CLINIC ADMINISTRATION',
    summary: 'AcuCare simplifies general clinic administration through patient onboarding, appointment scheduling, staff workflows, document management, and patient communication.',
    status: 'Live',
    action: 'DISCUSS YOUR REQUIREMENTS',
    request: 'Requirements discussion',
    image: '/Products/clinic-cms-development-illustration.jpg',
    imageAlt: 'Illustration representing AcuCare clinic operations',
    imageCaption: 'AcuCare clinic operations',
    detailCategory: 'GENERAL CLINIC MANAGEMENT',
    detailHeadline: 'Your Clinic Runs on Care. Your Operations Should Run on Clarity.',
    detailIntro: 'Managing appointments, patient records, staff activities, medical documents, and daily administrative tasks across disconnected systems takes valuable time away from clinic operations. AcuCare brings essential clinic activities under one roof, helping healthcare teams manage their daily responsibilities through a structured digital environment.',
    detailFeatures: [
      { title: 'Simplified Patient Onboarding', description: 'Organize registrations and maintain centralized patient records.' },
      { title: 'Appointment Coordination', description: 'Manage schedules based on availability and reduce manual coordination.' },
      { title: 'Staff Management', description: 'Organize user roles, responsibilities, and assigned patient activities.' },
      { title: 'Digital Documentation', description: 'Upload, manage, and securely share medical documents and reports.' },
      { title: 'Automated Communication', description: 'Keep patients and staff informed through status notifications.' },
      { title: 'Administrative Control', description: 'Manage users, workflows, and clinic operations from one place.' }
    ],
    detailClosing: 'Less administrative complexity. More time for what matters — patient care.',
    exploreLabel: 'EXPLORE ACUCARE',
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
    sections: [
      {
        heading: 'CLIENT SELF-SERVICE',
        description: 'Availability-based appointments, Shared documents, Request status.'
      },
      {
        heading: 'STAFF/USER PORTAL',
        description: 'Assigned clients, Electronic charts, Report uploads, Status notifications.'
      },
      {
        heading: 'ADMIN COMMAND LAYER',
        description: 'User management, Scheduling configuration, Workforce allocation, Monitoring.'
      }
    ],
    highlights: ['Clinic Onboarding', 'Document Access', 'Automated Notifications', 'Workflow Configuration'],
    productPage: {
      heroEyebrow: 'HOSPITAL MANAGEMENT PLATFORM',
      heroTitle: 'AcuCare: Complete Hospital Management Software',
      heroQuestion: 'What is AcuCare?',
      heroDescription: 'AcuCare is an integrated hospital management platform that brings patient administration, doctor management, appointments, clinical records, pharmacy, laboratory, inpatient operations, and financial management into one connected ecosystem. By replacing disconnected processes with centralised digital workflows, AcuCare helps hospitals simplify administration, coordinate departments, and maintain complete operational visibility.',
      navigation: [
        { label: 'About', target: '#about' },
        { label: 'Platform', target: '#platform' },
        { label: 'Modules', target: '#modules' },
        { label: "Who It's For", target: '#who-its-for' }
      ],
      benefitsHeading: 'How does AcuCare improve hospital operations?',
      benefits: [
        { title: 'Centralises Patient Information', description: 'Unifies patient registration, unique patient identification, medical histories, consultation records, prescriptions, and diagnostic reports in one organised system, eliminating fragmented patient information.' },
        { title: 'Connects Hospital Departments', description: 'Brings doctors, receptionists, pharmacy, laboratory, and inpatient departments into connected workflows, reducing administrative complexity and improving coordination across hospital operations.' },
        { title: 'Simplifies Financial Management', description: 'Connects patient billing, inpatient billing, pharmacy transactions, payments, concessions, and outstanding balances to provide better financial visibility and control.' }
      ],
      aboutHeading: 'Why choose AcuCare for complete hospital management?',
      aboutDescription: 'Managing a hospital involves more than treating patients. It requires coordinating medical professionals, maintaining clinical records, managing appointments, overseeing pharmacy operations, tracking admissions, and monitoring finances. AcuCare brings these essential activities together through a centralised platform with dedicated user roles, role-based access control, patient management, clinical workflows, and institutional reporting designed to simplify everyday hospital administration.',
      aboutCta: 'Schedule a Product Demonstration',
      capabilitiesHeading: 'What features does AcuCare offer for hospitals and healthcare institutions?',
      capabilities: [
        { title: 'Patient Management & Registration', description: 'Simplifies front-office operations through digital patient registration, unique patient identification, patient profiles, and centralised medical records. Maintains organised patient histories, consultation information, and clinical documentation for easier access throughout the patient journey.' },
        { title: 'Doctor & Appointment Management', description: 'Organises doctor profiles, availability, and patient appointments through dedicated scheduling workflows. Helps reception teams coordinate consultations and allows healthcare professionals to manage their patient visits and clinical activities more efficiently.' },
        { title: 'Clinical Management & Prescriptions', description: 'Supports structured consultation documentation, patient clinical records, and prescription generation. Provides reusable prescription templates and organised medication records to simplify clinical documentation and maintain continuity of patient information.' },
        { title: 'Pharmacy & Medicine Inventory', description: 'Brings pharmacy operations into the hospital management ecosystem through medicine records, inventory management, and pharmacy transactions. Connects medicine-related activities with patient and inpatient billing to improve pharmacy administration and financial tracking.' },
        { title: 'Inpatient & Bed Management', description: 'Organises inpatient admissions, bed allocation, ward management, and patient records through dedicated IP workflows. Provides visibility into inpatient activities and connects admission-related services, billing, and outstanding balances for better management from admission to discharge.' },
        { title: 'Billing & Financial Management', description: 'Centralises hospital financial activities through patient billing, consultation charges, inpatient billing, pharmacy billing, payments, concessions, and outstanding balance management. Helps administrators maintain organised financial transactions and monitor hospital revenue activities.' },
        { title: 'Laboratory & Diagnostic Management', description: 'Organises laboratory operations through diagnostic records, patient investigation details, and laboratory report management. Supports customised report templates to maintain structured diagnostic documentation and make investigation results accessible through patient records.' },
        { title: 'Reporting & Institutional Insights', description: 'Converts hospital operational data into useful management information through patient, billing, pharmacy, and financial reports. Helps administrators review departmental activities, monitor financial performance, and make informed operational decisions.' },
        { title: 'User & Access Management', description: 'Provides centralised administration of hospital users through dedicated roles and permissions. Supports different access levels for administrators, doctors, receptionists, and hospital staff, ensuring that each team member works within their assigned responsibilities.' }
      ],
      rolesHeading: 'Who uses AcuCare in a hospital?',
      roles: [
        { role: 'Hospital Administrators', description: 'Oversee patient activities, admissions, billing, pharmacy operations, user administration, and overall hospital workflows through centralised management.' },
        { role: 'Doctors & Consultants', description: 'Access organised patient histories, manage consultations, maintain clinical records, and generate prescriptions through dedicated clinical workflows.' },
        { role: 'Receptionists & Front-Office Teams', description: 'Simplify patient registration, appointment coordination, patient information management, and everyday administrative activities.' },
        { role: 'Pharmacy Teams', description: 'Manage medicine records, inventory information, pharmacy transactions, and patient-related billing activities.' },
        { role: 'Laboratory Teams', description: 'Maintain organised diagnostic records, manage laboratory reports, and generate structured investigation documentation using report templates.' },
        { role: 'Hospital Management', description: 'Review financial activities, billing information, departmental reports, pharmacy operations, and overall institutional performance.' }
      ],
      faqs: [
        { question: 'How does AcuCare manage patient records?', answer: 'AcuCare centralises patient registration, unique patient identification, medical histories, consultation records, prescriptions, and diagnostic reports, allowing authorised hospital personnel to access organised patient information through one platform.' },
        { question: 'Can AcuCare manage both outpatient and inpatient operations?', answer: 'Yes, AcuCare supports patient administration and inpatient management through dedicated workflows for patient registration, consultations, admissions, bed allocation, inpatient records, and associated billing activities.' },
        { question: 'Does AcuCare support pharmacy and medicine inventory management?', answer: 'Yes, AcuCare provides pharmacy management capabilities for organising medicine records, inventory information, pharmacy transactions, and billing activities within the hospital management ecosystem.' },
        { question: 'Can doctors manage prescriptions and clinical records through AcuCare?', answer: 'Yes, doctors can maintain patient clinical information, document consultations, and generate prescriptions using structured clinical workflows and reusable prescription templates.' },
        { question: 'How does AcuCare help hospitals manage their finances?', answer: 'AcuCare connects patient billing, inpatient billing, pharmacy transactions, payments, concessions, and outstanding balances, helping administrators maintain organised financial records and monitor hospital activities.' },
        { question: 'Does AcuCare provide different access levels for hospital staff?', answer: 'Yes, AcuCare supports role-based access management, allowing administrators to manage users and assign permissions according to the responsibilities of doctors, receptionists, and other hospital personnel.' }
      ],
      bannerHeading: 'Your Hospital Deserves More Than Disconnected Management Systems.',
      bannerDescription: 'Manage Better. Connect Departments. Simplify Healthcare Operations—all from one unified platform.',
      bannerCta: 'Schedule a Product Demonstration'
    }
  },
  {
    id: 'thaai-seyali',
    name: 'Thaai Seyali',
    letter: 'T',
    letterBg: 'bg-pink-600',
    tagline: 'A Fertility Care Companion',
    category: 'FERTILITY CARE COMPANION APP',
    summary: 'A patient-facing fertility care companion that brings treatment journeys, appointments, medications, health records and clinic updates together.',
    status: 'In Development',
    action: 'GET STARTED',
    request: 'Get Started',
    image: '/Products/thaai-seyali-dashboard.jpeg',
    imageFit: 'contain',
    imageAlt: 'Thaai Seyali fertility care companion mobile dashboard',
    imageCaption: 'Thaai Seyali patient dashboard',
    detailCategory: 'FERTILITY CARE COMPANION',
    detailHeadline: 'Thaai Seyali: Your Complete Fertility Care Companion',
    detailIntro: 'Thaai Seyali helps patients stay organized and connected with their fertility care journey, appointments, medications, medical records and clinic updates.',
    detailFeatures: [
      { title: 'Fertility Journey Tracking', description: 'Follow clinic-provided IVF and IUI treatment timelines and milestones.' },
      { title: 'Medication & Appointment Support', description: 'Organize medication reminders, prescriptions and appointment information.' },
      { title: 'Health Records & Partner Access', description: 'Access clinic-provided health records and share selected information with a linked partner.' }
    ],
    detailClosing: 'Stay organized, informed and connected throughout your fertility care journey.',
    exploreLabel: 'EXPLORE THAAI SEYALI',
    sections: [
      { heading: 'FERTILITY JOURNEY', description: 'Treatment timelines, milestones and clinic-provided updates.' },
      { heading: 'APPOINTMENTS & MEDICATIONS', description: 'Appointment requests, prescription access and medication reminders.' },
      { heading: 'HEALTH RECORDS', description: 'Medical documents, investigation reports and patient-controlled partner access.' }
    ],
    highlights: ['IVF & IUI Journey Tracking', 'Medication Reminders', 'Digital Health Records', 'English & Tamil'],
    productPage: {
      heroEyebrow: 'FERTILITY CARE COMPANION APP',
      heroTitle: 'Thaai Seyali: Your Complete Fertility Care Companion',
      heroQuestion: 'What is Thaai Seyali?',
      heroDescription: 'Thaai Seyali is an all-in-one fertility care companion application designed to connect patients with their fertility treatment journey, appointments, medications, medical records and clinic updates in one convenient platform.',
      heroAdditionalDescription: [
        'From tracking menstrual cycles and following IVF or IUI treatment milestones to managing medication reminders and accessing health records, Thaai Seyali helps patients stay informed, organized and connected with their clinic throughout their fertility journey.',
        'By bringing essential fertility care information together in one place, Thaai Seyali makes the patient healthcare experience more accessible, organized and convenient.'
      ],
      heroPrimaryLabel: 'Get Started',
      heroPrimaryHref: '/contact?product=Thaai%20Seyali&request=Get%20Started',
      heroSecondaryLabel: 'Explore the Features',
      heroSecondaryTarget: '#modules',
      navigationCtaLabel: 'Get Started',
      navigationCtaHref: '/contact?product=Thaai%20Seyali&request=Get%20Started',
      navigation: [
        { label: 'About', target: '#about' },
        { label: 'Features', target: '#modules' },
        { label: 'Fertility Journey', target: '#fertility-journey' },
        { label: 'Appointments', target: '#appointments' },
        { label: 'FAQs', target: '#faqs' }
      ],
      benefitsHeading: 'How does Thaai Seyali improve the fertility care experience?',
      benefits: [
        { title: 'Connects Your Healthcare Information', description: 'Brings patient profiles, medical records, prescriptions, investigation reports, appointments and treatment information together in one organized application.' },
        { title: 'Simplifies Fertility Treatment Tracking', description: 'Helps patients follow IVF, IUI and ovulation tracking through structured timelines, cycle calendars, treatment milestones and clinic-provided updates.' },
        { title: 'Organizes Medication and Appointments', description: 'Provides scheduled medication reminders, prescription access, appointment requests, appointment status updates and relevant notifications to help patients stay on track.' },
        { title: 'Connects Patients and Partners', description: 'Allows patients to share selected fertility treatment information with their partners through separate accounts and patient-controlled permissions.' },
        { title: 'Makes Healthcare More Accessible', description: 'Supports English and Tamil, providing patients with an accessible and personalized application experience.' }
      ],
      aboutHeading: 'Why choose Thaai Seyali as your fertility care companion?',
      aboutDescription: 'A fertility journey involves multiple consultations, investigations, procedures, medication schedules, follow-up appointments and important medical information. Managing all these details across different sources can become overwhelming. Thaai Seyali brings these essential aspects of fertility care together through a connected patient-facing mobile application. With personalized dashboards, treatment timelines, ovulation tracking, medication management, digital health records, appointment coordination and partner access, the application helps patients stay informed about their healthcare journey. Designed around patient convenience, privacy and accessibility, Thaai Seyali provides a more organized way to stay connected with your fertility care and clinic.',
      aboutCta: 'Explore the Application',
      aboutCtaHref: '#modules',
      capabilitiesHeading: 'What features does Thaai Seyali offer for fertility patients?',
      capabilities: [
        { title: 'Personalized Patient Dashboard', description: 'Provides a personalized Home experience with patient information, upcoming appointments, doctor details and medication reminders. Gives patients convenient access to important healthcare information and application features through an organized dashboard.' },
        { title: 'Fertility Journey & Treatment Tracking', description: 'Supports fertility treatment tracking through dedicated IVF and IUI timelines. Displays relevant treatment stages, milestones, completed activities, upcoming procedures and clinic-provided updates to help patients follow their treatment progression.', anchor: 'fertility-journey' },
        { title: 'Ovulation & Menstrual Cycle Tracking', description: 'Provides an organized ovulation tracker with menstrual cycle calendars, cycle day information, period dates, cycle history, estimated fertile windows and estimated ovulation dates. Offers detailed cycle views to help patients understand and follow their menstrual cycle information.' },
        { title: 'Medication Management & Prescription Access', description: 'Organizes prescribed medications with medication names, dosage instructions, frequency, scheduled times and relevant prescription details. Provides medication reminders, countdowns and taken or missed status tracking to help patients follow their prescribed medication schedules.' },
        { title: 'Appointment Management & Doctor Information', description: 'Allows patients to request appointments, view upcoming appointments, access appointment history and check appointment statuses. Provides doctor information through dedicated doctor profiles containing available specializations, qualifications and experience.', anchor: 'appointments' },
        { title: 'Digital Health Records & Medical Documents', description: 'Centralizes important patient healthcare information through Electronic Medical Records (EMR), investigation reports, laboratory results, discharge summaries and other clinic-provided medical documents. Makes relevant patient records easier to access and organize.' },
        { title: 'Embryology & Fertility Treatment Updates', description: 'Provides access to clinic-provided embryology information, embryo development updates and relevant frozen embryo information where applicable. Helps patients stay informed about important treatment-related updates through their application.' },
        { title: 'Billing & Payment Information', description: 'Organizes patient-facing financial information through bills, payment history, treatment packages and relevant inpatient billing details. Helps patients review their fertility treatment-related financial records in one place.' },
        { title: 'Partner Access & Shared Patient Information', description: "Connects patients and their partners through separate user accounts and an invitation-based linking process. Allows patients to approve access and select which information can be shared, including treatment progress, appointments, medication schedules and authorized medical records." },
        { title: 'Notifications & Clinic Communication', description: 'Centralizes important patient notifications, including appointment reminders, medication alerts, treatment milestone updates, new report notifications and clinic communications. Helps patients stay informed about relevant healthcare activities.' },
        { title: 'Patient Support & Wellness Features', description: 'Provides additional patient-focused features such as procedure preparation, fertility history, question notebooks, wellness journals, male fertility information and educational resources to support patients throughout their fertility care experience.' },
        { title: 'English & Tamil Language Support', description: 'Provides language accessibility through English and Tamil for the authenticated application. Helps patients navigate supported application sections, healthcare information and notifications in their preferred language.' }
      ],
      rolesHeading: 'Who uses Thaai Seyali during their fertility care journey?',
      rolesEyebrow: 'PATIENT-BASED WORKFLOWS',
      rolesSupportHeading: 'How Thaai Seyali Supports Their Journey',
      roles: [
        { role: 'New Patients', description: 'Register, create their patient account and begin accessing relevant fertility care information and clinic services.' },
        { role: 'Existing Patients', description: 'Access their original patient account, medical history, treatment journey, appointments, prescriptions and healthcare records.' },
        { role: 'IVF Patients', description: 'Follow ovarian stimulation, follicular monitoring, egg retrieval, fertilization, embryo development and other applicable clinic-provided treatment milestones.' },
        { role: 'IUI Patients', description: 'Follow follicular monitoring, relevant procedure milestones, scheduled appointments and post-procedure follow-up information.' },
        { role: 'Patients Using Ovulation Tracking', description: 'Monitor menstrual cycle information, cycle history, estimated fertile windows and estimated ovulation dates.' },
        { role: 'Partners / Linked Members', description: 'Access patient-authorized information through separate accounts and permission-controlled Partner Access.' },
        { role: 'Follow-up Patients', description: 'Review upcoming appointments, medical reports, prescriptions, treatment updates and relevant follow-up information.' }
      ],
      faqs: [
        { question: 'What is Thaai Seyali and how does it help fertility patients?', answer: 'Thaai Seyali is a fertility care companion application that helps patients organize their fertility treatment information, appointments, medications, medical records and clinic updates in one place. It is designed to support patients throughout their fertility care journey.' },
        { question: 'Does Thaai Seyali support IVF and IUI patients?', answer: 'Yes. Thaai Seyali is designed to support IVF and IUI treatment journeys through structured timelines, relevant treatment milestones, medication schedules, appointments and clinic-provided updates.' },
        { question: 'Can patients track their menstrual cycle and ovulation using Thaai Seyali?', answer: 'Yes. The application includes an Ovulation Tracker that provides menstrual cycle calendars, cycle day information, period dates, cycle history, estimated fertile windows and estimated ovulation dates. These estimates are not confirmed medical results.' },
        { question: 'How does Thaai Seyali manage medication reminders and prescriptions?', answer: 'Thaai Seyali organizes prescribed medication schedules, including medication names, dosage instructions, frequency and scheduled times. Patients can receive reminders, track medication-taking status and access the prescription associated with each medication.' },
        { question: 'Can patients manage their clinic appointments through Thaai Seyali?', answer: 'Yes. Patients can request appointments, view upcoming visits, check appointment statuses, access doctor information and review previous appointments through the Appointments section.' },
        { question: 'How does Thaai Seyali manage medical records?', answer: 'Thaai Seyali provides a centralized Health Records section for accessing Electronic Medical Records, investigation reports, laboratory results, discharge summaries and other clinic-provided medical documents.' },
        { question: "Can partners access a patient's fertility treatment information?", answer: 'Yes. Thaai Seyali provides a Partner Access feature through which patients can link a partner’s separate account, approve access requests and choose which information can be shared. Patients retain control over sharing permissions and can revoke access.' },
        { question: 'Does Thaai Seyali support multiple languages?', answer: 'Yes. The authenticated application supports English and Tamil, helping patients access supported features and healthcare information in their preferred language.' },
        { question: 'Can patients modify prescriptions or treatment milestones?', answer: 'No. Prescriptions, clinical instructions and treatment milestones remain controlled by the clinic. Patients can view their information and track medication-taking status but cannot independently change clinical instructions or prescribed dosages.' },
        { question: 'Does Thaai Seyali provide medical diagnosis or fertility predictions?', answer: 'No. Thaai Seyali is designed as a patient-support and healthcare organization application. It does not independently diagnose medical conditions, prescribe treatments or guarantee fertility outcomes. Patients should consult their healthcare professionals for medical advice.' }
      ],
      bannerHeading: 'Your Fertility Journey Deserves More Than Disconnected Information.',
      bannerEmphasis: 'Stay Organized. Stay Informed. Stay Connected.',
      bannerDescription: 'Bring your fertility treatment journey, appointments, medications, medical records and partner support together with Thaai Seyali.',
      bannerCta: 'Get Started',
      bannerCtaHref: '/contact?product=Thaai%20Seyali&request=Get%20Started',
      bannerClosing: 'One Companion. Your Journey. Connected Care.'
    }
  }
];

function getProductRows(items: ProductItem[]) {
  if (items.length === 0) {
    return [];
  }

  const rowCount = Math.ceil(items.length / 3);
  const baseRowSize = Math.floor(items.length / rowCount);
  const rowsWithExtraItem = items.length % rowCount;
  let offset = 0;

  return Array.from({ length: rowCount }, (_, index) => {
    const rowSize = baseRowSize + (index < rowsWithExtraItem ? 1 : 0);
    const row = items.slice(offset, offset + rowSize);
    offset += rowSize;
    return row;
  });
}

export default function ProductSection() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Dark Blue Hero Section (#0A1230) */}
      <section className="relative bg-[#0A1230] pt-32 pb-16 px-6 text-white border-b border-[#152352]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A] mb-3">
                PRODUCTS
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
                Software Built Around the Way Your Industry Works
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Purpose-built digital products for fertility care, healthcare, laboratory operations, fitness, insurance, packaging, and clinics.
              </p>

              {/* Product navigation */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                <a
                  href="#product-list"
                  className="rounded-full bg-[#FF7A1A] px-4 py-1.5 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#EA6608]"
                >
                  All Products
                </a>
                {products.map((product) => (
                  <a
                    key={product.id}
                    href={`#${product.id}`}
                    className="rounded-full border border-[#18295E] bg-[#101D48] px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-300 transition-colors hover:bg-[#152352] hover:text-white"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            </div>
            <HeroVisual variant="products" />
          </div>
        </div>
      </section>

      {/* Main Content Section (Light background) */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          {/* Product Cards Grid */}
          <div id="product-list" className="space-y-6">
            {getProductRows(products).map((row) => (
              <div
                key={row[0].id}
                className={`grid grid-cols-1 gap-6 ${row.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}
              >
                {row.map((product) => (
                  <article
                    key={product.id}
                    id={product.id}
                    className="group relative isolate flex min-h-[17rem] items-stretch overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className={`${product.imageFit === 'contain' ? 'object-contain' : 'object-cover'} z-0 transition-transform duration-500 group-hover:scale-105`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 z-10 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.98)_42%,rgba(255,255,255,0.84)_62%,rgba(255,255,255,0.08)_100%)]"
                    />
                    <div className="relative z-20 flex w-[76%] flex-col justify-between p-5 sm:w-[68%] sm:p-6">
                      <div>
                        <div
                          className={`mb-4 flex h-8 w-8 items-center justify-center rounded-lg ${product.letterBg} text-xs font-bold text-white shadow-sm`}
                          aria-hidden="true"
                        >
                          {product.letter}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#FF7A1A]">
                          {product.name}
                        </h3>
                        <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          {product.category}
                        </p>
                        <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-600">
                          {product.summary}
                        </p>
                      </div>
                      <Link
                        href={`/products/${product.id}`}
                        className="mt-4 inline-flex w-fit items-center justify-center rounded-lg border border-[#FF7A1A] bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0A1230] shadow-sm transition-colors hover:bg-[#FF7A1A] hover:text-white"
                      >
                        LEARN MORE
                      </Link>
                    </div>
                    <span
                      className={`absolute right-3 top-3 z-30 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm ${
                        product.status === 'Live'
                          ? 'border-emerald-200 bg-emerald-50/95 text-emerald-800'
                          : 'border-amber-200 bg-amber-50/95 text-amber-800'
                      }`}
                    >
                      {product.status}
                    </span>
                  </article>
                ))}
              </div>
            ))}
          </div>

          {/* Security, Privacy & Deployment Dark Blue Box (#0A1230) */}
          <div className="mt-12 rounded-xl bg-[#0A1230] border border-[#18295E] p-6 md:p-8 text-slate-300 shadow-md">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A1A] mb-2">
              SECURITY, PRIVACY &amp; DEPLOYMENT
            </p>
            <p className="text-sm leading-relaxed text-slate-300 max-w-4xl">
              Discuss data handling, access management, backups, integrations, onboarding, and support requirements with our team. Specific arrangements can be customized based on institutional requirements.
            </p>
          </div>

          {/* Not sure which product fits your workflow? */}
          <div className="mt-12 rounded-xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Not sure which product fits your workflow?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Talk to our solution architects to design or customize a solution tailored to your operational model.
              </p>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-lg bg-[#FF7A1A] hover:bg-[#EA6608] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              DISCUSS A PROJECT
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export function ProductDetail({ productId }: { productId: string }) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <section className="min-h-[60vh] bg-slate-50 px-6 py-32 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900">Product not found</h1>
        <Link href="/products" className="mt-6 inline-flex text-sm font-bold text-[#FF7A1A] hover:underline">
          Back to products
        </Link>
      </section>
    );
  }

  if (product.productPage) {
    return <ExpandedProductDetail product={product} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-[#0A1230] px-6 pb-12 pt-32 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <div>
              <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-[#FFAA55] hover:text-white">
                Products
              </Link>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A]">
                {product.detailCategory}
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {product.summary}
              </p>
              <span className={`mt-6 inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                product.status === 'Live'
                  ? 'border-emerald-300 bg-emerald-500/15 text-emerald-200'
                  : 'border-amber-300 bg-amber-500/15 text-amber-200'
              }`}>
                {product.status}
              </span>
            </div>
            <HeroVisual variant="products" />
          </div>
        </div>
      </section>

      <section id="product-capabilities" className="bg-white px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-[#0A1230] shadow-lg">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain"
            />
            <p className="absolute inset-x-0 bottom-0 bg-[#0A1230]/80 px-4 py-3 text-xs text-white">
              {product.imageCaption}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Product capabilities</h2>
            <div className="mt-6 space-y-5">
              {product.sections.map((section) => (
                <div key={section.heading} className="border-l-2 border-[#FFAA55] pl-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A1230]">
                    {section.heading}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {product.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
                  {highlight}
                </span>
              ))}
            </div>
            {product.techStack && (
              <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-600">
                <span className="font-bold text-slate-800">Stack:</span> {product.techStack.join(' | ')}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}&request=${encodeURIComponent(product.request)}`}
                className="rounded-lg bg-[#FF7A1A] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#EA6608]"
              >
                {product.action}
              </Link>
              <Link
                href="/products"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors hover:bg-slate-100"
              >
                ALL PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A1230] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {product.detailHeadline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {product.detailIntro}
            </p>
          </div>
          <h3 className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
            What it brings together
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.detailFeatures.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="font-bold text-slate-900">{feature.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl bg-white p-6 text-[#111111] sm:flex-row sm:items-center md:p-8">
            <p className="max-w-2xl text-sm font-medium leading-relaxed text-slate-700">
              {product.detailClosing}
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}&request=${encodeURIComponent(product.request)}`}
                className="rounded-lg bg-[#FF7A1A] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#EA6608]"
              >
                {product.action}
              </Link>
              <Link
                href="#product-capabilities"
                className="rounded-lg border border-slate-300 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors hover:bg-slate-100"
              >
                {product.exploreLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
              Your business. Your workflow. Our engineering.
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-slate-900">
              Don’t Just Adapt Your Business to Software. Find Software That Fits Your Business.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              Every business operates differently. If your requirements go beyond our existing products, let’s explore how we can build or customize a solution around your operational needs.
            </p>
          </div>
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}&request=${encodeURIComponent('Requirements discussion')}`}
            className="shrink-0 rounded-lg bg-[#FF7A1A] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#EA6608]"
          >
            LET&apos;S DISCUSS YOUR REQUIREMENTS →
          </Link>
        </div>
      </section>
    </div>
  );
}

function ExpandedProductDetail({ product }: { product: ProductItem }) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const content = product.productPage;

  if (!content) {
    return null;
  }

  const demoHref = `/contact?product=${encodeURIComponent(product.name)}&request=${encodeURIComponent('Demo request')}`;
  const navigationCtaHref = content.navigationCtaHref ?? demoHref;
  const heroPrimaryHref = content.heroPrimaryHref ?? demoHref;
  const heroSecondaryTarget = content.heroSecondaryTarget ?? '#platform';
  const aboutCtaHref = content.aboutCtaHref ?? demoHref;
  const bannerCtaHref = content.bannerCtaHref ?? demoHref;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pt-24">
        <nav
          aria-label={`${product.name} page navigation`}
          className="sticky top-20 z-40 border-y border-slate-200 bg-white/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-6xl items-center gap-5 px-6 py-3">
            <a
              href="#product-hero"
              className="shrink-0 text-base font-extrabold tracking-tight text-[#0A1230] transition-colors hover:text-[#FF7A1A]"
            >
              {product.name}
            </a>
            <div className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto">
              {content.navigation.map((item) => (
                <a
                  key={item.target}
                  href={item.target}
                  className="shrink-0 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#FF7A1A]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Link
              href={navigationCtaHref}
              className="shrink-0 rounded-lg bg-[#FF7A1A] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#EA6608] sm:text-sm"
            >
              {content.navigationCtaLabel ?? 'Book a Demo'}
            </Link>
          </div>
        </nav>
      </div>

      <section id="product-hero" className="scroll-mt-28 bg-[#0A1230] px-6 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A1A]">
              {content.heroEyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {content.heroTitle}
            </h1>
            {content.heroQuestion && (
              <h2 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                {content.heroQuestion}
              </h2>
            )}
            <p className={`${content.heroQuestion ? 'mt-3' : 'mt-6'} max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg`}>
              {content.heroDescription}
            </p>
            {content.heroAdditionalDescription?.map((paragraph) => (
              <p key={paragraph} className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {paragraph}
              </p>
            ))}
            {content.heroEmphasis && (
              <p className="mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-slate-200 sm:text-base">
                {content.heroEmphasis}
              </p>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={heroPrimaryHref}
                className="rounded-lg bg-[#FF7A1A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#EA6608]"
              >
                {content.heroPrimaryLabel ?? 'Book a Demo'}
              </Link>
              <a
                href={heroSecondaryTarget}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#FFAA55]"
              >
                {content.heroSecondaryLabel ?? 'Explore the Platform'}
                {content.heroSecondaryArrow !== false && <span aria-hidden="true">→</span>}
              </a>
            </div>
          </div>
          <HeroVisual variant="products" />
        </div>
      </section>

      <section id="platform" className="scroll-mt-28 bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
            PLATFORM BENEFITS
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-[#0A1230] sm:text-4xl">
            {content.benefitsHeading}
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {content.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A1A]/50 hover:shadow-lg"
              >
                <span className="text-sm font-extrabold tracking-widest text-[#FF7A1A]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#0A1230] transition-colors group-hover:text-[#FF7A1A]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-[#0A1230] px-6 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
              ABOUT THE PLATFORM
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {content.aboutHeading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {content.aboutDescription}
            </p>
            {content.aboutEmphasis && (
              <p className="mt-4 text-base font-bold leading-relaxed text-[#0A1230]">
                {content.aboutEmphasis}
              </p>
            )}
            {content.aboutCta && (
              <Link
                href={aboutCtaHref}
                className="mt-7 inline-flex rounded-lg bg-[#FF7A1A] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#EA6608]"
              >
                {content.aboutCta}
              </Link>
            )}
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-slate-200 bg-[#0A1230] shadow-xl">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain"
            />
            <p className="absolute inset-x-0 bottom-0 bg-[#0A1230]/80 px-4 py-3 text-xs text-white">
              {product.imageCaption}
            </p>
          </div>
        </div>
      </section>

      <section id="modules" className="scroll-mt-28 bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
            CORE CAPABILITIES
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-[#0A1230] sm:text-4xl">
            {content.capabilitiesHeading}
          </h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.capabilities.map((capability, index) => (
              <article
                key={capability.title}
                id={capability.anchor}
                className="group scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A1A]/50 hover:shadow-lg"
              >
                <p className="text-sm font-extrabold tracking-widest text-[#FF7A1A]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-lg font-bold text-[#0A1230] transition-colors group-hover:text-[#FF7A1A]">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={content.rolesSectionId ?? 'who-its-for'} className="scroll-mt-28 bg-[#0A1230] px-6 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
            {content.rolesEyebrow ?? 'ROLE-BASED WORKFLOWS'}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {content.rolesHeading}
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="bg-[#0A1230] text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-sm font-bold">User Role</th>
                  <th scope="col" className="px-6 py-4 text-sm font-bold">
                    {content.rolesSupportHeading ?? `How ${product.name} Supports Their Workflow`}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {content.roles.map((item) => (
                  <tr key={item.role} className="transition-colors hover:bg-orange-50/50">
                    <th scope="row" className="px-6 py-5 align-top text-sm font-bold text-[#0A1230]">
                      {item.role}
                    </th>
                    <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {content.branches && (
        <section id="branches" className="scroll-mt-28 bg-white px-6 py-16 text-[#111111] sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
                {content.branches.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0A1230] sm:text-4xl">
                {content.branches.heading}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
                {content.branches.description}
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {content.branches.points.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-[#0A1230] transition-colors hover:border-[#FF7A1A]/60 hover:bg-orange-50"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section
        id="faqs"
        className={`scroll-mt-28 border-b px-6 py-16 sm:py-20 ${
          content.branches
            ? 'border-white/10 bg-[#0A1230] text-white'
            : 'border-slate-200 bg-white text-[#111111]'
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
              AEO-OPTIMISED FAQS
            </p>
            <h2 className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${content.branches ? 'text-white' : 'text-[#0A1230]'}`}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {content.faqs.map((item) => (
              <details
                key={item.question}
                open={openFaq === item.question}
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse') {
                    setOpenFaq(item.question);
                  }
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === 'mouse') {
                    setOpenFaq((current) => current === item.question ? null : current);
                  }
                }}
                onToggle={(event) => {
                  setOpenFaq(event.currentTarget.open
                    ? item.question
                    : (current) => current === item.question ? null : current);
                }}
                className={`group overflow-hidden rounded-xl border transition-colors duration-300 ${
                  content.branches
                    ? 'border-white/15 bg-white/5 hover:border-[#FF7A1A]/60 open:border-[#FF7A1A] open:bg-white/10'
                    : 'border-slate-200 bg-slate-50 hover:border-[#0A1230]/50 open:border-[#0A1230] open:bg-white'
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6">
                  <span className={`text-base font-semibold transition-colors sm:text-lg ${
                    content.branches
                      ? 'text-white group-open:text-white'
                      : 'text-slate-700 group-open:text-[#0A1230]'
                  }`}>
                    {item.question}
                  </span>
                  <span aria-hidden="true" className={`flex h-7 w-7 shrink-0 items-center justify-center text-xl ${content.branches ? 'text-[#FFAA55]' : 'text-[#0A1230]'}`}>
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">-</span>
                  </span>
                </summary>
                <p className={`px-5 pb-6 text-sm leading-relaxed sm:px-7 sm:text-base ${content.branches ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-6 py-16 sm:py-20 ${content.branches ? 'bg-white' : 'bg-[#0A1230]'}`}>
        <div className={`mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 rounded-2xl p-8 shadow-xl sm:p-10 lg:flex-row lg:items-center ${
          content.branches ? 'bg-[#0A1230] text-white' : 'bg-white text-[#111111]'
        }`}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
              ONE UNIFIED PLATFORM
            </p>
            <h2 className={`mt-3 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-3xl ${content.branches ? 'text-white' : 'text-[#0A1230]'}`}>
              {content.bannerHeading}
            </h2>
            {content.bannerEmphasis && (
              <p className={`mt-3 max-w-3xl text-sm font-bold leading-relaxed sm:text-base ${content.branches ? 'text-white' : 'text-[#0A1230]'}`}>
                {content.bannerEmphasis}
              </p>
            )}
            <p className={`${content.bannerEmphasis ? 'mt-2' : 'mt-3'} max-w-3xl text-sm leading-relaxed sm:text-base ${content.branches ? 'text-slate-300' : 'text-slate-600'}`}>
              {content.bannerDescription}
            </p>
            {content.bannerClosing && (
              <p className={`mt-3 text-sm font-bold leading-relaxed sm:text-base ${content.branches ? 'text-white' : 'text-[#0A1230]'}`}>
                {content.bannerClosing}
              </p>
            )}
          </div>
          <Link
            href={bannerCtaHref}
            className="shrink-0 rounded-lg bg-[#FF7A1A] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#EA6608]"
          >
            {content.bannerCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
