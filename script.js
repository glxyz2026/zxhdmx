// ================= 1. 纯净普通版题库 =================
const normalPool = {
    truth: [
        "你做过最尴尬的事情是什么？",
        "如果能拥有一项超能力，你希望是什么？",
        "如果不考虑收入，你最想做什么职业？",
        "你最难以忍受别人的什么习惯？",
        "你做过最疯狂的一件事是什么？",
        "上一次大笑是因为什么？"
    ],
    dare: [
        "做10个俯卧撑并高喊‘我是最棒的’",
        "模仿一种动物的叫声10秒",
        "用方言念一段绕口令",
        "展示你手机里最新拍的一张照片",
        "做出 3 个搞怪的表情并保持 5 秒",
        "大声唱出你最喜欢歌曲的高音一句"
    ]
};

// ================= 2. 进阶分级题库 =================
const advancedLevels = [
    {
        name: "级别 1 - 破冰普通版",
        truth: [
            "你介意对方牵你的手吗？", "介意和对方的肢体接触？", "今天穿什么颜色的内裤？",
            "有没有同时喜欢/好感过两个人？", "你介意对方分享一些隐私问题吗？", "对方是否是你生活中不可或缺的人？",
            "对方有没有哪一瞬间给你心跳加速的感觉？", "有没有做过关于对方的梦？", "如果和对方是以情侣的身份旅游一天，你会开心吗？"
        ],
        dare: [
            "用小指勾住对方小指十五秒。", "肩并肩靠五秒，再分开。", "两人十指在桌面上方悬空靠近但不碰，停五秒。",
            "说「我现在有点在意你」，要看着对方。", "展示你手机里最新拍的一张照片。", "用对方的杯子喝一口。"
        ]
    },
    {
        name: "级别 2 - 进阶升温版",
        truth: [
            "你在场所有人里，第一印象最好的是谁？", "你谈过最长的一段恋爱是多久？", "你觉得自己在感情中最大的缺点是什么？",
            "你上一次对异性心动是什么时候？", "做过关于在场某人的梦吗？描述一下"
        ],
        dare: [
            "与左边第一位异性深情对视10秒不许笑", "向在场一位朋友表达一个真实的赞美", "让右边的人在你手上用眉笔画个图案"
        ]
    },
    {
        name: "级别 3 - 终极爆辣版",
        truth: [
            "你对在场的哪一位曾有过一丝好感？", "你理想中伴侣最吸引你的身体部位是哪里？", "如果必须在场选一个人谈恋爱，你选谁？"
        ],
        dare: [
            "在场选一位朋友，手牵手直到下一轮结束", "向全场公布你微信搜索记录的前三条"
        ]
    }
];

// 全局游戏状态
let gameMode = 'normal'; // 'normal' 或 'advanced'
let currentLevelIndex = 0;
let currentDrawCount = 0;
let isAnimating = false;

let truthPool = [];
let darePool = [];

// 选择版本模式
function selectMode(mode) {
    gameMode = mode;
    document.getElementById("modeModal").style.display = "none"; // 隐藏弹窗

    if (gameMode === 'normal') {
        truthPool = [...normalPool.truth];
        darePool = [...normalPool.dare];
    } else {
        currentLevelIndex = 0;
        currentDrawCount = 0;
        truthPool = [...advancedLevels[currentLevelIndex].truth];
        darePool = [...advancedLevels[currentLevelIndex].dare];
    }
}

// 掷骰子
function rollDice() {
    const dice = document.getElementById("dice");
    if (!dice) return;
    dice.classList.add("rolling");

    setTimeout(() => {
        const result = Math.floor(Math.random() * 6) + 1;
        dice.innerText = result;
        dice.classList.remove("rolling");
    }, 500);
}

// 抽卡逻辑
function getQuestion(type) {
    if (isAnimating) return;
    isAnimating = true;

    const container = document.getElementById("cardContainer");
    const resultBox = document.getElementById("result-box");

    let pool = type === 'truth' ? truthPool : darePool;

    // 防止题库抽空，抽完后自动补充
    if (pool.length === 0) {
        if (gameMode === 'normal') {
            pool = type === 'truth' ? [...normalPool.truth] : [...normalPool.dare];
        } else {
            pool = type === 'truth' ? [...advancedLevels[currentLevelIndex].truth] : [...advancedLevels[currentLevelIndex].dare];
        }
        if (type === 'truth') truthPool = pool;
        else darePool = pool;
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    const selectedQuestion = pool.splice(randomIndex, 1)[0];

    // 只有进阶版才累计抽题数进行暗中升级
    if (gameMode === 'advanced') {
        currentDrawCount++;
    }

    const updateCardContent = () => {
        resultBox.innerText = selectedQuestion;
        container.classList.add("flipped");

        setTimeout(() => {
            isAnimating = false;
            if (gameMode === 'advanced') {
                checkLevelUp();
            }
        }, 600);
    };

    if (container.classList.contains("flipped")) {
        container.classList.remove("flipped");
        setTimeout(updateCardContent, 300);
    } else {
        updateCardContent();
    }
}

// 静默升级判断
function checkLevelUp() {
    if (currentDrawCount >= 8) {
        if (currentLevelIndex < advancedLevels.length - 1) {
            currentLevelIndex++;
            currentDrawCount = 0;
            truthPool = [...advancedLevels[currentLevelIndex].truth];
            darePool = [...advancedLevels[currentLevelIndex].dare];
        }
    }
}