// =============================================================
// entries.js —— 所有照片 / 文字记录数据
// 以后发新照片，只需要修改这个文件即可
 // =========================================================
        // 【如何添加一条记录】（纯静态，不用框架，只改这个数组）
        // 每条记录可写：
        //   id    唯一编号
        //   type  'photo' 照片 | 'text' 纯文字 | 'quote' 语录
        //   url   仅 photo 需要：图片地址（建议用 jsDelivr CDN，带 @main）
        //   date  日期 + 一句话，例如 "2026-08-27 蓝调时刻"
        //   text  文字内容（text / quote 必填；photo 可省略，写了会显示在图下方）
        //   tag   标签，用于顶部筛选，例如 "旅行" "日常" "电影" "蓝调时刻"
        //
        // 示例（需要更多文字条目时，复制下面格式、改一个不重复的 id 即可）：
        // 文字在网格里只占一小块（和照片同尺寸，自动露出前几行摘要），点开才看全文。
        // 文字里用 \n 换行，连续两个 \n（空行）就能分段。
        // {
        //     id: 18,
        //     type: "text",
        //     date: "2026-08-27 今天的碎碎念",
        //     text: "今天又走到那个路口，风很大。\n把文字直接写在这里，就不需要再截图成图片了。\n\n换一行空行就能分段，点开卡片就能看完整篇日记。",
        //     tag: "日常"
        // },
        // {
        //     id: 19,
        //     type: "quote",
        //     date: "2026-08-27 摘抄",
        //     text: "我们终将相遇，在更好的时光里。",
        //     tag: "日常"
        // },
        // =========================================================
// =============================================================

const entries = [
    {
        id: 1,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/2026052008040.webp",
        date: "2026-05-20 好远的地方",
        tag: "旅行"
    },
    {
        id: 2,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260522185255.webp",
        date: "2026-05-21 好远的地方",
        tag: "旅行"
    },
    {
        id: 3,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260522185334.jpg",
        date: "2026-05-21 好远的地方",
        tag: "旅行"
    },
    {
        id: 4,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260522200401.jpg",
        date: "2026-05-22 好远的地方",
        tag: "旅行"
    },
    {
        id: 5,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260522200837.jpg",
        date: "2026-05-22 好远的地方",
        tag: "旅行"
    },
    {
        id: 6,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260523180134.jpg",
        date: "2026-05-23 好远的地方",
        tag: "旅行"
    },
    {
        id: 7,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/1786435114416.webp",
        date: "2026-08-05 好的太阳",
        tag: "日常"
    },
    {
        id: 8,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG20260520053906.webp",
        date: "2026-08-07 McDonald's",
        tag: "日常"
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
        tag: "日常"
    },
    {
        id: 13,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/IMG2022.webp",
        date: "2026-08-27 过去的过去",
        tag: "日常"
    },
    {
        id: 14,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/20260827.webp",
        date: "2026-08-27 原来是你",
        tag: "日常"
    },
    {
        id: 15,
        type: "photo",
        url: "https://cdn.jsdelivr.net/gh/Yu-zi-fei/Yu-zi-fei.github.io@main/images/20260308.webp",
        date: "2026-08-27 也曾拥有",
        tag: "日常"
    },
    {
        id: 16,
        type: "text",
        date: "2026-08-27 碎碎念(ai测试文字)",
        text: "醒过来，开了电脑。屏幕亮起来的那一下，光打在脸上，像是某种熟悉的仪式。点开个视频看了一会儿，又划拉两下网页，没什么特别吸引人的，腰有点僵，就又躺回床上了。枕头一靠，身体陷进被窝里，手指搭在鼠标上，习惯性地滑向下一个电影封面。\n上午的光线从白慢慢变亮，我窝在那里，一部接一部地点开、快进、暂停、换下一部。有时候眼睛酸了，就眯一会儿，再睁开时发现剧情已经跳到了完全陌生的段落，却也懒得倒回去。\n\n中午自己炒了盘牛肉，就着米饭吃完，洗了碗。太阳晒到床尾，躺回去迷迷糊糊闭了眼，再醒来已经是下午三点半。\n\n然后继续看。光从白变成金黄又变成灰蓝，而我的世界始终框在二十四寸的荧幕里。偶尔点开《我的世界》，操纵着方块小人飞过连绵的像素山脉，那些棱角分明的山峰在虚拟夕阳里拉出长长的影子。我知道它们不是四姑娘山的雪线，不是阿尔泰黎明时分被染成粉色的岩壁，也不是西藏八千米群峰在云层之上的沉默庄严。但此刻，当我的小人悬停在一块浮空岛边缘，看着虚拟的云海漫过像素森林的时候，某种相似的辽阔感还是会轻轻撞一下胸口。\n\n手机上倒是有朋友发来的照片——厦门蓝绿色的海岸线，北京写字楼三十层的夜景车流，还有上海深圳那些我从没去过的璀璨角落。但我不怎么碰手机，偶尔拿起来瞄一眼就放回去，大部分时候还是坐在电脑前面，看那些从二十四寸屏幕里涌出来的东西。\n\n说实话，无聊是真的。整天盯着RGB像素组成的荧光屏幕，眼睛干涩的时候闭一会儿，再睁开还是那道光。但我突然觉得，或许\"看\"和\"感知\"是两回事。那些我看不了的雪山和大海，此刻正以另一种方式存在着——在别人的镜头里，在我的想象里，在某个时空坐标确定的角落里继续它们的晨昏交替。而我躺在这里，用眼睛去抵达，用发呆去丈量，也未必是虚度。\n\n开学快到了，生理学的教材摊在桌上，翻到第二章就停住了。那些关于细胞膜电位和动作电位的知识，初中高中学过轮廓，如今再看却觉得每条离子通道都通向一个更幽深的谜。看不下去的时候就让它摊着，那些复杂的图表在台灯光圈里安安静静的。。",
        tag: "日常"
    },
    {
        id: 17,
        type: "text",
        date: "2026-08-28 碎碎念(ai测试文字)",
        text: "醒离子通道都通向一个更幽深的谜。看不下去的时候就让它摊着，那些复杂的图表在台灯光圈里安安静静的。。",
        tag: "日常"
    },
    {
        id: 18,
        type: "text",
        date: "2026-08-28 碎碎念(ai测试文字)",
        text: "醒离子通道都通向一个更soafihsdighijOJGOFNJBNNLD幽深的谜。看不下去的时候就让它摊着，那些复杂的图表在台灯光圈里安安静静的。。",
        tag: "日常"
    }
];