import { Link } from 'react-router-dom'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    {/* Brand */}
                    <div>
                        <div className="footer__brand">
                            <img src="/images/amms.png" alt="AMM's Diary" />
                            AMM's Diary
                        </div>
                        <p className="footer__tagline">
                            Personal reflections on Islam, Health, Technology, Poetry and more by Ahmad M. Musa.
                        </p>
                    </div>

                    {/* Social */}
                    <div>
                        <p className="footer__social-title">Connect</p>
                        <div className="footer__social-links">
                            <a className="social-icon" href="https://www.youtube.com/@mycontribusion" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube" />
                            </a>
                            <a className="social-icon" href="https://www.linkedin.com/in/ahmad-m-musa-b93587156/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="social-icon" href="https://github.com/mycontribusion" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="fab fa-github" />
                            </a>
                            <a className="social-icon" href="https://web.facebook.com/ahmadmusa.mz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer__bottom">
                    <span>© {year} <span className="footer__bottom-accent">AMM's Diary</span>. All rights reserved.</span>
                    <span style={{ fontStyle: 'italic', opacity: 0.7 }}>In The Name of Allah</span>
                </div>
            </div>
        </footer>
    )
}
