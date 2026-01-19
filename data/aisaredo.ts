import { DiagnosisData } from '../types/shindan';

export const aisaredoDiagnosis: DiagnosisData = {
    id: 'aisaredo',
    title: 'あなたの愛され度・溺愛され属性診断',
    description: '全人類に守られたい♡ あなたの「愛され力」と「溺愛され属性」を診断します。',
    logicType: 'total_score',
    theme: {
        primary: '#FFADD6', // Sweet Pink
        secondary: '#DDA0DD', // Plum/Pastel Purple
        background: '#FFF0F5', // Lavender Blush
        text: '#8B4513', // Saddle Brown (softer than black)
        accent: '#FF69B4', // Hot Pink
    },
    questions: [
        { id: 'q1', text: 'わがままを言っても「可愛い」で許される自信がある？', scoreChanges: { score: 10 } },
        { id: 'q2', text: '「お願い♡」とおねだりするのが得意だ？', scoreChanges: { score: 10 } },
        { id: 'q3', text: 'LINEの返信が遅れると相手が焦っているのがわかる？', scoreChanges: { score: 10 } },
        { id: 'q4', text: 'デートのお会計でお財布を出したことがほぼない？', scoreChanges: { score: 10 } },
        { id: 'q5', text: '困った顔をすれば誰かが助けてくれると思っている？', scoreChanges: { score: 10 } },
        { id: 'q6', text: '相手の好みに合わせるより、自分色に染める派だ？', scoreChanges: { score: 10 } },
        { id: 'q7', text: '「天然だね」と言われるが、実は計算している時がある？', scoreChanges: { score: 10 } },
        { id: 'q8', text: 'スキンシップは自分からするよりされたい派？', scoreChanges: { score: 10 } },
        { id: 'q9', text: '泣けば大抵のことは解決すると思う？', scoreChanges: { score: 10 } },
        { id: 'q10', text: '私は世界一幸せになるべき人間だと本気で思っている？', scoreChanges: { score: 10 } },
    ],
    results: {
        level_0: {
            id: 'level_0',
            title: '愛され度 0%',
            description: '自立しすぎた孤高の女戦士。一人で生きていける強さは素敵だけど、たまには鎧を脱いでみては？守りたい隙がありません。',
            catchphrase: '鋼鉄の処女',
            status: { visual: 3, mental: 5, money: 4, alcohol: 3 },
            compatibleJob: 'level_0', // Self-reliant
        },
        level_10: {
            id: 'level_10',
            title: '愛され度 10%',
            description: '「甘え方がわからない」不器用さん。頼ることは弱さじゃないよ。まずは小さなお願いから練習してみて。',
            catchphrase: '不器用な一匹狼',
            status: { visual: 3, mental: 4, money: 3, alcohol: 3 },
            compatibleJob: 'level_20',
        },
        level_20: {
            id: 'level_20',
            title: '愛され度 20%',
            description: '尽くしすぎて都合のいい女になりがち。愛されることより愛することに必死になってない？',
            catchphrase: '健気な裏方気質',
            status: { visual: 3, mental: 3, money: 2, alcohol: 3 },
            compatibleJob: 'level_10',
        },
        level_30: {
            id: 'level_30',
            title: '愛され度 30%',
            description: '愛され願望はあるけど素直になれないツンデレ予備軍。「デレ」の比率を上げれば愛され度は急上昇かも。',
            catchphrase: '素直になれない猫',
            status: { visual: 4, mental: 3, money: 3, alcohol: 2 },
            compatibleJob: 'level_40',
        },
        level_40: {
            id: 'level_40',
            title: '愛され度 40%',
            description: '親しみやすさは満点だけど「いい子」止まり？色気とわがままを少し足して、相手を翻弄しちゃおう。',
            catchphrase: '安心感のある妹キャラ',
            status: { visual: 3, mental: 4, money: 3, alcohol: 4 },
            compatibleJob: 'level_50',
        },
        level_50: {
            id: 'level_50',
            title: '愛され度 50%',
            description: '計算と本能のバランス型。押してダメなら引いてみる、恋の駆け引きを楽しめる中級者。',
            catchphrase: '恋のタクティシャン',
            status: { visual: 4, mental: 4, money: 4, alcohol: 3 },
            compatibleJob: 'level_60',
        },
        level_60: {
            id: 'level_60',
            title: '愛され度 60%',
            description: 'あざと可愛さの片鱗アリ。狙った獲物は逃がさないその瞳、なかなかのテクニシャンですね。',
            catchphrase: '天然養殖小悪魔',
            status: { visual: 4, mental: 4, money: 4, alcohol: 4 },
            compatibleJob: 'level_50',
        },
        level_70: {
            id: 'level_70',
            title: '愛され度 70%',
            description: '存在自体が守ってあげたいオーラ全開。あなたのわがままはワガママではなく「可愛いお願い」に変換されます。',
            catchphrase: '守られ属性のエリート',
            status: { visual: 5, mental: 3, money: 4, alcohol: 2 },
            compatibleJob: 'level_80',
        },
        level_80: {
            id: 'level_80',
            title: '愛され度 80%',
            description: 'お姫様検定1級合格。呼吸をするように愛される、選ばれしヒロイン。嫉妬すらもスパイスに変える強さ。',
            catchphrase: '天性のプリンセス',
            status: { visual: 5, mental: 4, money: 5, alcohol: 3 },
            compatibleJob: 'level_90',
        },
        level_90: {
            id: 'level_90',
            title: '愛され度 90%',
            description: '傾国の美女クラス。あなたのためなら国の一つや二つ傾くかも？その魅力、もはや兵器レベル。',
            catchphrase: '国家予算級の美貌',
            status: { visual: 5, mental: 5, money: 5, alcohol: 4 },
            compatibleJob: 'level_100',
        },
        level_100: {
            id: 'level_100',
            title: '愛され度 100%',
            description: '全人類に守られる究極の姫。おめでとう、あなたが世界の中心です。今日も世界はあなたのために回っています。',
            catchphrase: '銀河一の愛され女神',
            status: { visual: 5, mental: 5, money: 5, alcohol: 5 },
            compatibleJob: 'level_100',
        },
    },
};
