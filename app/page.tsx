'use client';

import { useState } from 'react';
import DiscoverView from '@/components/DiscoverView';
import FavoritesView from '@/components/FavoritesView';
import OrdersView from '@/components/OrdersView';
import ProfileView from '@/components/ProfileView';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  const [activeView, setActiveView] = useState('discover');

  return (
    <main className="min-h-screen bg-background pb-20">
      {activeView === 'discover' && <DiscoverView />}
      {activeView === 'favorites' && <FavoritesView />}
      {activeView === 'orders' && <OrdersView />}
      {activeView === 'profile' && <ProfileView />}

      <BottomNav activeView={activeView} onViewChange={setActiveView} />
    </main>
  );
}
