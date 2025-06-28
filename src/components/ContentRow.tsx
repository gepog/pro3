import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus, Info, X, Edit } from 'lucide-react';
import { Movie } from '../types';
import { ImageSubstitution } from './ImageSubstitution';

interface ContentRowProps {
  carouselId: string;
  title: string;
  movies: Movie[];
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
  onUpdateMovieImage?: (carouselId: string, movieIndex: number, newImageUrl: string) => void;
  onUpdateMovieData?: (carouselId: string, movieIndex: number, updatedMovie: Partial<Movie>) => void;
  isMyListRow?: boolean;
  myList?: string[];
}

export const ContentRow: React.FC<ContentRowProps> = ({
  carouselId,
  title,
  movies,
  onPlay,
  onAddToList,
  onMoreInfo,
  onUpdateMovieImage,
  onUpdateMovieData,
  isMyListRow = false,
  myList = [],
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredMovie, setHoveredMovie] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showImageSubstitution, setShowImageSubstitution] = useState<{
    movieIndex: number;
    currentImageUrl: string;
  } | null>(null);

  const handleImageError = (movieIndex: number) => {
    // Fallback to a default image if the current one fails to load
    const fallbackImage = 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400';
    onUpdateMovieImage?.(carouselId, movieIndex, fallbackImage);
  };

  const handleImageUpdate = (movieIndex: number, newImageUrl: string) => {
    console.log('Updating image for carousel:', carouselId, 'movie index:', movieIndex, 'new URL:', newImageUrl);
    onUpdateMovieImage?.(carouselId, movieIndex, newImageUrl);
  };

  const handleEditImage = (movieIndex: number, currentImageUrl: string) => {
    console.log('Opening image editor for carousel:', carouselId, 'movie index:', movieIndex);
    setShowImageSubstitution({
      movieIndex,
      currentImageUrl,
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 400;
    const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <div className="px-4 md:px-8 mb-1">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-0.5">{title}</h2>
      
      <div className="relative group">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white p-2 rounded-r-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ backgroundColor: 'rgba(8, 25, 50, 0.8)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#081932'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(8, 25, 50, 0.8)'}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white p-2 rounded-l-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ backgroundColor: 'rgba(8, 25, 50, 0.8)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#081932'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(8, 25, 50, 0.8)'}
          >
            <ChevronRight size={24} />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex space-x-4 overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth py-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie, index) => {
            const isInMyList = myList.includes(movie.id);
            const isHovered = hoveredMovie === movie.id;
            const isFirstItem = index === 0;
            const isLastItem = index === movies.length - 1;
            
            return (
              <div
                key={movie.id}
                className={`relative flex-shrink-0 w-48 md:w-64 cursor-pointer transition-all duration-300 ${
                  isHovered 
                    ? `z-30 ${isFirstItem ? 'origin-left' : isLastItem ? 'origin-right' : 'origin-center'} scale-125` 
                    : 'z-10'
                }`}
                onMouseEnter={() => {
                  setHoveredMovie(movie.id);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredMovie(null);
                  setHoveredIndex(null);
                }}
                onClick={() => onMoreInfo(movie)}
              >
                <div className="relative overflow-hidden rounded-md transition-all duration-300 group/image">
                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="w-full h-36 md:h-48 object-cover"
                    onError={() => handleImageError(index)}
                    data-carousel-id={carouselId}
                    data-movie-index={index}
                  />
                  
                  {/* Edit Image Button */}
                  {isHovered && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditImage(index, movie.thumbnail);
                      }}
                      className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-full opacity-0 group-hover/image:opacity-100 transition-all duration-200 hover:bg-black/80"
                      title="Edit Image"
                    >
                      <Edit size={14} />
                    </button>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} style={{ background: 'linear-gradient(to top, rgba(8, 25, 50, 0.9), rgba(8, 25, 50, 0.2), transparent)' }} />
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 transition-all duration-300 ${
                    isHovered 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}>
                    <h3 className="text-white font-semibold text-sm md:text-base mb-2 line-clamp-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}>
                      {movie.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-3 text-xs md:text-sm">
                      {movie.likes !== undefined && movie.likes > 0 && (
                        <div className="flex items-center space-x-1">
                          <span style={{ color: '#ddb870' }}>♥</span>
                          <span className="text-white/80">{movie.likes}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 md:space-x-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlay(movie);
                        }}
                        className="bg-white text-black p-2 md:p-2.5 rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-110 shadow-lg"
                      >
                        <Play size={16} fill="currentColor" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToList(movie);
                        }}
                        className={`p-2 md:p-2.5 rounded-full transition-all duration-200 group/button hover:scale-110 shadow-lg ${
                          isMyListRow 
                            ? 'text-white'
                            : isInMyList
                              ? 'bg-gray-700/80 text-white'
                              : 'bg-gray-700/80 text-white'
                        }`}
                        style={{
                          backgroundColor: isMyListRow 
                            ? 'rgba(239, 68, 68, 0.8)' 
                            : isInMyList
                              ? 'rgba(239, 68, 68, 0.8)'
                              : 'rgba(221, 184, 112, 0.8)'
                        }}
                        onMouseEnter={(e) => {
                          if (isMyListRow) {
                            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 1)';
                          } else if (isInMyList) {
                            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 1)';
                          } else {
                            e.currentTarget.style.backgroundColor = 'rgba(221, 184, 112, 1)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (isMyListRow) {
                            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.8)';
                          } else if (isInMyList) {
                            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.8)';
                          } else {
                            e.currentTarget.style.backgroundColor = 'rgba(221, 184, 112, 0.8)';
                          }
                        }}
                      >
                        {isMyListRow ? (
                          <X size={16} />
                        ) : isInMyList ? (
                          <X size={16} />
                        ) : (
                          <Plus size={16} />
                        )}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onMoreInfo(movie);
                        }}
                        className="bg-gray-700/80 text-white p-2 md:p-2.5 rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110 shadow-lg"
                      >
                        <Info size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Substitution Modal */}
        {showImageSubstitution && (
          <ImageSubstitution
            carouselId={carouselId}
            movieIndex={showImageSubstitution.movieIndex}
            currentImageUrl={showImageSubstitution.currentImageUrl}
            onImageUpdate={onUpdateMovieImage || (() => {})}
            onClose={() => setShowImageSubstitution(null)}
          />
        )}
      </div>
    </div>
  );
};