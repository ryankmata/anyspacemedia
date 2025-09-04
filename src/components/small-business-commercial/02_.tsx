{
  /* Marketing Solutions Section
const MarketingSolutions = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState<
      "website" | "social" | "marketing"
    >("website");
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    const solutions = {
      website: {
        title: "Website Content",
        icon: <Monitor className="w-6 h-6" />,
        description:
          "Professional imagery that makes your website convert visitors into customers",
        features: [
          {
            icon: <Eye className="w-5 h-5" />,
            title: "Hero Images",
            desc: "Stunning headers that capture attention",
          },
          {
            icon: <Camera className="w-5 h-5" />,
            title: "Product/Service Galleries",
            desc: "Showcase what you offer",
          },
          {
            icon: <Users className="w-5 h-5" />,
            title: "Team Photos",
            desc: "Build trust with professional portraits",
          },
          {
            icon: <Building className="w-5 h-5" />,
            title: "Location Showcases",
            desc: "Highlight your business space",
          },
        ],
      },
      social: {
        title: "Social Media",
        icon: <Smartphone className="w-6 h-6" />,
        description:
          "Engaging content that grows your social media presence and drives engagement",
        features: [
          {
            icon: <Heart className="w-5 h-5" />,
            title: "Story Content",
            desc: "Behind-the-scenes and daily updates",
          },
          {
            icon: <Share2 className="w-5 h-5" />,
            title: "Shareable Posts",
            desc: "Content designed to go viral",
          },
          {
            icon: <Video className="w-5 h-5" />,
            title: "Reels & Videos",
            desc: "Dynamic content for maximum reach",
          },
          {
            icon: <MessageCircle className="w-5 h-5" />,
            title: "Engagement Drivers",
            desc: "Content that sparks conversation",
          },
        ],
      },
      marketing: {
        title: "Marketing Campaigns",
        icon: <Target className="w-6 h-6" />,
        description:
          "Strategic visual content that drives measurable business results",
        features: [
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: "Brand Campaigns",
            desc: "Cohesive visual storytelling",
          },
          {
            icon: <Globe className="w-5 h-5" />,
            title: "Digital Advertising",
            desc: "Assets for paid campaigns",
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: "Seasonal Promotions",
            desc: "Timely marketing content",
          },
          {
            icon: <Award className="w-5 h-5" />,
            title: "Brand Recognition",
            desc: "Memorable visual identity",
          },
        ],
      },
    };
  
    return (
      <section className="py-24 bg-gradient-to-b from-black via-neutral-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Complete </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
                Marketing Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From your website to social media campaigns, we create visual
              content that works across all your marketing channels.
            </p>
          </motion.div>
  
          
          <div className="flex justify-center mb-12">
            <div className="flex bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              {(Object.keys(solutions) as Array<keyof typeof solutions>).map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {solutions[tab].icon}
                    <span className="ml-2">{solutions[tab].title}</span>
                  </button>
                )
              )}
            </div>
          </div>
  

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {solutions[activeTab].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {solutions[activeTab].description}
                </p>
              </div>
  
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solutions[activeTab].features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#EDC577]/30 transition-all duration-300"
                  >
                    <div className="text-[#EDC577] mb-4">{feature.icon}</div>
                    <h4 className="text-white font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };*/
}
