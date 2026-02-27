import PostPage from '../../components/PostPage'

const cat = { label: 'Poetry', path: '/poetry', icon: '📜', accent: '#ec4899' }

export default function OurJourneyPage() {
    return (
        <PostPage title="Our Journey" category={cat} isPoem>
            {`Our journey
Won't be in a circle
To return back
To the oblivion before birth

And those who have died
None has forgotten
Themselves
Or their deeds.

For life is infinite
With its finite only being:
Our ages
On earth.`}
        </PostPage>
    )
}
