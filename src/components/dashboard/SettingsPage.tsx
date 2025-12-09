import { Bell, Lock, Shield, Volume2, Camera, Moon, User, LogOut, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';

interface SettingsPageProps {
  onLogout: () => void;
}

export function SettingsPage({ onLogout }: SettingsPageProps) {
  const settingsSections = [
    {
      title: 'Safety Features',
      icon: Shield,
      color: 'text-[#00D9FF]',
      settings: [
        { id: 'auto-sos', label: 'Auto SOS on impact', description: 'Activate SOS if device detects impact', enabled: true },
        { id: 'voice-detection', label: 'Voice detection', description: 'Detect distress sounds and activate alert', enabled: true },
        { id: 'location-sharing', label: 'Auto location sharing', description: 'Share location when trip starts', enabled: true },
        { id: 'shake-sos', label: 'Shake to activate SOS', description: 'Shake phone 3 times to trigger SOS', enabled: false },
      ],
    },
    {
      title: 'Privacy',
      icon: Lock,
      color: 'text-[#9D4EDD]',
      settings: [
        { id: 'location-history', label: 'Save location history', description: 'Store your trip history', enabled: true },
        { id: 'photo-backup', label: 'Backup photos to cloud', description: 'Encrypted backup of safety photos', enabled: false },
        { id: 'anonymous-mode', label: 'Anonymous alerts', description: 'Hide identity in community alerts', enabled: false },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      color: 'text-[#FF006E]',
      settings: [
        { id: 'push-alerts', label: 'Push notifications', description: 'Receive safety alerts', enabled: true },
        { id: 'community-alerts', label: 'Community alerts', description: 'Get notified of nearby incidents', enabled: true },
        { id: 'safe-arrival', label: 'Safe arrival reminders', description: 'Remind contacts of safe arrival', enabled: true },
      ],
    },
  ];

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto pb-24">
      {/* Profile Section */}
      <Card className="glassmorphism-strong p-6 mb-6 border border-[#00D9FF]/30 neon-glow-cyan">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 gradient-cyan-purple rounded-full flex items-center justify-center border-2 border-[#00D9FF]/50">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white">Priya Sharma</h3>
            <p className="text-[#E0E0E0]/60">priya.sharma@email.com</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-[#00D9FF] hover:text-[#00D9FF] hover:bg-[#00D9FF]/10"
          >
            Edit
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <div className="text-center p-3 glassmorphism rounded-xl border border-white/5">
            <div className="text-gradient-cyan mb-1">24</div>
            <p className="text-[#E0E0E0]/60">Trips</p>
          </div>
          <div className="text-center p-3 glassmorphism rounded-xl border border-white/5">
            <div className="text-gradient-pink mb-1">3</div>
            <p className="text-[#E0E0E0]/60">Contacts</p>
          </div>
          <div className="text-center p-3 glassmorphism rounded-xl border border-white/5">
            <div className="text-[#00E676] mb-1">98%</div>
            <p className="text-[#E0E0E0]/60">Safety Score</p>
          </div>
        </div>
      </Card>

      {/* Settings Sections */}
      {settingsSections.map((section, index) => {
        const SectionIcon = section.icon;
        return (
          <div key={index} className="mb-6">
            <div className="flex items-center gap-2 mb-3 px-2">
              <SectionIcon className={`w-5 h-5 ${section.color}`} />
              <h3 className="text-white">{section.title}</h3>
            </div>
            <Card className="glassmorphism border border-white/10 divide-y divide-white/10">
              {section.settings.map((setting) => (
                <div key={setting.id} className="p-4 hover:bg-white/5 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <Label htmlFor={setting.id} className="cursor-pointer text-white">
                        {setting.label}
                      </Label>
                      <p className="text-[#E0E0E0]/60 mt-1">{setting.description}</p>
                    </div>
                    <Switch id={setting.id} defaultChecked={setting.enabled} />
                  </div>
                </div>
              ))}
            </Card>
          </div>
        );
      })}

      {/* Other Options */}
      <div className="mb-6">
        <h3 className="text-white mb-3 px-2">Other</h3>
        <Card className="glassmorphism border border-white/10 divide-y divide-white/10">
          <button className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-[#00D9FF]" />
              <span className="text-white">Sound & Volume</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#E0E0E0]/40" />
          </button>
          <div className="w-full p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-[#9D4EDD]" />
              <span className="text-white">Dark Mode</span>
            </div>
            <Switch defaultChecked />
          </div>
          <button className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#00E676]" />
              <span className="text-white">Privacy Policy</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#E0E0E0]/40" />
          </button>
          <button className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <Camera className="w-5 h-5 text-[#FF006E]" />
              <span className="text-white">About SurakshaRidePlus</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#E0E0E0]/40" />
          </button>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="glassmorphism-strong p-6 border-2 border-[#FF1744]/50 neon-glow-pink">
        <h3 className="text-[#FF1744] mb-4">Account Actions</h3>
        <div className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full border-[#E0E0E0]/30 text-[#E0E0E0] hover:bg-white/10" 
            onClick={onLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
          <Button 
            variant="outline" 
            className="w-full text-[#FF1744] border-[#FF1744]/50 hover:bg-[#FF1744]/10"
          >
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  );
}
