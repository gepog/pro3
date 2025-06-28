import { Movie, ContentRow } from '../types';

// Featured movie for the hero section
export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Hackathon News',
  description: 'Stay updated with the latest developments in AI hackathons and competitions worldwide.',
  genre: ['Technology', 'News'],
  year: 2024,
  rating: 'PG',
  duration: '45m',
  thumbnail: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  backdrop: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  videoUrl: '/videos/featured.mp4',
  trailerUrl: '/videos/featured-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

// Regular movies array
export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'The Digital Revolution',
    description: 'A comprehensive look at how technology is reshaping our world.',
    genre: ['Documentary', 'Technology'],
    year: 2023,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/digital-revolution.mp4',
    trailerUrl: '/videos/digital-revolution-trailer.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Future Cities',
    description: 'Exploring the urban landscapes of tomorrow.',
    genre: ['Documentary', 'Science'],
    year: 2023,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/future-cities.mp4',
    trailerUrl: '/videos/future-cities-trailer.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'Innovation Stories',
    description: 'Behind the scenes of groundbreaking innovations.',
    genre: ['Documentary', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/innovation-stories.mp4',
    trailerUrl: '/videos/innovation-stories-trailer.mp4',
    likes: 634
  },
  {
    id: 'movie-4',
    title: 'Startup Journey',
    description: 'The challenges and triumphs of building a startup.',
    genre: ['Documentary', 'Business'],
    year: 2023,
    rating: 'PG-13',
    duration: '2h 5m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/startup-journey.mp4',
    trailerUrl: '/videos/startup-journey-trailer.mp4',
    likes: 523
  },
  {
    id: 'movie-5',
    title: 'Code Masters',
    description: 'Meet the programmers changing the world.',
    genre: ['Documentary', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/code-masters.mp4',
    trailerUrl: '/videos/code-masters-trailer.mp4',
    likes: 445
  },
  {
    id: 'movie-6',
    title: 'AI Revolution',
    description: 'The impact of artificial intelligence on society.',
    genre: ['Documentary', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 20m',
    thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/ai-revolution.mp4',
    trailerUrl: '/videos/ai-revolution-trailer.mp4',
    likes: 1123
  }
];

// Content rows for different sections
export const contentRows: ContentRow[] = [
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: [
      {
        id: 'bolt-1',
        title: 'AI Interface Design',
        description: 'Exploring the future of AI-powered user interfaces and design systems.',
        genre: ['Technology', 'Design'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ai-interface.mp4',
        trailerUrl: '/videos/ai-interface-trailer.mp4',
        likes: 892
      },
      {
        id: 'bolt-2',
        title: 'Import & Integration',
        description: 'Seamless data import and system integration workflows.',
        genre: ['Technology', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/import-integration.mp4',
        trailerUrl: '/videos/import-integration-trailer.mp4',
        likes: 756
      },
      {
        id: 'bolt-3',
        title: 'Trending Dashboards',
        description: 'Modern dashboard design and trending prompt chains.',
        genre: ['Technology', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '2h 10m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/trending-dashboards.mp4',
        trailerUrl: '/videos/trending-dashboards-trailer.mp4',
        likes: 634
      },
      {
        id: 'bolt-4',
        title: 'Dynamic Analytics',
        description: 'Interactive analytics panels with key performance indicators.',
        genre: ['Technology', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 55m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: '/videos/dynamic-analytics.mp4',
        trailerUrl: '/videos/dynamic-analytics-trailer.mp4',
        likes: 523
      },
      {
        id: 'bolt-5',
        title: 'Text Processing UI',
        description: 'Advanced text processing and prompt engineering interfaces.',
        genre: ['Technology', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40m',
        thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_uvijqjytzy8ywizk7lrc_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_uvijqjytzy8ywizk7lrc_1.png',
        videoUrl: '/videos/text-processing.mp4',
        trailerUrl: '/videos/text-processing-trailer.mp4',
        likes: 445
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically
  }
];

// Helper function to get most liked movies
export const getMostLikedMovies = (allMovies: Movie[], limit: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, limit);
};