{
  /* Services & Pricing Section
const ServicesAndPricing = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    const packages = [
      {
        name: "Startup Package",
        price: "$299",
        description: "Perfect for new businesses getting started",
        features: [
          "Up to 15 professional photos",
          "Basic editing & color correction",
          "High-resolution delivery",
          "Usage rights included",
          "1-2 hour shoot",
          "Social media sized formats",
        ],
        popular: false,
      },
      {
        name: "Growth Package",
        price: "$599",
        description: "Ideal for growing businesses needing more content",
        features: [
          "Up to 40 professional photos",
          "Premium editing & retouching",
          "High-resolution delivery",
          "Extended usage rights",
          "3-4 hour shoot",
          "Web & print formats",
          "Basic video snippets",
          "Rush delivery available",
        ],
        popular: true,
      },
      {
        name: "Enterprise Package",
        price: "$999",
        description: "Comprehensive solution for established businesses",
        features: [
          "Up to 75 professional photos",
          "Advanced editing suite",
          "Multiple format delivery",
          "Commercial usage rights",
          "Full day shoot",
          "Professional video content",
          "Drone footage (if applicable)",
          "Brand guideline integration",
        ],
        popular: false,
      },
    ];
  
    return (
      <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-neutral-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Simple, </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the package that fits your business needs. All packages
              include professional editing and commercial usage rights.
            </p>
          </motion.div>
  
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className={`relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl border p-8 transition-all duration-300 hover:scale-105 ${
                  pkg.popular
                    ? "border-[#EDC577] shadow-2xl shadow-[#EDC577]/20"
                    : "border-white/10 hover:border-[#EDC577]/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black px-6 py-2 rounded-full font-bold text-sm">
                      Most Popular
                    </div>
                  </div>
                )}
  
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-[#EDC577] mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-400">{pkg.description}</p>
                </div>
  
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-[#EDC577] mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
  
                <button
                  className={`w-full py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black hover:shadow-2xl hover:shadow-[#EDC577]/40"
                      : "bg-white/10 text-white border border-white/20 hover:bg-[#EDC577]/10 hover:border-[#EDC577]/50"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
  
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-center bg-gradient-to-r from-[#EDC577]/10 via-[#8E6B0F]/5 to-[#EDC577]/10 rounded-3xl p-12 border border-[#EDC577]/20"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              We create tailored packages for unique business needs, ongoing
              partnerships, and large-scale projects.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#EDC577]/30 transition-all duration-300 hover:scale-105">
              Discuss Custom Solutions
              <Briefcase className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    );
  };*/
}
