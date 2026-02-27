import PostPage from '../../components/PostPage'

const cat = { label: 'Islam', path: '/islam', icon: '🕌', accent: '#f59e0b' }

export default function TheBookPage() {
    return (
        <PostPage title="The Book" category={cat} isPoem>
            {`Year has cycled more than fourteen hundred times
Since The Book's trace first appeared on earth.
Then, it took years after years upto twenty three
Before its full self became known to the world.

The Book, The Criterion, The Reminder, to mention few
Are among the names it calls itself.
Its hundred and fourteen chapters has crossed through space and time
On brains, and papers to reach us unchanged.

The Qur'an as it's often called is a book revealed by Allah
A guide, a manual from The Creator who fashioned man.`}
        </PostPage>
    )
}
