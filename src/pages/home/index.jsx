import { useState, useEffect } from "preact/hooks";

export function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const items = [
    { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Modern Living Room", caption: "Modern Living Room" },
    { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cozy Bedroom", caption: "Cozy Bedroom" },
    { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Stylish Kitchen", caption: "Stylish Kitchen" },
  ];

  const changeSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
  };

  const nextSlide = () => {
    changeSlide((activeIndex + 1) % items.length);
  };

  const prevSlide = () => {
    changeSlide((activeIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="container mt-5">
        <h1 className="text-center mb-5">Welcome to our Home</h1>
      <div id="mainCarousel" className="carousel slide" style={{ width: '1300px', height: '650px', margin: '0 auto', position: 'relative', backgroundColor: '#f0f0f0' }}>
        <div className="carousel-inner" style={{ width: '100%', height: '100%' }}>
          {items.map((item, index) => (
            <div 
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`} 
              key={index}
              style={{ 
                width: '100%', 
                height: '100%', 
                position: 'absolute',
                transition: 'opacity 0.5s ease-in-out',
                opacity: index === activeIndex ? 1 : 0,
              }}
            >
              <img 
                src={item.src} 
                alt={item.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>
        <button onClick={prevSlide} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#333', fontSize: '24px' }}>
          &lt;
        </button>
        <button onClick={nextSlide} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#333', fontSize: '24px' }}>
          &gt;
        </button>
        <div style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: '10px', color: 'white' }}>
          <h3>{items[activeIndex].caption}</h3>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            {items.map((_, index) => (
              <div 
                key={index} 
                onClick={() => changeSlide(index)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === activeIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  margin: '0 5px',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;