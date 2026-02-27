import PostPage from '../../components/PostPage'

const cat = { label: 'Writeups', path: '/writeups', icon: '✍️', accent: '#f97316' }

export default function AcrossMartPage() {
    return (
        <PostPage title="AcrossMart" category={cat}>
            <p>AcrossMart has come to solve another of our problems using technology. AcrossMart aims to enable you to hover over all the markets in Nigeria from wherever you're, buy whatever you want at market price and have it delivered to you. This way you can learn of the appropriate markets yourself and the actual prices of your desired products while giving you an added advantage of being able to make comparisons across the markets.</p>
            <p>Just like it described itself by saying AcrossMart is an online e-commerce platform, the first of its kind to map in real-time the shops, products, and services available in over 900 major and minor markets across the country, as well as small and medium-sized enterprises (SMEs), enabling them to reach a large customer base.</p>
            <p>In partnership with various entities, AcrossMart offers both online and offline services that allow you to access real-time information about physical markets and their products across the country.</p>
        </PostPage>
    )
}
