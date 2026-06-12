export type TranslationKey =
    | 'title' | 'subtitle' | 'welcome' | 'start_adventure'
    | 'about_series' | 'high_quality' | 'high_quality_desc'
    | 'great_voice' | 'great_voice_desc' | 'mobile_friendly' | 'mobile_friendly_desc'
    | 'characters' | 'episodes' | 'all_episodes'
    | 'leonardo' | 'leonardo_desc'
    | 'raphael' | 'raphael_desc'
    | 'donatello' | 'donatello_desc'
    | 'michelangelo' | 'michelangelo_desc'
    | 'episode' | 'duration' | 'watch_now'
    | 'back_to_home' | 'add_to_favorites'
    | 'episode_1_title' | 'episode_1_desc'
    | 'episode_2_title' | 'episode_2_desc'
    | 'episode_3_title' | 'episode_3_desc'
    | 'episode_4_title' | 'episode_4_desc'
    | 'episode_5_title' | 'episode_5_desc'
    | 'episode_6_title' | 'episode_6_desc'
    | 'episode_7_title' | 'episode_7_desc'
    | 'episode_8_title' | 'episode_8_desc'
    | 'episode_9_title' | 'episode_9_desc'
    | 'episode_10_title' | 'episode_10_desc'
    | 'Designed_by' | 'season1_badge' | 'episodes_count' | 'minutes_count'
    | 'rating_label'
    | 'search_placeholder'
    | 'episodes_found'
    | 'no_episodes_found'
    | 'no_episodes_message'
    | 'more_episodes_title'
    | 'more_episodes_desc'
    | 'completed_label'
    | 'total_episodes_info';



export const translations = {
    fa: {
        title: 'لاک‌پشت‌های نینجا ۲۰۰۳',
        subtitle: 'بازگشت به روزهایی که برادران لاک‌پشتی قهرمان قلبمون بودن',
        welcome: 'خانه',
        start_adventure: 'شروع ماجراجویی',
        about_series: 'درباره',
        high_quality: 'کیفیت بالا',
        high_quality_desc: 'تمامی قسمت‌ها با بهترین کیفیت ممکن',
        great_voice: 'صداگذاری عالی',
        great_voice_desc: 'صداگذاری حرفه‌ای با بهترین گویندگان',
        mobile_friendly: 'سازگار با موبایل',
        mobile_friendly_desc: 'قابل مشاهده در تمامی دستگاه‌ها',
        characters: 'شخصیت‌ ها',
        episodes: 'قسمت‌ها',
        all_episodes: 'مشاهده همه قسمت‌ها',
        leonardo: 'لئوناردو',
        leonardo_desc: 'رهبر گروه و استاد شمشیرهای کاتانا',
        raphael: 'رافائل',
        raphael_desc: 'لاک‌پشت خشن و قدرتمند گروه',
        donatello: 'دوناتلو',
        donatello_desc: 'نابغه تکنولوژی گروه',
        michelangelo: 'مایکل‌آنجلو',
        michelangelo_desc: 'شوخ‌طبع و سرزنده گروه',
        episode: 'قسمت',
        duration: 'دقیقه',
        watch_now: 'تماشا کن',
        back_to_home: 'بازگشت به صفحه اصلی',
        add_to_favorites: 'افزودن به علاقه‌مندی‌ها',
        Designed_by: 'طراحی شده توسط',

        // اضافه برای قسمت‌ها
        'episode_1_title': 'ظهور لاک پشت ها - بخش اول',
        'episode_1_desc': 'داستان منشأ لاک پشت های نینجا و نحوه تبدیل شدن آنها به جنگجویان نینجا روایت می‌شود.',
        'episode_2_title': 'ظهور لاک پشت ها - بخش دوم',
        'episode_2_desc': 'لاک پشت ها با اولین مأموریت خود روبرو می‌شوند و با شردر آشنا می‌شوند.',
        'episode_3_title': 'تهدید موشکی',
        'episode_3_desc': 'دکتر باکستر استاکمن موشک‌های خطرناکی ساخته که به شهر حمله می‌کنند.',
        'episode_4_title': 'حمله به مخفیگاه',
        'episode_4_desc': 'کیسی جونز، شکارچی خلافکارها، وارد ماجرا می‌شود.',
        'episode_5_title': 'پاانگ برمی‌گردد',
        'episode_5_desc': 'یک موجود نانو تکنولوژی به نام نانو از کنترل خارج می‌شود.',
        'episode_6_title': 'مهمان ناخوانده',
        'episode_6_desc': 'شهر نیویورک در تاریکی فرو می‌رود.',
        'episode_7_title': 'بازگشت به گذشته',
        'episode_7_desc': 'لاک پشت ها با تکنیک‌های مخفی نینجا آشنا می‌شوند.',
        'episode_8_title': 'نبرد نهایی',
        'episode_8_desc': 'نبرد بزرگ بین لاک پشت ها و قبیله پا آغاز می‌شود.',
        'episode_9_title': 'شهر تاریک',
        'episode_9_desc': 'لاک پشت ها برای نجات استاد اسپلینتر به مقر شردر حمله می‌برند.',
        'episode_10_title': 'پایان داستان',
        'episode_10_desc': 'فصل اول با یک پایان مهیج به پایان می‌رسد.',

        'season1_badge': '⚡ ۱۰ قسمت اول فصل ۱ | آماده تماشا',
        'episodes_count': 'قسمت',
        'minutes_count': 'دقیقه',
        'rating_label': 'امتیاز',
        'search_placeholder': '🔍 جستجوی قسمت...',
        'episodes_found': 'قسمت یافت شد',
        'no_episodes_found': 'قسمتی یافت نشد!',
        'no_episodes_message': 'لطفاً عبارت دیگری جستجو کنید',
        'more_episodes_title': 'قسمت‌های بیشتر در راه است...',
        'more_episodes_desc': 'به زودی قسمت‌های بیشتری از فصل ۱ و فصل‌های بعدی اضافه خواهد شد',
        'completed_label': 'تکمیل شده',
        'total_episodes_info': '۱۵۶ قسمت در ۷ فصل',
    },
    en: {
        title: 'TMNT 2003 Series',
        subtitle: 'Back to the days when the turtle brothers were heroes of our hearts',
        welcome: 'Home',
        start_adventure: 'Start Adventure',
        about_series: 'About',
        high_quality: 'High Quality',
        high_quality_desc: 'All episodes in best quality',
        great_voice: 'Great Voice Acting',
        great_voice_desc: 'Professional voice actors',
        mobile_friendly: 'Mobile Friendly',
        mobile_friendly_desc: 'Watch on any device',
        characters: 'Characters',
        episodes: 'Episodes',
        all_episodes: 'View All Episodes',
        leonardo: 'Leonardo',
        leonardo_desc: 'Leader and master of katana swords',
        raphael: 'Raphael',
        raphael_desc: 'Tough and powerful turtle',
        donatello: 'Donatello',
        donatello_desc: 'Technology genius',
        michelangelo: 'Michelangelo',
        michelangelo_desc: 'Fun-loving and energetic',
        episode: 'Episode',
        duration: 'min',
        watch_now: 'Watch Now',
        back_to_home: 'Back to Home',
        add_to_favorites: 'Add to Favorites',
        Designed_by: 'Designed by',

        //for episodes
        'episode_1_title': 'Things Change - Part 1',
        'episode_1_desc': 'The origin story of the Teenage Mutant Ninja Turtles and how they become ninja warriors.',
        'episode_2_title': 'Things Change - Part 2',
        'episode_2_desc': 'The Turtles face their first mission and meet Shredder, their main enemy.',
        'episode_3_title': 'Attack of the Mousers',
        'episode_3_desc': 'Dr. Baxter Stockman has created dangerous Mousers that are attacking the city.',
        'episode_4_title': 'Meet Casey Jones',
        'episode_4_desc': 'Casey Jones, a vigilante who hunts criminals, joins the story.',
        'episode_5_title': 'Nano',
        'episode_5_desc': 'A nanotechnology creature called Nano gets out of control.',
        'episode_6_title': 'Darkness on the Edge of Town',
        'episode_6_desc': 'New York City is plunged into darkness.',
        'episode_7_title': 'The Way of Invisibility',
        'episode_7_desc': 'The Turtles learn secret ninja techniques.',
        'episode_8_title': 'Fall of the Foot Clan',
        'episode_8_desc': 'The great battle between the Turtles and the Foot Clan begins.',
        'episode_9_title': 'Return to New York',
        'episode_9_desc': 'The Turtles attack Shredder\'s headquarters to rescue Master Splinter.',
        'episode_10_title': 'The Shredder Strikes',
        'episode_10_desc': 'Season 1 ends with an exciting finale.',

        'season1_badge': '⚡ Season 1 - First 10 Episodes | Ready to Watch',
        'episodes_count': 'Episodes',
        'minutes_count': 'Minutes',
        'rating_label': 'Rating',
        'search_placeholder': '🔍 Search episodes...',
        'episodes_found': 'episodes found',
        'no_episodes_found': 'No episodes found!',
        'no_episodes_message': 'Please try another search term',
        'more_episodes_title': 'More episodes coming soon...',
        'more_episodes_desc': 'More episodes from Season 1 and future seasons will be added soon',
        'completed_label': 'Completed',
        'total_episodes_info': '156 episodes across 7 seasons',
    },
};