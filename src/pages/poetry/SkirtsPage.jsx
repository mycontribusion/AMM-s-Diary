import PostPage from '../../components/PostPage'

const cat = { label: 'Poetry', path: '/poetry', icon: '📜', accent: '#ec4899' }

export default function SkirtsPage() {
    return (
        <PostPage title="Skirts at Knee on The Way to School" category={cat} isPoem>
            {`what thought has sotted these parents?
blurring this ugliness
in their sight.

what excuse do they use,
to mince the repulsiveness
in this act?

what bakes their resolve
on which they stand,
to rise above the rule of their lord? --

these girls are His creatures first,
before being born
into their world. --

when they squeeze out the Fitrah
in His creatures, what is that
that calms their fear?

are they willing to add to their regrets,
which on judgement day
will drag them down?

no bad deed should be belittled
perhaps
it alone may hold grave harm.

and good deeds regardless of weight
who knows, perhaps
it's all one needs --

like driving away with all ones might
immodesty
from one's children.

so they won't roam with shorts,
in the name of
going to school.`}
        </PostPage>
    )
}
