import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import { X, Send, Loader2, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AARYAN_CONTEXT = `You are a helpful AI assistant on Aaryan Gupta's personal portfolio website. Your role is to answer questions about Aaryan based on the following information. Be friendly, concise, and professional. If asked about something not covered below, politely say you don't have that information but suggest they reach out to Aaryan directly.

=== ABOUT AARYAN ===
Aaryan Gupta is a Computer Science Specialist student at the University of Toronto (Expected graduation: April 2028) with a GPA of 3.91/4.00, currently on a 1-year professional co-op. He specializes in AI agents, systems programming, and full-stack development—building software that works at every level of the stack, from kernel modules and concurrent file systems to production web applications and LLM-powered tooling.

=== CURRENT POSITION ===
Software Engineer Co-op at Rocket Innovation Studio (May 2026 – April 2027)
- Building AI agents and agentic pipelines/workflows powering an internal platform used by upper management for decision-making
- Developing AI-generated dashboards that automatically surface the most decision-relevant data
- Owning features end-to-end across the full stack, from data layer to production UI

=== PAST EXPERIENCE ===
- Software Engineer, Research at Rotman School of Management, University of Toronto (Jan-Apr 2026): Built a corporate finance simulator with Next.js, TypeScript, PostgreSQL, and Prisma ORM
- Teaching Assistant at University of Toronto (Jan-Apr 2026): CSC263H5 (Data Structures & Analysis)
- Software Engineer Intern at Capgemini (Jul-Aug 2025): Developed SAP Work Zone UI Integration Cards using SAPUI5
- Machine Learning Intern at SelectAI (Jun-Jul 2025): Built AI systems with YOLOv8, LLaVA, MiniGPT
- Cybersecurity Intern at AIIPLTECH (Jun-Aug 2023): Conducted security audits, implemented encryption techniques

=== KEY PROJECTS ===
1. Concurrent EXT2 File System (C) - Implemented concurrent file system operations with fine-grained synchronization
2. KnowledgeNexus - AI-powered 3D knowledge graph using React, TypeScript, Three.js, and Google Gemini
3. Virtual Memory Simulator (C) - Multi-level page tables, FIFO/CLOCK/LRU/ARC page replacement algorithms
4. Job Executor System (C, POSIX Threads) - Multithreaded job execution with mutex/condition variable synchronization
5. Linux Kernel System Call Interceptor (C) - Kernel module for monitoring and logging system calls
6. Student Suite (MERN Stack) - Full-stack web app for course management and task tracking
7. Custom Shell (C) - UNIX-like shell with piping, background jobs, and socket-based networking
8. IoT Plant Monitoring System (ESP32) - Real-time sensor monitoring with web dashboard and email alerts
9. AI Paint Application (Java, JavaFX) - Paint app with Ollama AI integration and design patterns
10. Sokoban Game (RISC-V Assembly) - Puzzle game with multiplayer and leaderboards

=== TECHNICAL SKILLS ===
Languages: C, Python, Java, TypeScript, JavaScript, RISC-V Assembly, C++
Systems: Linux Kernel, POSIX Threads, Concurrency, Memory Management, File Systems, Synchronization
Web: React, Next.js, Node.js, Express, Three.js, Tailwind CSS, JavaFX
Databases: PostgreSQL, MongoDB, SQLite, Prisma
AI/ML: AI Agents, Agentic Workflows, LLM Integration, YOLOv8, LLaVA, MiniGPT, Google Gemini, Ollama, Computer Vision
Hardware: ESP32, Arduino, Embedded Systems
Tools: Git, Valgrind, GDB

=== CONTACT ===
Email: aaryan.gupta@mail.utoronto.ca
LinkedIn: linkedin.com/in/aaryan-gupta7
GitHub: github.com/ArinGlitch
Location: Toronto, ON

Remember: Be helpful, accurate, and enthusiastic about Aaryan's work. Keep responses concise but informative.`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener('open-chatbot', open);
    return () => window.removeEventListener('open-chatbot', open);
  }, []);

  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! I'm Aaryan's AI agent. Ask me anything about his work at Rocket, his projects, or his experience."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const buildHistory = (historyMessages) => {
    return historyMessages
      .filter((msg) => !msg.isTyping && !msg.isError && msg.content?.trim())
      .map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      }));
  };

  const sendMessage = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { id: createId(), role: 'user', content: trimmed };
    const pendingId = createId();
    setMessages((prev) => [
      ...prev,
      userMessage,
      { id: pendingId, role: 'assistant', content: '', isTyping: true },
    ]);
    setInput('');
    setIsLoading(true);

    try {
      let text = '';

      // Prepare chat history including the context
      const chatHistoryWithContext = [
        { role: 'user', parts: [{ text: AARYAN_CONTEXT }] },
        { role: 'model', parts: [{ text: "I understand. I'm ready to answer questions about Aaryan Gupta based on this information." }] },
        ...buildHistory(messages),
      ];

      const apiBase = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || '';

      if (apiBase) {
        // Use backend proxy if configured
        const endpoint = `${apiBase}/api/chat`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: trimmed,
            history: chatHistoryWithContext,
            modelName: 'gemini-2.5-flash-lite'
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch response');
        }

        const data = await response.json();
        text = data.text;
      } else {
        // Call Gemini API directly from client
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey) throw new Error('API key not configured');

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
        const chat = model.startChat({
          history: chatHistoryWithContext,
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.7,
          },
        });
        const result = await chat.sendMessage(trimmed);
        text = result.response.text();
      }

      setMessages((prev) => {
        let found = false;
        const next = prev.map((msg) => {
          if (msg.id !== pendingId) return msg;
          found = true;
          return { ...msg, content: text?.trim() || 'Sorry, I did not receive a response.', isTyping: false };
        });
        return found
          ? next
          : [...next, { id: createId(), role: 'assistant', content: text?.trim() || 'Sorry, I did not receive a response.' }];
      });
    } catch (error) {
      console.error('Gemini API Error:', error);
      let errorMessage = "Sorry, I encountered an error. Please try again later.";

      if (error.message?.includes('API key not valid')) {
        errorMessage = "Error: Invalid API Key. Please contact the administrator.";
      } else if (error.message?.includes('quota')) {
        errorMessage = "Error: API Quota Exceeded. Please try again later.";
      } else if (error.message?.includes('location is not supported')) {
        errorMessage = "Sorry, this feature isn't available in your region yet. Please reach out to Aaryan directly via email!";
      } else if (error.message) {
        errorMessage = `Error: ${error.message.slice(0, 100)}...`;
      }

      setMessages((prev) => {
        let found = false;
        const next = prev.map((msg) => {
          if (msg.id !== pendingId) return msg;
          found = true;
          return { ...msg, content: errorMessage, isTyping: false, isError: true };
        });
        return found
          ? next
          : [...next, { id: createId(), role: 'assistant', content: errorMessage, isError: true }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  };

  const panelClip = 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))';

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] drop-shadow-[0_0_24px_rgba(0,255,136,0.25)]"
          >
            <div
              className="border border-accent-green/50 bg-black/95 backdrop-blur-xl overflow-hidden flex flex-col"
              style={{ clipPath: panelClip }}
            >
              {/* Header */}
              <div className="p-4 border-b border-accent-green/25 bg-accent-green/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 bg-accent-green/15 border border-accent-green/60 flex items-center justify-center"
                      style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}
                    >
                      <Terminal className="w-5 h-5 text-accent-green" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-white tracking-widest">
                        AG<span className="text-accent-green">://</span>AGENT
                      </p>
                      <p className="font-mono text-[10px] text-accent-green/80 tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-accent-green animate-pulse"></span>
                        ONLINE · GEMINI
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-accent-green hover:bg-accent-green/10 rounded-none h-8 w-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[400px]">
                <div ref={scrollContainerRef} className="h-full overflow-y-auto p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] p-3 text-sm leading-relaxed ${message.role === 'user'
                            ? 'bg-accent-green text-black font-medium'
                            : message.isError
                              ? 'bg-red-500/10 text-red-200 border border-red-500/30'
                              : 'bg-white/[0.04] text-gray-200 border border-accent-green/20 border-l-2 border-l-accent-green'
                            }`}
                          style={{
                            clipPath: message.role === 'user'
                              ? 'polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)'
                              : 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
                          }}
                        >
                          {message.isTyping ? (
                            <div className="flex items-center gap-1.5 py-0.5">
                              <div className="w-1.5 h-1.5 bg-accent-green animate-bounce" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-1.5 h-1.5 bg-accent-green/70 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-1.5 h-1.5 bg-accent-green animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                          ) : message.role === 'user' ? (
                            message.content
                          ) : (
                            <ReactMarkdown
                              components={{
                                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                                ul: ({ children }) => <ul className="list-disc pl-4 mb-2 last:mb-0 space-y-1">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 last:mb-0 space-y-1">{children}</ol>,
                                li: ({ children }) => <li>{children}</li>,
                                pre: ({ children }) => <pre className="bg-black/60 border border-accent-green/20 p-2 my-2 overflow-x-auto text-xs [&>code]:bg-transparent [&>code]:p-0">{children}</pre>,
                                code: ({ children }) => <code className="bg-black/60 px-1 py-0.5 font-mono text-accent-green text-xs">{children}</code>,
                                a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-green underline">{children}</a>,
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 border-t border-accent-green/25 bg-black/40">
                <div className="flex w-full gap-2 items-center">
                  <span className="font-mono text-accent-green text-sm shrink-0">{'>'}</span>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="query the agent..."
                    className="bg-black/60 border-accent-green/25 focus-visible:ring-accent-green/50 rounded-none font-mono text-sm text-white placeholder-gray-500"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={isLoading || !input.trim()}
                    size="icon"
                    className="bg-accent-green hover:bg-accent-green/80 text-black rounded-none shrink-0 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                    style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close AI agent' : 'Open AI agent'}
        className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 flex items-center justify-center transition-all duration-300 border ${isOpen
          ? 'bg-black border-accent-green text-accent-green drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]'
          : 'bg-accent-green border-accent-green text-black drop-shadow-[0_0_14px_rgba(0,255,136,0.6)]'
          }`}
        style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Terminal className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatBot;
