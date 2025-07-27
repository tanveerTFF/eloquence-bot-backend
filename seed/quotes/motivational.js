// seed/quotes/motivational.js

const motivationalQuotes = [
  // Art & Creativity
  {
    category: 'motivational',
    text: "Every child is an artist; the problem is staying an artist when you grow up.",
    author: "Pablo Picasso",
  },
  {
    category: 'motivational',
    text: "Don’t think about making art, just get it done.",
    author: "Andy Warhol",
  },
  {
    category: 'motivational',
    text: "Art is a collaboration between God and the artist, and the less the artist does the better.",
    author: "Andre Gide",
  },
  {
    category: 'motivational',
    text: "Every artist was first an amateur.",
    author: "Ralph Waldo Emerson",
  },
  {
    category: 'motivational',
    text: "I found I could say things with color and shapes that I couldn’t say any other way.",
    author: "Georgia O’Keeffe",
  },

  // Creativity
  {
    category: 'motivational',
    text: "Don’t think. Thinking is the enemy of creativity.",
    author: "Ray Bradbury",
  },
  {
    category: 'motivational',
    text: "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
    author: "Scott Adams",
  },
  {
    category: 'motivational',
    text: "The one thing that you have that nobody else has is you. So, write, draw, build, and live only as you can.",
    author: "Neil Gaiman",
  },
  {
    category: 'motivational',
    text: "To create one’s own world takes courage.",
    author: "Georgia O’Keeffe",
  },
  {
    category: 'motivational',
    text: "Whether you succeed or not is irrelevant. Making your unknown known is the important thing.",
    author: "Georgia O’Keeffe",
  },

  // Music & Artists
  {
    category: 'motivational',
    text: "If people take anything from my music, it should be motivation to know that anything is possible.",
    author: "Eminem",
  },
  {
    category: 'motivational',
    text: "One thing I have learned is that I am not the owner of my talent, I am the manager of it.",
    author: "Madonna",
  },
  {
    category: 'motivational',
    text: "If everything was perfect you would never learn and you would never grow.",
    author: "Beyonce",
  },
  {
    category: 'motivational',
    text: "If you want something so badly, go out and grab it. Just keep doing it.",
    author: "Ed Sheeran",
  },
  {
    category: 'motivational',
    text: "My songs are a reflection of how I think and feel. Artists have a responsibility before the masses.",
    author: "Shakira",
  },

  // Persistence
  {
    category: 'motivational',
    text: "Hard days are the best because that’s when champions are made.",
    author: "Gabby Douglas",
  },
  {
    category: 'motivational',
    text: "If it doesn’t challenge you, it won’t change you.",
    author: "Fred Devito",
  },
  {
    category: 'motivational',
    text: "Every champion was once a contender that refused to give up.",
    author: "Rocky Balboa",
  },
  {
    category: 'motivational',
    text: "You just can’t beat the person who never gives up.",
    author: "Babe Ruth",
  },
  {
    category: 'motivational',
    text: "The road to success runs uphill.",
    author: "Willie Davis",
  },

  // Sports & Winning
  {
    category: 'motivational',
    text: "If you want to be the best, do the things others aren’t willing to do.",
    author: "Michael Phelps",
  },
  {
    category: 'motivational',
    text: "Don’t measure yourself by what you’ve accomplished, but by what you could’ve.",
    author: "John Wooden",
  },
  {
    category: 'motivational',
    text: "Pain is temporary. If I quit, however, it lasts forever.",
    author: "Lance Armstrong",
  },
  {
    category: 'motivational',
    text: "You are never really playing an opponent. You are playing your own highest standards.",
    author: "Arthur Ashe",
  },
  {
    category: 'motivational',
    text: "Age is no barrier. It’s a limitation you put on your mind.",
    author: "Jackie Joyner-Kersee",
  },
  {
    category: 'motivational',
    text: "The difference between the impossible and the possible lies in determination.",
    author: "Usain Bolt",
  },
  {
    category: 'motivational',
    text: "To be the man, you have to beat the man.",
    author: "Ric Flair",
  },
  {
    category: 'motivational',
    text: "Champions keep playing until they get it right.",
    author: "Billie Jean King",
  },
  {
    category: 'motivational',
    text: "What do you do with a mistake: recognize it, admit it, learn from it, forget it.",
    author: "Dean Smith",
  },
  {
    category: 'motivational',
    text: "I’ve failed over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    category: 'motivational',
    text: "Heroes get remembered, but legends never die.",
    author: "Babe Ruth",
  },
  {
    category: 'motivational',
    text: "There may be people with more talent than you, but no one should outwork you.",
    author: "Derek Jeter",
  },
  {
    category: 'motivational',
    text: "An athlete cannot run with money in his pockets. He must run with hope in his heart.",
    author: "Emil Zatopek",
  },
  {
    category: 'motivational',
    text: "Gold medals aren’t really made of gold. They’re made of sweat, determination, and guts.",
    author: "Dan Gable",
  },
  {
    category: 'motivational',
    text: "Some people don’t like change, but you need to embrace change if the alternative is disaster.",
    author: "Elon Musk",
  },

  // Leadership & Change
  {
    category: 'motivational',
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    category: 'motivational',
    text: "Change will not come if we wait for some other person or some other time.",
    author: "Barack Obama",
  },
  {
    category: 'motivational',
    text: "If you’re walking down the right path and keep walking, eventually you’ll make progress.",
    author: "Barack Obama",
  },
  {
    category: 'motivational',
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    category: 'motivational',
    text: "You cannot escape the responsibility of tomorrow by evading it today.",
    author: "Abraham Lincoln",
  },
  {
    category: 'motivational',
    text: "Ninety-nine percent of failures come from people who make excuses.",
    author: "George Washington",
  },
  {
    category: 'motivational',
    text: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
  },
  {
    category: 'motivational',
    text: "Leadership is the capacity to translate vision into reality.",
    author: "Warren Bennis",
  },
  {
    category: 'motivational',
    text: "As we look ahead into the next century, leaders will be those who empower others.",
    author: "Bill Gates",
  },
  {
    category: 'motivational',
    text: "The greatest leader is not the one who does the greatest things, but the one who gets others to do them.",
    author: "Ronald Reagan",
  },

  // Learning
  {
    category: 'motivational',
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    category: 'motivational',
    text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X",
  },
  {
    category: 'motivational',
    text: "If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.",
    author: "Zig Ziglar",
  },
  {
    category: 'motivational',
    text: "The more you read, the more things you will know. The more you learn, the more places you'll go.",
    author: "Dr. Seuss",
  },
  {
    category: 'motivational',
    text: "Study hard what interests you in the most undisciplined, irreverent, and original manner possible.",
    author: "Richard Feynman",
  },
];

module.exports = motivationalQuotes;
