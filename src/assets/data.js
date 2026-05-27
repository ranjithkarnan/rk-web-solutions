import {
  Activity,
  BarChart3,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Gauge,
  LayoutDashboard,
  LineChart,
  LockKeyhole,
  MessagesSquare,
  MonitorSmartphone,
  Palette,
  Phone,
  RefreshCcw,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  UsersRound,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';

export const navLinks = ['Home', 'Services', 'Projects', 'Pricing', 'About', 'Contact'];

export const clients = [
  'Apex Clinic',
  'PureDrop RO',
  'FitCore Gym',
  'Nova HR',
  'Urban Services',
  'Bright Retail',
  'Metro Dental',
  'ScaleOps',
];

export const services = [
  {
    icon: BriefcaseBusiness,
    title: 'Business Website Development',
    image: '/service-website.svg',
    description: 'High-converting websites for local brands, startups, clinics, gyms, and service businesses.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard & Admin Panels',
    image: '/service-dashboard.svg',
    description: 'Clean admin systems with roles, analytics, workflows, and fast operational views.',
  },
  {
    icon: Code2,
    title: 'Web App Development',
    image: '/service-webapp.svg',
    description: 'Custom business portals and web applications built around your team processes.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    image: '/service-uiux.svg',
    description: 'Premium interfaces with strong usability, modern visuals, and conversion-focused flows.',
  },
  {
    icon: RefreshCcw,
    title: 'Website Redesign',
    image: '/service-redesign.svg',
    description: 'Upgrade outdated sites into modern, responsive, and trust-building digital experiences.',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    image: '/service-automation.svg',
    description: 'Automate forms, approvals, lead routing, leave requests, CRM tasks, and reports.',
  },
  {
    icon: SearchCheck,
    title: 'SEO Friendly Websites',
    image: '/service-seo.svg',
    description: 'Semantic, fast, search-ready websites with clean metadata and performance foundations.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Mobile Responsive Design',
    image: '/service-mobile.svg',
    description: 'Interfaces that feel polished on phones, tablets, laptops, and large desktop screens.',
  },
];

export const features = [
  { icon: Sparkles, title: 'Modern UI/UX', text: 'Premium layouts that make your business look trusted and current.' },
  { icon: Zap, title: 'Fast Performance', text: 'Optimized pages and interactions that keep visitors moving.' },
  { icon: Smartphone, title: 'Mobile Responsive', text: 'Every section is shaped for real mobile usage from day one.' },
  { icon: LockKeyhole, title: 'Secure Systems', text: 'Careful structure for authenticated dashboards and private data.' },
  { icon: SearchCheck, title: 'SEO Optimized', text: 'Clean technical foundations for stronger search visibility.' },
  { icon: BriefcaseBusiness, title: 'Business Focused Solutions', text: 'Built around sales, operations, leads, and team productivity.' },
  { icon: LayoutDashboard, title: 'Premium Dashboard Design', text: 'Readable analytics, smart widgets, and polished admin flows.' },
  { icon: MessagesSquare, title: 'Ongoing Support', text: 'Support after launch for improvements, fixes, and scale-ups.' },
];

export const projects = [
  {
    slug: 'leave-management-system',
    title: 'Leave Management System',
    description: 'Approval workflows, employee balances, manager views, and automated leave reporting.',
    tags: ['HR', 'Dashboard', 'Automation'],
    tone: 'blue',
  },
  {
    slug: 'ro-water-purifier-website',
    title: 'RO Water Purifier Website',
    description: 'Lead-focused product pages, service booking, WhatsApp actions, and local SEO structure.',
    tags: ['Website', 'SEO', 'Local Business'],
    tone: 'cyan',
  },
  {
    slug: 'employee-dashboard',
    title: 'Employee Dashboard',
    description: 'Team directory, attendance widgets, tasks, announcements, and role-based access.',
    tags: ['Portal', 'Employees', 'Admin'],
    tone: 'violet',
  },
  {
    slug: 'business-analytics-dashboard',
    title: 'Business Analytics Dashboard',
    description: 'Revenue cards, conversion charts, activity feeds, and executive reporting modules.',
    tags: ['Analytics', 'SaaS', 'Reports'],
    tone: 'green',
  },
  {
    slug: 'clinic-management-portal',
    title: 'Clinic Management Portal',
    description: 'Appointments, patient records, staff coordination, and clinic performance metrics.',
    tags: ['Clinic', 'Portal', 'Scheduling'],
    tone: 'pink',
  },
  {
    slug: 'gym-management-website',
    title: 'Gym Management Website',
    description: 'Membership landing pages, class schedules, trainer profiles, and inquiry capture.',
    tags: ['Gym', 'Website', 'CRM'],
    tone: 'amber',
  },
];

export const caseStudies = [
  {
    slug: 'leave-management-system',
    title: 'Leave Management System',
    category: 'HR Dashboard & Automation',
    intro: 'A modern employee leave portal designed for HR teams that need transparent approvals, balances, and reporting without spreadsheet chaos.',
    challenge: 'The business needed to replace manual leave requests, scattered approvals, and unclear employee balance tracking with one dependable workflow.',
    solution: 'We designed a role-based dashboard for employees, managers, and HR admins with leave balances, approval queues, calendar visibility, and monthly exports.',
    impact: ['60% faster approval workflow', 'Centralized employee leave records', 'Clear manager and HR visibility'],
    features: ['Employee login portal', 'Manager approval queue', 'Leave balance tracking', 'Automated notifications', 'Monthly HR reports', 'Role-based dashboard views'],
    tech: ['React', 'Admin Dashboard', 'Automation', 'Responsive UI'],
    timeline: '3-5 weeks',
    metric: '60%',
    metricLabel: 'Approval time saved',
  },
  {
    slug: 'ro-water-purifier-website',
    title: 'RO Water Purifier Website',
    category: 'Local Business Website',
    intro: 'A lead-focused service website for an RO water purifier company built to convert local searches into WhatsApp enquiries and service bookings.',
    challenge: 'The business needed trust, product clarity, local SEO structure, and a direct enquiry flow for installation, repair, and maintenance requests.',
    solution: 'We created a premium responsive website with service pages, product highlights, WhatsApp CTAs, enquiry capture, and SEO-friendly content blocks.',
    impact: ['More qualified local enquiries', 'Better service presentation', 'Fast WhatsApp lead capture'],
    features: ['Product/service sections', 'WhatsApp enquiry buttons', 'SEO landing structure', 'Mobile-first layout', 'Contact form', 'Trust and testimonial sections'],
    tech: ['React', 'SEO', 'WhatsApp Leads', 'Responsive Website'],
    timeline: '1-2 weeks',
    metric: '2.4x',
    metricLabel: 'Lead enquiry potential',
  },
  {
    slug: 'employee-dashboard',
    title: 'Employee Dashboard',
    category: 'Internal Team Portal',
    intro: 'A clean employee command center for attendance, announcements, tasks, documents, and team coordination.',
    challenge: 'Teams were switching between too many tools and lacked a single place for daily updates, tasks, and employee information.',
    solution: 'We built a modular dashboard experience with quick stats, announcements, team cards, task lists, and role-sensitive views.',
    impact: ['Improved team visibility', 'Faster daily updates', 'Cleaner internal communication'],
    features: ['Task widgets', 'Team directory', 'Attendance snapshots', 'Announcements', 'Document shortcuts', 'Department filters'],
    tech: ['React', 'Dashboard UI', 'Employee Portal', 'UX Design'],
    timeline: '3-4 weeks',
    metric: '35%',
    metricLabel: 'Less admin follow-up',
  },
  {
    slug: 'business-analytics-dashboard',
    title: 'Business Analytics Dashboard',
    category: 'Analytics & Reporting',
    intro: 'A futuristic analytics dashboard that turns sales, operations, and performance data into quick executive decisions.',
    challenge: 'The business needed readable analytics instead of long reports, manual calculations, and delayed operational visibility.',
    solution: 'We designed analytics cards, revenue charts, activity feeds, filters, and executive report modules with a polished SaaS-style interface.',
    impact: ['Faster reporting cycles', 'Cleaner performance tracking', 'Better leadership visibility'],
    features: ['Revenue widgets', 'Conversion charts', 'Activity feed', 'Date filters', 'Executive summaries', 'Export-ready reports'],
    tech: ['React', 'Charts', 'Analytics UI', 'Business Intelligence'],
    timeline: '4-6 weeks',
    metric: '70%',
    metricLabel: 'Reporting effort reduced',
  },
  {
    slug: 'clinic-management-portal',
    title: 'Clinic Management Portal',
    category: 'Healthcare Portal',
    intro: 'A clinic operations portal for appointments, staff coordination, patient records, and daily performance tracking.',
    challenge: 'The clinic needed a smoother way to handle appointment flow, staff tasks, and patient-facing communication.',
    solution: 'We planned a secure dashboard with appointment views, patient summaries, staff modules, reminders, and clinic analytics.',
    impact: ['Smoother appointment flow', 'Better patient follow-up', 'Centralized clinic operations'],
    features: ['Appointment dashboard', 'Patient summaries', 'Staff task views', 'Reminder workflow', 'Clinic analytics', 'Mobile-friendly admin UI'],
    tech: ['React', 'Portal UX', 'Dashboard', 'Secure Workflows'],
    timeline: '5-7 weeks',
    metric: '45%',
    metricLabel: 'Operational clarity improved',
  },
  {
    slug: 'gym-management-website',
    title: 'Gym Management Website',
    category: 'Fitness Website & CRM',
    intro: 'A modern gym website experience built for membership enquiries, class schedules, trainer profiles, and local brand trust.',
    challenge: 'The gym needed a sharper online presence and a simple lead flow for membership enquiries, trial sessions, and trainer information.',
    solution: 'We created a responsive website concept with conversion sections, schedule blocks, WhatsApp CTAs, trainer cards, and enquiry capture.',
    impact: ['More membership enquiries', 'Clearer class presentation', 'Premium local brand image'],
    features: ['Membership CTA sections', 'Class schedules', 'Trainer profiles', 'WhatsApp leads', 'Mobile-first design', 'Local SEO structure'],
    tech: ['React', 'Landing Page', 'CRM Leads', 'Responsive UI'],
    timeline: '1-3 weeks',
    metric: '3x',
    metricLabel: 'CTA visibility increase',
  },
];

export const processSteps = [
  'Requirement Discussion',
  'UI/UX Planning',
  'Development',
  'Testing & QA',
  'Deployment',
  'Support & Maintenance',
];

export const testimonials = [
  {
    name: 'Anika Sharma',
    role: 'Clinic Owner',
    review: 'RK Web Solutions turned our outdated clinic website into a polished lead machine. Patients now book faster and our team handles requests with less friction.',
  },
  {
    name: 'Rohit Mehta',
    role: 'RO Service Founder',
    review: 'The website looks premium, loads fast, and connects directly with WhatsApp. We started getting more serious local enquiries within weeks.',
  },
  {
    name: 'Kavya Nair',
    role: 'HR Manager',
    review: 'Our leave dashboard is clean and practical. Managers approve requests quickly, employees can see balances, and reporting is much easier.',
  },
];

export const pricing = [
  {
    name: 'Starter Website',
    price: 'Custom Quote',
    description: 'For businesses that need a strong, fast launch presence.',
    features: ['Business landing page', 'Mobile responsive design', 'Contact form', 'Basic SEO', 'WhatsApp button'],
  },
  {
    name: 'Business Pro',
    price: 'Most Popular',
    recommended: true,
    description: 'For growing companies that need a premium website plus operations tools.',
    features: ['Multi-page website', 'Premium UI/UX', 'Admin dashboard', 'SEO optimization', 'Analytics integration', 'Support'],
  },
  {
    name: 'Enterprise Solution',
    price: 'Custom Scope',
    description: 'For teams that need a tailored business application or internal system.',
    features: ['Custom web application', 'Dashboard system', 'Automation workflow', 'CRM/Employee portal', 'Advanced security', 'Long-term support'],
  },
];

export const stats = [
  { label: 'Projects Completed', value: 48, suffix: '+' },
  { label: 'Happy Clients', value: 32, suffix: '+' },
  { label: 'Business Solutions', value: 18, suffix: '+' },
  { label: 'UI Designs Created', value: 75, suffix: '+' },
];

export const faqs = [
  {
    q: 'How long does a website take?',
    a: 'A focused landing page can take 5-10 business days. Multi-page sites, dashboards, and custom systems depend on scope and integrations.',
  },
  {
    q: 'Do you provide redesign services?',
    a: 'Yes. We can modernize your existing website with improved UI, better mobile experience, clearer messaging, and stronger conversion sections.',
  },
  {
    q: 'Can you build admin dashboards?',
    a: 'Yes. We build dashboards for analytics, employees, CRM, leave management, operations, and custom internal workflows.',
  },
  {
    q: 'Do you provide support after delivery?',
    a: 'Yes. We provide post-launch support, improvements, bug fixes, and ongoing maintenance based on your business needs.',
  },
  {
    q: 'Can you connect WhatsApp/contact forms?',
    a: 'Yes. We can connect WhatsApp buttons, inquiry forms, email alerts, lead capture flows, and analytics tracking.',
  },
  {
    q: 'Do you build custom business systems?',
    a: 'Yes. We build custom portals, automation systems, CRM tools, employee dashboards, and web applications for specific processes.',
  },
];

export const dashboardMetrics = [
  { icon: LineChart, label: 'Monthly Leads', value: '1,284', change: '+24%' },
  { icon: UsersRound, label: 'Active Employees', value: '146', change: '+8%' },
  { icon: CheckCircle2, label: 'Tasks Closed', value: '892', change: '+31%' },
  { icon: Gauge, label: 'System Health', value: '99.9%', change: 'Live' },
];

export const dashboardTools = [Activity, Cpu, ShieldCheck, Bot, BarChart3, Rocket, Wrench, Blocks, Star];

export const dashboardViews = [
  {
    id: 'overview',
    label: 'Overview',
    title: 'Operations Hub',
    status: 'Live',
    metrics: [
      { icon: LineChart, label: 'Monthly Leads', value: '1,284', change: '+24%' },
      { icon: UsersRound, label: 'Active Employees', value: '146', change: '+8%' },
      { icon: CheckCircle2, label: 'Tasks Closed', value: '892', change: '+31%' },
      { icon: Gauge, label: 'System Health', value: '99.9%', change: 'Live' },
    ],
    chartLabel: 'Lead Pipeline',
    chartHint: 'Updated now',
    chart: [22, 48, 34, 68, 54, 82, 72, 92],
    notifications: ['New clinic lead assigned', 'Leave request approved', 'CRM follow-up due'],
    teams: [
      { name: 'Sales', score: 86, active: true },
      { name: 'HR', score: 89 },
      { name: 'Support', score: 92 },
      { name: 'Admin', score: 95 },
    ],
  },
  {
    id: 'crm',
    label: 'CRM',
    title: 'CRM Lead Desk',
    status: '12 hot leads',
    metrics: [
      { icon: MessagesSquare, label: 'New Enquiries', value: '64', change: '+18%' },
      { icon: Phone, label: 'Follow-ups Due', value: '21', change: 'Today' },
      { icon: BriefcaseBusiness, label: 'Deals Open', value: '38', change: '+11%' },
      { icon: SearchCheck, label: 'Conversion Rate', value: '27%', change: '+5%' },
    ],
    chartLabel: 'Lead Quality',
    chartHint: 'Last 7 days',
    chart: [34, 42, 57, 46, 68, 76, 71, 88],
    notifications: ['Gym owner requested pricing', 'RO service lead needs call', 'Clinic website proposal viewed'],
    teams: [
      { name: 'New', score: 64, active: true },
      { name: 'Qualified', score: 48 },
      { name: 'Proposal', score: 27 },
      { name: 'Won', score: 14 },
    ],
  },
  {
    id: 'hr',
    label: 'HR',
    title: 'Employee Portal',
    status: 'Approvals live',
    metrics: [
      { icon: UsersRound, label: 'Employees', value: '146', change: '+6' },
      { icon: CheckCircle2, label: 'Leaves Approved', value: '42', change: 'This month' },
      { icon: Activity, label: 'Attendance', value: '96%', change: '+4%' },
      { icon: ShieldCheck, label: 'Policy Reads', value: '118', change: '82%' },
    ],
    chartLabel: 'Leave Trends',
    chartHint: 'Team usage',
    chart: [18, 36, 28, 44, 32, 58, 39, 62],
    notifications: ['Priya submitted leave request', '3 birthdays this week', 'Attendance export is ready'],
    teams: [
      { name: 'Present', score: 96, active: true },
      { name: 'Remote', score: 18 },
      { name: 'On Leave', score: 7 },
      { name: 'Pending', score: 5 },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    title: 'Service Command',
    status: 'SLA healthy',
    metrics: [
      { icon: Wrench, label: 'Tickets Open', value: '18', change: '-12%' },
      { icon: Gauge, label: 'Avg Response', value: '11m', change: 'Fast' },
      { icon: Star, label: 'Rating', value: '4.8', change: '+0.3' },
      { icon: Bot, label: 'Auto Replies', value: '214', change: '+41%' },
    ],
    chartLabel: 'Ticket Resolution',
    chartHint: 'Live queue',
    chart: [42, 54, 46, 72, 63, 81, 76, 90],
    notifications: ['High priority ticket resolved', 'WhatsApp bot answered 18 leads', 'Monthly support report generated'],
    teams: [
      { name: 'Open', score: 18, active: true },
      { name: 'In Progress', score: 9 },
      { name: 'Resolved', score: 74 },
      { name: 'Escalated', score: 2 },
    ],
  },
];
