import { useState } from 'react';
import { AlertTriangle, Phone, MapPin, Camera, Volume2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { toast } from 'sonner@2.0.3';

export function SOSButton() {
  const [isActivating, setIsActivating] = useState(false);
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const activateSOS = () => {
    setIsActivating(true);
    let count = 3;
    setCountdown(count);

    const timer = setInterval(() => {
      count--;
      setCountdown(count);
      
      if (count === 0) {
        clearInterval(timer);
        setSosActive(true);
        setIsActivating(false);
        toast.error('SOS ACTIVATED! Emergency contacts notified.', {
          duration: 5000,
        });
      }
    }, 1000);
  };

  const cancelSOS = () => {
    setIsActivating(false);
    setSosActive(false);
    setCountdown(3);
    toast.success('SOS cancelled');
  };

  return (
    <>
      <Card className="glassmorphism-strong p-8 mb-6 border-2 border-[#FF1744]/50 neon-glow-pink-strong">
        <div className="text-center">
          <div className="mb-4 relative">
            <AlertTriangle className="w-12 h-12 text-[#FF006E] mx-auto animate-pulse" />
            <div className="absolute inset-0 bg-[#FF006E] blur-2xl opacity-40 animate-pulse"></div>
          </div>
          <h3 className="text-white mb-2">Emergency SOS</h3>
          <p className="text-[#E0E0E0]/70 mb-6">Tap and hold for 3 seconds to activate emergency alert</p>
          <Button
            size="lg"
            className="w-full h-20 gradient-pink-purple text-white hover:opacity-90 transition-all duration-300 neon-glow-pink-strong relative overflow-hidden group"
            onMouseDown={activateSOS}
            onMouseUp={() => {
              if (isActivating && countdown > 0) {
                cancelSOS();
              }
            }}
            onTouchStart={activateSOS}
            onTouchEnd={() => {
              if (isActivating && countdown > 0) {
                cancelSOS();
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF006E] to-[#FF1744] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">
              {isActivating ? (
                <span>Activating in {countdown}...</span>
              ) : (
                <span>HOLD FOR SOS</span>
              )}
            </span>
          </Button>
          {!isActivating && (
            <p className="text-[#E0E0E0]/50 mt-2">Press and hold to activate</p>
          )}
        </div>
      </Card>

      {/* SOS Active Dialog */}
      <Dialog open={sosActive} onOpenChange={setSosActive}>
        <DialogContent className="glassmorphism-strong border-2 border-[#FF1744] max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#FF1744] flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 animate-pulse neon-glow-pink" />
              SOS ACTIVATED
            </DialogTitle>
            <DialogDescription className="text-[#E0E0E0]/70">
              Emergency services have been notified. Help is on the way.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Active Features */}
            <div className="p-4 glassmorphism rounded-xl border border-[#FF1744]/30">
              <h4 className="text-white mb-3">Active Safety Features:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#00E676]">
                  <MapPin className="w-4 h-4" />
                  <span>Location shared with contacts</span>
                </div>
                <div className="flex items-center gap-2 text-[#00E676]">
                  <Phone className="w-4 h-4" />
                  <span>Emergency contacts notified</span>
                </div>
                <div className="flex items-center gap-2 text-[#00E676]">
                  <Camera className="w-4 h-4" />
                  <span>Recording started</span>
                </div>
                <div className="flex items-center gap-2 text-[#00E676]">
                  <Volume2 className="w-4 h-4" />
                  <span>Loud alarm activated</span>
                </div>
              </div>
            </div>

            {/* Nearby Help */}
            <div className="p-4 glassmorphism rounded-xl border border-[#00D9FF]/30">
              <h4 className="text-white mb-2">Nearby Help:</h4>
              <div className="space-y-1 text-[#E0E0E0]/80">
                <p>🚓 Police Station - 0.5 km away</p>
                <p>🏥 City Hospital - 1.2 km away</p>
                <p>👥 3 community responders nearby</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <Button className="w-full gradient-cyan-purple hover:opacity-90 neon-glow-cyan">
                <Phone className="w-4 h-4 mr-2" />
                Call Police (100)
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-[#E0E0E0]/30 text-[#E0E0E0] hover:bg-white/10" 
                onClick={cancelSOS}
              >
                I'm Safe Now - Deactivate SOS
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
