# Graph Report - .  (2026-04-10)

## Corpus Check
- 95 files · ~208,775 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 175 nodes · 199 edges · 26 communities detected
- Extraction: 86% EXTRACTED · 14% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `Aaryan Gupta CV` - 11 edges
2. `AGENTS.md Project Overview` - 7 edges
3. `EXT2 Filesystem Block Layout` - 5 edges
4. `Portfolio Website` - 4 edges
5. `Technical Skills Summary` - 4 edges
6. `Job Executor (Job Scheduling and Resource Allocation System)` - 4 edges
7. `Plant Monitor Microcontroller` - 4 edges
8. `Syscall Interceptor Project` - 4 edges
9. `reducer()` - 3 edges
10. `dispatch()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Technical Skills Summary` --semantically_similar_to--> `Tech Stack: Vite + React + TypeScript + Tailwind + shadcn/ui`  [INFERRED] [semantically similar]
  public/cv.pdf → AGENTS.md
- `Aaryan Gupta CV` --conceptually_related_to--> `Portfolio Website`  [INFERRED]
  public/cv.pdf → README.md
- `KnowledgeNexus Project` --shares_data_with--> `Tech Stack: Vite + React + TypeScript + Tailwind + shadcn/ui`  [INFERRED]
  public/cv.pdf → AGENTS.md
- `Directory Structure` --references--> `Aaryan Gupta CV`  [EXTRACTED]
  AGENTS.md → public/cv.pdf
- `Hero Component` --references--> `Aaryan Gupta Profile Photo`  [EXTRACTED]
  src/components/Hero.jsx → public/assets/profile.jpg

## Hyperedges (group relationships)
- **Portfolio Website Architecture** — readme_portfolio_website, agents_project_overview, agents_tech_stack, agents_entry_points, agents_directory_structure, agents_styling, agents_deployment [EXTRACTED 1.00]
- **Systems Programming Experience Cluster** — cv_ext2_filesystem_project, cv_unix_shell_project, cv_ta_csc263 [INFERRED 0.75]
- **Professional Experience Timeline** — cv_rotman_experience, cv_capgemini_experience, cv_selectai_experience [EXTRACTED 1.00]
- **Site favicon and social media branding system** — ag_icon_png, ag_icon_jpg, brand_ag, index_html [INFERRED 0.85]
- **Personal identity and academic affiliation** — profile_aaryan_gupta_photo, uoft_logo, entity_aaryan_gupta, entity_uoft [INFERRED 0.80]
- **Systems and Low-Level Computing Projects** — linux_shell_terminal_emulator, job_executor_scheduler, memory_visualizer_treemap [INFERRED 0.75]
- **Education and Knowledge Management Projects** — student_suite_education_app, knowledge_nexus_knowledge_graph [INFERRED 0.70]
- **Portfolio Project Showcase** — linux_shell_terminal_emulator, student_suite_education_app, sokoban_puzzle_game, memory_visualizer_treemap, job_executor_scheduler, knowledge_nexus_knowledge_graph [INFERRED 0.90]
- **Systems Programming Projects** — project_ext2filesystem, project_vmsimulator, project_syscallinterceptor [INFERRED 0.82]
- **Embedded Hardware Components** — plantmonitor_microcontroller, plantmonitor_soil_sensors, plantmonitor_lcd_display, plantmonitor_breadboard [EXTRACTED 1.00]
- **EXT2 Block Group Structure** — ext2filesystem_superblock, ext2filesystem_inode_bitmap, ext2filesystem_inode_table, ext2filesystem_data_blocks [EXTRACTED 1.00]

## Communities

### Community 0 - "Form & Input Components"
Cohesion: 0.08
Nodes (0): 

### Community 1 - "Portfolio Docs & CV"
Cohesion: 0.13
Nodes (22): Deployment: GitHub Pages via GitHub Actions, Directory Structure, Entry Points: main.jsx -> App.tsx -> Index.jsx, Path Aliases: @/* -> src/*, AGENTS.md Project Overview, Rationale: Active Components in JSX, TSX as Boilerplate, Rationale: shadcn/ui Managed via CLI, Not Edited Directly, Styling: Tailwind CSS with CSS Variables (+14 more)

### Community 2 - "Systems Programming Projects"
Cohesion: 0.15
Nodes (15): EXT2 Filesystem Block Layout, EXT2 Data Blocks, EXT2 Inode Bitmap, EXT2 Inode Table, EXT2 Superblock, EXT2 Filesystem Project, Syscall Interceptor Project, VM Simulator Project (+7 more)

### Community 3 - "Portfolio Page Sections"
Cohesion: 0.14
Nodes (0): 

### Community 4 - "App Routing & Navigation"
Cohesion: 0.18
Nodes (0): 

### Community 5 - "Interactive UI Widgets"
Cohesion: 0.17
Nodes (0): 

### Community 6 - "Layout & Responsive UI"
Cohesion: 0.2
Nodes (0): 

### Community 7 - "Personal Identity & Branding"
Cohesion: 0.24
Nodes (10): AG Brand Icon (JPG, dark background), AG Brand Icon (PNG, transparent background), AG Personal Brand / Logo, Education Component, Hero Component, Aaryan Gupta (Person), University of Toronto, Index HTML Entry Point (+2 more)

### Community 8 - "Toast Notifications"
Cohesion: 0.39
Nodes (5): addToRemoveQueue(), dispatch(), genId(), reducer(), toast()

### Community 9 - "Project Concepts & Themes"
Cohesion: 0.32
Nodes (8): Data Visualization, Resource Management, Systems Programming, Job Executor (Job Scheduling and Resource Allocation System), Knowledge Nexus (Knowledge Graph / Connected Learning Platform), Linux Shell (Terminal/CLI Project), Memory Visualizer (Treemap Heatmap Tool), Student Suite (Education Management App)

### Community 10 - "ChatBot & Card UI"
Cohesion: 0.29
Nodes (0): 

### Community 11 - "IoT Plant Monitor"
Cohesion: 0.4
Nodes (5): Breadboard Circuit, LCD Status Display, Plant Monitor Microcontroller, Soil Moisture Sensors, Plant Monitor Project

### Community 12 - "Data Charts"
Cohesion: 0.67
Nodes (0): 

### Community 13 - "Paint Application"
Cohesion: 0.67
Nodes (3): Color Palette and Tools, Digital Paint Application, Paint App Project

### Community 14 - "Backend Chat API"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Game Development"
Cohesion: 1.0
Nodes (2): Game Development, Sokoban (Box-Pushing Puzzle Game)

### Community 16 - "Tailwind Config"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "ESLint Config"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Vite Config"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Express Server"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "App Entry Point"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "TypeScript Env Types"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Aspect Ratio Component"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "Collapsible Component"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Placeholder Asset"
Cohesion: 1.0
Nodes (1): Placeholder Image (SVG)

## Knowledge Gaps
- **23 isolated node(s):** `Styling: Tailwind CSS with CSS Variables`, `Path Aliases: @/* -> src/*`, `robots.txt SEO Configuration`, `Software Engineer Intern - Capgemini`, `Rationale: Full-Stack + Systems + ML Breadth` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Backend Chat API`** (2 nodes): `chat.js`, `handler()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Game Development`** (2 nodes): `Game Development`, `Sokoban (Box-Pushing Puzzle Game)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config`** (1 nodes): `tailwind.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Config`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Config`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Express Server`** (1 nodes): `server.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App Entry Point`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `TypeScript Env Types`** (1 nodes): `vite-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Aspect Ratio Component`** (1 nodes): `aspect-ratio.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Collapsible Component`** (1 nodes): `collapsible.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Placeholder Asset`** (1 nodes): `Placeholder Image (SVG)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 2 inferred relationships involving `Portfolio Website` (e.g. with `robots.txt SEO Configuration` and `Aaryan Gupta CV`) actually correct?**
  _`Portfolio Website` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `Technical Skills Summary` (e.g. with `Tech Stack: Vite + React + TypeScript + Tailwind + shadcn/ui` and `Rationale: Full-Stack + Systems + ML Breadth`) actually correct?**
  _`Technical Skills Summary` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Styling: Tailwind CSS with CSS Variables`, `Path Aliases: @/* -> src/*`, `robots.txt SEO Configuration` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Form & Input Components` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Portfolio Docs & CV` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
- **Should `Portfolio Page Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._