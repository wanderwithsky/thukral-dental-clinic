export interface VideoTopic {
  id: string;
  title: string;
  description: string;
  category: string;
  number?: string;
  videoUrl: string; // Cloudinary video file (.mp4)
  posterUrl?: string; // Optional custom thumbnail
  instagramUrl?: string; // Official Instagram Reel URL if available
  duration?: string; // e.g. "Reel" or "0:45"
  publishedDate?: string;
}

export const INITIAL_EDUCATIONAL_VIDEOS: VideoTopic[] = [
  {
    id: 'everyday-oral-health',
    number: '01 / 06',
    title: 'What Your Mouth Can Tell You About Your Health',
    description: 'Learn why your teeth, gums, tongue, and everyday oral health deserve attention.',
    category: 'Oral Hygiene',
    duration: 'Reel',
    videoUrl: 'https://res.cloudinary.com/zvlxacfu/video/upload/v1793009716/Your_teeth_gums_tongue_and_overall_oral_health_can_sometimes_give_important_clues_about_what_s.mp4',
    posterUrl: '',
    instagramUrl: 'https://www.instagram.com/thukraldentalclinic/',
    publishedDate: 'Educational Series',
  },
  {
    id: 'science-behind-braces',
    number: '02 / 06',
    title: 'The Science Behind Braces',
    description: 'Discover how braces work and how orthodontic treatment gradually guides teeth into alignment.',
    category: 'Braces & Orthodontics',
    duration: 'Reel',
    videoUrl: 'https://res.cloudinary.com/zvlxacfu/video/upload/v1793010610/Braces_sirf_teeth_par_lagne_wale_brackets_nahi_hain_Inke_peeche_ek_amazing_science_kaam_kart.mp4',
    posterUrl: '',
    instagramUrl: 'https://www.instagram.com/thukraldentalclinic/',
    publishedDate: 'Educational Series',
  },
  {
    id: 'understanding-braces-treatment',
    number: '03 / 06',
    title: 'What to Know Before Starting Braces',
    description: 'Understand the treatment process and why orthodontic care requires proper planning and follow-up.',
    category: 'Braces & Orthodontics',
    duration: 'Reel',
    videoUrl: 'https://res.cloudinary.com/zvlxacfu/video/upload/v1793009767/Braces_can_bring_incredible_results_but_its_crucial_to_understand_the_process_Discover_the_ba.mp4',
    posterUrl: '',
    instagramUrl: 'https://www.instagram.com/thukraldentalclinic/',
    publishedDate: 'Educational Series',
  },
  {
    id: 'understanding-cbct-scans',
    number: '04 / 06',
    title: 'What Does a CBCT Scan Reveal?',
    description: 'Learn how CBCT imaging helps clinicians evaluate bone dimensions, bone density-related information, and important anatomical structures.',
    category: 'Dental Technology',
    duration: 'Reel',
    videoUrl: 'https://res.cloudinary.com/zvlxacfu/video/upload/v1793009591/CBCT_helps_us_evaluate-_Bone_height_and_width_Bone_density-related_information_Important_stru.mp4',
    posterUrl: '',
    instagramUrl: 'https://www.instagram.com/thukraldentalclinic/',
    publishedDate: 'Educational Series',
  },
  {
    id: 'why-dental-hygiene-comes-first',
    number: '05 / 06',
    title: 'Why Dental Hygiene Comes First',
    description: 'Understand why hygiene, cleanliness, and appropriate infection-control practices matter in a dental care environment.',
    category: 'Oral Hygiene',
    duration: 'Reel',
    videoUrl: 'https://res.cloudinary.com/zvlxacfu/video/upload/v1793091809/Aapke_Smile_se_pehle_hum_Hygiene_ko_priority_dete_hain_Kya_aap_jaante_hain_Har_dental_inst.mp4',
    posterUrl: '',
    instagramUrl: 'https://www.instagram.com/thukraldentalclinic/',
    publishedDate: 'Educational Series',
  },
  {
    id: 'everyday-brushing-habits',
    number: '06 / 06',
    title: 'Are You Making These Brushing Mistakes?',
    description: 'Explore common excuses for skipping brushing and learn why consistent daily oral hygiene matters.',
    category: 'Oral Hygiene',
    duration: 'Reel',
    videoUrl: 'https://res.cloudinary.com/zvlxacfu/video/upload/v1793091972/Agar_aap_bhi_roz_ye_excuse_dete_hain..._toh_ye_video_zaroor_dekhiye_Hum_aksar_brushing_kar.mp4',
    posterUrl: '',
    instagramUrl: 'https://www.instagram.com/thukraldentalclinic/',
    publishedDate: 'Educational Series',
  },
];

export const EDUCATION_CATEGORIES = [
  'All Topics',
  'Oral Hygiene',
  'Braces & Orthodontics',
  'Dental Technology',
  'Clear Aligners',
  'Smile Aesthetics',
  'Dental FAQs',
] as const;
