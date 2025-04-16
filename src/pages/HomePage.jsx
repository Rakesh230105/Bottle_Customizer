import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Fade in animation for sections
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.2 } 
    }
  };

  // Client logos
  const clients = [
    { 
      name: "Coca Cola", 
      description: "Partnered since 2015, providing custom bottles for limited edition beverages.",
      image: "https://logo.clearbit.com/coca-cola.com"
    },
    { 
      name: "PepsiCo", 
      description: "Supplying specialty bottles for their premium product lines across North America.",
      image: "https://logo.clearbit.com/pepsico.com"
    },
    { 
      name: "RC Cola", 
      description: "Created distinctive bottle designs that helped revitalize their brand identity.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aMJmm2y26PVGZkxJSlkSA9HNv1Oi5By60Q&s"
    },
    { 
      name: "Sprite", 
      description: "Developed eco-friendly bottle solutions for their sustainable packaging initiative.",
      image: "https://1000logos.net/wp-content/uploads/2020/09/Sprite-Logo-2019.png"
    },
    { 
      name: "Fanta", 
      description: "Designed unique shaped bottles for their seasonal promotional campaigns.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fanta_logo_%282009%29.svg/1267px-Fanta_logo_%282009%29.svg.png"
    },
    { 
      name: "Mountain Dew", 
      description: "Created high-performance bottles for their extreme sports edition drinks.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mountain_Dew_logo.svg/1200px-Mountain_Dew_logo.svg.png"
    }
  ];

  // Bottle sizes with additional details
  const bottleSizes = [
    { 
      size: "200ml", 
      best_for: "Sample sizes, travel editions", 
      material_options: ["Glass", "PET", "Recycled PET"],
      image: "https://5.imimg.com/data5/BW/UU/AK/ANDROID-15289608/prod-20200508-0131563897051655202858383-jpg.jpg"
    },
    { 
      size: "250ml", 
      best_for: "Energy drinks, premium beverages", 
      material_options: ["Glass", "PET", "Aluminum"],
      image: "https://5.imimg.com/data5/AR/XW/JF/ANDROID-15289608/prod-20200714-1236411685044799250956057-jpg.jpg"
    },
    { 
      size: "300ml", 
      best_for: "Specialty drinks, craft beverages", 
      material_options: ["Glass", "PET", "Biodegradable plastic"],
      image: "https://everpack.in/wp-content/uploads/2025/02/300ml-water-bottle.webp"
    },
    { 
      size: "330ml", 
      best_for: "Standard beverages, most popular size", 
      material_options: ["Glass", "PET", "Aluminum", "Recycled materials"],
      image: "https://product-catalogue.alpla.com/sites/default/files/styles/product/public/2022-07/rgb_nfc-330_26g38.jpg?itok=WIgV8i5C"
    },
    { 
      size: "500ml", 
      best_for: "Sports drinks, water bottles", 
      material_options: ["PET", "Recycled PET", "Biodegradable materials"],
      image: "https://5.imimg.com/data5/OK/LF/MY-10817613/500ml-water-bottle-500x500.jpg"
    },
    { 
      size: "1L", 
      best_for: "Family size beverages, bulk packaging", 
      material_options: ["PET", "Glass", "Reinforced materials"],
      image: "https://5.imimg.com/data5/LD/AT/MY-34864854/transparent-plastic-pet-bottle-500x500.jpg"
    }
  ];

  // Manufacturing capabilities
  const capabilities = [
    {
      name: "Custom Molds",
      description: "Create unique bottle shapes and designs that stand out on shelves and reinforce your brand identity.",
      capacity: "Up to 50 unique mold designs per month",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a7e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      name: "High-Volume Production",
      description: "Meet large-scale production needs with our industrial facilities capable of producing millions of units monthly.",
      capacity: "Production capacity of 5 million bottles per month",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      name: "Decoration Services",
      description: "In-house labeling, embossing, screen printing, and sleeve application to complete your bottle design.",
      capacity: "Full customization with up to 8-color printing",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      name: "Quality Control",
      description: "Rigorous testing protocols ensure every bottle meets our strict quality standards before shipping.",
      capacity: "99.8% defect-free guarantee",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
    }
  ];

  // Sustainability initiatives
  const sustainabilityInitiatives = [
    {
      title: "Recycled Materials",
      description: "We offer bottles made from up to 100% recycled materials, reducing virgin plastic usage and environmental impact.",
      image: "https://www.shutterstock.com/shutterstock/photos/2002912115/display_1500/stock-vector-a-bottle-of-water-with-a-green-city-inside-the-idea-is-to-recycle-old-plastic-bottles-think-green-2002912115.jpg"
    },
    {
      title: "Energy-Efficient Production",
      description: "Our facilities utilize solar power and energy-efficient machinery, reducing our carbon footprint by 40% since 2020.",
      image: "https://www.quincycompressor.com/wp-content/uploads/2020/12/Graphic-3-01.jpg"
    },
    {
      title: "Water Conservation",
      description: "Closed-loop water systems in our production facilities recycle 95% of water used in the manufacturing process.",
      image: "https://assets-news.housing.com/news/wp-content/uploads/2021/06/14175932/A-guide-to-water-conservation-methods-and-its-importance-FB-1200x700-compressed.jpg"
    },
    {
      title: "Waste Reduction",
      description: "Zero-waste initiatives have helped us achieve a 90% reduction in landfill waste from our production processes.",
      image: "https://pub.mdpi-res.com/polymers/polymers-15-01485/article_deploy/html/images/polymers-15-01485-g001-550.jpg?1678966390"
    }
  ];

  // Industry applications
  const industries = [
    {
      name: "Beverages",
      applications: ["Soft drinks", "Water", "Juices", "Energy drinks", "Alcoholic beverages"],
      description: "Our bottles are designed to maintain carbonation, preserve taste, and attract consumers with distinctive designs.",
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      name: "Food Products",
      applications: ["Sauces", "Oils", "Condiments", "Liquid foods"],
      description: "Food-grade bottles with tamper-evident features and optimal preservation capabilities.",
      image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      name: "Cosmetics",
      applications: ["Lotions", "Shampoos", "Body washes", "Skincare products"],
      description: "Elegant designs with precise dispensing options and compatibility with various cosmetic formulations.",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/5/HE/GV/DD/111683658/pet-plastic-cosmetic-bottles.jpg"
    },
    {
      name: "Pharmaceuticals",
      applications: ["Liquid medicines", "Supplements", "Medical-grade solutions"],
      description: "Meeting strict regulatory requirements with child-resistant options and precise dosage features.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80"
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What is the minimum order quantity?",
      answer: "Our minimum order quantity is 10,000 units per bottle design. For custom molds, we require a minimum order of 50,000 units to offset tooling costs."
    },
    {
      question: "What is the typical lead time for production?",
      answer: "Standard production lead time is 4-6 weeks after design approval. Custom mold creation may add 2-3 weeks to the timeline. Rush orders can be accommodated based on current production capacity."
    },
    {
      question: "Do you offer design assistance?",
      answer: "Yes, our in-house design team can help refine your concepts or create completely new designs based on your brand requirements and specifications."
    },
    {
      question: "Can you handle international shipping?",
      answer: "Yes, we ship worldwide and can handle all logistics and customs documentation. We have established relationships with reliable shipping partners globally."
    },
    {
      question: "What sustainability options do you offer?",
      answer: "We offer recycled PET (up to 100% post-consumer recycled content), biodegradable plastics, and lightweight glass options that reduce environmental impact."
    }
  ];

  // Customer Reviews with Indian names
  const reviews = [
    {
      name: "Rajesh Sharma",
      company: "Himalayan Spring Waters",
      position: "CEO",
      rating: 5,
      review: "The quality of bottles we received was exceptional. Our mineral water sales have increased by 30% since we started using their custom-designed bottles.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Patel",
      company: "Royal Beverages",
      position: "Product Manager",
      rating: 4,
      review: "Great service and timely delivery. The bottles perfectly matched our specifications and helped us launch our new mango drink successfully.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Arjun Singh",
      company: "Ayurveda Naturals",
      position: "Operations Head",
      rating: 5,
      review: "We needed special amber glass bottles for our ayurvedic products. They understood our requirements perfectly and delivered beyond our expectations.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Meera Gupta",
      company: "Spice Infusions",
      position: "Marketing Director",
      rating: 5,
      review: "The custom-shaped bottles they created for our premium spice oils have become our brand identity. Excellent craftsmanship and attention to detail.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Vikram Joshi",
      company: "Desi Daru",
      position: "Procurement Manager",
      rating: 4,
      review: "Reliable supplier for our liquor bottles. They handle large orders efficiently and maintain consistent quality across batches.",
      image: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    {
      name: "Ananya Reddy",
      company: "Green Cosmetics",
      position: "Founder",
      rating: 5,
      review: "Their sustainable PET bottles aligned perfectly with our eco-friendly brand values. The matte finish they suggested was a hit with our customers.",
      image: "https://randomuser.me/api/portraits/women/90.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-b from-white to-blue-50 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=800&q=80" 
            alt="Bottle manufacturing facility" 
            className="w-full h-full object-cover opacity-20" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Custom Bottle Manufacturing
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-md mx-auto text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We manufacture premium glass and PET bottles tailored to your exact requirements. 
              With over 15 years of industry experience, we've produced more than 2 billion custom bottles for leading brands worldwide.
              Only available for bulk orders.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/customize" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 md:text-lg shadow-md transform transition hover:scale-105">
                Design Your Bottle
              </Link>
              <a href="#contact" className="px-8 py-3 border border-cyan-400 text-base font-medium rounded-md text-cyan-600 bg-white hover:bg-cyan-50 md:text-lg shadow-md transform transition hover:scale-105">
                Request Quote
              </a>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <img 
              src="https://weberintl.com/wp-content/uploads/2019/03/Cylinder-Family.jpg" 
              alt="Premium bottle designs" 
              className="rounded-lg shadow-xl max-w-full" 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-blue-50 to-white"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-black mb-12"
            variants={itemVariants}
          >
            Why Choose Our Bottle Manufacturing
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold mb-2 text-cyan-700">15+</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Years Experience</h3>
              <p className="text-gray-800">Established in 2008, we bring extensive expertise to every project, ensuring exceptional quality and innovation.</p>
              <img 
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" 
                alt="Years of experience" 
                className="mt-4 rounded-lg mx-auto shadow-md" 
              />
            </motion.div>
            <motion.div 
              className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold mb-2 text-cyan-700">2B+</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Bottles Produced</h3>
              <p className="text-gray-800">Our high-volume production capabilities have delivered billions of bottles to satisfied clients worldwide.</p>
              <img 
                src="https://media.istockphoto.com/id/1096008526/photo/many-packaged-blue-mineral-water-bottles.jpg?s=612x612&w=0&k=20&c=6jK0yoRyuUFVhwYSnMC48YNYfqPAP_uAaP436rcKSR0=" 
                alt="Bottles produced" 
                className="mt-4 rounded-lg mx-auto shadow-md" 
              />
            </motion.div>
            <motion.div 
              className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold mb-2 text-cyan-700">99.8%</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Quality Rate</h3>
              <p className="text-gray-800">Our rigorous quality control ensures nearly perfect production with minimal defects and maximum consistency.</p>
              <img 
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" 
                alt="Quality control" 
                className="mt-4 rounded-lg mx-auto shadow-md" 
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Available Sizes Section */}
      <motion.section 
        className="py-16 bg-white"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-black mb-12"
            variants={itemVariants}
          >
            Available Bottle Sizes & Applications
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {bottleSizes.map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-md border-2 border-cyan-200 transform transition duration-500 hover:shadow-xl hover:border-cyan-400"
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#f0fdff" }}
              >
                <div className="mb-4">
                  <img 
                    src={item.image} 
                    alt={`${item.size} bottle`} 
                    className="rounded-lg w-full h-48 object-cover shadow-md" 
                  />
                </div>
                <p className="text-2xl font-bold text-cyan-600 mb-2">{item.size}</p>
                <h3 className="text-lg font-semibold mb-2">Best For:</h3>
                <p className="text-gray-600 mb-4">{item.best_for}</p>
                <h3 className="text-lg font-semibold mb-2">Available Materials:</h3>
                <ul className="text-gray-600">
                  {item.material_options.map((material, idx) => (
                    <li key={idx} className="mb-1 flex items-center">
                      <span className="text-cyan-500 mr-2">•</span> {material}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Manufacturing Capabilities Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-white to-cyan-50"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-black mb-12"
            variants={itemVariants}
          >
            Our Manufacturing Capabilities
          </motion.h2>
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <img 
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400&q=80" 
              alt="Manufacturing facility overview" 
              className="w-10% rounded-lg shadow-xl" 
            />
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {capabilities.map((capability, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#f0fdff", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex mb-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center shadow-md">
                      <img 
                        src={capability.image} 
                        alt={capability.name} 
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">{capability.name}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-3 rounded-md">
                  <p className="font-semibold text-gray-800">{capability.capacity}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Manufacturing Facility Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-cyan-50 to-white"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-black mb-12"
            variants={itemVariants}
          >
            Our Manufacturing Facilities
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-2 border-cyan-200 transform transition duration-500 hover:shadow-xl hover:border-cyan-400"
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: "#f0fdff" }}
            >
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80" 
                  alt="State-of-the-art machinery" 
                  className="w-full h-64 object-cover rounded-lg shadow-md" 
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-600">State-of-the-Art Machinery</h3>
              <p className="text-gray-600 mb-4">
                Our facilities are equipped with the latest bottle manufacturing technology, 
                ensuring precision, quality, and efficiency in every production run.
              </p>
              <ul className="text-gray-600">
                <li className="mb-2 flex items-center">
                  <span className="text-cyan-500 mr-2">•</span> Advanced blow molding machines with precision control
                </li>
                <li className="mb-2 flex items-center">
                  <span className="text-cyan-500 mr-2">•</span> Automated quality control systems with AI-powered defect detection
                </li>
                <li className="mb-2 flex items-center">
                  <span className="text-cyan-500 mr-2">•</span> Energy-efficient processes reducing carbon footprint by 40%
                </li>
                <li className="mb-2 flex items-center">
                  <span className="text-cyan-500 mr-2">•</span> Robotic packaging systems for consistent handling
                </li>
              </ul>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-2 border-cyan-200 transform transition duration-500 hover:shadow-xl hover:border-cyan-400"
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: "#f0fdff" }}
            >
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80" 
                  alt="Production facility" 
                  className="w-full h-64 object-cover rounded-lg shadow-md" 
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-600">Expansive Production Area</h3>
              <p className="text-gray-600 mb-4">
                Spanning over 50,000 square feet, our manufacturing plant can handle 
                large-scale production demands while maintaining strict quality control.
              </p>
              <ul className="text-gray-600">
                <li className="mb-2 flex items-center">
                  <span className="text-cyan-500 mr-2">•</span> 12 production lines running simultaneously
                </li>
                <li className="mb-2 flex items-center">
                  <span className="text-cyan-500 mr-2">•</span> Dedicated areas for different materials and bottle types
                </li>
                <li className="mb-2 flex items-center">
                  <span className="text-cyan-500 mr-2">•</span> Climate-controlled environment for consistent production
                </li>
                <li className="mb-2 flex items-center">
                  <span className="text-cyan-500 mr-2">•</span> In-house lab for material testing and quality assurance
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sustainability Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-white to-cyan-50"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-black mb-4"
            variants={itemVariants}
          >
            Our Commitment to Sustainability
          </motion.h2>
          <motion.p 
            className="text-lg text-center text-gray-800 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Environmental responsibility is at the core of our manufacturing philosophy. 
            We continuously invest in sustainable practices and technologies.
          </motion.p>
          <motion.div 
            className="mb-12 text-center"
            variants={itemVariants}
          >
            <img 
              src="https://www.polytainer.com/wp-content/uploads/elementor/thumbs/sustainability-pfgkekr3dn6g5cyduqruzm03busajdd80yppq1zimm.jpg" 
              alt="Sustainable manufacturing" 
              className="rounded-lg shadow-lg inline-block" 
            />
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sustainabilityInitiatives.map((initiative, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-md flex transform transition duration-500 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#f0fdff" }}
              >
                <div className="mr-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center text-white text-2xl shadow-md">♻️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-600">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                  <img 
                    src={initiative.image} 
                    alt={initiative.title} 
                    className="mt-4 rounded-lg w-full h-40 object-cover shadow-md" 
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Industry Applications Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-cyan-50 to-white"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-black mb-12"
            variants={itemVariants}
          >
            Industry Applications
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-md border-2 border-cyan-200 transform transition duration-500 hover:shadow-xl hover:border-cyan-400"
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#f0fdff" }}
              >
                <div className="mb-4">
                  <img 
                    src={industry.image} 
                    alt={`${industry.name} industry`} 
                    className="w-full h-48 object-cover rounded-lg shadow-md" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan-600">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <h4 className="text-lg font-semibold mb-2">Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  {industry.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-gray-800 rounded-full text-sm shadow-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Clients Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-white to-cyan-50"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-black mb-4"
            variants={itemVariants}
          >
            Our Trusted Clients
          </motion.h2>
          <motion.p 
            className="text-lg text-center text-gray-800 max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            We've partnered with leading brands across industries to deliver bottles 
            that enhance their product experience and strengthen their market position.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clients.map((client, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:shadow-xl"
                variants={itemVariants}
                while={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#f0fdff" }}
              >
                <div className="p-4 mb-4 bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg flex items-center justify-center shadow-sm">
                  <img 
                    src={client.image} 
                    alt={`${client.name} logo`} 
                    className="h-16 object-contain" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-600">{client.name}</h3>
                <p className="text-gray-600">{client.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Customer Reviews Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-cyan-50 to-white"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-black mb-4"
            variants={itemVariants}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="text-lg text-center text-gray-800 max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            Don't just take our word for it - hear from the businesses that have transformed their product presentation with our bottles.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#f0fdff" }}
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full overflow-hidden mr-4 shadow-md">
                    <img src={review.image} alt={review.name} className="w-16 h-16 object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.position}, {review.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{review.review}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-white to-cyan-50"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-black mb-12"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                    <span className="text-lg font-semibold text-black">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        id="contact"
        className="py-16 bg-gradient-to-b from-cyan-50 to-white"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div 
                className="p-8 lg:p-12 bg-gradient-to-br from-blue-400 to-cyan-300 text-white"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="mb-8 text-lg">
                  Ready to elevate your product with custom bottles that stand out? 
                  Fill out the form and one of our experts will get back to you within 24 hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                      <p>Industrial Area, Phase 2<br />New Delhi, India 110020</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p>info@bottlemanufacturing.com<br />sales@bottlemanufacturing.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p>+91 11 2345 6789<br />+91 98765 43210</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white text-cyan-600 p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-white text-cyan-600 p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-white text-cyan-600 p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-white text-cyan-600 p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.995 6.903a.998.998 0 00-.437-1.052 1 1 0 00-1.115.045C18.394 5.932 16.233 6 12 6s-6.394-.068-6.447-.105a1 1 0 00-1.115-.044A1 1 0 004 6.9v10.2a.997.997 0 00.443 1.052.998.998 0 001.11-.046c.053-.036 2.214-.105 6.447-.105s6.394.069 6.447.106a1 1 0 001.114.044.999.999 0 00.437-1.049l-.003-10.199zM10 15V9l5 3-5 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="p-8 lg:p-12"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold mb-6 text-black">Request a Quote</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your Company"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your Phone"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="project_type" className="block text-sm font-medium text-gray-700 mb-1">Type of Bottle Project *</label>
                    <select 
                      id="project_type" 
                      name="project_type" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="Custom Design">Custom Design</option>
                      <option value="Standard Bottles">Standard Bottles</option>
                      <option value="Sustainable Packaging">Sustainable Packaging</option>
                      <option value="Special Materials">Special Materials</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity *</label>
                    <select 
                      id="quantity" 
                      name="quantity" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                    >
                      <option value="">Select Quantity Range</option>
                      <option value="10,000 - 50,000">10,000 - 50,000 units</option>
                      <option value="50,000 - 100,000">50,000 - 100,000 units</option>
                      <option value="100,000 - 500,000">100,000 - 500,000 units</option>
                      <option value="500,000+">500,000+ units</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Please describe your bottle requirements, including size, material, design needs, and timeline."
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md shadow-md hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transform transition hover:scale-105"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;