const images = [
    { src: '/images/amms.png', alt: 'AMM\'s Diary Logo' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQGFgipzKvd4rw/feedshare-shrink_800/B4DZRChIBxGUAg-/0/1736282770188?e=1743033600&v=beta&t=qb1SqVrjlt2U1B9ed-aWZf0Qc95WxN8oFi8rdlQ3u_c', alt: 'LinkedIn Image 1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQEnslNMMrXnLg/feedshare-shrink_800/B4DZSmbEntHYAg-/0/1737958911528?e=1743033600&v=beta&t=KXQDnEqPcyOEyCZFPLL20ocZigFYo3shYpK4cu6DEus', alt: 'LinkedIn Image 2' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQGtcPvnpdJEyw/feedshare-shrink_800/B4DZRLQEiZG0Ak-/0/1736429294552?e=1743033600&v=beta&t=l5I_sxai1qc3Kfw61TBQuCtn-L3bWAUsceBdkyUvNEs', alt: 'LinkedIn Image 3' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQF1RPcX26sdOg/feedshare-shrink_800/B4DZRVLIerHcAg-/0/1736595771728?e=1743033600&v=beta&t=uLQk1OljFC_VrQQL-k5HswenK6q5cQiMlFOY5iVXe8Y', alt: 'LinkedIn Image 4' },
    { src: 'https://media.licdn.com/dms/image/sync/v2/D4D22AQH9GuG1VDVAtQ/feedshare-shrink_800/B4DZRZwB8EHcAg-/0/1736672550939?e=1743033600&v=beta&t=Fzu_qsfwERpz_EE7ZfoVolUOmbqx_tD294T57Zc8R24', alt: 'LinkedIn Image 5' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQH3S4s-KWxrOw/feedshare-shrink_800/B4DZRjXdR_HIAg-/0/1736833886311?e=1743033600&v=beta&t=_t0uz3mDTxTYTdg92VSTLHcL1KWudHugx93X0hcbdbU', alt: 'LinkedIn Image 6' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQHY7fFCHtS8Pg/feedshare-shrink_800/B4DZR6_De5HkAg-/0/1737230143416?e=1743033600&v=beta&t=E9D-HxX0iZqNt8JAgTlfdVvNTD6uNqqhKvkQhnekGJo', alt: 'LinkedIn Image 7' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQGE5XVLAO_4sQ/feedshare-shrink_800/B4DZSBNeIOHcAg-/0/1737334583163?e=1743033600&v=beta&t=sQmK0CfgH6ZOYwJFE8bYuniFdvqh5QvRSfTeshRcko0', alt: 'LinkedIn Image 8' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQHJjA2Ta4dJsQ/feedshare-shrink_800/B4DZSaY4ZjH0Ag-/0/1737757007781?e=1743033600&v=beta&t=WtWh-9etSDuqnn9EmXSKmGIGFa0Q7tUKtQ0MQ8w8b08', alt: 'LinkedIn Image 9' }
]

export default function ImagesPage() {
    return (
        <main className="page-wrapper">
            <div className="container">
                <div className="simple-page">
                    <div className="simple-page__header fade-in">
                        <h1>🖼️ Images</h1>
                        <p>Photo gallery and visual content</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                            Note: Some images may be blocked by ad blockers or privacy browsers.
                        </p>
                    </div>

                    <div className="images-grid fade-in" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '20px',
                        padding: '20px 0'
                    }}>
                        {images.map((img, i) => (
                            <div key={i} className="image-card" style={{
                                borderRadius: '12px',
                                overflow: 'hidden',
                                background: 'var(--card-bg)',
                                border: '1px solid var(--border-color)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
