import PostPage from '../../components/PostPage'

const cat = { label: 'Islam', path: '/islam', icon: '🕌', accent: '#f59e0b' }

export default function FaithPage() {
    return (
        <PostPage title="Faith" category={cat} isPoem>
            {`Faith to me
Means the world, or more.
For if I must decide
To go for one
I won't hesitate
To stand by faith.

What is life without Islam?
How would I make sense of greif
And joy?
And also the reason I walk on earth?
In a world where some die with bloody hands and
Some from their hearts that's carved out

When I look at the point they meet,
The sky and land, and the things beween
And see it beeaking down, in my mind
On removing a thing that is.
The coordination leaves me in awe
And that life indeed isn't for naught.`}
        </PostPage>
    )
}
