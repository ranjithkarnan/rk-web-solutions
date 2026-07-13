import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import WhatsAppFloat from '../components/WhatsAppFloat';
import FloatingContactBar from '../components/FloatingContactBar';
import { BackToTop, CursorGlow, ScrollProgress } from '../components/UtilityEffects';
import { brand } from '../assets/brand';
import { fadeUp } from '../animations/variants';

const firstPost = {
  title: 'Website Developer Near Me in Chennai (2026): How to Choose the Right Expert for Your Business',
  description:
    'Learn how to choose the right website developer in Chennai, compare costs, avoid common mistakes, and build a website that grows your business.',
  path: '/blog/website-developer-near-me-chennai',
  image: '/blog/website-developer-near-me-chennai-2026.webp',
  date: 'July 13, 2026',
  readTime: '11 min read',
};

function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${brand.name} Blog`,
    url: `${brand.website}/blog`,
    description: 'Website development, SEO, dashboard, CRM, and business website guidance from RK Web Solutions.',
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: firstPost.title,
        url: `${brand.website}${firstPost.path}`,
        image: `${brand.website}${firstPost.image}`,
        description: firstPost.description,
      },
    ],
  };

  return (
    <>
      <SEO
        title={`Blog | ${brand.name}`}
        description="Read website development, SEO, dashboard, CRM, and digital growth guides from RK Web Solutions."
        path="/blog"
        image={firstPost.image}
        jsonLd={blogSchema}
      />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="blog-page">
        <section className="blog-index-hero section-shell">
          <motion.span className="eyebrow" variants={fadeUp} initial="hidden" animate="visible">RK Web Solutions Blog</motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible">Practical website development guides for growing businesses</motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible">
            Learn how to plan, build, improve, and maintain business websites, landing pages, dashboards, CRM systems, and digital lead generation flows.
          </motion.p>
        </section>

        <section className="blog-index-grid section-shell">
          <motion.article className="blog-post-card" variants={fadeUp} initial="hidden" animate="visible">
            <a href={firstPost.path} className="blog-post-image">
              <img src={firstPost.image} alt="Website developer near me in Chennai creating a modern business website for local businesses" />
            </a>
            <div>
              <div className="blog-meta-row">
                <span><CalendarDays size={16} /> {firstPost.date}</span>
                <span><Clock size={16} /> {firstPost.readTime}</span>
              </div>
              <h2>{firstPost.title}</h2>
              <p>{firstPost.description}</p>
              <a href={firstPost.path} className="preview-link">
                Read Article <ArrowRight size={17} />
              </a>
            </div>
          </motion.article>
        </section>
      </main>
      <WhatsAppFloat />
      <FloatingContactBar />
      <BackToTop />
    </>
  );
}

export default BlogPage;
