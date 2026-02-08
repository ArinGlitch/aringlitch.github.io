import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MessageCircle, X, Send, Loader2, Sparkles, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

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
  const scrollAreaRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

      // Filter history to only include valid roles for Gemini (user/model)
      const chatHistory = messages
        .filter(msg => msg.role !== 'error') // Exclude error messages from history
        .map(msg => ({
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
      console.error('Gemini API Error:', error);
      let errorMessage = "Sorry, I encountered an error. Please try again later.";

      if (error.message?.includes('API key not valid')) {
        errorMessage = "Error: Invalid API Key. Please contact the administrator.";
      } else if (error.message?.includes('quota')) {
        errorMessage = "Error: API Quota Exceeded. Please try again later.";
      } else if (error.message) {
        errorMessage = `Error: ${error.message.slice(0, 100)}...`; // Truncate long errors
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: errorMessage,
        isError: true
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)]"
          >
            <Card className="border-accent-green/30 shadow-2xl bg-black/80 backdrop-blur-md overflow-hidden">
              <CardHeader className="p-4 border-b border-white/10 bg-gradient-to-r from-accent-green/10 to-accent-cyan/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-green to-accent-cyan flex items-center justify-center shadow-lg shadow-accent-green/20">
                      <Bot className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-base font-bold flex items-center gap-2">
                        Aaryan's Assistant
                        <Badge variant="outline" className="text-[10px] py-0 h-4 border-accent-green text-accent-green bg-accent-green/10">BETA</Badge>
                      </CardTitle>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Online
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full h-8 w-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-0 h-[400px]">
                <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-end gap-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          {message.role !== 'user' && (
                            <Avatar className="w-6 h-6 ring-1 ring-white/10">
                              <AvatarFallback className="bg-accent-green/20 text-accent-green text-[10px]">AI</AvatarFallback>
                              <div className="w-full h-full bg-gradient-to-tr from-accent-green to-accent-cyan flex items-center justify-center">
                                <Sparkles className="w-3 h-3 text-black" />
                              </div>
                            </Avatar>
                          )}

                          <div
                            className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${message.role === 'user'
                              ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-black rounded-br-none font-medium'
                              : message.isError
                                ? 'bg-red-500/10 text-red-200 border border-red-500/20 rounded-bl-none'
                                : 'bg-white/10 text-gray-100 border border-white/5 rounded-bl-none backdrop-blur-sm'
                              }`}
                          >
                            {message.content}
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-end gap-2">
                          <Avatar className="w-6 h-6 ring-1 ring-white/10">
                            <div className="w-full h-full bg-gradient-to-tr from-accent-green to-accent-cyan flex items-center justify-center">
                              <Sparkles className="w-3 h-3 text-black" />
                            </div>
                          </Avatar>
                          <div className="bg-white/10 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-accent-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-1.5 h-1.5 bg-accent-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>

              <CardFooter className="p-3 bg-black/20 border-t border-white/5">
                <div className="flex w-full gap-2 items-center">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about my projects..."
                    className="bg-white/5 border-white/10 focus-visible:ring-accent-green/50 text-white placeholder-gray-500"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={isLoading || !input.trim()}
                    size="icon"
                    className="bg-accent-green hover:bg-accent-green/80 text-black rounded-lg shrink-0 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 ${isOpen
          ? 'bg-gray-800 text-white'
          : 'bg-gradient-to-r from-accent-green to-accent-cyan text-white animate-pulse-scale'
          }`}
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
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white drop-shadow-md" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatBot;
