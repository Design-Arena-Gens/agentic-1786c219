'use client';

import { useState } from 'react';

export default function DiscoverView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', emoji: '🍽️' },
    { id: 'restaurants', label: 'Restaurants', emoji: '🍴' },
    { id: 'cafes', label: 'Cafés', emoji: '☕' },
    { id: 'bakery', label: 'Bakery', emoji: '🥐' },
    { id: 'desserts', label: 'Desserts', emoji: '🍰' },
  ];

  const featuredPlaces = [
    { id: 1, name: 'Ocean View Bistro', category: 'Fine Dining', rating: 4.8, price: '$$$', image: '🌊', cuisine: 'Seafood', time: '25-35 min' },
    { id: 2, name: 'The Garden Café', category: 'Café', rating: 4.6, price: '$$', image: '🌿', cuisine: 'Organic', time: '15-25 min' },
    { id: 3, name: 'Spice Route', category: 'Restaurant', rating: 4.9, price: '$$', image: '🌶️', cuisine: 'Indian', time: '30-40 min' },
    { id: 4, name: 'Sweet Dreams', category: 'Desserts', rating: 4.7, price: '$', image: '🍨', cuisine: 'Desserts', time: '10-20 min' },
  ];

  const trendingNow = [
    { id: 1, name: 'Artisan Pizza Co.', image: '🍕', rating: 4.8, orders: '500+' },
    { id: 2, name: 'Sushi Master', image: '🍣', rating: 4.9, orders: '800+' },
    { id: 3, name: 'Burger House', image: '🍔', rating: 4.7, orders: '1200+' },
    { id: 4, name: 'Green Bowl', image: '🥗', rating: 4.6, orders: '400+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 safe-padding">
        <h1 className="text-3xl font-display font-bold text-secondary mb-2">
          Discover
        </h1>
        <p className="text-neutral-600">Find your next food experience</p>
      </div>

      {/* Search */}
      <div className="safe-padding mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search restaurants, cuisines..."
            className="w-full pl-12 pr-4 py-3.5 bg-surface rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-soft"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="safe-padding mb-4">
          <h2 className="text-lg font-display font-semibold text-secondary">Categories</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex flex-col items-center gap-2 px-5 py-3 rounded-xl transition-all flex-shrink-0 touch-target ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white shadow-soft-md'
                  : 'bg-surface text-neutral-700 border border-neutral-200'
              }`}
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-sm font-medium whitespace-nowrap">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="mb-8">
        <div className="safe-padding mb-4 flex justify-between items-center">
          <h2 className="text-lg font-display font-semibold text-secondary">Trending Now</h2>
          <button className="text-sm text-primary font-medium">See all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {trendingNow.map((place) => (
            <button
              key={place.id}
              className="flex-shrink-0 w-36 bg-surface rounded-xl p-3 shadow-soft border border-neutral-100 hover:shadow-soft-md transition-all"
            >
              <div className="text-5xl mb-2">{place.image}</div>
              <h3 className="font-medium text-sm text-secondary mb-1 line-clamp-1">{place.name}</h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-600">⭐ {place.rating}</span>
                <span className="text-neutral-500">{place.orders}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Places */}
      <div className="mb-8">
        <div className="safe-padding mb-4">
          <h2 className="text-lg font-display font-semibold text-secondary">Featured Places</h2>
        </div>
        <div className="safe-padding space-y-4">
          {featuredPlaces.map((place) => (
            <button
              key={place.id}
              className="w-full bg-surface rounded-xl p-4 shadow-soft border border-neutral-100 hover:shadow-soft-md transition-all text-left"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-4xl">
                  {place.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-display font-semibold text-base text-secondary line-clamp-1">
                      {place.name}
                    </h3>
                    <span className="flex-shrink-0 ml-2 px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-md">
                      {place.price}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 mb-2">{place.cuisine} • {place.category}</p>
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      ⭐ <span className="font-medium text-secondary">{place.rating}</span>
                    </span>
                    <span>•</span>
                    <span>🕐 {place.time}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="safe-padding mb-8">
        <h2 className="text-lg font-display font-semibold text-secondary mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-br from-primary to-primary/80 text-white p-5 rounded-xl shadow-soft-md hover:shadow-soft-lg transition-all touch-target">
            <span className="text-3xl mb-2 block">📍</span>
            <span className="text-sm font-medium">Near Me</span>
          </button>
          <button className="bg-surface border border-neutral-200 p-5 rounded-xl shadow-soft hover:shadow-soft-md transition-all touch-target">
            <span className="text-3xl mb-2 block">🎫</span>
            <span className="text-sm font-medium text-secondary">Reservations</span>
          </button>
          <button className="bg-surface border border-neutral-200 p-5 rounded-xl shadow-soft hover:shadow-soft-md transition-all touch-target">
            <span className="text-3xl mb-2 block">⚡</span>
            <span className="text-sm font-medium text-secondary">Fast Delivery</span>
          </button>
          <button className="bg-surface border border-neutral-200 p-5 rounded-xl shadow-soft hover:shadow-soft-md transition-all touch-target">
            <span className="text-3xl mb-2 block">🌟</span>
            <span className="text-sm font-medium text-secondary">Top Rated</span>
          </button>
        </div>
      </div>
    </div>
  );
}
