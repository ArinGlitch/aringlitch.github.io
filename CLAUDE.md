# Project: aringlitch.github.io

Personal portfolio website built with Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

## Knowledge Graph (GraphRAG)

A knowledge graph of this codebase exists at `graphify-out/graph.json`. Before answering questions about codebase architecture, relationships between components, or project structure, load and query the graph first:

```bash
python3 -c "
import json, sys
from pathlib import Path
from networkx.readwrite import json_graph
import networkx as nx

data = json.loads(Path('graphify-out/graph.json').read_text())
G = json_graph.node_link_graph(data, edges='links')

terms = [t.lower() for t in sys.argv[1:] if len(t) > 3]
scored = sorted(
    [(sum(1 for t in terms if t in G.nodes[n].get('label','').lower()), n) for n in G.nodes()],
    reverse=True
)
start = [nid for s, nid in scored[:3] if s > 0]

visited = set(start)
frontier = set(start)
for _ in range(2):
    nxt = set()
    for n in frontier:
        for nb in G.neighbors(n):
            if nb not in visited:
                nxt.add(nb)
    visited.update(nxt)
    frontier = nxt

for nid in visited:
    d = G.nodes[nid]
    print(f'NODE {d.get(\"label\", nid)} [src={d.get(\"source_file\",\"\")}]')
for u, v in G.edges():
    if u in visited and v in visited:
        e = G.edges[u, v]
        print(f'EDGE {G.nodes[u].get(\"label\",u)} --{e.get(\"relation\",\"\")}--> {G.nodes[v].get(\"label\",v)} [{e.get(\"confidence\",\"\")}]')
" SEARCH_TERMS_HERE
```

The graph has 175 nodes and 199 edges across 26 communities. Key clusters:
- **Portfolio Page Sections**: Hero, About, Contact, Education, Experience, Footer
- **App Routing & Navigation**: App, Projects, ProjectDetail, NotFound
- **ChatBot & Card UI**: ChatBot component with backend API
- **Form & Input Components**: shadcn/ui component library (do not edit directly)
- **Systems Programming Projects**: EXT2 filesystem, VM simulator, Syscall interceptor
- **Personal Identity & Branding**: Profile photo, UofT logo, AG icons

The full audit report is at `graphify-out/GRAPH_REPORT.md`. To rebuild after code changes: `/graphify . --update`
