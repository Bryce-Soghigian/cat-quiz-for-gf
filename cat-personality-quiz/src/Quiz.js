import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, LinearProgress } from '@mui/material';
import { Typography } from '@mui/material';

const questions = [
  {
    id: 1,
    text: "It's a sunny afternoon. What are you doing?",
    options: [
      { text: "Lounging in a sunbeam", traits: { lazy: 2, comfort: 1 }, image: "https://files.oaiusercontent.com/file-15UYHo5gvkZG8oDfwwrbgd?se=2025-02-16T06%3A32%3A34Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db9f51be6-21a5-4b0b-86ae-a29a080555bd.webp&sig=lJCHL6xEDvwQpOHIbXk1%2B9%2BNNT6izfiMyROgOEFZUdc%3D" },
      { text: "Hunting bugs in the garden", traits: { adventurous: 2, playful: 1 }, image: "https://files.oaiusercontent.com/file-8GNg5CEByLpHx3CVqVqUHk?se=2025-02-16T06%3A32%3A54Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbc010941-de62-45df-8e48-15463c08790a.webp&sig=JcfPVbkDJmh%2BPx4OB%2Bpq/ftpR9DQx2li4EthVdQsEkQ%3D"},
      { text: "Watching birds from the windowsill", traits: { curious: 2, cautious: 1 }, image: "https://files.oaiusercontent.com/file-XoQavebMVjSp2Tsz6yQ2pb?se=2025-02-16T06%3A35%3A22Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D33565ba0-9883-4209-999f-1b952c743077.webp&sig=QtQbnn/LVAsUJ5v3d3aqGKPhmBTJfbjo0Ito1oCIsjE%3D"},
      { text: "Napping on your human's laptop", traits: { mischievous: 2, attention: 1 }, image: "https://files.oaiusercontent.com/file-PRyRn5QXMtaXaCB7fJ1hd8?se=2025-02-16T06%3A38%3A00Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D54875815-d9f0-4861-a7f9-e1709285c61e.webp&sig=NCfkd6LST17/YwQTjnZE6y4kjRz8LqQCfwHvGzGpm2o%3D"}
    ]
  },
  {
    id: 2,
    text: "Your human brings home a new toy. What's your reaction?",
    options: [
      { text: "Immediately pounce and play with it", traits: { playful: 2, energetic: 1 }, image: "https://files.oaiusercontent.com/file-NqudeKw3afd3QJqsG6EWEH?se=2025-02-16T06%3A38%3A42Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df4f15c73-4d8d-4db5-ac96-5bfd1fd6d603.webp&sig=YeJu3eIvA1jk5bTwJAI/NYIaa4dj4JndX5hyxkBIy4c%3D" },
      { text: "Carefully inspect it from a distance", traits: { cautious: 2, intelligent: 1 }, image: "https://files.oaiusercontent.com/file-37xRicTozR2WBToL9wJNiW?se=2025-02-16T06%3A38%3A49Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D15318d99-8708-4362-b46c-9ae95a971808.webp&sig=15zvg52d%2BOOXfsrQ/zX4PCCc9Okk%2B%2BXRh1IvCxNQwcI%3D" },
      { text: "Ignore it completely", traits: { aloof: 2, independent: 1 }, image: "https://files.oaiusercontent.com/file-8ChVSCPLvDMngmMoJPjf9h?se=2025-02-16T06%3A38%3A56Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbf698207-ff29-4604-b0ea-5e0940abd5d3.webp&sig=V2jTRZPekdb/dAr6mJVJmgCw9vZKXJrqKIgXlGMsFyM%3D" },
      { text: "Wait for your human to play with you", traits: { social: 2, attention: 1 }, image: "https://files.oaiusercontent.com/file-Wk6wZks4bQkjB2u9EBw1q8?se=2025-02-16T06%3A39%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3b457945-f20b-49d0-865f-1bd1c19c70c0.webp&sig=xlFPkQG8H4ohAWDUjmaugLhHB4MMQDD95Qa3Ic7sVH8%3D"}
    ]
  },
  {
    id: 3,
    text: "It's dinner time! What's your style?",
    options: [
      { text: "Meow loudly until food appears", traits: { demanding: 2, vocal: 1 }, image: "https://files.oaiusercontent.com/file-1GeT2VgEeCKb9dGKe6dt86?se=2025-02-16T06%3A39%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D5546bd94-76cf-46ec-8094-f2cff48a4b36.webp&sig=uGg1x18pPHODQk31ERpZphVTSJg1hQS5NiKv1lKOVpA%3D" },
      { text: "Wait patiently by your bowl", traits: { gentle: 2, patient: 1 }, image: "https://files.oaiusercontent.com/file-N3wopSBhqp1vv6tz8ZzUar?se=2025-02-16T06%3A39%3A20Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbf5b0928-9add-42a3-aab1-89f390e60a10.webp&sig=DBbqS6WoEoC1a6uqR6JPHbpE08eDniZspf6xCpD06Tc%3D"},
      { text: "Try to steal food from the counter", traits: { mischievous: 2, clever: 1 }, image: "https://files.oaiusercontent.com/file-FwrRi7puA5ZMupHUMn4YjF?se=2025-02-16T06%3A39%3A27Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D79ad1fef-3705-4fca-9e4a-57eabcabed10.webp&sig=5RaiXzZbZf7jlkGKdw/jpO4d3%2B3asynYd1RLB1rwANI%3D"},
      { text: "Eat a little, save some for later", traits: { cautious: 2, practical: 1 }, image: "https://files.oaiusercontent.com/file-EHd4t6dDsY4z85FFNcY5k3?se=2025-02-16T06%3A39%3A35Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6ccb4bab-5638-4c98-86ec-bc73232fee66.webp&sig=lCwJQSoa3WmmT9zr1k5COClQzImKEDDioGOoqMS7f8s%3D" }
    ]
  },
  {
    id: 4,
    text: "A stranger visits your home. What do you do?",
    options: [
      { text: "Hide under the bed", traits: { shy: 2, cautious: 1 }, image: "https://files.oaiusercontent.com/file-FGJHjMJsYxbzyV8tiRLJw8?se=2025-02-16T06%3A39%3A42Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1f7426f5-07af-4d44-be29-68c6d43a0d40.webp&sig=/WyyFmDYjVcIUbhpoT6Z2xbPq9j5rGXbW19pJZpql2s%3D" },
      { text: "Greet them enthusiastically", traits: { social: 2, friendly: 1 }, image: "https://files.oaiusercontent.com/file-Jc6vXsHQyvNW8kTdF8C5rV?se=2025-02-16T06%3A39%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da2fd96c0-27ea-4c1c-8a25-5cb5749f2f55.webp&sig=SUay5o8eVWrh9otMVkPLOt1WQa0ji8bbYMF41FjSecc%3D"},
      { text: "Watch from a high perch", traits: { curious: 2, independent: 1 }, image: ""},
      { text: "Demand pets immediately", traits: { attention: 2, confident: 1 }, image: ""}
    ]
  }
];

const catTypes = {
  PERSIAN: {
    name: "Fluffy Persian",
    description: "You're elegant, calm, and love comfort. Like a Persian cat, you enjoy the finer things in life and prefer a relaxed lifestyle.",
    traits: ["lazy", "gentle", "comfort"]
  },
  SIAMESE: {
    name: "Sassy Siamese",
    description: "Vocal, social, and attention-loving! You're a natural entertainer who loves being the center of attention.",
    traits: ["vocal", "social", "attention"]
  },
  MAINE_COON: {
    name: "Mighty Maine Coon",
    description: "Gentle giant! You're friendly but independent, intelligent, and have a playful side.",
    traits: ["gentle", "intelligent", "playful"]
  },
  BENGAL: {
    name: "Bouncy Bengal",
    description: "Adventure is your middle name! You're energetic, clever, and always up for a challenge.",
    traits: ["adventurous", "energetic", "clever"]
  },
  BLACK_SHORTHAIR: {
    name: "MeowMeow (Black Shorthair)",
    description: "You're sleek, mysterious, and full of confidence. Like a black shorthair cat, you love independence and often do things on your own terms.",
    traits: ["independent", "mysterious", "confident"]
  }
};

const Stage = ({ currentQuestion, onAnswer, progress }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader
        title={<Typography variant="h5">{currentQuestion.text}</Typography>}
      />
      <LinearProgress variant="determinate" value={progress} className="w-full" />
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              className="w-full p-4 h-auto text-left"
              onClick={() => onAnswer(option.traits)}
            >
              {option.image && (
                <img 
                  src={option.image}
                  alt={option.text} 
                  className="mb-2 w-full object-cover"
                 />
              )}
              {option.text}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Result = ({ traits }) => {
  const calculateCatType = () => {
    const traitCounts = Object.entries(traits).reduce((acc, [trait, count]) => {
      acc[trait] = (acc[trait] || 0) + count;
      return acc;
    }, {});

    let maxMatch = { type: null, score: 0 };

    Object.entries(catTypes).forEach(([type, data]) => {
      const score = data.traits.reduce((sum, trait) => sum + (traitCounts[trait] || 0), 0);
      if (score > maxMatch.score) {
        maxMatch = { type, score };
      }
    });

    return catTypes[maxMatch.type];
  };

  const result = calculateCatType();

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader
        title={<Typography variant="h4">{result.name}</Typography>}
      />
      <CardContent>
        <Typography variant="body1" className="mb-6">
          {result.description}
        </Typography>
        <Button 
          variant="contained"
          onClick={() => window.location.reload()}
          className="mt-4"
        >
          Take Quiz Again
        </Button>
      </CardContent>
    </Card>
  );
};

const CatPersonalityQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [traits, setTraits] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (newTraits) => {
    const updatedTraits = { ...traits };
    Object.entries(newTraits).forEach(([trait, value]) => {
      updatedTraits[trait] = (updatedTraits[trait] || 0) + value;
    });
    setTraits(updatedTraits);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Discover Your Inner Cat</h1>
        {!isComplete ? (
          <Stage
            currentQuestion={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            progress={progress}
          />
        ) : (
          <Result traits={traits} />
        )}
      </div>
    </div>
  );
};

export default CatPersonalityQuiz;
