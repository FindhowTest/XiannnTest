type Item = { text: string; done?: boolean };

const MILESTONES: Item[] = [
    { text: "Site deployed on Cloudflare Pages", done: true },
    { text: "Removed Lovable branding (title/preview)", done: true },
    { text: "Post 1 log update per week", done: false },
    { text: "Move logs into a JSON file (easy to edit)", done: false },
    { text: "Consider booking/pricing later (not now)", done: false },
];

export default function NowSection() {
    return (
        <section id="now" className="py-10">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="rounded-2xl border p-5 bg-background/50">
                    <h2 className="text-xl font-semibold">Now</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                        Not a gym business yet — just building habits: training, learning, and shipping.
                    </p>

                    <ul className="mt-4 space-y-2">
                        {MILESTONES.map((x, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="mt-0.5">{x.done ? "✅" : "⬜"}</span>
                                <span className="text-sm">{x.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
