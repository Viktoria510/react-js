import React from 'react';

const ProductList = () => {
  const products = [
    { 
      name: "Laptop", 
      price: 800, 
      img: "https://ecsmedia.pl/cdn-cgi/image/format=avif,width=270,height=270,/c/laptop-hp-14-cf2112wm-5t9t7ua-intel-n4120-4gb-emmc-64gb-intel-uhd-hd-win-11-rozowy-b-iext139454628.jpg" 
    },
    { 
      name: "Phone", 
      price: 500, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0iTgCJv58yi6oJfxYAewGnM9-WxlVfjGnjTVKSuMt8A&s=10" 
    },
    { 
      name: "Headphone", 
      price: 100, 
      img: "https://cdn.stls.store/cdn_thumbs_webp/500-500/gallery/55/c3/1260450.jpeg.webp" 
    },
    { 
      name: "Tablet", 
      price: 400, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcqg39lyfb4afb0y3zvjqk6JKehFP4FqtejGNnp8R6Q&s=10" 
    },
    { 
      name: "Watch", 
      price: 250, 
      img: "https://www.karkosik.pl/121282-home_default/zegarek-damski-nomination-composable-rozowysrebrny-076037014.jpg" 
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      <div style={{ display: 'flex', justifySelf: 'center', margin: '0 auto', gap: '10px', width: '100%', maxWidth: '400px' }}>
        <input 
          type="text" 
          placeholder="Search products..." 
          style={{ 
            flex: 1, 
            padding: '10px', 
            borderRadius: '4px', 
            border: '1px solid #ffb6c1', 
            outline: 'none' 
          }} 
        />
        <button style={{ backgroundColor: '#db7093', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Search
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <div key={index} style={{ backgroundColor: '#ffe4e1', padding: '20px', textAlign: 'center', width: '200px', borderRadius: '8px' }}>
            <h3>{product.name}</h3>
            
            <img 
              src={product.img} 
              alt={product.name} 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                display: 'block', 
                margin: '0 auto 15px',
                border: '3px solid white',
                borderRadius: '4px',
                backgroundColor: 'white'
              }} 
            />
            
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>${product.price}</p>
            <button style={{ backgroundColor: '#db7093', color: 'white', border: 'none', padding: '10px 16px', cursor: 'pointer', borderRadius: '4px', width: '100%', fontWeight: 'bold' }}>
              Buy now
            </button>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '20px', padding: '20px', backgroundColor: '#ffe4e1', borderRadius: '8px', border: '1px solid #ffb6c1', color: '#c71585', textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>Contacts</p>
        <p style={{ margin: '3px 0' }}> Phone: +1 234 567-890</p>
        <p style={{ margin: '3px 0' }}>Email: zemcovavika@pinkshop.com</p>
      </footer>

    </div>
  );
};

export default ProductList;