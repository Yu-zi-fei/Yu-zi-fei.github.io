// =============================================================
// entries.js —— 照片、日记和语录的内容清单
//
// 【添加记录】复制下面的示例到文件下方 entries 数组中：
// 删除每行开头的 //，并给每条记录填写一个不重复的 id。
// 记录之间用逗号分隔；日期建议以 YYYY-MM-DD 开头。
// type: "photo" 是照片，"text" 是日记，"quote" 是语录。
// tag 是标签，网站会用它生成筛选按钮。
//
// 【写日记】正文用一对反引号包住，可以直接按回车换行，
// 空一行就是分段。不要把普通单引号或中文引号当作反引号。
// Windows 常见键盘：切换到英文输入状态，按数字 1 左边、
// Esc 下方的键，不要按 Shift。键盘布局不同的话也可以复制：
// `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `
// 注意：这里只需复制一个符号，分别放在正文开头和结尾。
// 正文里如果要写反引号，请在它前面加反斜杠：\`
// 如果要写 ${，请写成 \${，避免被当作程序内容。
//
// 【日记示例】
// {
//     id: 20,
//     type: "text",
//     date: "2026-08-27 今天的碎碎念",
//     text: `今天又走到那个路口，风很大。
// 直接按回车就可以换行。
//
// 空一行，就可以开始新的段落。`,
//     tag: "日常"
// },
//
// 【语录示例】
// {
//     id: 21,
//     type: "quote",
//     date: "2026-08-27 摘抄",
//     text: `我们终将相遇，在更好的时光里。`,
//     tag: "日常"
// },
// =============================================================

const entries = [
    {
        id: 1,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/2026052008040.webp",
        date: "2026-05-20 好远的地方",
        tag: "Daily"
    },
    {
        id: 2,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260522185255.webp",
        date: "2026-05-21 好远的地方",
        tag: "Daily"
    },
    {
        id: 3,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260522185334.jpg",
        date: "2026-05-21 好远的地方",
        tag: "Daily"
    },
    {
        id: 4,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260522200401.jpg",
        date: "2026-05-22 好远的地方",
        tag: "Daily"
    },
    {
        id: 5,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260522200837.jpg",
        date: "2026-05-22 好远的地方",
        tag: "Daily"
    },
    {
        id: 6,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260523180134.jpg",
        date: "2026-05-23 好远的地方",
        tag: "Daily"
    },
    {
        id: 7,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/1786435114416.webp",
        date: "2026-08-05 好的太阳",
        tag: "Daily"
    },
    {
        id: 8,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260520053906.webp",
        date: "2026-08-07 McDonald's",
        tag: "Daily"
    },
    {
        id: 9,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/1280_1280.jpeg",
        date: "2026-08-08 哈尔的移动城堡",
        tag: "电影"
    },
    {
        id: 10,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/20260730.jpg",
        date: "2026-08-10 蓝调时刻",
        tag: "蓝调时刻"
    },
    {
        id: 11,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/260814.webp",
        date: "2026-08-14 蓝调时刻",
        tag: "蓝调时刻"
    },
    {
        id: 12,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/1786784568785.webp",
        date: "2026-08-15 神人吐槽",
        tag: "Daily"
    },
    {
        id: 13,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG2022.webp",
        date: "2026-08-27 过去的过去",
        tag: "Daily"
    },
    {
        id: 14,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/20260827.webp",
        date: "2026-08-27 原来是你",
        tag: "Daily"
    },
    {
        id: 15,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/20260308.webp",
        date: "2026-08-27 也曾拥有",
        tag: "Daily"
    },
    {
        id: 16,
        type: "text",
        date: "2026-08-27 碎碎念(ai测试文字)",
        text: `醒过来，开了电脑。屏幕亮起来的那一下，光打在脸上，像是某种熟悉的仪式。点开个视频看了一会儿，又划拉两下网页，没什么特别吸引人的，腰有点僵，就又躺回床上了。枕头一靠，身体陷进被窝里，手指搭在鼠标上，习惯性地滑向下一个电影封面。
上午的光线从白慢慢变亮，我窝在那里，一部接一部地点开、快进、暂停、换下一部。有时候眼睛酸了，就眯一会儿，再睁开时发现剧情已经跳到了完全陌生的段落，却也懒得倒回去。

中午自己炒了盘牛肉，就着米饭吃完，洗了碗。太阳晒到床尾，躺回去迷迷糊糊闭了眼，再醒来已经是下午三点半。

然后继续看。光从白变成金黄又变成灰蓝，而我的世界始终框在二十四寸的荧幕里。偶尔点开《我的世界》，操纵着方块小人飞过连绵的像素山脉，那些棱角分明的山峰在虚拟夕阳里拉出长长的影子。我知道它们不是四姑娘山的雪线，不是阿尔泰黎明时分被染成粉色的岩壁，也不是西藏八千米群峰在云层之上的沉默庄严。但此刻，当我的小人悬停在一块浮空岛边缘，看着虚拟的云海漫过像素森林的时候，某种相似的辽阔感还是会轻轻撞一下胸口。

手机上倒是有朋友发来的照片——厦门蓝绿色的海岸线，北京写字楼三十层的夜景车流，还有上海深圳那些我从没去过的璀璨角落。但我不怎么碰手机，偶尔拿起来瞄一眼就放回去，大部分时候还是坐在电脑前面，看那些从二十四寸屏幕里涌出来的东西。

说实话，无聊是真的。整天盯着RGB像素组成的荧光屏幕，眼睛干涩的时候闭一会儿，再睁开还是那道光。但我突然觉得，或许"看"和"感知"是两回事。那些我看不了的雪山和大海，此刻正以另一种方式存在着——在别人的镜头里，在我的想象里，在某个时空坐标确定的角落里继续它们的晨昏交替。而我躺在这里，用眼睛去抵达，用发呆去丈量，也未必是虚度。

开学快到了，生理学的教材摊在桌上，翻到第二章就停住了。那些关于细胞膜电位和动作电位的知识，初中高中学过轮廓，如今再看却觉得每条离子通道都通向一个更幽深的谜。看不下去的时候就让它摊着，那些复杂的图表在台灯光圈里安安静静的。。`,
        tag: "Daily"
    },
    {
        id: 17,
        type: "text",
        date: "2026-08-28 碎碎念(ai测试文字)",
        text: `醒离子通道都通向一个更幽深的谜。看不下去的时候就让它摊着，那些复杂的图表在台灯光圈里安安静静的。。`,
        tag: "Daily"
    },
    {
        id: 18,
        type: "text",
        date: "2026-08-28 碎碎念(ai测试文字)",
        text: `醒离子通道都通向一个更soafihsdighijOJGOFNJBNNLD幽深的谜。看不下去的时候就让它摊着，那些复杂的图表在台灯光圈里安安静静的。。`,
        tag: "Daily"
    },
    {  
        id: 19,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io/images/1788275409044.webp",
        date: "2026-09-01 ",
        tag: "Daily"
    }
        {
        id: 20,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20261117212217_29_252.jpg",
        date: "2026-10-12 澳门｜澳门街巷里，欧式建筑与老旧居民楼交错相映",
        tag: "Daily"
    },
    {
        id: 21,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20261117212217_30_252.jpg",
        date: "2026-10-14 表情包｜左脑没有正确的想法，右脑也没有剩下什么",
        tag: "Daily"
    },
    {
        id: 22,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20261117212217_31_252.jpg",
        date: "2026-10-09 罗小黑｜罗小黑静静待在桌面上，陪伴平凡的日常",
        tag: "Daily"
    },
    {
        id: 23,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20261117212217_32_252.jpg",
        date: "2026-11-04 生日｜点亮生日蜡烛，为别人的生日留下温暖记忆",
        tag: "Daily"
    },
    {
        id: 24,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20261117212217_33_252.jpg",
        date: "2026-09-07 湖畔｜夕阳下的摩天轮很美，只可惜缺少同行的人",
        tag: "Daily"
    },
    {
        id: 25,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20261117212217_34_252.jpg",
        date: "2026-11-17 嘿咻｜嘿咻静静待在身边，成为一个小小的陪伴",
        tag: "Daily"
    }
];
