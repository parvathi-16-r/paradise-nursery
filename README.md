# Paradise Nursery

**Project name:** Paradise Nursery
**Type:** Online plant shop – shopping cart application
**Built with:** React, Redux Toolkit, Vite

Paradise Nursery lets customers browse houseplants by category, add them to a
shopping cart, and manage the cart (change quantities, remove items, see totals).

## Features
- Landing page with company details and a "Get Started" button
- Product listing with 3 categories and 6 plants each (thumbnail, name, price)
- "Add to Cart" buttons that disable once a plant is added
- Navbar with Home, Plants and Cart links, plus a live cart item count
- Cart page with per-plant and overall totals, quantity +/- buttons, delete,
  a "Coming Soon" checkout button and a "Continue Shopping" button

## Run locally
```bash
npm install
npm run dev
```

## Project structure
```
src/
  main.jsx       – app entry, Redux Provider
  store.js       – Redux store
  CartSlice.jsx  – cart slice (addItem, removeItem, updateQuantity)
  App.jsx        – landing page + simple view switching
  AboutUs.jsx    – company details
  Navbar.jsx     – shared navbar with cart count
  ProductList.jsx– product listing page
  CartItem.jsx   – shopping cart page
  App.css        – styles (incl. landing background image)
```
