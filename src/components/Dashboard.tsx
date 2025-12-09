import { useState } from 'react';
import { Home, Map, Phone, Settings, Shield } from 'lucide-react';
import { HomePage } from './dashboard/HomePage';
import { MapView } from './dashboard/MapView';
import { EmergencyContacts } from './dashboard/EmergencyContacts';
import { SettingsPage } from './dashboard/SettingsPage';

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'map' | 'contacts' | 'settings'>('home');

  const tabs = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'map' as const, icon: Map, label: 'Map' },
    { id: 'contacts' as const, icon: Phone, label: 'Contacts' },
    { id: 'settings' as const, icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Header */}
      <header className="glassmorphism-strong border-b border-white/10 px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Shield className="w-6 h-6 text-[#00D9FF] neon-glow-cyan" />
            </div>
            <span className="text-white">
              Suraksha<span className="text-gradient-cyan">Ride</span>
              <span className="text-[#FF006E]">Plus</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'map' && <MapView />}
        {activeTab === 'contacts' && <EmergencyContacts />}
        {activeTab === 'settings' && <SettingsPage onLogout={onLogout} />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glassmorphism-strong border-t border-white/10 px-4 py-2 z-50">
        <div className="flex justify-around items-center max-w-7xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-[#00D9FF] neon-glow-cyan' 
                    : 'text-[#E0E0E0]/60 hover:text-[#E0E0E0]'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
