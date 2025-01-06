import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
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
      {/* Link for the logo */}
      <Link to="/" style={{ position: "absolute", top: "10px", left: "10px" }}>
        <img
          src="/Logo2.jpg"
          alt="Logo2"
          style={{
            width: "200px",
            height: "auto",
            cursor: "pointer",
          }}
        />
      </Link>

      {/* Dropdown for navigation */}
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
    Or FREE wellness injection:
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

          <a
            href="/services/amino-injections"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
          <br></br>  Amino Injections
          </a>

          <a
            href="/services/fillers"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
          <br></br>  Fillers
          </a>

          <a
            href="/services/sermorelin"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
          <br></br>  Sermorelin
          </a>

          <a
            href="/services/erectile-dysfunction"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
          <br></br>  Erectile Dysfunction
          </a>

          <a
            href="/services/sexual-cream"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
          <br></br>  Sexual Cream
          </a>

          <a
            href="/services/b12-injections"
            style={{ color: 'white', textDecoration: 'underline',fontSize: 'clamp(2rem, 1.5vw, 2rem)', }}
          >
          <br></br>  B12 Injections
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
<br></br><b>Recovery:</b> Return to your normal routine right away – it’s that simple.
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
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
            Lipotropics are a blend of essential vitamins, nutrients, and natural compounds designed to:
  
        <li><b>Support Fat Metabolism:</b> Break down fats more efficiently.</li>
        <li><b>Improve Body Composition: </b>Help reduce fat storage and promote a leaner, healthier physique.</li>
      </ul>
      <h3>How Lipotropic Injections Work</h3>
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
              Our injections are powered by key compounds like Methionine and Choline:
        <li><b>Methionine:</b> A powerful agent that aids in fat mobilization and detoxifies the liver.</li>
        <li><b>Choline: </b>Helps break down fats and ensures healthy liver function.</li>
      </ul>
      Together, these compounds deliver maximum fat-burning and detoxifying benefits.


      <h3>Why Choose Lipotropic Injections?</h3>
      
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
      While lipotropic compounds are available as supplements, injections offer unique advantages:
        <li><b>Better Absorption:</b> Directly absorbed into the bloodstream for maximum impact.</li>
        <li><b>Faster Results: </b>Notice improvements sooner due to higher bioavailability.</li>
        <li><b>Ideal for Absorption Issues: </b>Perfect for individuals with gastrointestinal conditions that may prevent proper nutrient absorption.</li>
      </ul>

<h3>Benefits of Lipotropic Injections</h3>



<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
Lipotropic Injections can transform your wellness journey with the following benefits:
        <li><b>Supports Fat Loss:</b> Helps your body metabolize fat more efficiently.</li>
        <li><b>Boosts Metabolism:  </b>Enhances calorie-burning potential.</li>
        <li><b>Improves Energy: </b>Detoxifies the liver and reduces fat buildup, improving overall function.</li>
        <li><b>Supports Liver Health: </b>Enhances calorie-burning potential.</li>
        <li><b>Boosts Metabolism: </b>Enhances calorie-burning potential.</li>
            <li>Promotes healthy skin, strong nails, and hair growth.</li>
            <li>Regulates cholesterol levels and estrogen balance.</li>
            <li>Prevents gallstones and supports long-term liver health.</li>
          </ul>




      <h3>Is Lipotropic Right for You?</h3>
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
      Lipotropic Injections are perfect for those who:
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
        Let’s Explore More!
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
<li>Repeated sessions will enhance and prolong the benefits over time.</li>
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
<li><b>Restore Energy</b> If you’re constantly feeling drained or sluggish, testosterone therapy can help. It works to 
<br></br>boost your energy levels, helping you feel awake, alert, and ready to take on the challenges of each day.
</li>
<li><b>Boost Strength & Fitness</b> - Struggling with workouts or noticing a loss of muscle mass? Testosterone therapy helps improve 
<br></br>your muscle tone, endurance, and overall physical performance, making it easier to stay fit, active, and strong.
</li>
<li><b>Enhance Mood & Mental Clarity</b> - Low testosterone can lead to irritability, brain fog, or even depression. Testosterone therapy 
<br></br>helps stabilize your mood, clear mental fog, and restore your focus, helping you feel sharp and balanced.
</li>
<li><b>Reignite Libido</b> - A drop in libido can affect your relationships and confidence. Testosterone therapy can restore 
<br></br>your desire, reigniting your passion and helping you feel more connected to your partner.
</li>
<li><b>Combat the Effects of Aging</b> - As testosterone levels decline, aging takes its toll on your body, from reduced bone density to a 
<br></br>slower metabolism. Testosterone therapy helps counter these effects, promoting overall health and vitality.
</li>
</ul>

<h3>Who Can Benefit from Testosterone Therapy?</h3>
If you’re feeling less energetic, finding it harder to build or maintain muscle, struggling with 
<br></br>mood changes, or experiencing a drop in intimacy, testosterone therapy might be the right choice for you. 
<br></br>By restoring balance, this treatment can help you regain control over your body and mind, letting you live life to the fullest.


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


function AminoInjections() {
  return (

    
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#AEC6CF", fontFamily: "Arial, sans-serif" }}>
       <img
        src="/amino.jpg" 
        alt="aminoInjection"
        style={{
          width: "100%", 
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />


<h1 style={{ color: "white" }}>Support Your Health & Wellness with Amino Injections</h1>
      <h1>Boost Your Energy, Circulation, and Cardiovascular Health
        </h1>
        Are you ready to take your health routine to the next level? Amino Injections provide a simple,        <br></br>often due to declining testosterone levels. But you don’t have to settle for feeling "off." Testosterone therapy may be 
        <br></br>the solution to restore your vitality and confidence.

       <h3> Why Amino Acids Are Essential</h3>
       Amino acids are the building blocks of proteins and vital to many bodily functions. While some are
       <br></br>essential (you must obtain them through diet), others are conditionally essential, meaning  
       <br></br>your body needs extra support during times of stress or illness. That’s where Amino 
       <br></br>Injections come in, delivering targeted amino acid support for better health.


<h3>What Makes Amino Injections So Powerful?</h3>
<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
<li><b>Improves Cardiovascular Health </b>
Amino injections support nitric oxide production, which promotes .
<br></br>vasodilation (widening of blood vessels) This improves circulation, lowers blood pressure, and strengthens heart health
</li>
<li><b>Enhances Blood Flow </b>
 Better circulation means more efficient blood flow throughout your body. This helps you 
<br></br>feel energized and supports faster muscle recovery, especially after exercise.
</li>
<li><b>Supports Longevity </b>
By boosting blood flow and cardiovascular function, Amino injections promote overall 
<br></br>health and longevity, helping you stay active and youthful.

</li>
<li><b>Boosts General Wellness </b>
Amino acids aid in producing hormones and neurotransmitters that regulate mood, energy,
<br></br>and mental clarity. Amino injections help maintain balance, keeping your body performing at its best
</li>

</ul>
<h3>Is Amino Right for You?</h3>

<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
Amino injections are ideal for anyone looking to:
<li>Improve cardiovascular health and blood flow.</li>
<li>Enhance exercise performance and recovery.</li>
<li>Support overall wellness and longevity.</li>
<li>Maintain healthy blood pressure and energy levels</li>

Whether you're an athlete aiming to recover faster or simply want to feel your best every day, 
<br></br>Amino injections are a non-invasive, effective addition to your wellness routine.
</ul>
<ul>
Benefits at a Glance
<li>✔ Improved circulation and heart health</li>
<li>✔ Enhanced energy and stamina</li>
<li>✔ Faster recovery after workouts</li>
<li>✔ Boosted overall health and longevity</li>
<li>✔ Simple, non-invasive treatments</li>
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
        Let’s Explore More!
      </button>
      <br></br>


    </div>
);
}



function Fillers() {
  return (

    
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#AEC6CF", fontFamily: "Arial, sans-serif" }}>
       <img
        src="/Fillers.jpg" 
        alt="fillers"
        style={{
          width: "100%", 
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />


<h1 style={{ color: "white" }}>Enhance Your Natural Beauty with Fillers</h1>
      <h1>Achieve a Refreshed, Rejuvenated Look
        </h1>
        Aging can lead to a loss of facial volume, elasticity, and the formation of wrinkles and fine lines.
        <br></br> Whether you’re looking to restore youthful contours, smooth wrinkles, or add volume
        <br></br>to areas like your cheeks or lips, dermal fillers offer a non-surgical solution to enhance your natural beauty.

       <h3> What Are Fillers?</h3>
       Dermal fillers are safe, non-invasive treatments designed to restore lost volume, smooth wrinkles, 
       <br></br>and enhance your facial features. Made from natural or synthetic substances that mimic your body’s structure,  
       <br></br> fillers provide natural-looking results. Common treatment areas include:

       <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li>Cheeks</li>
        <li>Lips</li>
        <li>Under-eye hollows</li>
        <li>Jawline</li>
        </ul>

<h3>Why Choose Fillers?</h3>
<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
<li><b>Look Younger Instantly</b>
Reduce the appearance of wrinkles, fine lines, and hollows for a smoother, more youthful look.
</li>
<li><b>Non-Surgical with Quick Recovery </b>
Dermal fillers are non-invasive and require minimal downtime, allowing you to return to your daily activities immediately. 

</li>
<li><b>Natural-Looking Results</b>
Enhance your natural beauty with subtle, refined results that still feel like you
</li>

<li><b>Customized for You</b>
From fuller lips to lifted cheeks, every treatment is tailored to your aesthetic goals.
</li>

<li><b>Long-Lasting Improvements</b>
Results typically last 6 months to a year, providing long-term enhancements with simple maintenance touch-ups.</li>

</ul>
<h3>Benefits of Fillers</h3>


Amino injections are ideal for anyone looking to:
<br></br><b>✔ Smooth Wrinkles & Fine Lines</b> Soften laugh lines, crow’s feet, and other wrinkles for a more youthful appearance.
<br></br><b>✔ Restore Volume</b> Replenish fullness in areas like cheeks and under the eyes, reversing sagging or hollowing.
<br></br><b>✔ Enhance Lips</b> Achieve naturally fuller, plumper lips with soft, smooth results.
<br></br><b>✔ Lift & Contour</b> Subtly lift and define areas like the jawline or cheeks for a more balanced facial structure.
<br></br><b>✔ Minimal Downtime</b> Enjoy quick recovery with slight redness or swelling that resolves within hours to a day.



<h3>Who Can Benefit from Fillers?</h3>
<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
Dermal fillers are ideal for anyone looking to:
<li>Restore a youthful appearance without surgery.</li>
<li>Enhance facial features like lips, cheeks, or jawline.</li>
<li>Smooth wrinkles and fine lines.</li>
<li>Address signs of aging or maintain a youthful look.</li>
Fillers work for all age groups—whether you’re in your 30s aiming to prevent signs of aging or in your 50s+ seeking to restore volume and smooth wrinkles.
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
        Let’s Explore More!
      </button>
      <br></br>


    </div>
);
}

function Sermorelin() {
  return (

    
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#AEC6CF", fontFamily: "Arial, sans-serif" }}>
       <img
        src="/Sermorelin.jpg" 
        alt="Sermorelin "
        style={{
          width: "100%", 
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ color: "white" }}>Reignite Your Energy & Vitality with Sermorelin</h1>
      <h1>Unlock Your Potential with Growth Hormone Therapy
        </h1>
        Are you feeling tired, struggling to maintain muscle tone, or noticing a slower recovery from workout
        <br></br>or daily activities? These changes may be due to the natural decline in growth hormone (GH) levels as we age. 
        <br></br>Sermorelin therapy can help restore your balance, boost your energy, and rejuvenate your health.


      <h3>What Is Sermorelin?</h3>
      Sermorelin is a peptide therapy that works with your body’s natural processes to stimulate the pituitary gland,
      <br></br>increasing the production of growth hormone. Unlike synthetic GH injections, Sermorelin enhances your energy, muscle growth
      <br></br>and fat loss safely and naturally. This non-invasive treatment is designed to help you feel younger, 
      <br></br>more energized, and ready to take on life’s challenges.



      <h3>Why Consider Sermorelin?</h3>
      Sermorelin offers a wide range of benefits that can help you regain vitality and improve overall well-being.
      <br></br><b>Key Benefits</b>
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Boosts Energy and Vitality </b>- Restore youthful energy and motivation by naturally increasing growth hormone levels.</li>
        <li><b>Supports Muscle Growth & Fat Loss </b>- Build lean muscle and reduce stubborn fat for a more toned physique.</li>
        <li><b>Improves Recovery Time </b>- Speed up recovery after workouts, reduce muscle soreness, and enhance performance.</li>
        <li><b>Enhances Sleep Quality </b>- Enjoy deeper, more restorative sleep, leaving you refreshed and focused.</li>
        <li><b>Promotes Healthy Aging </b>- Improve skin elasticity, joint health, and overall vitality to age gracefully.</li>
        <li><b>Safe and Natural </b>- Stimulates your body’s natural GH production, avoiding the risks of synthetic treatments.</li>
      </ul>



      <h3>Additional Benefits</h3>
    
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li>Improved immune function</li>
        <li>Increased libido</li>
        <li>Healthier, more youthful-looking skin</li>
      </ul>

<h3>What to Expect with Sermorelin Therapy</h3>
Sermorelin provides noticeable improvements within weeks of use:


<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Week 1:</b>Better sleep quality</li>
        <li><b>Week 2:</b>Faster recovery from workouts</li>
        <li><b>Week 4:</b> Enhanced mental clarity</li>
        <li><b>Week 6:</b>Improved skin elasticity</li>
        <li><b>Week 8:</b>Noticeable changes in body composition</li>
          </ul>




      <h3>Is Sermorelin Right for You?</h3>
      Sermorelin is ideal for individuals seeking to:
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li>Regain energy and vitality </li>
        <li>Need an energy boost to stay active and motivated.</li>
        <li>Slow down the effects of aging</li>
        <li>Support overall wellness</li>
        If you’re feeling like your body isn’t functioning at its best, Sermorelin may be the key to unlocking a healthier, more vibrant version of yourself.
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
        Let’s Explore More!
      </button>

    </div>
);
}




function ErectileDysfunction() {
  return (

    
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#AEC6CF", fontFamily: "Arial, sans-serif" }}>
       <img
        src="/ED.jpg" 
        alt="Erectile Dysfunction "
        style={{
          width: "100%", 
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ color: "white" }}>
      Regain Confidence and Vitality with Our ED Treatment Solutions</h1>
      <h1>Take Control of Your Sexual Health Today
        </h1>
        Erectile dysfunction (ED) is a common concern that affects millions of men, but it’s not something you
        <br></br>have to live with. If you’re struggling with ED, know that effective, non-invasive treatments are available to help
        <br></br>you regain your confidence, vitality, and intimacy.

      <h3>What is Erectile Dysfunction?</h3>
      ED is the inability to achieve or maintain an erection sufficient for sexual activity. It can be caused by various factors, including:      <br></br>increasing the production of growth hormone. Unlike synthetic GH injections, Sermorelin enhances your energy, muscle growth
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li>Age</li>
        <li>Stress</li>
        <li>Hormonal imbalances </li>
        <li>Relationship issues</li>
        <li>Underlying medical conditions like cardiovascular disease or diabetes</li>
        While ED is a natural part of aging for some, it can also signal serious health issues. Fortunately, ED is treatable, and you don’t have to suffer in silence.
      </ul>



      <h3>Benefits of ED Treatment</h3>
      
        <br></br><b>✔ Boosts Energy and Vitality </b>- Restore youthful energy and motivation by naturally increasing growth hormone levels.
        <br></br><b>✔ Improved Sexual Performance </b>- Achieve and maintain stronger, longer-lasting erections, boosting your confidence and performance.
        <br></br><b>✔ Enhanced Relationship Satisfaction </b>- Overcoming ED can restore intimacy and deepen your connection with your partner.
        <br></br><b>✔ Renewed Energy & Vitality </b>- Successful ED treatment can help you feel more energetic and confident in all areas of life.
        <br></br><b>✔ Customized Care </b>- Our team tailors treatment plans to your unique needs and lifestyle, ensuring the best possible results.
    



      <h3>How We Treat Erectile Dysfunction</h3>
      We offer a variety of advanced, effective solutions for ED, including:
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>P-Shot® (Priapus Shot)</b> - A non-surgical procedure that uses your own blood platelets to stimulate tissue growth and improve blood flow to the penis, enhancing erectile function.</li>
        <li><b>Shockwave Therapy</b> - Low-intensity shockwave therapy is a non-invasive treatment that stimulates blood flow, improves erectile function, and promotes long-term results.</li>
        <li><b>Hormone Therapy</b> - If low testosterone is contributing to your ED, our hormone replacement therapy can restore balance and boost libido and performance.</li>
        <li><b>Prescription Medications</b> - Medications like sildenafil (Viagra) or tadalafil (Cialis) can be prescribed to help you achieve and maintain erections.</li>
      </ul>

<h3>Why Choose Our Clinic?</h3>
We understand that ED can be a sensitive and frustrating issue. Seeking treatment is the first step toward reclaiming your confidence and sexual health. At our clinic, we provide:


<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Discreet, Compassionate Care </b> - Your privacy and comfort are our top priorities.</li>
        <li><b>Personalized Treatment Plans</b> - Every man’s situation is unique, and our team will create a plan tailored to your needs.</li>
        <li><b>Advanced Medical Technology</b> - We use the latest treatments to ensure effective, long-lasting results.</li>
       
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
        Let’s Explore More!
      </button>

    </div>
);
}

function SexualCream() {
  return (

    
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#AEC6CF", fontFamily: "Arial, sans-serif" }}>
       <img
        src="/scream.jpg" 
        alt="Sexual Cream "
        style={{
          width: "100%", 
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ color: "white" }}>
      Enhance Your Sexual Health and Pleasure with Our Specially Formulated Sexual Cream</h1>
      <h1>Reignite Desire, Boost Intimacy, and Experience More Pleasure
        </h1>
        As women age or go through life changes, it’s common to experience reduced sexual drive, discomfort during intimacy,        <br></br>have to live with. If you’re struggling with ED, know that effective, non-invasive treatments are available to help
        <br></br>or a loss of sensation. Our Sexual Cream is designed to address these concerns, helping you rediscover intimacy, enhance
        <br></br>sexual pleasure, and reconnect with your partner.

      <h3>What is Sexual Cream?</h3>
      Our Sexual Cream is a topical solution specially crafted to heighten female sexual pleasure. This unique blend of ingredients works to:      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li>Increase blood flow</li>
        <li>Enhance sensation</li>
        <li>Boost sexual desire </li>
        Whether you want to improve intimacy, experience heightened orgasms, or reconnect with your partner, our cream is here to help.
      </ul>



      <h3>How Does It Work?</h3>
      Our cream combines potent ingredients that target various aspects of sexual health:
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Testosterone:</b> Improves sexual function, increases libido, and supports vitality.</li>
        <li><b>L-Arginine: </b> Boosts blood flow to the genital area, enhancing arousal and sensitivity. </li>
        <li><b>Pentoxifylline:</b> Enhances circulation for better lubrication and increased pleasure.</li>
        <li><b>Sildenafil:</b>  Improves clitoral blood flow, intensifying stimulation and orgasms.</li>
        <li><b>Niacin (Vitamin B3):</b> Supports blood flow to genitalia for easier arousal and satisfaction.</li>
        <li><b>Oxytocin:</b> Strengthens emotional bonding and sexual receptiveness.</li>
        Each cream is customized with a specific blend tailored to your needs for maximum effectiveness.


      </ul>
    

      <h3>Benefits of Our Sexual Cream</h3>
      <br></br><b>✔ Increase Libido </b>- Rediscover your sexual desire and enjoy a more fulfilling intimate life.
        <br></br><b>✔ Improve Sexual Receptiveness </b>- Experience enhanced stimulation and responsiveness for more enjoyable intimacy.
        <br></br><b>✔ Increase Vaginal Blood Flow </b>- Improved circulation ensures heightened sensation and easier arousal.
        <br></br><b>✔ Enhance Bonding and Intimacy </b>- Strengthen emotional connections with your partner through oxytocin’s effects.
        <br></br><b>✔ Intensify Orgasms </b>- Enjoy stronger, more satisfying orgasms with enhanced sensitivity.


<h3>Why Choose Our Clinic?</h3>

<ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Tailored Solutions: </b> Customized blends to meet your specific needs and goals.</li>
        <li><b>Safe and Effective:</b> Formulated with proven, clinically supported ingredients.</li>
        <li><b>Confidential Care</b> Compassionate and discreet support for your sexual wellness journey.</li>
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
        Let’s Explore More!
      </button>

    </div>
);
}

function B12Injections() {
  return (

    
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#AEC6CF", fontFamily: "Arial, sans-serif" }}>
       <img
        src="/b12.jpg" 
        alt="B12 Injections "
        style={{
          width: "100%", 
          height: "auto", 
          maxWidth: "800px", 
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ color: "white" }}>
      Reclaim Your Energy and Vitality with B12 Injections</h1>
      <h1>Boost Your Energy, Focus, and Well-Being
        </h1>
        Do you often feel tired, mentally drained, or unable to focus? You’re not alone. Many people unknowingly suffer        
        <br></br>from a B12 deficiency, which can leave you feeling sluggish and mentally foggy. Vitamin B12 is essential for
        <br></br>red blood cell production, nerve function, and metabolism, but factors like poor diet, age, and certain medications can deplete your levels.
        <br></br>
        <br></br>Our B12 injections provide a fast, effective way to restore balance, delivering the vitamin directly into your bloodstream for
        <br></br>maximum absorption and immediate results.

      <h3>Key Benefits of B12 Injections</h3>
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Increased Energy</b> - Say goodbye to fatigue! B12 injections give you the boost you need to power through your day, whether you’re managing work, family, or personal goals.</li>
        <li><b>Enhanced Mental Focus & Clarity </b> - Improve concentration, mental sharpness, and memory with regular B12 injections, ensuring you stay at your best. </li>
        <li><b>Mood Boost</b> - Support serotonin production, the “feel-good” hormone, to improve emotional well-being and reduce stress levels.</li>
        <li><b>Improved Immune Function:</b>  - Strengthen your immune system, helping your body fight off illnesses and infections more effectively.</li>
        <li><b>Supports Healthy Metabolism</b> - Convert food into energy more efficiently, making it easier to maintain a healthy weight and stay energized.</li>

      </ul>



      <h3>Who Should Consider B12 Injections?</h3>
      Our cream combines potent ingredients that target various aspects of sexual health:
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Busy Professionals:</b> If your demanding lifestyle leaves you feeling drained, a B12 boost can keep you sharp and energized.</li>
        <li><b>Athletes & Fitness Enthusiasts: </b> Enhance performance, support recovery, and maintain energy levels during intense training. </li>
        <li><b>Anyone Feeling Sluggish:</b> If you’re dealing with brain fog or low energy, B12 injections can help you feel like yourself again.</li>
        <li><b>People with B12 Deficiency</b> Ideal for individuals with medical conditions, specific diets (like vegan or vegetarian), or medications that lower B12 levels.</li>

      </ul>
    

      <h3>Benefits of Our Sexual Cream</h3>
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingLeft: "0" }}>
        <li><b>Personalized Care:</b> Our team provides tailored treatments based on your unique needs and health goals.</li>
        <li><b>Fast, Effective Results: </b> Unlike oral supplements, injections deliver B12 directly into your bloodstream for maximum absorption.</li>
        <li><b>Comfortable Environment:</b> Our clinic offers a supportive, relaxing space for your treatments.</li>
        Whether you’re looking to boost energy, sharpen focus, or improve overall health, our B12 injections provide a simple and effective solution to help you feel your best.

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
        Let’s Explore More!
      </button>

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

      <p>With a dedication to advancing health and wellness, Lexi is deeply committed to helping. 
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
        
        <br></br>Passionate about both wellness and aesthetics, Lexi takes a holistic approach to care. Whether 
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
            <option value="Testosterone">Testosterone</option>
            <option value="Amino Injection">Amino Injections</option>
            <option value="Fillers">Fillers</option>
            <option value="Sermorelin">Sermorelin</option>
            <option value="Erectile Dysfunction">Erectile Dysfunction</option>
            <option value="Sexual Cream">Sexual Cream</option>
            <option value="B12 Injections">B12 Injections</option>
            <option value="Consultation">Consultation</option>
            


            
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#78A2CC",
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
             <Route path="services/amino-injections" element ={<AminoInjections />} />
             <Route path="services/fillers" element ={<Fillers />} />
             <Route path="services/sermorelin" element ={<Sermorelin />} />
             <Route path="services/erectile-dysfunction" element ={<ErectileDysfunction />} />
             <Route path="services/sexual-cream" element ={<SexualCream />} />
             <Route path="services/b12-injections" element ={<B12Injections />} />
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
