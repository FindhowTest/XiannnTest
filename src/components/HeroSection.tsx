import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import { motion } from "framer-motion";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.5);
  
  const memberCount = useCountUp(500, 2000, statsVisible);
  const trainerCount = useCountUp(20, 1500, statsVisible);
  const programCount = useCountUp(50, 1800, statsVisible);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Fitness gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-glow opacity-50" />
      </motion.div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm uppercase tracking-wider mb-6">
              頂級健身體驗
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              突破
            </motion.span>
            <br />
            <motion.span 
              className="text-gradient inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              極限
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            專業教練團隊 · 頂級設備 · 個人化訓練計畫
            <br />
            開啟你的健身之旅，遇見更強大的自己
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="hero" size="xl">
                立即加入
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="heroOutline" size="xl">
                <Play size={20} className="mr-2" />
                觀看影片
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats with Count Up Animation */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-display text-4xl md:text-5xl text-gradient">
                {memberCount}+
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                會員
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-display text-4xl md:text-5xl text-gradient">
                {trainerCount}+
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                專業教練
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-display text-4xl md:text-5xl text-gradient">
                {programCount}+
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                課程項目
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
