import { useState } from 'react'

const projects = [
	{ title: 'Project / One', type: 'Product design', year: '2024', className: 'project-orange' },
	{ title: 'Project / Two', type: 'Web experience', year: '2023', className: 'project-blue' },
	{ title: 'Project / Three', type: 'Brand identity', year: '2023', className: 'project-green' },
	{ title: 'Project / Four', type: 'Creative code', year: '2022', className: 'project-pink' },
]

function App() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [filter, setFilter] = useState('All work')
	const filters = ['All work', 'Product design', 'Web experience', 'Brand identity', 'Creative code']
	const visibleProjects = filter === 'All work' ? projects : projects.filter((project) => project.type === filter)
	const closeMenu = () => setMenuOpen(false)

	return (
		<div className="site-shell">
			<header className="topbar">
				<a className="wordmark" href="#top" onClick={closeMenu} aria-label="Return to top">YOUR<span>NAME</span><b>.</b></a>
				<button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /> <span /></button>
				<nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
					<a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#notes" onClick={closeMenu}>Notes</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <span>+</span></a>
				</nav>
			</header>

			<main id="top">
				<section className="hero section-wrap">
					<div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot" /> Available for select projects / 2024</p><h1>Ideas with<br /><em>impact.</em></h1><p className="hero-intro">I&apos;m <strong>[Your Name]</strong>, a [your role] turning complex problems into clear, memorable digital experiences.</p><a className="text-link" href="#work">Explore selected work <span>-&gt;</span></a></div>
					<div className="hero-mark reveal reveal-delay" aria-hidden="true"><div className="mark-ring"><span>Y</span></div><p>CREATIVE<br />THINKING<br />IN MOTION</p></div><p className="scroll-hint">Scroll to explore <span>v</span></p>
				</section>

				<section className="work section-wrap" id="work"><div className="section-heading"><p className="eyebrow">01 / Selected work</p><h2>A few things<br /><em>I&apos;ve made.</em></h2></div><div className="filter-row" role="group" aria-label="Filter projects">{filters.map((item) => <button className={filter === item ? 'filter active' : 'filter'} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <article className={`project-card ${project.className}`} key={project.title}><div className="project-visual"><span className="visual-label">0{index + 1}</span><span className="visual-shape" /></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><span>{project.year}</span></div></article>)}</div></section>

				<section className="about section-wrap" id="about"><div className="about-label"><p className="eyebrow">02 / A little about me</p><div className="about-number">[ 01 ]</div></div><div className="about-copy"><h2>Making useful things<br /><em>feel inevitable.</em></h2><p>I work at the intersection of strategy, design, and technology. My process is collaborative, curious, and always focused on making an idea matter to the people it&apos;s for.</p><p>Currently based in <strong>[Your City]</strong>. Previously at [Company] and [Company]. Always learning, usually listening to music too loudly.</p><a className="text-link" href="#contact">More about me <span>-&gt;</span></a></div></section>

				<section className="notes section-wrap" id="notes"><div className="section-heading"><p className="eyebrow">03 / From the notebook</p><h2>Thoughts,<br /><em>occasionally.</em></h2></div><div className="note-list"><a href="#contact"><span>01</span><strong>What I&apos;m learning about [topic]</strong><small>Read note / 5 min</small><b>-&gt;</b></a><a href="#contact"><span>02</span><strong>A practical guide to [subject]</strong><small>Read note / 8 min</small><b>-&gt;</b></a><a href="#contact"><span>03</span><strong>Notes from [event or place]</strong><small>Read note / 3 min</small><b>-&gt;</b></a></div></section>

				<section className="contact section-wrap" id="contact"><p className="eyebrow">04 / Start a conversation</p><h2>Have a good<br /><em>one in mind?</em></h2><a className="contact-email" href="mailto:hello@example.com">hello@example.com <span>-&gt;</span></a><div className="contact-bottom"><span>Open to collaborations / freelance / good questions</span><a href="#top">Back to top ^</a></div></section>
			</main>
			<footer><span>YOURNAME. / © 2024</span><div><a href="#contact">LinkedIn</a><a href="#contact">Instagram</a><a href="#contact">Are.na</a></div></footer>
		</div>
	)
}

export default App
