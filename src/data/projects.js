export const projects = [
  {
    slug: "ext2-filesystem",
    title: "Concurrent EXT2 File System Implementation",
    technology: "C",
    period: "Oct 2025 - Dec 2025",
    association: "University of Toronto",
    shortDescription: "Designed and implemented a concurrent EXT2 file system interface in C, supporting core UNIX-style operations directly on a raw disk image.",
    fullDescription: [
      "Designed and implemented a concurrent EXT2 file system interface in C, supporting core UNIX-style operations such as mkdir, cp, rm, hard links, and symbolic links directly on a raw disk image by manipulating inodes, bitmaps, directory entries, and metadata structures.",
      "Engineered fine-grained synchronization for shared file system state, ensuring correctness under concurrent operations by preventing race conditions and deadlocks across inode tables, block/inode bitmaps, and directory data blocks, while preserving consistency and performance.",
      "Handled low-level systems concerns and edge cases rigorously, including correct error propagation, metadata updates (link counts, deletion times, block usage), rollback on failure, and strict adherence to EXT2 layout constraints, passing comprehensive sequential and concurrency stress tests."
    ],
    skills: ["Operating Systems", "C", "Concurrency", "Systems Programming", "Kernel Programming"],
    images: ["/assets/projects/ext2-filesystem.jpg"],
    github: null,
    demo: null
  },
  {
    slug: "knowledge-nexus",
    title: "KnowledgeNexus — Mapping How Ideas Connect",
    technology: "React, TypeScript, Three.js",
    period: "Oct 2025 - Nov 2025",
    association: null,
    shortDescription: "An AI-powered platform that helps students visualize how concepts interconnect across courses using interactive 3D knowledge graphs.",
    fullDescription: [
      "Built KnowledgeNexus, an AI-powered platform that helps students visualize how concepts interconnect across courses, notes, and semesters.",
      "Developed an interactive 3D knowledge graph using React, TypeScript, and Three.js, allowing users to explore relationships between topics like recursion, linear algebra, and machine learning.",
      "Integrated Google Gemini 2.5 to extract, summarize, and link concepts from uploaded lecture notes, automatically generating concept nodes and relationships.",
      "Designed a personal learning timeline to show when and where each concept first appeared, helping students track their academic growth over time.",
      "Implemented a Node.js + Express backend for note processing and REST APIs, with SQLite for structured data storage.",
      "Overcame challenges in balancing graph density, maintaining smooth 3D performance, and prompting Gemini for consistent concept relationships.",
      "Created a modern, immersive UI with custom lighting, orbit animations, and responsive graph interactions for an intuitive study experience."
    ],
    skills: ["Node.js", "Express.js", "React.js", "TypeScript", "Three.js", "SQLite", "AI Integration", "Software Design Patterns"],
    images: ["/assets/projects/knowledge-nexus.jpg"],
    github: null,
    demo: null
  },
  {
    slug: "virtual-memory-simulator",
    title: "Virtual Memory System Simulator",
    technology: "C",
    period: "Oct 2025 - Nov 2025",
    association: "University of Toronto",
    shortDescription: "A full virtual memory simulator implementing multi-level page table address translation, demand paging, and multiple page replacement algorithms.",
    fullDescription: [
      "Built a full virtual memory simulator in C, implementing multi-level page table address translation, demand paging, and swap-backed memory management to model real OS behavior at the hardware–software boundary.",
      "Designed and optimized multiple page replacement algorithms (FIFO, CLOCK, exact LRU, ARC), enforcing strict time/space complexity guarantees and analyzing performance trade-offs across realistic memory access traces.",
      "Evaluated system-level performance using trace-driven simulation, comparing hit rates, eviction patterns, and workload sensitivity to derive practical recommendations for memory management policies."
    ],
    skills: ["Operating Systems", "C", "Concurrency", "Kernel Programming", "Data Structures", "Systems Programming"],
    images: ["/assets/projects/vm-simulator.jpg"],
    github: null,
    demo: null
  },
  {
    slug: "job-executor-system",
    title: "Job Executor System — Synchronization & Concurrency",
    technology: "C, POSIX Threads",
    period: "Sep 2025 - Oct 2025",
    association: "University of Toronto",
    shortDescription: "A multithreaded job execution system simulating synchronization and resource management in operating systems.",
    fullDescription: [
      "Built a multithreaded job execution system in C using POSIX threads, simulating synchronization and resource management in operating systems.",
      "Implemented monitor-like synchronization with mutexes and condition variables to coordinate multiple admission and execution threads.",
      "Designed FIFO-based job queues ensuring fairness, exclusive resource access, and correct processor assignment.",
      "Prevented data races and deadlocks through precise lock handling and modular concurrency logic.",
      "Verified correctness using Valgrind's Helgrind tool, analyzing synchronization bugs like data races and invalid unlocks.",
      "Authored a technical report on synchronization bugs and a starvation analysis discussing fairness in continuous job submissions."
    ],
    skills: ["C", "POSIX Threads", "Mutex Locks", "Condition Variables", "Valgrind", "Operating Systems"],
    images: ["/assets/projects/job-executor.jpg"],
    github: null,
    demo: null
  },
  {
    slug: "kernel-syscall-interceptor",
    title: "Linux Kernel System Call Interceptor",
    technology: "C, Linux Kernel",
    period: "Sep 2025",
    association: "University of Toronto",
    shortDescription: "A Linux kernel module that hijacks and monitors system calls to analyze and log process behavior in real time.",
    fullDescription: [
      "Built a Linux kernel module in C that hijacks and monitors system calls to analyze and log process behavior in real time.",
      "Implemented a custom system call (my_syscall) to allow user-level commands for intercepting, releasing, and monitoring existing system calls such as mkdir, read, and open.",
      "Modified the system call table at runtime to redirect calls through a generic interceptor that logs syscall numbers, parameters, and calling process IDs before invoking the original system call.",
      "Designed PID-based monitoring using linked lists, enabling selective tracking of individual processes or system-wide monitoring for all processes.",
      "Integrated an exit-group hook to automatically remove terminated processes from monitoring lists, ensuring consistent internal bookkeeping.",
      "Applied spinlocks for synchronization to safely manage concurrent access to shared kernel structures and prevent race conditions.",
      "Tested and debugged the module using dmesg, kernel log outputs, and provided test suites within a virtualized Ubuntu environment.",
      "Achieved full functional validation, successfully restoring original syscall behavior upon module unload without affecting kernel stability."
    ],
    skills: ["C", "Kernel Programming", "Linux Kernel", "GCC", "GDB", "Synchronization", "Operating Systems"],
    images: ["/assets/projects/syscall-interceptor.jpg"],
    github: null,
    demo: null
  },
  {
    slug: "student-suite",
    title: "Student Suite | MERN Stack Web Application",
    technology: "MongoDB, Express, React, Node.js",
    period: "May 2025 - Jun 2025",
    association: null,
    shortDescription: "A full-stack web app integrating course management, task tracking, and collaboration tools for students.",
    fullDescription: [
      "Developed a full-stack web app that integrates course management, task tracking, and collaboration tools, helping students centralize their academic workflow.",
      "Built using MongoDB, Express.js, React, and Node.js, ensuring scalable architecture and smooth real-time user interaction.",
      "Implemented secure JWT authentication and role-based access control to protect user data and sessions.",
      "Designed a responsive React dashboard with dynamic state management via Context API and Hooks for seamless navigation.",
      "Created RESTful APIs to handle tasks, notes, and user profiles efficiently with optimized Mongoose queries.",
      "Deployed the application on Render / Vercel with a MongoDB Atlas cloud database, ensuring global accessibility and reliability.",
      "Focused on UI/UX design principles for a clean, intuitive interface tailored to academic use cases."
    ],
    skills: ["React.js", "Express.js", "MongoDB", "Node.js", "Mongoose", "JWT", "Chakra UI", "Vite"],
    images: ["/assets/projects/student-suite.jpg"],
    github: "https://github.com/ArinGlitch/student-suite",
    demo: null
  },
  {
    slug: "custom-shell",
    title: "Custom Shell Implementation",
    technology: "C",
    period: "Jan 2025 - Apr 2025",
    association: "University of Toronto",
    shortDescription: "A fully functional UNIX-like shell supporting built-in commands, piping, background job control, and socket-based networking.",
    fullDescription: [
      "Built a fully functional UNIX-like shell supporting built-in commands, external process execution, multi-argument parsing, piping between built-in processes, and background job control with signal handling.",
      "Designed and integrated dynamic arrays for flexible variable management and linked lists for tracking background jobs, implementing features like ps, kill, and a complete jobs management system.",
      "Added networking functionality by developing socket-based communication, enabling multiple clients to connect and exchange messages, while optimizing memory management for leak prevention and efficient resource handling."
    ],
    skills: ["C", "Systems Programming", "Linux", "Git", "Debugging"],
    images: ["/assets/projects/linux-shell.png"],
    github: null,
    demo: null
  },
  {
    slug: "plant-monitoring",
    title: "IoT-Based Plant Monitoring System",
    technology: "ESP32, C++, Arduino",
    period: "Mar 2025",
    association: null,
    shortDescription: "An ESP32-powered IoT system that monitors temperature, humidity, and soil moisture with real-time alerts.",
    fullDescription: [
      "Developed an ESP32-powered IoT system that monitors temperature, humidity, and soil moisture in real-time and provides automated alerts to ensure optimal plant health.",
      "Web Dashboard: Displays live sensor data with a moisture progress bar, log history, and theme customization.",
      "Automated Email Alerts: Sends notifications when soil moisture drops below 60% to prevent under-watering.",
      "Data Logging & Download: Stores the last 10 readings and allows users to export logs as a text file.",
      "ESP32 Web Server: Enables remote access via a browser with real-time updates.",
      "TFT Display Integration: Provides a physical interface for local monitoring."
    ],
    skills: ["ESP32", "C++", "Arduino IDE", "HTML", "CSS", "JavaScript", "WiFi", "SMTP"],
    images: ["/assets/projects/plant-monitor.jpg"],
    github: "https://github.com/ArinGlitch/Plant-Monitoring-System",
    demo: null
  },
  {
    slug: "paint-application",
    title: "AI Integrated Paint Application",
    technology: "Java, JavaFX",
    period: "Sep 2024 - Dec 2024",
    association: "University of Toronto",
    shortDescription: "A modular JavaFX-based paint application with AI-powered file generation and comprehensive design patterns.",
    fullDescription: [
      "Designed and implemented a Java-based paint application with custom event handlers for shape manipulation, advanced tools (eraser, dropper, text insertion), and complex features including undo/redo, PNG export, shape rotation, and customizable backgrounds.",
      "Integrated the Ollama AI API to enable AI-generated paint files from text descriptions, designing a custom paint file format and implementing a finite state machine-based parser for structured file processing.",
      "Applied key software design patterns (MVC, Command, Observer-Observable, Strategy, Builder, Factory) to ensure a scalable, modular, and maintainable architecture, while designing an intuitive GUI (JavaFX) with real-time undo-redo and interactive UI updates."
    ],
    skills: ["Java", "JavaFX", "Software Design Patterns", "Agile", "Git", "API Integration", "OOP"],
    images: ["/assets/projects/paint-app.jpg"],
    github: null,
    demo: null
  },
  {
    slug: "sokoban-game",
    title: "Sokoban Puzzle Game",
    technology: "RISC-V Assembly",
    period: "Sep 2024 - Dec 2024",
    association: "University of Toronto",
    shortDescription: "A 32-bit RISC-V assembly Sokoban game with multiplayer, leaderboards, and cheat codes.",
    fullDescription: [
      "Developed a 32-bit RISC-V assembly version of Sokoban, a puzzle game where players push crates to designated goals within a confined space.",
      "Added multiplayer functionality with a leaderboard, tracking player progress and ranking scores dynamically.",
      "Implemented cheat codes, such as unlimited undo and portals to enhance gameplay flexibility and allow players to experiment with different strategies."
    ],
    skills: ["Assembly Language", "RISC-V", "Critical Thinking", "Debugging"],
    images: ["/assets/projects/sokoban.gif"],
    github: null,
    demo: null
  },
  {
    slug: "treemap-visualizer",
    title: "Treemap Visualizer for Computer Memory",
    technology: "Python",
    period: "Jan 2024 - Apr 2024",
    association: "University of Toronto",
    shortDescription: "An interactive treemap application to visually represent computer memory allocation and usage.",
    fullDescription: [
      "Developed an interactive treemap application in Python to visually represent computer memory allocation and usage, enhancing system analysis and debugging.",
      "Implemented optimized tree-based data structures to dynamically partition and scale memory blocks proportionally for real-time visualization.",
      "Designed an intuitive, user-friendly GUI, enabling seamless interaction and exploration of complex memory hierarchies."
    ],
    skills: ["Python", "Data Structures", "GUI Development", "OOP"],
    images: ["/assets/projects/memory-visualizer.jpg"],
    github: null,
    demo: null
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = () => {
  // Return first 6 projects for the homepage
  return projects.slice(0, 6);
};
