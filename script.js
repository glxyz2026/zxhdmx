// ================= 1. 普通版题库 =================
const normalPool = {
    truth: [
        "你做过最尴尬的事情是什么？", "如果能拥有一项超能力，你希望是什么？",
        "如果不考虑收入，你最想做什么职业？", "你最难以忍受别人的什么习惯？"
    ],
    dare: [
        "做10个俯卧撑", "模仿一种动物的叫声10秒", "用方言念一段绕口令", "展示你手机里最新拍的一张照片"
    ]
};

// ================= 2. 进阶男女分级题库 =================
const advancedLevels = [
    {
        name: "级别 1 - 破冰普通版",
        male: {
            truth: ["对她第一印象是什么？", "今天穿的衣服是你精心挑的吗？", "你觉得她哪个部位最迷人？"],
            dare: ["主动握住对方的手10秒", "夸赞对方3个具体优点", "与对方对视10秒不许笑"]
        },
        female: {
            truth: ["你觉得他今天帅吗？", "他有没有哪一瞬间让你觉得心动？", "平时最喜欢他什么性格？"],
            dare: ["轻轻拍拍他的头", "让他为你重新整理一下发型", "在他手心写一个字让他猜"]
        }
    },
    {
        name: "级别 2 - 进阶升温版",
        male: {
            truth: ["曾经做过关于她的梦吗？", "最想带她去哪里旅游？", "如果只能用三个词形容她会是什么？"],
            dare: ["拉着她的手共同完成一段小舞蹈", "对她说一句肉麻的情话", "允许她看你最新一条聊天记录"]
        },
        female: {
            truth: ["如果在场必须选一个人谈恋爱你选谁？", "你觉得他在感情中最大的缺点是什么？", "上一次对他心动是什么时候？"],
            dare: ["捏捏他的脸颊保持5秒", "用他的杯子喝一口水", "让他指定一个安全部位轻碰一下"]
        }
    },
    {
        name: "级别 3 - 终极爆辣版",
        male: {
            truth: [
            "有没有在射精后把还在跳动的肉棒对着镜子看？", "有没有对着镜子看自己的肉棒？", "用手最多用坚持多久？", 
            "有没有用过振动着的手机直接顶着龟头按到射精？", "射出的精液有没有闻一闻是什么味道？", 
            "现在下面有硬硬的吗？", "高潮那几秒肉棒是一下下跳动，还是持续痉挛？", 
            "有对着镜子看自己射精时的表情吗？", "自慰到高潮时有没有喊出“插快点”或“好深”之类的话？", "自慰时会把衣服全部脱光跪在床上，屁股高高抬起自己抽插的姿势吗？", 
            "用手指快速抠/撸的时候，会不会发出咕啾咕啾的水声？会兴奋吗？", "射精/高潮结束后有没有立刻把手指重新塞回去，感受里面还在一抽一抽地收缩？", 
            "会一直手摸下面的时候，一只手摸自己的乳头吗？", "有没有在洗澡的时候，试过把手伸到屁眼里面？", "有没有试过在没人的时候全身裸着？", "有没有想过被口交是什么感觉，对方舌头伸到小穴/含住肉棒会很刺激吗？", "手指抽出时/撸动时会带出很多液体吗？会拉丝还是直接滴下来？", 
            "有没有想过用道具帮助自己自慰？", "自慰到高潮时，你会不会无意识地把屁股抬起来或腰往上顶？", "自慰时最常用的姿势是平躺分开腿、趴着，还是侧卧夹腿？", 
            "你想象第一次被后入/后入时，最期待被顶/顶到到哪里？", "你自慰时幻想被怎么口交吗？舌头具体怎么动？", "幻想被边舔边插时，舌头和手指/肉棒怎么配合最让你受不了？", "自慰时会发出声音吗？是压抑着喘，还是会叫出声？"
        ],
            dare: ["牵着她的手直到下一轮结束", "给通讯录第5个人发‘我恋爱了’（可事后解释）"]
        },
        female: {
            truth: [
            "有没有在高潮后把私处对着镜子或者用手指轻轻拨开看里面？", "有没有对着镜子看自己的小穴？", "最多用几根手指？", 
            "有没有用过振动着的手机直接顶着阴蒂按到高潮？", "喷出的水的话有没有闻一闻是什么味道？", 
            "现在下面有湿湿吗？", "高潮那几秒小穴是一下下猛夹，还是持续痉挛？", 
            "有对着镜子看自己高潮的表情吗？", "自慰到高潮时有没有喊出“插快点”或“好深”之类的话？", "自慰时会把衣服全部脱光跪在床上，屁股高高抬起这个姿势吗？", 
            "用手指快速抠的时候，会不会发出咕啾咕啾的水声？会兴奋吗？", "高潮结束后有没有立刻把手指停留在里面，感受里面还在一抽一抽地收缩？", 
            "会一只手摸下面的时候，一只手捏自己的乳头吗？", "有没有在洗澡的时候自慰？", "有没有试过在没人的时候全身裸着？", 
            "有没有想过被口交是什么感觉，会想象对方舌头伸到吗？", "手指抽出时会带出液体吗？会拉丝吗？", 
            "有没有想过用玩具帮助自己自慰？", "自慰到高潮时，你会不会无意识地把屁股抬起来或腰往上顶？", 
            "自慰时最常用的姿势是平躺分开腿、趴着，还是侧卧夹腿？", 
            "你想象第一次被后入时，最期待顶到到哪里？", "你自慰时幻想被口交吗？舌头具体怎么动？", "幻想被边舔边插时，舌头和手指怎么配合最让你受不了？", "自慰时会发出声音吗？是压抑着喘，还是会叫出声？"
        ],
            dare: ["靠在他肩上保持15秒", "展示手机相册隐藏文件夹/最近删除"]
        }
    }
];

// 游戏状态管理
let gameMode = 'normal';
let currentLevelIndex = 0;
let currentDrawCount = 0;
let isAnimating = false;
let currentGender = 'male'; // 'male' 或 'female'

// 动态池
let truthPool = [];
let darePool = [];

// 1. 选择难度
function selectMode(mode) {
    gameMode = mode;
    document.getElementById("modeModal").style.display = "none";
    currentGender = 'male'; // 默认男方先开始
    resetPools();
    updateGenderUI();
}

// 2. 返回重新选择难度
function resetGame() {
    document.getElementById("modeModal").style.display = "flex";
}

// 重置动态抽题池
function resetPools() {
    if (gameMode === 'normal') {
        truthPool = [...normalPool.truth];
        darePool = [...normalPool.dare];
    } else {
        const currentData = advancedLevels[currentLevelIndex][currentGender];
        truthPool = [...currentData.truth];
        darePool = [...currentData.dare];
    }
}

// 更新性别 UI 显示
function updateGenderUI() {
    const indicator = document.getElementById("genderIndicator");
    const icon = document.getElementById("genderIcon");
    const text = document.getElementById("genderText");

    if (gameMode === 'normal') {
        indicator.style.display = "none"; // 普通模式隐藏性别提示
    } else {
        indicator.style.display = "inline-block";
        if (currentGender === 'male') {
            indicator.classList.remove("female-turn");
            icon.innerText = "👦";
            text.innerText = "男方回合 (投掷/抽卡)";
        } else {
            indicator.classList.add("female-turn");
            icon.innerText = "👧";
            text.innerText = "女方回合 (投掷/抽卡)";
        }
    }
}

// 3. 掷骰子（并在进阶版中切换男女角色）
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

// 4. 抽卡逻辑
function getQuestion(type) {
    if (isAnimating) return;
    isAnimating = true;

    const container = document.getElementById("cardContainer");
    const resultBox = document.getElementById("result-box");

    let pool = type === 'truth' ? truthPool : darePool;

    // 防止题库被抽空，为空时补充
    if (pool.length === 0) {
        resetPools();
        pool = type === 'truth' ? truthPool : darePool;
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    const selectedQuestion = pool.splice(randomIndex, 1)[0];

    // 进阶模式计数与男女轮流切换
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
                // 抽完卡后自动轮到下一位（男/女轮换）
                currentGender = currentGender === 'male' ? 'female' : 'male';
                resetPools();
                updateGenderUI();
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

// 5. 暗中升级判断
function checkLevelUp() {
    if (currentDrawCount >= 8) {
        if (currentLevelIndex < advancedLevels.length - 1) {
            currentLevelIndex++;
            currentDrawCount = 0;
            resetPools();
        }
    }
}