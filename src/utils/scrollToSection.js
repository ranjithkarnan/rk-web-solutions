const sectionIds = new Set(['home', 'services', 'projects', 'pricing', 'about', 'contact']);

export function getSectionId(target) {
  if (!target || typeof target !== 'string') return '';
  const sectionId = target.startsWith('#') ? target.slice(1) : target.startsWith('/#') ? target.slice(2) : target;
  return sectionIds.has(sectionId) ? sectionId : '';
}

export function scrollToSection(target) {
  const sectionId = getSectionId(target);
  if (!sectionId) return false;

  if (window.location.pathname !== '/') {
    sessionStorage.setItem('rk-scroll-target', sectionId);
    window.location.assign('/');
    return true;
  }

  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return true;
  }

  const section = document.getElementById(sectionId);
  if (!section) return false;
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return true;
}

export function handleSectionNavigation(event, target, afterNavigate) {
  const sectionId = getSectionId(target);
  if (!sectionId) return false;

  event?.preventDefault();
  afterNavigate?.();
  return scrollToSection(sectionId);
}

export function scrollToStoredSection() {
  const sectionId = sessionStorage.getItem('rk-scroll-target');
  if (!sectionId) return false;

  sessionStorage.removeItem('rk-scroll-target');
  if (window.location.hash) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }

  window.requestAnimationFrame(() => {
    scrollToSection(sectionId);
  });
  return true;
}

export function resetInitialScroll() {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  if (window.location.hash) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}
