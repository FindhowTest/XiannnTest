type Item = { text: string; done?: boolean };

const MILESTONES: Item[] = [
    { text: "網站上線（Cloudflare Pages）", done: true },
    { text: "清掉 Lovable 痕跡（標題/預覽）", done: true },
    { text: "每週更新 1 條紀錄", done: false },
    { text: "把 Log 改成 JSON 檔好維護", done: false },
    { text: "之後再考慮課程/預約（現在先不要）", done: false },
];

export default function NowSection() {
    return (
        <section id="now" className="py-10">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="rounded-2xl border p-5 bg-background/50">
                    <h2 className="text-xl font-semibold">目前進度</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                        我還沒開店，先把自己準備好：訓練、學習、建站。
                    </p>

                    <ul className="mt-4 space-y-2">
                        {MILESTONES.map((x, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="mt-0.5">
                                    {x.done ? "?" : "?"}
                                </span>
                                <span className="text-sm">{x.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
