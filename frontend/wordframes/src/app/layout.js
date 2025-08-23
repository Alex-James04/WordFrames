import './globals.css'

// Settings Button Component
const SettingsButton = () => {
  return (
    <button className="header-icon">
      <svg className="header-icon-symbol" fill="white" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>
  );
};

// Account Button Component
const AccountButton = () => {
  return (
    <button className="header-icon">
      <svg className="header-icon-symbol" fill="white" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </button>
  );
};

// Home Page Buttom Component
const HomeButton = () => {
  return (
    <button>
      <h1 className="text-4xl sm:text-5xl font-bold bg-black bg-clip-text">
        Word Frames
      </h1>
    </button>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col justify-between">

        {/* Header */}
        <header className="bg-red-50 border-b-3 border-black px-3 py-3 sm:px-8 sm:py-6">
          <div className="flex items-center justify-between">
            <SettingsButton/>
            <HomeButton/>
            <AccountButton />
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-center w-full mx-auto bg-red-100 border-t-3 border-black py-3">
          <div className="text-sm text-black">
            © 2024 Word Frames. All rights reserved.
            </div>
        </footer>

      </body>
    </html>
  )
}