import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';


function DropdownMenu() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end", 
        alignItems: "center", 
        padding: "10px 20px", 
        boxSizing: "border-box",
        width: "80%", 
      }}
    >

            <img
        src="/Logo2.jpg"
        alt="Logo2"
        style={{
          position: "absolute", 
          top: "10px", 
          left: "10px", 
          width: "200px", 
          height: "auto",
        }}
      />


      <select
        onChange={handleChange}
        defaultValue=""
        style={{
          backgroundColor: "#AEC6CF", 
          color: "gray", 
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #AEC6CF",
          fontSize: "clamp(1.5rem, 2.5vw, 1.5rem)", 
          cursor: "pointer",
          outline: "none",
          width: "70%", 
          maxWidth: "200px", 
          
          marginRight: "-60px",
        }}
      >
        <option value="" disabled style={{ backgroundColor: "white", color: "black" }}>
          Let's Explore!
        </option>
        <option value="/">Home</option>
        <option value="/about-us">About Us</option>
        <option value="/services">Services</option>
        <option value="/about-loan-doan">Provider</option>
        <option value="/contact-us">Contact Us</option>
      </select>
    </div>
  );
}



// Page Components
function Home() {
  const [isPopupVisible, setPopupVisible] = useState(true); 

  const closePopup = () => setPopupVisible(false); 

  return (
    <div className="App">
      <header className="App-header" style={{ position: 'relative', textAlign: 'center' }}>
        <img
          src="/PATCover.jpg"
          alt="Peak Alpha Testo Cover"
          style={{
            width: '100vw',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textShadow: '4px 4px 4px rgba(0, 0, 0, 0.7)',
            width: '90%',
          }}
        >
          <h1 className="main-title">Peak Alpha Testo</h1>
          <h2 className="sub-title">San Antonio Elite Wellness Center</h2>

        </div>
        <div>
          
          <h3> Unleash Your Best Self: Peak Performance, Peak Confidence, Peak Alpha.</h3>
          <h6>Transform Your Life with Medical Weight Loss: Achieve Real and Lasting Results </h6>

          <img
        src="/PATCover2.jpg" 
        alt="Loan Doan"
        style={{
          width: '300px',
          height: 'auto',
          borderRadius: '10px',
          marginTop: '20px',
        }}
      />

          <h4>Welcome to Our Medical Clinic – Where Health, Confidence, and Wellness Meet </h4>

          <h6>
<br></br>At our clinic, we offer a wide range of personalized health services to support your well-being 
<br></br>and boost your confidence. From enhancing sexual health and managing hormone replacement therapy 
<br></br>for males to weight loss and aesthetic improvements, our experienced healthcare providers are 
<br></br>dedicated to helping you achieve your goals.We specialize in effective, customized treatments 
<br></br>tailored to each patient's unique needs. By addressing your medical concerns and supporting your
<br></br>personalhealth objectives, we create care plans that promote a healthier, more vibrant life.</h6>
        </div>
      </header>
       {/* Pop-Up Modal */}
       {isPopupVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
 style={{
  backgroundColor: "#87CEEb", // 
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  width: "80%",
  maxWidth: "700px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  margin: "10px auto",
}}
>
<p
    style={{
      fontSize: "clamp(1rem, 2.5vw, 1.5rem)", 
      fontWeight: "bold",
      marginBottom: "10px",
    }}
  >
    Subscribe to our page for monthly deals and save big!
  </p>
  <h2 style={{ fontSize: "1.5rem", margin: "10px 0" }}>Get $50 Off Semaglutide!</h2>
  <h2 style={{ fontSize: "1.5rem", margin: "10px 0" }}>
    Or Free injection of FREE wellness injection:
  </h2>
  <h6 style={{ fontSize: "1rem", margin: "5px 0" }}>
    - Amino Blend Injection: Boost your energy and support your muscle recovery.
  </h6>
  <h6 style={{ fontSize: "1rem", margin: "5px 0" }}>
    - Lipotropic Injection: Enhance your metabolism and support your weight loss goals.
  </h6>
  <h6 style={{ fontSize: "1rem", margin: "5px 0" }}>
    - B12 Injection: Increase your energy, boost your mood, and support overall wellness.
  </h6>

  <input
    type="email"
    placeholder="Enter your email"
    style={{
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      maxWidth: "300px",
      fontSize: "1rem",
      margin: "10px 0",
    }}
  />
  <br />
  <button
    style={{
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1rem", 
    }}
    onClick={() => alert("Email submitted!")}
  >
    Submit
  </button>
  <button
    style={{
      backgroundColor: "white",
      color: "#007BFF",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1rem", 
      marginLeft: "10px", 
    }}
    onClick={closePopup} 
  >
    Close
  </button>
</div>
        </div>
      )}
    </div>
  );
}


function AboutUs() {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* Image Section */}
      <img
        src="/Service.jpg" 
        alt="Service"
        style={{
          width: '500px',
          height: 'auto',
          borderRadius: '10px',
          marginTop: '20px',
        }}
      />

      {/* Text Section */}
      <h1 style={{ color: 'white' }}>Welcome to Our Medical Clinic</h1>
      <h3>Where Health, Confidence, and Wellness Meet</h3>
      <p>
        At our clinic, we specialize in personalized treatments designed to
        <br />
        support your well-being, boost your confidence, and help you live a
        healthier, more vibrant life.
      </p>

      {/* Services Section */}
      <h4 style={{ marginBottom: '5px' }}>
        
          <b>Our Services</b>
      
      </h4>

      <div style={{ lineHeight: '1.6' }}>
        1. <b>Hormone Replacement Therapy (HRT)</b> - Restore energy, mood, and libido with personalized hormone treatments. Effectively address fatigue, mood swings, and imbalances.
        <br />
        2. <b>Erectile Dysfunction Treatment</b> - Advanced non-invasive treatments improve blood flow and performance. Regain intimacy and confidence.
        <br />
        3. <b>Weight Loss Solutions</b> - Pharmaceutical treatments like Semaglutide and PCDC support weight loss. Achieve results with personalized plans and guidance.
        <br />
        4. <b>Pain Management</b> - Ozone Trigger Point Injections relieve acute and chronic pain. Reduce inflammation, heal, and restore mobility naturally.
        <br />
        5. <b>Aesthetic Treatments (Botox & Fillers)</b> - Smooth fine lines, restore volume, and enhance your natural beauty. Services include wrinkle reduction, lip enhancement, and youthful facial contouring.
      </div>

 
      <h4>
        
          <b>Why Choose Us?</b>
        
      </h4>
      <div style={{ lineHeight: '1.6' }}>
        <ul style={{ listStyleType: 'disc', listStylePosition: 'inside', paddingLeft: '0' }}>
          <li>
            <b>Comprehensive Care:</b> From hormone therapy to aesthetics, we address your internal health and external appearance.
          </li>
          <li>
            <b>Experienced Team:</b> Highly trained professionals dedicated to your wellness journey.
          </li>
          <li>
            <b>Personalized Plans:</b> Tailored treatments that meet your unique goals and lifestyle.
          </li>
          <li>
            <b>Cutting-Edge Treatments:</b> The latest in medical advancements to deliver visible, lasting results.
          </li>
          <li>
            <b>Comfort & Confidentiality:</b> A caring, supportive environment where your privacy comes first.
          </li>
        </ul>

      </div>



      <h4><b>Who We Serve</b></h4>
We support individuals looking to:
<br></br><ul style={{ listStyleType: 'disc', listStylePosition: 'inside', paddingLeft: '0' }}>
<li>Boost energy and vitality</li>
<li>Manage weight and feel healthier</li>
<li>Enhance confidence in their appearance</li>
<li>Improve intimacy and sexual performance</li>
<li>Find relief from chronic pain</li>
<li>Take the First Step Today</li>
<li>Discover how our tailored treatments can help you live healthier, feel confident, and look your best.</li>
</ul>
<h3>📅 Book a Consultation Now
Let us create the perfect care plan for you.</h3>
<br></br>
<button

        onClick={() => window.location.href = '/services'}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#ffffff",
          backgroundColor: "#78A2CC",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
      Let’s Explore Services!
      </button>
<br></br>
<br></br>

    </div>
  );
}

function Services() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Services Page</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <a
            href="/services/phosphatidylcholine-deoxycholate-injections"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
            Phosphatidylcholine/Deoxycholate Injections
          </a>
          <a
            href="/services/lipotropic-injection"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
          <br></br>  Lipotropic Injections
          </a>
          <a
            href="/services/beautiTOX"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
          <br></br> BeutiTOX
          </a>

          <a
            href="/services/Testosterone"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
          <br></br>  Testosterone
          </a>

        </li>
      </ul>
    </div>
  );
}

// New Page Component
function PhosphatidylcholineDeoxycholateInjections() {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#AEC6CF",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      {/* Responsive Image Section */}
      <img
        src="/pdinj.jpg" 
        alt="Phosphatidylcholine/Deoxycholate Injections"
        style={{
          width: "100%",
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Content Section */}
      <h1 style={{ color: 'white' }}>Say Goodbye to Stubborn Fat with Phosphatidylcholine/Deoxycholate Injections</h1>

      
      <h1>Struggling with Stubborn Fat?</h1>
      Are you tired of dealing with areas of stubborn fat that just won’t go away, no matter how much you diet or exercise? Whether it’s 
        <br>
        </br>under your chin, around your abdomen, or on your thighs, Phosphatidylcholine/Deoxycholate Injections could be the solution you’ve been searching for!
        <h3>What Are Phosphatidylcholine/Deoxycholate Injections?</h3>
        Phosphatidylcholine/Deoxycholate, commonly referred to as fat-dissolving injections, is a non-surgical 
        <br></br>treatment that effectively targets and breaks down stubborn fat in specific areas of your body.

        <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
  <li>The injections use a combination of natural substances that dissolve fat cells.</li>
  <li>Once dissolved, the fat is naturally eliminated by your body.</li>
  <li>After treatment, the targeted fat cells can no longer store fat.</li>
</ul>

    <h3>Why Choose This Treatment?</h3>
    <b>Target Stubborn Fat:</b> Remove small pockets of fat that refuse to budge, like double chins, love handles, or belly fat.
<br></br><b>Non-Surgical Alternative:</b> Unlike liposuction, this treatment is non-invasive and requires little to no downtime.
<br></br><b>Quick and Lasting Results:</b> Sessions take only 15–30 minutes, with visible results in just a few weeks.
<br></br><b>Safe and Effective:</b> FDA-approved to safely break down fat cells, leaving you with a more sculpted, toned appearance.
    
    <h3>Key Benefits</h3>
    <b>✔ Jawline contouring for a sleeker look
<br></br>✔ Fat reduction without harming surrounding tissue
<br></br>✔ Non-surgical, outpatient procedure – no anesthesia needed
<br></br>✔ Affordable alternative to cosmetic surgery
<br></br>✔ Permanent results if weight is maintained
<br></br>✔ No scars or incisions
<br></br>✔ No downtime required
<br></br>✔ Minimal, short-term side effects
<br></br>✔ Gradual and natural-looking results</b>

<h3>How It Works</h3>
<b>Consultation:</b> Our experts will assess your target areas and explain the procedure.
<br></br><b>Treatment:</b> Fat-dissolving injections are administered to the targeted areas.
<br></br>Recovery: Return to your normal routine right away – it’s that simple.
<br></br><b>Results:</b> Start seeing changes in a few weeks, with optimal results after a few sessions.

<br></br>
<button

        onClick={() => window.location.href = '/services'}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#ffffff",
          backgroundColor: "#78A2CC",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
      Let’s Explore More!
      </button>

    </div>
  );
}





function LipotropicInjection() {
  return (

    
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#AEC6CF", fontFamily: "Arial, sans-serif" }}>
       <img
        src="/Lipot.jpg" 
        alt="Lipotrpic Injections"
        style={{
          width: "100%", 
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ color: "white" }}>Revitalize Your Body with Lipotropic Injections</h1>
      <h1>Boost Your Fat Loss with Lipotropic Injections
        </h1>
        Are you struggling to shed stubborn fat? Lipotropic Injections might be the solution you’ve been looking for! These specially 
        <br></br>formulated injections enhance your body’s natural ability to metabolize fat, giving you that extra boost to complement a healthy 
        <br></br>diet and regular exercise.


      <h3>What Are Lipotropic Compounds?</h3>
      Lipotropics are a blend of essential vitamins, nutrients, and natural compounds designed to:
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Support Fat Metabolism:</b> Break down fats more efficiently.</li>
        <li><b>Improve Body Composition: </b>Help reduce fat storage and promote a leaner, healthier physique.</li>
      </ul>
      <h3>How Lipotropic Injections Work</h3>
      Our injections are powered by key compounds like Methionine and Choline:
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Methionine:</b> A powerful agent that aids in fat mobilization and detoxifies the liver.</li>
        <li><b>Choline: </b>Helps break down fats and ensures healthy liver function.</li>
      </ul>
      Together, these compounds deliver maximum fat-burning and detoxifying benefits.


      <h3>Why Choose Lipotropic Injections?</h3>
      While lipotropic compounds are available as supplements, injections offer unique advantages:
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Better Absorption:</b> Directly absorbed into the bloodstream for maximum impact.</li>
        <li><b>Faster Results: </b>Notice improvements sooner due to higher bioavailability.</li>
        <li><b>Ideal for Absorption Issues:</b>Perfect for individuals with gastrointestinal conditions that may prevent proper nutrient absorption.</li>
      </ul>

<h3>Benefits of Lipotropic Injections</h3>
Lipotropic Injections can transform your wellness journey with the following benefits:


<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Supports Fat Loss:</b>Helps your body metabolize fat more efficiently.</li>
        <li><b>Boosts Metabolism:  </b>Enhances calorie-burning potential.</li>
        <li><b>Improves Energy</b>Detoxifies the liver and reduces fat buildup, improving overall function.</li>
        <li><b>Supports Liver Health:</b>Enhances calorie-burning potential.</li>
        <li><b>Boosts Metabolism:  </b>Enhances calorie-burning potential.</li>
            <li>Promotes healthy skin, strong nails, and hair growth.</li>
            <li>Regulates cholesterol levels and estrogen balance.</li>
            <li>Prevents gallstones and supports long-term liver health.</li>
          </ul>




      <h3>Is Lipotropic Right for You?</h3>
      Lipotropic Injections are perfect for those who:
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li>Struggle with stubborn fat in specific areas. </li>
        <li>Need an energy boost to stay active and motivated.</li>
        <li>Are looking for an effective way to complement their diet and exercise plan.</li>
      </ul>

<button

        onClick={() => window.location.href = '/services'}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#ffffff",
          backgroundColor: "#78A2CC",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Services
      </button>

    </div>
);
}

function BeautiTOX() {
  return (

    
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#AEC6CF", fontFamily: "Arial, sans-serif" }}>
       <img
        src="/BeautiTOX.jpg" 
        alt="BeautiTOX"
        style={{
          width: "100%", 
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />


<h1 style={{ color: "white" }}>BeautiTOX: Smooth Wrinkles and Refresh Your Look</h1>
      <h1>Smooth Wrinkles & Refresh Your Look with Neurotoxin Treatments
        </h1>
        Noticing fine lines and wrinkles? Neurotoxin treatments could be the solution you’ve been 
        <br></br>looking for! These non-surgical treatments smooth wrinkles, prevent future lines, 
        <br></br>and even address issues like headaches and excessive sweating—all while restoring your youthful glow.

<br></br>Feel confident and refreshed with neurotoxin treatments today!
<h3>Benefits of Neurotoxin Treatments:</h3>
<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>

<li>Erase Wrinkles: Smooth frown lines, crow’s feet, and forehead creases.</li>

<li>Prevent Aging: Delay new wrinkles by relaxing facial muscles.</li>

<li>Quick & Easy: Minimal pain, no downtime, and results in just a few days.</li>

<li>Health Perks: Treat migraines, excessive sweating, and jaw clenching.</li>
</ul>

<h3>What to Expect:</h3>

Before Treatment:

<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
<li>Stop NSAIDs and supplements a week prior.</li>

<li>Avoid alcohol 24 hours before treatment.</li>

<li>Eat a healthy snack (avoid caffeine) to prevent lightheadedness.</li>
</ul>

<h3>After Treatment:</h3>
<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
<li>Results will start to appear within a few days and continue to improve over the next week.</li>
<li>Avoid rubbing or massaging the treated areas for the first 24 hours to allow the neurotoxin to settle properly.</li>
<li>Repeated sessions will enhance and prolong the benefits over time</li>
</ul>

<h3>Is Neurotoxin Treatment Right for You?</h3>
Neurotoxin treatments are safe and effective for most people, but they may not be 
<br></br>suitable for everyone. They are not recommended for pregnant or breastfeeding women, 
<br></br>or those with certain medical conditions. A consultation with a qualified provider 
<br></br>will help determine if this treatment is the best option for your goals.
<br></br>
<br></br><b>Note: Neurotoxins are not recommended for pregnant or breastfeeding women.</b>
<br></br>
<button

        onClick={() => window.location.href = '/services'}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#ffffff",
          backgroundColor: "#78A2CC",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Let’s Explore More!
      </button>
      <br></br>


    </div>
);
}

function Testosterone() {
  return (

    
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#AEC6CF", fontFamily: "Arial, sans-serif" }}>
       <img
        src="/Testo.jpg" 
        alt="Testosterone"
        style={{
          width: "100%", 
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />


<h1 style={{ color: "white" }}>Testosterone Therapy: Feel Like Yourself Again</h1>
      <h1>Boost Your Energy, Strength, and Confidence
        </h1>
        Do you feel tired, unmotivated, or not quite like yourself? Many men experience these changes with age, 
        <br></br>often due to declining testosterone levels. But you don’t have to settle for feeling "off." Testosterone therapy may be 
        <br></br>the solution to restore your vitality and confidence.

       <h3> What Is Testosterone Therapy?</h3>
Testosterone is essential for energy, strength, mood, and libido. As men age, testosterone levels naturally decline, 
<br></br>leading to fatigue, muscle loss, brain fog, and reduced libido. Testosterone therapy is a safe, doctor-supervised treatment 
<br></br>designed to restore optimal hormone levels and help you feel your best again.

<h3>Benefits of Testosterone Therapy</h3>
<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
<li><b>Restore Energy</b>
If you’re constantly feeling drained or sluggish, testosterone therapy can help. It works to 
<br></br>boost your energy levels, helping you feel awake, alert, and ready to take on the challenges of each day.
</li>
<li><b>Boost Strength & Fitness</b>
Struggling with workouts or noticing a loss of muscle mass? Testosterone therapy helps improve 
<br></br>your muscle tone, endurance, and overall physical performance, making it easier to stay fit, active, and strong.
</li>
<li><b>Enhance Mood & Mental Clarity</b>
Low testosterone can lead to irritability, brain fog, or even depression. Testosterone therapy 
<br></br>helps stabilize your mood, clear mental fog, and restore your focus, helping you feel sharp and balanced.
</li>
<li><b>Reignite Libido</b>
A drop in libido can affect your relationships and confidence. Testosterone therapy can restore 
<br></br>your desire, reigniting your passion and helping you feel more connected to your partner.
</li>
<li><b>Combat the Effects of Aging</b>
As testosterone levels decline, aging takes its toll on your body, from reduced bone density to a 
<br></br>slower metabolism. Testosterone therapy helps counter these effects, promoting overall health and vitality.
</li>
</ul>

<h3>Who Can Benefit from Testosterone Therapy?</h3>
If you’re feeling less energetic, finding it harder to build or maintain muscle, struggling with 
<br></br>mood changes, or experiencing a drop in intimacy, testosterone therapy might be the right choice for you. 
<br></br>By restoring balance, this treatment can help you regain control over your body and mind, letting you live life to the fullest.

<h3>Take Control of Your Health</h3>
Stop letting low testosterone hold you back. With a simple consultation, we’ll evaluate 
<br></br>your symptoms, discuss your goals, and create a personalized treatment plan to help you regain your energy, strength, and confidence.
<br></br>
<button

        onClick={() => window.location.href = '/services'}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#ffffff",
          backgroundColor: "#78A2CC",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Services
      </button>
      <br></br>


    </div>
);
}





function AboutLoanDoan() {
  return (
    <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'white' }}>Meet Loan (Lexi) Doan, PA-C, M.S. in Physician Assistant Studies </h1>
            <img
        src="/LoanDoan.jpg" 

        alt="Loan Doan"
        style={{
          width: '300px',
          height: 'auto',
          borderRadius: '10px',
          marginTop: '20px',
        }}
      />

      <p>With a dedication to advancing health and wellness, Lexi is deeply committed to helping 
        <br></br>Board-Certified Physician Assistant with a strong background in Aesthetic Medicine, 
        <br></br>Hormone Replacement Therapy (HRT), and Urgent Care, she combines her clinical expertise 
        <br></br>and passion for patient care to offer a personalized approach to every individual she 
        <br></br> works with. 
        <br></br>
        <br></br><b>Educational Foundation & Expertise </b>

        <br></br>Lexi holds a Master’s in Physician Assistant Studies (PA-C), allowing her to work at the 
        <br></br>forefront of medical care. She also holds a Master’s in Biology, a Bachelor’s in Biology,
        <br></br>and two Associates Degrees, giving her a broad and deep understanding of both the
        <br></br>science and practice of medicine. Additionally, Lexi is Certified in Cosmetology. She 
        <br></br>specialized training in non-surgical aesthetic procedures such as Botox and dermal 
        <br></br>fillers, further demonstrating her commitment to staying at the cutting edge of beauty 
        <br></br>and wellness treatments. Her robust academic foundation is complemented by years of 
        <br></br>hands-on experience in clinical settings. Over the years, she has developed an exceptional 
        <br></br>ability to manage complex medical situations, and her background in urgent care has 
        <br></br>instilled a sense of urgency, precision, and compassion in all aspects of her care. This 
        <br></br> experience allows her to provide safe, effective treatments tailored to meet each patient’s 
        <br></br>unique needs. 
        <br></br>
        <br></br><b>A Holistic Approach to Health and Aesthetics As a medical professional</b> 
        
        <br></br>passionate about both wellness and aesthetics, Lexi takes a holistic approach to care. Whether 
        <br></br> you are seeking weight loss support, neurotoxin for wrinkle reduction, fillers for facial 
        <br></br>volume restoration, or hormone replacement therapy, she will take the time to understand your 
        <br></br>personal goals, lifestyle, and medical history before recommending the best course of treatment 
        <br></br>for you. Having seen firsthand the impact of hormone replacement therapy on patients' overall well-being 
        <br></br>and quality of life, Lexi is dedicated to helping individuals balance their hormones for better 
        <br></br>energy, mood, and vitality. Her compassionate care ensures that each patient feels understood
        <br></br>and empowered to take control of their health. Trust, Transparency, and Care </p>

<br></br>Patients trust Lexi not only for her extensive medical knowledge but also for her genuine compassion 
<br></br>and commitment to each individual’s health journey. She believes in transparency, ensuring that you 
<br></br>understand your options and feel confident in the treatment process. Whether you are seeking rejuvenation 
<br></br>through Botox or fillers, or tackling weight loss with the help of weight loss medications, you can 
<br></br>count on Lexi to provide a safe, supportive, and welcoming environment. Her approach is always centered 
<br></br>around what’s best for you, with results that speak for themselves. Every treatment is customized to your 
<br></br>personal goals, and she is here to support you every step of the way. 
        <br></br>
        <br></br>
        <br></br>
      
    </div>
  );
}




function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    date: "",
    timeFrame: "Morning",
    service: "Lipotropic Injection",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Appointment Request Submitted!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "20px" }}>Contact Us</h1>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>
        Schedule your appointment or contact us for more information!
      </h1>
     
      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "#AEC6CF",
          borderRadius: "10px",
  
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <label style={{ display: "block", marginBottom: "5px" }}>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              boxSizing: "border-box",
            }}
            required
          />



          {/* Date of Birth */}
          <label style={{ display: "block", marginBottom: "5px" }}>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              boxSizing: "border-box",
            }}
            required
          />

<label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            type="text"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Enter your Email"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              boxSizing: "border-box",
            }}
            required
          />
          

   
          {/* Primary Date */}
          <label style={{ display: "block", marginBottom: "5px" }}>Primary Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              boxSizing: "border-box",
            }}
            required
          />

          {/* Secondary Date */}
          <label style={{ display: "block", marginBottom: "5px" }}>Secondary Date:</label>
          <input
            type="date"
            name="secondaryDate"
            value={formData.secondaryDate}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              boxSizing: "border-box",
            }}
          />

          {/* Time Frame Dropdown */}
          <label style={{ display: "block", marginBottom: "5px" }}>Time Frame:</label>
          <select
            name="timeFrame"
            value={formData.timeFrame}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Morning">Evening</option>
          </select>

          {/* Service Requesting Dropdown */}
          <label style={{ display: "block", marginBottom: "5px" }}>Service Requesting:</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            <option value="Lipotropic Injection">Lipotropic Injection</option>
            <option value="Phosphatidylcholine/Deoxycholate Injections">
              Phosphatidylcholine/Deoxycholate Injections</option>
              <option value="BeautiTOX">BeautiTOX</option>
            <option value="Testosterone  ">Testosterone</option>
            <option value="Consultation">Consultation</option>


            
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Submit Request
          </button> 
          

        </form>
        <p>A $25 deposit is required to cover any no-show fees. Please note that the consultation is complimentary, and this deposit will be credited towards your service. </p>
      </div>
    </div>
  );
}


// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <DropdownMenu />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-loan-doan" element={<AboutLoanDoan />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/services/phosphatidylcholine-deoxycholate-injections"
            element={<PhosphatidylcholineDeoxycholateInjections />} />
             <Route path="/services/lipotropic-injection" element={<LipotropicInjection />} />
             <Route path="services/beautiTOX" element ={<BeautiTOX />} />
             <Route path="services/testosterone" element ={<Testosterone />} />
        </Routes>

        <footer>
        <p>(210) - 881-9050</p>
        <p>9150 Huebner Road Suite 204, San Antonio, Texas 78240, United States</p>
      </footer>
      </div>
    </Router>
  );

  
}

export default App;
