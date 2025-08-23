'use client'

// Game Description Component
const GameDescription = () => {
  return (
    <div className="space-y-4">
      <h1 className="flex justify-center text-3xl font-bold">
        How to Play
      </h1>
      <div className="flex flex-col bg-red-100 border-3 border-black rounded-4xl py-2 px-5 space-y-1">
        <p className="text-lg font-bold">
          Objective:
        </p>
        <ul className="mb-3">
          <li>
            - Create words using randomly given letters in a 5x5 grid.
          </li>
        </ul>
        <p className="text-lg font-bold">
          Gameplay:
        </p>
        <ul className="flex flex-col space-y-1">
          <li>
            - Click on empty grid spaces to place the current letter.
          </li>
          <li>
            - Form words of 2-5 letters horizontally (left to right) and vertically (top to bottom).
          </li>
          <li>
            - Words can share letters, and words can be within other words (i.e. "at" in "cat").
          </li>
          <li>
            - Points are scored as 1 point per letter in a completed word (2 points for a 2 letter word, 3 points for a 3 letter word, etc.).
          </li>
        </ul>
      </div>
    </div>
  );
};

// Player Stats Component
const PlayerStats = () => {
  const stats = [
    { label: 'Daily Score', value: '0' },
    { label: 'Daily High Score', value: '0' },
    { label: 'Daily Average Score', value: '0' },
    { label: 'Daily Peak Rank', value: '0' },
    { label: 'Daily Total Games', value: '0' },
    { label: 'Infinite Most Recent Score', value: '0' },
    { label: 'Infinite High Score', value: '0' },
    { label: 'Infinite Average Score', value: '0' },
    { label: 'Infinite Total Games', value: '0' },
    { label: 'Total Words Found', value: '0' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="flex justify-center text-3xl font-bold">Your Stats</h2>
      <div className="flex flex-col bg-red-100 border-3 border-black rounded-4xl py-3 px-8 space-y-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-row space-x-3">
            <span className="lex text-xl font-bold rounded-4xl w-full">{stat.label}</span>
            <span className="flex justify-center text-xl font-bold  bg-rose-50 rounded-4xl w-1/3">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Daily Leaderboard Component
const DailyLeaderboard = () => {
  const leaderboard = [
    { rank: 1, name: 'WordMaster', score: 100 },
    { rank: 2, name: 'PuzzlePro', score: 95 },
    { rank: 3, name: 'LetterLord', score: 90 },
    { rank: 4, name: 'GridGuru', score: 85 },
    { rank: 5, name: 'VocabVictory', score: 80 },
    { rank: 6, name: 'WordWizard', score: 75 },
    { rank: 7, name: 'FrameFinder', score: 70 },
    { rank: 8, name: 'CrosswordKing', score: 65 },
    { rank: 9, name: 'LetterLegend', score: 60 },
    { rank: 10, name: 'WordWarrior', score: 55 }
  ];

  return (
    <div className="space-y-4">
      <h2 className="flex justify-center text-3xl font-bold">Daily Leaderboard</h2>
      <div className="flex flex-col bg-red-100 border-3 border-black rounded-4xl py-3 px-8 space-y-2">
        <div className="flex flex-row space-x-3">
          <span className="text-xl font-bold w-1/6">Rank</span>
          <span className="flex justify-center text-xl font-bold w-full">Name</span>
          <span className="flex justify-center text-xl font-bold w-1/3">Score</span>
        </div>
        {leaderboard.map((player) => (
          <div key={player.rank} className="flex flex-row space-x-3">
            <span className="text-xl font-bold w-1/6">{player.rank}.</span>
            <span className="flex justify-center text-lg font-bold bg-rose-50 rounded-4xl w-full">{player.name}</span>
            <span className="flex justify-center text-lg font-bold  bg-rose-50 rounded-4xl w-1/3">{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Game Mode Card Component
const GameModeCard = ({ title, description, onClick }) => {
  return (
    <button onClick={onClick}>
      <div className="bg-red-300 border-3 border-black rounded-4xl py-2 space-y-1">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </button>
  );
};

// Game Modes Section
const GameModes = () => {
  const handleGameMode = (mode) => {
    console.log(`Starting ${mode} mode`);
    // Here you would typically use Next.js router to navigate
    // router.push(`/game/${mode}`)
  };

  return (
    <div className="flex flex-col justify-between space-y-4">
      <h2 className="flex justify-center text-3xl font-bold">Game Modes</h2>
      <div className="flex flex-col space-y-4">
        <GameModeCard
          title="Daily"
          description="Play today's puzzle and compete globally"
          onClick={() => handleGameMode('daily')}
        />
        <GameModeCard
          title="Infinite"
          description="Endless puzzles to play"
          onClick={() => handleGameMode('infinite')}
        />
        <GameModeCard
          title="Free Play"
          description="Explore board positions and scores"
          onClick={() => handleGameMode('freeplay')}
        />
      </div>
    </div>
  );
};

// Main Homepage Component
export default function HomePage() {
  return (
    <div>

      {/*Desktop Layout*/}
      <div className="hidden sm:flex">

        {/* Left Sidebar - Player Stats */}
        <div>
          <PlayerStats/>
        </div>

        {/* Center Top - Game Modes */}
        <div>
          <div>
            <GameModes/>
          </div>
        </div>

        {/* Center Bottom - Game Description */}
        <div>
          <GameDescription/>
        </div>
        
        {/* Right Sidebar - Leaderboard */}
        <div>
          <DailyLeaderboard/>
        </div>
      </div>


      {/*Mobile Layout*/}
      <div className="sm:hidden flex flex-col justify-between items-center px-6 pt-4 pb-6 space-y-8">

        {/* Game Modes */}
        <div className="w-full">
          <GameModes/>
        </div>

        {/* Leaderboard */}
        <div className="w-full">
          <DailyLeaderboard/>
        </div>

        {/* Player Stats */}
        <div className="w-full">
          <PlayerStats/>
        </div>

        {/* Game Description */}
        <div className="w-full">
          <GameDescription/>
        </div>
      </div>

    </div>
  );
}