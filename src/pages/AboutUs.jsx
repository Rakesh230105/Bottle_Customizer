import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Animation variants consistent with HomePage
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

  // Specific timeline item animation variant
  const timelineItemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

  // Company history timeline with images
  const historyTimeline = [
    {
      year: "1992",
      milestone: "Founded in Mumbai",
      description: "Started as a small family-owned bottle manufacturing unit with just 5 employees.",
      image: "https://gembah.com/wp-content/uploads/2022/07/printing-equipments.jpeg"
    },
    {
      year: "2000",
      milestone: "First Major Client",
      description: "Secured our first major contract with a national beverage company, marking our entry into the mainstream market.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw53BVxe6t6NKGpYYAB079qaXtkCCO33ylgQ&s" 
    },
    {
      year: "2008",
      milestone: "Factory Expansion",
      description: "Opened our second manufacturing facility in Pune, doubling our production capacity.",
      image: "https://img.freepik.com/free-photo/factory-workshop-interior-machines-glass-production-background_645730-396.jpg"
    },
    {
      year: "2012",
      milestone: "International Expansion",
      description: "Started exporting bottles to Southeast Asian markets, establishing our global presence.",
      image: "https://media.istockphoto.com/id/155386817/photo/car-industry.jpg?s=612x612&w=0&k=20&c=YrSXaTh-Rynhf5wD6ea7fkbJ38suS4INr5b6CHOG1c0="
    },
    {
      year: "2015",
      milestone: "Sustainability Initiative",
      description: "Launched our eco-friendly product line using recycled materials and renewable energy sources.",
      image: "https://www.petactive.co.za/wp-content/uploads/2024/06/eco-friendly-plastic-bottles.webp"
    },
    {
      year: "2020",
      milestone: "Digital Transformation",
      description: "Implemented Industry 4.0 technologies across all facilities, enhancing efficiency and quality control.",
      image: "https://cubet-website-storage-live.s3.us-west-2.amazonaws.com/Digital_Transformation_Strategy_in_the_Manufacturing_Industry_20488b7b6d.png"
    },
    {
      year: "2024",
      milestone: "Innovation Center",
      description: "Opened a state-of-the-art R&D center focused on developing next-generation sustainable packaging solutions.",
      image: "https://media.istockphoto.com/id/1326958894/photo/robot-arm-gripping-bottles-at-production-line.jpg?s=612x612&w=0&k=20&c=pCX0M8hVi1d5cYUl6JLJv2AXaa2ThDYHu0iEXQWwryI="
    }
  ];

  // Leadership team
  const leadershipTeam = [
    {
      name: "Vikram Mehta",
      position: "Founder & CEO",
      bio: "With over 30 years in the packaging industry, Vikram's vision has driven our growth from a small unit to an industry leader.",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      name: "Sunita Sharma",
      position: "Chief Operations Officer",
      bio: "Sunita oversees all manufacturing operations, bringing 20 years of experience in production optimization and quality control.",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Raj Kapoor",
      position: "Chief Technology Officer",
      bio: "Leading our digital transformation initiatives, Raj has revolutionized our production processes with cutting-edge technology.",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      name: "Priya Desai",
      position: "Head of Sustainability",
      bio: "Priya champions our environmental initiatives, ensuring we remain at the forefront of sustainable packaging innovation.",
      image: "https://randomuser.me/api/portraits/women/62.jpg"
    }
  ];

  // Manufacturing facilities
  const facilities = [
    {
      location: "Mumbai, Maharashtra",
      size: "120,000 sq ft",
      specialization: "Primary production facility with focus on high-volume PET bottle manufacturing",
      capacity: "2.5 million bottles per month",
      certifications: ["ISO 9001:2015", "ISO 14001:2015", "ISO 22000"]
    },
    {
      location: "Pune, Maharashtra",
      size: "85,000 sq ft",
      specialization: "Specialty glass bottles and premium packaging solutions",
      capacity: "1.2 million bottles per month",
      certifications: ["ISO 9001:2015", "ISO 14001:2015"]
    },
    {
      location: "Hosur, Tamil Nadu",
      size: "150,000 sq ft",
      specialization: "Eco-friendly packaging and recycled material processing",
      capacity: "1.8 million bottles per month",
      certifications: ["ISO 9001:2015", "ISO 14001:2015", "ISO 50001:2018"]
    }
  ];

  // Company values
  const companyValues = [
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in every bottle we produce, ensuring durability, safety, and performance.",
      icon: "🏆"
    },
    {
      title: "Environmental Responsibility",
      description: "Our commitment to sustainability drives all aspects of our business, from materials to manufacturing processes.",
      icon: "🌱"
    },
    {
      title: "Innovation",
      description: "We continuously explore new technologies and designs to stay ahead of market trends and customer needs.",
      icon: "💡"
    },
    {
      title: "Customer Partnership",
      description: "We work closely with our clients, treating their success as our own through collaborative relationships.",
      icon: "🤝"
    }
  ];

  // Awards and recognitions
  const awards = [
    {
      year: "2023",
      title: "Excellence in Manufacturing Award",
      organization: "Indian Packaging Association"
    },
    {
      year: "2022",
      title: "Sustainability Innovation Prize",
      organization: "Green Business Council"
    },
    {
      year: "2021",
      title: "Best Employer Award",
      organization: "Manufacturing Today"
    },
    {
      year: "2020",
      title: "Export Excellence Recognition",
      organization: "Federation of Indian Export Organizations"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <motion.section 
        className="bg-gradient-to-r from-white to-[#CFF4F] text-gray-800 py-24 px-4"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Three decades of excellence in bottle manufacturing, serving industries across India and beyond with innovation and quality.
          </p>
        </div>
      </motion.section>

      {/* Our Story section */}
      <motion.section 
        className="py-16 px-4"
        initial="visible"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-[#CFF4FB] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, our journey has been defined by a passion for innovation, quality, and sustainability in bottle manufacturing.
            </p>
          </motion.div>

          {/* Timeline - visible but with animation on scroll */}
          <div className="relative">
            {/* Timeline center line - always visible */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#CFF4FB] transform -translate-x-1/2"></div>
            
            {historyTimeline.map((item, index) => (
              <motion.div 
                key={index}
                className={`flex mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
                variants={timelineItemVariant}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg h-full border border-[#CFF4FB]">
                    <img 
                      src={item.image} 
                      alt={`${item.milestone}`} 
                      className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-2xl font-bold text-[#42B4C8] mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.milestone}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="relative w-0">
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-[#CFF4FB] border-4 border-white transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  ></motion.div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission and Vision */}
      <motion.section 
        className="py-16 px-4 bg-[#F0FDFF]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div variants={itemVariants} className="flex-1 bg-white p-8 rounded-lg shadow-md border-t-4 border-[#CFF4FB]">
              <h3 className="text-2xl font-bold text-[#42B4C8] mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To provide innovative and sustainable bottle solutions that exceed customer expectations while minimizing environmental impact and maximizing value.
              </p>
              <p className="text-gray-700">
                We strive to be the partner of choice for companies seeking quality packaging that enhances their products and strengthens their brand identity.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex-1 bg-white p-8 rounded-lg shadow-md border-t-4 border-[#CFF4FB]">
              <h3 className="text-2xl font-bold text-[#42B4C8] mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To become the global leader in sustainable bottle manufacturing, pioneering eco-friendly solutions that reshape the packaging industry.
              </p>
              <p className="text-gray-700">
                We envision a future where every bottle we produce contributes to a circular economy, reducing waste and preserving resources for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#CFF4FB] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide our decisions and define our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md flex border-l-4 border-[#CFF4FB]"
              >
                <div className="text-4xl mr-4">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership Team */}
      <motion.section 
        className="py-16 px-4 bg-[#F0FDFF]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-[#CFF4FB] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experts who drive our vision and guide our company to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-[#CFF4FB]"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-[#42B4C8] font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Manufacturing Facilities */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Manufacturing Facilities</h2>
            <div className="w-24 h-1 bg-[#CFF4FB] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art production centers equipped with the latest technologies to ensure quality and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#CFF4FB]"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.location}</h3>
                <div className="mb-4">
                  <span className="inline-block bg-[#E0F7FA] text-[#42B4C8] font-semibold text-sm px-3 py-1 rounded-full">
                    {facility.size}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{facility.specialization}</p>
                <div className="mb-4">
                  <p className="text-gray-700 font-medium">Capacity:</p>
                  <p className="text-gray-600">{facility.capacity}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.certifications.map((cert, i) => (
                      <span key={i} className="bg-[#E0F7FA] text-[#42B4C8] text-xs px-2 py-1 rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Awards & Recognition */}
      <motion.section 
        className="py-16 px-4 bg-[#F0FDFF]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
            <div className="w-24 h-1 bg-[#CFF4FB] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md flex items-center border-l-4 border-[#CFF4FB]"
              >
                <div className="bg-[#E0F7FA] text-[#42B4C8] font-bold text-lg rounded-full h-16 w-16 flex items-center justify-center mr-4">
                  {award.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{award.title}</h3>
                  <p className="text-gray-600">{award.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 px-4 bg-[#CFF4FZ] text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our bottle manufacturing expertise can help elevate your products and meet your sustainability goals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-[#42B4C8] font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition duration-300">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;