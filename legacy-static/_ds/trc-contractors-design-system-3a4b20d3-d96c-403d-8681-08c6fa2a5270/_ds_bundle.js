/* @ds-bundle: {"format":4,"namespace":"TRCContractorsDesignSystem_3a4b20","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Footer","sourcePath":"components/core/Footer.jsx"},{"name":"Nav","sourcePath":"components/core/Nav.jsx"},{"name":"ProjectCard","sourcePath":"components/core/ProjectCard.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"07f352bf68c5","components/core/Footer.jsx":"48033e9f3ffe","components/core/Nav.jsx":"b79c4289fd31","components/core/ProjectCard.jsx":"58a5e831511c","components/core/SectionHeading.jsx":"14c0d3f6a62e","components/core/Tag.jsx":"b223d862bb97"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TRCContractorsDesignSystem_3a4b20 = window.TRCContractorsDesignSystem_3a4b20 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size = 'md',
  children,
  style,
  ...props
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    md: {
      padding: '14px 28px',
      fontSize: '0.8125rem'
    },
    sm: {
      padding: '10px 20px',
      fontSize: '0.75rem'
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: 'var(--tracking-nav)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-none)',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'background-color var(--duration-fast) var(--ease-editorial), color var(--duration-fast) var(--ease-editorial), border-color var(--duration-fast) var(--ease-editorial)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover ? 'var(--color-walnut)' : 'var(--color-aged-bronze)',
      color: 'var(--color-architectural-white)'
    },
    ghost: {
      background: 'transparent',
      color: hover ? 'var(--color-architectural-white)' : 'var(--color-charcoal-steel)',
      borderColor: 'var(--color-charcoal-steel)',
      backgroundColor: hover ? 'var(--color-charcoal-steel)' : 'transparent'
    },
    link: {
      background: 'transparent',
      padding: 0,
      textTransform: 'none',
      letterSpacing: 'normal',
      fontFamily: 'var(--font-display)',
      fontSize: '1rem',
      fontStyle: 'italic',
      color: 'var(--color-charcoal-steel)',
      borderBottom: '1px solid ' + (hover ? 'var(--color-charcoal-steel)' : 'var(--color-aged-bronze))')
    }
  };
  return React.createElement('button', {
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    ...props
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Footer.jsx
try { (() => {
const COLUMNS = [{
  heading: 'Practice',
  links: ['About TRC', 'Approach', 'Team', 'Careers']
}, {
  heading: 'Work',
  links: ['Selected Projects', 'Residential', 'Commercial', 'Restoration']
}, {
  heading: 'Materials',
  links: ['Stone', 'Steel', 'Timber', 'Copper Roofing']
}, {
  heading: 'Contact',
  links: ['Start a Project', 'Enquiries', 'Locations']
}];
function Footer({
  logo
}) {
  return React.createElement('footer', {
    style: {
      background: 'var(--color-charcoal-steel)',
      color: 'var(--color-architectural-white)',
      padding: 'var(--space-9) var(--gutter) var(--space-6)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 'var(--space-8)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, React.createElement('img', {
    src: logo,
    alt: '',
    style: {
      height: '52px',
      width: 'auto'
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '0.9375rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, 'TRC Contractors'), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.125rem',
      opacity: 0.7
    }
  }, 'We design. We build. We roof.')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, COLUMNS.map(c => React.createElement('div', {
    key: c.heading,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      opacity: 0.55
    }
  }, c.heading), c.links.map(l => React.createElement('a', {
    key: l,
    href: '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      color: 'var(--color-architectural-white)',
      textDecoration: 'none',
      opacity: 0.85
    }
  }, l)))))), React.createElement('div', {
    style: {
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-inverse)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      opacity: 0.5
    }
  }, '© ' + new Date().getFullYear() + ' TRC Contractors'));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Footer.jsx", error: String((e && e.message) || e) }); }

// components/core/Nav.jsx
try { (() => {
function Nav({
  logo,
  transparent = false,
  links = ['Work', 'Practice', 'Materials', 'Contact']
}) {
  const ink = transparent ? 'var(--color-architectural-white)' : 'var(--color-charcoal-steel)';
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5) var(--gutter)',
      position: transparent ? 'absolute' : 'static',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      background: transparent ? 'transparent' : 'var(--surface-primary)',
      borderBottom: transparent ? 'none' : '1px solid var(--border-default)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, React.createElement('img', {
    src: logo,
    alt: '',
    style: {
      height: '34px',
      width: 'auto',
      display: 'block'
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '0.9375rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: ink,
      whiteSpace: 'nowrap'
    }
  }, 'TRC Contractors')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, links.map(l => React.createElement('a', {
    key: l,
    href: '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      color: ink,
      textDecoration: 'none'
    }
  }, l))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Nav.jsx", error: String((e && e.message) || e) }); }

// components/core/ProjectCard.jsx
try { (() => {
const {
  useState
} = React;
function ProjectCard({
  image,
  number,
  title,
  category,
  href = '#'
}) {
  const [hover, setHover] = useState(false);
  return React.createElement('a', {
    href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      textDecoration: 'none'
    }
  }, React.createElement('img', {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--duration-slow) var(--ease-editorial)',
      transform: hover ? 'scale(1.03)' : 'scale(1)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(43,44,46,0.55), transparent 45%)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 'var(--space-5)',
      bottom: 'var(--space-5)',
      color: 'var(--color-architectural-white)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      opacity: 0.75
    }
  }, number), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-h3)',
      margin: '6px 0 2px'
    }
  }, title), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      opacity: 0.85,
      margin: 0
    }
  }, category)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'default'
}) {
  const tones = {
    default: {
      color: 'var(--text-primary)',
      opacity: 0.7
    },
    inverse: {
      color: 'var(--color-architectural-white)',
      opacity: 0.7
    },
    signature: {
      color: 'var(--color-deep-copper)',
      opacity: 1
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  inverse = false
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow && React.createElement(__ds_scope.Tag, {
    tone: inverse ? 'inverse' : 'default'
  }, eyebrow), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-h1)',
      lineHeight: 'var(--leading-tight)',
      color: inverse ? 'var(--color-architectural-white)' : 'var(--color-charcoal-steel)',
      margin: 0,
      maxWidth: '18ch'
    }
  }, title), lead && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lead)',
      lineHeight: 'var(--leading-body)',
      color: inverse ? 'var(--color-architectural-white)' : 'var(--text-primary)',
      opacity: 0.75,
      maxWidth: '52ch',
      margin: 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

})();
