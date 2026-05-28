import fs from 'node:fs';

const outputPath = 'public/rk-web-solutions-pricing-guide.pdf';

const lines = [
  'RK Web Solutions - Website Pricing Guide',
  '',
  'Section 1: Why Website Pricing Matters',
  'A professional website is an investment, not just an expense. It helps businesses build trust, attract customers, show services and products, collect inquiries, and improve brand value.',
  '',
  'Section 2: What Affects Website Cost',
  '- Number of pages',
  '- UI/UX design complexity',
  '- Animation and interaction level',
  '- Mobile responsiveness',
  '- Contact form / WhatsApp integration',
  '- SEO setup',
  '- Admin dashboard requirement',
  '- Backend/API/database requirement',
  '- Hosting/domain setup support',
  '- Testing and maintenance',
  '',
  'Section 3: Suggested Pricing Packages',
  '',
  'Basic Website',
  'Price Range: Rs. 10,000 - Rs. 25,000',
  'Best for: Small businesses, personal brands, service providers.',
  'Includes: 1 to 5 pages, responsive design, contact section, WhatsApp button, basic SEO, basic deployment support.',
  '',
  'Modern Animated Website',
  'Price Range: Rs. 25,000 - Rs. 60,000',
  'Best for: Growing businesses, startups, clinics, gyms, product/service companies.',
  'Includes: Premium UI/UX, animations, multiple sections/pages, responsive layout, contact form, WhatsApp integration, SEO-friendly structure, performance optimization, deployment support.',
  '',
  'Admin Dashboard / Web Application',
  'Price Range: Rs. 40,000 - Rs. 1,00,000+',
  'Best for: Business management systems, employee portals, CRM systems, leave management systems, booking/lead management systems.',
  'Includes: Login/authentication, admin dashboard, database integration, reports/cards/charts, role-based access, API integration, testing, deployment support.',
  '',
  'Maintenance',
  'Price Range: Rs. 2,000 - Rs. 10,000/month',
  'Includes: Content updates, bug fixes, minor UI changes, security checks, backup support, performance monitoring, monthly improvement suggestions.',
  '',
  'Section 4: Why Not Choose the Cheapest Website',
  'Cheap websites may look simple initially, but they often miss mobile responsiveness, SEO, performance, proper testing, branding, security, and long-term support. A poorly built website can reduce customer trust and affect business growth.',
  '',
  'Section 5: Our Promise',
  'RK Web Solutions focuses on modern design, clean code, mobile responsiveness, business-focused UI, testing and quality, long-term support, and scalable solutions.',
  '',
  'Section 6: Contact CTA',
  'Need a website for your business? Let us build a modern digital presence for your brand.',
  'Contact: info@rk-web-solutions.com',
  'WhatsApp: +91 98844 97990',
  'Website: rkwebsolutions.com',
];

function escapePdfText(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

const content = [
  'BT',
  '/F1 18 Tf',
  '50 790 Td',
  '24 TL',
  ...lines.flatMap((line, index) => {
    const font = index === 0 ? ['/F1 18 Tf'] : line.startsWith('Section') || ['Basic Website', 'Modern Animated Website', 'Admin Dashboard / Web Application', 'Maintenance'].includes(line) ? ['/F1 12 Tf'] : ['/F1 10 Tf'];
    return [...font, `(${escapePdfText(line)}) Tj`, 'T*'];
  }),
  'ET',
].join('\n');

const objects = [
  '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
  '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
  '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n',
  '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  `5 0 obj\n<< /Length ${Buffer.byteLength(content, 'utf8')} >>\nstream\n${content}\nendstream\nendobj\n`,
];

let pdf = '%PDF-1.4\n';
const offsets = [0];

for (const object of objects) {
  offsets.push(Buffer.byteLength(pdf, 'utf8'));
  pdf += object;
}

const xrefOffset = Buffer.byteLength(pdf, 'utf8');
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
for (const offset of offsets.slice(1)) {
  pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

fs.writeFileSync(outputPath, pdf);
console.log(`Generated ${outputPath}`);
