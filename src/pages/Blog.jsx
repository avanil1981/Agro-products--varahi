import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, X, ArrowRight, Sparkles } from 'lucide-react';
import { blogs } from '../data/agroData';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block">TRADE PAPERS</span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight">
            Agro Export Insights
          </h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <p className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed">
            Stay updated with global trade standards, Indian crop harvesting reports, container shipping rules, and curcumin/caffeine grading guidelines.
          </p>
        </div>
      </section>

      {/* 2. Blog Cards Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-3xl overflow-hidden border border-cream-bg shadow-sm hover:shadow-lg hover:border-gold-accent/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-cream-bg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/30 to-transparent"></div>
                  
                  {/* Floating Date */}
                  <span className="absolute bottom-4 left-4 bg-white/95 text-primary-green font-bold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg border border-gold-accent/15">
                    {post.date}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-[10px] text-soft-gray font-medium">
                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-gold-accent" /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-gold-accent" /> {post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-dark-green group-hover:text-primary-green transition-colors leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-soft-gray font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(post)}
                  className="w-full bg-cream-bg hover:bg-gold-accent hover:text-white text-dark-green font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center space-x-1.5 group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Detailed Blog Article Modal Portal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 md:p-8 relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Exit top right */}
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-xl hover:bg-cream-bg text-dark-text transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content header */}
            <div className="space-y-3 pr-8">
              <div className="flex items-center space-x-3 text-[10px] text-soft-gray font-medium">
                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-gold-accent" /> {selectedArticle.date}</span>
                <span>•</span>
                <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-gold-accent" /> {selectedArticle.readTime}</span>
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-extrabold text-dark-green leading-snug">
                {selectedArticle.title}
              </h2>
              <div className="w-16 h-1 bg-gold-accent"></div>
            </div>

            {/* Illustration */}
            <div className="h-56 rounded-2xl overflow-hidden bg-cream-bg shadow-inner">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content (Premium typography) */}
            <div 
              className="text-xs md:text-sm text-soft-gray leading-relaxed font-light space-y-4 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content || `<p>${selectedArticle.excerpt}</p>` }}
            />

            {/* Footer buttons */}
            <div className="pt-6 border-t border-cream-bg flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[10px] font-bold text-gold-accent uppercase">
                <BookOpen className="w-4 h-4 text-gold-accent" />
                <span>Trade Publication</span>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="bg-primary-green hover:bg-dark-green text-white font-bold text-xs py-2 px-5 rounded-lg border border-gold-accent/20"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
