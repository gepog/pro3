import { useState, useCallback } from 'react';
import { Movie } from '../types';

export interface CarouselData {
  id: string;
  title: string;
  movies: Movie[];
}

export const useCarouselState = (initialCarousels: CarouselData[]) => {
  const [carousels, setCarousels] = useState<CarouselData[]>(initialCarousels);

  const updateMovieImage = useCallback((carouselId: string, movieIndex: number, newImageUrl: string) => {
    console.log('useCarouselState: Updating image for carousel:', carouselId, 'index:', movieIndex);
    setCarousels(prev =>
      prev.map(carousel =>
        carousel.id === carouselId
          ? {
              ...carousel,
              movies: carousel.movies.map((movie, index) =>
                index === movieIndex
                  ? { ...movie, thumbnail: newImageUrl }
                  : movie
              ),
            }
          : carousel
      )
    );
  }, []);

  const updateMovieBackdrop = useCallback((carouselId: string, movieIndex: number, newBackdropUrl: string) => {
    setCarousels(prev =>
      prev.map(carousel =>
        carousel.id === carouselId
          ? {
              ...carousel,
              movies: carousel.movies.map((movie, index) =>
                index === movieIndex
                  ? { ...movie, backdrop: newBackdropUrl }
                  : movie
              ),
            }
          : carousel
      )
    );
  }, []);

  const updateMovieData = useCallback((carouselId: string, movieIndex: number, updatedMovie: Partial<Movie>) => {
    setCarousels(prev =>
      prev.map(carousel =>
        carousel.id === carouselId
          ? {
              ...carousel,
              movies: carousel.movies.map((movie, index) =>
                index === movieIndex
                  ? { ...movie, ...updatedMovie }
                  : movie
              ),
            }
          : carousel
      )
    );
  }, []);

  const getCarousel = useCallback((carouselId: string) => {
    return carousels.find(carousel => carousel.id === carouselId);
  }, [carousels]);

  return {
    carousels,
    updateMovieImage,
    updateMovieBackdrop,
    updateMovieData,
    getCarousel,
  };
};