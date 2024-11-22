import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CoffeeRecommendation {
  name: string;
  description: string;
  strength: string;
}

interface CoffeeCardProps {
  recommendation: CoffeeRecommendation;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ recommendation }) => {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{recommendation.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-2">{recommendation.description}</p>
        <p className="font-semibold">Strength: {recommendation.strength}</p>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;