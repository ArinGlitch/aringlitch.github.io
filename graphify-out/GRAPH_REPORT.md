# Graph Report - .  (2026-07-04)

## Corpus Check
- Large corpus: 301 files · ~221,383 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 203 nodes · 232 edges · 25 communities detected
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `Aaryan Gupta CV` - 11 edges
2. `Codebase Knowledge Graph (graphify-out/graph.json)` - 11 edges
3. `AGENTS.md Project Overview` - 7 edges
4. `aringlitch.github.io Portfolio Website` - 6 edges
5. `EXT2 Filesystem Block Layout` - 5 edges
6. `Portfolio Website` - 4 edges
7. `Technical Skills Summary` - 4 edges
8. `Job Executor (Job Scheduling and Resource Allocation System)` - 4 edges
9. `Plant Monitor Microcontroller` - 4 edges
10. `Syscall Interceptor Project` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Technical Skills Summary` --semantically_similar_to--> `Tech Stack: Vite + React + TypeScript + Tailwind + shadcn/ui`  [INFERRED] [semantically similar]
  public/cv.pdf → AGENTS.md
- `Aaryan Gupta CV` --conceptually_related_to--> `Portfolio Website`  [INFERRED]
  public/cv.pdf → README.md
- `KnowledgeNexus Project` --shares_data_with--> `Tech Stack: Vite + React + TypeScript + Tailwind + shadcn/ui`  [INFERRED]
  public/cv.pdf → AGENTS.md
- `Directory Structure` --references--> `Aaryan Gupta CV`  [EXTRACTED]
  AGENTS.md → public/cv.pdf
- `Index HTML Entry Point` --references--> `AG Brand Icon (PNG, transparent background)`  [EXTRACTED]
  index.html → public/assets/icons/AG.png

## Hyperedges (group relationships)
- **Frontend Technology Stack** — claude_vite, claude_react, claude_typescript, claude_tailwind_css, claude_shadcn_ui [EXTRACTED 1.00]
- **GraphRAG Query and Maintenance Workflow** — claude_knowledge_graph, claude_graphrag_query_script, claude_graph_report, claude_graphify_update_command [EXTRACTED 1.00]

## Communities

### Community 0 - "shadcn/ui Component Library"
Cohesion: 0.06
Nodes (0): 

### Community 1 - "Portfolio Sections & Motion"
Cohesion: 0.09
Nodes (0): 

### Community 2 - "Knowledge Graph Meta"
Cohesion: 0.11
Nodes (23): ChatBot Component with Backend API, Cluster: App Routing & Navigation, Cluster: ChatBot & Card UI, Cluster: Form & Input Components, Cluster: Personal Identity & Branding, Cluster: Portfolio Page Sections, Cluster: Systems Programming Projects, EXT2 Filesystem Project (+15 more)

### Community 3 - "Architecture & Conventions"
Cohesion: 0.13
Nodes (22): Deployment: GitHub Pages via GitHub Actions, Directory Structure, Entry Points: main.jsx -> App.tsx -> Index.jsx, Path Aliases: @/* -> src/*, AGENTS.md Project Overview, Rationale: Active Components in JSX, TSX as Boilerplate, Rationale: shadcn/ui Managed via CLI, Not Edited Directly, Styling: Tailwind CSS with CSS Variables (+14 more)

### Community 4 - "Systems Programming Projects"
Cohesion: 0.15
Nodes (15): EXT2 Filesystem Block Layout, EXT2 Data Blocks, EXT2 Inode Bitmap, EXT2 Inode Table, EXT2 Superblock, EXT2 Filesystem Project, Syscall Interceptor Project, VM Simulator Project (+7 more)

### Community 5 - "shadcn Interactive Widgets"
Cohesion: 0.17
Nodes (0): 

### Community 6 - "Sidebar & Input Components"
Cohesion: 0.18
Nodes (0): 

### Community 7 - "Toast Notifications"
Cohesion: 0.39
Nodes (5): addToRemoveQueue(), dispatch(), genId(), reducer(), toast()

### Community 8 - "App Routing & Pages"
Cohesion: 0.25
Nodes (0): 

### Community 9 - "Personal Identity & Branding"
Cohesion: 0.32
Nodes (8): AG Brand Icon (JPG, dark background), AG Brand Icon (PNG, transparent background), AG Personal Brand / Logo, Aaryan Gupta (Person), University of Toronto, Index HTML Entry Point, Aaryan Gupta Profile Photo, University of Toronto Logo

### Community 10 - "Project Portfolio Concepts"
Cohesion: 0.32
Nodes (8): Data Visualization, Resource Management, Systems Programming, Job Executor (Job Scheduling and Resource Allocation System), Knowledge Nexus (Knowledge Graph / Connected Learning Platform), Linux Shell (Terminal/CLI Project), Memory Visualizer (Treemap Heatmap Tool), Student Suite (Education Management App)

### Community 11 - "IoT Plant Monitor"
Cohesion: 0.4
Nodes (5): Breadboard Circuit, LCD Status Display, Plant Monitor Microcontroller, Soil Moisture Sensors, Plant Monitor Project

### Community 12 - "Paint Application"
Cohesion: 0.67
Nodes (3): Color Palette and Tools, Digital Paint Application, Paint App Project

### Community 13 - "Chat API Backend"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Sokoban Game"
Cohesion: 1.0
Nodes (2): Game Development, Sokoban (Box-Pushing Puzzle Game)

### Community 15 - "ESLint Config"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Vite Config"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Dev Server"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "App Entry Point"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Vite Env Types"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Aspect Ratio Component"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Collapsible Component"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Placeholder Asset"
Cohesion: 1.0
Nodes (1): Placeholder Image (SVG)

### Community 24 - "Tailwind Config"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **31 isolated node(s):** `Styling: Tailwind CSS with CSS Variables`, `Path Aliases: @/* -> src/*`, `robots.txt SEO Configuration`, `Software Engineer Intern - Capgemini`, `Rationale: Full-Stack + Systems + ML Breadth` (+26 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Chat API Backend`** (2 nodes): `chat.js`, `handler()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Sokoban Game`** (2 nodes): `Game Development`, `Sokoban (Box-Pushing Puzzle Game)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Config`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Config`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Dev Server`** (1 nodes): `server.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App Entry Point`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Env Types`** (1 nodes): `vite-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Aspect Ratio Component`** (1 nodes): `aspect-ratio.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Collapsible Component`** (1 nodes): `collapsible.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Placeholder Asset`** (1 nodes): `Placeholder Image (SVG)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config`** (1 nodes): `tailwind.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `Styling: Tailwind CSS with CSS Variables`, `Path Aliases: @/* -> src/*`, `robots.txt SEO Configuration` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `shadcn/ui Component Library` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Portfolio Sections & Motion` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._
- **Should `Knowledge Graph Meta` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Architecture & Conventions` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._