import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const categories = [
    { label: 'Islam', path: '/islam', icon: '🕌' },
    { label: 'Health', path: '/health', icon: '🩺' },
    { label: 'Technology', path: '/technology', icon: '💻' },
    { label: 'Poetry', path: '/poetry', icon: '📜' },
    { label: 'Writeups', path: '/writeups', icon: '✍️' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [catOpen, setCatOpen] = useState(false)
    const [theme, setTheme] = useState('dark')
    const navigate = useNavigate()

    useEffect(() => {
        const saved = localStorage.getItem('amm-theme') || 'dark'
        setTheme(saved)
        document.documentElement.setAttribute('data-theme', saved)
    }, [])

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
        localStorage.setItem('amm-theme', next)
    }

    const closeMenu = () => {
        setMenuOpen(false)
        setCatOpen(false)
    }

    const handleNavLinkClick = (path) => {
        navigate(path)
        closeMenu()
    }

    return (
        <>
            <nav className="navbar">
                <div className="container navbar__inner">
                    {/* Brand */}
                    <Link className="navbar__brand" to="/" onClick={closeMenu}>
                        <img className="navbar__logo" src="/images/amms.png" alt="AMM's Diary Logo" />
                        <span className="navbar__brand-text">AMM<span>'s</span> Diary</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="navbar__nav">
                        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/">
                            Home
                        </NavLink>

                        <div className="nav-item">
                            <button className="nav-link" aria-haspopup="true">
                                Categories <i className="fas fa-chevron-down" style={{ fontSize: '0.65rem' }} />
                            </button>
                            <div className="nav-dropdown">
                                {categories.map(cat => (
                                    <Link key={cat.path} to={cat.path}>
                                        <span>{cat.icon}</span> {cat.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/videos">
                            Videos
                        </NavLink>
                        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/images">
                            Images
                        </NavLink>
                        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/about">
                            About
                        </NavLink>
                    </div>

                    {/* Right controls */}
                    <div className="navbar__right">
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>

                        <button
                            className={`hamburger${menuOpen ? ' open' : ''}`}
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Toggle menu"
                        >
                            <span /><span /><span />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
                <div className="mobile-menu__inner">
                    <a onClick={() => handleNavLinkClick('/')} style={{ cursor: 'pointer' }}>🏠 Home</a>

                    <button
                        className="mobile-nav-link"
                        onClick={() => setCatOpen(o => !o)}
                    >
                        📂 Categories {catOpen ? '▴' : '▾'}
                    </button>

                    {catOpen && (
                        <div className="mobile-submenu">
                            {categories.map(cat => (
                                <a
                                    key={cat.path}
                                    onClick={() => handleNavLinkClick(cat.path)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {cat.icon} {cat.label}
                                </a>
                            ))}
                        </div>
                    )}

                    <a onClick={() => handleNavLinkClick('/videos')} style={{ cursor: 'pointer' }}>🎥 Videos</a>
                    <a onClick={() => handleNavLinkClick('/images')} style={{ cursor: 'pointer' }}>🖼️ Images</a>
                    <a onClick={() => handleNavLinkClick('/about')} style={{ cursor: 'pointer' }}>👤 About</a>
                </div>
            </div>
        </>
    )
}
