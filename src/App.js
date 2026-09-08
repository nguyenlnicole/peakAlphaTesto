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
          <Route path="/payment" element={<Payment />} />

          <Route
            path="/services/phosphatidylcholine-deoxycholate-injections"
            element={<PhosphatidylcholineDeoxycholateInjections />}
          />

          <Route
            path="/services/lipotropic-injection"
            element={<LipotropicInjection />}
          />

          <Route
            path="/services/beautiTOX"
            element={<BeautiTOX />}
          />

          <Route
            path="/services/fillers"
            element={<Fillers />}
          />

          <Route
            path="/services/b12-injections"
            element={<B12Injections />}
          />

          <Route
            path="/services/laser-hair-removal"
            element={<LaserHairRemoval />}
          />

          <Route
            path="/services/skin-rejuvenation"
            element={<SkinRejuvenation />}
          />
        </Routes>

        <footer>
          <p>(210)-920-0253</p>
          <p>4071 Medical Dr, San Antonio, TX 78229, United States</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
