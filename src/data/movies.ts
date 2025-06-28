import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'The Crown',
  description: 'A biographical drama about the reign of Queen Elizabeth II, exploring the personal and political challenges faced by the British monarchy.',
  genre: ['Drama', 'Biography', 'History'],
  year: 2016,
  rating: 'TV-MA',
  duration: '58m',
  thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
  backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=1200',
  videoUrl: '/videos/crown-trailer.mp4',
  trailerUrl: '/videos/crown-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'Stranger Things',
    description: 'A group of young friends in Hawkins, Indiana, encounter supernatural forces and government conspiracies.',
    genre: ['Sci-Fi', 'Horror', 'Drama'],
    year: 2016,
    rating: 'TV-14',
    duration: '51m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/stranger-things.mp4',
    trailerUrl: '/videos/stranger-things-trailer.mp4',
    likes: 2100
  },
  {
    id: 'movie-2',
    title: 'The Witcher',
    description: 'Geralt of Rivia, a monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    genre: ['Fantasy', 'Action', 'Adventure'],
    year: 2019,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/witcher.mp4',
    trailerUrl: '/videos/witcher-trailer.mp4',
    likes: 1850
  },
  {
    id: 'movie-3',
    title: 'Money Heist',
    description: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history.',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2017,
    rating: 'TV-MA',
    duration: '70m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/money-heist.mp4',
    trailerUrl: '/videos/money-heist-trailer.mp4',
    likes: 2300
  },
  {
    id: 'movie-4',
    title: 'Dark',
    description: 'A family saga with a supernatural twist, set in a German town where the disappearance of children exposes relationships.',
    genre: ['Sci-Fi', 'Mystery', 'Drama'],
    year: 2017,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/dark.mp4',
    trailerUrl: '/videos/dark-trailer.mp4',
    likes: 1950
  },
  {
    id: 'movie-5',
    title: 'Bridgerton',
    description: 'The romantic lives of the Bridgerton family during London\'s competitive social season.',
    genre: ['Romance', 'Drama', 'Period'],
    year: 2020,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/bridgerton.mp4',
    trailerUrl: '/videos/bridgerton-trailer.mp4',
    likes: 1750
  },
  {
    id: 'movie-6',
    title: 'Ozark',
    description: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money.',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2017,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/ozark.mp4',
    trailerUrl: '/videos/ozark-trailer.mp4',
    likes: 2050
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'Wednesday',
        description: 'Wednesday Addams navigates her years as a student at Nevermore Academy.',
        genre: ['Comedy', 'Horror', 'Mystery'],
        year: 2022,
        rating: 'TV-14',
        duration: '50m',
        thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/wednesday.mp4',
        trailerUrl: '/videos/wednesday-trailer.mp4',
        likes: 1800
      },
      {
        id: 'trending-2',
        title: 'Glass Onion',
        description: 'Detective Benoit Blanc travels to Greece to peel back the layers of a mystery.',
        genre: ['Mystery', 'Comedy', 'Crime'],
        year: 2022,
        rating: 'PG-13',
        duration: '139m',
        thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/glass-onion.mp4',
        trailerUrl: '/videos/glass-onion-trailer.mp4',
        likes: 1650
      },
      {
        id: 'trending-3',
        title: 'The Watcher',
        description: 'A family moves into their dream home, only to be plagued by ominous letters.',
        genre: ['Drama', 'Mystery', 'Thriller'],
        year: 2022,
        rating: 'TV-MA',
        duration: '60m',
        thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/watcher.mp4',
        trailerUrl: '/videos/watcher-trailer.mp4',
        likes: 1400
      },
      {
        id: 'trending-4',
        title: 'Dahmer',
        description: 'The story of one of America\'s most notorious serial killers.',
        genre: ['Crime', 'Drama', 'Biography'],
        year: 2022,
        rating: 'TV-MA',
        duration: '60m',
        thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/dahmer.mp4',
        trailerUrl: '/videos/dahmer-trailer.mp4',
        likes: 1550
      },
      {
        id: 'trending-5',
        title: 'The Midnight Club',
        description: 'At a hospice for terminally ill young adults, eight patients come together.',
        genre: ['Horror', 'Mystery', 'Drama'],
        year: 2022,
        rating: 'TV-MA',
        duration: '60m',
        thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/midnight-club.mp4',
        trailerUrl: '/videos/midnight-club-trailer.mp4',
        likes: 1200
      }
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Automation',
    movies: [
      {
        id: 'ai-1',
        title: 'AI Brain Interface',
        description: 'Explore the future of human-AI interaction through advanced neural interfaces.',
        genre: ['Technology', 'Innovation', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '45m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ai-brain.mp4',
        trailerUrl: '/videos/ai-brain-trailer.mp4',
        likes: 890
      },
      {
        id: 'ai-2',
        title: 'Visual Builder Platform',
        description: 'Revolutionary import and export capabilities for modern development workflows.',
        genre: ['Technology', 'Development', 'Tools'],
        year: 2024,
        rating: 'PG',
        duration: '38m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/visual-builder.mp4',
        trailerUrl: '/videos/visual-builder-trailer.mp4',
        likes: 750
      },
      {
        id: 'ai-3',
        title: 'Trending Prompt Chains',
        description: 'Discover the most popular AI prompt chains and automation workflows.',
        genre: ['AI', 'Automation', 'Productivity'],
        year: 2024,
        rating: 'PG',
        duration: '42m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/prompt-chains.mp4',
        trailerUrl: '/videos/prompt-chains-trailer.mp4',
        likes: 1120
      },
      {
        id: 'ai-4',
        title: 'Dynamic Analytics Dashboard',
        description: 'Advanced analytics with gold coin stacks and performance metrics visualization.',
        genre: ['Analytics', 'Business', 'Data'],
        year: 2024,
        rating: 'PG',
        duration: '35m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: '/videos/analytics.mp4',
        trailerUrl: '/videos/analytics-trailer.mp4',
        likes: 680
      },
      {
        id: 'ai-5',
        title: 'Text Prompt Builder',
        description: 'Semi-transparent interface for building and managing AI text prompts.',
        genre: ['AI', 'Text Processing', 'Tools'],
        year: 2024,
        rating: 'PG',
        duration: '40m',
        thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        videoUrl: '/videos/text-prompt.mp4',
        trailerUrl: '/videos/text-prompt-trailer.mp4',
        likes: 920
      }
    ]
  },
  {
    id: 'action',
    title: 'Action & Adventure',
    movies: [
      {
        id: 'action-1',
        title: 'Extraction',
        description: 'A black-market mercenary has nothing to lose when his skills are solicited to rescue the kidnapped son of an imprisoned international crime lord.',
        genre: ['Action', 'Thriller'],
        year: 2020,
        rating: 'R',
        duration: '116m',
        thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/extraction.mp4',
        trailerUrl: '/videos/extraction-trailer.mp4',
        likes: 1900
      },
      {
        id: 'action-2',
        title: 'The Old Guard',
        description: 'A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret.',
        genre: ['Action', 'Fantasy'],
        year: 2020,
        rating: 'R',
        duration: '125m',
        thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/old-guard.mp4',
        trailerUrl: '/videos/old-guard-trailer.mp4',
        likes: 1650
      },
      {
        id: 'action-3',
        title: 'Red Notice',
        description: 'An Interpol agent tracks the world\'s most wanted art thief.',
        genre: ['Action', 'Comedy', 'Crime'],
        year: 2021,
        rating: 'PG-13',
        duration: '118m',
        thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/red-notice.mp4',
        trailerUrl: '/videos/red-notice-trailer.mp4',
        likes: 1800
      },
      {
        id: 'action-4',
        title: '6 Underground',
        description: 'Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.',
        genre: ['Action', 'Thriller'],
        year: 2019,
        rating: 'R',
        duration: '128m',
        thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/6-underground.mp4',
        trailerUrl: '/videos/6-underground-trailer.mp4',
        likes: 1550
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