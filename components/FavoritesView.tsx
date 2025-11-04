'use client';

import { useState } from 'react';

export default function FavoritesView() {
  const [activeTab, setActiveTab] = useState('places');

  const favoritePlaces = [
    { id: 1, name: 'Ocean View Bistro', category: 'Fine Dining', rating: 4.8, image: '🌊', visits: 12 },
    { id: 2, name: 'Spice Route', category: 'Indian', rating: 4.9, image: '🌶️', visits: 8 },
    { id: 3, name: 'The Garden Café', category: 'Café', rating: 4.6, image: '🌿', visits: 15 },
    { id: 4, name: 'Sushi Master', category: 'Japanese', rating: 4.9, image: '🍣', visits: 6 },
  ];

  const favoriteDishes = [
    { id: 1, name: 'Truffle Pasta', restaurant: 'Ocean View Bistro', price: '$24', image: '🍝', lastOrdered: '2 days ago' },
    { id: 2, name: 'Chicken Tikka Masala', restaurant: 'Spice Route', price: '$18', image: '🍛', lastOrdered: '1 week ago' },
    { id: 3, name: 'Matcha Latte', restaurant: 'The Garden Café', price: '$6', image: '🍵', lastOrdered: '3 days ago' },
    { id: 4, name: 'Dragon Roll', restaurant: 'Sushi Master', price: '$16', image: '🍱', lastOrdered: '5 days ago' },
  ];

  const savedCollections = [
    { id: 1, name: 'Date Night', count: 8, icon: '💕', color: 'from-pink-500/10 to-rose-500/10' },
    { id: 2, name: 'Quick Lunch', count: 12, icon: '⚡', color: 'from-yellow-500/10 to-orange-500/10' },
    { id: 3, name: 'Weekend Brunch', count: 6, icon: '🥂', color: 'from-purple-500/10 to-pink-500/10' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 safe-padding">
        <h1 className="text-3xl font-display font-bold text-secondary mb-2">
          Favorites
        </h1>
        <p className="text-neutral-600">Your saved places and dishes</p>
      </div>

      {/* Tabs */}
      <div className="safe-padding mb-6">
        <div className="bg-surface rounded-xl p-1 shadow-soft inline-flex">
          <button
            onClick={() => setActiveTab('places')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all touch-target ${
              activeTab === 'places'
                ? 'bg-primary text-white shadow-soft'
                : 'text-neutral-600'
            }`}
          >
            Places
          </button>
          <button
            onClick={() => setActiveTab('dishes')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all touch-target ${
              activeTab === 'dishes'
                ? 'bg-primary text-white shadow-soft'
                : 'text-neutral-600'
            }`}
          >
            Dishes
          </button>
          <button
            onClick={() => setActiveTab('collections')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all touch-target ${
              activeTab === 'collections'
                ? 'bg-primary text-white shadow-soft'
                : 'text-neutral-600'
            }`}
          >
            Collections
          </button>
        </div>
      </div>

      {/* Places Tab */}
      {activeTab === 'places' && (
        <div className="safe-padding space-y-4 mb-8">
          {favoritePlaces.map((place) => (
            <div
              key={place.id}
              className="bg-surface rounded-xl p-4 shadow-soft border border-neutral-100"
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
                    <button className="flex-shrink-0 ml-2 text-primary text-xl touch-target">
                      ❤️
                    </button>
                  </div>
                  <p className="text-sm text-neutral-600 mb-3">{place.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        ⭐ <span className="font-medium text-secondary">{place.rating}</span>
                      </span>
                      <span>•</span>
                      <span>{place.visits} visits</span>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors touch-target">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dishes Tab */}
      {activeTab === 'dishes' && (
        <div className="safe-padding space-y-4 mb-8">
          {favoriteDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-surface rounded-xl p-4 shadow-soft border border-neutral-100"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-4xl">
                  {dish.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-base text-secondary line-clamp-1 mb-0.5">
                        {dish.name}
                      </h3>
                      <p className="text-sm text-neutral-600">{dish.restaurant}</p>
                    </div>
                    <button className="flex-shrink-0 ml-2 text-primary text-xl touch-target">
                      ❤️
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-secondary">{dish.price}</span>
                      <span className="text-xs text-neutral-500">• {dish.lastOrdered}</span>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors touch-target">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Collections Tab */}
      {activeTab === 'collections' && (
        <div className="safe-padding mb-8">
          <button className="w-full mb-4 py-4 border-2 border-dashed border-neutral-300 rounded-xl text-neutral-600 hover:border-primary hover:text-primary transition-all touch-target">
            <span className="text-2xl block mb-1">➕</span>
            <span className="text-sm font-medium">Create New Collection</span>
          </button>

          <div className="space-y-3">
            {savedCollections.map((collection) => (
              <button
                key={collection.id}
                className="w-full bg-surface rounded-xl p-5 shadow-soft border border-neutral-100 hover:shadow-soft-md transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${collection.color} rounded-xl flex items-center justify-center text-3xl`}>
                    {collection.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-base text-secondary mb-1">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-neutral-600">{collection.count} places</p>
                  </div>
                  <span className="text-neutral-400 text-xl">›</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Empty State (conditionally shown) */}
      {activeTab === 'places' && favoritePlaces.length === 0 && (
        <div className="safe-padding py-16 text-center">
          <span className="text-6xl block mb-4">❤️</span>
          <h3 className="font-display font-semibold text-lg text-secondary mb-2">
            No favorites yet
          </h3>
          <p className="text-sm text-neutral-600 mb-6">
            Start exploring and save your favorite places
          </p>
          <button className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors touch-target">
            Discover Places
          </button>
        </div>
      )}
    </div>
  );
}
