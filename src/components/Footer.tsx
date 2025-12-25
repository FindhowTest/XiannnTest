const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="font-display text-2xl text-primary-foreground">F</span>
            </div>
            <span className="font-display text-2xl tracking-wider">FORGE</span>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              隱私權政策
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              服務條款
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              常見問題
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 FORGE Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
