import { Link } from 'react-router-dom'

export default function CategoryPage({ title, icon, posts, accentColor }) {
    const descriptions = {
        Islam: 'Reflections on faith, Quran, and Islamic scholarship.',
        Health: 'Medical tools, calculators, and clinical notes.',
        Technology: 'Computing, networking, and cybersecurity topics.',
        Poetry: 'Original verses and poetic reflections on life.',
        Writeups: 'Essays, opinions, and written pieces on various topics.',
    }

    return (
        <main className="page-wrapper">
            <div className="container">
                <div
                    className="category-page-header fade-in"
                    style={{ '--page-accent': accentColor }}
                >
                    <span className="category-page-header__icon">{icon}</span>
                    <div>
                        <h1>{title}</h1>
                        <p>{descriptions[title] || 'Posts and articles in this category.'}</p>
                    </div>
                </div>

                <div className="posts-grid">
                    {posts.map((post, i) => (
                        <Link
                            key={post.href}
                            to={post.href}
                            className="post-card fade-in"
                            style={{ animationDelay: `${i * 0.07}s` }}
                        >
                            <span className="post-card__title">{post.title}</span>
                            <span className="post-card__desc">{post.desc}</span>
                            <span className="post-card__arrow" style={{ color: accentColor }}>Read more →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
