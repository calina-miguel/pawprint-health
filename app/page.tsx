import "./pawprint.css";

export const metadata = { title: "Pawprint Health | Care for what matters", description: "A warm, practical path for exploring preventative care for the animal who counts on you." };

const careSteps = [
  ["01", "A little curiosity", "Start with the part of care you're thinking about right now."],
  ["02", "A reassuring answer", "Get clear, useful context before you choose what comes next."],
  ["03", "A plan that feels doable", "Keep a simple care note you can revisit with your veterinary team."],
];

export default function Page() {
  return <main className="paw-page" id="paw-home">
    <header className="paw-nav"><a className="paw-brand" href="#paw-home"><span className="paw-logo"><i/><b/><em/></span><span>pawprint <i>health</i></span></a><span className="paw-nav-note">THOUGHTFUL CARE / EVERYDAY</span><a className="paw-nav-cta" href="#care">See the care path <b>↗</b></a></header>
    <section className="paw-hero"><div className="paw-copy"><p className="paw-kicker"><span/> PREVENTATIVE CARE, MADE CALMER</p><h1>Care for what<br />matters <i>most.</i></h1><p className="paw-lede">Small, informed steps can make care feel easier to navigate - for you and the animal who counts on you.</p><a className="paw-button" href="#care">Find the care path <span>↘</span></a><div className="paw-aside"><span className="paw-aside-mark">P</span><span>Start with one question.<br/><b>Take it one step at a time.</b></span></div></div>
      <div className="paw-scene"><div className="paw-sun"/><div className="paw-silhouette" aria-hidden="true"><div className="dog-ear ear-one"/><div className="dog-ear ear-two"/><div className="dog-head"><span className="dog-eye eye-one"/><span className="dog-eye eye-two"/><span className="dog-muzzle"/><span className="dog-nose"/></div><div className="dog-neck"/><div className="dog-body"/><div className="dog-tail"/></div><div className="paw-card"><span>THE CARE NOTE / 01</span><b>Good care<br/><i>starts with<br/>a conversation.</i></b><small>For the little things<br/>worth keeping an eye on.</small></div><span className="paw-caption">HERE FOR THE WHOLE JOURNEY</span><div className="pawprint-dots"><i/><i/><i/><i/><i/></div></div></section>
    <section className="paw-care" id="care"><div className="paw-care-intro"><p className="paw-kicker"><span/> A GENTLER WAY FORWARD</p><h2>Care is a<br /><i>conversation.</i></h2><p>Helpful reminders meet clear next steps, so the important details don't get lost in the scroll.</p><div className="paw-progress"><span>THE CARE PATH</span><b/><span>3 MOMENTS</span></div></div><div className="paw-timeline">{careSteps.map(([n,title,copy])=><article className="paw-step" key={n}><span className="paw-step-node">{n}</span><div><span className="paw-step-label">A MOMENT TO {n==="01"?"NOTICE":n==="02"?"UNDERSTAND":"PLAN"}</span><h3>{title}</h3><p>{copy}</p></div><span className="paw-step-arrow">↗</span></article>)}</div></section>
    <section className="paw-appointment"><div className="appointment-copy"><p className="paw-kicker"><span/> KEEP THE GOOD CARE GOING</p><h2>One small step<br />for a <i>healthier bond.</i></h2><p>Get a gentle care-path reminder you can bring into your next conversation with your veterinary team.</p></div><form className="paw-form"><span className="paw-form-meta">PAWPRINT / CARE LETTER 01</span><label htmlFor="paw-email">Send me the care note</label><p>Enter your email to keep the next step close.</p><input id="paw-email" name="email" type="email" placeholder="Email address" required/><button type="submit">Find my care path <b>↗</b></button><small>Made to support care conversations, not replace them.</small></form></section>
    <footer className="paw-footer"><a className="paw-brand" href="#paw-home"><span className="paw-logo"><i/><b/><em/></span><span>pawprint <i>health</i></span></a><span>For every good day ahead.</span><span>© 2026 PAWPRINT HEALTH</span></footer>
  </main>;
}
