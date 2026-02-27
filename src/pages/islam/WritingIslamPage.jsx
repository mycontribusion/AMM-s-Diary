import PostPage from '../../components/PostPage'

const cat = { label: 'Islam', path: '/islam', icon: '🕌', accent: '#f59e0b' }

export default function WritingIslamPage() {
    return (
        <PostPage title="Writing for Islam" category={cat}>
            <p className="arabic-text">بسم الله</p>
            <p>Isa Ali Pantami, a professor of ICT, once said in a lecture: if we Muslims refuse to learn AI (Artificial Intelligence), it would be used against us.</p>
            <p>Likewise if we refuse to write, it would be used against us — or more correctly, it'd continue to be used against us. We can't stop the disbelievers from writing, but can strive to write as equal as they do about Islam or, most desirably, exceed them.</p>
            <p>In the English world there are many books, articles, writeups, and posts against Islam — written from various perspectives not limited to theology, science, and history — which will require our collective efforts and diverse field of expertise to conquer.</p>
            <p>People like Bilal Phillips, Mohammed Hijab, Daniel Haqiqatjou, Louay Fatoohi — to name few — are examples of Muslims who write, and whose writings in one way or the other answer some of the challenges posed by the non-believers.</p>
            <p>Their knowledge gives them an edge and strengthens their points making them impregnable. Reading their works prepares us with the shield to defend our religion and the ability to go on the offence.</p>
            <p>This is not to say that one has to bag a PhD, Masters, or Bachelor's degree to write. After all, being a Muslim in itself is a qualification. Every Muslim knows the meaning and VALUE of Kalimatush Shahada.</p>
            <p>Finally as a reminder, Islam is not based on guessing but a way of life that is based on knowledge. Therefore let's not say more than we know. Let's be humble.</p>
            <p>May Allah guide us and make us among those who will serve Islam and benefit from the service on Judgement Day.</p>
        </PostPage>
    )
}
