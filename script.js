const questions = [
    { text: "なんらかの特技やスキル・好きなことがある？", yes: 1, no: 2 },
    { text: "文章を書くのがわりと好き？", yes: "アフィリエイトブログ📖", no: 3 },
    { text: "ITスキルを活かしたい？", yes: "Webデザイン🎨", no: "転売・せどり📦" },
    { text: "動画編集に興味がある？", yes: "YouTuber🎥", no: "ハンドメイド🧵" }
];

let currentStep = 0;

function nextStep(answer) {
    let next = questions[currentStep][answer];
    if (typeof next === "number") {
        currentStep = next;
        document.getElementById("question").textContent = questions[next].text;
    } else {
        document.getElementById("question").textContent = "オススメの副業：" + next;
        document.querySelector(".buttons").style.display = "none";
    }
}
