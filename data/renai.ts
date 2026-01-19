import { DiagnosisData } from '../types/shindan';

export const renaiDiagnosis: DiagnosisData = {
    id: 'renai',
    title: '恋愛メンヘラ度・愛され属性診断',
    description: 'あなたの恋愛傾向を分析し、メンヘラ度と愛され属性を暴きます。',
    questions: [
        {
            id: 'q1',
            text: 'LINEの返信が10分ないと不安になる？',
            scoreChanges: {
                yandere: 3,
                princess: 2,
                queen: 1,
                cat: -1,
            },
        },
        {
            id: 'q2',
            text: 'SNSのサブ垢（裏垢）を持っている？',
            scoreChanges: {
                yandere: 2,
                katamoi: 2,
                sage: -1,
                sababa: -1,
            },
        },
        {
            id: 'q3',
            text: '彼氏・好きな人のGPS位置情報は把握しておきたい？',
            scoreChanges: {
                queen: 3,
                yandere: 3,
                mother: 1,
                sababa: -2,
            },
        },
        {
            id: 'q4',
            text: '「尽くしすぎ」と言われたことがある？',
            scoreChanges: {
                mother: 3,
                katamoi: 2,
                princess: -1,
                queen: -1,
            },
        },
        {
            id: 'q5',
            text: '男性に奢ってもらうのは当たり前だと思う？',
            scoreChanges: {
                princess: 3,
                cat: 2,
                mother: -2,
                sababa: -1,
            },
        },
        {
            id: 'q6',
            text: '恋愛より推し活や趣味の方が楽しい時がある？',
            scoreChanges: {
                sage: 3,
                cat: 2,
                yandere: -2,
                princess: -1,
            },
        },
        {
            id: 'q7',
            text: '自分から振るより振られる（または自然消滅）ことの方が多い？',
            scoreChanges: {
                katamoi: 3,
                mother: 2,
                queen: -2,
                princess: -2,
            },
        },
        {
            id: 'q8',
            text: '深夜に病みストーリーを上げたことがある？',
            scoreChanges: {
                yandere: 3,
                katamoi: 2,
                sababa: -2,
                sage: -1,
            },
        },
        {
            id: 'q9',
            text: '気まぐれに連絡を返さなかったりする？',
            scoreChanges: {
                cat: 3,
                princess: 2,
                mother: -2,
                yandere: -2,
            },
        },
        {
            id: 'q10',
            text: '結局、ひとりで生きていくのが一番楽だと思う？',
            scoreChanges: {
                sage: 3,
                sababa: 3,
                princess: -2,
                yandere: -3,
            },
        },
    ],
    results: {
        princess: {
            id: 'princess',
            title: '圧倒的愛され姫タイプ',
            description: 'わがままも許されちゃう天性の愛されキャラ。騎士（ナイト）を見つけて守ってもらうのが勝ち筋。',
            catchphrase: '世界は私を中心に回ってる♡',
            status: { visual: 5, mental: 4, money: 3, alcohol: 2 },
            compatibleJob: 'mother', // Compatibility within the same diagnosis types (or cross-referenced if needed, but sticking to self-contained for now unless specified)
        },
        yandere: {
            id: 'yandere',
            title: '依存系ヤンデレ女子',
            description: '愛が重すぎて沈没注意。一途さは武器だけど、包丁は持ち出さないでね。',
            catchphrase: 'ねぇ、それ誰？私のことだけ見ててよ',
            status: { visual: 3, mental: 1, money: 2, alcohol: 4 },
            compatibleJob: 'sage', // Allows user to cool down?
        },
        sababa: {
            id: 'sababa',
            title: 'サバサバ自立女子',
            description: '男に頼らず生きていける姉御肌。でも本当は甘えたい夜もある...はず。',
            catchphrase: '男なんてアクセサリーでしょ？',
            status: { visual: 3, mental: 5, money: 5, alcohol: 4 },
            compatibleJob: 'cat',
        },
        mother: {
            id: 'mother',
            title: '尽くしすぎて枯れる聖母',
            description: 'ダメ男製造機になりがち。あなたの愛は無償だけど、見返りも少しは求めよう。',
            catchphrase: '私がいないとあの人なにもできないから...',
            status: { visual: 2, mental: 3, money: 3, alcohol: 3 },
            compatibleJob: 'princess', // Opposites attract?
        },
        queen: {
            id: 'queen',
            title: '束縛の女王',
            description: '私のルールが法律。完全服従を求めるドS気質。M男には最高のパートナー。',
            catchphrase: 'ひざまずきなさい、愚民ども',
            status: { visual: 4, mental: 5, money: 4, alcohol: 3 },
            compatibleJob: 'mother', // Someone to serve?
        },
        cat: {
            id: 'cat',
            title: '自由奔放な猫系女子',
            description: '掴みどころのない魅力で翻弄する小悪魔。追いかけられると逃げたくなる。',
            catchphrase: '気が向いたら遊んであげるニャ',
            status: { visual: 4, mental: 4, money: 3, alcohol: 2 },
            compatibleJob: 'sababa',
        },
        katamoi: {
            id: 'katamoi',
            title: '拗らせ片思い職人',
            description: '振り向いてくれない人を追いかけるのが趣味。幸せになるのが少し怖いのかも？',
            catchphrase: '叶わない恋ほど燃え上がるの',
            status: { visual: 2, mental: 2, money: 2, alcohol: 4 },
            compatibleJob: 'yandere',
        },
        sage: {
            id: 'sage',
            title: '恋愛に興味ない賢者',
            description: '三次元の男に絶望済み、または推しが尊すぎて現実が見えない。ある意味最強。',
            catchphrase: '推しが生きがい、男はいらない',
            status: { visual: 3, mental: 5, money: 4, alcohol: 1 },
            compatibleJob: 'sababa',
        },
        // Adding placeholder for non-existent keys to avoid TS errors if strict check, 
        // but Typescript Partial/Record logic in shindan.ts should handle it if defined correctly.
        // However, Generic JobType includes 'cabaret' etc. DiagnosisData expects Record<JobType, DiagnosisResult>.
        // This implies we need to provide ALL keys or change the type to Partial<Record<...>> or split types.
        // The current type definition: results: Record<JobType, DiagnosisResult>;
        // This is problematic because `yorushoku` doesn't have `princess` and `renai` doesn't have `cabaret`.
        // I MUST fix the type definition to allow Partial or generic content.
        // For now, I will add dummy data for other keys OR better, update Shindan Type to `results: Partial<Record<JobType, DiagnosisResult>>`
        // OR create separate types.
        // Let's modify the type first to be safe.
    } as any, // Temporary cast to avoid immediate error before type fix, but better to fix type.
};
