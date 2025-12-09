import { useState } from 'react';
import { MapPin, Navigation, Shield, Activity, Hospital, Building2, Filter } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';

export function MapView() {
  const [showPolice, setShowPolice] = useState(true);
  const [showHospitals, setShowHospitals] = useState(true);
  const [showSafeZones, setShowSafeZones] = useState(true);
  const [showHeatmap, setShowHeatmap] = useState(false);

  const nearbyLocations = [
    { type: 'police', name: 'Koramangala Police Station', distance: '0.5 km', icon: Shield, color: 'text-[#00D9FF]', bg: 'bg-[#00D9FF]/20', border: 'border-[#00D9FF]/30' },
    { type: 'hospital', name: 'City Hospital', distance: '1.2 km', icon: Hospital, color: 'text-[#FF006E]', bg: 'bg-[#FF006E]/20', border: 'border-[#FF006E]/30' },
    { type: 'safe-zone', name: '24/7 Safe Spot - Cafe', distance: '0.3 km', icon: Building2, color: 'text-[#00E676]', bg: 'bg-[#00E676]/20', border: 'border-[#00E676]/30' },
    { type: 'police', name: 'HSR Layout Police Station', distance: '2.1 km', icon: Shield, color: 'text-[#00D9FF]', bg: 'bg-[#00D9FF]/20', border: 'border-[#00D9FF]/30' },
  ];

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Map Container */}
      <div className="relative h-[50vh] bg-gradient-to-br from-[#1A1F3A] via-[#0F1419] to-[#1A1F3A] overflow-hidden">
        {/* Simulated Map with Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Center Location */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center relative">
            <div className="absolute inset-0 bg-[#00D9FF] blur-3xl opacity-30 animate-pulse"></div>
            <MapPin className="w-16 h-16 text-[#00D9FF] mx-auto mb-4 animate-bounce neon-glow-cyan-strong relative z-10" />
            <div className="glassmorphism px-4 py-2 rounded-lg border border-[#00D9FF]/30 relative z-10">
              <p className="text-[#E0E0E0]/70">Your Current Location</p>
              <p className="text-white">Koramangala, Bangalore</p>
            </div>
          </div>
        </div>

        {/* Map Markers Overlay */}
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 bg-[#00D9FF] rounded-full flex items-center justify-center shadow-lg animate-pulse neon-glow-cyan">
            <Shield className="w-6 h-6 text-[#0F1419]" />
          </div>
        </div>
        <div className="absolute top-16 right-8">
          <div className="w-10 h-10 bg-[#FF006E] rounded-full flex items-center justify-center shadow-lg neon-glow-pink">
            <Hospital className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-12 left-12">
          <div className="w-10 h-10 bg-[#00E676] rounded-full flex items-center justify-center shadow-lg neon-glow-green">
            <Building2 className="w-6 h-6 text-[#0F1419]" />
          </div>
        </div>

        {/* Risk Level Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-[#00E676] text-[#0F1419] shadow-lg border-0 neon-glow-green">Low Risk Area</Badge>
        </div>

        {/* Center Location Button */}
        <Button
          size="icon"
          className="absolute bottom-4 right-4 rounded-full shadow-lg gradient-cyan-purple neon-glow-cyan"
        >
          <Navigation className="w-5 h-5 text-white" />
        </Button>
      </div>

      {/* Filters */}
      <div className="px-4 py-4 glassmorphism-strong border-b border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-[#00D9FF]" />
          <span className="text-white">Map Filters</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center justify-between p-2 glassmorphism rounded-lg border border-white/10">
            <Label htmlFor="police" className="flex items-center gap-2 cursor-pointer text-[#E0E0E0]">
              <Shield className="w-4 h-4 text-[#00D9FF]" />
              <span>Police</span>
            </Label>
            <Switch id="police" checked={showPolice} onCheckedChange={setShowPolice} />
          </div>
          <div className="flex items-center justify-between p-2 glassmorphism rounded-lg border border-white/10">
            <Label htmlFor="hospitals" className="flex items-center gap-2 cursor-pointer text-[#E0E0E0]">
              <Hospital className="w-4 h-4 text-[#FF006E]" />
              <span>Hospitals</span>
            </Label>
            <Switch id="hospitals" checked={showHospitals} onCheckedChange={setShowHospitals} />
          </div>
          <div className="flex items-center justify-between p-2 glassmorphism rounded-lg border border-white/10">
            <Label htmlFor="safe-zones" className="flex items-center gap-2 cursor-pointer text-[#E0E0E0]">
              <Building2 className="w-4 h-4 text-[#00E676]" />
              <span>Safe Zones</span>
            </Label>
            <Switch id="safe-zones" checked={showSafeZones} onCheckedChange={setShowSafeZones} />
          </div>
          <div className="flex items-center justify-between p-2 glassmorphism rounded-lg border border-white/10">
            <Label htmlFor="heatmap" className="flex items-center gap-2 cursor-pointer text-[#E0E0E0]">
              <Activity className="w-4 h-4 text-[#FF006E]" />
              <span>Risk Map</span>
            </Label>
            <Switch id="heatmap" checked={showHeatmap} onCheckedChange={setShowHeatmap} />
          </div>
        </div>
      </div>

      {/* Nearby Locations List */}
      <div className="px-4 py-6">
        <h3 className="text-white mb-4">Nearby Safety Points</h3>
        <div className="space-y-3">
          {nearbyLocations.map((location, index) => {
            const Icon = location.icon;
            return (
              <Card key={index} className="glassmorphism p-4 hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-[#00D9FF]/50">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${location.bg} rounded-full flex items-center justify-center flex-shrink-0 border ${location.border}`}>
                    <Icon className={`w-6 h-6 ${location.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white truncate">{location.name}</h4>
                    <p className="text-[#E0E0E0]/60">{location.distance} away</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-[#00D9FF]/50 text-[#00D9FF] hover:bg-[#00D9FF]/10"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Go
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Safe Corridor Info */}
      <div className="px-4 pb-6">
        <Card className="glassmorphism-strong p-4 border border-[#00E676]/50 neon-glow-green">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-[#00E676] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white mb-1">Safe Corridor Detected</h4>
              <p className="text-[#E0E0E0]/70 mb-3">
                You're in a well-lit area with high police presence and community monitoring.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge className="border border-[#00E676]/50 text-[#00E676] bg-[#00E676]/10">
                  Well Lit
                </Badge>
                <Badge className="border border-[#00D9FF]/50 text-[#00D9FF] bg-[#00D9FF]/10">
                  Police Nearby
                </Badge>
                <Badge className="border border-[#9D4EDD]/50 text-[#9D4EDD] bg-[#9D4EDD]/10">
                  Safe Zone
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
