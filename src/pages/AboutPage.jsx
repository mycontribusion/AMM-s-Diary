export default function AboutPage() {
    return (
        <main className="page-wrapper">
            <div className="container">
                <div className="simple-page">
                    <div className="simple-page__header fade-in">
                        <h1>About</h1>
                        <p>The person behind the diary</p>
                    </div>

                    <div className="about-card fade-in" style={{ animationDelay: '0.1s' }}>
                        <img className="about-avatar" src="/images/amms.png" alt="Ahmad M. Musa" />
                        <h2 className="about-name">Ahmad M. Musa</h2>
                        <p className="about-bio">
                            A medical professional, technologist, and believer — sharing reflections on Islam,
                            health sciences, technology, poetry, and the world at large.
                            This diary is a personal space to learn, share, and grow.
                        </p>
                        <div className="about-tags">
                            {['🕌 Islam', '🩺 Medicine', '💻 Technology', '📜 Poetry', '✍️ Writing'].map(tag => (
                                <span key={tag} className="about-tag">{tag}</span>
                            ))}
                        </div>

                        <div style={{ marginTop: '32px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {[
                                { icon: 'fab fa-youtube', href: 'https://www.youtube.com/@mycontribusion', label: 'YouTube' },
                                { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/ahmad-m-musa-b93587156/', label: 'LinkedIn' },
                                { icon: 'fab fa-github', href: 'https://github.com/mycontribusion', label: 'GitHub' },
                                { icon: 'fab fa-facebook-f', href: 'https://web.facebook.com/ahmadmusa.mz', label: 'Facebook' },
                            ].map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    style={{ width: 'auto', padding: '0 16px', gap: '8px', borderRadius: '999px' }}
                                    aria-label={s.label}
                                >
                                    <i className={s.icon} />
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
