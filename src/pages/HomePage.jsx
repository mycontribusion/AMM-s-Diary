import { Link } from 'react-router-dom'

const categories = [
    { id: 'islam', label: 'Islam', icon: '🕌', path: '/islam', accent: '#f59e0b', desc: 'Faith, Quran & reflection' },
    { id: 'health', label: 'Health', icon: '🩺', path: '/health', accent: '#3b82f6', desc: 'Medical tools & notes' },
    { id: 'tech', label: 'Technology', icon: '💻', path: '/technology', accent: '#a855f7', desc: 'Networking & security' },
    { id: 'poetry', label: 'Poetry', icon: '📜', path: '/poetry', accent: '#ec4899', desc: 'Verses & reflections' },
    { id: 'writeups', label: 'Writeups', icon: '✍️', path: '/writeups', accent: '#f97316', desc: 'Essays & opinions' },
]

const recentPosts = [
    {
        category: 'Islam', icon: '🕌', path: '/islam', accent: '#f59e0b',
        posts: [
            { title: 'Writing for Islam', desc: 'The importance of writing in the modern age', href: '/islam/writing' },
            { title: 'Insight from a verse in Surah An-Nuh', desc: 'This verse reminds preachers about what their true duty is', href: '/islam/noah' },
        ],
    },
    {
        category: 'Health', icon: '🩺', path: '/health', accent: '#3b82f6',
        posts: [
            { title: 'Heart Failure Criteria', desc: 'Framingham Heart Failure Criteria Calculator', href: '/health/heart-failure' },
            { title: 'Cardiac Axis Interpreter', desc: 'For quick determination of cardiac axis', href: '/health/cardiac-axis' },
        ],
    },
    {
        category: 'Technology', icon: '💻', path: '/technology', accent: '#a855f7',
        posts: [
            { title: 'Facebook Tagging', desc: 'The dangers of tagging on Facebook', href: '/technology/fb-tagging' },
            { title: 'Burp Suite Basics', desc: 'Getting started with Burp Suite', href: '/technology/burpsuite' },
        ],
    },
    {
        category: 'Poetry', icon: '📜', path: '/poetry', accent: '#ec4899',
        posts: [
            { title: 'Palestine', desc: 'Reflections on the struggle', href: '/poetry/palestine' },
            { title: 'Our Journey', desc: 'The reality of life', href: '/poetry/our-journey' },
        ],
    },
    {
        category: 'Writeups', icon: '✍️', path: '/writeups', accent: '#f97316',
        posts: [
            { title: 'AcrossMart', desc: 'About the online store', href: '/writeups/acrossmart' },
            { title: 'Niger, ECOWAS and Nigeria', desc: 'A short overview on the Niger coup', href: '/writeups/niger' },
        ],
    },
]

export default function HomePage() {
    return (
        <main className="page-wrapper">
            <div className="container">
                {/* Basmala */}
                <p className="basmala">✦ In The Name of Allah, The Most Gracious, The Most Merciful ✦</p>

                {/* Hero */}
                <section className="hero fade-in">
                    <div className="hero__badge">
                        <i className="fas fa-book-open" /> Personal Journal
                    </div>
                    <h1 className="hero__title">AMM's Diary</h1>
                    <p className="hero__subtitle">
                        Thoughts, tools, and reflections on Islam, Medicine, Technology, and life — by Ahmad M. Musa.
                    </p>
                </section>

                {/* Category Cards */}
                <section>
                    <p className="section-label">Explore</p>
                    <h2 className="section-title">Browse Categories</h2>
                    <div className="category-grid">
                        {categories.map((cat, i) => (
                            <Link
                                key={cat.id}
                                to={cat.path}
                                className="category-card fade-in"
                                style={{
                                    '--card-accent': cat.accent,
                                    animationDelay: `${i * 0.07}s`,
                                }}
                            >
                                <div
                                    className="category-card__glow"
                                    style={{ background: cat.accent }}
                                />
                                <span className="category-card__icon">{cat.icon}</span>
                                <span className="category-card__name">{cat.label}</span>
                                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{cat.desc}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Recent Posts */}
                <section className="recent-section">
                    <p className="section-label">Latest</p>
                    <h2 className="section-title">Recent Posts</h2>

                    {recentPosts.map((block, i) => (
                        <div key={block.category} className="recent-category-block fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className="recent-category-header" style={{ borderBottomColor: `${block.accent}33` }}>
                                <span style={{ fontSize: '1.3rem' }}>{block.icon}</span>
                                <h3>
                                    <Link to={block.path} style={{ color: block.accent }}>
                                        {block.category}
                                    </Link>
                                </h3>
                                <span className="recent-category-count">{block.posts.length} posts</span>
                            </div>
                            <div className="posts-grid">
                                {block.posts.map(post => (
                                    <Link key={post.href} to={post.href} className="post-card">
                                        <span
                                            className="post-card__title"
                                            style={{ '--hover-color': block.accent }}
                                        >
                                            {post.title}
                                        </span>
                                        <span className="post-card__desc">{post.desc}</span>
                                        <span className="post-card__arrow">Read more →</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}
