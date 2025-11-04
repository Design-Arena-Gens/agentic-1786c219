'use client';

import { useState } from 'react';

export default function OrdersView() {
  const [activeTab, setActiveTab] = useState('active');

  const activeOrders = [
    {
      id: 1,
      restaurant: 'Ocean View Bistro',
      items: ['Truffle Pasta', 'Caesar Salad'],
      status: 'preparing',
      progress: 45,
      total: '$42.50',
      estimatedTime: '15-20 min',
      image: '🌊',
      orderNumber: '#2847'
    },
    {
      id: 2,
      restaurant: 'Sushi Master',
      items: ['Dragon Roll', 'Miso Soup'],
      status: 'on-the-way',
      progress: 75,
      total: '$28.00',
      estimatedTime: '5-10 min',
      image: '🍣',
      orderNumber: '#2846'
    },
  ];

  const pastOrders = [
    {
      id: 1,
      restaurant: 'Spice Route',
      items: ['Chicken Tikka Masala', 'Naan Bread'],
      date: '2 days ago',
      total: '$32.00',
      image: '🌶️',
      rating: null
    },
    {
      id: 2,
      restaurant: 'The Garden Café',
      items: ['Avocado Toast', 'Matcha Latte'],
      date: '5 days ago',
      total: '$18.50',
      image: '🌿',
      rating: 5
    },
    {
      id: 3,
      restaurant: 'Sweet Dreams',
      items: ['Chocolate Cake', 'Ice Cream'],
      date: '1 week ago',
      total: '$15.00',
      image: '🍨',
      rating: 4
    },
  ];

  const reservations = [
    {
      id: 1,
      restaurant: 'Ocean View Bistro',
      date: 'Tonight',
      time: '7:30 PM',
      guests: 4,
      status: 'confirmed',
      image: '🌊'
    },
    {
      id: 2,
      restaurant: 'Spice Route',
      date: 'Tomorrow',
      time: '8:00 PM',
      guests: 2,
      status: 'confirmed',
      image: '🌶️'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'on-the-way':
        return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'confirmed':
        return 'bg-green-500/10 text-green-700 border-green-500/20';
      default:
        return 'bg-neutral-100 text-neutral-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'Preparing';
      case 'on-the-way':
        return 'On the way';
      case 'confirmed':
        return 'Confirmed';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 safe-padding">
        <h1 className="text-3xl font-display font-bold text-secondary mb-2">
          Orders
        </h1>
        <p className="text-neutral-600">Track your orders and bookings</p>
      </div>

      {/* Tabs */}
      <div className="safe-padding mb-6">
        <div className="bg-surface rounded-xl p-1 shadow-soft inline-flex">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all touch-target ${
              activeTab === 'active'
                ? 'bg-primary text-white shadow-soft'
                : 'text-neutral-600'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all touch-target ${
              activeTab === 'past'
                ? 'bg-primary text-white shadow-soft'
                : 'text-neutral-600'
            }`}
          >
            Past
          </button>
          <button
            onClick={() => setActiveTab('reservations')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all touch-target ${
              activeTab === 'reservations'
                ? 'bg-primary text-white shadow-soft'
                : 'text-neutral-600'
            }`}
          >
            Reservations
          </button>
        </div>
      </div>

      {/* Active Orders */}
      {activeTab === 'active' && (
        <div className="safe-padding space-y-4 mb-8">
          {activeOrders.map((order) => (
            <div
              key={order.id}
              className="bg-surface rounded-xl p-5 shadow-soft-md border border-neutral-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-3xl">
                  {order.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-display font-semibold text-base text-secondary">
                        {order.restaurant}
                      </h3>
                      <p className="text-sm text-neutral-600">{order.orderNumber}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(order.status)}`}>
                      {getStatusLabel(order.status)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-neutral-700 mb-3">
                  {order.items.join(', ')}
                </p>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-neutral-600">Estimated arrival</span>
                    <span className="text-xs font-semibold text-secondary">{order.estimatedTime}</span>
                  </div>
                  <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                <span className="text-lg font-semibold text-secondary">{order.total}</span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-neutral-200 text-secondary text-sm font-medium rounded-lg hover:bg-neutral-50 transition-colors touch-target">
                    Contact
                  </button>
                  <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors touch-target">
                    Track
                  </button>
                </div>
              </div>
            </div>
          ))}

          {activeOrders.length === 0 && (
            <div className="py-16 text-center">
              <span className="text-6xl block mb-4">📦</span>
              <h3 className="font-display font-semibold text-lg text-secondary mb-2">
                No active orders
              </h3>
              <p className="text-sm text-neutral-600 mb-6">
                Your orders will appear here
              </p>
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors touch-target">
                Start Ordering
              </button>
            </div>
          )}
        </div>
      )}

      {/* Past Orders */}
      {activeTab === 'past' && (
        <div className="safe-padding space-y-4 mb-8">
          {pastOrders.map((order) => (
            <div
              key={order.id}
              className="bg-surface rounded-xl p-4 shadow-soft border border-neutral-100"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-xl flex items-center justify-center text-3xl">
                  {order.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-base text-secondary mb-0.5">
                        {order.restaurant}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-2">{order.items.join(', ')}</p>
                      <p className="text-xs text-neutral-500">{order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-base font-semibold text-secondary">{order.total}</span>
                    <div className="flex gap-2">
                      {!order.rating ? (
                        <button className="px-4 py-2 border border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary/5 transition-colors touch-target">
                          Rate
                        </button>
                      ) : (
                        <div className="flex items-center gap-1 px-3 py-2">
                          <span className="text-yellow-500">{'⭐'.repeat(order.rating)}</span>
                        </div>
                      )}
                      <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors touch-target">
                        Reorder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reservations */}
      {activeTab === 'reservations' && (
        <div className="safe-padding space-y-4 mb-8">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="bg-surface rounded-xl p-5 shadow-soft-md border border-neutral-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-3xl">
                  {reservation.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-display font-semibold text-base text-secondary mb-1">
                        {reservation.restaurant}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        {reservation.date} at {reservation.time}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(reservation.status)}`}>
                      {getStatusLabel(reservation.status)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-neutral-50 rounded-lg">
                <span className="text-lg">👥</span>
                <span className="text-sm text-neutral-700">
                  Table for {reservation.guests} {reservation.guests === 1 ? 'guest' : 'guests'}
                </span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2.5 border border-neutral-200 text-secondary text-sm font-medium rounded-lg hover:bg-neutral-50 transition-colors touch-target">
                  Modify
                </button>
                <button className="flex-1 py-2.5 border border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary/5 transition-colors touch-target">
                  Cancel
                </button>
                <button className="flex-1 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors touch-target">
                  Details
                </button>
              </div>
            </div>
          ))}

          <button className="w-full py-4 border-2 border-dashed border-neutral-300 rounded-xl text-neutral-600 hover:border-primary hover:text-primary transition-all touch-target">
            <span className="text-2xl block mb-1">📅</span>
            <span className="text-sm font-medium">Make a Reservation</span>
          </button>
        </div>
      )}
    </div>
  );
}
