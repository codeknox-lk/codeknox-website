import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  quickReplies?: string[];
  reactions?: { thumbsUp: number; thumbsDown: number };
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `👋 **Welcome to CodeKnox!**

I'm **Knox**, your AI assistant, and I'm thrilled to meet you! I'm here to help you discover how we can transform your digital vision into reality.

✨ **What makes us special:**
• 🎨 Award-winning design & development
• 🚀 Cutting-edge technology solutions
• 💼 Proven track record of success
• 🤝 Personalized approach to every project

**Ready to explore what's possible?** I can help you with services, pricing, portfolio, or connect you with our expert team!

*What would you like to know first?*`,
      isUser: false,
      timestamp: new Date(),
      quickReplies: [
        "🚀 Show Me Services",
        "💰 Get Pricing Info",
        "📱 View Our Work",
        "📞 Talk to Experts",
        "🎯 Start My Project"
      ],
      reactions: { thumbsUp: 0, thumbsDown: 0 }
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setTimeout(scrollToTop, 100);
    }
  }, [isOpen]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return `👋 ${greeting}! I'm **Knox**, your AI assistant at CodeKnox. I'm here to help you discover how we can transform your digital vision into reality.

✨ **What can I help you with today?**
• Explore our cutting-edge services
• Get personalized project estimates
• Schedule a consultation
• Learn about our success stories

*I'm powered by advanced AI and have access to our complete service portfolio. Ask me anything!*`;
    }

    // Service responses
    if (message.includes('service') || message.includes('what do you do') || message.includes('explore')) {
      return `🚀 **CodeKnox Digital Solutions**
*Where Innovation Meets Excellence*

I'm excited to share what we do! We're not just developers; we're **digital architects** who craft exceptional experiences.

**🎨 Creative Excellence**
• UI/UX Design that converts visitors to customers
• Brand identity & visual storytelling
• Interactive prototypes & user testing
• Design systems & style guides

**💻 Technical Mastery**
• Full-stack development (React, Node.js, Python)
• Mobile apps (iOS & Android)
• Progressive Web Apps (PWA)
• Microservices & API development

**🤖 Future-Ready Solutions**
• AI/ML integration & automation
• Cloud infrastructure & DevOps
• Blockchain & Web3 applications
• IoT & smart device connectivity

**💼 Business Impact**
• E-commerce platforms that scale
• SaaS products & MVPs
• Custom enterprise solutions
• Digital transformation consulting

*What type of project are you envisioning? I can provide detailed insights!*`;
    }

    // Pricing responses
    if (message.includes('price') || message.includes('cost') || message.includes('budget') || message.includes('pricing')) {
      return `💰 **Investment in Your Digital Success**

I understand budget is important! Here's our transparent, value-driven pricing:

**📊 Tailored Investment Tiers**

**🌱 Startup Package (50K-100K LKR)**
• Professional website with CMS
• Mobile-responsive design
• Basic SEO optimization
• 3 months support
*Perfect for new businesses*

**🚀 Growth Package (100K-250K LKR)**
• Custom web application
• Advanced features & integrations
• E-commerce capabilities
• Performance optimization
• 6 months support
*Ideal for scaling businesses*

**💎 Enterprise Package (250K+ LKR)**
• Complex multi-platform solutions
• AI/ML integration
• Custom APIs & microservices
• Advanced security & compliance
• 12 months support + maintenance
*For established enterprises*

**🎁 Always Included**
✅ Source code ownership
✅ Responsive design
✅ Performance optimization
✅ Security best practices
✅ Documentation & training

*Want a personalized quote? I can help you find the perfect package!*`;
    }

    // Contact responses
    if (message.includes('contact') || message.includes('talk') || message.includes('call') || message.includes('meet')) {
      return `📞 **Let's Connect & Create Something Amazing!**

I'm excited to help you get started! Here are the best ways to reach our expert team:

**⚡ Instant Connection**
• **WhatsApp:** +94 70 663 3321 (Instant response)
• **Email:** sales@codeknox.lk (Professional touch)
• **Phone:** +94 70 663 3321 (Direct conversation)

**🎯 Professional Touch**
• **Schedule a Call:** Let's discuss your project in detail
• **Project Brief:** Share your vision and get expert feedback
• **Partnership:** Explore long-term collaboration opportunities

**⏰ Availability**
• **Monday - Friday:** 9:00 AM - 6:00 PM (LKT)
• **Saturday:** 10:00 AM - 2:00 PM (LKT)
• **Emergency Support:** Available 24/7 for critical issues

**🎁 Free Consultation**
• 30-minute discovery call
• Project scope & timeline discussion
• Technology recommendations
• No obligation, just expert advice

*Ready to start your digital transformation? Let's talk!*`;
    }

    // Project start responses
    if (message.includes('start') || message.includes('project') || message.includes('begin') || message.includes('create')) {
      return `🎯 **Let's Build Your Digital Success Story!**

I'm thrilled you're ready to start! Here's our proven process that has delivered exceptional results for 50+ clients:

**🚀 Our Proven Process**

**1️⃣ Discovery & Strategy (Week 1)**
• Deep dive into your business goals
• User research & market analysis
• Technology stack selection
• Project roadmap creation

**2️⃣ Design & Prototyping (Week 2-3)**
• UI/UX design with user focus
• Interactive prototypes
• Design system creation
• Client feedback integration

**3️⃣ Development & Testing (Week 4-8)**
• Agile development sprints
• Regular progress updates
• Quality assurance testing
• Performance optimization

**4️⃣ Launch & Support (Week 9+)**
• Smooth deployment
• User training & documentation
• Ongoing maintenance
• Continuous improvement

**⏱️ Typical Timeline**
• **Simple Website:** 2-4 weeks
• **Business Application:** 6-12 weeks
• **Complex System:** 12-24 weeks

**🎯 What Makes Us Different**
• **Client-Centric Approach:** Your success is our priority
• **Transparent Communication:** Regular updates & open dialogue
• **Cutting-Edge Technology:** Latest tools & best practices
• **Proven Results:** 50+ successful projects delivered

*Ready to start your journey? Let's schedule a discovery call!*`;
    }

    // Portfolio responses
    if (message.includes('portfolio') || message.includes('work') || message.includes('projects') || message.includes('examples')) {
      return `📱 **Our Success Stories - Real Results, Real Impact**

I'm proud to showcase our recent work that has transformed businesses and delighted users:

**🏆 Featured Projects**

**🦷 SmileHub Premium Dental Care**
• **Result:** 300% increase in online bookings
• **Tech:** React, Node.js, Payment Integration
• **Impact:** Streamlined patient management system
• **Client Quote:** "CodeKnox transformed our practice!"

**🏗️ Fort Knox Quantity Surveying**
• **Result:** 250% improvement in project efficiency
• **Tech:** React, Python, Advanced Analytics
• **Impact:** Automated quantity calculations
• **Client Quote:** "Game-changing solution for our industry!"

**🌿 Wildscapia Nature Platform**
• **Result:** 400% growth in user engagement
• **Tech:** React, AI/ML, Real-time Data
• **Impact:** Interactive nature exploration platform
• **Client Quote:** "Innovation at its finest!"

**📊 Our Track Record**
• **50+ Projects Completed**
• **100% Client Satisfaction**
• **300% Average ROI Improvement**
• **24/7 Support & Maintenance**

**🎯 What Our Clients Say**
*"CodeKnox doesn't just build websites; they build digital experiences that drive real business results."*

*Want to see more examples or discuss your specific project? Let's talk!*`;
    }

    // Technology responses
    if (message.includes('technology') || message.includes('tech') || message.includes('stack') || message.includes('tools')) {
      return `💻 **Cutting-Edge Technology Stack**

I'm excited to share our technology expertise! We use the latest tools and frameworks to build exceptional digital experiences:

**🎨 Frontend Excellence**
• **React & Next.js** - Modern, fast, and scalable
• **TypeScript** - Type-safe development
• **Tailwind CSS** - Beautiful, responsive designs
• **Framer Motion** - Smooth animations & interactions

**⚙️ Backend Power**
• **Node.js & Express** - Robust server architecture
• **Python & Django** - AI/ML integration
• **PostgreSQL & MongoDB** - Reliable data management
• **Redis** - High-performance caching

**☁️ Cloud & Infrastructure**
• **AWS & Vercel** - Scalable hosting solutions
• **Docker & Kubernetes** - Container orchestration
• **CI/CD Pipelines** - Automated deployment
• **Monitoring & Analytics** - Performance tracking

**🤖 AI & Automation**
• **Machine Learning** - Intelligent features
• **Natural Language Processing** - Smart chatbots
• **Computer Vision** - Image recognition
• **Automation Scripts** - Workflow optimization

**📱 Mobile Development**
• **React Native** - Cross-platform apps
• **Flutter** - Native performance
• **Progressive Web Apps** - App-like web experiences

**🔒 Security & Performance**
• **SSL/TLS Encryption** - Secure data transmission
• **OAuth & JWT** - Secure authentication
• **Rate Limiting** - DDoS protection
• **Performance Optimization** - Lightning-fast loading

*What technology interests you most? I can provide detailed insights!*`;
    }

    // Support responses
    if (message.includes('support') || message.includes('maintenance') || message.includes('help') || message.includes('after')) {
      return `🛠️ **Comprehensive Support & Maintenance**

Your success doesn't end at launch! We provide ongoing support to ensure your digital solution continues to perform at its best:

**🚀 Launch Support (First Month)**
• **Go-Live Assistance** - Smooth deployment
• **User Training** - Team onboarding
• **Bug Fixes** - Immediate issue resolution
• **Performance Monitoring** - 24/7 system health

**📈 Ongoing Maintenance Plans**

**🌱 Basic Plan (Monthly)**
• Security updates & patches
• Performance monitoring
• Basic bug fixes
• Email support
• *Perfect for simple websites*

**🚀 Professional Plan (Monthly)**
• Everything in Basic
• Feature enhancements
• Content updates
• Priority support
• Monthly reports
• *Ideal for business applications*

**💎 Enterprise Plan (Monthly)**
• Everything in Professional
• Custom feature development
• Advanced analytics
• 24/7 phone support
• Dedicated account manager
• *For mission-critical systems*

**⚡ Emergency Support**
• **Critical Issues:** 2-hour response time
• **High Priority:** 4-hour response time
• **Standard Issues:** 24-hour response time
• **Available 24/7** for enterprise clients

**📊 What's Included**
✅ Regular security updates
✅ Performance optimization
✅ Backup & recovery
✅ Monitoring & alerts
✅ Documentation updates
✅ Training & support

*Want to discuss the best support plan for your project? Let's talk!*`;
    }

    // Timeline responses
    if (message.includes('timeline') || message.includes('duration') || message.includes('how long') || message.includes('when')) {
      return `⏰ **Project Timeline & Delivery Expectations**

Great question! Timeline depends on your project complexity and requirements. Here's our typical delivery schedule:

**📅 Project Complexity Breakdown**

**🌱 Simple Website (2-4 weeks)**
• **Week 1:** Design & planning
• **Week 2:** Development & content
• **Week 3:** Testing & optimization
• **Week 4:** Launch & training
• *Perfect for: Business websites, portfolios*

**🚀 Business Application (6-12 weeks)**
• **Weeks 1-2:** Discovery & strategy
• **Weeks 3-4:** Design & prototyping
• **Weeks 5-8:** Development & integration
• **Weeks 9-10:** Testing & optimization
• **Weeks 11-12:** Launch & support
• *Perfect for: E-commerce, custom web apps*

**💎 Complex System (12-24 weeks)**
• **Weeks 1-3:** Deep discovery & architecture
• **Weeks 4-6:** Design & user experience
• **Weeks 7-16:** Development & integration
• **Weeks 17-20:** Testing & optimization
• **Weeks 21-24:** Launch & training
• *Perfect for: Enterprise solutions, AI/ML projects*

**⚡ Factors Affecting Timeline**
• **Project Scope** - Features and complexity
• **Client Feedback** - Response time and revisions
• **Third-party Integrations** - External dependencies
• **Content Preparation** - Text, images, and media
• **Testing Requirements** - Quality assurance needs

**🎯 Our Commitment**
• **On-Time Delivery** - 95% of projects delivered on schedule
• **Regular Updates** - Weekly progress reports
• **Flexible Approach** - Adapt to changing requirements
• **Quality First** - Never compromise on excellence

*Want a detailed timeline for your specific project? Let's discuss!*`;
    }

    // Fallback response
    return `🤔 **That's an interesting question!**

I'm Knox, your AI assistant, and I'm constantly learning! While I might not have the perfect answer for that specific question, I can definitely help you with:

**🎯 What I'm Great At:**
• Explaining our services & capabilities
• Providing project estimates & timelines
• Connecting you with our human experts
• Sharing our portfolio & success stories
• Answering technical questions
• Helping you get started

**💡 Try asking me about:**
• "What services do you offer?"
• "How much does a website cost?"
• "Show me your portfolio"
• "How do I start a project?"
• "What technologies do you use?"

**🚀 Or simply say:**
• "Help me with my project"
• "I need a website"
• "Tell me about CodeKnox"

*I'm here to help you succeed! What would you like to know?*`;
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(messageText);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
        reactions: { thumbsUp: 0, thumbsDown: 0 }
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessage = (message: Message) => {
    const processedText = message.text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');

    return (
      <div className="space-y-2">
        {processedText.split('\n').map((line, index) => (
          <div key={index} className="leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: line }} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-20 sm:bottom-32 md:bottom-40 right-2 sm:right-4 md:right-6 z-50 w-[calc(100vw-1rem)] sm:w-80 md:w-96 max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-10rem)] md:max-h-[calc(100vh-12rem)] bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[480px] sm:h-[500px] md:h-[520px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Knox</h3>
                    <p className="text-blue-100 text-sm flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      Online & Ready to help
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
              <div ref={messagesContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 min-h-0">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isUser 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600' 
                          : 'bg-gradient-to-r from-indigo-500 to-purple-600'
                      }`}>
                        {message.isUser ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      
                      {/* Message Bubble */}
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.isUser
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                          : 'bg-white text-gray-800 border border-gray-200'
                      }`}>
                        {/* Message content */}
                        <div className="text-sm leading-relaxed">
                          {renderMessage(message)}
                        </div>
                        
                        {/* Timestamp */}
                        <div className="flex items-center justify-between mt-2">
                          <p className={`text-xs ${
                            message.isUser ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                          
                          {/* Reactions for bot messages */}
                          {!message.isUser && message.reactions && (
                            <div className="flex items-center space-x-1">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-500 transition-colors"
                              >
                                <ThumbsUp className="w-3 h-3" />
                                <span>{message.reactions.thumbsUp}</span>
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex items-center space-x-1 text-xs text-gray-500 hover:text-red-500 transition-colors"
                              >
                                <ThumbsDown className="w-3 h-3" />
                                <span>{message.reactions.thumbsDown}</span>
                              </motion.button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Quick Replies */}
                {messages.length > 0 && messages[messages.length - 1].quickReplies && !messages[messages.length - 1].isUser && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2 mt-4"
                  >
                    {messages[messages.length - 1].quickReplies!.map((reply, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-2 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

            {/* Input Area */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center space-x-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about CodeKnox..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isTyping}
                  />
                  <motion.button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;