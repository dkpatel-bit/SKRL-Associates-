import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { blogPosts } from '../data/blog';
import type { BlogPost } from '../data/blog';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';


export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Taxation', 'GST', 'Corporate', 'Finance', 'Startup'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <PageHero
        title="Tax & Financial Blog"
        description="Stay up to date with the latest Indian GST amendments, Income Tax notifications, and corporate compliance updates."
        currentPage="Blog"
      />

      {/* Blog Listing Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom flex flex-col gap-10">
          
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === cat
                      ? 'bg-navy-900 text-white shadow-navy'
                      : 'bg-surface text-navy-950 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles & keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
              />
            </div>
          </div>

          {/* Listing */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-surface rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">No articles found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-xs font-bold text-gold-500 mt-2 underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="card overflow-hidden flex flex-col justify-between h-full border border-gray-100 hover:shadow-card-hover transition-all">
                  {/* Article Thumbnail */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 tag bg-navy-900 text-white border-transparent text-[10px] uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col gap-4 text-left flex-grow">
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-[10px] text-gray-400 font-semibold uppercase">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-500" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-500" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display text-navy-900 leading-snug line-clamp-2 hover:text-gold-500 cursor-pointer" onClick={() => setActivePost(post)}>
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author / CTA footer */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-50 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gold-100 flex items-center justify-center font-bold text-gold-700 text-[10px]">
                        SK
                      </div>
                      <span className="text-[10px] font-bold text-gray-400">{post.author}</span>
                    </div>

                    <button 
                      onClick={() => setActivePost(post)}
                      className="text-xs font-bold text-navy-900 hover:text-gold-500 flex items-center gap-1 group/btn"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Detail Modal View */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <button 
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-navy-900/60 hover:bg-navy-900 text-white flex items-center justify-center text-lg transition-colors font-bold"
            >
              &times;
            </button>

            {/* Modal Body Scroll Container */}
            <div className="overflow-y-auto p-6 md:p-10 flex flex-col gap-6 text-left">
              {/* Header Image */}
              <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-2">
                <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-semibold uppercase">
                <span className="tag bg-gold-50 text-gold-700 border-gold-200">{activePost.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-gold-500" /> {activePost.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-gold-500" /> {activePost.readTime}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4 text-gold-500" /> {activePost.author}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold font-display text-navy-900 leading-snug">
                {activePost.title}
              </h2>
              <div className="gold-divider" />

              {/* Content */}
              <div className="text-sm text-gray-600 leading-relaxed flex flex-col gap-4">
                <p className="font-semibold text-navy-900 text-base">{activePost.excerpt}</p>
                <p>{activePost.content}</p>
                <p>For deep strategic advisory on these matters, please reach out to our partners at the Coimbatore branch or request a call-back in the contact section.</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {activePost.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-surface border border-gray-100 rounded-md text-[10px] text-gray-400 font-semibold">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
