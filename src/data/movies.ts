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
    id: 'expo',
    title: 'Expo',
    movies: [
      {
        id: 'expo-1',
        title: 'Mobile Development Revolution',
        description: 'Discover how Expo is transforming mobile app development with React Native.',
        genre: ['Development', 'Mobile', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '45m',
        thumbnail: '/src/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
        backdrop: '/src/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
        videoUrl: '/videos/expo-mobile.mp4',
        trailerUrl: '/videos/expo-mobile-trailer.mp4',
        likes: 1234
      },
      {
        id: 'expo-2',
        title: 'Cross-Platform Excellence',
        description: 'Learn how to build amazing cross-platform applications with Expo tools.',
        genre: ['Development', 'Cross-Platform', 'React Native'],
        year: 2024,
        rating: 'PG',
        duration: '38m',
        thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/expo-cross-platform.mp4',
        trailerUrl: '/videos/expo-cross-platform-trailer.mp4',
        likes: 987
      },
      {
        id: 'expo-3',
        title: 'Expo Router Deep Dive',
        description: 'Master navigation in React Native apps with Expo Router.',
        genre: ['Development', 'Navigation', 'Tutorial'],
        year: 2024,
        rating: 'PG',
        duration: '52m',
        thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/expo-router.mp4',
        trailerUrl: '/videos/expo-router-trailer.mp4',
        likes: 756
      },
      {
        id: 'expo-4',
        title: 'EAS Build & Deploy',
        description: 'Streamline your app deployment process with Expo Application Services.',
        genre: ['Development', 'DevOps', 'Deployment'],
        year: 2024,
        rating: 'PG',
        duration: '41m',
        thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/expo-eas.mp4',
        trailerUrl: '/videos/expo-eas-trailer.mp4',
        likes: 1098
      },
      {
        id: 'expo-5',
        title: 'Expo SDK Features',
        description: 'Explore the powerful features and APIs available in the Expo SDK.',
        genre: ['Development', 'SDK', 'Features'],
        year: 2024,
        rating: 'PG',
        duration: '36m',
        thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/expo-sdk.mp4',
        trailerUrl: '/videos/expo-sdk-trailer.mp4',
        likes: 823
      }
    ]
  },
  {
    id: 'revenuecat',
    title: 'RevenueCat',
    movies: [
      {
        id: 'revenuecat-1',
        title: 'Subscription Management Mastery',
        description: 'Learn how RevenueCat simplifies in-app subscription management across platforms.',
        genre: ['Business', 'Monetization', 'SaaS'],
        year: 2024,
        rating: 'PG',
        duration: '43m',
        thumbnail: '/src/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
        backdrop: '/src/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
        videoUrl: '/videos/revenuecat-subscriptions.mp4',
        trailerUrl: '/videos/revenuecat-subscriptions-trailer.mp4',
        likes: 1456
      },
      {
        id: 'revenuecat-2',
        title: 'Analytics & Insights',
        description: 'Unlock powerful analytics to optimize your app\'s revenue performance.',
        genre: ['Analytics', 'Business Intelligence', 'Revenue'],
        year: 2024,
        rating: 'PG',
        duration: '39m',
        thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/revenuecat-analytics.mp4',
        trailerUrl: '/videos/revenuecat-analytics-trailer.mp4',
        likes: 1123
      },
      {
        id: 'revenuecat-3',
        title: 'Cross-Platform Revenue',
        description: 'Manage subscriptions seamlessly across iOS, Android, and web platforms.',
        genre: ['Cross-Platform', 'Revenue', 'Integration'],
        year: 2024,
        rating: 'PG',
        duration: '47m',
        thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/revenuecat-cross-platform.mp4',
        trailerUrl: '/videos/revenuecat-cross-platform-trailer.mp4',
        likes: 934
      },
      {
        id: 'revenuecat-4',
        title: 'Paywall Optimization',
        description: 'Design and test effective paywalls to maximize conversion rates.',
        genre: ['UX Design', 'Conversion', 'Monetization'],
        year: 2024,
        rating: 'PG',
        duration: '35m',
        thumbnail: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/revenuecat-paywall.mp4',
        trailerUrl: '/videos/revenuecat-paywall-trailer.mp4',
        likes: 1287
      },
      {
        id: 'revenuecat-5',
        title: 'Customer Lifecycle Management',
        description: 'Understand and optimize the complete customer journey from trial to retention.',
        genre: ['Customer Success', 'Retention', 'Lifecycle'],
        year: 2024,
        rating: 'PG',
        duration: '51m',
        thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/revenuecat-lifecycle.mp4',
        trailerUrl: '/videos/revenuecat-lifecycle-trailer.mp4',
        likes: 1065
      }
    ]
  },
  {
    id: 'tavus',
    title: 'Tavus',
    movies: [
      {
        id: 'tavus-1',
        title: 'AI Video Generation Revolution',
        description: 'Discover how Tavus is transforming video creation with AI-powered personalization.',
        genre: ['AI', 'Video', 'Automation'],
        year: 2024,
        rating: 'PG',
        duration: '42m',
        thumbnail: '/src/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
        backdrop: '/src/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
        videoUrl: '/videos/tavus-ai-video.mp4',
        trailerUrl: '/videos/tavus-ai-video-trailer.mp4',
        likes: 1567
      },
      {
        id: 'tavus-2',
        title: 'Personalized Video at Scale',
        description: 'Learn how to create thousands of personalized videos with a single recording.',
        genre: ['Personalization', 'Scale', 'Marketing'],
        year: 2024,
        rating: 'PG',
        duration: '38m',
        thumbnail: '/src/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
        backdrop: '/src/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
        videoUrl: '/videos/tavus-scale.mp4',
        trailerUrl: '/videos/tavus-scale-trailer.mp4',
        likes: 1234
      },
      {
        id: 'tavus-3',
        title: 'Video Funnel Builder',
        description: 'Build sophisticated video marketing funnels with drag-and-drop simplicity.',
        genre: ['Marketing', 'Funnel', 'Automation'],
        year: 2024,
        rating: 'PG',
        duration: '45m',
        thumbnail: '/src/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
        backdrop: '/src/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
        videoUrl: '/videos/tavus-funnel.mp4',
        trailerUrl: '/videos/tavus-funnel-trailer.mp4',
        likes: 1098
      },
      {
        id: 'tavus-4',
        title: 'Advanced Video Analytics',
        description: 'Track engagement and optimize your video campaigns with detailed analytics.',
        genre: ['Analytics', 'Video Marketing', 'Optimization'],
        year: 2024,
        rating: 'PG',
        duration: '33m',
        thumbnail: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: '/videos/tavus-analytics.mp4',
        trailerUrl: '/videos/tavus-analytics-trailer.mp4',
        likes: 876
      },
      {
        id: 'tavus-5',
        title: 'Integration Ecosystem',
        description: 'Connect Tavus with your existing tools and workflows for seamless automation.',
        genre: ['Integration', 'Workflow', 'Automation'],
        year: 2024,
        rating: 'PG',
        duration: '40m',
        thumbnail: '/src/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
        backdrop: '/src/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
        videoUrl: '/videos/tavus-integration.mp4',
        trailerUrl: '/videos/tavus-integration-trailer.mp4',
        likes: 1345
      }
    ]
  }
];

export const getMostLikedMovies = (allMovies: Movie[], limit: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, limit);
};