import { DiagnosisData } from '../types/shindan';

export const furindoDiagnosis: DiagnosisData = {
    id: 'furindo',
    title: '不倫危険度・サレシテ適性診断',
    description: '禁断の扉を開けてしまうのか？あなたの倫理観と欲望を数値化します。',
    logicType: 'total_score',
    theme: {
        primary: '#8B0000', // Dark Red
        secondary: '#2C0000', // Very Dark Red/Blackish
        background: '#1a1a1a', // Dark Gray/Black
        text: '#f5f5f5', // White smoke
        accent: '#FF4500', // Orange Red
    },
    questions: [
        { id: 'q1', text: '秘密を持つことに興奮を覚える？', scoreChanges: { score: 10 } },
        { id: 'q2', text: '「バレなきゃ何しても良い」と思う？', scoreChanges: { score: 10 } },
        { id: 'q3', text: 'パートナーのスマホを勝手に見たことがある（または見たい）？', scoreChanges: { score: 10 } },
        { id: 'q4', text: '略奪愛に燃えるタイプだ？', scoreChanges: { score: 10 } },
        { id: 'q5', text: '異性からの誘いは断れない方だ？', scoreChanges: { score: 10 } },
        { id: 'q6', text: 'スリルがない人生は退屈だと思う？', scoreChanges: { score: 10 } },
        { id: 'q7', text: '嘘をつくのが上手いと自負している？', scoreChanges: { score: 10 } },
        { id: 'q8', text: '体の相性は愛より重要だと思う？', scoreChanges: { score: 10 } },
        { id: 'q9', text: '過去に浮気をした、またはされた経験が3回以上ある？', scoreChanges: { score: 10 } },
        { id: 'q10', text: '今、実は気になる異性がパートナー以外にいる？', scoreChanges: { score: 10 } },
    ],
    results: {
        level_0: {
            id: 'level_0',
            title: '不倫度 0%',
            description: '純白の聖人君子。あなたの倫理観はダイヤモンドよりも硬い。不倫なんて都市伝説だと思ってる？',
            catchphrase: '歩く道徳の教科書',
            status: { visual: 2, mental: 5, money: 3, alcohol: 1 },
            compatibleJob: 'level_0',
        },
        level_10: {
            id: 'level_10',
            title: '不倫度 10%',
            description: 'ほぼシロ。たまに魔が差すこともあるかもしれないけど、理性が勝つタイプ。',
            catchphrase: '清廉潔白（仮）',
            status: { visual: 2, mental: 4, money: 3, alcohol: 2 },
            compatibleJob: 'level_0',
        },
        level_20: {
            id: 'level_20',
            title: '不倫度 20%',
            description: '妄想止まりの安全圏。ドラマや漫画でドロドロを楽しむのがお似合い。',
            catchphrase: '脳内不倫は無罪',
            status: { visual: 3, mental: 3, money: 3, alcohol: 2 },
            compatibleJob: 'level_10',
        },
        level_30: {
            id: 'level_30',
            title: '不倫度 30%',
            description: '隙あり注意報。押しに弱いところがあるので、強引な誘いには気をつけて。',
            catchphrase: 'ガード緩めの平和主義者',
            status: { visual: 3, mental: 3, money: 3, alcohol: 3 },
            compatibleJob: 'level_20',
        },
        level_40: {
            id: 'level_40',
            title: '不倫度 40%',
            description: '小悪魔の芽生え。刺激を求めて火遊びしちゃうかも。火傷する前に戻ってきて。',
            catchphrase: 'ちょっとなら...が命取り',
            status: { visual: 4, mental: 3, money: 3, alcohol: 4 },
            compatibleJob: 'level_50',
        },
        level_50: {
            id: 'level_50',
            title: '不倫度 50%',
            description: '好奇心が止まらない予備軍。サレる側にもシテる側にもなりうる、危ういバランス。',
            catchphrase: '境界線上のアリア',
            status: { visual: 4, mental: 4, money: 4, alcohol: 4 },
            compatibleJob: 'level_50',
        },
        level_60: {
            id: 'level_60',
            title: '不倫度 60%',
            description: '確信犯の一歩手前。「バレなきゃいい」の精神が見え隠れしています。',
            catchphrase: '背徳感は最高のスパイス',
            status: { visual: 4, mental: 4, money: 4, alcohol: 5 },
            compatibleJob: 'level_70',
        },
        level_70: {
            id: 'level_70',
            title: '不倫度 70%',
            description: 'サレ適性よりもシテ適性が高め。略奪に快感を覚えるタイプかも。',
            catchphrase: '人の物は私の物',
            status: { visual: 5, mental: 4, money: 4, alcohol: 5 },
            compatibleJob: 'level_80',
        },
        level_80: {
            id: 'level_80',
            title: '不倫度 80%',
            description: '泥沼のダイバー。修羅場すらもエンタメとして消費するメンタルの強さ。',
            catchphrase: '歩く火薬庫',
            status: { visual: 5, mental: 5, money: 5, alcohol: 5 },
            compatibleJob: 'level_90',
        },
        level_90: {
            id: 'level_90',
            title: '不倫度 90%',
            description: '背徳の女帝/帝王。倫理観？なにそれ美味しいの？欲望のままに生きる獣。',
            catchphrase: '地獄の入り口へようこそ',
            status: { visual: 5, mental: 5, money: 5, alcohol: 5 },
            compatibleJob: 'level_100',
        },
        level_100: {
            id: 'level_100',
            title: '不倫度 100%',
            description: '修羅場も快感な不倫のプロ。もはや一周回って清々しい。来世はきっと猫。',
            catchphrase: '伝説の傾国傾城',
            status: { visual: 5, mental: 5, money: 5, alcohol: 5 },
            compatibleJob: 'level_100',
        },
    },
};
