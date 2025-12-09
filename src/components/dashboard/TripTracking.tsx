import { useState, useEffect } from 'react';
import { Navigation, Clock, MapPin, Share2, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { toast } from 'sonner@2.0.3';

interface TripTrackingProps {
  onEndTrip: () => void;
}

export function TripTracking({ onEndTrip }: TripTrackingProps) {
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration((prev) => prev + 1);
      setProgress((prev) => Math.min(prev + 0.5, 100));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndTrip = () => {
    toast.success('Trip ended safely. Well done!');
    onEndTrip();
  };

  return (
    <Card className="glassmorphism-strong p-6 mb-6 border-2 border-[#00D9FF]/50 neon-glow-cyan">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge className="bg-[#00E676] text-[#0F1419] animate-pulse border-0">Trip Active</Badge>
            <Badge className="border border-[#00D9FF]/50 text-[#00D9FF] bg-[#00D9FF]/10">Sharing Location</Badge>
          </div>
          <h3 className="text-white">Trip to Home</h3>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleEndTrip}
          className="text-[#E0E0E0]/60 hover:text-white hover:bg-white/10"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Trip Progress */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-[#E0E0E0]/70">Progress</span>
          <span className="text-gradient-cyan">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full gradient-cyan-purple neon-glow-cyan transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Trip Details */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3 glassmorphism p-3 rounded-xl border border-white/10">
          <div className="w-10 h-10 bg-[#00D9FF]/20 rounded-full flex items-center justify-center border border-[#00D9FF]/30">
            <Clock className="w-5 h-5 text-[#00D9FF]" />
          </div>
          <div>
            <p className="text-[#E0E0E0]/60">Duration</p>
            <p className="text-white">{formatTime(duration)}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 glassmorphism p-3 rounded-xl border border-white/10">
          <div className="w-10 h-10 bg-[#FF006E]/20 rounded-full flex items-center justify-center border border-[#FF006E]/30">
            <MapPin className="w-5 h-5 text-[#FF006E]" />
          </div>
          <div>
            <p className="text-[#E0E0E0]/60">Distance</p>
            <p className="text-white">2.3 km</p>
          </div>
        </div>
      </div>

      {/* Route Info */}
      <div className="space-y-3 mb-6 glassmorphism p-4 rounded-xl border border-white/10">
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-[#00E676] rounded-full mt-1 neon-glow-green"></div>
          <div className="flex-1">
            <p className="text-white">MG Road</p>
            <p className="text-[#E0E0E0]/60">Starting Point</p>
          </div>
        </div>
        <div className="border-l-2 border-dashed border-[#00D9FF]/30 ml-1.5 h-8"></div>
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-[#00D9FF] rounded-full mt-1 animate-pulse neon-glow-cyan"></div>
          <div className="flex-1">
            <p className="text-white">Koramangala</p>
            <p className="text-[#E0E0E0]/60">Current Location</p>
          </div>
        </div>
        <div className="border-l-2 border-dashed border-[#00D9FF]/30 ml-1.5 h-8"></div>
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-[#9D4EDD] rounded-full mt-1"></div>
          <div className="flex-1">
            <p className="text-white">Indiranagar</p>
            <p className="text-[#E0E0E0]/60">Destination</p>
          </div>
        </div>
      </div>

      {/* Shared With */}
      <div className="p-4 glassmorphism rounded-xl border border-white/10 mb-4">
        <p className="text-[#E0E0E0]/70 mb-2">Sharing trip with:</p>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge className="bg-[#9D4EDD]/20 text-[#9D4EDD] border border-[#9D4EDD]/30">Mom</Badge>
          <Badge className="bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/30">Riya (Sister)</Badge>
          <Badge className="bg-[#FF006E]/20 text-[#FF006E] border border-[#FF006E]/30">+2 more</Badge>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button 
          variant="outline" 
          className="w-full border-[#00D9FF]/50 text-[#00D9FF] hover:bg-[#00D9FF]/10"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button 
          className="w-full gradient-pink-purple hover:opacity-90 neon-glow-pink" 
          onClick={handleEndTrip}
        >
          End Trip
        </Button>
      </div>
    </Card>
  );
}
