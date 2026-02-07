import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = 'AIzaSyAFyRJtjReD2RBWUE0sLGdbtUmu53qDJ2s';

const AARYAN_CONTEXT = `You are a helpful AI assistant on Aaryan Gupta's personal portfolio website. Your role is to answer questions about Aaryan based on the following information. Be friendly, concise, and professional. If asked about something not covered below, politely say you don't have that information but suggest they reach out to Aaryan directly.

=== ABOUT AARYAN ===
Aaryan Gupta is a second-year Computer Science Specialist student at the University of Toronto (Expected graduation: April 2028) with a GPA of 3.91/4.00. He specializes in systems programming, full-stack development, and building software that works at every level of the stack—from kernel modules and concurrent file systems to production web applications with real-time 3D visualization.

=== CURRENT POSITIONS (Jan 2026 - Present) ===
1. Software Engineer, Research at Rotman School of Management, University of Toronto
   - Building a corporate finance simulator modeling investment decisions, financing strategies, and real-time impact on financial statements
   - Architecting full-stack application with Next.js, TypeScript, PostgreSQL, and Prisma ORM
   - Collaborating with finance faculty to translate domain requirements into technical solutions

2. Teaching Assistant at University of Toronto
   - Teaching CSC263H5 (Data Structures & Analysis)
   - Leading tutorials on problem-solving techniques and core data structures/algorithms
   - Fostering collaborative learning environment

=== PAST EXPERIENCE ===
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
AI/ML: YOLOv8, LLaVA, MiniGPT, Google Gemini, Ollama, Computer Vision
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
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Aaryan's AI assistant. Ask me anything about his projects, experience, or skills!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const chatHistory = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const chat = model.startChat({
        history: [
          { role: 'user', parts: [{ text: AARYAN_CONTEXT }] },
          { role: 'model', parts: [{ text: "I understand. I'm ready to answer questions about Aaryan Gupta based on this information." }] },
          ...chatHistory
        ],
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        },
      });

      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I encountered an error. Please try again or reach out to Aaryan directly at aaryan.gupta@mail.utoronto.ca" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-gray-800 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-accent-green to-accent-cyan hover:scale-110 animate-pulse'
        }`}
        style={{ boxShadow: isOpen ? '' : '0 0 20px rgba(0, 255, 136, 0.5)' }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
          </svg>
        )}
      </button>
      
      {/* Tooltip when closed */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg border border-gray-700 animate-bounce">
          <span>Ask me anything! 💬</span>
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-gray-900 border-r border-b border-gray-700 transform rotate-45"></div>
        </div>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden flex flex-col h-[500px] max-h-[calc(100vh-8rem)]">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-green/20 to-accent-cyan/20 px-4 py-3 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-green to-accent-cyan flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Ask About Aaryan</h3>
                <p className="text-xs text-gray-400">Powered by Gemini AI</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-black rounded-br-md'
                      : 'bg-gray-800 text-gray-100 rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-accent-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-accent-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-800 bg-gray-900/50">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about projects, skills, experience..."
                disabled={isLoading}
                className="flex-1 bg-gray-800 text-white text-sm rounded-xl px-4 py-2.5 border border-gray-700 focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green/50 placeholder-gray-500 disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-4 py-2.5 bg-gradient-to-r from-accent-green to-accent-cyan text-black rounded-xl font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 text-center">
              Press Enter to send • AI responses may not be 100% accurate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
