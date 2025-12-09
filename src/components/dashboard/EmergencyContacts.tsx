import { useState } from 'react';
import { Plus, Phone, Mail, Trash2, UserCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { toast } from 'sonner@2.0.3';

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  relationship: string;
  primary: boolean;
}

export function EmergencyContacts() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: 'Mom', phone: '+91 98765 43210', email: 'mom@email.com', relationship: 'Mother', primary: true },
    { id: 2, name: 'Riya', phone: '+91 98765 43211', email: 'riya@email.com', relationship: 'Sister', primary: false },
    { id: 3, name: 'Amit', phone: '+91 98765 43212', email: 'amit@email.com', relationship: 'Friend', primary: false },
  ]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', phone: '', email: '', relationship: '' });

  const handleAddContact = () => {
    if (!newContact.name || !newContact.phone) {
      toast.error('Name and phone are required');
      return;
    }

    const contact: Contact = {
      id: Date.now(),
      ...newContact,
      primary: false,
    };

    setContacts([...contacts, contact]);
    setNewContact({ name: '', phone: '', email: '', relationship: '' });
    setShowAddDialog(false);
    toast.success('Contact added successfully');
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
    toast.success('Contact removed');
  };

  const handleSetPrimary = (id: number) => {
    setContacts(contacts.map(c => ({ ...c, primary: c.id === id })));
    toast.success('Primary contact updated');
  };

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-white mb-2">Emergency Contacts</h2>
        <p className="text-[#E0E0E0]/70">
          These contacts will be notified when you activate SOS
        </p>
      </div>

      {/* Quick Dial Emergency Numbers */}
      <Card className="glassmorphism-strong p-4 mb-6 border border-[#FF1744]/50 neon-glow-pink">
        <h3 className="text-white mb-3">Quick Dial</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="justify-start h-auto py-3 glassmorphism border-[#00D9FF]/30 hover:border-[#00D9FF] hover:bg-[#00D9FF]/10"
          >
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <Phone className="w-4 h-4 text-[#00D9FF]" />
                <span className="text-white">Police</span>
              </div>
              <span className="text-[#00D9FF]">100</span>
            </div>
          </Button>
          <Button 
            variant="outline" 
            className="justify-start h-auto py-3 glassmorphism border-[#FF006E]/30 hover:border-[#FF006E] hover:bg-[#FF006E]/10"
          >
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <Phone className="w-4 h-4 text-[#FF006E]" />
                <span className="text-white">Ambulance</span>
              </div>
              <span className="text-[#FF006E]">108</span>
            </div>
          </Button>
          <Button 
            variant="outline" 
            className="justify-start h-auto py-3 glassmorphism border-[#9D4EDD]/30 hover:border-[#9D4EDD] hover:bg-[#9D4EDD]/10"
          >
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <Phone className="w-4 h-4 text-[#9D4EDD]" />
                <span className="text-white">Women Helpline</span>
              </div>
              <span className="text-[#9D4EDD]">1091</span>
            </div>
          </Button>
          <Button 
            variant="outline" 
            className="justify-start h-auto py-3 glassmorphism border-[#FF006E]/30 hover:border-[#FF006E] hover:bg-[#FF006E]/10"
          >
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <Phone className="w-4 h-4 text-[#FF006E]" />
                <span className="text-white">Fire</span>
              </div>
              <span className="text-[#FF006E]">101</span>
            </div>
          </Button>
        </div>
      </Card>

      {/* Personal Contacts */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white">Your Contacts ({contacts.length})</h3>
        <Button 
          onClick={() => setShowAddDialog(true)}
          className="gradient-cyan-purple hover:opacity-90 neon-glow-cyan"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Contact
        </Button>
      </div>

      <div className="space-y-3">
        {contacts.map((contact) => (
          <Card key={contact.id} className="glassmorphism p-4 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-cyan-purple rounded-full flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h4 className="text-white">{contact.name}</h4>
                  {contact.primary && (
                    <Badge className="bg-[#00D9FF] text-[#0F1419] border-0">Primary</Badge>
                  )}
                </div>
                <p className="text-[#E0E0E0]/60 mb-1">{contact.relationship}</p>
                <div className="flex items-center gap-4 text-[#E0E0E0]/60 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>{contact.phone}</span>
                  </div>
                  {contact.email && (
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{contact.email}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {!contact.primary && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSetPrimary(contact.id)}
                    className="border-[#9D4EDD]/50 text-[#9D4EDD] hover:bg-[#9D4EDD]/10"
                  >
                    Set Primary
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteContact(contact.id)}
                  className="text-[#FF1744] hover:text-[#FF1744] hover:bg-[#FF1744]/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Contact Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="glassmorphism-strong border-2 border-[#00D9FF]/50 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white">Add Emergency Contact</DialogTitle>
            <DialogDescription className="text-[#E0E0E0]/70">
              Add a trusted person who will be notified during emergencies
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#E0E0E0]">Name *</Label>
              <Input
                id="name"
                placeholder="Enter name"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                className="glassmorphism border-[#00D9FF]/30 text-white placeholder:text-[#E0E0E0]/50 focus:border-[#00D9FF]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#E0E0E0]">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="+91 98765 43210"
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                className="glassmorphism border-[#00D9FF]/30 text-white placeholder:text-[#E0E0E0]/50 focus:border-[#00D9FF]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#E0E0E0]">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={newContact.email}
                onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                className="glassmorphism border-[#00D9FF]/30 text-white placeholder:text-[#E0E0E0]/50 focus:border-[#00D9FF]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="relationship" className="text-[#E0E0E0]">Relationship</Label>
              <Input
                id="relationship"
                placeholder="Mother, Sister, Friend, etc."
                value={newContact.relationship}
                onChange={(e) => setNewContact({ ...newContact, relationship: e.target.value })}
                className="glassmorphism border-[#00D9FF]/30 text-white placeholder:text-[#E0E0E0]/50 focus:border-[#00D9FF]"
              />
            </div>

            <div className="flex gap-2">
              <Button 
                className="flex-1 gradient-cyan-purple hover:opacity-90" 
                onClick={handleAddContact}
              >
                Add Contact
              </Button>
              <Button 
                variant="outline" 
                className="border-[#E0E0E0]/30 text-[#E0E0E0] hover:bg-white/10"
                onClick={() => setShowAddDialog(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
