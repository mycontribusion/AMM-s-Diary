import PostPage from '../../components/PostPage'

const cat = { label: 'Technology', path: '/technology', icon: '💻', accent: '#a855f7' }

export default function HeaderPage() {
    return (
        <PostPage title="Header vs Payload" category={cat}>
            <p>Comparing Header vs Payload with Envelope vs A Message:</p>
            <p>With just the message alone no one knows who the message is for. And even if it gets to the target luckily the target won't know the sender.</p>
            <p>But with the envelope which has on it both information except for the message, the envelope and message can serve their purposes in establishing a communication.</p>
            <p>Likewise the relationship between the header and the payload (which can be just a word, or a code that is sent to the target. Examples are usernames, passwords, sentences, images, audio etc).</p>
        </PostPage>
    )
}
