import { DiagnosisData } from '../types/shindan';

export const yorushokuDiagnosis: DiagnosisData = {
    id: 'yorushoku',
    title: '夜職適性診断',
    description: '10の質問であなたにぴったりの夜職を見つけます。',
    questions: [
        {
            id: 'q1',
            text: '人とおしゃべりするのは好き？',
            scoreChanges: {
                cabaret: 2,
                club: 2,
                lounge: 2,
                girlsbar: 2,
                snack: 2,
                concafe: 2,
            },
        },
        {
            id: 'q2',
            text: 'お酒を飲むのは苦じゃない？',
            scoreChanges: {
                cabaret: 1,
                club: 2,
                lounge: 1,
                girlsbar: 2,
                snack: 2,
            },
        },
        {
            id: 'q3',
            text: '露出度の高い服を着ることに抵抗はない？',
            scoreChanges: {
                sekucaba: 3,
                soap: 1,
                deri: 1,
                idol: 2,
            },
        },
        {
            id: 'q4',
            text: '不特定多数への身体的接触（タッチ）があっても平気？',
            scoreChanges: {
                soap: 3,
                deri: 3,
                imekura: 3,
                sekucaba: 2,
                sm: 1,
            },
        },
        {
            id: 'q5',
            text: 'コンセプトや世界観になりきるのが好き？',
            scoreChanges: {
                concafe: 3,
                idol: 2,
                sm: 2,
                imekura: 2,
            },
        },
        {
            id: 'q6',
            text: 'お客様と密にLINE等で連絡を取る営業活動は頑張れる？',
            scoreChanges: {
                cabaret: 3,
                club: 3,
                lounge: 2,
            },
        },
        {
            id: 'q7',
            text: 'SかMかで言うと、S（攻め）の気質があると思う？',
            scoreChanges: {
                sm: 3,
            },
        },
        {
            id: 'q8',
            text: '男性に奉仕して喜ばせることに喜びを感じる？',
            scoreChanges: {
                soap: 2,
                deri: 2,
                lounge: 1,
                club: 1,
            },
        },
        {
            id: 'q9',
            text: '賑やかな場所より落ち着いた場所が好き？',
            scoreChanges: {
                club: 2,
                lounge: 2,
                snack: 1,
            },
        },
        {
            id: 'q10',
            text: '「アイドル」としてステージに立ってみたい？',
            scoreChanges: {
                idol: 3,
                concafe: 1,
            },
        },
    ],
    results: {
        cabaret: {
            id: 'cabaret',
            title: 'キャバクラ',
            description: '華やかなドレスを着て接客。営業努力が実を結ぶ花形職種。',
            catchphrase: '努力がダイヤに変わる、夜のプリンセス',
            status: { visual: 4, mental: 5, money: 5, alcohol: 4 },
            compatibleJob: 'lounge'
        },
        club: {
            id: 'club',
            title: 'クラブ',
            description: '落ち着いた高級店。教養やマナーが求められる大人の社交場。',
            catchphrase: '知性と品格で魅了する、夜の華',
            status: { visual: 3, mental: 4, money: 4, alcohol: 5 },
            compatibleJob: 'snack'
        },
        lounge: {
            id: 'lounge',
            title: 'ラウンジ',
            description: '私服で勤務可能。ノルマが緩めで、容姿端麗さが重視される。',
            catchphrase: '選ばれし美女の集い、高嶺の花',
            status: { visual: 5, mental: 3, money: 4, alcohol: 3 },
            compatibleJob: 'cabaret'
        },
        girlsbar: {
            id: 'girlsbar',
            title: 'ガールズバー',
            description: 'カウンター越し接客。比較的カジュアルに働ける。',
            catchphrase: '笑顔弾ける、カウンター越しのアイドル',
            status: { visual: 3, mental: 3, money: 2, alcohol: 4 },
            compatibleJob: 'concafe'
        },
        concafe: {
            id: 'concafe',
            title: 'コンカフェ',
            description: '特定のコンセプトに合わせた衣装で接客。世界観重視。',
            catchphrase: '世界観を纏う、2.5次元の住人',
            status: { visual: 4, mental: 2, money: 2, alcohol: 1 },
            compatibleJob: 'idol'
        },
        snack: {
            id: 'snack',
            title: 'スナック',
            description: 'アットホームな雰囲気。ママの手伝い的な立ち位置が多い。',
            catchphrase: '癒しと人情、夜のオアシス',
            status: { visual: 2, mental: 4, money: 2, alcohol: 5 },
            compatibleJob: 'club'
        },
        sm: {
            id: 'sm',
            title: 'SMクラブ',
            description: '専門的なプレイを提供。嗜好への理解と演技力が必要。',
            catchphrase: '支配と奉仕、究極の演劇',
            status: { visual: 3, mental: 5, money: 4, alcohol: 1 },
            compatibleJob: 'imekura'
        },
        soap: {
            id: 'soap',
            title: 'ソープランド',
            description: '個室での特殊浴場サービス。高収入が期待できる。',
            catchphrase: '最上級の奉仕、泡と夢の国の女王',
            status: { visual: 3, mental: 4, money: 5, alcohol: 1 },
            compatibleJob: 'deri'
        },
        deri: {
            id: 'deri',
            title: 'デリヘル',
            description: 'お客様の元へ派遣されるスタイル。店舗を持たない形式。',
            catchphrase: 'どこへでも癒しを届ける、秘密の恋人',
            status: { visual: 3, mental: 4, money: 4, alcohol: 1 },
            compatibleJob: 'soap'
        },
        sekucaba: {
            id: 'sekucaba',
            title: 'セクキャバ',
            description: 'お触りありのキャバクラ。サービス精神旺盛な人向け。',
            catchphrase: '大胆不敵、刺激的な夜のエンターテイナー',
            status: { visual: 4, mental: 3, money: 4, alcohol: 4 },
            compatibleJob: 'girlsbar'
        },
        imekura: {
            id: 'imekura',
            title: 'イメクラ',
            description: 'コスチュームを着てプレイ。ニッチな需要に応える。',
            catchphrase: '変幻自在、妄想を叶えるカメレオン',
            status: { visual: 3, mental: 3, money: 3, alcohol: 1 },
            compatibleJob: 'sm'
        },
        idol: {
            id: 'idol',
            title: '地下アイドル',
            description: 'ライブや特典会がメイン。ファンとの交流が重要。',
            catchphrase: 'ステージで輝く、未完成のシンデレラ',
            status: { visual: 4, mental: 5, money: 1, alcohol: 1 },
            compatibleJob: 'concafe'
        },
    },
};
