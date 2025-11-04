export default function ProfileView() {
  const stats = [
    { label: 'Orders', value: '42', icon: '📦' },
    { label: 'Reviews', value: '28', icon: '⭐' },
    { label: 'Points', value: '1,240', icon: '🎯' },
  ];

  const menuItems = [
    { icon: '👤', label: 'Edit Profile', badge: null },
    { icon: '📍', label: 'Addresses', badge: '3' },
    { icon: '💳', label: 'Payment Methods', badge: '2' },
    { icon: '🎫', label: 'Promotions', badge: 'New' },
    { icon: '🔔', label: 'Notifications', badge: null },
    { icon: '❓', label: 'Help & Support', badge: null },
    { icon: '⚙️', label: 'Settings', badge: null },
  ];

  return (
    <div className="min-h-screen">
      {/* Header with Profile */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 safe-padding">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-3xl text-white shadow-soft-md">
            👤
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-display font-bold text-secondary mb-1">
              Alex Johnson
            </h1>
            <p className="text-sm text-neutral-600">alex.johnson@email.com</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface rounded-xl p-4 shadow-soft text-center"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-secondary mb-0.5">{stat.value}</div>
              <div className="text-xs text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Membership Card */}
      <div className="safe-padding mb-6">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 shadow-soft-lg text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">Membership</p>
              <h3 className="text-2xl font-display font-bold">Gold Member</h3>
            </div>
            <div className="text-3xl">✨</div>
          </div>
          <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs opacity-90 mb-1">Points Balance</p>
                <p className="text-xl font-bold">1,240 pts</p>
              </div>
              <button className="px-4 py-2 bg-white text-primary text-sm font-medium rounded-lg hover:bg-white/90 transition-colors touch-target">
                Redeem
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="safe-padding mb-6">
        <h2 className="text-lg font-display font-semibold text-secondary mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-surface border border-neutral-200 p-4 rounded-xl shadow-soft hover:shadow-soft-md transition-all text-left touch-target">
            <span className="text-3xl mb-2 block">🎁</span>
            <span className="text-sm font-medium text-secondary">Rewards</span>
          </button>
          <button className="bg-surface border border-neutral-200 p-4 rounded-xl shadow-soft hover:shadow-soft-md transition-all text-left touch-target">
            <span className="text-3xl mb-2 block">📜</span>
            <span className="text-sm font-medium text-secondary">Order History</span>
          </button>
          <button className="bg-surface border border-neutral-200 p-4 rounded-xl shadow-soft hover:shadow-soft-md transition-all text-left touch-target">
            <span className="text-3xl mb-2 block">🏷️</span>
            <span className="text-sm font-medium text-secondary">Vouchers</span>
          </button>
          <button className="bg-surface border border-neutral-200 p-4 rounded-xl shadow-soft hover:shadow-soft-md transition-all text-left touch-target">
            <span className="text-3xl mb-2 block">👥</span>
            <span className="text-sm font-medium text-secondary">Invite Friends</span>
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="safe-padding mb-8">
        <div className="bg-surface rounded-xl shadow-soft overflow-hidden divide-y divide-neutral-100">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-4 p-4 hover:bg-neutral-50 transition-colors text-left touch-target"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="flex-1 text-base font-medium text-secondary">{item.label}</span>
              {item.badge && (
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                  {item.badge}
                </span>
              )}
              <span className="text-neutral-400 text-xl">›</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sign Out */}
      <div className="safe-padding mb-8">
        <button className="w-full py-3.5 border-2 border-neutral-200 text-neutral-600 font-medium rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all touch-target">
          Sign Out
        </button>
      </div>

      {/* Version Info */}
      <div className="safe-padding pb-8 text-center">
        <p className="text-xs text-neutral-400">Version 1.0.0</p>
      </div>
    </div>
  );
}
