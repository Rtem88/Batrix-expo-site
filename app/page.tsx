const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-EQrD2WlEnPNBtEEw7DpHW3obfBNK68.jpg',
  crates: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crates-DY3SWfHAyRsp6OS2wRlkhUZQ3stuHf.jpg',
  pallets: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pallets-bVC37uvnj0PshCas3DTenezMFOwCIF.jpg',
  plywood: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plywood-riIgiKLEyetKLLnRsboqEY8t6AEDSW.jpg',
  special: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/special-crates-mqvBh24AxwS3F8vuV9sxxCGi2hB3JR.jpg',
  timber: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/timber-Fhy7zEKLp2RL10AKZvywIWxZBx7ReZ.jpg',
}

const products = [
  { title: 'Wooden pallets', text: 'Reliable platforms for storage, transport and export logistics.', image: images.pallets },
  { title: 'Export crates', text: 'Protective packaging engineered around your cargo and route.', image: images.crates },
  { title: 'Plywood packaging', text: 'Strong layered boards for smart, lightweight protection.', image: images.plywood },
]

export default function Home() {
  return <main>
    <header className="site-header container">
      <a className="logo" href="#top"><span className="logo-mark">B</span><span>BATRIX</span></a>
      <nav className="nav" aria-label="Main navigation"><a href="#products">Products</a><a href="#about">About us</a><a href="#process">Process</a><a href="#contact">Contact</a></nav>
      <a className="header-cta" href="#contact">Request a quote <span>↗</span></a>
    </header>

    <section className="hero container" id="top">
      <img className="hero-image" src={images.hero} alt="Wooden pallets and crates in a bright workshop" />
      <div className="hero-overlay" />
      <div className="hero-content"><p className="kicker">WOODEN PACKAGING / SINCE 2008</p><h1>Built for<br /><em>the journey.</em></h1><p className="hero-copy">Pallets, crates and custom packaging for cargo that has places to go.</p><a className="button light" href="#products">Explore our products <span>↓</span></a></div>
      <div className="hero-note">01 <span /> 04</div>
    </section>

    <section className="intro container" id="about"><div className="section-label">01 / WHY BATRIX</div><div><h2>Packaging that works<br /><em>as hard as you do.</em></h2><p>We make dependable wooden packaging for manufacturers, exporters and logistics teams. Every piece is measured, built and checked for the real conditions of the journey ahead.</p><a className="text-link" href="#contact">More about Batrix <span>↗</span></a></div></section>

    <section className="products container" id="products"><div className="section-top"><div><div className="section-label">02 / WHAT WE MAKE</div><h2>Simple materials.<br /><em>Serious performance.</em></h2></div><p>From a standard pallet to a one-off export case, we build the format your cargo actually needs.</p></div><div className="product-grid">{products.map((product, index) => <article className="product-card" key={product.title}><div className="product-image"><img src={product.image} alt={product.title} /><span className="product-number">0{index + 1}</span></div><div className="product-info"><h3>{product.title}</h3><p>{product.text}</p><a href="#contact" aria-label={`Learn more about ${product.title}`}>↗</a></div></article>)}</div></section>

    <section className="feature container"><img src={images.special} alt="Custom timber crate with metal handles" /><div className="feature-copy"><div className="section-label">03 / MADE TO SPEC</div><h2>Nothing off<br /><em>the shelf.</em></h2><p>Dimensions, loading points, handling and destination — we design around the details that matter.</p><a className="button dark" href="#contact">Talk to our team <span>↗</span></a></div></section>

    <section className="process container" id="process"><div className="section-label">04 / HOW IT WORKS</div><h2>From brief to<br /><em>loading bay.</em></h2><div className="steps"><div><b>01</b><h3>Tell us what moves</h3><p>Share your dimensions, weight and destination.</p></div><div><b>02</b><h3>We engineer the fit</h3><p>Our team specifies the safest practical solution.</p></div><div><b>03</b><h3>Built and delivered</h3><p>We make it in our workshop and deliver on schedule.</p></div></div></section>

    <section className="contact container" id="contact"><div><div className="section-label">LET&apos;S TALK</div><h2>Ready to move<br /><em>something?</em></h2></div><div><p>Send us your dimensions and destination. We&apos;ll come back with a practical packaging proposal.</p><a className="button orange" href="mailto:hello@batrix.expo">hello@batrix.expo <span>↗</span></a></div></section>
    <footer className="footer container"><a className="logo" href="#top"><span className="logo-mark">B</span><span>BATRIX</span></a><span>© 2026 Batrix Expo</span><span>Wood packaging, made for your cargo.</span></footer>
  </main>
}
