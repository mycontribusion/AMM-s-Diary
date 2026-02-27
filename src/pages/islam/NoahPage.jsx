import PostPage from '../../components/PostPage'

const cat = { label: 'Islam', path: '/islam', icon: '🕌', accent: '#f59e0b' }

export default function NoahPage() {
    return (
        <PostPage title="Insight from a Verse in Surah An-Nuh" category={cat}>
            <p className="arabic-text">
                بسم الله الرحمن الرحيم<br />
                إِنَّآ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِۦٓ أَنْ أَنذِرْ قَوْمَكَ مِن قَبْلِ أَن يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ
            </p>
            <p><strong>Meaning:</strong> Indeed, We sent Noah to his people, [saying], "Warn your people before there comes to them a painful punishment."</p>
            <p>This is the first verse in the seventy-first chapter of the Qur'an — chapter of Noah. Who is Noah? Noah is the first messenger of Allah who lived for almost a thousand years preaching to his people but they disbelieved except few.</p>
            <p>Scholars say from among the lessons that can be derived from this verse is that it isn't upon prophets, guidance of their nations (meaning they — the prophets — won't be held responsible if their nations should refuse guidance) for it is Allah Who guides whomever He wills.</p>
            <p>But upon them is the duty of notification (warning, giving glad tidings), meaning they would be held responsible should they — the prophets — refuse to spread the message.</p>
            <p>Signifying that it is Allah Who guides, the only duty upon preachers is to spread the true message of Allah.</p>
            <p>Keeping this in mind while preaching should be enough to prevent preachers from sugarcoating the message of Islam with falsehood with the aim of bringing more people into Islam.</p>
            <p>Here in this verse (Noah 71:1) Allah clearly stated the duty and task upon His messenger Noah and that is to <strong>WARN(!)</strong> his people. And therefore although very few were guided to his true message, his duty is considered fulfilled.</p>
            <p>Lest they end up calling to their own version of Islam and not the religion of Allah.</p>
            <p>O Allah grant us Jannah and protect us from hellfire. Ameen ya Hayyu ya Qayyum.</p>
        </PostPage>
    )
}
