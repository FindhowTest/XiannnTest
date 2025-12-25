export type LogItem = {
    date: string;      // "2025-12-25"
    title: string;     // "胸+三頭 / 網站上線"
    note?: string;     // 可選補充
    tags?: string[];   // ["training", "build"]
};

const DEFAULT_LOGS: LogItem[] = [
    {
        date: "2025-12-25",
        title: "網站成功部署到 Cloudflare Pages",
        note: "拿到 pages.dev 網址，開始把它變成自己的紀錄站。",
        tags: ["build"],
    },
    {
        date: "2025-12-24",
        title: "訓練 Day 1：胸＋三頭（RPE 7）",
        note: "先求有，再求好。今天做得到就算贏。",
        tags: ["training"],
    },
    {
        date: "2025-12-23",
        title: "專案初始化：npm install / npm run dev",
        note: "把環境打通，開始 Build in Public。",
        tags: ["build"],
    },
];

function Tag({ text }: { text: string }) {
    return (
        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs opacity-80">
            {text}
        </span>
    );
}

export default function TrainingLogSection() {
    const logs = DEFAULT_LOGS;

    return (
        <section id="log" className="py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-2xl font-semibold mb-2">健身 × 建站紀錄</h2>
                <p className="text-muted-foreground mb-6">
                    用最小步前進：一週更新一條也可以。
                </p>

                <div className="space-y-3">
                    {logs.map((x) => (
                        <div
                            key={`${x.date}-${x.title}`}
                            className="rounded-2xl border p-4 bg-background/50"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="text-sm text-muted-foreground">{x.date}</div>
                                <div className="flex gap-2">
                                    {x.tags?.map((t) => <Tag key={t} text={t} />)}
                                </div>
                            </div>

                            <div className="mt-1 font-medium">{x.title}</div>
                            {x.note ? (
                                <div className="mt-1 text-sm text-muted-foreground">
                                    {x.note}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-sm text-muted-foreground">
                    想看更多即時碎片：{" "}
                    <a
                        className="underline"
                        href="https://instagram.com/你的IG帳號"
                        target="_blank"
                        rel="noreferrer"
                    >
                        追蹤 IG
                    </a>
                </div>
            </div>
        </section>
    );
}
