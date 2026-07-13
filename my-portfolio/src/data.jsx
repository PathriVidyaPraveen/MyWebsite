// src/data.js

const data = {
  name: "Pathri Vidya Praveen",
  photoPlaceholder: "/mnt/c/Engineering/linkedin_profile_pic.jpg", // Remember to replace this with your actual image path
  headline: "B.Tech 3rd Year Student | Computer Science & Engineering | IIT Hyderabad",
  location: "IIT Hyderabad, Kandi, Telangana, India",
  email: "cs24btech11047@iith.ac.in",
  emailSecondary: "vidyapraveen.2006@gmail.com",
  github: "https://github.com/PathriVidyaPraveen",
  linkedin: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a",
  codeforces: "https://codeforces.com/profile/praveen.ipynb",
  codechef: "https://www.codechef.com/users/praveen_0_6",
  leetcode: "https://leetcode.com/u/Pathri_Vidya_Praveen/",

  about: {
    summary: "My research interests involve intersection of Mathematics, Theoretical Physics and Machine Learning. Currently investigating problems in Fluid Dynamics, Optimal Transport and Computer Vision.",
    detailed: "I am a third-year Computer Science and Engineering undergraduate at IIT Hyderabad. My work is grounded in rigorous theoretical mathematics and its deep connections to theoretical physics and machine learning. I am drawn to areas where abstraction does real work — coding theory, signal processing, quantum computing, quantitative finance, and theoretical computer science. But mathematics is only half of what I find myself thinking about. Psychology and philosophy have always felt like the other side of the same curiosity — one studies the structure of the world, the other studies the structure of the mind trying to understand it."
  },

  experience: [
    {
      title: "Cryptography Research Intern",
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
      title: "Optimal Transport Researcher",
      workplace: "Department of Computer Science and Engineering, IIT Hyderabad",
      duration: "April 2026 – Present",
      bullets: [
        "Studying the mathematical foundations of Optimal Transport, including Kantorovich formulations, Wasserstein geometry, and entropic regularization.",
        "Exploring applications of Optimal Transport in machine learning, including distribution alignment, domain adaptation, and generative modeling.",
        "Investigating Optimal Transport-based formulations for rigorous analysis of Deep Generative Models, Flow Models, and Diffusion-based learning frameworks.",
        "This research was done along with Gagan Chandra under supervision of Prof. Sakethanath Jagarlapudi."
      ]
    },
    {
      title: "Fluid Dynamics Researcher",
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
      title: "Computer Vision Researcher",
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
      title: "Computer Vision Researcher",
      workplace: "Department of Electrical Engineering, IIT Hyderabad",
      duration: "Sep 2025 – Feb 2026",
      bullets: [
        "Selected for the IITH BUILD Cohort for proposing a novel framework for robust and explainable deepfake detection.",
        "Investigated the integration of physiological signal cues with GAN-based representations and Vision Transformers to improve robustness against synthetic manipulations.",
        "Explored multimodal feature fusion techniques for improving reliability and interpretability of deepfake detection systems.",
        "This research was done along with Adishesh Balaji under supervision of Prof. Sumohana S. Channappayya."
      ]
    },
    {
      title: "Teaching Assistant",
      workplace: "Department of Electrical Engineering, IIT Hyderabad",
      duration: "July 2026 – Sept 2026",
      description: "Assisting as a Teaching Assistant for EE2080 Random Processes course during the Jul–Nov 2026 semester under Prof. Anjana A M, supporting tutorials, course administration, and student discussions on stochastic processes and their applications."
    },
    {
      title: "Teaching Assistant",
      workplace: "Department of AI, IIT Hyderabad",
      duration: "Jan 2026 – May 2026",
      description: "Assisted as a Teaching Assistant for AI1110 Probability and Random Variables course during the Jan–May 2026 semester under Prof. Anjana A M, helping with course logistics, conducting tutorials, and addressing student queries on probability theory and random variables."
    },
    {
      title: "Teaching Assistant",
      workplace: "Department of CSE, IIT Hyderabad",
      duration: "July 2025 – Dec 2025",
      description: "Assisted as a Teaching Assistant for ID1063 Introduction to Programming course during the Jul–Nov 2025 semester under Prof. Saurabh Kumar and Prof. Srijith PK, conducting laboratory sessions and mentoring students in C programming fundamentals."
    },
    {
      title: "Core Member",
      workplace: "Epoch — The AI, ML and Data Science Club of IIT Hyderabad",
      duration: "May 2025 – May 2026",
      bullets: [
        "Led the development of the tenure project Quantum-Biologically Inspired Music Mashup Engine (with Gagan Chandra), integrating concepts from quantum computing, quantum biology, signal processing, machine learning, and computational music analysis. Designed and implemented a quantum-biologically inspired mashup generation framework in which audio segments are modeled as discrete Hilbert-space states, with transitions governed by quantum coherence, vibronic coupling, and Lindblad-style decoherence mechanisms. Built a Fourier- and Wavelet-based time–frequency spectral database by converting raw audio into beat-aligned, dimension-normalized segments containing STFT representations, Continuous Wavelet Transform (CWT) features, chroma-key information, and temporal metadata. Constructed a segment-transition graph using machine-learning-derived compatibility scores and utilized the resulting adjacency structure as the Hamiltonian backbone for a quantum-walk-based mashup generation algorithm incorporating ENAQT-inspired creativity tuning.",
        "Developed the proof-of-concept project Multi-Modal Candidate Shortlisting System (Multi-modal Resume Shortlisting using BERT + Tabular Data): Designed an end-to-end pipeline to classify candidate resumes based on textual and structured features using synthetic labels. Built a hybrid model combining BERT (for resume text) with a tabular MLP (for GPA & experience), achieving 91% F1 and 0.75 ROC-AUC. Engineered realistic noise in labels and simulated tabular data to reflect recruitment domain constraints. Implemented advanced techniques: GloVe embeddings, t-SNE visualization, class weighting, early stopping, and schedulers in PyTorch.",
        "Developed the proof-of-concept project Sentiment Analysis from IMDB Movie Reviews: Designed and implemented advanced NLP models combining RNNs/LSTMs with cutting-edge attention mechanisms (Bahdanau, Luong Dot/General/Concat) for sentiment classification. Built a modular, plug-and-play architecture enabling seamless integration of attention layers into both unidirectional and bidirectional models. Leveraged pre-trained GloVe embeddings and visualized attention maps to enhance model interpretability. Achieved robust performance across key metrics (accuracy, F1, precision, recall) and conducted comprehensive model benchmarking.",
        "Developed a Facial Expression Recognition system under limited data constraints using classical machine learning. Applied Principal Component Analysis (PCA) for dimensionality reduction of facial image features and trained Support Vector Machine (SVM) classifiers with RBF and linear kernels. Evaluated across standard expression categories (e.g., happy, sad, angry, surprised), demonstrating how classical ML pipelines can achieve competitive performance even without deep learning or large datasets."
      ],
      projectLinks: [
        { label: "Quantum-Bio Music Mashup Engine", url: "https://github.com/PathriVidyaPraveen/Quantum-Bio-Mashup" },
        { label: "Multi-Modal Candidate Shortlisting System", url: "https://github.com/PathriVidyaPraveen/Multi-Modal-Candidate-Shortlisting-System" },
        { label: "Sentiment Analysis from IMDB Movie Reviews", url: "https://github.com/PathriVidyaPraveen/Sentiment-Analysis-from-IMDB-Movie-Reviews" },
        { label: "Facial Expression Recognition with Limited Data", url: "https://github.com/PathriVidyaPraveen/Facial-Expression-Recognition-With-Limited-Data" }
      ]
    }
  ],

  news: [
    {
      date: "8 July 2026",
      text: "Assisted in organizing the 4th International Conference on Recent Advances in Applied Mathematics organized by Dept. of Mathematics, IITH."
    },
    {
      date: "18 June 2026",
      text: "Conducted hands-on sessions in Linear Cryptanalysis in ACM Summer School on Symmetric Key Cryptography as a Teaching Assistant."
    },
    {
      date: "11 May 2026",
      text: "Started my research internship in Cryptography and Theoretical Computer Science in CCS, IIT Hyderabad."
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
      degree: "B.Tech Computer Science and Engineering",
      dates: "July 2024 - July 2028",
      grade: "9.23",
      activities: "Participated actively in various research projects involving rigorous mathematics, worked as Teaching Assistant for many courses.",
      award: "Awarded with the prestigious Academic Excellence Award on 2 April, 2025 for my highest GPA of 9.88 among all the CSE'28 batch in the 1st semester."
    },
    {
      institution: "Narayana Junior College - Vijayawada",
      degree: "Intermediate - Maths, Physics, Chemistry",
      dates: "May 2022 - 2024",
      grade: "987/1000",
      activities: "Rank of 84 in JEE Mains 2024, rank of 842 in JEE Advanced 2024.",
      award: " Awarded with the Certificate of Merit for getting placed in the National Top 1% in the National Standard Examination of Chemistry (NSEC)."
      
    },
    {
      institution: "Dr. KKR's Gowtham High School, Vijayawada",
      degree: "Class 6 to Class 10",
      dates: "June 2017 - May 2022",
      grade: "587/600",
      activities: "Learnt different topics in Mathematics, Physics, Chemistry, Biology with a special focus for JEE Advanced",
      award: "Won several gold medals and trophies in high school Mathematics and Science Olympiads"
    }
  ],

  projects: [
    {
      name: "Convex Clustering and Mixture Modeling with Theoretical Guarantees and ADMM Optimization",
      association: "EE5606 Convex Optimization — Course Project",
      dates: null,
      description: "Developed an advanced convex optimization project exploring clustering and mixture modeling with theoretical guarantees and scalable optimization methods.This project was done along with Gagan Chandra, B. Sri Sai Abhinav, Uppala Prajin guided by Prof. Sumohana S. Channappayya, Department of Electrical Engineering, IITH.",
      bullets: [
        "Studied and extended convex clustering formulations as an alternative to non-convex methods like EM, addressing issues of local minima and initialization sensitivity.",
        "Implemented ADMM-based optimization algorithms to efficiently solve non-differentiable clustering objectives with fusion penalties.",
        "Explored ℓ1 vs ℓ2 fusion penalties, analyzing their impact on clustering geometry, stability, and recovery behavior.",
        "Designed and evaluated adaptive and multiplicative weighting schemes, demonstrating their effect on cluster recovery and robustness.",
        "Derived deterministic recovery guarantees using covariance-based bounds, replacing traditional probabilistic concentration approaches.",
        "Conducted extensive simulations to validate theoretical results, including sensitivity analysis over regularization, variance, and weighting parameters.",

      ],
      technologies: ["Convex Optimization", "ADMM", "Clustering", "Mixture Models", "Python", "Numerical Analysis"],
      github: "https://github.com/PathriVidyaPraveen/Convex-Clustering-Mixture-Modeling-Extensions-Structured-Weighting-l1-Fusion-Deterministic-Recovery",
      liveDemo: null
    },
    {
      name: "Building a Mini Operating System: Scheduler, Virtual Memory, and RAID Storage in xv6 (RISC-V)",
      association: "CS3523 Operating Systems-II — Course Project",
      dates: null,
      description: "Developed a series of advanced kernel-level extensions to the xv6 RISC-V operating system, transforming it into a feature-rich experimental OS with custom scheduling, memory management, and disk subsystems. This project was guided by Prof. Abhijit Das, Department of CSE, IIT Hyderabad.",
      bullets: [
        "Designed and implemented multiple custom system calls, including process hierarchy queries and per-process system call accounting, enabling kernel-level introspection and statistics tracking.",
        "Replaced the default round-robin scheduler with a System-Call-Aware Multi-Level Feedback Queue (SC-MLFQ) scheduler, incorporating dynamic priority adjustment based on process interactivity and preventing starvation via periodic priority boosts.",
        "Built a scheduler-aware virtual memory subsystem with demand paging, page fault handling, and a Clock-based page replacement algorithm integrated with process priority for intelligent eviction decisions.",
        "Designed and implemented a disk-backed swap system, replacing in-memory swap with persistent storage using block-level I/O and a custom request scheduling layer.",
        "Implemented disk scheduling policies (FCFS and SSTF) and simulated disk latency, enabling performance comparison and realistic I/O modeling.",
        "Developed RAID-based storage support (RAID 0, RAID 1, RAID 5) for swap space, including striping, mirroring, and parity-based recovery mechanisms.",
        "Engineered synchronization and locking strategies to ensure kernel correctness, prevent deadlocks, and maintain consistency across concurrent operations.",
        "Conducted extensive stress testing with multi-process workloads to validate scheduling fairness, memory correctness, and disk reliability under high system load."
      ],
      technologies: ["C", "RISC-V", "xv6", "Operating Systems", "Systems Programming", "Virtual Memory", "RAID", "Disk Scheduling"],
      github: "https://github.com/PathriVidyaPraveen/cs3523-xv6-26",
      liveDemo: null
    },
    {
      name: "Learning Biological Dynamics with Neural Networks: SBINN-Based System Identification of Glucose–Insulin Models",
      association: "CH6330 Systems Biology — Course Project",
      dates: null,
      description: "Developed an interdisciplinary AI + systems biology project to model and infer hidden dynamics in biological systems using physics-informed neural networks. Guided by Prof. Lopamudra Giri, Department of Chemical Engineering, IITH.",
      bullets: [
        "Modeled a complex ultradian glucose–insulin regulatory system as a nonlinear ODE system with 6 state variables and 21 parameters, capturing physiological interactions under sparse observability (only glucose measurements available).",
        "Performed structural identifiability analysis to determine which parameters can be uniquely recovered, addressing fundamental limitations of naïve curve fitting in biological systems.",
        "Implemented Systems Biology Informed Neural Networks (SBINNs) using DeepXDE/TensorFlow to estimate unknown model parameters directly from noisy time-series data, integrating physical constraints into the learning process.",
        "Built a full end-to-end pipeline: synthetic data generation via ODE solvers, neural network-based parameter inference, forward simulation and validation, and out-of-sample forecasting under unseen conditions.",
        "Validated learned parameters by comparing predicted system trajectories against ground-truth simulations across all state variables.",
        "Conducted sensitivity analysis and Monte Carlo simulations (1000+ runs) to quantify parameter influence and uncertainty in biological predictions.",
        "Demonstrated how combining mechanistic modeling (ODEs) with deep learning improves reliability and interpretability in scientific ML applications."
      ],
      technologies: ["Physics-Informed Neural Networks", "DeepXDE", "TensorFlow", "Systems Biology", "ODE Solvers", "Python", "Monte Carlo Simulation"],
      github: "https://github.com/PathriVidyaPraveen/Identifiability-Analysis-and-Parameter-Identification-via-Systems-Biology-Informed-Neural-Network",
      liveDemo: null
    },
    {
      name: "Efficiently Using Extra Register Bits When Smaller Datatype is Needed — ISA Extension and Efficient Quantum Circuit Simulation",
      association: "CS2323 Computer Architecture — Course Project",
      dates: null,
      description: "Modern ML and emerging algorithms demand high speed and low precision, creating an opportunity to optimize standard 64-bit General Purpose Registers (GPRs). This project implements a custom ISA extension that efficiently utilizes unused register bits, verified in a custom simulator (~4000 lines of C). Done with B. Sri Sai Abhinav, guided by Prof. Rajesh Kedia, Department of CSE, IITH.",
      bullets: [
        "Introduced a comprehensive SIMD Framework supporting different field widths in multiples of 2, enabling sub-register parallelism for low-precision ML workloads.",
        "Implemented BFloat16/Float16/MSFP16 arithmetic within standard 64-bit GPRs, avoiding the need for dedicated hardware accelerators.",
        "Designed a novel Quantum-Inspired ALU (QALU) that packs complex amplitudes into single registers, simulating quantum arithmetic on a classical RISC-V simulator.",
        "Explored data reliability through Error-Correction Codes (ECC) and register-level caching mechanisms.",
        "Leveraged register noise for probabilistic algorithms and signal processing applications, demonstrating the main novelty of quantum-inspired classical simulation.",
        "Built and verified all extensions in a custom simulator, demonstrating feasibility of specialized computation without dedicated hardware."
      ],
      technologies: ["C", "RISC-V", "Computer Architecture", "ISA Design", "SIMD", "Quantum Computing", "Error Correction Codes", "Signal Processing"],
      github: "https://github.com/bssabhinavbss/Computer-architecture-project",
      liveDemo: null
    },
    {
      name: "Digital Logic Simplifier and Verilog Converter",
      association: "EE1202 Digital Circuits — Course Project",
      dates: null,
      description: "Guided by Prof. Ashudeb Datta, Department of Electrical Engineering, IITH",
      bullets: [
        "Designed a web-based logic minimization system using the Quine–McCluskey algorithm to overcome Karnaugh Map scalability limits for complex Boolean functions.",
        "Automated the synthesis of IEEE-standard Verilog HDL modules and self-checking testbenches, enabling direct integration of optimized logic into EDA simulation toolchains.",
        "Built a high-performance SVG visualization engine and a client-side frontend to render minimized circuits and interactive truth tables without server-side dependencies."
      ],
      technologies: ["Verilog", "JavaScript", "HTML", "CSS", "Digital Circuits", "Boolean Algebra", "SVG"],
      github: "https://github.com/PathriVidyaPraveen/EE1202-Digital-Circuits-Project-Digital-Logic-Simplifier-and-Verilog-Converter",
      liveDemo: null
    },
    {
      name: "Infinite Precision Arithmetic Library",
      association: "CS1023 Software Development Fundamentals — Course Project",
      dates: null,
      description: "Developed an object-oriented Java library supporting arithmetic operations on arbitrary-precision integers and floating-point numbers beyond standard fixed-width numeric limits. Guided by Prof. Ashish Mishra, Department of CSE, IITH.",
      bullets: [
        "Designed custom AInteger and AFloat classes using string-based number representations to preserve complete numerical precision without round-off errors.",
        "Implemented addition, subtraction, multiplication, and division algorithms from first principles, including carry propagation, borrow handling, long multiplication, and long division for arbitrarily large inputs.",
        "Engineered parsing, sign management, decimal alignment, precision handling, and exception management mechanisms to support robust arithmetic on large signed numerical values.",
        "Applied object-oriented design principles including encapsulation, constructor overloading, deep copying, custom exception handling, and modular class-based architecture."
      ],
      technologies: ["Java", "Object-Oriented Programming", "Software Development"],
      github: "https://github.com/PathriVidyaPraveen/Infinite-Precision-Calculator-in-Java",
      liveDemo: null
    },
    {
      name: "OpenDNA: Quantum Simulation of Proton Tunneling in DNA",
      association: null,
      dates: null,
      description: "Developed a modular quantum simulation framework to model Löwdin's DNA mutation mechanism, focusing on proton transfer across hydrogen bonds via quantum tunneling.",
      bullets: [
        "Engineered a custom Hamiltonian generator using the Finite Difference Method to map continuous 1D potential energy surfaces onto a multi-qubit grid.",
        "Implemented a Trotterized Time-Evolution solver (Suzuki-Trotter decomposition) using Qiskit 1.0 to simulate wavefunction dynamics.",
        "Simulated Open Quantum System dynamics by injecting stochastic dephasing noise, successfully modeling the suppression of tunneling due to environmental decoherence (Quantum Zeno Effect).",
        "Benchmarked quantum results against Classical Exact Diagonalization (U = e^{-iHt}) to quantify Trotter error and validate simulation fidelity.",
        "Executed simulations on the high-performance AerSimulator (Statevector backend)."
      ],
      technologies: ["Qiskit", "Quantum Computing", "Quantum Biology", "Python", "Numerical Analysis", "Hamiltonian Simulation"],
      github: "https://github.com/PathriVidyaPraveen/OpenDNA",
      liveDemo: null
    },
    {
      name: "Audio Source Separation using Classical Digital Signal Processing",
      association: "Waveform Wars DSP Hackathon — Elan & nVision, IIT Hyderabad",
      dates: null,
      description: "In real-world recordings, multiple sound sources often overlap in time. This project separates two simultaneously active audio sources present in different frequency bands using pure signal-processing techniques — no machine learning allowed.",
      bullets: [
        "Objective: Separate two simultaneously active audio sources using pure signal-processing techniques, extracting and reconstructing each source signal independently.",
        "Constraints: Single or stereo input microphone setup, no prior source training data, and no use of neural networks or pretrained models.",
        "Produced estimated separated audio signals and visualizations of time-frequency masks and spectrograms.",
        "Evaluated separation quality quantitatively using SDR, SIR, and SAR metrics."
      ],
      technologies: ["Signal Processing", "Python", "Digital Signal Processing", "Audio Processing", "Time-Frequency Analysis"],
      github: "https://github.com/PathriVidyaPraveen/Audio-Source-Separation",
      liveDemo: null
    },
    {
      name: "Acoustic Echo Cancellation in Hands-Free Systems using Digital Signal Processing",
      association: "Waveform Wars DSP Hackathon — Elan & nVision, IIT Hyderabad",
      dates: null,
      description: null,
      bullets: [
        "Developed a real-time Acoustic Echo Cancellation (AEC) system using classical Digital Signal Processing techniques for hands-free communication environments, targeting robust echo suppression under practical double-talk scenarios.",
        "Implemented a Partitioned Block Frequency-Domain Adaptive Filter (PBFDAF) with frequency-domain NLMS adaptation, enabling efficient estimation and cancellation of long acoustic echo paths.",
        "Designed a coherence-based Double-Talk Detection (DTD) module to identify simultaneous near-end and far-end speech activity, preventing adaptive filter divergence during conversational overlap.",
        "Developed a residual echo suppression pipeline using Non-Linear Processing (NLP) with gain smoothing mechanisms to mitigate uncancelled echo artifacts while preserving speech quality.",
        "Built a modular DSP architecture comprising FFT-based overlap-save buffering, adaptive filtering, double-talk detection, echo suppression, and block-level audio streaming suitable for future embedded deployment.",
        "Evaluated system performance through offline simulations and real-time microphone-speaker experiments, achieving stable convergence and echo suppression of approximately 15–30 dB ERLE under varying acoustic conditions."
      ],
      technologies: ["Signal Processing", "Adaptive Filtering", "Python", "Digital Signal Processing", "Audio Processing", "FFT"],
      github: "https://github.com/PathriVidyaPraveen/Acoustic-Echo-Cancellation-in-Hands-Free-Systems",
      liveDemo: null
    },
    {
      name: "Real-Time Wireless Signal Classification using MobileNetV3",
      association: null,
      dates: null,
      description: null,
      bullets: [
        "Trained a lightweight MobileNetV3 model to distinguish WiFi, Bluetooth, and ZigBee signals, utilizing Bayesian optimization to refine predictions in interference-heavy environments.",
        "Deployed the model using ONNX for low-latency inference on embedded hardware, validating system performance with real RF hardware setups.",
        "Achieved 90% classification accuracy under practical interference conditions by implementing an iterative feedback loop that isolates dominant signals from noise."
      ],
      technologies: ["MobileNetV3", "ONNX", "Signal Processing", "Computer Vision", "Bayesian Optimization", "Python", "Embedded Systems"],
      github: "https://github.com/PathriVidyaPraveen/Radio-Frequency-Signal-and-Interference-Detector",
      liveDemo: null
    },
    {
      name: "Conversation Summarizer",
      association: "Pulse Quest Data Science Hackathon — Elan and NVision 2026",
      dates: null,
      description: "Participated in the Pulse Quest Data Science Hackathon at Elan and NVision 2026. Built a model to generate concise and accurate summaries of short, informal conversations — a text summarization problem focused on natural language understanding. Experimented with classical NLP methods and modern pretrained language models.",
      bullets: [],
      technologies: ["Natural Language Processing (NLP)", "Text Summarization", "Python", "Transformers"],
      github: null,
      liveDemo: "https://www.linkedin.com/in/pathri-vidya-praveen-9834b531a/overlay/Project/703401299/treasury/?profileId=ACoAAFDgMjMBx5blDUnHkJFNNGpVLwMKGFPLl64",
      liveDemoLabel: "Certificate"
    },
    {
      name: "RISC-V RV64I Instruction Assembler",
      association: null,
      dates: null,
      description: "Engineered a lightweight RISC-V assembler that translates RV64I base integer instructions into hexadecimal machine code using custom-built parsers and encoders in C.",
      bullets: [
        "Implemented robust preprocessing logic to tokenize and validate assembly instructions using string manipulation, structured parsing, and memory-safe dynamic allocation.",
        "Designed modular components (e.g., instruction encoders, preprocessing utils) to ensure maintainability and scalability for future ISA extensions (e.g., IMAFD).",
        "Incorporated precise error handling, file I/O abstraction, and binary-to-hex translation pipelines — replicating a simplified compiler frontend in a systems programming environment.",
        "Demonstrates proficiency in low-level bitwise operations, systems-level debugging, and clean C architecture principles."
      ],
      technologies: ["C", "RISC-V", "Systems Programming", "Compilers", "Assembly Language"],
      github: "https://github.com/PathriVidyaPraveen/RISC-V-RV64I-Assembler",
      liveDemo: null
    },
    {
      name: "IITH Mess Registration Web Application",
      association: "Lambda Core Selection Project — with B. Sri Sai Abhinav and T. Dinesh Reddy",
      dates: null,
      description: null,
      bullets: [
        "Developed a full-stack MERN-based web application for student mess registration, mess allocation, mess swaps, rebate requests, menu viewing, and administrative management of registration workflows.",
        "Designed and implemented backend REST APIs using Node.js and Express.js for authentication, mess allocation, registration control, student profile management, and administrative operations.",
        "Built role-based access control supporting separate student and administrator workflows, including secure login, registration monitoring, registration deployment, and student database management.",
        "Engineered registration-allocation logic with capacity constraints, vacancy handling, validation checks, and automated assignment mechanisms using MongoDB-backed persistence.",
        "Developed responsive frontend interfaces using ReactJS, JavaScript, HTML, and CSS for registration, profile management, menu visualization, and administrative dashboards.",
        "Deployed the complete application stack using Netlify, Render, and MongoDB Atlas, enabling end-to-end cloud-hosted operation and database-backed functionality."
      ],
      technologies: ["MongoDB", "Express.js", "ReactJS", "Node.js", "MERN Stack", "JavaScript", "HTML", "CSS", "Full-Stack Development", "REST APIs"],
      github: "https://github.com/PathriVidyaPraveen/Mess-Registration-App",
      liveDemo: null
    }
  ],

  volunteering: [
    {
      title: "Volunteer RAAM 2026",
      content: "Volunteered for assisting in organization and management of 4th International Conference on Recent Advances in Applied Mathematics (RAAM) 2026 held from July 6, 2026 to July 8, 2026.",
      link: "https://sites.google.com/view/raam2026/",
      linkLabel: "Visit RAAM 2026 Website"
    },
    {
      title: "Teaching Assistant",
      content: "Volunteered as a Teaching Assistant for ACM Summer School on Symmetric Key Cryptography, Cryptanalysis and ML/DL Techniques on Cryptography. Conducting Hands-On Sessions on Linear Cryptanalysis of AES and DES held from June 8, 2026 to June 17, 2026.",
      link: "https://ccs.iith.ac.in/programs/acm2026/",
      linkLabel: "Visit ACM Summer School 2026 Website"
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
        "Psychology for Everyday Life (currently enrolled)",
        "Introduction to Queer Studies (currently enrolled)"
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

  languages: [
    { name: "English", proficiency: "Full professional proficiency" },
    { name: "Hindi", proficiency: "Working proficiency" },
    { name: "Telugu", proficiency: "Native or bilingual proficiency" }
  ]
};

export default data;
