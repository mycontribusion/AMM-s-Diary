import PostPage from '../../components/PostPage'

const cat = { label: 'Technology', path: '/technology', icon: '💻', accent: '#a855f7' }

export default function PingPage() {
    return (
        <PostPage title="Ping in Terminal" category={cat}>
            <p>Small errors that can make the ping tool not to work properly.</p>
            <p>From the examples below, it can be seen how some silly things can give undesirable results.</p>
            <p>Two simple things that can mess up the ping tool are:</p>
            <ul>
                <li>
                    just by adding <code>https://</code> in the URL<br />
                    <span style={{ color: 'var(--text-muted)' }}>eg. https://abc.com</span>
                </li>
                <li>
                    or just the single back slash in a URL<br />
                    <span style={{ color: 'var(--text-muted)' }}>eg. abc.com/</span>
                </li>
            </ul>
            <p>Therefore the only format it accepts is:</p>
            <ul>
                <li>
                    clean URL<br />
                    <span style={{ color: 'var(--text-muted)' }}>eg. abc.com</span>
                </li>
                <li>
                    IP address<br />
                    <span style={{ color: 'var(--text-muted)' }}>eg. 192.168.43.1</span>
                </li>
            </ul>
            <p>Let's go!</p>
        </PostPage>
    )
}
