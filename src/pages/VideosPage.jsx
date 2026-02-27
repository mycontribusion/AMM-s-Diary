const videoGallery = [
    {
        title: 'Digital Skills: How to *',
        embedUrl: 'https://www.youtube.com/embed/j533RLHuQdQ?si=tEF0pUG7AP6WRGrx'
    },
    {
        title: 'Improve recitation for four short Sura\'hs',
        embedUrl: 'https://www.youtube.com/embed/bp04Om9GpOU?si=4TKQCFTELJC2O5ag'
    },
    {
        title: 'Ramadan 1444 Project: Hadith related to Ramadan',
        embedUrl: 'https://www.youtube.com/embed/VRwiz-u4AnA?si=ZozYeEoedayWqNG3'
    }
]

export default function VideosPage() {
    return (
        <main className="page-wrapper">
            <div className="container">
                <div className="simple-page">
                    <div className="simple-page__header fade-in">
                        <h1>🎥 Videos</h1>
                        <p>Video content and tutorials</p>
                    </div>

                    <div className="posts-grid fade-in" style={{ animationDelay: '0.1s' }}>
                        {videoGallery.map((vid, i) => (
                            <div key={i} className="post-card" style={{ padding: '16px' }}>
                                <span className="post-card__title" style={{ marginBottom: '12px', display: 'block' }}>
                                    {vid.title}
                                </span>
                                <div style={{
                                    position: 'relative',
                                    paddingBottom: '56.25%',
                                    height: 0,
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    background: '#000'
                                }}>
                                    <iframe
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 0
                                        }}
                                        src={vid.embedUrl}
                                        title={vid.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        ))}

                        <a href="https://www.youtube.com/@mycontribusion" target="_blank" rel="noopener noreferrer" className="post-card">
                            <span className="post-card__title">🎬 YouTube Channel</span>
                            <span className="post-card__desc">Watch on YouTube @mycontribusion</span>
                            <span className="post-card__arrow" style={{ color: '#ef4444' }}>Watch →</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
