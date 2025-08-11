import React from 'react';
import { Award, Leaf, Users, MapPin, Clock, Heart } from 'lucide-react';
import rajuImage from '../assets/raju.jpeg';

const AboutUs = ({ darkMode }) => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className={`rounded-xl overflow-hidden transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-r from-emerald-800 to-teal-800' 
        : 'bg-gradient-to-r from-emerald-600 to-teal-600'
    } text-white`}>
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Story</h1>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-100 leading-relaxed">
            From a small agricultural venture to serving farms across India with premium fertilizers, 
            organic inputs, and quality agricultural products
          </p>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
      {/* About Content */}
      <div className="lg:col-span-2 space-y-4 sm:space-y-6">
        <div className={`rounded-2xl p-6 backdrop-blur-xl border transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer group ${
          darkMode 
            ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
            : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 group-hover:text-emerald-400 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>About BESTVR Agro</h2>
          
          {/* Founder Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-1/3">
              <div className="relative">
                <img
                  src={rajuImage}
                  alt="Raju Rai - Founder of BESTVR Agro"
                  className="w-full h-64 md:h-48 object-cover rounded-xl shadow-lg"
                />
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl p-4`}>
                  <h3 className="text-white font-semibold text-lg">Mr. Raju Rai</h3>
                  <p className="text-white/90 text-sm">Founder & CEO | Electrical Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-4">
              <p className={`leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Founded in 2023 by Mr. Raju Rai, BESTVR Agro emerged from an unexpected journey of transformation. 
                Based in Gorakhpur, Uttar Pradesh, Mr. Raju is an electrical engineer who transitioned into the agricultural 
                sector driven by a passion for supporting Indian farmers with quality inputs and sustainable farming practices.
              </p>
              
              <p className={`leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                "My engineering background taught me the importance of precision and quality in every process. When I 
                decided to enter the agricultural sector, I applied the same principles to ensure farmers get the best 
                possible inputs for their crops," says Mr. Raju, whose unique combination of technical expertise and 
                agricultural passion has shaped BESTVR Agro's commitment to excellence.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className={`leading-relaxed transition-colors duration-300 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              We specialize in premium quality urea, neem khali (neem cake), sarso khali (mustard cake), 
              organic compost, and potash sourced from trusted suppliers. Every product undergoes strict quality 
              testing to ensure maximum effectiveness and crop yields for our farming community.
            </p>
            
            <p className={`leading-relaxed transition-colors duration-300 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Our fertilizers and organic inputs are sourced from certified manufacturers and suppliers. 
              Each batch is tested for purity, nutrient content, and quality standards. Our products are designed 
              to improve soil health, enhance plant growth, and increase agricultural productivity while being 
              environmentally sustainable.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className={`rounded-2xl p-6 backdrop-blur-xl border transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer group ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
              : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <Heart className="text-emerald-600 group-hover:scale-110 transition-transform duration-300" size={24} />
              <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-emerald-400 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Our Mission</h3>
            </div>
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              To provide premium agricultural inputs and fertilizers to every Indian farmer while promoting 
              sustainable farming and improved crop productivity.
            </p>
          </div>

          <div className={`rounded-2xl p-6 backdrop-blur-xl border transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer group ${
            darkMode 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
              : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <Leaf className="text-emerald-600 group-hover:scale-110 transition-transform duration-300" size={24} />
              <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-emerald-400 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Our Vision</h3>
            </div>
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              To become India's most trusted brand for agricultural essentials while supporting 
              farmers and promoting sustainable agriculture for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Stats & Features */}
      <div className="space-y-6">
        {/* Stats */}
        <div className={`rounded-2xl p-6 backdrop-blur-xl border transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer group ${
          darkMode 
            ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
            : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-emerald-400 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Our Journey</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-sm transition-colors duration-300 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>Founded</span>
              <span className={`font-semibold transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>2023</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`text-sm transition-colors duration-300 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>Happy Customers</span>
              <span className={`font-semibold transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>2,500+</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`text-sm transition-colors duration-300 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>Cities Served</span>
              <span className={`font-semibold transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>150+</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`text-sm transition-colors duration-300 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>Products</span>
              <span className={`font-semibold transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>50+</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className={`rounded-2xl p-6 backdrop-blur-xl border transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer group ${
          darkMode 
            ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
            : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-emerald-400 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Why Choose Us</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Award className="text-emerald-600 mt-1 group-hover:scale-110 transition-transform duration-300" size={18} />
              <div>
                <h4 className={`font-medium text-sm transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>Premium Quality</h4>
                <p className={`text-xs mt-1 transition-colors duration-300 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>Handpicked products with rigorous quality checks</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Users className="text-emerald-600 mt-1 group-hover:scale-110 transition-transform duration-300" size={18} />
              <div>
                <h4 className={`font-medium text-sm transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>Artisan Support</h4>
                <p className={`text-xs mt-1 transition-colors duration-300 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>Supporting traditional craftsmen and farmers</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="text-emerald-600 mt-1 group-hover:scale-110 transition-transform duration-300" size={18} />
              <div>
                <h4 className={`font-medium text-sm transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>Pan India Delivery</h4>
                <p className={`text-xs mt-1 transition-colors duration-300 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>Fast and secure shipping nationwide</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="text-emerald-600 mt-1 group-hover:scale-110 transition-transform duration-300" size={18} />
              <div>
                <h4 className={`font-medium text-sm transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>Fresh Products</h4>
                <p className={`text-xs mt-1 transition-colors duration-300 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>Made to order for maximum freshness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Product Categories */}
    <div className={`rounded-2xl p-6 backdrop-blur-xl border transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer group ${
      darkMode 
        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
        : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
    }`}>
      <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 group-hover:text-emerald-400 ${
        darkMode ? 'text-white' : 'text-slate-900'
      }`}>Our Product Categories</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-4xl mb-3">🌾</div>
          <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Premium Fertilizers</h3>
          <p className={`text-sm transition-colors duration-300 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            High-quality urea, potash, and other chemical fertilizers to boost crop yields 
            and improve soil fertility for better agricultural productivity.
          </p>
        </div>
        
        <div className="text-center">
          <div className="text-4xl mb-3">🌱</div>
          <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Organic Inputs</h3>
          <p className={`text-sm transition-colors duration-300 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Premium neem khali (neem cake), sarso khali (mustard cake), and organic compost 
            for sustainable farming and natural soil enrichment.
          </p>
        </div>
        
        <div className="text-center">
          <div className="text-4xl mb-3">🧪</div>
          <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Soil Enhancers</h3>
          <p className={`text-sm transition-colors duration-300 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Specialized agricultural products including micronutrients, soil conditioners, 
            and growth promoters for comprehensive crop care and nutrition.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;