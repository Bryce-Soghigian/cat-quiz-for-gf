import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, LinearProgress } from '@mui/material';
import { Typography } from '@mui/material';

const questions = [
  {
    id: 1,
    text: "It's a sunny afternoon. What are you doing?",
    image: "https://i.ytimg.com/vi/qeOa_OcB3DE/hqdefault.jpg",
    options: [
      { text: "Lounging in a sunbeam", traits: { lazy: 2, comfort: 1 } },
      { text: "Hunting bugs in the garden", traits: { adventurous: 2, playful: 1 } },
      { text: "Watching birds from the windowsill", traits: { curious: 2, cautious: 1 } },
      { text: "Napping on your human's laptop", traits: { mischievous: 2, attention: 1 } }
    ]
  },
  {
    id: 2,
    text: "Your human brings home a new toy. What's your reaction?",
    image: "https://preview.redd.it/my-new-kittens-reaction-to-his-first-toy-v0-ype94n6ruz0c1.jpg?width=1080&crop=smart&auto=webp&s=f018eb20ae79c262edb2c19561ed445589f965bf",
    options: [
      { text: "Immediately pounce and play with it", traits: { playful: 2, energetic: 1 } },
      { text: "Carefully inspect it from a distance", traits: { cautious: 2, intelligent: 1 } },
      { text: "Ignore it completely", traits: { aloof: 2, independent: 1 } },
      { text: "Wait for your human to play with you", traits: { social: 2, attention: 1 } }
    ]
  },
  {
    id: 3,
    text: "It's dinner time! What's your style?",
    image: "https://static.displate.com/270x380/displate/2024-01-29/4c6f5983adbb495fb4cf851fd6162d7e_af5953f4cf060bd542770e6ff556d8aa.jpg",
    options: [
      { text: "Meow loudly until food appears", traits: { demanding: 2, vocal: 1 } },
      { text: "Wait patiently by your bowl", traits: { gentle: 2, patient: 1 } },
      { text: "Try to steal food from the counter", traits: { mischievous: 2, clever: 1 } },
      { text: "Eat a little, save some for later", traits: { cautious: 2, practical: 1 } }
    ]
  },
  {
    id: 4,
    text: "A stranger visits your home. What do you do?",
    image: "https://d.newsweek.com/en/full/1978911/front-door.jpg",
    options: [
      { text: "Hide under the bed", traits: { shy: 2, cautious: 1 } },
      { text: "Greet them enthusiastically", traits: { social: 2, friendly: 1 } },
      { text: "Watch from a high perch", traits: { curious: 2, independent: 1 } },
      { text: "Demand pets immediately", traits: { attention: 2, confident: 1 } }
    ]
  },
  {
  id: 5,
  text: "A new cat has entered your territory. How do you respond?",
  image: "https://www.lifewithcats.tv/wp-content/uploads/2023/09/Territorial-Cats-About-to-Fight.jpg",
  options: [
    { text: "Hiss and keep your distance", traits: { independent: 1, mysterious: 2 } },
    { text: "Curiously sniff and approach", traits: { playful: 2, intelligent: 1 } },
    { text: "Indifferent, continue with your activities", traits: { independent: 3 } },
    { text: "Start playing with the new cat", traits: { social: 2, energetic: 1 } }
  ]
},
  {
    id: 6,
    text: "Your favorite toy is stuck under the couch. What's your next move?",
    image: "https://media.wired.com/photos/6616c08b630a7060d3bd0dfa/master/pass/Best-Cat-Toys-Gear-GettyImages-1456903581.jpg",
    options: [
      { text: "Paw relentlessly until you retrieve it", traits: { energetic: 2, clever: 1 } },
      { text: "Meow for help", traits: { vocal: 3 } },
      { text: "Move on to another toy", traits: { independent: 2, clever: 1 } },
      { text: "Wait and watch, hoping it comes out on its own", traits: { lazy: 2, comfort: 1 } }
    ]
  },
  {
    id: 7,
    text: "You hear a loud noise outside. How do you react?",
    image: "https://blog.nature.org/wp-content/uploads/2022/03/4252913158_a1a6ccaf55_k-1.jpg?w=1024",
    options: [
      { text: "Instantly hide", traits: { gentle: 2, independent: 1 } },
      { text: "Look out the window to investigate", traits: { adventurous: 1, intelligent: 2 } },
      { text: "Unbothered, continue sleeping", traits: { lazy: 2, comfort: 1 } },
      { text: "Run to your human for protection", traits: { social: 2, gentle: 1 } }
    ]
  },
  {
    id: 8,
    text: "It's grooming time. What is your approach?",
    image: "https://image.petmd.com/files/styles/863x625/public/2025-01/cat-overgrooming.jpg",
    options: [
      { text: "Thoroughly clean every inch", traits: { gentle: 2, comfort: 1 } },
      { text: "Quick wash and done", traits: { lazy: 2, comfort: 1 } },
      { text: "Ignore grooming, it's playtime instead", traits: { energetic: 2, playful: 1 } },
      { text: "Let your human help with grooming", traits: { social: 2, gentle: 1 } }
    ]
  },
  {
    id: 9,
    text: "You've found a sunny spot. How long will you stay there?",
    image: "https://legacyturffarms.com/wp-content/uploads/2022/06/grass-growing-under-a-sunet.jpg",
    options: [
      { text: "All day, if undisturbed", traits: { lazy: 3 } },
      { text: "A few minutes, then it's adventure time", traits: { energetic: 2, adventurous: 1 } },
      { text: "Until something more interesting catches your eye", traits: { curious: 2, intelligent: 1 } },
      { text: "Rotate between sunny spots and shade", traits: { independent: 2, clever: 1 } }
    ]
  },
  {
    id: 10,
    text: "There's an open window with a screen. What do you do?",
    image: "https://blog.newanglebeveling.com/hubfs/Window%20screens.jpg",
    options: [
      { text: "Sit and watch the world outside", traits: { curious: 2, intelligent: 1 } },
      { text: "Try to claw through the screen", traits: { mischievous: 1, adventurous: 2 } },
      { text: "Ignore it, there are better things to do inside", traits: { independent: 3 } },
      { text: "Meow to go outside", traits: { vocal: 2, social: 1 } }
    ]
  },
  {
    id: 11,
    text: "You're left alone at home. What's your plan?",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNy9XAGmiMsrS-d63ZCMbJrWyH2tyl55JqjgcWN7hD9SUxNTfImt03m2N0KeMx9jHkDR9qRCjjv-vj9JCQjqvhiYN9-gGYe_IVodeHGVtokpI1UOIXFbdry1uiVX6nRyo_Wmo_twL1G0uz/s1600/zze.jpg",
    options: [
      { text: "Sleep in your favorite hidden spot", traits: { lazy: 2, comfort: 1 } },
      { text: "Explore areas you usually can't", traits: { adventurous: 2, curious: 1 } },
      { text: "Knock things off to see if anyone notices", traits: { mischievous: 2, playful: 1 } },
      { text: "Wait by the door for your human to return", traits: { social: 2, gentle: 1 } }
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
        <div className="flex justify-center mb-6">
          <img
            src={currentQuestion.image}
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
            alt="Question"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="w-1/2">
              <Button
                variant="outlined"
                className="w-full p-4 text-left"
                onClick={() => onAnswer(option.traits)}
              >
                {option.text}
              </Button>
            </div>
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
