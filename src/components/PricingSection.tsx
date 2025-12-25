import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const plans = [
  {
    name: "基礎方案",
    price: "1,200",
    period: "月",
    description: "適合剛開始健身的你",
    features: [
      "健身房全區使用",
      "基礎團體課程",
      "更衣室與淋浴設施",
      "免費停車",
    ],
    popular: false,
  },
  {
    name: "進階方案",
    price: "2,500",
    period: "月",
    description: "最受歡迎的選擇",
    features: [
      "健身房全區使用",
      "所有團體課程",
      "每月4堂私人教練課",
      "營養諮詢服務",
      "免費停車",
      "專屬置物櫃",
    ],
    popular: true,
  },
  {
    name: "尊榮方案",
    price: "4,800",
    period: "月",
    description: "極致的健身體驗",
    features: [
      "健身房全區使用",
      "所有團體課程",
      "無限私人教練課",
      "營養諮詢服務",
      "VIP休息區使用",
      "免費停車",
      "專屬置物櫃",
      "按摩服務",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            會員方案
          </motion.span>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            選擇適合你的<span className="text-gradient">方案</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            彈性的會員制度，讓你依照自己的需求選擇最合適的健身計畫
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.15}>
          {plans.map((plan, index) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary/20 to-card border-primary/50"
                    : "bg-card-gradient border-border/50"
                }`}
                initial={{ scale: plan.popular ? 1.05 : 1 }}
                whileHover={{ 
                  scale: plan.popular ? 1.08 : 1.03,
                  borderColor: "hsl(24 100% 50% / 0.5)",
                  boxShadow: "0 0 60px hsl(24 100% 50% / 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-primary-foreground text-sm font-medium"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    最受歡迎
                  </motion.div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-3xl mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-muted-foreground">NT$</span>
                  <motion.span 
                    className="font-display text-5xl text-gradient"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {plan.price}
                  </motion.span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + featureIndex * 0.05, duration: 0.3 }}
                    >
                      <motion.div 
                        className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center"
                        whileHover={{ scale: 1.2, backgroundColor: "hsl(24 100% 50% / 0.4)" }}
                      >
                        <Check size={12} className="text-primary" />
                      </motion.div>
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant={plan.popular ? "hero" : "heroOutline"}
                    size="lg"
                    className="w-full"
                  >
                    選擇此方案
                  </Button>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PricingSection;
