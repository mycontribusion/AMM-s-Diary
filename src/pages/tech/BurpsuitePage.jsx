import PostPage from '../../components/PostPage'

const cat = { label: 'Technology', path: '/technology', icon: '💻', accent: '#a855f7' }

export default function BurpsuitePage() {
    return (
        <PostPage title="Burpsuite" category={cat}>
            <p>The name behind Burpsuite.</p>
            <p>It can intercept HTTP requests and gives you the chance to analyse and manipulate them, before releasing them to their destination.</p>
            <p>It can be used for brute-force password cracking of accounts online with an additional automation feature of using a dictionary of passwords.</p>
            <p>It's super interesting.</p>
        </PostPage>
    )
}
