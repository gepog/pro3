import { Movie, ContentRow } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: ['Action', 'Crime', 'Drama'],
    year: 2008,
    rating: 'PG-13',
    duration: '2h 32m',
    thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/dark-knight.mp4',
    trailerUrl: '/videos/dark-knight-trailer.mp4',
    likes: 1250
  },
  {
    id: '2',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    year: 2010,
    rating: 'PG-13',
    duration: '2h 28m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/inception.mp4',
    trailerUrl: '/videos/inception-trailer.mp4',
    likes: 980
  },
  {
    id: '3',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    year: 2014,
    rating: 'PG-13',
    duration: '2h 49m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/interstellar.mp4',
    trailerUrl: '/videos/interstellar-trailer.mp4',
    likes: 1100
  },
  {
    id: '4',
    title: 'The Matrix',
    description: 'A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
    genre: ['Action', 'Sci-Fi'],
    year: 1999,
    rating: 'R',
    duration: '2h 16m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/matrix.mp4',
    trailerUrl: '/videos/matrix-trailer.mp4',
    likes: 1350
  },
  {
    id: '5',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genre: ['Crime', 'Drama'],
    year: 1994,
    rating: 'R',
    duration: '2h 34m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/pulp-fiction.mp4',
    trailerUrl: '/videos/pulp-fiction-trailer.mp4',
    likes: 890
  },
  {
    id: '6',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genre: ['Drama'],
    year: 1994,
    rating: 'R',
    duration: '2h 22m',
    thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/shawshank.mp4',
    trailerUrl: '/videos/shawshank-trailer.mp4',
    likes: 1500
  }
];

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'HACK IT',
  description: 'Join the ultimate AI Hackathon where innovation meets competition. Experience cutting-edge technology and groundbreaking solutions.',
  genre: ['Technology', 'Innovation', 'Competition'],
  year: 2024,
  rating: 'PG',
  duration: '1h 45m',
  thumbnail: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  backdrop: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  videoUrl: '/videos/hack-it.mp4',
  trailerUrl: '/videos/hack-it-trailer.mp4',
  isFeatured: true,
  likes: 2100
};

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      movies[0], // The Dark Knight
      movies[1], // Inception
      movies[2], // Interstellar
      movies[3], // The Matrix
      movies[4], // Pulp Fiction
      movies[5], // The Shawshank Redemption
      {
        id: 'trending-7',
        title: 'Blade Runner 2049',
        description: 'A young blade runner\'s discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.',
        genre: ['Action', 'Drama', 'Mystery'],
        year: 2017,
        rating: 'R',
        duration: '2h 44m',
        thumbnail: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/blade-runner.mp4',
        trailerUrl: '/videos/blade-runner-trailer.mp4',
        likes: 750
      },
      {
        id: 'trending-8',
        title: 'Mad Max: Fury Road',
        description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        year: 2015,
        rating: 'R',
        duration: '2h 0m',
        thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/mad-max.mp4',
        trailerUrl: '/videos/mad-max-trailer.mp4',
        likes: 920
      }
    ]
  },
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: [
      {
        id: 'bolt-1',
        title: 'AI Innovation Hub',
        description: 'Explore the cutting-edge world of artificial intelligence and machine learning innovations that are shaping our future.',
        genre: ['Technology', 'AI', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ai-innovation.mp4',
        trailerUrl: '/videos/ai-innovation-trailer.mp4',
        likes: 1800
      },
      {
        id: 'bolt-2',
        title: 'Visual Builder Pro',
        description: 'Master the art of visual development with advanced UI/UX design tools and import capabilities.',
        genre: ['Design', 'Development', 'Tools'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/visual-builder.mp4',
        trailerUrl: '/videos/visual-builder-trailer.mp4',
        likes: 1650
      },
      {
        id: 'bolt-3',
        title: 'Trending Prompt Chains',
        description: 'Discover the most popular and effective prompt engineering techniques for modern AI applications.',
        genre: ['AI', 'Education', 'Trends'],
        year: 2024,
        rating: 'PG',
        duration: '2h 0m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/prompt-chains.mp4',
        trailerUrl: '/videos/prompt-chains-trailer.mp4',
        likes: 2200
      },
      {
        id: 'bolt-4',
        title: 'Dynamic Analytics Dashboard',
        description: 'Learn to build powerful analytics dashboards with real-time data visualization and key performance indicators.',
        genre: ['Analytics', 'Dashboard', 'Data'],
        year: 2024,
        rating: 'PG',
        duration: '1h 55m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: '/videos/analytics-dashboard.mp4',
        trailerUrl: '/videos/analytics-dashboard-trailer.mp4',
        likes: 1950
      },
      {
        id: 'bolt-5',
        title: 'Text-to-Media Transformation',
        description: 'Experience the revolutionary technology that converts text prompts into rich multimedia content.',
        genre: ['AI', 'Media', 'Transformation'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40m',
        thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        videoUrl: '/videos/text-to-media.mp4',
        trailerUrl: '/videos/text-to-media-trailer.mp4',
        likes: 1750
      }
    ]
  },
  {
    id: 'action',
    title: 'Action & Adventure',
    movies: [
      movies[0], // The Dark Knight
      movies[3], // The Matrix
      {
        id: 'action-3',
        title: 'John Wick',
        description: 'An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.',
        genre: ['Action', 'Crime', 'Thriller'],
        year: 2014,
        rating: 'R',
        duration: '1h 41m',
        thumbnail: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/john-wick.mp4',
        trailerUrl: '/videos/john-wick-trailer.mp4',
        likes: 1200
      },
      {
        id: 'action-4',
        title: 'Die Hard',
        description: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party.',
        genre: ['Action', 'Thriller'],
        year: 1988,
        rating: 'R',
        duration: '2h 12m',
        thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/die-hard.mp4',
        trailerUrl: '/videos/die-hard-trailer.mp4',
        likes: 850
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically based on likes
  }
];

export const getMostLikedMovies = (allMovies: Movie[], limit: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, limit);
};