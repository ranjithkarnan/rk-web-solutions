import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Download,
  Facebook,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Droplets,
  Phone,
  Send,
  Star,
  Stethoscope,
  Dumbbell,
  UsersRound,
} from 'lucide-react';
import {
  clients,
  dashboardTools,
  dashboardViews,
  faqs,
  features,
  pricing,
  processSteps,
  projects,
  services,
  stats,
  testimonials,
} from '../assets/data';
import { getWhatsAppLink } from '../assets/whatsapp';
import { brand } from '../assets/brand';
import { fadeUp, premiumCardHover, revealWord, scaleIn, staggerContainer } from '../animations/variants';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { BackToTop, CursorGlow, PageLoader, ScrollProgress } from '../components/UtilityEffects';
import WhatsAppFloat from '../components/WhatsAppFloat';
import HeroVideo from '../components/HeroVideo';
import Logo from '../components/Logo';
import SEO from '../components/SEO';
import FloatingContactBar from '../components/FloatingContactBar';
import PricingExperience from '../components/pricing/PricingExperience';

function useCounter(target) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    let start;
    const duration = 1500;

    const tick = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.floor(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return value;
}

function Hero() {
  const headline = 'We Build Modern Business Websites & Smart Digital Solutions'.split(' ');

  return (
    <section id="home" className="hero section-shell">
      <HeroVideo />
      <div className="hero-bg" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <motion.div className="hero-copy" variants={staggerContainer} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={fadeUp}>
          Premium digital systems for growing companies
        </motion.span>
        <motion.h1 className="hero-title" variants={staggerContainer}>
          {headline.map((word, index) => (
            <motion.span key={`${word}-${index}`} variants={revealWord}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p variants={fadeUp}>
          Helping businesses grow with premium websites, dashboards, automation systems, and modern digital experiences.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <Button href="#contact">Get Started</Button>
          <Button href="#projects" variant="ghost">
            View Projects
          </Button>
        </motion.div>
        <motion.div className="hero-proof" variants={fadeUp}>
          <span>SEO-ready</span>
          <span>Mobile-first</span>
          <span>Dashboard experts</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustedSection() {
  const marquee = useMemo(() => [...clients, ...clients], []);

  return (
    <section className="trusted" aria-label="Trusted business logos">
      <p>Trusted by growing businesses</p>
      <div className="marquee">
        <div className="marquee-track">
          {marquee.map((client, index) => (
            <span key={`${client}-${index}`}>{client}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <SectionHeader
        eyebrow="Services"
        title="Digital solutions built for real business growth"
        text="From your public website to internal dashboards, every service is designed to improve trust, speed, clarity, and daily operations."
      />
      <motion.div className="card-grid services-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        {services.map(({ icon: Icon, title, description }) => (
          <motion.article className="glass-card service-card" key={title} variants={{ ...fadeUp, ...premiumCardHover }} whileHover="hover">
            <div className="card-icon">
              <Icon size={24} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#contact" className="service-link">
              Discuss service <ArrowUpRight size={16} />
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function SEOContentSection() {
  const serviceKeywords = [
    'Business website development',
    'Admin dashboard development',
    'CRM and employee portals',
    'Leave management systems',
    'Clinic management portals',
    'Gym website development',
    'Water purifier company websites',
    'SEO-friendly responsive websites',
  ];

  return (
    <section className="seo-content-band">
      <div>
        <span className="eyebrow">Search-ready services</span>
        <h2>Website and dashboard development for Indian small businesses</h2>
        <p>
          RK Web Solutions helps startups, clinics, gyms, HR teams, local service companies, and growing businesses build modern websites,
          dashboards, employee portals, CRM tools, automation systems, and mobile responsive digital experiences.
        </p>
      </div>
      <div className="seo-keyword-grid">
        {serviceKeywords.map((keyword) => (
          <a href="#contact" key={keyword}>
            {keyword}
          </a>
        ))}
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section id="about" className="section-shell split-section">
      <SectionHeader
        align="left"
        eyebrow="Why choose RK"
        title="A business-first team for polished design and practical systems"
        text="We combine premium interface design with operational thinking, so your website or dashboard is beautiful and useful after launch."
      />
      <motion.div className="feature-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {features.map(({ icon: Icon, title, text }) => (
          <motion.div className="feature-block" key={title} variants={scaleIn} whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.35)' }}>
            <Icon size={22} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Projects"
        title="Portfolio concepts for modern business teams"
        text="A showcase of the kind of websites, portals, dashboards, and workflows RK Web Solutions can deliver."
      />
      <div className="portfolio-grid">
        {projects.map((project) => (
          <motion.article
            className={`portfolio-card portfolio-${project.tone}`}
            key={project.title}
            variants={{ ...fadeUp, ...premiumCardHover }}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="portfolio-thumb">
              <ProjectThumb project={project} />
            </div>
            <div className="portfolio-content">
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={`/case-studies/${project.slug}`} className="preview-link">
                View Case Study <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ProjectThumb({ project }) {
  if (project.slug === 'leave-management-system') {
    return (
      <div className="project-shot leave-shot">
        <div className="shot-top">
          <span>Leave Requests</span>
          <small>HR Admin</small>
        </div>
        <div className="leave-list">
          {['Priya S.', 'Aman K.', 'Neha R.'].map((name, index) => (
            <div className="leave-row" key={name}>
              <span>{name.slice(0, 2)}</span>
              <div>
                <strong>{name}</strong>
                <small>{index + 1} day casual leave</small>
              </div>
              <em>{index === 0 ? 'Pending' : 'Approved'}</em>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.slug === 'ro-water-purifier-website') {
    return (
      <div className="project-shot ro-shot">
        <div className="website-nav">
          <Droplets size={18} />
          <span>PureDrop RO</span>
          <small>Book Service</small>
        </div>
        <div className="ro-hero">
          <strong>RO Service & Installation</strong>
          <p>Same-day support for homes and offices.</p>
          <span>WhatsApp Enquiry</span>
        </div>
      </div>
    );
  }

  if (project.slug === 'employee-dashboard') {
    return (
      <div className="project-shot employee-shot">
        <div className="shot-top">
          <span>Employee Portal</span>
          <small>Live</small>
        </div>
        <div className="employee-mini-grid">
          {['Attendance', 'Tasks', 'Payroll', 'Docs'].map((item, index) => (
            <div key={item}>
              <UsersRound size={16} />
              <strong>{item}</strong>
              <small>{82 + index * 4}%</small>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.slug === 'business-analytics-dashboard') {
    return (
      <div className="project-shot analytics-shot">
        <div className="shot-top">
          <span>Business Analytics</span>
          <small>Q4</small>
        </div>
        <div className="analytics-bars">
          {[48, 72, 55, 88, 68, 94].map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="analytics-kpis">
          <span>₹12.8L Revenue</span>
          <span>+31% Growth</span>
        </div>
      </div>
    );
  }

  if (project.slug === 'clinic-management-portal') {
    return (
      <div className="project-shot clinic-shot">
        <div className="website-nav">
          <Stethoscope size={18} />
          <span>Apex Clinic</span>
          <small>Today</small>
        </div>
        <div className="appointment-list">
          {['10:30 AM Consultation', '12:00 PM Dental Check', '04:15 PM Follow-up'].map((item) => (
            <div key={item}>
              <CalendarDays size={15} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="project-shot gym-shot">
      <div className="website-nav">
        <Dumbbell size={18} />
        <span>FitCore Gym</span>
        <small>Join Now</small>
      </div>
      <div className="gym-plan">
        <strong>Premium Fitness Plans</strong>
        <p>Classes, trainers, memberships, and trial bookings.</p>
        <div>
          <span>Yoga</span>
          <span>Strength</span>
          <span>Cardio</span>
        </div>
      </div>
    </div>
  );
}

function DashboardShowcase() {
  const [activeViewId, setActiveViewId] = useState('overview');
  const activeView = dashboardViews.find((view) => view.id === activeViewId) || dashboardViews[0];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveViewId((current) => {
        const index = dashboardViews.findIndex((view) => view.id === current);
        return dashboardViews[(index + 1) % dashboardViews.length].id;
      });
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-shell dashboard-section">
      <div className="dashboard-copy">
        <SectionHeader
          align="left"
          eyebrow="Business dashboard showcase"
          title="Give your team one command center for leads, staff, reports, and approvals"
          text="A futuristic admin experience with live signals, clean analytics, employee widgets, notification flows, and CRM-style work queues."
        />
        <div className="dashboard-tools">
          {dashboardTools.map((Icon, index) => (
            <span key={index}>
              <Icon size={18} />
            </span>
          ))}
        </div>
      </div>

      <motion.div className="dashboard-preview" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="dashboard-tabs" role="tablist" aria-label="Dashboard preview views">
          {dashboardViews.map((view) => (
            <button
              className={view.id === activeViewId ? 'dashboard-tab dashboard-tab-active' : 'dashboard-tab'}
              key={view.id}
              type="button"
              role="tab"
              aria-selected={view.id === activeViewId}
              onClick={() => setActiveViewId(view.id)}
            >
              {view.id === activeViewId && <motion.span className="tab-glow" layoutId="dashboardTabGlow" />}
              {view.label}
            </button>
          ))}
        </div>
        <div className="dash-topbar">
          <strong>{activeView.title}</strong>
          <span>
            <i className="status-dot" /> {activeView.status}
          </span>
        </div>
        <div className="dash-metrics">
          {activeView.metrics.map(({ icon: Icon, label, value, change }) => (
            <motion.div className="dash-metric" key={`${activeView.id}-${label}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <Icon size={20} />
              <small>{label}</small>
              <strong>{value}</strong>
              <span>{change}</span>
            </motion.div>
          ))}
        </div>
        <div className="dash-main">
          <div className="dash-chart-panel">
            <div className="panel-title">
              <span>{activeView.chartLabel}</span>
              <small>{activeView.chartHint}</small>
            </div>
            <div className="line-chart">
              {activeView.chart.map((point, index) => (
                <motion.span
                  key={`${activeView.id}-${point}-${index}`}
                  initial={{ height: '18%' }}
                  animate={{ height: `${point}%` }}
                  transition={{ duration: 0.45, delay: index * 0.035 }}
                />
              ))}
            </div>
          </div>
          <div className="notification-widget">
            <div className="panel-title">
              <span>Notifications</span>
              <small>{activeView.notifications.length} new</small>
            </div>
            {activeView.notifications.map((item) => (
              <motion.div className="notice" key={`${activeView.id}-${item}`} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }}>
                <i className="status-dot" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="employee-strip">
          {activeView.teams.map((team) => (
            <button className={`employee-card ${team.active ? 'employee-card-active' : ''}`} key={`${activeView.id}-${team.name}`} type="button">
              <span>{team.name.slice(0, 2)}</span>
              <div>
                <strong>{team.name}</strong>
                <small>{team.score}% tracked</small>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-shell">
      <SectionHeader eyebrow="Process" title="A clear delivery path from idea to launch" text="You get structure, visibility, and momentum through every phase of the project." />
      <div className="timeline">
        {processSteps.map((step, index) => (
          <motion.div className="timeline-card" key={step} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-shell testimonials-section">
      <SectionHeader eyebrow="Testimonials" title="What business owners say about the experience" />
      <div className="testimonial-carousel">
        {testimonials.map((item, index) => (
          <motion.article className={`testimonial-card ${index === active ? 'testimonial-active' : ''}`} key={item.name} animate={{ opacity: index === active ? 1 : 0.45, scale: index === active ? 1 : 0.96 }}>
            <div className="avatar">{item.name.split(' ').map((part) => part[0]).join('')}</div>
            <div className="stars">{Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} size={16} fill="currentColor" />)}</div>
            <p>{item.review}</p>
            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  const pricingGuidePoints = [
    'Professional UI/UX design improves customer trust',
    'Mobile responsive design helps reach more customers',
    'Fast loading websites improve user experience',
    'SEO-friendly structure helps Google visibility',
    'Contact forms and WhatsApp integration increase leads',
    'Quality testing prevents broken layouts and errors',
    'Maintenance keeps the website secure and updated',
    'Custom business features require planning, development, and testing',
  ];

  return (
    <section id="pricing" className="section-shell">
      <SectionHeader eyebrow="Pricing" title="Flexible packages for different stages of growth" text="Every quote is tailored to your goals, pages, integrations, dashboards, and support needs." />
      <div className="pricing-grid">
          {pricing.map((plan) => (
          <motion.article
            className={`pricing-card ${plan.recommended ? 'pricing-featured' : ''}`}
            key={plan.name}
            variants={{ ...fadeUp, ...premiumCardHover }}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.25 }}
          >
            {plan.recommended && <span className="recommended-badge">Recommended</span>}
            <h3>{plan.name}</h3>
            <strong>{plan.price}</strong>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} /> {feature}
                </li>
              ))}
            </ul>
            <Button href="#contact" variant={plan.recommended ? 'primary' : 'ghost'}>
              Request Quote
            </Button>
          </motion.article>
        ))}
      </div>
      <motion.div className="pricing-guide" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <div className="pricing-guide-copy">
          <span className="eyebrow">Pricing Guide PDF</span>
          <h2>Why Professional Website Pricing Matters</h2>
          <p>
            A website is not just a design — it is your business identity, lead generation tool, customer trust builder, and digital growth system.
          </p>
          <div className="pricing-guide-actions">
            <a className="btn btn-primary" href="/rk-web-solutions-pricing-guide.pdf" target="_blank" rel="noreferrer">
              <Download size={18} /> Download Website Pricing Guide
            </a>
            <small>Pricing may vary based on business requirements, design complexity, and custom features.</small>
          </div>
        </div>
        <div className="pricing-guide-card">
          <div className="pdf-preview-icon">
            <FileText size={30} />
            <span>PDF</span>
          </div>
          <ul>
            {pricingGuidePoints.map((point) => (
              <li key={point}>
                <Check size={16} /> {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats-band">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <strong>
            <Counter value={stat.value} />
            {stat.suffix}
          </strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

function Counter({ value }) {
  const count = useCounter(value);
  return count;
}

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-shell faq-section">
      <SectionHeader eyebrow="FAQ" title="Common questions before starting a project" />
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${open === index ? 'faq-open' : ''}`} key={faq.q}>
            <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
              <span>{faq.q}</span>
              <ChevronDown size={20} />
            </button>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const leadServices = ['Website', 'Dashboard', 'Web App', 'Automation', 'UI/UX', 'SEO'];
const leadBudgets = [
  'Starter Website (Rs. 7k - 10k)',
  'Business Pro (Rs. 25k - 30k)',
  'Enterprise Dashboard (Rs. 50k - 75k)',
  'Enterprise Custom Solution (Rs. 75k+)',
  'Need guidance',
];
const leadTimelines = ['Urgent', '1-2 weeks', '3-4 weeks', '1-2 months', 'Flexible'];
const leadSources = ['Google/Search', 'Instagram', 'Referral', 'WhatsApp', 'LinkedIn', 'Other'];
const initialLeadForm = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  requirement: '',
  budget: '',
  timeline: '',
  source: '',
  services: [],
  message: '',
};

function ContactSection() {
  const [formData, setFormData] = useState(initialLeadForm);
  const [formError, setFormError] = useState('');
  const [submittedLead, setSubmittedLead] = useState(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const toggleService = (service) => {
    setFormData((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  };

  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();
    setFormError('');

    const cleanedPhone = formData.phone.replace(/\D/g, '');

    if (cleanedPhone.length < 10) {
      setFormError('Please enter a valid phone number so we can contact you.');
      return;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError('Please enter a valid email address or leave it blank.');
      return;
    }

    if (!formData.services.length) {
      setFormError('Please select at least one service you are interested in.');
      return;
    }

    const leadId = `RK-${Date.now().toString().slice(-6)}`;
    const leadRecord = {
      id: leadId,
      createdAt: new Date().toISOString(),
      ...formData,
      phone: formData.phone.trim(),
    };

    const existingLeads = JSON.parse(localStorage.getItem('rk_leads') || '[]');
    localStorage.setItem('rk_leads', JSON.stringify([leadRecord, ...existingLeads].slice(0, 25)));
    setSubmittedLead(leadRecord);

    const message = [
      'Hi RK Web Solutions, I need help with a project.',
      '',
      `Lead ID: ${leadId}`,
      `Name: ${formData.name || 'Not provided'}`,
      `Business: ${formData.businessName || 'Not provided'}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Requirement: ${formData.requirement || 'Not selected'}`,
      `Interested Services: ${formData.services.join(', ')}`,
      `Budget: ${formData.budget || 'Need guidance'}`,
      `Timeline: ${formData.timeline || 'Flexible'}`,
      `Source: ${formData.source || 'Not provided'}`,
      `Message: ${formData.message || 'Not provided'}`,
    ].join('\n');

    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    setFormData(initialLeadForm);
  };

  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-info">
        <SectionHeader
          align="left"
          eyebrow="Contact"
          title="Tell us what you want to build next"
          text="Share your project requirement and RK Web Solutions will help shape it into a clear, practical web solution."
        />
        <div className="contact-methods">
          <a href={getWhatsAppLink('Hi RK Web Solutions, I want a free consultation for my business.')} target="_blank" rel="noreferrer">
            <MessageCircle size={20} /> WhatsApp Consultation
          </a>
          <a href={`mailto:${brand.email}`}>
            <Mail size={20} /> {brand.email}
          </a>
          <a href={`tel:${brand.phoneHref}`}>
            <Phone size={20} /> {brand.phone}
          </a>
        </div>
        <div className="map-placeholder">
          <MapPin size={30} />
          <span>{brand.location}</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
        <div className="lead-form-top">
          <span>Lead Enquiry</span>
          <strong>{submittedLead ? `Saved ${submittedLead.id}` : 'WhatsApp-first capture'}</strong>
        </div>
        <div className="form-row">
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={updateField} placeholder="Your name" required />
          </label>
          <label>
            Business Name
            <input type="text" name="businessName" value={formData.businessName} onChange={updateField} placeholder="Company or brand" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={updateField} placeholder="you@example.com" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" value={formData.phone} onChange={updateField} placeholder="+91" required />
          </label>
        </div>
        <label>
          Project Requirement
          <select name="requirement" value={formData.requirement} onChange={updateField} required>
            <option value="" disabled>
              Select service
            </option>
            <option>Business Website</option>
            <option>Admin Dashboard</option>
            <option>Web Application</option>
            <option>Automation System</option>
            <option>UI/UX Redesign</option>
          </select>
        </label>
        <fieldset className="service-checks">
          <legend>Services Interested In</legend>
          <div>
            {leadServices.map((service) => (
              <label className="check-pill" key={service}>
                <input type="checkbox" checked={formData.services.includes(service)} onChange={() => toggleService(service)} />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="form-row">
          <label>
            Budget Range
            <select name="budget" value={formData.budget} onChange={updateField}>
              <option value="">Select budget</option>
              {leadBudgets.map((budget) => (
                <option key={budget}>{budget}</option>
              ))}
            </select>
          </label>
          <label>
            Timeline
            <select name="timeline" value={formData.timeline} onChange={updateField}>
              <option value="">Select timeline</option>
              {leadTimelines.map((timeline) => (
                <option key={timeline}>{timeline}</option>
              ))}
            </select>
          </label>
        </div>
        <label>
          How did you find us?
          <select name="source" value={formData.source} onChange={updateField}>
            <option value="">Select source</option>
            {leadSources.map((source) => (
              <option key={source}>{source}</option>
            ))}
          </select>
        </label>
        <label>
          Message
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={updateField}
            placeholder="Tell us about your goals, pages, features, timeline, or current website."
          />
        </label>
        {formError && <p className="form-alert">{formError}</p>}
        {submittedLead && (
          <p className="form-success">
            Lead saved locally as {submittedLead.id}. WhatsApp opened with your project summary.
          </p>
        )}
        <button className="submit-button" type="submit">
          Send on WhatsApp <Send size={18} />
        </button>
      </form>
    </section>
  );
}

function Footer() {
  const socials = [
    { icon: Facebook, href: brand.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: brand.social.instagram, label: 'Instagram' },
    { icon: Linkedin, href: brand.social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: brand.social.github, label: 'GitHub' },
  ];

  return (
    <footer className="footer">
      <div className="footer-brand">
        <Logo href="#home" />
        <p>{brand.tagline}</p>
        <div className="brand-badges">
          <span>India-based</span>
          <span>WhatsApp-first</span>
          <span>Business-focused</span>
        </div>
        <div className="socials">
          {socials.map(({ icon: Icon, href, label }) => (
            <a href={href} key={label} aria-label={`${brand.name} on ${label}`}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h3>Quick Links</h3>
        {['Home', 'Services', 'Projects', 'Pricing', 'About', 'Contact'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </div>
      <div>
        <h3>Services</h3>
        {['Business Websites', 'Admin Dashboards', 'Web Applications', 'UI/UX Design', 'Automation'].map((link) => (
          <a key={link} href="#services">
            {link}
          </a>
        ))}
      </div>
      <div>
        <h3>Contact</h3>
        <a href={`mailto:${brand.email}`}>{brand.email}</a>
        <a href={`tel:${brand.phoneHref}`}>{brand.phone}</a>
        <a href="#contact">Free Consultation</a>
      </div>
      <p className="copyright">Copyright © {brand.founded} {brand.name}. All rights reserved.</p>
    </footer>
  );
}

function Home() {
  const homeTitle = `${brand.name} | Business Website, Dashboard & Web App Development`;
  const homeDescription =
    'RK Web Solutions builds SEO-friendly business websites, admin dashboards, web applications, CRM portals, employee systems, UI/UX redesigns, and automation workflows for growing businesses.';
  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: brand.name,
      url: brand.website,
      image: `${brand.website}/brand-card.svg`,
      description: homeDescription,
      email: brand.email,
      telephone: brand.phoneHref,
      areaServed: ['India'],
      priceRange: 'Custom Quote',
      serviceType: services.map((service) => service.title),
      sameAs: Object.values(brand.social).filter((link) => link.startsWith('http')),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: brand.name,
      url: brand.website,
      potentialAction: {
        '@type': 'ContactAction',
        target: `${brand.website}/#contact`,
        name: 'Get Free Consultation',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'RK Web Solutions Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Service',
        position: index + 1,
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: brand.name,
          url: brand.website,
        },
        areaServed: 'India',
      })),
    },
  ];

  return (
    <>
      <SEO title={homeTitle} description={homeDescription} path="/" jsonLd={homeSchema} />
      <PageLoader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TrustedSection />
        <ServicesSection />
        <SEOContentSection />
        <WhyChooseSection />
        <PortfolioSection />
        <DashboardShowcase />
        <TestimonialsSection />
        <PricingExperience />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <FloatingContactBar />
      <BackToTop />
    </>
  );
}

export default Home;
