/**
 * CloudTech training programmes. Curricula, prices, durations and inclusions are
 * carried over from the previous CloudTech site (github.com/CloudTechAnalytics/cloudtech-website).
 */

export type Course = {
  slug: string;
  title: string;
  programme: string;
  tagline: string;
  summary: string;
  overview: string;
  price: string;
  duration: string;
  batch: string;
  /** Short list for the course card. */
  cardPoints: string[];
  /** Everything listed in the course's information card. */
  includes: string[];
  learn: string[];
  modules: { title: string; weeks: string; topics: string[] }[];
  sections: { title: string; items: string[] }[];
  /** Extra offers shown beside enrolment, e.g. corporate training or a demo class. */
  offers: { title: string; body: string; topic: string }[];
};

export const TRAINING_STATS = [
  { value: "250", label: "Professionals trained" },
  { value: "500", label: "Community members" },
  { value: "5", label: "Instructors" },
  { value: "3", label: "Cohorts completed" },
];

export const PARTNERS = [
  { name: "Analytic Partners", logo: "/partners/analytic-partners.png" },
  { name: "IBM", logo: "/partners/ibm.png" },
  { name: "Google", logo: "/partners/google.png" },
];

export const COURSES: Course[] = [
  {
    slug: "data-analytics",
    title: "Data Analytics",
    programme: "Data Analytics Professional Course",
    tagline: "Turn raw data into reports and dashboards people can act on.",
    summary: "Excel, SQL, Power BI and Tableau, with a capstone project on a real business problem.",
    overview:
      "This course takes you from cleaning a messy dataset to presenting a finished dashboard. You'll work in the tools most analyst roles ask for, Excel, SQL, Power BI and Tableau, and finish with an end-to-end project.",
    price: "₦250,000",
    duration: "3 months",
    batch: "Limited to 25",
    cardPoints: ["Live projects", "Certification"],
    includes: [
      "Certification",
      "Job assistance",
      "Study material provided",
      "Flexible schedule available",
    ],
    learn: [
      "Data collection and cleaning techniques",
      "Advanced Excel for data analysis",
      "SQL for database management and querying",
      "Data visualization with Power BI",
      "Dashboard creation with Tableau",
      "Statistical analysis fundamentals",
      "Business intelligence concepts",
      "Data storytelling and presentation skills",
      "Real-world case studies and projects",
    ],
    modules: [
      {
        title: "Introduction to Data Analytics",
        weeks: "Weeks 1–2",
        topics: ["The data analytics landscape", "Types of data analysis", "The data analytics life cycle", "Introduction to business intelligence"],
      },
      {
        title: "Excel for Data Analytics",
        weeks: "Weeks 3–4",
        topics: ["Advanced formulas and functions", "Pivot tables and charts", "Data cleaning and transformation", "What-if analysis and Solver", "Macros and VBA basics"],
      },
      {
        title: "SQL and Database Management",
        weeks: "Weeks 5–6",
        topics: ["Database design principles", "Writing complex SQL queries", "Joins, subqueries and CTEs", "Data aggregation and grouping", "Working with multiple tables"],
      },
      {
        title: "Power BI",
        weeks: "Weeks 7–9",
        topics: ["Power BI interface and components", "Data import and transformation (Power Query)", "DAX functions and calculations", "Creating interactive dashboards", "Report publishing and sharing"],
      },
      {
        title: "Tableau Visualization",
        weeks: "Weeks 10–11",
        topics: ["Tableau Desktop fundamentals", "Advanced chart types", "Calculated fields and parameters", "Interactive dashboards", "Tableau Server and Online"],
      },
      {
        title: "Capstone Project",
        weeks: "Week 12",
        topics: ["End-to-end data analysis project", "Business problem solving", "Dashboard creation", "Presentation and documentation"],
      },
    ],
    sections: [
      {
        title: "Who it's for",
        items: [
          "Graduates looking to start a career in data",
          "Working professionals moving into analytics",
          "Business analysts upgrading their skills",
          "Entrepreneurs who want to make decisions from data",
        ],
      },
      {
        title: "How it's taught",
        items: [
          "Live classes, online or in person",
          "Recorded sessions for revision",
          "Hands-on practice exercises",
          "Industry projects",
          "One-on-one mentorship",
          "Lifetime access to course materials",
        ],
      },
    ],
    offers: [],
  },
  {
    slug: "data-science",
    title: "Data Science",
    programme: "Data Science Professional Program",
    tagline: "Build predictive models with Python, statistics and machine learning.",
    summary: "Python, statistics and machine learning, through to a deployed capstone model.",
    overview:
      "The Data Science programme covers the full path from data to model: Python, SQL, statistics, and libraries such as Pandas, NumPy, Scikit-learn and TensorFlow. You'll build, evaluate and present machine learning models on real datasets.",
    price: "₦350,000",
    duration: "4 months",
    batch: "Limited to 25",
    cardPoints: ["Real-world projects", "Job assistance"],
    includes: [
      "Professional certification",
      "Job support",
      "Study material provided",
      "Weekend classes available",
    ],
    learn: [
      "Data science fundamentals",
      "Python for data analysis",
      "Data wrangling and cleaning",
      "Exploratory data analysis (EDA)",
      "Statistics and probability",
      "Machine learning (supervised and unsupervised)",
      "Deep learning foundations",
      "Data visualization (Matplotlib, Seaborn, Power BI)",
      "SQL for data science",
      "Model evaluation and tuning",
      "Real-world data projects",
    ],
    modules: [
      {
        title: "Introduction to Data Science",
        weeks: "Weeks 1–2",
        topics: ["The data science lifecycle", "Data roles: analyst, engineer, scientist", "Key data science tools", "Setting up Python (Anaconda, Jupyter)"],
      },
      {
        title: "Python for Data Science",
        weeks: "Weeks 3–4",
        topics: ["Python basics and data structures", "Data manipulation with Pandas and NumPy", "Working with CSV, JSON and APIs", "Data cleaning and preprocessing"],
      },
      {
        title: "Data Visualization",
        weeks: "Weeks 5–6",
        topics: ["Visualizing data with Matplotlib and Seaborn", "Storytelling with data"],
      },
      {
        title: "Statistics and Probability",
        weeks: "Weeks 7–8",
        topics: ["Descriptive and inferential statistics", "Hypothesis testing", "Correlation and regression analysis", "Probability distributions"],
      },
      {
        title: "Machine Learning",
        weeks: "Weeks 9–11",
        topics: ["Introduction to machine learning", "Supervised vs unsupervised learning", "Linear and logistic regression", "Decision trees and random forests", "Clustering and k-means", "Model evaluation metrics"],
      },
      {
        title: "Deep Learning",
        weeks: "Weeks 12–13",
        topics: ["Introduction to neural networks", "TensorFlow and Keras fundamentals", "Building simple neural networks", "Image and text data basics"],
      },
      {
        title: "SQL for Data Science",
        weeks: "Week 14",
        topics: ["SQL basics and joins", "Aggregations and subqueries", "Using SQL for analytics"],
      },
      {
        title: "Capstone Project",
        weeks: "Weeks 15–16",
        topics: ["End-to-end machine learning project", "Problem definition and data collection", "Model building and deployment", "Project presentation"],
      },
    ],
    sections: [
      {
        title: "Who it's for",
        items: [
          "Aspiring data scientists and analysts",
          "Developers moving into AI roles",
          "Business professionals who want data-driven insight",
          "Students and graduates pursuing careers in tech",
          "Entrepreneurs building data-based products",
        ],
      },
      {
        title: "Career paths",
        items: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "AI Specialist", "Data Engineer", "Research Analyst", "Business Intelligence Developer"],
      },
      {
        title: "Tools",
        items: ["Python (Pandas, NumPy, Scikit-learn, TensorFlow)", "SQL", "Power BI / Tableau", "Jupyter Notebook", "GitHub"],
      },
      {
        title: "By the end you can",
        items: [
          "Analyze and interpret complex datasets",
          "Build and evaluate machine learning models",
          "Communicate insights through visualizations",
          "Apply data science to real-world problems",
        ],
      },
    ],
    offers: [
      { title: "Corporate training", body: "Custom data science and AI training for your team.", topic: "Corporate training" },
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    programme: "Artificial Intelligence Advanced Program",
    tagline: "Deep learning, NLP, computer vision and deploying AI models.",
    summary: "Neural networks, NLP and computer vision, with 1-on-1 mentorship and cloud GPU access.",
    overview:
      "An advanced programme for people who already write Python and know machine learning basics. You'll build neural networks, work with language and image models, and deploy a model to production, finishing with an industry-level capstone.",
    price: "₦450,000",
    duration: "6 months",
    batch: "Limited to 15",
    cardPoints: ["Advanced projects", "Industry mentorship"],
    includes: [
      "Advanced certification",
      "Premium job assistance",
      "Comprehensive study material",
      "1-on-1 mentorship",
      "Cloud GPU access provided",
    ],
    learn: [
      "Fundamentals of artificial intelligence",
      "Advanced Python for AI",
      "Deep neural network architecture",
      "Convolutional neural networks (CNN)",
      "Recurrent neural networks (RNN) and LSTM",
      "Natural language processing (NLP)",
      "Computer vision and image processing",
      "Generative AI and GANs",
      "Transformer models (BERT, GPT)",
      "Reinforcement learning",
      "AI ethics and responsible AI",
      "Model deployment and production",
    ],
    modules: [
      {
        title: "AI Foundations",
        weeks: "Weeks 1–2",
        topics: ["History and evolution of AI", "Types of AI: narrow, general, super", "Machine learning vs deep learning vs AI", "AI applications across industries", "Python setup for AI development"],
      },
      {
        title: "Deep Learning Fundamentals",
        weeks: "Weeks 3–6",
        topics: ["Neural networks from scratch", "Activation functions and optimization", "Backpropagation and gradient descent", "TensorFlow and PyTorch", "Keras for rapid prototyping", "Regularization techniques", "Batch normalization and dropout"],
      },
      {
        title: "Convolutional Neural Networks",
        weeks: "Weeks 7–10",
        topics: ["CNN architecture and components", "Image classification projects", "Transfer learning (VGG, ResNet, Inception)", "Object detection (YOLO, SSD, R-CNN)", "Image segmentation", "Facial recognition systems"],
      },
      {
        title: "Recurrent Neural Networks",
        weeks: "Weeks 11–13",
        topics: ["RNN architecture and use cases", "Long short-term memory (LSTM)", "Gated recurrent units (GRU)", "Sequence-to-sequence models", "Time series prediction", "Text generation"],
      },
      {
        title: "Natural Language Processing",
        weeks: "Weeks 14–17",
        topics: ["Text preprocessing and tokenization", "Word embeddings (Word2Vec, GloVe)", "Sentiment analysis", "Named entity recognition (NER)", "Transformer architecture", "BERT and GPT models", "Question answering systems", "Chatbot development"],
      },
      {
        title: "Advanced Computer Vision",
        weeks: "Weeks 18–20",
        topics: ["Image processing with OpenCV", "Advanced object detection", "Pose estimation", "Video analysis", "Medical image analysis", "Autonomous vehicle vision"],
      },
      {
        title: "Generative AI",
        weeks: "Weeks 21–22",
        topics: ["Generative adversarial networks (GANs)", "Variational autoencoders (VAE)", "Style transfer", "Image generation", "Deepfake technology", "AI art and creative applications"],
      },
      {
        title: "Reinforcement Learning",
        weeks: "Week 23",
        topics: ["RL fundamentals", "Q-learning and deep Q-networks", "Policy gradient methods", "Game-playing AI", "Real-world RL applications"],
      },
      {
        title: "AI Deployment and MLOps",
        weeks: "Week 24",
        topics: ["Model optimization", "Flask/FastAPI for model serving", "Docker containerization", "Cloud deployment (AWS/Azure)", "Model monitoring", "CI/CD for ML models"],
      },
      {
        title: "Capstone Projects",
        weeks: "Weeks 25–26",
        topics: ["Industry-level AI project", "End-to-end implementation", "Portfolio development", "Final presentation"],
      },
    ],
    sections: [
      {
        title: "Prerequisites",
        items: [
          "Strong Python programming skills",
          "Understanding of machine learning basics",
          "Linear algebra and calculus fundamentals",
          "A data science foundation is recommended",
        ],
      },
      {
        title: "Career paths",
        items: ["AI Engineer", "Deep Learning Specialist", "Computer Vision Engineer", "NLP Engineer", "Research Scientist", "AI Architect", "MLOps Engineer"],
      },
      {
        title: "Tools and frameworks",
        items: ["Python, NumPy, Pandas", "TensorFlow and Keras", "PyTorch", "OpenCV", "Hugging Face Transformers", "NLTK, spaCy", "Docker, Kubernetes", "AWS SageMaker, Google Colab"],
      },
      {
        title: "Portfolio projects",
        items: [
          "Image classification system",
          "Object detection application",
          "Chatbot with NLP",
          "Sentiment analysis tool",
          "Face recognition system",
          "Recommendation engine",
          "Deployed deep learning model",
        ],
      },
    ],
    offers: [
      { title: "Free trial class", body: "Attend a free demo session before you enroll.", topic: "Free trial class" },
    ],
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    programme: "Business Analytics Professional Program",
    tagline: "Use data to make and defend business decisions.",
    summary: "Financial, marketing, customer and operations analytics, taught through case studies.",
    overview:
      "For managers and professionals who need to turn data into business decisions. You'll analyze finance, marketing, customer and operations data in Excel, SQL and Power BI, and learn to present findings to people who don't work with data.",
    price: "₦250,000",
    duration: "3 months",
    batch: "Limited to 25",
    cardPoints: ["Case studies", "Career support"],
    includes: [
      "Professional certification",
      "Job assistance",
      "Industry case-study material",
      "Weekend batches available",
      "Business tools access",
    ],
    learn: [
      "Business intelligence fundamentals",
      "Strategic data analysis",
      "Financial analytics and modeling",
      "Marketing analytics",
      "Operations analytics",
      "Customer analytics and segmentation",
      "Predictive analytics for business",
      "Business performance metrics (KPIs)",
      "Advanced Excel, Power BI and SQL",
      "Data storytelling and presentation",
    ],
    modules: [
      {
        title: "Introduction to Business Analytics",
        weeks: "Weeks 1–2",
        topics: ["The business analytics landscape", "Descriptive, predictive and prescriptive analytics", "Data-driven business strategy", "Analytics maturity model", "Business vs technical analytics"],
      },
      {
        title: "Business Intelligence Tools",
        weeks: "Weeks 3–5",
        topics: ["Advanced Excel functions", "Pivot tables and charts", "Power Query for data transformation", "SQL fundamentals for business", "Power BI Desktop and Service", "Creating business dashboards"],
      },
      {
        title: "Financial Analytics",
        weeks: "Weeks 6–7",
        topics: ["Financial statement analysis", "Profitability analysis", "Cost-benefit analysis", "Budget forecasting", "Financial modeling", "ROI and NPV calculations", "Risk assessment"],
      },
      {
        title: "Marketing Analytics",
        weeks: "Weeks 8–9",
        topics: ["Customer acquisition cost (CAC)", "Customer lifetime value (CLV)", "Marketing campaign analysis", "A/B testing and experimentation", "Social media analytics", "Web analytics (Google Analytics)", "Marketing attribution models"],
      },
      {
        title: "Customer Analytics",
        weeks: "Weeks 10–11",
        topics: ["Customer segmentation", "RFM analysis", "Churn prediction", "Customer journey mapping", "Net Promoter Score (NPS) analysis", "Cohort analysis"],
      },
      {
        title: "Operations Analytics",
        weeks: "Weeks 12–13",
        topics: ["Supply chain analytics", "Inventory optimization", "Process improvement analysis", "Quality control analytics", "Resource allocation", "Efficiency metrics"],
      },
      {
        title: "Predictive Analytics for Business",
        weeks: "Weeks 14–15",
        topics: ["Introduction to predictive modeling", "Sales forecasting", "Demand prediction", "Trend analysis", "Time series forecasting", "Business scenario planning"],
      },
      {
        title: "Data Visualization and Storytelling",
        weeks: "Week 16",
        topics: ["Principles of data visualization", "Building a business story", "Executive dashboards", "Presentation practice", "Communicating with stakeholders"],
      },
      {
        title: "Capstone Business Project",
        weeks: "Week 17",
        topics: ["Real business case study", "End-to-end analysis", "Dashboard creation", "Business recommendations", "Executive presentation"],
      },
    ],
    sections: [
      {
        title: "Who it's for",
        items: [
          "Business managers and executives",
          "Marketing professionals",
          "Finance and accounting professionals",
          "Operations managers",
          "Entrepreneurs and business owners",
          "Consultants",
        ],
      },
      {
        title: "Career paths",
        items: ["Business Analyst", "Business Intelligence Analyst", "Marketing Analyst", "Financial Analyst", "Operations Analyst", "Strategy Analyst", "Product Analyst", "Analytics Consultant"],
      },
      {
        title: "Tools",
        items: ["Microsoft Excel (advanced)", "Power BI", "SQL", "Google Analytics", "Tableau (introduction)", "R/Python basics"],
      },
      {
        title: "Projects",
        items: [
          "Customer segmentation for e-commerce",
          "Sales performance dashboard",
          "Marketing campaign ROI analysis",
          "Financial forecasting model",
          "Supply chain optimization",
          "Churn prediction analysis",
        ],
      },
    ],
    offers: [
      { title: "Corporate training", body: "Business analytics training tailored to your organization.", topic: "Corporate training" },
    ],
  },
];

export const findCourse = (slug: string | undefined) => COURSES.find((c) => c.slug === slug);
