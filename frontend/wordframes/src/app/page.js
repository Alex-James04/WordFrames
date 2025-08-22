'use client'

// Game Mode Card Component
const GameModeCard = ({ title, description, comingSoon = false, onClick }) => {
  return (
    <button
      onClick={!comingSoon ? onClick : undefined}
      disabled={comingSoon}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {comingSoon && (
          <span>
            Coming Soon
          </span>
        )}
      </div>
    </button>
  );
};

// Player Stats Component
const PlayerStats = () => {
  const stats = [
    { label: 'Games Played', value: '47' },
    { label: 'Average Score', value: '23.4' },
    { label: 'Best Score', value: '45' },
    { label: 'Current Streak', value: '3' },
    { label: 'Longest Streak', value: '12' },
    { label: 'Total Words Found', value: '342' },
    { label: 'Favorite Letter', value: 'E' },
    { label: 'Win Rate', value: '68%' }
  ];

  return (
    <div>
      <h2>Your Stats</h2>
      <div>
        {stats.map((stat, index) => (
          <div key={index}>
            <span>{stat.label}</span>
            <span>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Daily Leaderboard Component
const DailyLeaderboard = () => {
  const leaderboard = [
    { rank: 1, name: 'WordMaster', score: 0 },
    { rank: 2, name: 'PuzzlePro', score: 0 },
    { rank: 3, name: 'LetterLord', score: 0 },
    { rank: 4, name: 'GridGuru', score: 0 },
    { rank: 5, name: 'VocabVictory', score: 0 },
    { rank: 6, name: 'WordWizard', score: 0 },
    { rank: 7, name: 'FrameFinder', score: 0 },
    { rank: 8, name: 'CrosswordKing', score: 0 },
    { rank: 9, name: 'LetterLegend', score: 0 },
    { rank: 10, name: 'WordWarrior', score: 0 }
  ];

  const getRankClass = (rank) => {
    if (rank === 1) return 'rank-badge rank-1';
    if (rank === 2) return 'rank-badge rank-2';
    if (rank === 3) return 'rank-badge rank-3';
    return 'rank-badge rank-other';
  };

  return (
    <div>
      <h2>Daily Leaderboard</h2>
      <div>
        {leaderboard.map((player) => (
          <div key={player.rank}>
            <div>
              <span className={getRankClass(player.rank)}>
                {player.rank}
              </span>
              <span>{player.name}</span>
            </div>
            <span>{player.score}</span>
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
      <h2>Game Modes</h2>
      <div>
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
          description="Multiplayer matches with other players"
          comingSoon={true}
        />
        <GameModeCard
          title="Free Play"
          description="Custom games with your own settings"
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
      <div className="hidden md:block flex flex-cols">
        {/* Left Sidebar - Player Stats */}
        <div>
          <PlayerStats/>
        </div>
        
        {/* Center - Game Modes */}
        <div className="lg:col-span-6 flex items-start justify-center">
          <div className="w-full max-w-md">
            <GameModes/>
          </div>
        </div>
        
        {/* Right Sidebar - Leaderboard */}
        <div className="lg:col-span-3">
          <DailyLeaderboard/>
        </div>
      </div>


      {/* Mobile/Tablet Layout */}
      <div className="md:hidden">
        {/* Game Modes */}
        <GameModes/>
        
        {/* Daily Leaderboard */}
        <DailyLeaderboard/>
        
        {/* Player Stats */}
        <PlayerStats/>
      </div>

    </div>
  );
}