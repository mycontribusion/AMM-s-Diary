import PostPage from '../../components/PostPage'

const cat = { label: 'Islam', path: '/islam', icon: '🕌', accent: '#f59e0b' }

export default function TranslationsPage() {
    return (
        <PostPage title="Example of Meanings Lost in Quran Translations" category={cat}>
            <p>Daura AlOtrojjah was a complete Qur'an exegesis course that held between 1431–1433 AH in Saudi Arabia.</p>
            <p>Among the scholars that taught in it was Dr Essam Al Owayed. In his exegesis of the 17th verse of Surah Al-Kahf. That is:</p>
            <blockquote style={{ borderLeft: '3px solid #f59e0b', paddingLeft: '20px', margin: '20px 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                "And [had you been present], you would see the sun when it rose, inclining away from their cave on the right, and when it set, passing away from them on the left, while they were [lying] within an open space thereof. That was from the signs of Allāh. He whom Allāh guides is the [rightly] guided, but he whom He sends astray — never will you find for him a protecting guide." (Qur'an 18:17)
            </blockquote>
            <p>He commented that this verse shows that the cave's entrance faced North though slightly inclined to the East. How? English translations are also able to convey the point that it faces North.</p>
            <p>The translation shows that: when the sun rises (from the east) it rises by the right side of the entrance and when it sets (at the west) it is by the left side — indicating that the opening faces North.</p>
            <p>Because if it had faced South it would have rose by its left side and set by its right side.</p>
            <p>But what about the point that it is slightly inclined to the East? This can only be perceived through knowing the Arabic diction in the verse.</p>
            <p>In summary the words used are <strong>تَّزَٰوَرُ</strong> and <strong>تَقْرِضُهُمْ</strong>. The former used in relation to the sun rising and the latter to the sun setting. Dr Al Owayed said the word تزاور implies more light entering into the cave than the word تقرضهم — implying that because the cave is more inclined toward the east, more light enters it when the sun is rising than when it's setting.</p>
            <p>This is an example of the deep meanings and insights that are lost in translations of Qur'an. May this serve as an encouragement to learning the language of the Word of the Almighty.</p>
            <p>May Allah increase us in knowledge that is beneficial.</p>
        </PostPage>
    )
}
