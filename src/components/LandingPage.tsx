import { Shield, AlertCircle, MapPin, Users, Bell, Lock, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface LandingPageProps {
  onLogin: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  const features = [
    {
      icon: AlertCircle,
      title: 'One-Tap SOS',
      description: 'Instant emergency alerts to your trusted contacts and nearby responders',
      color: 'text-[#FF006E]',
      bgColor: 'bg-[#FF006E]/10',
    },
    {
      icon: MapPin,
      title: 'Live Safety Map',
      description: 'Real-time view of police stations, hospitals, and safe corridors',
      color: 'text-[#00D9FF]',
      bgColor: 'bg-[#00D9FF]/10',
    },
    {
      icon: Shield,
      title: 'Driver Verification',
      description: 'Verify and track your driver with photo, ID, and real-time location',
      color: 'text-[#9D4EDD]',
      bgColor: 'bg-[#9D4EDD]/10',
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with verified community responders in your area',
      color: 'text-[#00E676]',
      bgColor: 'bg-[#00E676]/10',
    },
    {
      icon: Bell,
      title: 'Voice Detection',
      description: 'Automatic alert system with scream and distress voice recognition',
      color: 'text-[#1DBADB]',
      bgColor: 'bg-[#1DBADB]/10',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'End-to-end encryption with user-controlled data and minimal retention',
      color: 'text-[#FF006E]',
      bgColor: 'bg-[#FF006E]/10',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Hero Section with animated background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/10 via-transparent to-[#9D4EDD]/10"></div>
        
        <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Shield className="w-8 h-8 text-[#00D9FF] neon-glow-cyan" />
              <div className="absolute inset-0 bg-[#00D9FF] blur-xl opacity-30 animate-pulse"></div>
            </div>
            <span className="text-white">
              Suraksha<span className="text-gradient-cyan">Ride</span>
              <span className="text-[#FF006E]">Plus</span>
            </span>
          </div>
          <Button 
            variant="outline" 
            onClick={onLogin}
            className="border-[#00D9FF]/50 text-[#00D9FF] hover:bg-[#00D9FF]/10 hover:border-[#00D9FF] transition-all duration-300"
          >
            Sign In
          </Button>
        </nav>

        <main className="px-6 py-12 max-w-7xl mx-auto relative z-10">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glassmorphism rounded-full border border-[#00D9FF]/30">
              <Zap className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-[#E0E0E0]">Your Safety, Our Priority</span>
            </div>
            <h1 className="mb-6 text-white max-w-4xl mx-auto">
              Travel Safely at Night with India's Most{' '}
              <span className="text-gradient-cyan">Comprehensive</span>{' '}
              Safety Platform
            </h1>
            <p className="text-[#E0E0E0]/80 max-w-2xl mx-auto mb-8">
              Integrated SOS, live tracking, driver verification, and community support. 
              Making last-mile travel safe for women across India.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                onClick={onLogin}
                className="gradient-cyan-purple text-white hover:opacity-90 transition-all duration-300 neon-glow-cyan"
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#9D4EDD]/50 text-[#9D4EDD] hover:bg-[#9D4EDD]/10 hover:border-[#9D4EDD]"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="glassmorphism p-6 hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-[#00D9FF]/50 group"
                >
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="mb-2 text-white">{feature.title}</h3>
                  <p className="text-[#E0E0E0]/70">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="glassmorphism-strong rounded-2xl p-8 mb-16 border border-[#00D9FF]/30 neon-glow-cyan">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="mb-2 text-gradient-cyan">10,000+</div>
                <p className="text-[#E0E0E0]/70">Active Users</p>
              </div>
              <div>
                <div className="mb-2 text-gradient-pink">{'< 2 Min'}</div>
                <p className="text-[#E0E0E0]/70">Average Response Time</p>
              </div>
              <div>
                <div className="mb-2 text-[#00E676]">98%</div>
                <p className="text-[#E0E0E0]/70">User Satisfaction</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">How It Works</h2>
            <p className="text-[#E0E0E0]/70 max-w-2xl mx-auto mb-12">
              Simple, fast, and effective safety in three steps
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glassmorphism p-6 rounded-2xl border border-white/10">
                <div className="w-16 h-16 gradient-cyan-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white neon-glow-cyan">
                  1
                </div>
                <h3 className="mb-2 text-white">Setup Your Profile</h3>
                <p className="text-[#E0E0E0]/70">Add emergency contacts and safety preferences</p>
              </div>
              <div className="glassmorphism p-6 rounded-2xl border border-white/10">
                <div className="w-16 h-16 gradient-pink-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white neon-glow-pink">
                  2
                </div>
                <h3 className="mb-2 text-white">Share Your Journey</h3>
                <p className="text-[#E0E0E0]/70">Track and share your trip with trusted contacts</p>
              </div>
              <div className="glassmorphism p-6 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-[#00E676] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F1419] neon-glow-green">
                  3
                </div>
                <h3 className="mb-2 text-white">Travel with Confidence</h3>
                <p className="text-[#E0E0E0]/70">One-tap SOS and instant help when you need it</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 glassmorphism rounded-2xl border border-[#9D4EDD]/30">
            <h2 className="mb-4 text-white">Ready to Travel Safer?</h2>
            <p className="text-[#E0E0E0]/70 mb-6">Join thousands of women who trust SurakshaRidePlus</p>
            <Button 
              size="lg" 
              onClick={onLogin}
              className="gradient-cyan-purple text-white hover:opacity-90 transition-all duration-300 neon-glow-cyan-strong"
            >
              Start Your Free Trial
            </Button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 py-8 px-6 bg-[#1A1F3A]/50">
        <div className="max-w-7xl mx-auto text-center text-[#E0E0E0]/60">
          <p>© 2025 SurakshaRidePlus. Making India safer, one journey at a time.</p>
        </div>
      </footer>
    </div>
  );
}
