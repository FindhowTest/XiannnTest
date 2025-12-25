export default function HeroSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* 標題 */}
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    健身紀錄｜從 0 開始
                </h1>

                {/* 副標 */}
                <p className="mt-4 text-muted-foreground leading-relaxed">
                    記錄訓練、生活與建站的過程。
                    <br />
                    不是教學，也不是販售，只是把每天做過的事留下來。
                </p>

                {/* 行動按鈕 */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="#log"
                        className="underline underline-offset-4"
                    >
                        看紀錄
                    </a>

                    <a
                        href="https://instagram.com/你的IG帳號"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 text-muted-foreground"
                    >
                        追蹤 IG
                    </a>
                </div>

                {/* 小字說明（低調、很重要） */}
                <div className="mt-8 text-xs text-muted-foreground">
                    Build in Public · 更新不固定，但會持續
                </div>
            </div>
        </section>
    );
}
