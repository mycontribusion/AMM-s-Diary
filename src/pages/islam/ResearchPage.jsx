import PostPage from '../../components/PostPage'

const cat = { label: 'Islam', path: '/islam', icon: '🕌', accent: '#f59e0b' }

export default function ResearchPage() {
    return (
        <PostPage title="Research for Islam" category={cat}>
            <p>This is a video by brother Daniel Haqiqatjou titled "The Disturbing Reason Why Muslim Countries Don't Help Palestine."</p>
            <p>In the video he made claims on the situation of Muslim countries' leaders. Can you after watching the video do a little research looking for evidences in support or against any of the claims he made?</p>
            <p>Then you form an article and post it in the comment section so we can discuss.</p>
            <p>Why this?</p>
            <p>You and I can't just repeat the points he made in our writings or discussions without also having in possession our own evidences to backup our claims. Because then, brother Haqiqatjou won't be there to support us. We'll be the ones to defend our stand.</p>
            <p>
                <a href="https://m.youtube.com/watch?v=-QCqzNCrW6w" target="_blank" rel="noopener noreferrer">
                    Watch original video
                </a>
            </p>
            <iframe
                width="350"
                height="196"
                src="https://www.youtube.com/embed/-QCqzNCrW6w?si=1HQ05o-lgGmZSGAL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </PostPage>
    )
}
