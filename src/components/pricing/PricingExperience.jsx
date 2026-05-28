import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Download,
  FileText,
  Gauge,
  HelpCircle,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  Palette,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { fadeUp, premiumCardHover, staggerContainer } from '../../animations/variants';
import { getWhatsAppLink } from '../../assets/whatsapp';
import { handleSectionNavigation } from '../../utils/scrollToSection';

const pricingPlans = [
  {
    name: 'Starter Website',
    price: '₹7,000 - ₹10,000',
    description: 'Affordable launch pricing for businesses that need a clean and trustworthy online presence.',
    bestFor: 'Small businesses, personal brands, local shops, clinics, gyms, and service providers.',
    features: [
      'Responsive business website',
      'Up to 5 sections/pages',
      'Modern clean UI',
      'Contact form',
      'WhatsApp button',
      'Basic SEO setup',
      'Mobile optimization',
      'Deployment support',
    ],
  },
  {
    name: 'Business Pro',
    price: '₹25,000 - ₹30,000',
    badge: 'Most Popular',
    description: 'Ideal for growing businesses that need premium branding, better lead generation, and a modern web presence.',
    bestFor: 'Growing businesses that need premium branding, stronger trust, and lead-focused website sections.',
    featured: true,
    features: [
      'Premium UI/UX design',
      'Multi-page website',
      'Smooth animations',
      'Lead-focused sections',
      'Contact form',
      'WhatsApp integration',
      'SEO-friendly structure',
      'Performance optimization',
      'Google Maps section',
      'Analytics setup',
      'Deployment support',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise Dashboard',
    price: '₹50,000 - ₹75,000',
    description: 'Advanced business systems for teams that need portals, dashboards, automation, or custom web applications.',
    bestFor: 'Businesses that need admin panels, dashboards, portals, automation, or custom web applications.',
    features: [
      'Admin dashboard',
      'Login/authentication',
      'Database integration',
      'Reports/cards/charts',
      'CRM/employee portal features',
      'API integration',
      'Role-based access',
      'Business automation workflow',
      'Testing & QA',
      'Deployment support',
    ],
  },
];

const startupFriendlyCards = [
  {
    icon: Sparkles,
    title: 'Introductory Launch Pricing',
    text: 'We are offering startup-friendly pricing now to build long-term client relationships with our first few clients.',
  },
  {
    icon: LayoutDashboard,
    title: 'Complete Project Foundation',
    text: 'Every project includes planning, UI design, responsive development, testing, and deployment support.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality With Business Value',
    text: 'We focus on clean design, lead generation, mobile performance, and future scalability from day one.',
  },
  {
    icon: BarChart3,
    title: 'Grow Before Prices Increase',
    text: 'Prices will increase as our portfolio, systems, and client base grow, so early clients get stronger value.',
  },
];

const valueCards = [
  { icon: Palette, title: 'Modern UI/UX Design', text: 'Premium layouts improve trust, clarity, and conversion across every key page.' },
  { icon: Smartphone, title: 'Mobile Responsiveness', text: 'Your site works beautifully for customers browsing from phones and tablets.' },
  { icon: SearchCheck, title: 'SEO Optimization', text: 'Clean structure, metadata, and performance foundations help Google visibility.' },
  { icon: Zap, title: 'Fast Performance', text: 'Optimized pages keep visitors engaged and reduce bounce from slow loading.' },
  { icon: MessageCircle, title: 'WhatsApp & Lead Systems', text: 'Contact flows, WhatsApp CTAs, and lead forms help convert visitors faster.' },
  { icon: Settings2, title: 'Business Automation', text: 'Custom workflows reduce manual work and make operations easier to manage.' },
  { icon: TestTube2, title: 'Testing & Quality Assurance', text: 'Responsive checks and QA reduce broken layouts, errors, and launch risk.' },
  { icon: Wrench, title: 'Ongoing Support & Maintenance', text: 'Regular fixes and improvements keep your website secure and updated.' },
];

const calculatorOptions = [
  { id: 'responsive', label: 'Responsive website', tier: 'basic', price: 0 },
  { id: 'contact', label: 'Contact form', tier: 'basic', price: 0 },
  { id: 'whatsapp', label: 'WhatsApp integration', tier: 'basic', price: 0 },
  { id: 'seo', label: 'Basic SEO', tier: 'basic', price: 0 },
  { id: 'deployment', label: 'Deployment support', tier: 'basic', price: 0 },
  { id: 'premium-ui', label: 'Premium UI/UX', tier: 'premium', price: 5000 },
  { id: 'multi-page', label: 'Multi-page website', tier: 'premium', price: 6000 },
  { id: 'animations', label: 'Smooth animations', tier: 'premium', price: 5000 },
  { id: 'maps', label: 'Google Maps section', tier: 'premium', price: 3000 },
  { id: 'analytics', label: 'Analytics setup', tier: 'premium', price: 3000 },
  { id: 'performance', label: 'Performance optimization', tier: 'premium', price: 5000 },
  { id: 'dashboard', label: 'Admin dashboard', tier: 'enterprise', price: 30000 },
  { id: 'auth', label: 'Authentication/login', tier: 'enterprise', price: 12000 },
  { id: 'database', label: 'Database integration', tier: 'enterprise', price: 18000 },
  { id: 'reports', label: 'Reports & charts', tier: 'enterprise', price: 12000 },
  { id: 'crm', label: 'CRM / employee portal', tier: 'enterprise', price: 25000 },
  { id: 'automation', label: 'Automation workflow', tier: 'enterprise', price: 20000 },
];

const comparisonRows = [
  ['Mobile Responsive', false, true],
  ['SEO Optimized', false, true],
  ['Modern UI/UX', false, true],
  ['Performance Optimization', false, true],
  ['Dashboard Support', false, true],
  ['Testing & QA', false, true],
  ['Maintenance', false, true],
  ['WhatsApp Integration', true, true],
  ['Business Branding', false, true],
  ['Long-Term Scalability', false, true],
];

const processSteps = ['Requirement Discussion', 'UI/UX Planning', 'Development', 'Testing & QA', 'Deployment', 'Maintenance & Support'];

const pricingFaqs = [
  ['Why are professional websites expensive?', 'Professional websites include strategy, UI/UX, responsive design, performance, SEO structure, testing, deployment, and support.'],
  ['Why not choose cheap templates?', 'Cheap templates can be fast to launch, but they often miss branding, scalability, SEO quality, performance tuning, and business-specific workflows.'],
  ['What affects website pricing?', 'Pages, design complexity, animations, forms, dashboards, backend systems, integrations, testing, hosting support, and maintenance all affect pricing.'],
  ['Why is maintenance important?', 'Maintenance keeps your website updated, secure, fast, and aligned with changing business needs.'],
  ['Do you provide support after launch?', 'Yes. RK Web Solutions provides support for fixes, content updates, improvements, and long-term growth.'],
  ['Can you build dashboards and admin systems?', 'Yes. We build dashboards, CRM systems, employee portals, leave systems, booking tools, and custom business workflows.'],
  ['Can pricing change based on requirements?', 'Yes. Final pricing depends on project complexity, custom features, integrations, and timeline.'],
];

function PricingCards() {
  return (
    <motion.div className="premium-pricing-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {pricingPlans.map((plan) => (
        <motion.article
          className={`premium-price-card ${plan.featured ? 'premium-price-card-featured' : ''}`}
          key={plan.name}
          variants={{ ...fadeUp, ...premiumCardHover }}
          whileHover="hover"
        >
          {plan.badge && <span className="premium-badge">{plan.badge}</span>}
          <h3>{plan.name}</h3>
          <strong>{plan.price}</strong>
          <p>{plan.description}</p>
          <div className="plan-best-for">
            <span>Best for</span>
            <p>{plan.bestFor}</p>
          </div>
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>
                <Check size={17} /> {feature}
              </li>
            ))}
          </ul>
          <div className="pricing-card-actions">
            <a href="#contact" className={plan.featured ? 'btn btn-primary' : 'btn btn-ghost'} onClick={(event) => handleSectionNavigation(event, 'contact')}>
              Get Free Consultation <ArrowRight size={18} />
            </a>
            <a
              href={getWhatsAppLink(`Hi RK Web Solutions, I want to discuss the ${plan.name} package.`)}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Discuss Project <MessageCircle size={18} />
            </a>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

function PricingNotes() {
  return (
    <motion.div className="pricing-notes" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
      <p>Pricing may vary based on business requirements, design complexity, integrations, and custom functionality.</p>
      <span>Introductory pricing available for our first few clients.</span>
    </motion.div>
  );
}

function StartupFriendlySection() {
  return (
    <div className="pricing-subsection startup-friendly-section">
      <div className="pricing-subhead">
        <span className="eyebrow">Startup-Friendly</span>
        <h2>Why Our Pricing Is Startup-Friendly</h2>
        <p>Introductory business pricing gives early clients a professional digital foundation without compromising quality.</p>
      </div>
      <motion.div className="startup-pricing-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        {startupFriendlyCards.map(({ icon: Icon, title, text }) => (
          <motion.article className="startup-pricing-card" key={title} variants={fadeUp}>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

function ValueSection() {
  return (
    <div className="pricing-subsection">
      <div className="pricing-subhead">
        <span className="eyebrow">Value</span>
        <h2>Why Businesses Invest in Professional Websites</h2>
        <p>A website is more than design - it's your digital business identity.</p>
      </div>
      <motion.div className="pricing-value-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        {valueCards.map(({ icon: Icon, title, text }) => (
          <motion.article className="pricing-value-card" key={title} variants={fadeUp}>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

function PricingEstimator() {
  const [pages, setPages] = useState(5);
  const [selected, setSelected] = useState(['whatsapp', 'contact', 'seo']);
  const estimate = useMemo(() => {
    const selectedOptions = calculatorOptions.filter((item) => selected.includes(item.id));
    const hasEnterprise = selectedOptions.some((item) => item.tier === 'enterprise');
    const hasPremium = selectedOptions.some((item) => item.tier === 'premium');
    const premiumCount = selectedOptions.filter((item) => item.tier === 'premium').length;

    if (hasEnterprise) {
      return {
        packageName: 'Enterprise Dashboard',
        range: '₹50,000 - ₹75,000',
        complexity: 'Advanced',
      };
    }

    if (hasPremium || pages > 5 || premiumCount >= 2) {
      return {
        packageName: 'Business Pro',
        range: '₹25,000 - ₹30,000',
        complexity: 'Medium',
      };
    }

    return {
      packageName: 'Starter Website',
      range: '₹7,000 - ₹10,000',
      complexity: 'Simple',
    };
  }, [pages, selected]);

  const toggle = (id) => {
    setSelected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  return (
    <div className="pricing-estimator">
      <div>
        <span className="eyebrow">Estimator</span>
        <h2>Interactive Pricing Estimator</h2>
        <p>Select common website and business features to understand a realistic startup-friendly pricing range.</p>
        <p className="estimator-small-note">Final pricing may vary based on business requirements, design complexity, integrations, and custom functionality.</p>
      </div>
      <div className="estimator-card">
        <label className="page-slider">
          <span>Number of pages</span>
          <strong>{pages}</strong>
          <input type="range" min="1" max="20" value={pages} onChange={(event) => setPages(Number(event.target.value))} />
        </label>
        <div className="estimator-options">
          {calculatorOptions.map((option) => (
            <button className={selected.includes(option.id) ? 'estimator-option estimator-option-active' : 'estimator-option'} key={option.id} type="button" onClick={() => toggle(option.id)}>
              <span>{option.label}</span>
              <small>{option.price > 0 ? `+ Rs. ${option.price.toLocaleString('en-IN')}` : 'Included in starter'}</small>
            </button>
          ))}
        </div>
        <div className="estimate-total">
          <span>Estimated Range</span>
          <motion.strong key={estimate.range} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            {estimate.range}
          </motion.strong>
          <p>
            Recommended package: <strong>{estimate.packageName}</strong> | Complexity: {estimate.complexity}
          </p>
        </div>
      </div>
    </div>
  );
}
function ComparisonTable() {
  return (
    <div className="pricing-subsection">
      <div className="pricing-subhead">
        <span className="eyebrow">Comparison</span>
        <h2>Why Professional Websites Perform Better</h2>
      </div>
      <div className="comparison-table">
        <div className="comparison-row comparison-head">
          <span>Feature</span>
          <span>Cheap Website</span>
          <span>RK Web Solutions</span>
        </div>
        {comparisonRows.map(([label, cheap, rk]) => (
          <div className="comparison-row" key={label}>
            <span>{label}</span>
            <span className={cheap ? 'comparison-yes' : 'comparison-no'}>{cheap ? <CheckCircle2 size={19} /> : <X size={19} />}</span>
            <span className={rk ? 'comparison-yes' : 'comparison-no'}>{rk ? <CheckCircle2 size={19} /> : <X size={19} />}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeforeAfterShowcase() {
  return (
    <div className="pricing-subsection transformation-section">
      <div className="pricing-subhead">
        <span className="eyebrow">Transformation</span>
        <h2>Website Transformation Showcase</h2>
        <p>See how an outdated business website becomes a premium, lead-focused digital experience.</p>
      </div>

      <div className="transformation-showcase">
        <motion.article className="transform-card old-transform-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <span className="transform-label transform-label-old">Before</span>
          <h3>Outdated Website</h3>
          <div className="old-site-preview">
            <div className="old-site-header" />
            <div className="old-site-body">
              <strong>Business Name</strong>
              <p>Welcome to our website. We provide services for customers.</p>
              <div className="old-site-lines">
                <i />
                <i />
                <i />
              </div>
              <button type="button">Click Here</button>
            </div>
          </div>
          <ul>
            <li>Weak CTA</li>
            <li>Poor hierarchy</li>
            <li>Outdated business appearance</li>
          </ul>
        </motion.article>

        <motion.div className="transform-center" initial={{ opacity: 0, scale: 0.86 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <div className="transform-orb">
            <Sparkles size={24} />
          </div>
          <strong>Transformed by RK Web Solutions</strong>
          <ArrowRight size={34} />
        </motion.div>

        <motion.article className="transform-card new-transform-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <span className="transform-label transform-label-new">After</span>
          <h3>Premium RK Redesign</h3>
          <div className="new-site-preview">
            <div className="new-site-header">
              <span>RK</span>
              <button type="button">WhatsApp CTA</button>
            </div>
            <div className="new-site-hero">
              <strong>Modern Business Website</strong>
              <p>Premium branding, lead-focused sections, fast performance, and mobile-first UI.</p>
            </div>
            <div className="new-site-grid">
              <span>Services</span>
              <span>Leads</span>
              <span>SEO</span>
            </div>
          </div>
          <ul>
            <li>WhatsApp CTA</li>
            <li>Lead-focused layout</li>
            <li>Premium modern branding</li>
          </ul>
        </motion.article>
      </div>

      <div className="transformation-benefits">
        {[
          ['Poor Mobile UI', 'Mobile-First Responsive Design'],
          ['Weak Branding', 'Premium Modern UI/UX'],
          ['No Lead Generation', 'WhatsApp & Contact CTA'],
          ['Slow Website', 'Optimized Fast Performance'],
          ['Generic Layout', 'Professional Business Identity'],
        ].map(([before, after]) => (
          <motion.div key={before} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <span className="bad-point">X {before}</span>
            <ArrowRight size={17} />
            <span className="good-point">
              <CheckCircle2 size={16} /> {after}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PricingProcess() {
  return (
    <div className="pricing-subsection">
      <div className="pricing-subhead">
        <span className="eyebrow">Process</span>
        <h2>How We Build Premium Digital Solutions</h2>
      </div>
      <div className="pricing-timeline">
        {processSteps.map((step, index) => (
          <motion.div className="pricing-timeline-card" key={step} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PricingFaq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="pricing-subsection">
      <div className="pricing-subhead">
        <span className="eyebrow">FAQ</span>
        <h2>Pricing Questions Business Owners Ask</h2>
      </div>
      <div className="pricing-faq-list">
        {pricingFaqs.map(([question, answer], index) => (
          <div className={`pricing-faq-item ${open === index ? 'pricing-faq-open' : ''}`} key={question}>
            <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
              <span>{question}</span>
              <HelpCircle size={20} />
            </button>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingPdfGuide() {
  return (
    <motion.div className="pricing-pdf-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
      <div className="pdf-preview-icon">
        <FileText size={30} />
        <span>PDF</span>
      </div>
      <div>
        <h2>Download Pricing Guide PDF</h2>
        <p>Understand what goes into building a modern business website and why quality matters.</p>
      </div>
      <a className="btn btn-primary" href="/rk-web-solutions-pricing-guide.pdf" target="_blank" rel="noreferrer">
        <Download size={18} /> Download Pricing Guide PDF
      </a>
    </motion.div>
  );
}

function PricingFinalCta() {
  return (
    <div className="pricing-final-cta">
      <span className="eyebrow">Start</span>
      <h2>Ready to Build Your Business Digitally?</h2>
      <p>Let's create a modern website or dashboard solution that helps your business grow.</p>
      <div>
        <a className="btn btn-primary" href="#contact" onClick={(event) => handleSectionNavigation(event, 'contact')}>
          Book Free Consultation <ArrowRight size={18} />
        </a>
        <a className="btn btn-ghost" href={getWhatsAppLink('Hi RK Web Solutions, I want to discuss a website or dashboard project.')} target="_blank" rel="noreferrer">
          Chat on WhatsApp <MessageCircle size={18} />
        </a>
      </div>
    </div>
  );
}

function PricingExperience() {
  return (
    <section id="pricing" className="pricing-experience section-shell">
      <div className="pricing-hero-head">
        <span className="eyebrow">Startup Launch Pricing</span>
        <h2>Professional Websites at Introductory Business Pricing</h2>
        <p>Affordable for early clients, but still built with strategy, UI/UX, responsive development, SEO foundations, testing, performance, and deployment support.</p>
      </div>
      <PricingCards />
      <PricingNotes />
      <StartupFriendlySection />
      <ValueSection />
      <PricingEstimator />
      <ComparisonTable />
      <BeforeAfterShowcase />
      <PricingProcess />
      <PricingFaq />
      <PricingFinalCta />
    </section>
  );
}

export default PricingExperience;
