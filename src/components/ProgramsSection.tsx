import { Dumbbell, Users, Heart, Zap } from "lucide-react";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import training3 from "@/assets/training-3.jpg";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const programs = [
  {
    title: "重量訓練",
    description: "專業的力量訓練課程，打造完美體態",
    image: training1,
    icon: Dumbbell,
  },
  {
    title: "瑜伽課程",
    description: "身心合一，提升柔韌性與內在平靜",
    image: training2,
    icon: Heart,
  },
  {
    title: "拳擊訓練",
    description: "高強度有氧，釋放壓力，燃燒卡路里",
    image: training3,
    icon: Zap,
  },
];

const features = [
  {
    icon: Dumbbell,
    title: "頂級設備",
    description: "引進國際品牌專業器材",
  },
  {
    icon: Users,
    title: "專業教練",
    description: "國際認證專業教練團隊",
  },
  {
    icon: Heart,
    title: "健康管理",
    description: "全方位健康追蹤系統",
  },
  {
    icon: Zap,
    title: "24小時開放",
    description: "隨時健身，不受限制",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-hero relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-glow opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            我們的課程
          </motion.span>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            專業課程<span className="text-gradient">項目</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            從重量訓練到瑜伽課程，我們提供多元化的運動選擇，滿足你的各種健身需求
          </p>
        </AnimatedSection>

        {/* Programs Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-24" staggerDelay={0.15}>
          {programs.map((program, index) => (
            <StaggerItem key={program.title}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-card-gradient border border-border/50 cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "hsl(24 100% 50% / 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "hsl(24 100% 50% / 0.3)",
                      }}
                    >
                      <program.icon className="text-primary" size={20} />
                    </motion.div>
                    <h3 className="font-display text-2xl">{program.title}</h3>
                  </div>
                  <motion.p 
                    className="text-muted-foreground text-sm"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {program.description}
                  </motion.p>
                </motion.div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "radial-gradient(circle at 50% 100%, hsl(24 100% 50% / 0.1) 0%, transparent 50%)",
                  }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="p-6 rounded-xl bg-card/50 border border-border/50 group"
                whileHover={{ 
                  borderColor: "hsl(24 100% 50% / 0.5)",
                  backgroundColor: "hsl(var(--card))",
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "hsl(24 100% 50% / 0.2)",
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="text-primary" size={24} />
                </motion.div>
                <h4 className="font-display text-xl mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProgramsSection;
