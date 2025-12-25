import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const contactInfo = [
  {
    icon: MapPin,
    label: "地址",
    value: "台北市信義區信義路五段7號",
  },
  {
    icon: Phone,
    label: "電話",
    value: "02-2345-6789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@forgegym.com",
  },
  {
    icon: Clock,
    label: "營業時間",
    value: "24小時全天候開放",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-hero relative overflow-hidden">
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-glow opacity-20"
        animate={{
          x: [0, 50, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left">
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm uppercase tracking-wider mb-4"
              whileHover={{ scale: 1.05 }}
            >
              聯繫我們
            </motion.span>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              開始你的<span className="text-gradient">蛻變</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              預約免費體驗課程，讓我們的專業教練帶你踏出改變的第一步
            </p>

            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {contactInfo.map((info, index) => (
                <StaggerItem key={info.label}>
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/30"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "hsl(24 100% 50% / 0.2)",
                        rotate: 5,
                      }}
                    >
                      <info.icon className="text-primary" size={20} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {[Instagram, Facebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-card rounded-xl flex items-center justify-center border border-border/50"
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: "hsl(24 100% 50% / 0.5)",
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-muted-foreground hover:text-primary transition-colors" size={20} />
                </motion.a>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div 
              className="bg-card-gradient rounded-2xl p-8 border border-border/50"
              whileHover={{ 
                borderColor: "hsl(24 100% 50% / 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-3xl mb-6">預約免費體驗</h3>

              <form className="space-y-6">
                {[
                  { label: "姓名", type: "text", placeholder: "請輸入您的姓名" },
                  { label: "電話", type: "tel", placeholder: "請輸入您的電話" },
                  { label: "Email", type: "email", placeholder: "請輸入您的 Email" },
                ].map((field, index) => (
                  <motion.div
                    key={field.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <label className="text-sm text-muted-foreground mb-2 block">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder={field.placeholder}
                      whileFocus={{ 
                        borderColor: "hsl(24 100% 50%)",
                        boxShadow: "0 0 20px hsl(24 100% 50% / 0.1)",
                      }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <label className="text-sm text-muted-foreground mb-2 block">
                    訊息（選填）
                  </label>
                  <motion.textarea
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="有什麼想讓我們知道的嗎？"
                    whileFocus={{ 
                      borderColor: "hsl(24 100% 50%)",
                      boxShadow: "0 0 20px hsl(24 100% 50% / 0.1)",
                    }}
                  />
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Button variant="hero" size="xl" className="w-full">
                    送出預約
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
