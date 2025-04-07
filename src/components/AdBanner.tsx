
import React from 'react';

interface AdBannerProps {
  className?: string;
  isSquare?: boolean;
}

const AdBanner: React.FC<AdBannerProps> = ({ className = '', isSquare = false }) => {
  return (
    <div className={`bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center ${isSquare ? 'aspect-square' : 'h-24 md:h-20'} ${className}`}>
      <div className="text-center">
        <p className="text-gray-500 text-sm">Advertisement</p>
        <p className="text-xs text-gray-400">{isSquare ? '300 x 300' : '728 x 90'}</p>
      </div>
    </div>
  );
};

export default AdBanner;
