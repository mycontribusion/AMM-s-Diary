import { Link } from 'react-router-dom'

/**
 * PostPage - Reusable layout for all article and poem pages.
 * Props:
 *   title: string
 *   category: { label, path, icon, accent }
 *   isPoem: boolean (renders in <pre> style)
 *   children: content
 */
export default function PostPage({ title, category, isPoem = false, children }) {
    return (
        <main className="page-wrapper">
            <div className="container">
                {/* Breadcrumb */}
                <nav className="post-breadcrumb fade-in">
                    <Link to="/">Home</Link>
                    <span className="post-breadcrumb__sep">›</span>
                    {category && (
                        <>
                            <Link to={category.path} style={{ color: category.accent }}>
                                {category.icon} {category.label}
                            </Link>
                            <span className="post-breadcrumb__sep">›</span>
                        </>
                    )}
                    <span className="post-breadcrumb__current">{title}</span>
                </nav>

                <article className="post-article fade-in" style={{ animationDelay: '0.08s' }}>
                    {/* Header */}
                    <header className="post-article__header">
                        {category && (
                            <span
                                className="post-article__category-badge"
                                style={{ background: `${category.accent}18`, color: category.accent, borderColor: `${category.accent}44` }}
                            >
                                {category.icon} {category.label}
                            </span>
                        )}
                        <h1 className="post-article__title">{title}</h1>
                    </header>

                    {/* Content */}
                    <div className={`post-article__body${isPoem ? ' post-article__body--poem' : ''}`}>
                        {children}
                    </div>

                    {/* Back button */}
                    {category && (
                        <div className="post-article__footer">
                            <Link to={category.path} className="btn-back">
                                ← Back to {category.label}
                            </Link>
                        </div>
                    )}
                </article>
            </div>
        </main>
    )
}
