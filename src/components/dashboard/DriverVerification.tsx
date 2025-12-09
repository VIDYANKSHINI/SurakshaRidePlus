import { useState } from 'react';
import { CheckCircle, XCircle, Camera, AlertTriangle, Shield, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { toast } from 'sonner@2.0.3';

interface DriverVerificationProps {
  onClose: () => void;
  onVerified: () => void;
}

export function DriverVerification({ onClose, onVerified }: DriverVerificationProps) {
  const [step, setStep] = useState<'input' | 'verifying' | 'result'>('input');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [driverVerified, setDriverVerified] = useState(false);

  const mockDriverData = {
    name: 'Rajesh Kumar',
    rating: 4.8,
    trips: 1247,
    verified: true,
    photo: '👨‍✈️',
    vehicle: 'KA-01-AB-1234',
    vehicleType: 'Sedan - White Swift',
  };

  const handleVerify = () => {
    if (!vehicleNumber) {
      toast.error('Please enter vehicle number');
      return;
    }

    setStep('verifying');
    
    setTimeout(() => {
      setDriverVerified(true);
      setStep('result');
      toast.success('Driver verified successfully!');
    }, 2000);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="glassmorphism-strong border-2 border-[#00D9FF]/50 max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Shield className="w-6 h-6 text-[#00D9FF] neon-glow-cyan" />
            Driver Verification
          </DialogTitle>
          <DialogDescription className="text-[#E0E0E0]/70">
            Verify your driver's identity before starting your trip
          </DialogDescription>
        </DialogHeader>

        {step === 'input' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vehicle" className="text-[#E0E0E0]">Vehicle Number</Label>
              <Input
                id="vehicle"
                placeholder="KA-01-AB-1234"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                className="glassmorphism border-[#00D9FF]/30 text-white placeholder:text-[#E0E0E0]/50 focus:border-[#00D9FF] focus:neon-glow-cyan"
              />
            </div>

            <Card className="glassmorphism p-4 border border-[#FF006E]/30">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-[#FF006E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white mb-1">Safety Tip</p>
                  <p className="text-[#E0E0E0]/70">
                    Always verify the vehicle number matches your booking before entering
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-2">
              <Button 
                className="w-full gradient-cyan-purple hover:opacity-90 neon-glow-cyan" 
                onClick={handleVerify}
              >
                Verify Driver
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-[#9D4EDD]/50 text-[#9D4EDD] hover:bg-[#9D4EDD]/10"
              >
                <Camera className="w-4 h-4 mr-2" />
                Scan QR Code
              </Button>
            </div>
          </div>
        )}

        {step === 'verifying' && (
          <div className="py-8 text-center">
            <div className="w-16 h-16 gradient-cyan-purple rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse neon-glow-cyan-strong">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white mb-2">Verifying Driver...</h3>
            <p className="text-[#E0E0E0]/70">Checking credentials and safety records</p>
          </div>
        )}

        {step === 'result' && (
          <div className="space-y-4">
            {driverVerified ? (
              <>
                <Card className="glassmorphism p-4 border border-[#00E676]/50 neon-glow-green">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-[#00E676]" />
                    <div>
                      <h3 className="text-[#00E676]">Driver Verified</h3>
                      <p className="text-[#00E676]/80">Safe to proceed</p>
                    </div>
                  </div>
                </Card>

                {/* Driver Details */}
                <Card className="glassmorphism p-4 border border-white/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 glassmorphism rounded-full flex items-center justify-center text-3xl border border-[#00D9FF]/30">
                      {mockDriverData.photo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-white">{mockDriverData.name}</h3>
                        {mockDriverData.verified && (
                          <Badge className="bg-[#00D9FF] text-[#0F1419] border-0">Verified</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-[#E0E0E0]/70">
                        <span>⭐ {mockDriverData.rating}</span>
                        <span>•</span>
                        <span>{mockDriverData.trips} trips</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 p-3 glassmorphism rounded-lg border border-white/5">
                    <div className="flex justify-between">
                      <span className="text-[#E0E0E0]/70">Vehicle</span>
                      <span className="text-white">{mockDriverData.vehicleType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#E0E0E0]/70">Number Plate</span>
                      <span className="text-[#00D9FF]">{mockDriverData.vehicle}</span>
                    </div>
                  </div>
                </Card>

                {/* Safety Features */}
                <Card className="glassmorphism p-4 border border-[#9D4EDD]/30">
                  <h4 className="text-white mb-3">Active Safety Features:</h4>
                  <div className="space-y-2 text-[#E0E0E0]/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00E676]" />
                      <span>Live location sharing enabled</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00E676]" />
                      <span>Trip monitoring active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00E676]" />
                      <span>Emergency contacts notified</span>
                    </div>
                  </div>
                </Card>

                <div className="space-y-2">
                  <Button 
                    className="w-full gradient-cyan-purple hover:opacity-90 neon-glow-cyan" 
                    onClick={onVerified}
                  >
                    Start Trip Tracking
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-[#FF1744] border-[#FF1744]/50 hover:bg-[#FF1744]/10" 
                    onClick={onClose}
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Cancel Trip
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Card className="glassmorphism p-4 border border-[#FF1744]/50">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-8 h-8 text-[#FF1744]" />
                    <div>
                      <h3 className="text-[#FF1744]">Verification Failed</h3>
                      <p className="text-[#FF1744]/80">Driver details do not match</p>
                    </div>
                  </div>
                </Card>
                <Button 
                  variant="outline" 
                  className="w-full border-[#00D9FF]/50 text-[#00D9FF] hover:bg-[#00D9FF]/10" 
                  onClick={() => setStep('input')}
                >
                  Try Again
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-[#FF1744] border-[#FF1744]/50 hover:bg-[#FF1744]/10" 
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
