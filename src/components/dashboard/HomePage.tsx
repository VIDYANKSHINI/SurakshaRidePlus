import { useState } from 'react';
import { Car, Clock, MapPin, ChevronRight, Zap, Shield as ShieldIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { SOSButton } from './SOSButton';
import { TripTracking } from './TripTracking';
import { DriverVerification } from './DriverVerification';

export function HomePage() {
  const [activeTrip, setActiveTrip] = useState(false);
  const [showDriverVerification, setShowDriverVerification] = useState(false);

  const quickActions = [
    { icon: Car, label: 'Start Trip', gradient: 'gradient-cyan-purple', glow: 'neon-glow-cyan' },
    { icon: ShieldIcon, label: 'Safe Walk', gradient: 'bg-[#00E676]', glow: 'neon-glow-green' },
    { icon: MapPin, label: 'Find Safe Spot', gradient: 'gradient-pink-purple', glow: 'neon-glow-pink' },
  ];

  const recentAlerts = [
    { message: 'Safe zone nearby: Police Station 0.5km away', time: '5 min ago', color: 'border-l-[#00D9FF]' },
    { message: 'Your trip to Home was completed safely', time: '2 hours ago', color: 'border-l-[#00E676]' },
  ];

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-6">
        <h2 className="text-white mb-1">Welcome back, <span className="text-gradient-cyan">Priya</span></h2>
        <p className="text-[#E0E0E0]/70">Stay safe on your journey</p>
      </div>

      {/* SOS Button - Most Prominent */}
      <SOSButton />

      {/* Risk Level */}
      <Card className="glassmorphism p-4 mb-6 border border-[#00E676]/30 neon-glow-green">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#E0E0E0]/70 mb-2">Current Risk Level</p>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-[#00E676] text-[#0F1419] border-0">Low Risk</Badge>
              <span className="text-[#00E676]">Area is well-lit and safe</span>
            </div>
          </div>
          <div className="w-16 h-16 bg-[#00E676]/20 rounded-full flex items-center justify-center border border-[#00E676]/30">
            <ShieldIcon className="w-8 h-8 text-[#00E676]" />
          </div>
        </div>
      </Card>

      {/* Trip Tracking */}
      {activeTrip ? (
        <TripTracking onEndTrip={() => setActiveTrip(false)} />
      ) : (
        <Card className="glassmorphism p-6 mb-6 border border-white/10">
          <h3 className="text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (index === 0) {
                      setShowDriverVerification(true);
                    } else if (index === 1) {
                      setActiveTrip(true);
                    }
                  }}
                  className="flex flex-col items-center gap-3 p-4 glassmorphism rounded-xl hover:scale-105 transition-all duration-300 border border-white/10 hover:border-[#00D9FF]/50"
                >
                  <div className={`w-12 h-12 ${action.gradient} rounded-xl flex items-center justify-center ${action.glow}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[#E0E0E0]">{action.label}</span>
                </button>
              );
            })}
          </div>
        </Card>
      )}

      {/* Driver Verification Dialog */}
      {showDriverVerification && (
        <DriverVerification
          onClose={() => setShowDriverVerification(false)}
          onVerified={() => {
            setShowDriverVerification(false);
            setActiveTrip(true);
          }}
        />
      )}

      {/* Safety Stats */}
      <Card className="glassmorphism p-6 mb-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white">Safety Stats</h3>
          <Button variant="ghost" size="sm" className="text-[#00D9FF] hover:text-[#00D9FF] hover:bg-[#00D9FF]/10">
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 glassmorphism rounded-xl border border-white/5">
            <div className="text-gradient-cyan mb-1">24</div>
            <p className="text-[#E0E0E0]/70">Safe Trips</p>
          </div>
          <div className="text-center p-3 glassmorphism rounded-xl border border-white/5">
            <div className="text-gradient-pink mb-1">3</div>
            <p className="text-[#E0E0E0]/70">Trusted Contacts</p>
          </div>
          <div className="text-center p-3 glassmorphism rounded-xl border border-white/5">
            <div className="text-[#00E676] mb-1">12</div>
            <p className="text-[#E0E0E0]/70">Safe Zones</p>
          </div>
        </div>
      </Card>

      {/* Recent Activity */}
      <div className="mb-6">
        <h3 className="text-white mb-3">Recent Activity</h3>
        <div className="space-y-3">
          {recentAlerts.map((alert, index) => (
            <Alert key={index} className={`glassmorphism border-l-4 ${alert.color} border-t border-r border-b border-white/10`}>
              <Clock className="w-4 h-4 text-[#00D9FF]" />
              <AlertDescription className="flex items-center justify-between text-[#E0E0E0]">
                <span>{alert.message}</span>
                <span className="text-[#E0E0E0]/50">{alert.time}</span>
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>

      {/* Community Network */}
      <Card className="glassmorphism-strong p-6 border border-[#9D4EDD]/30 neon-glow-purple">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 gradient-pink-purple rounded-full flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white mb-2">Community Network Active</h3>
            <p className="text-[#E0E0E0]/70 mb-3">
              5 verified responders are nearby and ready to help if needed
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="border-[#9D4EDD]/50 text-[#9D4EDD] hover:bg-[#9D4EDD]/10"
            >
              View Network
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
