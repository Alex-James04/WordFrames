'use client'

// Game Mode Card Component
const GameModeCard = ({ title, description, comingSoon = false, onClick }) => {
  return (
    <button
      onClick={!comingSoon ? onClick : undefined}
      disabled={comingSoon}
    >
      <div className="flex justify-center bg-red-200 items-start border-3 border-black rounded-2xl">
        <div>
          <h3 className="text-2xl font-bold my-2">{title}</h3>
          <p className="text-lg my-3">{description}</p>
        </div>
      </div>
    </button>
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
    <div className="rounded-lg bg-red-200 border-3 border-black h-full w-sm py-4">
      <h2 className="flex justify-center font-bold text-2xl mb-2">Your Stats</h2>
      <div className="flex flex-col">
        {stats.map((stat, index) => (
          <div key={index} className="text-lg py-1 px-7">
            <div className="flex justify-between text-lg px-4 py-2 bg-rose-100 rounded-lg">
              <span className="font-bold">{stat.label}</span>
              <span className="font-bold">{stat.value}</span>
            </div>
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
    <div className="rounded-lg bg-red-200 border-3 border-black h-full w-sm py-4">
      <h2 className="flex justify-center font-bold text-2xl mb-2">Daily Leaderboard</h2>
      <div className="flex flex-col">
        {leaderboard.map((player) => (
          <div key={player.rank} className="text-lg py-1 px-7">
            <div className="flex justify-between text-lg px-4 py-2 bg-rose-100 rounded-lg">
              <span className="font-bold">{player.rank}</span>
              <span className="font-bold">{player.name}</span>
              <span className="font-bold">{player.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
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
    <div>
      <h2 className="flex justify-center text-4xl font-bold mb-10">Game Modes</h2>
      <div className="flex flex-col space-y-8">
        <GameModeCard
          title="Daily"
          description="Play today's puzzle and compete globally"
          onClick={() => handleGameMode('daily')}
        />
        <GameModeCard
          title="Infinite"
          description="Endless random puzzles to practice"
          onClick={() => handleGameMode('infinite')}
        />
        <GameModeCard
          title="Online"
          description="Multiplayer mode to compete against friends"
          comingSoon={true}
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

      {/* Desktop Layout */}
      <div className="flex flex-row justify-evenly space-x-5">
        {/* Left Sidebar - Player Stats */}
        <div>
          <PlayerStats/>
        </div>
        
        {/* Center - Game Modes */}
        <div className="flex items-start justify-center">
          <div className="w-3xl">
            <GameModes/>
          </div>
        </div>
        
        {/* Right Sidebar - Leaderboard */}
        <div>
          <DailyLeaderboard/>
        </div>
      </div>

    </div>


  );
}