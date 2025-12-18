import React from 'react';

const PageLoader: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent"></div>
        <p className="animate-pulse text-lg text-white font-semibold">
          Cargando...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
