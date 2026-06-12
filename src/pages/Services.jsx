import React, { useState } from 'react';
import cancerCareImg from '../assets/cancer_care.png';
import pcodPcosImg from '../assets/pcod_pcos.png';
import stressfulTimesImg from '../assets/stressful_times.png';
import bladderStoneImg from '../assets/bladder_stone.png';
import kidneyStoneImg from '../assets/kidney_stone.png';
import thyroidImg from '../assets/thyroid.png';
import diabetesImg from '../assets/diabetes.png';
import bloodPressureImg from '../assets/blood_pressure.png';
import weightLossImg from '../assets/weight_loss.png';
import gastricReversalImg from '../assets/gastric_reversal.png';
import dermaCareImg from '../assets/derma_care.png';
import cancerRibbons from '../assets/cancer_ribbons.png';
import pinkRibbonHands from '../assets/pink_ribbon_hands.png';
import nutrientTherapyImg from '../assets/nutrient_therapy.png';
import { CheckCircle } from 'lucide-react';

export default function Services({ activeSpecialty, setActiveSpecialty, setActiveTab }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  const specializations = [
    {
      image: cancerCareImg,
      title: "CANCER CARE",
      desc: "Cancer care encompasses a range of medical, physical, and emotional interventions aimed at preventing, detecting, diagnosing, treating, and managing cancer and its associated symptoms. It involves a multidisciplinary approach and personalized care tailored to the unique needs of each patient.",
      doubleButtons: true
    },
    {
      image: pcodPcosImg,
      title: "PCOD , PCOS",
      desc: "Polycystic ovary syndrome (PCOS) and polycystic ovary disease (PCOD) are endocrine disorders characterized by hormonal imbalances that affect the ovaries and can lead to infertility, irregular periods, and other health issues. Treatment may involve lifestyle changes, medications, and in some cases, surgery.",
      doubleButtons: true
    },
    {
      image: bladderStoneImg,
      title: "BLADDER STONE REVERSAL",
      desc: "Bladder stone reversal refers to the use of non-invasive methods to break down and eliminate bladder stones. This may involve medications, dietary changes, and/or the use of ultrasound or laser technology.",
      doubleButtons: true
    },
    {
      image: kidneyStoneImg,
      title: "KIDNEY STONE REVERSAL",
      desc: "Kidney stone reversal involves the use of non-invasive or minimally invasive techniques to break up and remove kidney stones. This may include shockwave lithotripsy, ureteroscopy, or percutaneous nephrolithotomy, depending on the size and location of the stone.",
      doubleButtons: true
    },
    {
      image: thyroidImg,
      title: "THYROID",
      desc: "The thyroid is a small gland located in the neck that produces hormones that regulate metabolism and other bodily functions. Thyroid disorders, such as hypothyroidism and hyperthyroidism, can cause a range of symptoms and may require medical treatment.",
      doubleButtons: true
    },
    {
      image: diabetesImg,
      title: "DIABETES",
      desc: "Diabetes is a chronic medical condition characterized by high levels of glucose (sugar) in the blood. It can lead to a range of complications if left untreated, and management typically involves a combination of medication, lifestyle changes, and monitoring of blood sugar levels.",
      doubleButtons: true
    },
    {
      image: bloodPressureImg,
      title: "BLOOD PRESSURE",
      desc: "Blood pressure refers to the force exerted by circulating blood on the walls of blood vessels. High blood pressure (hypertension) can increase the risk of heart disease and other health issues, while low blood pressure (hypotension) can cause dizziness, fainting, and other symptoms.",
      doubleButtons: true
    },
    {
      image: weightLossImg,
      title: "WEIGHT LOSS",
      desc: "Weight loss refers to the process of reducing body weight, typically for health or aesthetic reasons. This can be achieved through a combination of dietary changes, exercise, and other lifestyle modifications.",
      doubleButtons: true
    },
    {
      image: gastricReversalImg,
      title: "GASTRIC REVERSAL",
      desc: "Gastric reversal refers to the reversal of a previous weight loss surgery, such as gastric bypass or gastric sleeve. This may be necessary in cases where the initial surgery was unsuccessful or resulted in complications.",
      doubleButtons: true
    },
    {
      image: dermaCareImg,
      title: "DERMA CARE",
      desc: "Dermacare refers to the specialized medical care and treatment of skin-related conditions and diseases, such as acne, eczema, psoriasis, and skin cancer. It may involve a range of interventions, including topical or systemic medications, light therapy, and surgical procedures.",
      doubleButtons: false
    }
  ];

  if (activeSpecialty === 'cancer-care') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Cancer Care
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* Side-by-side Ribbon images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={cancerRibbons}
                alt="Hands holding colorful awareness ribbons"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={pinkRibbonHands}
                alt="Hands holding a pink ribbon"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Cancer Care Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Cancer Care
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                Cancer care is a specialized field of healthcare that focuses on the prevention, diagnosis, treatment, and management of cancer. Cancer is a group of diseases characterized by the abnormal growth of cells that can spread to other parts of the body, causing serious health problems.
              </p>
              <p>
                Cancer care involves a multidisciplinary approach, which includes healthcare providers who work together to provide personalized nutritional plans for cancer patients. The goal of cancer care is to provide patients with the best possible outcome, including increased survival rates, improved quality of life, and effective pain management.
              </p>
              <p>
                Cancer care involves targeted therapy, which are tailored to the individual needs of each patient. It also involves providing emotional and psychological support to patients and their families, as cancer can be a very difficult and challenging disease to manage.
              </p>
              <p>
                Overall, cancer care plays a critical role in the fight against cancer, and it requires a collaborative effort from all members of the healthcare team to help patients overcome this disease.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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

  if (activeSpecialty === 'pcod-pcos') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Pcos , Pcod
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* Side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={pcodPcosImg}
                alt="Normal and Polycystic ovaries anatomy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={stressfulTimesImg}
                alt="Woman in pain on bed"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Pcos, Pcod Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Pcos , Pcod
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                PCOS (Polycystic Ovary Syndrome) and PCOD (Polycystic Ovary Disease) are two different terms used to describe a hormonal disorder that affects women of reproductive age.
              </p>
              <p>
                PCOS is a condition in which a woman’s ovaries produce an abnormal amount of androgens (male hormones), which can lead to a range of symptoms, including irregular periods, acne, excess hair growth, weight gain, and difficulty conceiving. PCOS can also increase the risk of developing other health conditions such as diabetes and heart disease.
              </p>
              <p>
                PCOD, on the other hand, refers to the presence of multiple cysts (fluid-filled sacs) on a woman’s ovaries. While many women with PCOD may have similar symptoms to those with PCOS, not all women with PCOD have hormonal imbalances that result in excess androgen production.
              </p>
              <p>
                Both PCOS and PCOD can be diagnosed through a combination of medical history, physical examination, and laboratory tests. Treatment options for PCOS and PCOD may include lifestyle changes, supplements, and in some cases, surgery. It is important for women with these conditions to work closely with their healthcare providers to manage their symptoms and reduce their risk of long-term health complications.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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

  if (activeSpecialty === 'bladder-stone-reversal') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Bladder Stone Reversal
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* Side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={bladderStoneImg}
                alt="Bladder containing a bladder stone"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={pinkRibbonHands}
                alt="Hands holding a pink ribbon"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Bladder Stone Reversal Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Bladder Stone Reversal
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                Bladder stone reversal is a ayurvedic procedure that involves breaking up bladder stones into smaller fragments, which can then be expelled from the body through urine. This procedure is typically performed using herbal supplements with tailor made nutritional approach.
              </p>
              <p>
                The resulting fragments are then flushed out of the body naturally through urine.
              </p>
              <p>
                Bladder stone reversal is typically used to treat bladder stones that are not too large to pass through the urinary tract on their own, or that are causing significant pain or other symptoms. This procedure is generally considered safe and effective, although there may be some risks associated with it, such as bleeding or infection.
              </p>
              <p>
                After bladder stone reversal, patients may be given medications to help manage pain or prevent infection. They may also be advised to drink plenty of fluids to help flush out any remaining stone fragments and prevent new stones from forming in the future.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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

  if (activeSpecialty === 'thyroid') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Thyroid
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* Side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={thyroidImg}
                alt="Thyroid gland diagram"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={pcodPcosImg}
                alt="Hormonal health illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Thyroid Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Thyroid
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                The thyroid gland is a small, butterfly-shaped gland located in the front of the neck. It produces hormones — primarily thyroxine (T4) and triiodothyronine (T3) — that regulate many vital body functions, including metabolism, heart rate, body temperature, and energy levels.
              </p>
              <p>
                Thyroid disorders are among the most common endocrine conditions. Hypothyroidism occurs when the thyroid gland is underactive and does not produce enough thyroid hormone, leading to symptoms such as fatigue, weight gain, cold sensitivity, dry skin, and depression. Hyperthyroidism, on the other hand, results from an overactive thyroid that produces too much hormone, causing rapid heartbeat, weight loss, nervousness, and sweating.
              </p>
              <p>
                Other thyroid conditions include Hashimoto's thyroiditis (an autoimmune disorder), Graves' disease, thyroid nodules, and thyroid cancer. These conditions can affect people of all ages but are significantly more common in women.
              </p>
              <p>
                Through a personalized nutritional approach, dietary management, and targeted lifestyle modifications, thyroid conditions can be effectively managed. Our program focuses on identifying root causes, balancing hormonal function naturally, and supporting long-term thyroid health to help patients lead an active and healthy life.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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

  if (activeSpecialty === 'kidney-stone-reversal') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Kidney Stone Reversal
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* About Kidney Stone Reversal Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Kidney Stone Reversal
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                Kidney stone reversal, is a nutritional procedure that involves breaking up kidney stones into smaller fragments, which can then be passed out of the body through urine.
              </p>
              <p>
                The patient lies on a special diet and the supplements for the body to break up the stones.
              </p>
              <p>
                The choice of diet plan depends on the size, location, and type of kidney stones.
              </p>
              <p>
                patients may experience some discomfort and may be given pain medication. They may also be advised to drink plenty of fluids to help flush out any remaining stone fragments and prevent new stones from forming in the future.
              </p>
              <p>
                Kidney stone reversal is generally considered safe and effective, although there may be some risks associated with it, such as bleeding or infection. It is important to follow any post-procedure instructions provided by the healthcare provider to ensure a smooth recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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
  if (activeSpecialty === 'diabetes') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Diabetes
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* Side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={diabetesImg}
                alt="Healthy fruits and glucose meter"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={bloodPressureImg}
                alt="Doctor checking patient blood glucose"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Diabetes Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Diabetes
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                Diabetes is a chronic metabolic disorder characterized by high blood glucose levels (hyperglycemia) due to the body's inability to produce or use insulin effectively. Insulin is a hormone produced by the pancreas that helps regulate blood sugar levels by allowing glucose to enter cells and be used for energy.
              </p>
              <p>
                There are three main types of diabetes: type 1, type 2, and gestational diabetes. Type 1 diabetes is an autoimmune disease that typically develops in childhood or adolescence, where the body's immune system attacks and destroys insulin-producing cells in the pancreas. Type 2 diabetes, the most common type, usually develops in adulthood and is often associated with obesity and a sedentary lifestyle. Gestational diabetes occurs during pregnancy and typically resolves after delivery, although women who have had gestational diabetes have a higher risk of developing type 2 diabetes later in life.
              </p>
              <p>
                The symptoms of diabetes can include increased thirst and urination, fatigue, blurred vision, slow healing wounds, and frequent infections. If left untreated, diabetes can lead to serious health complications such as heart disease, stroke, kidney failure, blindness, and nerve damage.
              </p>
              <p>
                The management of diabetes involves a combination of lifestyle modifications such as regular exercise, healthy eating habits, and weight management, as well as right nutritional supplements.
              </p>
              <p>
                Blood glucose monitoring is an essential part of diabetes management to ensure that blood sugar levels remain within a target range.
              </p>
              <p>
                Preventing or delaying the onset of diabetes is possible through maintaining a healthy lifestyle, avoiding tobacco use, and early detection through regular medical checkups.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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

  if (activeSpecialty === 'blood-pressure') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Blood Pressure
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* Side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={bloodPressureImg}
                alt="Manual blood pressure measurement with sphygmomanometer"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={stressfulTimesImg}
                alt="Digital blood pressure monitor reading"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Blood Pressure Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Blood Pressure
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                Blood pressure is the force of blood pushing against the walls of arteries as it flows through them. It is measured in millimeters of mercury (mmHg) and consists of two values – the systolic pressure (the higher number) and diastolic pressure (the lower number).
              </p>
              <p>
                Systolic pressure is the pressure in the arteries when the heart beats, pumping blood out of the heart and into the arteries. Diastolic pressure is the pressure in the arteries when the heart is at rest between beats.
              </p>
              <p>
                Normal blood pressure is generally considered to be below 120/80 mmHg. High blood pressure, or hypertension, is when blood pressure is consistently elevated and can increase the risk of heart disease, stroke, and other health problems. Low blood pressure, or hypotension, can cause dizziness, fainting, and other symptoms.
              </p>
              <p>
                Factors that can affect blood pressure include age, gender, family history, diet, exercise, stress, and certain medical conditions or medications. Lifestyle changes such as maintaining a healthy weight, exercising regularly, reducing salt intake, and managing stress can help lower blood pressure.
              </p>
              <p>
                It is important to have blood pressure checked regularly by a healthcare provider, as high blood pressure often has no symptoms and can go undetected for years. Treatment for high blood pressure may include lifestyle changes and/or medications prescribed by a healthcare provider.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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

  if (activeSpecialty === 'weight-loss') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Weight Loss
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* Side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={weightLossImg}
                alt="Woman measuring waist with tape measure and healthy food"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={gastricReversalImg}
                alt="Man on weighing scale showing weight loss progress"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Weight Loss Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Weight Loss
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                Weight loss is a process of reducing body weight to improve overall health and wellbeing. It can be achieved through a combination of healthy eating, physical activity, and lifestyle changes. Weight loss can benefit people who are overweight or obese, as excess weight can increase the risk of several health conditions, including heart disease, diabetes, and some cancers.
              </p>
              <p>
                The most effective way to achieve weight loss is through a calorie deficit, which means burning more calories than you consume. This can be achieved by reducing calorie intake through healthy eating habits, such as consuming more fruits, vegetables, whole grains, and lean proteins while limiting sugary and high-fat foods. Additionally, incorporating regular physical activity into your routine can help increase calorie burn and aid in weight loss.
              </p>
              <p>
                Weight loss can be a gradual process, and it is important to set realistic goals and expectations. A healthy rate of weight loss is generally considered to be one to two pounds per week. Crash diets or extreme weight loss methods can be harmful to overall health and can lead to nutrient deficiencies, dehydration, and other health complications.
              </p>
              <p>
                Maintaining weight loss can be challenging, but it is important to adopt healthy lifestyle habits that can be sustained long-term. This may include continuing to eat a healthy diet, engaging in regular physical activity, and managing stress levels. Additionally, seeking support from a healthcare professional or a support group can help individuals stay on track and achieve long-term success in weight loss and weight management.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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

  if (activeSpecialty === 'gastric-reversal') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Gastric Reversal
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* Side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={gastricReversalImg}
                alt="Gastric reversal anatomy diagram showing intestinal rerouting"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={weightLossImg}
                alt="Gastric sleeve reversal procedure diagram"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Gastric Reversal Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Gastric Reversal
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                Gastric reversal, also known as gastric sleeve reversal or sleeve gastrectomy reversal, is a natural procedure in which the gastric issues are reversed.
              </p>
              <p>
                There are several reasons why a patient may opt for gastric sleeve reversal, including complications from the original surgery, inadequate weight loss, or the need to address nutritional deficiencies. Some patients may also experience persistent side effects, such as acid reflux, nausea, or vomiting, after the initial surgery, which may prompt them to seek reversal.
              </p>
              <p>
                Recovery from gastric sleeve reversal is similar to the original surgery, with patients needing to follow a specific diet and engage in physical activity to aid in recovery. Most patients are able to resume normal activities within a few weeks after surgery, but it can take several months to fully recover.
              </p>
              <p>
                The success of gastric reversal may vary depending on the individual case and the reasons for seeking reversal.
              </p>
              <p>
                In conclusion, gastric reversal is important for patients to discuss the potential risks and benefits of the procedure with their healthcare provider before making a decision.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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

  if (activeSpecialty === 'derma-care') {
    return (
      <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
        {/* Centered Header Banner with V-Shape Bottom */}
        <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Derma Care
          </h1>
          {/* V-Shape Point at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
          />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => setActiveSpecialty(null)}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-6 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            ← Back to Specializations
          </button>

          {/* Side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={dermaCareImg}
                alt="Woman receiving facial skin treatment with derma device"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden shadow-md">
              <img
                src={nutrientTherapyImg}
                alt="Dermacare nutrition and skin health illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Derma Care Card */}
          <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d6d9c0] text-center tracking-wide mb-6">
              About Derma Care
            </h2>

            <div className="space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed text-left font-medium">
              <p>
                Dermacare, also known as dermatology care, refers to the nutritional treatment and management of skin conditions and diseases. The skin is the largest organ of the body and serves as a protective barrier against environmental factors such as sunlight, pollution, and bacteria. Dermacare focuses on maintaining the health of the skin, preventing and treating skin conditions, and improving the appearance of the skin.
              </p>
              <p>
                There are numerous skin conditions and diseases that can be treated through dermacare, including acne, psoriasis, skin cancer, and more.
              </p>
              <p>
                In addition to treating skin conditions and diseases, dermacare also involves preventive measures to maintain healthy skin. This includes regular skin exams to identify potential skin issues early, protecting the skin from sun damage with sunscreen and protective clothing, and maintaining a healthy lifestyle with a balanced diet and regular exercise.
              </p>
              <p>
                Cosmetic dermacare is also becoming increasingly popular, with many people seeking treatments to improve the appearance of their skin.
              </p>
              <p>
                Overall, dermacare is an important aspect of maintaining overall health and wellbeing. By preventing and treating skin conditions and diseases, individuals can improve their quality of life and feel confident in their skin's appearance. It is important to consult with a right nutritionist to develop a personalized dermacare plan that meets individual needs and addresses specific skin concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Coral thoughts banner at the bottom */}
        <section className="w-full bg-[#484e36] py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
              <div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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

  return (
    <div className="w-full bg-[#cef2fe] pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#484e36] tracking-wide">
            Our Specializations
          </h1>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {specializations.map((spec, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              {/* Image Frame with gray thin border */}
              <div className="w-full aspect-[4/3] bg-white overflow-hidden border border-gray-300 shadow-sm">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title (centered, bold olive green) */}
              <h2 className="font-sans text-xl font-bold text-[#484e36] text-center uppercase tracking-wide">
                {spec.title}
              </h2>

              {/* Description (left-aligned, comfortable text size, dark gray) */}
              <p className="text-[#334155] text-sm leading-relaxed grow text-left font-medium">
                {spec.desc}
              </p>

              {/* Actions row: View More and Call Now */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <button
                  onClick={() => {
                    if (spec.title === "CANCER CARE") {
                      setActiveSpecialty('cancer-care');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (spec.title === "PCOD , PCOS") {
                      setActiveSpecialty('pcod-pcos');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (spec.title === "BLADDER STONE REVERSAL") {
                      setActiveSpecialty('bladder-stone-reversal');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (spec.title === "KIDNEY STONE REVERSAL") {
                      setActiveSpecialty('kidney-stone-reversal');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (spec.title === "THYROID") {
                      setActiveSpecialty('thyroid');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (spec.title === "DIABETES") {
                      setActiveSpecialty('diabetes');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (spec.title === "BLOOD PRESSURE") {
                      setActiveSpecialty('blood-pressure');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (spec.title === "WEIGHT LOSS") {
                      setActiveSpecialty('weight-loss');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (spec.title === "GASTRIC REVERSAL") {
                      setActiveSpecialty('gastric-reversal');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (spec.title === "DERMA CARE") {
                      setActiveSpecialty('derma-care');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold py-2 px-4 rounded-sm text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-sm uppercase"
                >
                  View More
                </button>
                {spec.doubleButtons && (
                  <a
                    href="tel:+919902670665"
                    className="bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold py-2 px-4 rounded-sm text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-sm uppercase block"
                  >
                    Call Now
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Row 4 Spanning Block: Red Send an Enquiry Card + Black Social Bar */}
          <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-stretch shadow-md overflow-hidden min-h-[350px]">
            {/* Red Card */}
            <div className="bg-[#ff0000] text-white flex-1 p-6 sm:p-8 flex flex-col justify-center">
              <h3 className="text-center font-display text-2xl font-bold mb-6 tracking-wide">
                Send an Enquiry
              </h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-[#72b02a]" />
                  <p className="text-sm font-semibold">Thank you for your enquiry. We will contact you soon!</p>
                  <button onClick={() => setStatus('idle')} className="text-xs underline cursor-pointer">Submit Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-2.5 bg-white border-0 text-sm focus:outline-none placeholder-gray-500 font-semibold"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 bg-white border-0 text-sm focus:outline-none placeholder-gray-500 font-semibold"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2.5 bg-white border-0 text-sm focus:outline-none placeholder-gray-500 font-semibold"
                  />
                  <textarea
                    name="message"
                    rows="3"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full px-4 py-2.5 bg-white border-0 text-sm focus:outline-none placeholder-gray-500 font-semibold resize-none"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold py-2.5 px-8 text-sm uppercase transition-colors rounded-sm cursor-pointer block"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>

            {/* Black Social Bar */}
            <div className="bg-black text-white w-full sm:w-16 flex sm:flex-col items-center justify-center gap-6 py-6 sm:py-0 shrink-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" /></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="YouTube">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
