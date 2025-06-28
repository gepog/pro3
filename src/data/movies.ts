import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Hackathon News',
  description: 'Stay updated with the latest developments in AI hackathons, innovative projects, and breakthrough technologies shaping the future.',
  genre: ['Technology', 'Innovation', 'AI'],
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

export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'AI Interface Design',
    description: 'Explore the cutting-edge world of AI-powered interface design and user experience innovation.',
    genre: ['Technology', 'Design', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '32m',
    thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    videoUrl: '/videos/ai-interface.mp4',
    trailerUrl: '/videos/ai-interface-trailer.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Visual Builder Revolution',
    description: 'Discover how visual builders are transforming the way we create and import digital content.',
    genre: ['Technology', 'Development', 'Tools'],
    year: 2024,
    rating: 'PG',
    duration: '28m',
    thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: '/videos/visual-builder.mp4',
    trailerUrl: '/videos/visual-builder-trailer.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'Trending Prompt Chains',
    description: 'Learn about the latest trends in AI prompt engineering and chain optimization techniques.',
    genre: ['AI', 'Education', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '35m',
    thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    videoUrl: '/videos/prompt-chains.mp4',
    trailerUrl: '/videos/prompt-chains-trailer.mp4',
    likes: 1034
  },
  {
    id: 'movie-4',
    title: 'Dynamic Analytics Dashboard',
    description: 'Explore advanced analytics dashboards featuring key performance indicators and data visualization.',
    genre: ['Analytics', 'Business', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '40m',
    thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: '/videos/analytics.mp4',
    trailerUrl: '/videos/analytics-trailer.mp4',
    likes: 923
  },
  {
    id: 'movie-5',
    title: 'Text-to-Media Transformation',
    description: 'Witness the future of content creation with AI-powered text-to-media conversion technology.',
    genre: ['AI', 'Content Creation', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '30m',
    thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    videoUrl: '/videos/text-to-media.mp4',
    trailerUrl: '/videos/text-to-media-trailer.mp4',
    likes: 1156
  },
  // Additional movies for other carousels
  {
    id: 'movie-6',
    title: 'The Digital Revolution',
    description: 'A comprehensive look at how digital transformation is reshaping industries worldwide.',
    genre: ['Documentary', 'Technology', 'Business'],
    year: 2023,
    rating: 'PG-13',
    duration: '95m',
    thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/digital-revolution.mp4',
    trailerUrl: '/videos/digital-revolution-trailer.mp4',
    likes: 2341
  },
  {
    id: 'movie-7',
    title: 'Cybersecurity Chronicles',
    description: 'An in-depth exploration of modern cybersecurity challenges and solutions.',
    genre: ['Technology', 'Security', 'Education'],
    year: 2023,
    rating: 'PG-13',
    duration: '78m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/cybersecurity.mp4',
    trailerUrl: '/videos/cybersecurity-trailer.mp4',
    likes: 1876
  },
  {
    id: 'movie-8',
    title: 'Innovation Labs',
    description: 'Take a behind-the-scenes look at the world\'s most innovative technology laboratories.',
    genre: ['Documentary', 'Science', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '52m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/innovation-labs.mp4',
    trailerUrl: '/videos/innovation-labs-trailer.mp4',
    likes: 1543
  },
  {
    id: 'movie-9',
    title: 'Future of Work',
    description: 'Exploring how technology is transforming the workplace and employment landscape.',
    genre: ['Documentary', 'Business', 'Future'],
    year: 2024,
    rating: 'PG',
    duration: '67m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/future-work.mp4',
    trailerUrl: '/videos/future-work-trailer.mp4',
    likes: 2087
  },
  {
    id: 'movie-10',
    title: 'Quantum Computing Explained',
    description: 'A beginner-friendly guide to understanding quantum computing and its potential applications.',
    genre: ['Education', 'Science', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '43m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '/videos/quantum-computing.mp4',
    trailerUrl: '/videos/quantum-computing-trailer.mp4',
    likes: 1654
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: [
      {
        id: 'bolt-1',
        title: 'AI Interface Design',
        description: 'Explore the cutting-edge world of AI-powered interface design and user experience innovation.',
        genre: ['Technology', 'Design', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '32m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ai-interface.mp4',
        trailerUrl: '/videos/ai-interface-trailer.mp4',
        likes: 892
      },
      {
        id: 'bolt-2',
        title: 'Visual Builder Revolution',
        description: 'Discover how visual builders are transforming the way we create and import digital content.',
        genre: ['Technology', 'Development', 'Tools'],
        year: 2024,
        rating: 'PG',
        duration: '28m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/visual-builder.mp4',
        trailerUrl: '/videos/visual-builder-trailer.mp4',
        likes: 756
      },
      {
        id: 'bolt-3',
        title: 'Trending Prompt Chains',
        description: 'Learn about the latest trends in AI prompt engineering and chain optimization techniques.',
        genre: ['AI', 'Education', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '35m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/prompt-chains.mp4',
        trailerUrl: '/videos/prompt-chains-trailer.mp4',
        likes: 1034
      },
      {
        id: 'bolt-4',
        title: 'Dynamic Analytics Dashboard',
        description: 'Explore advanced analytics dashboards featuring key performance indicators and data visualization.',
        genre: ['Analytics', 'Business', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '40m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: '/videos/analytics.mp4',
        trailerUrl: '/videos/analytics-trailer.mp4',
        likes: 923
      },
      {
        id: 'bolt-5',
        title: 'Text-to-Media Transformation',
        description: 'Witness the future of content creation with AI-powered text-to-media conversion technology.',
        genre: ['AI', 'Content Creation', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        videoUrl: '/videos/text-to-media.mp4',
        trailerUrl: '/videos/text-to-media-trailer.mp4',
        likes: 1156
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically
  },
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'The Digital Revolution',
        description: 'A comprehensive look at how digital transformation is reshaping industries worldwide.',
        genre: ['Documentary', 'Technology', 'Business'],
        year: 2023,
        rating: 'PG-13',
        duration: '95m',
        thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/digital-revolution.mp4',
        trailerUrl: '/videos/digital-revolution-trailer.mp4',
        likes: 2341
      },
      {
        id: 'trending-2',
        title: 'Cybersecurity Chronicles',
        description: 'An in-depth exploration of modern cybersecurity challenges and solutions.',
        genre: ['Technology', 'Security', 'Education'],
        year: 2023,
        rating: 'PG-13',
        duration: '78m',
        thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/cybersecurity.mp4',
        trailerUrl: '/videos/cybersecurity-trailer.mp4',
        likes: 1876
      },
      {
        id: 'trending-3',
        title: 'Innovation Labs',
        description: 'Take a behind-the-scenes look at the world\'s most innovative technology laboratories.',
        genre: ['Documentary', 'Science', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '52m',
        thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/innovation-labs.mp4',
        trailerUrl: '/videos/innovation-labs-trailer.mp4',
        likes: 1543
      },
      {
        id: 'trending-4',
        title: 'Future of Work',
        description: 'Exploring how technology is transforming the workplace and employment landscape.',
        genre: ['Documentary', 'Business', 'Future'],
        year: 2024,
        rating: 'PG',
        duration: '67m',
        thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/future-work.mp4',
        trailerUrl: '/videos/future-work-trailer.mp4',
        likes: 2087
      },
      {
        id: 'trending-5',
        title: 'Quantum Computing Explained',
        description: 'A beginner-friendly guide to understanding quantum computing and its potential applications.',
        genre: ['Education', 'Science', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '43m',
        thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/quantum-computing.mp4',
        trailerUrl: '/videos/quantum-computing-trailer.mp4',
        likes: 1654
      }
    ]
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: [
      {
        id: 'new-1',
        title: 'Machine Learning Mastery',
        description: 'Master the fundamentals of machine learning with practical examples and real-world applications.',
        genre: ['Education', 'AI', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '89m',
        thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/ml-mastery.mp4',
        trailerUrl: '/videos/ml-mastery-trailer.mp4',
        likes: 1432
      },
      {
        id: 'new-2',
        title: 'Blockchain Basics',
        description: 'Understanding blockchain technology and its applications beyond cryptocurrency.',
        genre: ['Technology', 'Finance', 'Education'],
        year: 2024,
        rating: 'PG',
        duration: '56m',
        thumbnail: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/blockchain.mp4',
        trailerUrl: '/videos/blockchain-trailer.mp4',
        likes: 987
      },
      {
        id: 'new-3',
        title: 'Cloud Computing Revolution',
        description: 'Explore how cloud computing is transforming business operations and scalability.',
        genre: ['Technology', 'Business', 'Cloud'],
        year: 2024,
        rating: 'PG',
        duration: '72m',
        thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/cloud-computing.mp4',
        trailerUrl: '/videos/cloud-computing-trailer.mp4',
        likes: 1765
      }
    ]
  }
];

export const getMostLikedMovies = (allMovies: Movie[], limit: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, limit);
};