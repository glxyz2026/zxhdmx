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
            "你想象第一次被后入/后入时，最期待被顶/顶到到哪里？", "你自慰时幻想被怎么口交吗？舌头具体怎么动？", "幻想被边舔边插时，舌头和手指/肉棒怎么配合最让你受不了？", "自慰时会发出声音吗？是压抑着喘，还是会叫出声？"],
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
            "你想象第一次被后入时，最期待顶到到哪里？", "你自慰时幻想被口交吗？舌头具体怎么动？", "幻想被边舔边插时，舌头和手指怎么配合最让你受不了？", "自慰时会发出声音吗？是压抑着喘，还是会叫出声？"],
            dare: ["靠在他肩上保持15秒", "展示手机相册隐藏文件夹/最近删除"]
        }
    }
];

// 游戏状态
let gameMode = 'normal';
let currentLevelIndex = 0;
let currentDrawCount = 0;
let isAnimating = false;

// PK 环节状态
let pkState = 'male_turn'; // 'male_turn', 'female_turn', 'waiting_draw'
let malePoint = 0;
let femalePoint = 0;
let loserGender = ''; // 'male' 或 'female'

let truthPool = [];
let darePool = [];

// 选择版本
function selectMode(mode) {
    gameMode = mode;
    document.getElementById("modeModal").style.display = "none";
    
    const scoreBoard = document.getElementById("scoreBoard");
    const indicator = document.getElementById("genderIndicator");

    if (gameMode === 'normal') {
        scoreBoard.style.display = "none";
        indicator.style.display = "none";
        document.getElementById("cardFrontText").innerText = "输了？选一项惩罚抽卡！";
        resetPools();
    } else {
        scoreBoard.style.display = "flex";
        indicator.style.display = "inline-flex";
        resetPKRound();
    }
}

// 重置 PK 轮次
function resetPKRound() {
    pkState = 'male_turn';
    malePoint = 0;
    femalePoint = 0;
    loserGender = '';
    
    document.getElementById("dice").innerText = "?";
    document.getElementById("maleScore").innerText = "-";
    document.getElementById("femaleScore").innerText = "-";
    document.getElementById("cardFrontText").innerText = "等待掷骰子比大小...";
    
    // 禁用抽卡按钮，必须先比出输赢
    toggleCardButtons(false);
    updateGenderUI("👦", "请男方先掷骰子", false);
}

// 返回主菜单
function resetGame() {
    document.getElementById("modeModal").style.display = "flex";
}

// 控制抽卡按钮状态
function toggleCardButtons(enable) {
    document.getElementById("btnTruth").disabled = !enable;
    document.getElementById("btnDare").disabled = !enable;
}

// 更新顶栏提示 UI
function updateGenderUI(icon, text, isFemale) {
    const indicator = document.getElementById("genderIndicator");
    document.getElementById("genderIcon").innerText = icon;
    document.getElementById("genderText").innerText = text;
    if (isFemale) {
        indicator.classList.add("female-turn");
    } else {
        indicator.classList.remove("female-turn");
    }
}

// 掷骰子逻辑 (PK 核心)
function rollDice() {
    if (gameMode === 'normal') {
        // 普通版直接掷骰子
        runDiceAnimation((val) => {});
        return;
    }

    if (pkState === 'waiting_draw') return;

    runDiceAnimation((val) => {
        if (pkState === 'male_turn') {
            malePoint = val;
            document.getElementById("maleScore").innerText = malePoint;
            pkState = 'female_turn';
            updateGenderUI("👧", "请女方掷骰子", true);
        } else if (pkState === 'female_turn') {
            femalePoint = val;
            document.getElementById("femaleScore").innerText = femalePoint;
            
            // 判定输赢
            if (malePoint === femalePoint) {
                updateGenderUI("⚖️", "平局！请重新掷骰子比大小", false);
                pkState = 'male_turn';
            } else if (malePoint < femalePoint) {
                loserGender = 'male';
                pkState = 'waiting_draw';
                updateGenderUI("👦", "男方输了！准备接受惩罚", false);
                document.getElementById("cardFrontText").innerText = "👦 男方输了！请选一项惩罚抽卡";
                toggleCardButtons(true);
            } else {
                loserGender = 'female';
                pkState = 'waiting_draw';
                updateGenderUI("👧", "女方输了！准备接受惩罚", true);
                document.getElementById("cardFrontText").innerText = "👧 女方输了！请选一项惩罚抽卡";
                toggleCardButtons(true);
            }
        }
    });
}

// 骰子转动动画
function runDiceAnimation(callback) {
    const dice = document.getElementById("dice");
    dice.classList.add("rolling");

    setTimeout(() => {
        const result = Math.floor(Math.random() * 6) + 1;
        dice.innerText = result;
        dice.classList.remove("rolling");
        callback(result);
    }, 500);
}

// 重置/获取动态题库
function resetPools() {
    if (gameMode === 'normal') {
        truthPool = [...normalPool.truth];
        darePool = [...normalPool.dare];
    } else {
        const currentData = advancedLevels[currentLevelIndex][loserGender];
        truthPool = [...currentData.truth];
        darePool = [...currentData.dare];
    }
}

// 抽卡逻辑
function getQuestion(type) {
    if (isAnimating) return;
    
    // 进阶模式下如果还没比出输赢，不能抽卡
    if (gameMode === 'advanced' && pkState !== 'waiting_draw') return;
    
    isAnimating = true;

    // 每次抽卡前确定使用输家的题库
    resetPools();

    let pool = type === 'truth' ? truthPool : darePool;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const selectedQuestion = pool.splice(randomIndex, 1)[0];

    if (gameMode === 'advanced') {
        currentDrawCount++;
    }

    const container = document.getElementById("cardContainer");
    const resultBox = document.getElementById("result-box");

    const updateCardContent = () => {
        resultBox.innerText = selectedQuestion;
        container.classList.add("flipped");

        setTimeout(() => {
            isAnimating = false;
            if (gameMode === 'advanced') {
                checkLevelUp();
                // 抽完卡 2.5 秒后自动重置进入下一轮 PK
                setTimeout(() => {
                    if (container.classList.contains("flipped")) {
                        container.classList.remove("flipped");
                    }
                    resetPKRound();
                }, 2500);
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

// 自动升级
function checkLevelUp() {
    if (currentDrawCount >= 8) {
        if (currentLevelIndex < advancedLevels.length - 1) {
            currentLevelIndex++;
            currentDrawCount = 0;
        }
    }
}