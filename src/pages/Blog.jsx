import React, { useState } from 'react';
import foodIntoleranceImg from '../assets/blog-3-1536x1024.jpg';
import nutrientTherapyImg from '../assets/nutrient_therapy.png';
import stressfulTimesImg from '../assets/stressful_times.png';

export default function Blog({ setActiveTab }) {
  const [activePostIdx, setActivePostIdx] = useState(null);

  const posts = [
    {
      title: "Food intolerance testing – is it worth it?",
      meta: "Leave a Comment / Uncategorized / By Fasting Nutro Care",
      desc: "“Food Intolerance Testing: Is It Worth It?” Food intolerances can cause a range of uncomfortable symptoms, from bloating and stomach pain to headaches and fatigue. If you’re experiencing these symptoms, you may be considering food intolerance testing as a way to identify problematic foods. In this blog post, we’ll explore what food intolerance testing is, ...",
      image: foodIntoleranceImg
    },
    {
      title: "Can nutrient therapy boost your energy?",
      meta: "Leave a Comment / Uncategorized / By Fasting Nutro Care",
      desc: "“Nutrient Therapy: Can it Boost Your Energy?” We all have days when we feel sluggish and low on energy. We may turn to caffeine or sugary snacks for a quick pick-me-up, but these solutions only provide temporary relief and can leave us feeling worse later on. Nutrient therapy is an alternative approach that aims to ...",
      image: nutrientTherapyImg
    },
    {
      title: "Maintaining Well-Being Through Stressful Times",
      meta: "Leave a Comment / Uncategorized / By Fasting Nutro Care",
      desc: "In today’s fast-paced world, it’s easy to get caught up in the daily grind and forget to take care of ourselves. The stress of work, family, and other obligations can be overwhelming, especially during difficult times. However, it’s crucial to prioritize our mental and physical well-being to stay healthy and resilient. In this blog post, ...",
      image: stressfulTimesImg
    }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#091026] pt-12">
      {/* Blog White Wrapper Card */}
      <div className="max-w-6xl mx-auto bg-white px-8 py-16 sm:px-16 sm:py-24 border-x-[16px] border-[#091026] shadow-2xl">
        
        {activePostIdx === null ? (
          // Post List View
          <div className="space-y-16">
            {posts.map((post, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'border-t border-gray-100 pt-12' : ''} space-y-4`}>
                {/* Featured Image */}
                {post.image && (
                  <div 
                    onClick={() => {
                      if (idx === 0 || idx === 1 || idx === 2) {
                        setActivePostIdx(idx);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        handleNavClick('contact');
                      }
                    }}
                    className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm shadow-md cursor-pointer mb-6"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Title */}
                <h2 
                  onClick={() => {
                    if (idx === 0 || idx === 1 || idx === 2) {
                      setActivePostIdx(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      handleNavClick('contact');
                    }
                  }}
                  className="text-3xl font-bold text-slate-800 hover:text-primary-600 transition-colors cursor-pointer"
                >
                  {post.title}
                </h2>
                
                {/* Meta */}
                <div className="text-[#72b02a] text-sm font-semibold">
                  {post.meta}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {post.desc}
                </p>

                {/* Read More Link */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (idx === 0 || idx === 1 || idx === 2) {
                        setActivePostIdx(idx);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        handleNavClick('contact');
                      }
                    }}
                    className="text-[#72b02a] hover:text-[#5f9322] font-bold text-sm tracking-wide transition-colors cursor-pointer inline-flex items-center gap-1"
                  >
                    Read More »
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Detailed View
          <div className="space-y-8 text-slate-800">
            {/* Back Button */}
            <button 
              onClick={() => setActivePostIdx(null)}
              className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-4 inline-flex items-center gap-2 cursor-pointer transition-colors"
            >
              ← Back to Blog
            </button>

            {activePostIdx === 0 ? (
              <>
                {/* Title & Meta */}
                <div className="space-y-2">
                  <h1 className="text-4xl font-extrabold text-slate-800 leading-tight">
                    Food intolerance testing – is it worth it?
                  </h1>
                  <div className="text-[#72b02a] text-sm font-semibold">
                    Leave a Comment / Uncategorized / By Fasting Nutro Care
                  </div>
                </div>

                {/* Banner Image */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm shadow-md">
                  <img 
                    src={posts[0].image} 
                    alt="Food Intolerance Test tube" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Full Post Content */}
                <div className="space-y-6 text-sm sm:text-base leading-relaxed font-semibold text-slate-700">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-4">
                    “Food Intolerance Testing: Is It Worth It?”
                  </h2>
                  
                  <p>
                    Food intolerances can cause a range of uncomfortable symptoms, from bloating and stomach pain to headaches and fatigue. If you’re experiencing these symptoms, you may be considering food intolerance testing as a way to identify problematic foods. In this blog post, we’ll explore what food intolerance testing is, the different types of tests available, and whether it’s worth it to invest in testing.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-4">
                    What is Food Intolerance Testing?
                  </h3>
                  
                  <p>
                    Food intolerance testing is a type of test that aims to identify foods that may be causing intolerance or sensitivity. Food intolerance occurs when the body has difficulty digesting or processing certain foods, leading to uncomfortable symptoms. Unlike food allergies, food intolerances do not involve the immune system and are generally not life-threatening. Food intolerance testing involves analyzing a sample of blood, saliva, or hair to identify antibodies or other markers that may indicate a reaction to specific foods.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-4">
                    Types of Food Intolerance Tests
                  </h3>
                  
                  <p>
                    There are several types of food intolerance tests available, including:
                  </p>

                  <ul className="space-y-3 pl-4 list-none text-slate-800">
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 font-bold">•</span>
                      <span><strong>IgG Antibody Testing:</strong> This test measures the levels of IgG antibodies in the blood, which may indicate an immune reaction to specific foods.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 font-bold">•</span>
                      <span><strong>Elimination Diet:</strong> This involves removing suspected problem foods from the diet for a period of time and then gradually reintroducing them to identify problematic foods.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 font-bold">•</span>
                      <span><strong>Hair Analysis:</strong> This involves analyzing a sample of hair for mineral imbalances or other markers that may indicate food intolerance.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 font-bold">•</span>
                      <span><strong>Skin Prick Testing:</strong> This test involves applying a small amount of the suspected allergen to the skin and monitoring for a reaction.</span>
                    </li>
                  </ul>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-4">
                    Is Food Intolerance Testing Worth It?
                  </h3>
                  
                  <p>
                    The effectiveness of food intolerance testing is a matter of debate among healthcare professionals. Some argue that these tests can be helpful in identifying problematic foods and improving symptoms, while others maintain that the tests are unreliable and may lead to unnecessary dietary restrictions.
                  </p>

                  <p>
                    One of the challenges with food intolerance testing is that there is no standardized approach to testing, and results may vary depending on the type of test used and the laboratory conducting the analysis. Some experts argue that elimination diets are a more reliable way to identify problematic foods, as they allow for a systematic and controlled approach to testing.
                  </p>

                  <p>
                    Another concern with food intolerance testing is that it may lead to unnecessary dietary restrictions. If a test identifies a food as problematic, an individual may avoid that food even if they don’t experience symptoms from consuming it. This can lead to an unnecessarily restrictive diet and potentially nutrient deficiencies.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-4">
                    Conclusion
                  </h3>
                  
                  <p>
                    Food intolerance testing may be a helpful tool for some individuals in identifying problematic foods and improving symptoms. However, the effectiveness of these tests is a matter of debate among healthcare professionals, and the results may vary depending on the type of test used and the laboratory conducting the analysis. If you’re considering food intolerance testing, it’s important to work with a qualified healthcare professional to determine the best approach for your individual needs and to avoid unnecessary dietary restrictions.
                  </p>
                </div>
              </>
            ) : activePostIdx === 1 ? (
              <>
                {/* Title & Meta */}
                <div className="space-y-2">
                  <h1 className="text-4xl font-extrabold text-slate-800 leading-tight">
                    Can nutrient therapy boost your energy?
                  </h1>
                  <div className="text-[#72b02a] text-sm font-semibold">
                    Leave a Comment / Uncategorized / By Fasting Nutro Care
                  </div>
                </div>

                {/* Banner Image */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm shadow-md">
                  <img 
                    src={posts[1].image} 
                    alt="Nutrient therapy banner" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>

                {/* Full Post Content */}
                <div className="space-y-6 text-sm sm:text-base leading-relaxed font-semibold text-slate-700">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-4">
                    “Nutrient Therapy: Can it Boost Your Energy?”
                  </h2>
                  
                  <p>
                    We all have days when we feel sluggish and low on energy. We may turn to caffeine or sugary snacks for a quick pick-me-up, but these solutions only provide temporary relief and can leave us feeling worse later on. Nutrient therapy is an alternative approach that aims to improve energy levels by optimizing our nutrient intake. In this blog post, we’ll explore what nutrient therapy is and whether it can boost your energy.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-4">
                    What is Nutrient Therapy?
                  </h3>
                  
                  <p>
                    Nutrient therapy, also known as nutritional therapy or micronutrient therapy, is an approach to healthcare that focuses on using nutrients such as vitamins, minerals, and amino acids to improve health and wellness. Nutrient therapy involves identifying nutrient deficiencies in the body and then using targeted nutrient supplements to correct these imbalances. This approach aims to optimize cellular function and improve overall health.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-4">
                    How Does Nutrient Therapy Boost Energy?
                  </h3>
                  
                  <p>
                    Nutrient therapy can improve energy levels in several ways. Firstly, nutrient deficiencies can contribute to fatigue and low energy levels. By correcting these imbalances, nutrient therapy can help to boost energy levels. Secondly, certain nutrients play a crucial role in energy production within the body. For example, B vitamins are essential for converting food into energy, while iron is necessary for transporting oxygen to the cells. By optimizing nutrient intake, nutrient therapy can support energy production within the body.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-4">
                    What Nutrients Are Used in Nutrient Therapy?
                  </h3>
                  
                  <p>
                    The specific nutrients used in nutrient therapy will depend on the individual's nutrient status and health concerns. Some commonly used nutrients in nutrient therapy include:
                  </p>

                  <ul className="space-y-3 pl-4 list-none text-slate-800">
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 font-bold">•</span>
                      <span><strong>B vitamins:</strong> essential for energy production and nerve function</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 font-bold">•</span>
                      <span><strong>Vitamin C:</strong> important for immune function and reducing oxidative stress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 font-bold">•</span>
                      <span><strong>Magnesium:</strong> crucial for muscle and nerve function, and reducing anxiety</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 font-bold">•</span>
                      <span><strong>Zinc:</strong> essential for immune function and wound healing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 font-bold">•</span>
                      <span><strong>Iron:</strong> necessary for transporting oxygen to the cells</span>
                    </li>
                  </ul>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-4">
                    Is Nutrient Therapy Safe?
                  </h3>
                  
                  <p>
                    Nutrient therapy is generally safe when used appropriately and under the guidance of a healthcare professional. However, as with any treatment, there are potential risks and side effects. It’s important to work with a qualified healthcare professional who can help to identify nutrient deficiencies and develop an appropriate nutrient therapy plan.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-4">
                    Conclusion
                  </h3>

                  <p>
                    Nutrient therapy is an alternative approach that aims to improve energy levels by optimizing nutrient intake. By correcting nutrient deficiencies and supporting energy production within the body, nutrient therapy can help to boost energy levels and improve overall health. If you’re struggling with fatigue and low energy levels, nutrient therapy may be worth exploring. However, it’s important to work with a qualified healthcare professional to develop an appropriate nutrient therapy plan and ensure safety.
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Title & Meta */}
                <div className="space-y-2">
                  <h1 className="text-4xl font-extrabold text-slate-800 leading-tight">
                    Maintaining Well-Being Through Stressful Times
                  </h1>
                  <div className="text-[#72b02a] text-sm font-semibold">
                    Leave a Comment / Uncategorized / By Fasting Nutro Care
                  </div>
                </div>

                {/* Banner Image */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm shadow-md">
                  <img 
                    src={posts[2].image} 
                    alt="Stress management banner" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>

                {/* Full Post Content */}
                <div className="space-y-6 text-sm sm:text-base leading-relaxed font-semibold text-slate-700">
                  <p>
                    In today’s fast-paced world, it’s easy to get caught up in the daily grind and forget to take care of ourselves. The stress of work, family, and other obligations can be overwhelming, especially during difficult times. However, it’s crucial to prioritize our mental and physical well-being to stay healthy and resilient. In this blog post, we’ll discuss some practical tips for maintaining well-being through stressful times.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 pt-4">
                    1. Prioritize self-care
                  </h3>
                  
                  <p>
                    Self-care is essential for maintaining overall well-being. It’s crucial to take time to do things that make you feel good and relaxed, such as reading a book, taking a warm bath, or going for a walk in nature. Set aside a few minutes each day to engage in an activity that brings you joy and peace.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 pt-4">
                    2. Practice mindfulness
                  </h3>
                  
                  <p>
                    Mindfulness is the practice of being present and fully engaged in the current moment. It’s an effective way to reduce stress and anxiety, and improve overall well-being. You can practice mindfulness in many ways, such as meditation, deep breathing, or simply taking a few moments to focus on your surroundings.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 pt-4">
                    3. Stay connected
                  </h3>
                  
                  <p>
                    Maintaining social connections is vital for our mental health and well-being. Even if you can’t meet in person, you can still stay connected with friends and family through video calls, phone calls, or text messages. Reach out to someone you care about and let them know you’re thinking of them.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 pt-4">
                    4. Stay active
                  </h3>
                  
                  <p>
                    Exercise is an effective way to reduce stress and boost mood. It doesn’t have to be a strenuous workout; even a short walk can do wonders for your physical and mental health. Find an activity you enjoy and make it a regular part of your routine.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 pt-4">
                    5. Get enough sleep
                  </h3>
                  
                  <p>
                    Sleep is essential for our physical and mental health. It’s crucial to establish a regular sleep routine and aim for 7-9 hours of sleep each night. Avoid caffeine and electronic devices before bed, and create a relaxing bedtime routine to help you wind down.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 pt-4">
                    6. Seek professional help if needed
                  </h3>
                  
                  <p>
                    If you’re feeling overwhelmed, anxious, or depressed, don’t hesitate to seek professional help. Talk to your doctor or a mental health professional about your concerns, and explore the options available to you.
                  </p>

                  <p className="pt-4">
                    In conclusion, maintaining well-being through stressful times requires intentional effort and self-care. By prioritizing self-care, practicing mindfulness, staying connected, staying active, getting enough sleep, and seeking professional help if needed, you can take control of your mental and physical health and thrive in challenging times.
                  </p>
                </div>
              </>
            )}
          </div>
        )}

      </div>

      {/* Coral Thoughts Banner Section */}
      <section className="w-full bg-[#484e36] py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
            <div>
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold py-3.5 px-8 rounded-sm text-sm transition-colors cursor-pointer uppercase inline-block shadow-sm"
              >
                Review Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
