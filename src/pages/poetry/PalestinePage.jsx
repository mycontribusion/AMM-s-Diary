import PostPage from '../../components/PostPage'

const cat = { label: 'Poetry', path: '/poetry', icon: '📜', accent: '#ec4899' }

export default function PalestinePage() {
    return (
        <PostPage title="Palestine" category={cat} isPoem>
            {`Palestine - a country fenced by tanks
Roofed by missiles
And floored by graves.
A country whose sky knows no rest -
Thundering all year, and
Blinking red lights.
A land where lives are harvested
Young and old,
From sunrise to the next and next sunrise.

For decades, they cried
Until their sea of tears
Was left with nothing to shed.
And for decades, they wailed
Until their stomach
Could produce no more.
Yet, all these years of grieving
Yielded nothing!
Except for expansion of graves.

Shrieks from their dying children
Could not ignite a feeling
In the watching audience -
That the cries of their dying parents
Could find
To nourish
And the despair in the eyes
Of the dying families
To it is a show
That shouldn't be allowed to end

O Allah save our brothers`}
        </PostPage>
    )
}
