// اطلاعات قسمت‌ها با کدهای آپارات
const episodes = [
    {
        title: "ظهور لاک پشت ها - بخش اول",
        number: 1,
        duration: "22 دقیقه",
        description: "داستان منشأ لاک پشت های نینجا و نحوه تبدیل شدن آنها به جنگجویان نینجا روایت می‌شود.",
        turtle: "leonardo",
        aparatEmbed: '<iframe src="https://www.aparat.com/video/video/embed/videohash/i85saso/vt/frame" width="100%" height="100%" style="border: none;" allowfullscreen scrolling="no"></iframe>'
    },
    {
        title: "ظهور لاک پشت ها - بخش دوم",
        number: 2,
        duration: "22 دقیقه", 
        description: "لاک پشت ها با اولین مأموریت خود روبرو می‌شوند و با شردر، دشمن اصلی خود آشنا می‌شوند.",
        turtle: "raphael",
        aparatEmbed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/d38u83h/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'
    },
    {
        title: "تهدید موشکی",
        number: 3,
        duration: "22 دقیقه",
        description: "لاک پشت ها باید یک موشک را که توسط شردر برنامه‌ریزی شده متوقف کنند.",
        turtle: "donatello",
        aparatEmbed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/150j6/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'
    },
    {
        title: "حمله به مخفیگاه",
        number: 4,
        duration: "22 دقیقه",
        description: "شردر مخفیگاه لاک پشت ها را پیدا می‌کند و به آنجا حمله می‌کند.",
        turtle: "michelangelo",
        aparatEmbed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/m94iywf/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'
    },
    {
        title: "پاانگ برمی‌گردد",
        number: 5,
        duration: "22 دقیقه",
        description: "پاانگ، یکی از شروران قدیمی، بازمی‌گردد و نقشه‌ای شیطانی دارد.",
        turtle: "leonardo",
        aparatEmbed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/bzyFI/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'
    },
    {
        title: "مهمان ناخوانده",
        number: 6,
        duration: "22 دقیقه",
        description: "یک موجود فضایی به نیویورک می‌آید و لاک پشت ها باید با آن مقابله کنند.",
        turtle: "raphael",
        aparatEmbed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/4UWuS/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'
    },
    {
        title: "بازگشت به گذشته",
        number: 7,
        duration: "22 دقیقه",
        description: "لاک پشت ها با سفر در زمان به گذشته سفر می‌کنند تا منشأ شردر را کشف کنند.",
        turtle: "donatello",
        aparatEmbed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/y840y31/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'
    },
    {
        title: "نبرد نهایی",
        number: 8,
        duration: "22 دقیقه",
        description: "لاک پشت ها برای نبرد نهایی با شردر آماده می‌شوند.",
        turtle: "michelangelo",
        aparatEmbed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/K4DoG/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'
    },
    {
        title: "شهر تاریک",
        number: 9,
        duration: "22 دقیقه",
        description: "نیویورک در تاریکی فرو می‌رود و لاک پشت ها باید نور را به شهر بازگردانند.",
        turtle: "leonardo",
        aparatEmbed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/J8BR4/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'
    },
    {
        title: "پایان داستان",
        number: 10,
        duration: "22 دقیقه",
        description: "فصل اول با یک پایان مهیج به پایان می‌رسد و زمینه را برای فصل بعدی آماده می‌کند.",
        turtle: "raphael",
        aparatEmbed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/h7cbS/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'
    }
];

// ساخت قسمت‌ها
const episodesContainer = document.getElementById('episodes-container');
const mainContent = document.getElementById('mainContent');
const videoPage = document.getElementById('videoPage');
const backButton = document.getElementById('backButton');
const aparatVideoContainer = document.getElementById('aparatVideoContainer');

episodes.forEach(episode => {
    const episodeCard = document.createElement('div');
    episodeCard.className = `episode-card ${episode.turtle}`;
    
    episodeCard.innerHTML = `
        <div class="episode-thumbnail" data-aparat-embed="${encodeURIComponent(episode.aparatEmbed)}">
            <img src="../images/TMNT.jpg" alt="پیش‌نمایش" class="default-image">
            <div class="play-icon">
                <i class="fas fa-play-circle"></i>
            </div>
            <div class="aparat-preview">
                <img src="https://www.aparat.com/public/public/images/play-video.png" alt="پخش ویدیو" style="width: 80px; height: 80px; opacity: 0.8;">
            </div>
        </div>
        <div class="episode-info">
            <h3 class="episode-title">قسمت ${episode.number}: ${episode.title}</h3>
            <div class="episode-meta">
                <span>${episode.duration}</span>
                <span>قسمت ${episode.number}</span>
            </div>
            <p class="episode-description">${episode.description}</p>
        </div>
    `;
    
    episodesContainer.appendChild(episodeCard);
});

// مدیریت کلیک روی قسمت‌ها
document.addEventListener('click', function(e) {
    const thumbnail = e.target.closest('.episode-thumbnail');
    if (thumbnail) {
        const aparatEmbed = decodeURIComponent(thumbnail.getAttribute('data-aparat-embed'));
        showAparatVideo(aparatEmbed);
    }
});

// نمایش ویدیو آپارات
function showAparatVideo(embedCode) {
    // مخفی کردن محتوای اصلی
    mainContent.style.display = 'none';
    
    // نمایش صفحه ویدیو
    videoPage.classList.add('active');
    
    // لود کردن embed آپارات
    aparatVideoContainer.innerHTML = embedCode;
}

// دکمه بازگشت
backButton.addEventListener('click', function() {
    videoPage.classList.remove('active');
    mainContent.style.display = 'block';
    
    // پاک کردن ویدیو
    aparatVideoContainer.innerHTML = '';
});

// بستن با کلید ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoPage.classList.contains('active')) {
        videoPage.classList.remove('active');
        mainContent.style.display = 'block';
        aparatVideoContainer.innerHTML = '';
    }
});

// افکت اسکرول برای تاریک شدن پس‌زمینه
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const body = document.querySelector('body');
    
    if (scrolled > 50) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});
