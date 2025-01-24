import { Project, Testimonial, Experience } from './types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: "JIGPC- Jazan Integrated Gasification and Power Company",
    role: "Cyber Security Analyst",
    period: "Aug 2024 - Present",
    description: [
      "Conduct comprehensive risk assessments to identify and mitigate vulnerabilities across critical systems",
      "Develop and enforce robust cybersecurity policies compliant with ISO 27001 and NIST standards",
      "Lead deployment of advanced Data Loss Prevention (DLP) tools for enhanced data protection",
      "Collaborate with Process Control, IT, and Cybersecurity teams for strategic alignment",
      "Successfully integrated cutting-edge security solutions to enhance system resilience"
    ]
  },
  {
    id: 2,
    company: "Jazan Gas Projects Company",
    role: "Information Technology System Administrator",
    period: "Nov 2016 - Sep 2020",
    description: [
      "Managed IT infrastructure ensuring 99.9% system uptime through proactive monitoring",
      "Implemented ITIL-based practices for efficient IT operations",
      "Reduced incident response time by 30% via streamlined processes",
      "Administered Active Directory and managed security policies",
      "Earned recognition for exceptional problem-solving and support delivery"
    ]
  },
  {
    id: 3,
    company: "ESGSA",
    role: "IT Systems Administrator",
    period: "Jan 2016 - Jun 2016",
    description: [
      "Managed and supported IT infrastructure with 99% uptime",
      "Implemented secure network infrastructure",
      "Enhanced operational efficiency through task automation",
      "Delivered effective user training sessions",
      "Ensured compliance with IT policies and security standards"
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise DLP Implementation",
    description: "Led the implementation of advanced Data Loss Prevention solutions to protect sensitive organizational data",
    role: "Project Lead",
    technologies: ["DLP", "Microsoft 365 Security Suite", "Purview", "Compliance Manager"],
    impact: "Enhanced data security and achieved compliance with international standards",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    id: 2,
    title: "Security Infrastructure Modernization",
    description: "Spearheaded the upgrade of cybersecurity infrastructure to strengthen system resilience",
    role: "Security Architect",
    technologies: ["Endpoint Protection", "Network Security", "Cloud Security", "Risk Assessment"],
    impact: "Significantly improved security posture and reduced vulnerability exposure",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3"
  },
  {
    id: 3,
    title: "IT Service Management Transformation",
    description: "Implemented ITIL-based practices and modernized IT infrastructure",
    role: "IT Administrator",
    technologies: ["ITIL", "Service Management", "Process Automation", "Cloud Solutions"],
    impact: "Improved system uptime to 99.9% and reduced incident response time by 30%",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Faisal Alzahrani",
    role: "Training Operations Manager",
    company: "HIWPT",
    content: "Ammar was very dedicated to work. He has many good ways to solve issues in a good time. He loves to support no matter how busy he is.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    id: 2,
    name: "Kevin Bradley",
    role: "Director",
    company: "Island Breeze Properties",
    content: "Ammar is a thorough professional and wise beyond his years. He displays a level of emotional intelligence that few possess.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
  }
];