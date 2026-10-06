import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';

// svg placeholders for now, swap in real photos later
const plantImage = (leaf, pot) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
      <rect width='120' height='120' fill='#222d28'/>
      <path d='M60 80 C38 72 32 46 48 26 C64 38 70 60 60 80Z' fill='${leaf}'/>
      <path d='M60 80 C82 74 92 52 80 32 C64 42 56 62 60 80Z' fill='${leaf}' opacity='.75'/>
      <path d='M42 82h36l-4 26H46z' fill='${pot}'/>
    </svg>`
  )}`;

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: 15, image: plantImage('#3F7D4E', '#B5654A') },
      { name: 'Spider Plant', cost: 12, image: plantImage('#6BAA5B', '#C98B5E') },
      { name: 'Peace Lily', cost: 18, image: plantImage('#2F6B45', '#8F5B8A') },
      { name: 'Boston Fern', cost: 20, image: plantImage('#4F9A5A', '#A8714F') },
      { name: 'Rubber Plant', cost: 17, image: plantImage('#2B5E3C', '#C2563F') },
      { name: 'ZZ Plant', cost: 25, image: plantImage('#3A8250', '#7A8FA3') },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', cost: 14, image: plantImage('#8A7FB8', '#C98B5E') },
      { name: 'Jasmine', cost: 22, image: plantImage('#4E8F5C', '#E0B15A') },
      { name: 'Rosemary', cost: 11, image: plantImage('#5E8C61', '#B5654A') },
      { name: 'Mint', cost: 9, image: plantImage('#6FBF73', '#7A8FA3') },
      { name: 'Lemon Balm', cost: 10, image: plantImage('#9CC24F', '#C2563F') },
      { name: 'Basil', cost: 8, image: plantImage('#4C9B4A', '#A8714F') },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'Aloe Vera', cost: 13, image: plantImage('#5FA67A', '#C98B5E') },
      { name: 'Jade Plant', cost: 16, image: plantImage('#3F8F5A', '#8F5B8A') },
      { name: 'Echeveria', cost: 12, image: plantImage('#7FB5A0', '#B5654A') },
      { name: 'Haworthia', cost: 14, image: plantImage('#3B7A55', '#E0B15A') },
      { name: 'Pothos', cost: 10, image: plantImage('#4DA35F', '#7A8FA3') },
      { name: 'Cast Iron Plant', cost: 19, image: plantImage('#245C3A', '#C2563F') },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const alreadyAdded = (name) => cartItems.some((item) => item.name === name);

  const addToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="page">
      <Navbar current="plants" onNavigate={onNavigate} />

      <main className="product-list">
        {plantCategories.map((cat) => (
          <section key={cat.category} className="category">
            <h2 className="category-title">{cat.category}</h2>
            <div className="product-grid">
              {cat.plants.map((plant) => {
                const added = alreadyAdded(plant.name);
                return (
                  <div className="product-card" key={plant.name}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-price">${plant.cost}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(plant)}
                      disabled={added}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
