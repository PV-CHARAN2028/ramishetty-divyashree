import profileAvatar from '../assets/images/divya_sree_profile_1792688807208.jpg';
import heroBgMesh from '../assets/images/hero_abstract_mesh_1792688808761.jpg';
import projectTransportImg from '../assets/images/project_transport_ai_1792688808408.jpg';
import projectEcommerceImg from '../assets/images/project_ecommerce_backend_1792688808875.jpg';

export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Backend Development' | 'Frontend & Web';
  subtitle: string;
  period: string;
  image: string;
  tags: string[];
  description: string;
  highlights: string[];
  metrics: { label: string; value: string };
  links?: {
    github?: string;
    live?: string;
  };
  details: {
    problem: string;
    solution: string;
    architecture: string[];
    technicalStack: string[];
  };
}

export interface SkillItem {
  name: string;
  category: 'AI & ML' | 'Python & Backend' | 'Frontend' | 'Databases & APIs' | 'Core CS & Tools';
  level: 'Advanced' | 'Proficient' | 'Foundational';
  highlight: string;
  applications: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score: string;
  scoreLabel: string;
  notes: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  responsibilities: string[];
  skillsUsed: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Ramisetty Divya Sree",
    preferredName: "Divya Sree Ramisetty",
    headline: "AI / ML Engineer & Python Full-Stack Developer",
    tagline: "Building high-performance machine learning models, FastAPI backends, and responsive React applications.",
    summary:
      "Computer Science and Artificial Intelligence engineer with hands-on expertise building predictive machine learning pipelines, FastAPI microservices, and modern React dashboards. Experienced in data preprocessing, feature engineering, Random Forest regression, Spring Boot backend systems, and relational/NoSQL databases. Driven to deliver robust, production-ready software solutions.",
    location: "Bengaluru, India",
    email: "divyasreeramisetty5a@gmail.com",
    phone: "+91 8309779118",
    phoneDisplay: "8309779118",
    linkedinUrl: "https://www.linkedin.com/in/divyasree-ramisetty-486499322?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    githubUrl: "https://github.com",
    status: "Actively seeking Fresher AI/ML & Python Developer roles",
    avatarImage: profileAvatar,
    heroBgImage: heroBgMesh,
  },
  resumes: [
    {
      id: "aiml",
      title: "AI / ML Fresher Resume",
      roleFocus: "Artificial Intelligence & Machine Learning",
      description: "Focused on ML fundamentals, scikit-learn, Random Forest Regressor, FastAPI model deployment, data preprocessing, and feature engineering.",
      filePath: "/assets/Divya_Sree_AIML_Fresher_Resume.pdf",
      fileName: "Divya_Sree_AIML_Fresher_Resume.pdf",
      lastUpdated: "2026",
    },
    {
      id: "python",
      title: "Python Developer Fresher Resume",
      roleFocus: "Python & Backend Software Engineering",
      description: "Focused on Python, FastAPI, RESTful API integration, SQL, MongoDB, Java Spring Boot, and responsive React full-stack development.",
      filePath: "/assets/Divya_Sree_Python_Developer_Fresher_Resume.pdf",
      fileName: "Divya_Sree_Python_Developer_Fresher_Resume.pdf",
      lastUpdated: "2026",
    },
  ],
  stats: [
    { label: "B.Tech CGPA", value: "8.82 / 10", description: "Computer Science & AI" },
    { label: "ML Model Accuracy", value: "~90%", description: "Transit delay prediction" },
    { label: "Intermediate Score", value: "92.9%", description: "MPC academic excellence" },
    { label: "Full Stack Specialization", value: "L&T EduTech", description: "Core Java & Web Certified" },
  ],
  skills: [
    {
      name: "Python",
      category: "Python & Backend",
      level: "Proficient",
      highlight: "Core language for ML algorithms, FastAPI servers, automation, and data handling.",
      applications: ["Random Forest Regressor pipelines", "FastAPI microservices", "Pandas & NumPy data transformations"],
    },
    {
      name: "Machine Learning & Scikit-learn",
      category: "AI & ML",
      level: "Proficient",
      highlight: "Model training, supervised regression, cross-validation, and metrics evaluation.",
      applications: ["Random Forest Regressor", "Public transport delay forecasting", "Hyperparameter tuning"],
    },
    {
      name: "Data Preprocessing & Feature Engineering",
      category: "AI & ML",
      level: "Proficient",
      highlight: "Missing value imputation, normalization, categorical encoding, and feature correlation.",
      applications: ["Weather and spatial route feature extraction", "Time-series windowing", "Outlier handling"],
    },
    {
      name: "FastAPI",
      category: "Python & Backend",
      level: "Proficient",
      highlight: "High-throughput asynchronous REST APIs for serving ML predictions with Pydantic validation.",
      applications: ["ML inference endpoints", "CORS handling and async request pipeline", "API schema docs"],
    },
    {
      name: "React.js",
      category: "Frontend",
      level: "Proficient",
      highlight: "Modular component architecture, modern hooks, state management, and API integration.",
      applications: ["Interactive transport analytics dashboard", "Dynamic filtering interfaces", "Freelance UI work"],
    },
    {
      name: "Java",
      category: "Python & Backend",
      level: "Proficient",
      highlight: "Strong OOP principles, multithreading, collections framework, and enterprise backend logic.",
      applications: ["Spring Boot microservices", "Enterprise e-commerce logic", "Exception handling"],
    },
    {
      name: "Spring Boot",
      category: "Python & Backend",
      level: "Proficient",
      highlight: "Enterprise backend framework for dependency injection, REST controllers, and security.",
      applications: ["E-commerce authentication and cart service", "MongoDB data repository integration", "Swagger setup"],
    },
    {
      name: "MongoDB",
      category: "Databases & APIs",
      level: "Proficient",
      highlight: "NoSQL document storage, schema design, collections indexing, and aggregations.",
      applications: ["E-commerce product catalog", "User order histories", "Dynamic JSON payload handling"],
    },
    {
      name: "SQL & Relational Databases",
      category: "Databases & APIs",
      level: "Proficient",
      highlight: "Complex queries, joins, relational schema design, Oracle, and transaction management.",
      applications: ["Structured data querying", "User and inventory relational tables", "Data consistency"],
    },
    {
      name: "RESTful APIs & Swagger",
      category: "Databases & APIs",
      level: "Advanced",
      highlight: "REST architectural standards, structured error handling, and automated OpenAPI documentation.",
      applications: ["FastAPI autogenerated docs", "Spring Boot Swagger UI", "Client-server API contracts"],
    },
    {
      name: "JavaScript & TypeScript",
      category: "Frontend",
      level: "Proficient",
      highlight: "Modern ES6+ syntax, asynchronous programming (Promises/async-await), and typed interfaces.",
      applications: ["Frontend client interactions", "State manipulation", "Component lifecycle management"],
    },
    {
      name: "Git & Version Control",
      category: "Core CS & Tools",
      level: "Proficient",
      highlight: "Branching strategies, collaborative workflows, commits, pull requests, and code review.",
      applications: ["GitHub repository management", "Versioned project iterations", "Deployment staging"],
    },
    {
      name: "Object-Oriented Programming (OOP)",
      category: "Core CS & Tools",
      level: "Advanced",
      highlight: "Inheritance, encapsulation, polymorphism, abstraction, and modular design patterns.",
      applications: ["Java enterprise architecture", "Python class structuring", "Reusable modular code"],
    },
    {
      name: "Maven & Build Tools",
      category: "Core CS & Tools",
      level: "Proficient",
      highlight: "Java dependency management, lifecycle builds, and plugin configurations.",
      applications: ["Spring Boot project build automation", "Dependency dependency resolution", "Packaging JARs"],
    },
  ] as SkillItem[],
  projects: [
    {
      id: "public-transport-delay",
      title: "Public Transport Delay Prediction System",
      category: "Machine Learning",
      subtitle: "Predictive Transit Analytics & Real-Time React Dashboard",
      period: "2024 - 2025",
      image: projectTransportImg,
      tags: ["Python", "scikit-learn", "FastAPI", "React.js", "Random Forest Regressor"],
      description:
        "An end-to-end full-stack predictive system that forecasts public transport arrival delays using machine learning regression, exposed through asynchronous FastAPI endpoints to an interactive real-time React dashboard.",
      highlights: [
        "Trained a Random Forest Regressor yielding approximately 90% prediction accuracy across historical transit schedules.",
        "Engineered feature pipelines incorporating weather impact indices, multi-point route bottlenecks, time-of-day traffic, and seasonal demand.",
        "Designed asynchronous FastAPI microservice endpoints serving inference predictions with low-latency JSON payloads.",
        "Created an intuitive React telemetry dashboard with visual route delay maps, probability graphs, and factor breakdowns.",
      ],
      metrics: {
        label: "Prediction Accuracy",
        value: "~90%",
      },
      details: {
        problem:
          "Public transit riders and municipal operations suffer from unpredictable bus and train delays caused by dynamic weather variations, traffic congestion, and route-specific choke points.",
        solution:
          "Developed an algorithmic predictive pipeline that extracts multi-modal features, trains an optimized Random Forest ensemble, and serves instant delay estimates to passengers and administrators.",
        architecture: [
          "Data Ingestion & Cleaning: Cleaned raw timetable data, removed anomalous GPS logs, and encoded categorical routes.",
          "Feature Engineering: Synthesized weather metrics (rain/fog), peak traffic timestamps, and route distance coefficients.",
          "Model Training & Evaluation: Optimized Random Forest Regressor with 80/20 train-test splits and cross-validated MAE/RMSE scoring.",
          "Serving Layer: FastAPI REST server exposes POST /predict and GET /routes endpoints with Pydantic request models.",
          "Dashboard: React frontend renders interactive delay projections, telemetry charts, and simulated parameter overrides.",
        ],
        technicalStack: ["Python 3", "scikit-learn", "NumPy & Pandas", "FastAPI", "Uvicorn", "React.js", "Tailwind CSS"],
      },
    },
    {
      id: "ecommerce-backend",
      title: "E-Commerce Backend Microservices Platform",
      category: "Backend Development",
      subtitle: "Enterprise REST API Architecture with MongoDB & Spring Boot",
      period: "2024",
      image: projectEcommerceImg,
      tags: ["Java", "Spring Boot", "MongoDB", "REST APIs", "Swagger", "Maven"],
      description:
        "A robust enterprise-grade backend infrastructure handling authentication, product catalog management, persistent cart operations, and end-to-end checkout processing.",
      highlights: [
        "Architected modular microservice components separating User Auth, Catalog Inventory, Shopping Cart, and Order Processing.",
        "Designed secure REST endpoints with strict input validation, global exception handlers, and consistent HTTP response wrappers.",
        "Configured MongoDB document database with compound indexing for low-latency product search and order state persistence.",
        "Documented and validated all API contracts with interactive Swagger / OpenAPI specifications.",
      ],
      metrics: {
        label: "Modular Endpoints",
        value: "18+ APIs",
      },
      details: {
        problem:
          "Scalable modern e-commerce requires resilient backend systems that decouple user accounts from dynamic catalog updates while maintaining strict transaction integrity across cart and order states.",
        solution:
          "Constructed a layered Spring Boot application adopting controller-service-repository patterns, leveraging MongoDB document flexibility and OpenAPI documentation for seamless frontend integration.",
        architecture: [
          "Security & Auth: User authentication with hashed passwords, token authorization, and role management.",
          "Product Catalog: CRUD endpoints for inventory, categorized querying, dynamic price calculations, and stock checks.",
          "Shopping Cart: Session-persisted cart data structures supporting add, update quantity, and remove operations.",
          "Order Processing: Transactional checkout converting cart items to fulfilled order records with status transitions.",
          "Documentation: Live Swagger UI enabling interactive testing of all HTTP request schemas.",
        ],
        technicalStack: ["Java 17", "Spring Boot 3", "Spring Data MongoDB", "MongoDB Atlas", "Swagger/OpenAPI", "Maven"],
      },
    },
    {
      id: "freelance-software-developer",
      title: "Independent Web Development & API Integrations",
      category: "Frontend & Web",
      subtitle: "Client Feature Implementations & Responsive UI Systems",
      period: "2024 - Present",
      image: heroBgMesh,
      tags: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS", "UI/UX"],
      description:
        "Executed freelance client projects delivering responsive frontend web components, bug resolution, critical user-flow optimizations, and seamless backend API integrations.",
      highlights: [
        "Implemented pixel-perfect responsive user interface components adhering to clean layout guidelines across mobile, tablet, and desktop screens.",
        "Connected frontend interactive forms and state stores to RESTful backend endpoints with comprehensive error states.",
        "Identified and patched functional bottlenecks, improving page responsiveness and user navigation journeys.",
        "Refined customer feature requirements into concrete, maintainable React component structures.",
      ],
      metrics: {
        label: "Client Satisfaction",
        value: "100%",
      },
      details: {
        problem:
          "Small businesses and product teams require nimble web enhancements, reliable API hookups, and bug fixes without overhead.",
        solution:
          "Delivered hands-on freelance software engineering covering component building, state management, form validation, and cross-browser responsiveness.",
        architecture: [
          "Requirement scoping and wireframe translation into reusable UI components.",
          "REST API communication with error boundary management and graceful loading skeletons.",
          "Testing user workflows (form submits, checkout navigations, data listings) on multiple viewport sizes.",
        ],
        technicalStack: ["React", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Git"],
      },
    },
  ] as Project[],
  experience: [
    {
      role: "Freelance Software Developer",
      company: "Independent Client Work",
      type: "Freelance",
      period: "2024 — Present",
      location: "Bengaluru, India (Remote)",
      responsibilities: [
        "Engineered custom web application enhancements and dynamic website features tailored to defined client specifications.",
        "Implemented high-performance, mobile-optimized UI components and connected frontend user interfaces to RESTful backend services.",
        "Debugged critical issues, streamlined checkout and contact flows, and refined application behavior based on direct client feedback.",
        "Ensured consistent cross-device accessibility, touch targets, and responsive typography.",
      ],
      skillsUsed: ["React.js", "JavaScript (ES6+)", "REST APIs", "Responsive Design", "Git"],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "B.Tech in Computer Science and Artificial Intelligence",
      institution: "Sri Venkateswara College of Engineering and Technology",
      location: "Chittoor, Andhra Pradesh",
      year: "Expected April 2026",
      score: "8.82 / 10",
      scoreLabel: "CGPA",
      notes: "In-depth coursework in Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering.",
    },
    {
      degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
      institution: "Narayana Junior College",
      location: "Tirupati, Andhra Pradesh",
      year: "2022",
      score: "92.9%",
      scoreLabel: "Percentage",
      notes: "Distinction in analytical mathematics, physics fundamentals, and core sciences.",
    },
  ] as EducationItem[],
  certifications: [
    {
      title: "Full Stack Foundation with Core Java Specialization",
      issuer: "L&T EduTech",
      focus: "Core Java, OOP, Web Architecture, and Enterprise Fundamentals",
      year: "2024",
    },
    {
      title: "Technical Workshops in Java & Applied Artificial Intelligence",
      issuer: "SVCET / Industry Workshops",
      focus: "Hands-on machine learning models, model training workflows, and full-stack development",
      year: "2023 - 2025",
    },
  ],
  interests: ["Badminton", "Dance", "Exploring AI Research Papers", "Open-Source Coding"],
};
