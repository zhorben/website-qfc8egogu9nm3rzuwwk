import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useToast } from '@/components/ui/use-toast'
import CoffeeCard from '@/components/CoffeeCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';
import CoffeeCard from '@/components/CoffeeCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CoffeeRecommendation {
  name: string;
  description: string;
  strength: string;
}

const Index: React.FC = () => {
  const [name, setName] = useState('');
  const [preferredStrength, setPreferredStrength] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<CoffeeRecommendation | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setRecommendation(null);

    // Simulating API call
    setTimeout(() => {
      const mockRecommendations = [
        { name: 'Espresso Intenso', description: 'A bold and rich espresso blend', strength: 'Strong' },
        { name: 'Smooth Latte Blend', description: 'Perfect for creamy lattes and cappuccinos', strength: 'Medium' },
        { name: 'Light Roast Delight', description: 'A delicate and fruity light roast', strength: 'Mild' },
      ];

      const result = mockRecommendations[Math.floor(Math.random() * mockRecommendations.length)];
      setRecommendation(result);
      setIsLoading(false);
      toast({
        title: 'Recommendation Ready!',
        description: 'We\'ve found a perfect coffee match for you.',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">CoffeeAI Recommendations</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <Label>Preferred Coffee Strength</Label>
              <RadioGroup value={preferredStrength} onValueChange={setPreferredStrength} className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mild" id="mild" />
                  <Label htmlFor="mild">Mild</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="strong" id="strong" />
                  <Label htmlFor="strong">Strong</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Getting Recommendation...
                </>
              ) : (
                <>
                  <Coffee className="mr-2 h-4 w-4" />
                  Get Coffee Recommendation
                </>
              )}
            </Button>
          </form>
        </motion.div>

        {recommendation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <CoffeeCard recommendation={recommendation} />
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;