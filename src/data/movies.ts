export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string[];
  year: number;
  rating: string;
  duration: string;
  thumbnail: string;
  backdrop: string;
  videoUrl: string;
  trailerUrl: string;
  isFeatured?: boolean;
  isInMyList?: boolean;
  likes?: number;
}

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Hackathon News',
  description: 'Stay updated with the latest developments in artificial intelligence and hackathon events worldwide.',
  genre: ['Technology', 'News'],
  year: 2024,
  rating: 'PG',
  duration: '45m',
  thumbnail: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  backdrop: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'Tech Innovation Summit',
    description: 'Explore the latest breakthroughs in technology and innovation from leading experts.',
    genre: ['Technology', 'Documentary'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Digital Transformation',
    description: 'How businesses are adapting to the digital age and transforming their operations.',
    genre: ['Business', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'AI Revolution',
    description: 'The impact of artificial intelligence on society and the future of work.',
    genre: ['Technology', 'Science'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 30m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 1123
  },
  {
    id: 'movie-4',
    title: 'Startup Stories',
    description: 'Inspiring stories of entrepreneurs who changed the world with their innovations.',
    genre: ['Business', 'Documentary'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 634
  },
  {
    id: 'movie-5',
    title: 'Cybersecurity Chronicles',
    description: 'Understanding the importance of cybersecurity in our digital world.',
    genre: ['Technology', 'Thriller'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 10m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 987
  },
  {
    id: 'movie-6',
    title: 'Cloud Computing Future',
    description: 'The evolution of cloud computing and its impact on modern businesses.',
    genre: ['Technology', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    likes: 445
  }
];

export const contentRows = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: movies.slice(0, 6)
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Platforms',
    movies: [
      {
        id: 'ai-tool-1',
        title: 'AI Automation Dashboard',
        description: 'Advanced AI automation platform with intelligent workflow management and real-time analytics.',
        genre: ['AI', 'Automation', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 1456
      },
      {
        id: 'ai-tool-2',
        title: 'Visual Builder Import System',
        description: 'Intuitive visual builder with seamless import capabilities and drag-and-drop interface.',
        genre: ['Design', 'Development', 'Tools'],
        year: 2024,
        rating: 'PG',
        duration: '2h 15m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        likes: 1234
      },
      {
        id: 'ai-tool-3',
        title: 'Trending Prompt Chains Dashboard',
        description: 'Sleek dashboard interface highlighting trending AI prompt chains with golden accent highlights.',
        genre: ['AI', 'Analytics', 'Dashboard'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        likes: 987
      },
      {
        id: 'ai-tool-4',
        title: 'Machine Learning Pipeline',
        description: 'Comprehensive ML pipeline management with automated model training and deployment.',
        genre: ['AI', 'Machine Learning', 'Development'],
        year: 2024,
        rating: 'PG-13',
        duration: '2h 30m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        likes: 756
      },
      {
        id: 'ai-tool-5',
        title: 'Neural Network Visualizer',
        description: 'Interactive neural network visualization tool for understanding deep learning architectures.',
        genre: ['AI', 'Visualization', 'Education'],
        year: 2024,
        rating: 'PG',
        duration: '1h 20m',
        thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        likes: 623
      },
      {
        id: 'ai-tool-6',
        title: 'Data Analytics Suite',
        description: 'Powerful data analytics platform with AI-driven insights and predictive modeling.',
        genre: ['Analytics', 'AI', 'Business Intelligence'],
        year: 2024,
        rating: 'PG',
        duration: '2h 5m',
        thumbnail: 'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        likes: 834
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically
  },
  {
    id: 'tech-news',
    title: 'Tech News',
    movies: movies.slice(2, 8)
  },
  {
    id: 'innovation',
    title: 'Innovation Hub',
    movies: movies.slice(1, 7)
  }
];

export const getMostLikedMovies = (allMovies: Movie[]) => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 12);
};