import React from 'react';
import { Container } from '@/components/ui/Container';
import { homeContent } from '@/content/home';
import { Bot, Sparkles, Send } from 'lucide-react';

export default function AiSection() {
  const { title, description, chatExamples } = homeContent.aiAssistant;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>ميزة جديدة</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-3 w-full">
              {chatExamples.map((example, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-dark/20 bg-neutral/50 hover:bg-white transition-colors cursor-default">
                  <Bot className="w-4 h-4 text-primary" />
                  <span className="font-medium text-primary text-sm">{example}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Mockup */}
          <div className="relative">
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl -z-10" />
            
            <div className="relative rounded-2xl border border-neutral-dark/30 bg-neutral shadow-card overflow-hidden flex flex-col h-[500px]">
              {/* Chat Header */}
              <div className="p-4 border-b border-neutral-dark/20 bg-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center relative">
                  <Bot className="w-6 h-6 text-accent" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">المساعد الذكي (AI)</h4>
                  <p className="text-xs text-foreground/50">متصل الآن</p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
                
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-primary text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-sm">
                    {chatExamples[0]} من فضلك لمريض الأمس.
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <Bot className="w-4 h-4 text-accent" />
                  </div>
                  <div className="max-w-[80%] bg-white border border-neutral-dark/20 p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm space-y-3">
                    <p className="font-medium">تم إنشاء الملاحظات (SOAP) بنجاح:</p>
                    <div className="p-3 bg-neutral rounded-lg text-xs space-y-2 text-foreground/80 font-mono" dir="rtl">
                      <p><strong className="text-primary font-sans">S:</strong> يشتكي المريض من صداع نصفي...</p>
                      <p><strong className="text-primary font-sans">O:</strong> الضغط 120/80، النبض 72...</p>
                      <p><strong className="text-primary font-sans">A:</strong> اشتباه في شقيقة (Migraine)...</p>
                      <p><strong className="text-primary font-sans">P:</strong> وصف مسكنات، مراجعة بعد أسبوع...</p>
                    </div>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-primary text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-sm">
                    ممتاز، {chatExamples[2]} بناءً على ذلك.
                  </div>
                </div>

                 {/* AI Response Typing indicator */}
                 <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <Bot className="w-4 h-4 text-accent" />
                  </div>
                  <div className="bg-white border border-neutral-dark/20 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>

              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-neutral-dark/20">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="اكتب طلبك للمساعد الذكي..." 
                    className="w-full bg-neutral border border-neutral-dark/30 rounded-full py-3 px-5 pl-12 text-sm outline-none focus:border-accent transition-colors"
                    disabled
                  />
                  <div className="absolute left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <Send className="w-4 h-4 -scale-x-100" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
