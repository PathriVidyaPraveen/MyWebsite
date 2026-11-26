// src/data.js

const data = {
  name: "Pathri Vidya Praveen",
  photoPlaceholder: "/mnt/c/Engineering/linkedin_profile_pic.jpg", // Remember to replace this with your actual image path
  headline: "B.Tech 3rd Year | Mathematics | Electrical Engineering | Computer Science & Engineering | IIT Hyderabad",
  location: "IIT Hyderabad, Kandi, Telangana, India",
  email: "cs24btech11047@iith.ac.in",
  emailSecondary: "vidyapraveen.2006@gmail.com",
  github: "https://github.com/PathriVidyaPraveen",
  linkedin: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a",
  codechef: "https://www.codechef.com/users/praveen_0_6",
  leetcode: "https://leetcode.com/u/Pathri_Vidya_Praveen/",

  about: {
    summary: "",
    detailed: "I am a third-year Computer Science and Engineering undergraduate at IIT Hyderabad, pursuing a Double Major in Mathematics and a Minor in Electrical Engineering. My work draws on Physics, Mathematics, Electrical Engineering (particularly Communications, Signal Processing and Learning) and Artificial Intelligence. Beyond academics and research, I love listening to music and exploring psychology and philosophy in my free time."
  },

  experience: {
    research: [
      {
        title: "Solute Dispersion in FENE-P Fluid Flows",
        workplace: "Department of Mathematics, IIT Hyderabad",
        duration: "March 2026 – Present",
        bullets: [
          "Developing a mathematical framework for solute dispersion in FENE-P fluid flows by extending classical Taylor-Aris dispersion theory to viscoelastic fluids; currently targeting for a research paper publication in top fluid mechanics journals.",
          "Conducting theoretical and computational research in Applied Mathematics, formulating and solving systems of ODEs/PDEs arising in non-Newtonian fluid flows and transport phenomena.",
          "Deriving analytical approximations and implementing numerical schemes to study Taylor dispersion, vortex dynamics, and transport characteristics under varying flow conditions.",
          "Investigating numerical stability and convergence properties of continuous-time mathematical models through computational simulations.",
          "This research was done under supervision of Prof. Jyotirmoy Rana."
        ]
      },
      {
        id: "quantum-hardware-research",
        title: "Superconducting Quantum Hardware & Condensed Matter Physics",
        workplace: "Ultrafast Terahertz Photonics Laboratory (UTPL), Department of Physics, IIT Hyderabad",
        duration: "Nov 2026 – Present",
        bullets: [
          "Investigating the electrodynamics of conventional and high-Tc superconductors, with emphasis on cuprates such as YBCO (YBa₂Cu₃O₇₋δ) alongside Aluminium and Niobium thin films — studying London electrodynamics, Meissner screening, flux penetration and superconducting coherence.",
          "Exploring the interplay of geometric and kinetic inductance in superconducting thin films, including high-impedance resonators, superinductance and the Pearl length, modelled through equivalent LC/RLC circuits.",
          "Studying superconducting split-ring resonator (SRR) metamaterials and multilayer superconducting circuits, using 3D-MLSI for inductance extraction, current-distribution modelling and device optimization, with connections to superconducting quantum circuit architecture.",
          "Exploring light–matter interactions and nonequilibrium phenomena in superconducting quantum materials via terahertz time-domain spectroscopy (THz-TDS) and optical pump–THz probe spectroscopy, linking their electromagnetic response to photon-detection hardware.",
          "This research is being done under supervision of Prof. Yogesh Kumar Srivastava, as a faculty-associated project through the Quantum Engineering & Technology Club."
        ]
      },
      {
        title: "Point Supervised Building Identification from Aerial Imagery",
        workplace: "Department of Electrical Engineering, IIT Hyderabad",
        duration: "Nov 2025 – Present",
        bullets: [
          "Developing weakly supervised methods for building localization and segmentation from satellite imagery using sparse point annotations.",
          "Formulating the problem using Marked Point Processes (MPP) and Gibbs Energy Models to incorporate spatial interaction priors and object-level constraints.",
          "Designing Bayesian inference pipelines based on Reversible Jump Markov Chain Monte Carlo (RJMCMC) and simulated annealing for optimization over complex spatial configurations.",
          "This research was done under supervision of Prof. Shashank Vatedka."
        ]
      },
      {
        title: "List Conflict Free Colorings of Planar Graphs",
        workplace: "Department of Computer Science and Engineering, IIT Hyderabad",
        duration: "July 2026 – Nov 2026",
        bullets: [
          "Conducted research in Extremal Graph Theory and Combinatorics, focusing on List Conflict-Free Colorings of Planar Graphs.",
          "Investigated tighter upper bounds on the Conflict-Free Choice Number of planar graphs, targeting an improvement from the existing bound of 12 to 11 under relaxed structural constraints.",
          "Developed and analyzed structural and combinatorial techniques to establish improved bounds for conflict-free list colorings of planar graphs.",
          "This research was done under supervision of Prof. Rogers Mathew as a BTech Mini Project in my 5th semester."
        ]
      },
      {
        title: "Constraint-Aware Generative Control via Optimal Transport and Flow Matching",
        workplace: "Department of Computer Science and Engineering, IIT Hyderabad",
        duration: "April 2026 – Nov 2026",
        bullets: [
          "Studied the mathematical foundations of Optimal Transport, including Kantorovich formulations, Wasserstein geometry, and entropic regularization.",
          "Explored applications of Optimal Transport in machine learning, including distribution alignment, domain adaptation, and generative modeling.",
          "Investigated Optimal Transport-based formulations for rigorous analysis of Deep Generative Models, Flow Models, and Diffusion-based learning frameworks.",
          "This research was done along with Gagan Chandra under supervision of Prof. Sakethanath Jagarlapudi."
        ]
      },
      {
        title: "Zero Correlation Linear Cryptanalysis on Unbalanced Fiestel Networks",
        workplace: "Center for Cryptography and Cybersecurity, IIT Hyderabad",
        workplaceUrl: "https://ccs.iith.ac.in/",
        duration: "May 2026 – July 2026",
        bullets: [
          "Investigated Zero-Correlation Linear Cryptanalysis of the block cipher SM4, focusing on unbalanced Feistel network structures.",
          "Developed mathematical frameworks for analyzing linear and differential cryptanalytic distinguishers and their properties.",
          "Performed complexity-theoretic analysis of cryptanalytic attacks, studying computational feasibility under practical resource constraints."
        ]
      },
      {
        title: "Deepfake Detection via Cross-Modal Inconsistency using Vision and Biological Signals",
        workplace: "Department of Electrical Engineering, IIT Hyderabad",
        duration: "Sep 2025 – Feb 2026",
        bullets: [
          "Selected for the IITH BUILD Cohort for proposing a novel framework for robust and explainable deepfake detection.",
          "Investigated the integration of physiological signal cues with GAN-based representations and Vision Transformers to improve robustness against synthetic manipulations.",
          "Explored multimodal feature fusion techniques for improving reliability and interpretability of deepfake detection systems.",
          "This research was done along with Adishesh Balaji under supervision of Prof. Sumohana S. Channappayya."
        ]
      }
    ],

    teaching: [
      {
        title: "EE3800/EE5903 Information Theory, Coding and Inference",
        role: "Teaching Assistant",
        workplace: "Department of Electrical Engineering, IIT Hyderabad",
        duration: "Jan 2027 – May 2027",
        description: "Assisting as a Teaching Assistant for EE3800/EE5903 Information Theory, Coding and Inference course during the Jan–May 2027 semester under Prof. Anjana A M, supporting tutorials, course administration, and student discussions."
      },
      {
        title: "NPTEL Theory of Computation",
        role: "Teaching Assistant",
        workplace: "Department of Computer Science and Engineering, IIT Hyderabad",
        duration: "Jan 2027 – May 2027",
        description: "Assisting as a Teaching Assistant for the NPTEL Theory of Computation course during the Jan–May 2027 session under Prof. Subrahmanyam Kalyanasundaram, preparing weekly assignments and solution keys, designing auto-gradable assessments, and addressing student queries on the course forum.",
        projectLinks: [
          { label: "Course Webpage", url: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs85" }
        ]
      },
      {
        title: "MA2120 Transform Techniques",
        role: "Teaching Assistant",
        workplace: "Department of Mathematics, IIT Hyderabad",
        duration: "Sept 2026 – Oct 2026",
        description: "Assisting as a Teaching Assistant for MA2120 Transform Techniques course during the Jul–Nov 2026 semester under Prof. Balasubramaniam Jayaram, supporting tutorials, course administration and student discussions.",
        projectLinks: [
          { label: "Course Webpage", url: "https://people.iith.ac.in/jbala/ma2120_transforms.html" }
        ]
      },
      {
        title: "CS1010 Discrete Mathematics for Computer Science",
        role: "Teaching Assistant",
        workplace: "Department of Computer Science and Engineering, IIT Hyderabad",
        duration: "July 2026 – Nov 2026",
        description: "Assisting as a Teaching Assistant for CS1010 Discrete Mathematics for Computer Science course during the Jul–Nov 2026 semester under Prof. Rogers Mathew and Prof. Shibam Ghosh, supporting tutorials, course administration, and student discussions."
      },
      {
        title: "EE2080 Random Processes",
        role: "Teaching Assistant",
        workplace: "Department of Electrical Engineering, IIT Hyderabad",
        duration: "July 2026 – Sept 2026",
        description: "Assisting as a Teaching Assistant for EE2080 Random Processes course during the Jul–Nov 2026 semester under Prof. Anjana A M, supporting tutorials, course administration, and student discussions on stochastic processes and their applications.",
        projectLinks: [
          { label: "Course Webpage", url: "https://anjanamahesh.github.io/courses/EE2080_july_nov_2026.html" }
        ]
      },
      {
        title: "AI1110 Probability and Random Variables",
        role: "Teaching Assistant",
        workplace: "Department of Artificial Intelligence, IIT Hyderabad",
        duration: "Jan 2026 – May 2026",
        description: "Assisted as a Teaching Assistant for AI1110 Probability and Random Variables course during the Jan–May 2026 semester under Prof. Anjana A M, helping with course logistics, conducting tutorials, and addressing student queries on probability theory and random variables.",
        projectLinks: [
          { label: "Course Webpage", url: "https://anjanamahesh.github.io/courses/ai1110_jan_apr_2026.html" }
        ]
      },
      {
        title: "ID1063 Introduction to Programming",
        role: "Teaching Assistant",
        workplace: "Department of Computer Science and Engineering, IIT Hyderabad",
        duration: "July 2025 – Dec 2025",
        description: "Assisted as a Teaching Assistant for ID1063 Introduction to Programming course during the Jul–Nov 2025 semester under Prof. Saurabh Kumar and Prof. Srijith PK, conducting laboratory sessions and mentoring students in C programming fundamentals."
      }
    ],

    academicServiceAndActivities: [
      {
        title: "Website Designer",
        workplace: "Elliptic PDEs and Beyond 2027, Department of Mathematics, IIT Hyderabad",
        workplaceUrl: "https://epicpde.github.io/EPIB/",
        duration: "4 – 6 February 2027",
        description: "Designed and developed the official conference website, and volunteering with the organizing team on event coordination and logistics.",
        projectLinks: [
          { label: "Conference Website", url: "https://epicpde.github.io/EPIB/" }
        ]
      },
      {
        title: "Quantum Hardware Core Member",
        workplace: "QET — The Quantum Technologies Club of IIT Hyderabad",
        duration: "Sep 2026 – Present",
        description: "I work on the physical side of quantum computing — studying how qubits are realized, controlled and measured, and how noise and decoherence shape the design of practical quantum hardware. Alongside this, I contribute to the club's broader work across its three domains:",
        bullets: [
          "Quantum Hardware — Quantum systems and qubit realizations, quantum dynamics, control, measurement, noise, decoherence, and physical quantum-computing architectures.",
          "Quantum Error Correction and Communication — Quantum information, open quantum systems, quantum channels, error-correcting codes, fault tolerance, entanglement, and quantum communication.",
          "Quantum Algorithms and Quantum Machine Learning — Quantum mechanics-inspired computational methods, quantum algorithms, variational quantum systems, quantum simulation, optimization, and quantum machine learning."
        ],
        projectLinks: [
          { label: "My Quantum Hardware Research", url: "/experience/research#quantum-hardware-research", internal: true }
        ]
      },
      {
        title: "Volunteer, RAAM 2026",
        workplace: "4th International Conference on Recent Advances in Applied Mathematics, IIT Hyderabad",
        duration: "6 – 8 July 2026",
        description: "Assisted in organizing and managing the 4th International Conference on Recent Advances in Applied Mathematics (RAAM) 2026. Coordinated Minisymposia Talks and Contributed talks. Handled Logo Design and Public Relations.",
        projectLinks: [
          { label: "RAAM 2026 Website", url: "https://sites.google.com/view/raam2026/" }
        ]
      },
      {
        title: "Teaching Assistant, ACM Summer School",
        workplace: "ACM Summer School on Symmetric Key Cryptography, IIT Hyderabad",
        duration: "8 – 17 June 2026",
        description: "Conducted sessions on Linear and Differential Cryptanalysis of DES and AES.",
        projectLinks: [
          { label: "ACM Summer School 2026 Website", url: "https://ccs.iith.ac.in/programs/acm2026/" }
        ]
      },
      {
        title: "Core Member",
        workplace: "Epoch — The AI, ML and Data Science Club of IIT Hyderabad",
        duration: "May 2025 – May 2026",
        bullets: [
          "Led the tenure project Quantum-Biologically Inspired Music Mashup Engine (with Gagan Chandra), applying ideas from quantum computing and signal processing to generate seamless song mashups from a learned compatibility graph of audio segments.",
          "Built a Multi-Modal Candidate Shortlisting System combining resume text with structured applicant data, achieving 91% F1 and 0.75 ROC-AUC on a realistic recruitment dataset.",
          "Designed attention-based deep learning models for sentiment analysis on IMDB movie reviews, with a modular architecture and attention visualizations for interpretability.",
          "Built a Facial Expression Recognition system using PCA and SVM, showing that classical ML can perform competitively without deep learning or large datasets."
        ],
        projectLinks: [
          { label: "Quantum-Bio Music Mashup Engine", url: "https://github.com/PathriVidyaPraveen/Quantum-Bio-Mashup" },
          { label: "Multi-Modal Candidate Shortlisting System", url: "https://github.com/PathriVidyaPraveen/Multi-Modal-Candidate-Shortlisting-System" },
          { label: "Sentiment Analysis from IMDB Movie Reviews", url: "https://github.com/PathriVidyaPraveen/Sentiment-Analysis-from-IMDB-Movie-Reviews" },
          { label: "Facial Expression Recognition with Limited Data", url: "https://github.com/PathriVidyaPraveen/Facial-Expression-Recognition-With-Limited-Data" }
        ]
      }
    ]
  },

  news: [
    {
      date: "26 November 2026",
      text: "Achieved an A+ grade in EE1206/EE3900 Linear Systems and Signal Processing Course."
    },
    {
      date: "12 November 2026",
      text: "Presented my research work on List Conflict Free Colorings of Planar Graphs."
    },
    {
      date: "7 September 2026",
      text: "Secured All India Rank 106 among 7,500+ participants in Round 1 of Integral Cup 2026 – Season 2, organised by STEMvibe Foundation."
    },
    {
      date: "8 July 2026",
      text: "Assisted in organizing the 4th International Conference on Recent Advances in Applied Mathematics organized by Dept. of Mathematics, IITH."
    },
    {
      date: "18 June 2026",
      text: "Conducted hands-on sessions in Linear Cryptanalysis in ACM Summer School on Symmetric Key Cryptography as a Teaching Assistant."
    },
    {
      date: "10 May 2026",
      text: "Achieved an A+ grade in EE5903 Information Theory, Coding and Inference Course."
    },
    {
      date: "2 April 2026",
      text: "Joined the Optimal Transport and Theoretical ML Research Group of Prof. Sakethanath Jagarlapudi, Department of CSE along with Gagan Chandra."
    },
    {
      date: "10 March 2026",
      text: "Joined the Applied Mathematics and Fluid Dynamics Research Group of Prof. Jyotirmoy Rana, Department of Mathematics."
    },
    {
      date: "2 Jan 2026",
      text: "Presented our research work on Deepfake Detection using Signal Processing on Innovation Day 2026 IITH along with Adishesh Balaji."
    },
    {
      date: "8 Nov 2025",
      text: "Joined the Computer Vision Research Group of Prof. Shashank Vatedka, Department of EE."
    },
    {
      date: "22 Sept 2025",
      text: "Received funding of Rs. 20,000 for research on Deepfake Detection using GANs and Physiology Signals as a part of IITH BUILD initiative."
    },
    {
      date: "2 April 2025",
      text: "Received Academic Excellence Award for securing the highest CGPA of 9.88 among CSE'28 batch."
    }
  ],

  skillCategories: [
    {
      category: "Mathematics and Theoretical Computer Science",
      skills: [
        "Quantitative Finance","Stochastic Calculus","Cryptography","Optimal Transport",
        "Measure Theory","Statistics","Complex Analysis","Information Theory","Convex Optimization",
        "Theory of Computation","Metric Spaces","Numerical Analysis","Linear Algebra","Probability and Stochastic Processes",
        "Group Theory","Differential Equations","Discrete Mathematics","Multivariable Calculus",
        "Wavelet Theory","Error Correction Codes","Signal Processing","Quantum Computing","Competitive Programming",
        "Data Structures and Algorithms",
      ]
    },
    {
      category: "Artificial Intelligence",
      skills: [
        "Agentic AI and RAG","Geospatial Intelligence","Generative Adversarial Networks","Data Science and Data Mining",
        "Reinforcement Learning","Audio and Speech Processing","Computer Vision","Natural Language Processing",

      ]
    },{
      category: "Theoretical Physics",
      skills: [
        "Fluid Dynamics","Solute Dispersion",
      ]
    },
    {
      category: "Systems",
      skills: [
        "Compilers","Database Management Systems","Operating Systems","Computer Architecture","RISC-V",


      ]
    },
    {
      category: "Programming Languages and Technologies",
      skills: [
        "Qiskit","Verilog","MATLAB","SQL","Go(Gin)","CSS","Tailwind","FastAPI","NextJS","Flask",
        "ReactJS","MongoDB","Express.js","Node.js","JavaScript","HTML","Bash Scripting","Java",
        "Python","C++","C"

      ]
    },
    {
      category: "Others",
      skills: [
        "Psychology","Philosophy","Biology","Quantum Biology","Chemistry","Computer Aided Design"
      ]
    }
  ],


  education: [
    {
      institution: "Indian Institute of Technology, Hyderabad",
      degree: "B.Tech Double Major in Mathematics",
      dates: "July 2026 - July 2028",
      grade: "9.00",
      description: "Coursework:\n1) Numerical Analysis\n2) Fuzzy Logic Connectives: Theory and Applications",
      courseLinks: {
        "Fuzzy Logic Connectives: Theory and Applications": "https://github.com/PathriVidyaPraveen/Fuzzy-Logic-Connectives-Theory-and-Applications-MA6040"
      }
    },
    {
      institution: "Indian Institute of Technology, Hyderabad",
      degree: "B.Tech Minor in Electrical Engineering",
      dates: "July 2026 - July 2028",
      grade: "NA",
      description: "Coursework:\n1) Linear Systems and Signal Processing\n2) Quantum Error Correction\n3) Deep Learning",
      courseLinks: {
        "Linear Systems and Signal Processing": "https://github.com/PathriVidyaPraveen/Linear-Systems-and-Signal-Processing-EE1206",
        "Quantum Error Correction": "https://github.com/PathriVidyaPraveen/Quantum-Error-Correction-EE5750",
        "Deep Learning": "https://github.com/PathriVidyaPraveen/Deep-Learning-EE6380"
      }
    },
    {
      institution: "Indian Institute of Technology, Hyderabad",
      degree: "B.Tech Computer Science and Engineering",
      dates: "July 2024 - July 2028",
      grade: "9.24",
      description: "Received the Academic Excellence Award (April 2025) for securing the highest first-semester CGPA (9.88) among the CSE'28 batch.\n\nMachine Learning & AI: Convex Optimization 2 - Algorithms, Concentration Inequalities, Foundations of Machine Learning, Artificial Intelligence, Probability and Random Variables\n\nMathematics: Introduction to Metric Spaces, Introduction to Group Theory, Vector Calculus, Differential Equations, Transform Techniques, Complex Variables, Linear Algebra, Introduction to Statistics, Calculus-II, Calculus-I\n\nElectrical Engineering: Information Theory - Coding and Inference, Convex Optimization, Random Processes, Energy Management, Digital Circuits, Basic Electrical Engineering\n\nTheoretical Computer Science: Theory of Computation, Algorithms, Data Structures, Discrete Maths for Computer Science\n\nComputer Systems: Compilers-II, Compilers-I, OS-II, OS-I, DBMS-II, DBMS-I, Computer Networks, Computer Architecture, Software Development Fundamentals, Introduction to Programming, Intoduction to Computing\n\nPhysics: Modern Physics, Physics Lab\n\nPsychology: Psychology of Well Being, Psychopathology and Mental Health, Psychology of Interpersonal Relationships, Psychology for Everyday Life\n\nAdditional Coursework: Systems Biology, Consumers and Commodities - An Introduction to Economic Anthropology, Introduction to Life Sciences, Environmental Chemistry, Digital Fabrication, Japanese Culture and Society, Communication Skills, Courts and Lawyers",
      courseLinks: {
        "Vector Calculus": "https://github.com/PathriVidyaPraveen/Vector-Calculus-MA1130",
        "Convex Optimization 2 - Algorithms": "https://github.com/PathriVidyaPraveen/Convex-Optimization-2-Algorithms-CS5660",
        "Foundations of Machine Learning": "https://github.com/PathriVidyaPraveen/Foundations-of-Machine-Learning-CS3390",
        "Computer Networks": "https://github.com/PathriVidyaPraveen/Computer-Networks-CS3530",
        "Compilers-II": "https://github.com/PathriVidyaPraveen/Compilers-II-CS3423"
      }
    },
    {
      institution: "Narayana Junior College - Vijayawada",
      degree: "Intermediate - Maths, Physics, Chemistry",
      dates: "May 2022 - 2024",
      grade: "987/1000",
      description: "Got a rank of 84 in JEE Mains 2024 and a rank of 842 in JEE Advanced 2024 and have been awarded with the Certificate of Merit for getting placed in the National Top 1% in the National Standard Examination of Chemistry (NSEC)."
    },
    {
      institution: "Dr. KKR's Gowtham High School, Vijayawada",
      degree: "Class 6 to Class 10",
      dates: "June 2017 - May 2022",
      grade: "587/600"
    }
  ],

  projects: [
    {
      name: "Measure-Theoretic Analysis and Non-Additive Generalization of Fuzzy Set Embeddings",
      association: "MA6040 Fuzzy Logic Connectives: Theory and Applications — Course Project",
      dates: null,
      description: "Course project on the mathematical foundations and generalization of Fuzzy Set Embeddings (FUSE) for taxonomy expansion, with Gagan Chandra, guided by Prof. Balasubramaniam Jayaram, Department of Mathematics, IITH.",
      bullets: [
        "Developed a measure-theoretic analysis of fuzzy set embeddings, correcting approximation guarantees and convergence rates, and characterizing consistency of supremum-based embeddings via Darboux integration and oscillation bounds.",
        "Generalized additive fuzzy-volume integration to non-additive capacities via Choquet and Sugeno integrals (incl. 2-additive Möbius representations), establishing theoretical bounds between the two.",
        "Introduced an interval-based possibility–necessity embedding with sibling-exclusivity constraints, restoring sound set-difference inference and raising held-out parent accuracy on SemEval-2016 Environment from 2.9% to 31.0% (MRR 14.8% → 48.5%)."
      ],
      technologies: ["Fuzzy Logic", "Measure Theory", "Choquet Integral", "Sugeno Integral", "Fuzzy Measures", "Possibility Theory", "Representation Learning", "Python"],
      github: "https://github.com/PathriVidyaPraveen/Measure-Theoretic-Analysis-and-Non-Additive-Generalization-of-Fuzzy-Set-Embeddings",
      liveDemo: null
    },
    {
      name: "Convex Clustering and Mixture Modeling with Theoretical Guarantees and ADMM Optimization",
      association: "EE5606 Convex Optimization — Course Project",
      dates: null,
      description: "Course project on convex clustering as a globally optimal alternative to EM for mixture modeling, with Gagan Chandra, B. Sri Sai Abhinav, and Uppala Prajin, guided by Prof. Sumohana S. Channappayya, Department of Electrical Engineering, IITH.",
      bullets: [
        "Derived deterministic recovery guarantees for sum-of-norms clustering via trace bounds on the empirical covariance, replacing probabilistic concentration arguments — for spherical components, recovery holds whenever θ² > d.",
        "Extended cluster-characterization theory to ℓ1 fusion penalties and multiplicative weights rᵢrⱼ via subgradient optimality and dual certificates.",
        "Built an ADMM solver comparing ℓ1 vs ℓ2 clusterpaths and kernel, inverse-norm and adaptive localized weights; adaptive weights achieved perfect core recovery on anisotropic (ellipsoidal) mixtures."
      ],
      technologies: ["Convex Optimization", "Sum-of-Norms Clustering", "Recovery Guarantees", "Dual Certificates", "ADMM", "Mixture Models", "Python"],
      github: "https://github.com/PathriVidyaPraveen/Convex-Clustering-Mixture-Modeling-Extensions-Structured-Weighting-l1-Fusion-Deterministic-Recovery",
      liveDemo: null
    },
    {
      name: "ProxSkip: Communication-Efficient Distributed Optimization",
      association: "CS5660 Convex Optimization 2: Algorithms — Course Project",
      dates: null,
      description: "Paper study and numerical simulations of ProxSkip, a randomized proximal-gradient method for communication-efficient federated learning, guided by Prof. Sakethanath Jagarlapudi, Department of Computer Science and Engineering, IITH.",
      bullets: [
        "Studied ProxSkip's randomized proximal framework, which skips expensive proximal evaluations probabilistically to cut communication rounds in distributed optimization.",
        "Analyzed its control-variate correction for client drift in heterogeneous federated learning, deriving convergence guarantees via Lyapunov analysis, gradient contraction and firm nonexpansiveness of proximal operators.",
        "Simulated heterogeneous distributed ridge regression comparing Gradient Descent, Local GD and Scaffnew across local-step frequencies, validating the theoretically optimal skipping probability p = 1/√κ."
      ],
      technologies: ["Convex Optimization", "Proximal Methods", "Federated Learning", "Distributed Optimization", "Convergence Analysis", "Lyapunov Analysis", "Python"],
      github: "https://github.com/PathriVidyaPraveen/Convex-Optimization-2-Algorithms-CS5660",
      liveDemo: null
    },
    {
      name: "Continuous-Time Statistical Arbitrage: An Ornstein-Uhlenbeck Framework with First-Passage Time Threshold Optimisation",
      association: null,
      dates: null,
      description: "Developed a systematic pairs trading framework using cointegration analysis, Ornstein–Uhlenbeck process modeling, and optimal stopping theory.",
      bullets: [
        "Derived exact MLE estimators for OU parameters and optimal entry thresholds via first-passage-time analysis and the Kolmogorov backward equation.",
        "Implemented a rolling walk-forward, out-of-sample backtesting engine with transaction costs and slippage.",
        "Achieved a Sharpe ratio of 1.23 and Calmar ratio of 2.34 on a 499-day OOS evaluation period."
      ],
      technologies: ["Quantitative Finance", "Stochastic Calculus", "Ornstein-Uhlenbeck Process", "Statistical Arbitrage", "Cointegration", "Optimal Stopping Theory", "Python", "Time Series Analysis"],
      github: "https://github.com/PathriVidyaPraveen/continuous-time-statistical-arbitrage",
      liveDemo: null
    },
    {
      name: "Deep Learning-Based Automatic Modulation Classification Under Fading and Noisy Communication Channels",
      association: "EE6380 Deep Learning — Course Project",
      dates: null,
      description: "Course project on classifying digital modulation schemes under fading, receiver impairments and varying SNR, with Dhanush V Nayak, Kaustubh P Khachane, and Bhuvanesh Sunil Nehete, guided by Prof. Shashank Vatedka, Department of Electrical Engineering, IITH.",
      bullets: [
        "Developed a parameter-efficient CNN classifying eight modulation schemes (OOK, BPSK, QPSK, 16-QAM, 2-FSK, 4-FSK, GMSK, OFDM) across fading channels and noise levels.",
        "Designed a parameter-free signal-processing front-end with fading-normalised spectral and statistical features, feeding a CNN with circular frequency padding, dilated residual convolutions and statistics-based pooling.",
        "Used noise-model-driven augmentation, label smoothing, EMA and class-weighted loss, achieving 81.90% test accuracy with only 48,472 trainable parameters."
      ],
      technologies: ["Deep Learning", "CNN", "Wireless Communication", "Signal Processing", "Fading Channels", "PyTorch", "Python"],
      github: "https://github.com/PathriVidyaPraveen/Deep-Learning-Based-Automatic-Modulation-Classification-Under-Fading-Noisy-Communication-Channels",
      liveDemo: null
    },
    {
      name: "Deep Learning for Autoregressive Spectrum Occupancy Prediction in Cognitive Radio Networks",
      association: "EE6380 Deep Learning — Course Project",
      dates: null,
      description: "Course project on next-slot spectrum occupancy prediction for cognitive-radio spectrum sensing, with Dhanush V Nayak, Kaustubh P Khachane, and Bhuvanesh Sunil Nehete, guided by Prof. Shashank Vatedka, Department of Electrical Engineering, IITH.",
      bullets: [
        "Designed BandFormer, a parameter-efficient causal architecture modelling temporal activity and interdependencies across six frequency sub-bands.",
        "Built a shared-weight multi-stream model combining GRUs, causal self-attention, cross-band attention and residual MLP blocks to capture long-range periodic patterns while preserving strict autoregressive causality.",
        "Optimised training with mixed precision, fused AdamW, torch.compile, cosine LR scheduling and EMA, achieving 81.83% validation accuracy with 49,645 parameters under a 50,000-parameter budget."
      ],
      technologies: ["Deep Learning", "Transformers", "GRU", "Attention Mechanisms", "Cognitive Radio", "Time Series Forecasting", "PyTorch", "Python"],
      github: "https://github.com/PathriVidyaPraveen/Deep-Learning-for-Autoregressive-Spectrum-Occupancy-Prediction-in-Cognitive-Radio-Networks",
      liveDemo: null
    },
    {
      name: "Structured Prediction for Dependency Parsing: A Stacked Ensemble of Transition-Based and Graph-Based Models",
      association: "CS3390 Foundations of Machine Learning — Course Project",
      dates: null,
      description: "Individual course project formulating dependency parsing as structured prediction over valid dependency trees using classical machine learning, guided by Prof. Srijith P.K. and Prof. Sandipan Dandapat, Department of Computer Science and Engineering, IITH.",
      bullets: [
        "Investigated complementary transition-based and graph-based parsers, with greedy and beam-search decoding, first- and second-order dependency models, and maximum spanning arborescence algorithms.",
        "Designed a multi-stage stacked ensemble integrating supertag prediction, distributional word representations (PPMI, truncated SVD, k-means) and out-of-fold parser predictions.",
        "Combined eight parsers via weighted arc voting and Chu–Liu–Edmonds decoding to enforce globally valid trees, achieving 84.01% labelled attachment score (LAS) on held-out sentences."
      ],
      technologies: ["Structured Prediction", "Dependency Parsing", "Ensemble Learning", "Graph Algorithms", "NLP", "Machine Learning", "Python"],
      github: "https://github.com/PathriVidyaPraveen/Structured-Prediction-for-Dependency-Parsing",
      liveDemo: null
    },
    {
      name: "Design and Spectral Characterization of LTI Reverberation, LTV Delay Modulation, and Two-Band Equalization in Musical Audio Signals",
      association: "EE1206 Linear Systems and Signal Processing — Course Project",
      dates: null,
      description: "Course project on the design and spectral analysis of linear time-invariant and time-varying audio systems, with Matteddu Balaji Sai Charan, Dande Stephen, and Madhavarapu Viswanatha Naga Sai Ram, guided by Prof. Sundar Vanka, Department of Electrical Engineering, IITH.",
      bullets: [
        "Designed sparse FIR reverberation systems from delayed, attenuated reflections, deriving transfer functions and frequency responses to analyze comb-filter ripple, causality, linearity and BIBO stability.",
        "Developed sinusoidally modulated delay (flanging) systems with fractional-delay interpolation, analyzing sweeping spectral notches and Doppler pitch modulation, validated via STFT analysis.",
        "Designed a second-order Butterworth biquad via the bilinear transform for a two-band equalizer, analyzing stability, pole-zero structure, phase response and non-complementary band splitting."
      ],
      technologies: ["Signal Processing", "LTI Systems", "LTV Systems", "Digital Filter Design", "FFT", "STFT", "Python", "NumPy"],
      github: "https://github.com/PathriVidyaPraveen/Design-and-Spectral-Characterization-of-LTI-Reverberation-LTV-Delay-Modulation-Two-Band-Equalization",
      liveDemo: null
    },
    {
      name: "OpenDNA: Quantum Simulation of Proton Tunneling in DNA",
      association: null,
      dates: null,
      description: "Quantum simulation of proton tunneling in DNA, modeling Löwdin's mutation mechanism.",
      bullets: [
        "Mapped 1D potential energy surfaces onto a multi-qubit grid via the Finite Difference Method.",
        "Simulated wavefunction evolution with a Trotterized solver (Qiskit) and modeled decoherence via stochastic dephasing.",
        "Benchmarked against classical exact diagonalization to quantify Trotter error."
      ],
      technologies: ["Qiskit", "Quantum Computing", "Quantum Biology", "Python", "Numerical Analysis", "Hamiltonian Simulation"],
      github: "https://github.com/PathriVidyaPraveen/OpenDNA",
      liveDemo: null
    },
    {
      name: "Learning Biological Dynamics with Neural Networks: SBINN-Based System Identification of Glucose–Insulin Models",
      association: "CH6330 Systems Biology — Course Project",
      dates: null,
      description: "Course project modeling glucose-insulin dynamics with physics-informed neural networks. Guided by Prof. Lopamudra Giri, Department of Chemical Engineering, IITH.",
      bullets: [
        "Modeled the ultradian glucose-insulin system as a 6-state, 21-parameter nonlinear ODE under sparse (glucose-only) observability.",
        "Used Systems Biology Informed Neural Networks (DeepXDE/TensorFlow) to recover unknown parameters from noisy time series.",
        "Validated predictions against ground-truth trajectories and ran Monte Carlo sensitivity analysis."
      ],
      technologies: ["Physics-Informed Neural Networks", "DeepXDE", "TensorFlow", "Systems Biology", "ODE Solvers", "Python", "Monte Carlo Simulation"],
      github: "https://github.com/PathriVidyaPraveen/Identifiability-Analysis-and-Parameter-Identification-via-Systems-Biology-Informed-Neural-Network",
      liveDemo: null
    },
    {
      name: "Acoustic Echo Cancellation in Hands-Free Systems using Digital Signal Processing",
      association: "Waveform Wars DSP Hackathon — Elan & nVision, IIT Hyderabad",
      dates: null,
      description: "Hackathon project (Waveform Wars DSP, Elan & nVision, IITH) building a real-time acoustic echo canceller for hands-free systems.",
      bullets: [
        "Implemented a Partitioned Block Frequency-Domain Adaptive Filter with NLMS adaptation.",
        "Added coherence-based double-talk detection and residual echo suppression.",
        "Achieved 15–30 dB ERLE in real-time microphone-speaker tests."
      ],
      technologies: ["Signal Processing", "Adaptive Filtering", "Python", "Digital Signal Processing", "Audio Processing", "FFT"],
      github: "https://github.com/PathriVidyaPraveen/Acoustic-Echo-Cancellation-in-Hands-Free-Systems",
      liveDemo: null
    },
    {
      name: "Audio Source Separation using Classical Digital Signal Processing",
      association: "Waveform Wars DSP Hackathon — Elan & nVision, IIT Hyderabad",
      dates: null,
      description: "Hackathon project (Waveform Wars DSP, Elan & nVision, IITH) separating two overlapping audio sources using classical signal processing only, no ML.",
      bullets: [
        "Separated and reconstructed frequency-overlapping sources without training data or neural networks.",
        "Evaluated separation quality using SDR, SIR, and SAR metrics."
      ],
      technologies: ["Signal Processing", "Python", "Digital Signal Processing", "Audio Processing", "Time-Frequency Analysis"],
      github: "https://github.com/PathriVidyaPraveen/Audio-Source-Separation",
      liveDemo: null
    },
    {
      name: "Real-Time Wireless Signal Classification using MobileNetV3",
      association: null,
      dates: null,
      description: "Real-time classifier distinguishing WiFi, Bluetooth, and ZigBee signals using MobileNetV3.",
      bullets: [
        "Used Bayesian optimization to refine predictions under interference.",
        "Deployed via ONNX for low-latency inference on embedded hardware, reaching 90% accuracy on real RF hardware."
      ],
      technologies: ["MobileNetV3", "ONNX", "Signal Processing", "Computer Vision", "Bayesian Optimization", "Python", "Embedded Systems"],
      github: "https://github.com/PathriVidyaPraveen/Radio-Frequency-Signal-and-Interference-Detector",
      liveDemo: null
    },
    {
      name: "Conversation Summarizer",
      association: "Pulse Quest Data Science Hackathon — Elan and NVision 2026",
      dates: null,
      description: "Hackathon project (Pulse Quest Data Science, Elan and NVision 2026) building a conversation summarizer using classical NLP methods and pretrained language models.",
      bullets: [],
      technologies: ["Natural Language Processing (NLP)", "Text Summarization", "Python", "Transformers"],
      github: null,
      liveDemo: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a/overlay/Project/703401299/treasury/?profileId=ACoAAFDgMjMBx5blDUnHkJFNNGpVLwMKGFPLl64",
      liveDemoLabel: "Certificate"
    },
    {
      name: "Efficiently Using Extra Register Bits When Smaller Datatype is Needed — ISA Extension and Efficient Quantum Circuit Simulation",
      association: "CS2323 Computer Architecture — Course Project",
      dates: null,
      description: "Course project on a custom RISC-V ISA extension for low-precision and quantum-inspired arithmetic, with B. Sri Sai Abhinav, guided by Prof. Rajesh Kedia, Department of CSE, IITH.",
      bullets: [
        "Added a SIMD framework and BFloat16/Float16/MSFP16 arithmetic within standard 64-bit registers.",
        "Designed a Quantum-Inspired ALU that packs complex amplitudes into registers to simulate quantum arithmetic classically.",
        "Verified all extensions in a custom ~4000-line C simulator."
      ],
      technologies: ["C", "RISC-V", "Computer Architecture", "ISA Design", "SIMD", "Quantum Computing", "Error Correction Codes", "Signal Processing"],
      github: "https://github.com/bssabhinavbss/Computer-architecture-project",
      liveDemo: null
    },
    {
      name: "FedGrant: Value-Aware, Deadline-Aware Packet Scheduling for Federated Learning over Lossy Networks",
      association: "CS3530 Computer Networks — Course Project",
      dates: null,
      description: "Course project on a receiver-driven edge gateway that schedules federated-learning model updates packet by packet under bursty loss and tight round deadlines, with Thamatam Jayadev Reddy, Thumma Tejaswi, and Uppala Prajin, guided by Prof. Kotaro Kataoka, Department of CSE, IITH.",
      bullets: [
        "Formulated each round as maximizing the FedAvg-weighted update energy delivered before the deadline; the gateway grants every bottleneck slot to the most valuable pending block across clients, with value-ordered retransmission and error feedback.",
        "Designed P-GRU, a 5.6k-parameter recurrent delivery predictor tracking Gilbert–Elliott loss bursts and queue build-up, cutting Brier score ~40% vs EWMA and beating HMM and MLP baselines, including on unseen cellular traces.",
        "Deployed the predictor in NumPy inside the asyncio UDP gateway (~1 ms for 20 clients) on a Mininet/netem testbed; FedGrant delivered ~2× the update value of TCP and +0.09–0.11 over plan-then-send scheduling."
      ],
      technologies: ["Computer Networks", "Federated Learning", "Packet Scheduling", "GRU", "Hidden Markov Models", "Mininet", "PyTorch", "Python"],
      github: "https://github.com/PathriVidyaPraveen/FedGrant",
      liveDemo: null
    },
    {
      name: "Adaptive LZ77 Compression for Efficient Communication & High-Performance TCP Networking",
      association: "CS3530 Computer Networks",
      dates: null,
      description: "Built a Linux TCP client-server system centered on an adaptive LZ77 compression protocol, alongside DNS-based hostname resolution and concurrent multi-client serving. Done collaboratively with Tamminana Amrutha, guided by Prof. Kotaro Kataoka, Department of CSE.",
      bullets: [
        "Designed a bit-packed adaptive LZ77 compression protocol with a bounded 4-KB sliding window, achieving 64.3% average size reduction on repetitive data and 45.3% on text.",
        "Built a Linux TCP client with getaddrinfo()-based DNS resolution across IPv4/IPv6, validated via tcpdump/Wireshark.",
        "Implemented pthread-per-connection TCP serving with explicit message framing, achieving up to 8.52× speedup over 16 concurrent clients."
      ],
      technologies: ["C", "TCP/IP", "DNS", "Sockets", "Linux", "pthreads", "Data Compression", "Computer Networks"],
      github: "https://github.com/PathriVidyaPraveen/Adaptive-LZ77-Compression-for-Efficient-Communication-High-Performance-TCP-Networking",
      liveDemo: null
    },
    {
      name: "Digital Logic Simplifier and Verilog Converter",
      association: "EE1202 Digital Circuits — Course Project",
      dates: null,
      description: "Course project on exact two-level minimization of Boolean functions, from algebraic simplification to synthesizable hardware. Guided by Prof. Ashudeb Datta, Department of Electrical Engineering, IITH.",
      bullets: [
        "Implemented the Quine–McCluskey algorithm, generating all prime implicants by iteratively merging minterms at Hamming distance one on the Boolean hypercube.",
        "Reduced the prime implicant chart to a minimum cover through essential prime implicant selection, giving a tabular method that scales beyond the visual limits of Karnaugh maps.",
        "Translated minimized sum-of-products expressions into Verilog HDL modules with self-checking testbenches, plus an SVG visualizer for truth tables and gate-level circuits."
      ],
      technologies: ["Verilog", "JavaScript", "HTML", "CSS", "Digital Circuits", "Boolean Algebra", "SVG"],
      github: "https://github.com/PathriVidyaPraveen/EE1202-Digital-Circuits-Project-Digital-Logic-Simplifier-and-Verilog-Converter",
      liveDemo: null
    },
    {
      name: "LLVM #232483 — Clang Diagnostic Fix for C Tentative Definitions",
      association: "CS3423 Compilers-II — Course Hackathon",
      dates: null,
      description: "Open-source contribution to Clang (LLVM Project) adding a missing -Wuninitialized-explicit-init diagnostic for C tentative definitions that are never completed. Guided by Prof. Ashish Mishra and Prof. Ramakrishna Upadrasta, Department of CSE, IITH.",
      bullets: [
        "Traced Clang's semantic analysis of C initialization semantics to find where uncompleted tentative definitions escaped the diagnostic.",
        "Implemented diagnostic handling for tentative definitions that are never completed.",
        "Added regression tests covering the new diagnostic behavior; the patch was reviewed and merged into the official LLVM repository."
      ],
      technologies: ["C", "C++", "LLVM", "Clang", "Compiler Design", "Regression Testing"],
      github: "https://github.com/llvm/llvm-project/pull/234210",
      githubLabel: "Merged PR",
      liveDemo: "https://github.com/llvm/llvm-project/commit/58936cb3678b4b5b96177f24cac3940b9a389fe3",
      liveDemoLabel: "LLVM Commit"
    },
    {
      name: "Building a Mini Operating System: Scheduler, Virtual Memory, and RAID Storage in xv6 (RISC-V)",
      association: "CS3523 Operating Systems-II — Course Project",
      dates: null,
      description: "Course project extending the xv6 (RISC-V) kernel with a custom scheduler, virtual memory, and RAID-backed storage. Guided by Prof. Abhijit Das, Department of CSE, IIT Hyderabad.",
      bullets: [
        "Replaced the default scheduler with a System-Call-Aware Multi-Level Feedback Queue scheduler with anti-starvation priority boosts.",
        "Added demand paging with Clock-based page replacement and a disk-backed swap system.",
        "Implemented RAID 0/1/5 for swap storage and FCFS/SSTF disk scheduling."
      ],
      technologies: ["C", "RISC-V", "xv6", "Operating Systems", "Systems Programming", "Virtual Memory", "RAID", "Disk Scheduling"],
      github: "https://github.com/PathriVidyaPraveen/cs3523-xv6-26",
      liveDemo: null
    },
    {
      name: "RISC-V RV64I Instruction Assembler",
      association: null,
      dates: null,
      description: "RV64I assembler translating RISC-V assembly into hexadecimal machine code, written in C.",
      bullets: [
        "Built tokenizing, parsing, and instruction-encoding logic with memory-safe dynamic allocation.",
        "Modularized encoders to support future ISA extensions (e.g., IMAFD)."
      ],
      technologies: ["C", "RISC-V", "Systems Programming", "Compilers", "Assembly Language"],
      github: "https://github.com/PathriVidyaPraveen/RISC-V-RV64I-Assembler",
      liveDemo: null
    },
    {
      name: "Infinite Precision Arithmetic Library",
      association: "CS1023 Software Development Fundamentals — Course Project",
      dates: null,
      description: "Course project implementing an arbitrary-precision arithmetic library in Java. Guided by Prof. Ashish Mishra, Department of CSE, IITH.",
      bullets: [
        "Built AInteger and AFloat classes on string-based representations to avoid round-off error.",
        "Implemented addition, subtraction, multiplication, and division from first principles for arbitrarily large numbers."
      ],
      technologies: ["Java", "Object-Oriented Programming", "Software Development"],
      github: "https://github.com/PathriVidyaPraveen/Infinite-Precision-Calculator-in-Java",
      liveDemo: null
    },
    {
      name: "IITH Mess Registration Web Application",
      association: "Lambda Core Selection Project — with B. Sri Sai Abhinav and T. Dinesh Reddy",
      dates: null,
      description: "Lambda Core selection project: a full-stack MERN app for mess registration, allocation, swaps, and rebates, with B. Sri Sai Abhinav and T. Dinesh Reddy.",
      bullets: [
        "Built REST APIs (Node.js/Express) for auth, allocation, and admin workflows with role-based access control.",
        "Handled allocation logic with capacity constraints and vacancy tracking on MongoDB.",
        "Deployed via Netlify, Render, and MongoDB Atlas."
      ],
      technologies: ["MongoDB", "Express.js", "ReactJS", "Node.js", "MERN Stack", "JavaScript", "HTML", "CSS", "Full-Stack Development", "REST APIs"],
      github: "https://github.com/PathriVidyaPraveen/Mess-Registration-App",
      liveDemo: null
    }
  ],

  certifications: [
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI",
      issuedDate: null,
      skills: ["Machine Learning (ML)", "Deep Learning (DL)", "Artificial Intelligence (AI)", "Reinforcement Learning", "Data Science"],
      link: "https://www.coursera.org/account/accomplishments/specialization/UTJQ2ITN41V1"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      issuedDate: null,
      skills: ["Deep Learning (DL)", "Artificial Intelligence (AI)", "Machine Learning (ML)", "Neural Networks", "Computer Vision", "Natural Language Processing (NLP)"],
      link: "https://www.coursera.org/account/accomplishments/specialization/SCRMCI0E1III"
    },
    {
      name: "Natural Language Processing Specialization",
      issuer: "DeepLearning.AI",
      issuedDate: null,
      skills: ["Natural Language Processing (NLP)", "Deep Learning (DL)", "Artificial Intelligence (AI)", "Machine Learning (ML)"],
      link: "https://www.coursera.org/account/accomplishments/specialization/3EZHPHPTRJZI"
    },
    {
      name: "Generative Adversarial Networks (GANs) Specialization",
      issuer: "DeepLearning.AI",
      issuedDate: null,
      skills: ["Generative Adversarial Networks", "Deep Learning (DL)", "Artificial Intelligence (AI)", "Machine Learning (ML)"],
      link: "https://www.coursera.org/account/accomplishments/specialization/UL5XWV9F1ELO"
    },
    {
      name: "AI for Medicine Specialization",
      issuer: "DeepLearning.AI",
      issuedDate: null,
      skills: ["Artificial Intelligence (AI)", "Machine Learning (ML)", "Deep Learning (DL)", "Computer Vision", "Natural Language Processing (NLP)"],
      link: "https://www.coursera.org/account/accomplishments/specialization/CN6SKA6B4PQ7"
    },
    {
      name: "Algorithms Specialization",
      issuer: "Stanford University",
      issuedDate: null,
      skills: ["Data Structures and Algorithms", "Competitive Programming"],
      link: "https://www.coursera.org/account/accomplishments/specialization/5Z1NLUBOSVB7"
    },
    {
      name: "AI on ARM Workshop",
      issuer: "Department of CSE, IIT Hyderabad",
      issuedDate: null,
      skills: ["Artificial Intelligence (AI)", "Machine Learning (ML)"],
      link: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a/overlay/Certifications/703540491/treasury/?profileId=ACoAAFDgMjMBx5blDUnHkJFNNGpVLwMKGFPLl64"
    },
    {
      name: "Bharatiya Antariksha Hackathon 2025",
      issuer: "ISRO",
      issuedDate: "2025",
      skills: ["Computer Vision", "Artificial Intelligence (AI)", "Machine Learning (ML)", "Satellite Imagery", "Geospatial Intelligence"],
      description: "This certification of acknowledgement is awarded for active participation in ISRO Bharatiya Antariksha Hackathon 2025 for a novel idea addressing a real world challenge in AI in the field of Computer Vision — a scalable AI/ML-powered system for automated glacial lake detection, temporal monitoring, and risk forecasting using multi-source satellite imagery.",
      link: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a/overlay/Certifications/703717475/treasury/?profileId=ACoAAFDgMjMBx5blDUnHkJFNNGpVLwMKGFPLl64"
    },
    {
      name: "Developing AI Applications with Python and Flask",
      issuer: "IBM",
      issuedDate: null,
      skills: ["Python", "Flask", "Artificial Intelligence (AI)"],
      link: "https://www.coursera.org/account/accomplishments/verify/ALH0WEPCALRL"
    },
    {
      name: "Developing Front-End Apps with React",
      issuer: "IBM",
      issuedDate: null,
      skills: ["ReactJS", "Full-Stack Development", "JavaScript"],
      link: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a/details/certifications/"
    },
    {
      name: "Developing Back-End Apps with Node.js and Express",
      issuer: "IBM",
      issuedDate: null,
      skills: ["Node.js", "Express.js", "Full-Stack Development"],
      link: "https://www.coursera.org/account/accomplishments/verify/62JMM6O175DU"
    },
    {
      name: "Go: The Complete Developer's Guide (Golang)",
      issuer: "Udemy",
      issuedDate: null,
      skills: ["Go (Programming Language)", "Software Development"],
      link: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a/overlay/Certifications/646021210/treasury/?profileId=ACoAAFDgMjMBx5blDUnHkJFNNGpVLwMKGFPLl64"
    }
  ],

  courseCategories: [
    {
      category: "Mathematics",
      courses: [
        "Calculus-I (A+)",
        "Calculus-II (A+)",
        "Complex Variables (A)",
        "Introduction to Statistics (A)",
        "Transform Techniques (A)",
        "Differential Equations (A)",
        "Numerical Analysis (A-)",
        "Introduction to Group Theory (A-)",
        "Linear Algebra",
        "Introduction to Metric Spaces"
      ]
    },
    {
      category: "Electrical Engineering",
      courses: [
        "Information Theory, Coding and Inference (A+)",
        "Digital Circuits (A+)",
        "Basic Electrical Engineering (A+)",
        "Convex Optimization (A)",
        "Random Processes (A)",
        "Energy Management (A)",
        "Quantum Error Correction (currently enrolled)",
        "Linear Systems and Signal Processing (currently enrolled)"
      ]
    },
    {
      category: "Artificial Intelligence",
      courses: [
        "Concentration Inequalities (A)",
        "Probability and Random Variables (A)",
        "Artificial Intelligence (A-)",
        "Foundations of Machine Learning (currently enrolled)",
        "Reinforcement Learning (currently enrolled)",
        "Data Mining (currently enrolled)",
        "Convex Optimization 2: Algorithms (currently enrolled)"
      ]
    },
    {
      category: "Theoretical Computer Science",
      courses: [
        "Discrete Maths for Computer Science (A)",
        "Algorithms (A-)",
        "Theory of Computation",
        "Data Structures"
      ]
    },
    {
      category: "Physics",
      courses: [
        "Physics Lab (A+)",
        "Modern Physics (A)"
      ]
    },
    {
      category: "Computer Systems",
      courses: [
        "Intoduction to Computing (A)",
        "Introduction to Programming (A)",
        "Software Development Fundamentals (A-)",
        "Computer Architecture (A-)",
        "Operating Systems I (A-)",
        "Database Management Systems I (A-)",
        "Introduction to DBMS II (A-)",
        "Compilers-I (A-)",
        "Operating Systems-II",
        "Compilers-II (currently enrolled)",
        "Computer Networks (currently enrolled)"
      ]
    },
    {
      category: "Other",
      courses: [
        "Systems Biology (A+)",
        "Psychology of Well Being (A+)",
        "Consumers and Commodities - An Introduction to Economic Anthropology (A+)",
        "Introduction to Life Sciences (A)",
        "Psychopathology and Mental Health (A)",
        "Environmental Chemistry (A)",
        "Psychology of Interpersonal Relationships (A-)",
        "Digital Fabrication (A-)",
        "Japanese Culture and Society (A-)",
        "Communication Skills (A-)",
        "Courts and Lawyers (currently enrolled)",
        "Psychology for Everyday Life (currently enrolled)"
      ]
    }
  ],

  honorsAndAwards: [
    {
      name: "Academic Excellence Award 2025",
      issuer: "Indian Institute of Technology, Hyderabad",
      date: "Apr 2025",
      description: "Awarded with the Academic Excellence Award on April 2 2025 for securing the highest CGPA of 9.88 in the Department of Computer Science and Engineering on occasion of 17th Foundation Day of IITH.",
      link: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a/overlay/Honor/1967727871/treasury/?profileId=ACoAAFDgMjMBx5blDUnHkJFNNGpVLwMKGFPLl64",
      linkLabel: "View Award"
    },
    {
      name: "AIR 106 – Integral Cup 2026 Season 2 (Round 1)",
      issuer: "STEMvibe Foundation",
      date: "Sep 2026",
      description: "Secured All India Rank 106 among 7,500+ registered participants in Round 1 of Integral Cup 2026 – Season 2, a national-level mathematics and quantitative problem-solving competition sponsored by Jane Street and organised by STEMvibe Foundation. The competition covered four tracks: Discrete Mathematics, Number Theory, Mathematics for Machine Learning, and Reinforcement Learning. The offline examination was conducted across 47 centres nationwide, and the result qualified me for the next round of the competition.",
      link: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a/overlay/Honor/2041248303/treasury/?profileId=ACoAAFDgMjMBx5blDUnHkJFNNGpVLwMKGFPLl64",
      linkLabel: "View Award"
    },
    {
      name: "Certificate of Merit from National Standard Examination in Chemistry(NSEC)",
      issuer: "Association of Chemistry Teachers, Homi Bhabha Centre for Science Education",
      date: "Nov 2023",
      description: "Awarded with the Certificate of Merit in NSEC 2023 conducted on 26th November 2023 for getting placed in the National Top 1% of the participants.",
      link: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a/overlay/Honor/1244482966/treasury/?profileId=ACoAAFDgMjMBx5blDUnHkJFNNGpVLwMKGFPLl64",
      linkLabel: "View Award"
    }
  ],

  testScores: [
    {
      name: "JEE Advanced 2024",
      score: "240 / 360",
      date: "May 2024",
      rank: "AIR 842. Secured scores of 81/120 in Mathematics, 76/120 in Physics, 83/120 in Chemistry."
    },
    {
      name: "JEE Mains 2024",
      score: "295 / 300",
      date: "Apr 2024",
      rank: "AIR 84. Secured 100 percentile in Physics in April 2024 session and 100 percentile in Chemistry in both January 2024 and April 2024 sessions."
    }
  ],

  competitiveProgramming: [
    {
      platform: "Codeforces",
      handle: "praveen.ipynb",
      rating: "Specialist",
      maxRating: 1594,
      link: "https://codeforces.com/profile/praveen.ipynb",
      linkLabel: "Codeforces Profile"
    }
  ],

  languages: [
    { name: "English", proficiency: "Full professional proficiency" },
    { name: "Hindi", proficiency: "Working proficiency" },
    { name: "Telugu", proficiency: "Native or bilingual proficiency" }
  ]
};

export default data;
