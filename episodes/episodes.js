 // اطلاعات قسمت‌ها با لینک‌های ویدیو
        const episodes = [
            {
                title: "ظهور لاک پشت ها - بخش اول",
                number: 1,
                duration: "22 دقیقه",
                description: "داستان منشأ لاک پشت های نینجا و نحوه تبدیل شدن آنها به جنگجویان نینجا روایت می‌شود.",
                turtle: "leonardo",
                videoUrl: "../episodes-video/1.mp4"
            },
            {
                title: "ظهور لاک پشت ها - بخش دوم",
                number: 2,
                duration: "22 دقیقه",
                description: "لاک پشت ها با اولین مأموریت خود روبرو می‌شوند و با شردر، دشمن اصلی خود آشنا می‌شوند.",
                turtle: "raphael",
                videoUrl: "../episodes-video/2.mp4"
            },
            {
                title: "تهدید موشکی",
                number: 3,
                duration: "22 دقیقه",
                description: "لاک پشت ها باید یک موشک را که توسط شردر برنامه‌ریزی شده متوقف کنند.",
                turtle: "donatello",
                videoUrl: "../episodes-video/3.mp4"
            },
            {
                title: "حمله به مخفیگاه",
                number: 4,
                duration: "22 دقیقه",
                description: "شردر مخفیگاه لاک پشت ها را پیدا می‌کند و به آنجا حمله می‌کند.",
                turtle: "michelangelo",
                videoUrl: "../episodes-video/4.mp4"
            },
            {
                title: "پاانگ برمی‌گردد",
                number: 5,
                duration: "22 دقیقه",
                description: "پاانگ، یکی از شروران قدیمی، بازمی‌گردد و نقشه‌ای شیطانی دارد.",
                turtle: "leonardo",
                videoUrl: "../episodes-video/5.mp4"
            },
            {
                title: "مهمان ناخوانده",
                number: 6,
                duration: "22 دقیقه",
                description: "یک موجود فضایی به نیویورک می‌آید و لاک پشت ها باید با آن مقابله کنند.",
                turtle: "raphael",
                videoUrl: "../episodes-video/6.mp4"
            },
            {
                title: "بازگشت به گذشته",
                number: 7,
                duration: "22 دقیقه",
                description: "لاک پشت ها با سفر در زمان به گذشته سفر می‌کنند تا منشأ شردر را کشف کنند.",
                turtle: "donatello",
                videoUrl: "../episodes-video/7.mp4"
            },
            {
                title: "نبرد نهایی",
                number: 8,
                duration: "22 دقیقه",
                description: "لاک پشت ها برای نبرد نهایی با شردر آماده می‌شوند.",
                turtle: "michelangelo",
                videoUrl: "../episodes-video/8.mp4"
            },
            {
                title: "شهر تاریک",
                number: 9,
                duration: "22 دقیقه",
                description: "نیویورک در تاریکی فرو می‌رود و لاک پشت ها باید نور را به شهر بازگردانند.",
                turtle: "leonardo",
                videoUrl: "../episodes-video/9.mp4"
            },
            {
                title: "پایان داستان",
                number: 10,
                duration: "22 دقیقه",
                description: "فصل اول با یک پایان مهیج به پایان می‌رسد و زمینه را برای فصل بعدی آماده می‌کند.",
                turtle: "raphael",
                videoUrl: "../episodes-video/10.mp4"
            }
        ];

        // ساخت قسمت‌ها
        const episodesContainer = document.getElementById('episodes-container');
        const mainContent = document.getElementById('mainContent');
        const videoPage = document.getElementById('videoPage');
        const fullVideoPlayer = document.getElementById('fullVideoPlayer');
        const backButton = document.getElementById('backButton');
        
        episodes.forEach(episode => {
            const episodeCard = document.createElement('div');
            episodeCard.className = `episode-card ${episode.turtle}`;
            
            episodeCard.innerHTML = `
                <div class="episode-thumbnail">
                    <img src="../images/TMNT.jpg" alt="پیش‌نمایش" class="default-image">
                    <div class="play-icon">
                        <i class="fas fa-play-circle"></i>
                    </div>
                    <video class="preview-video" muted preload="metadata">
                        <source src="${episode.videoUrl}" type="video/mp4">
                    </video>
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

        // مدیریت پیش‌نمایش ویدیو
        const episodeThumbnails = document.querySelectorAll('.episode-thumbnail');
        
        episodeThumbnails.forEach(thumbnail => {
            const previewVideo = thumbnail.querySelector('.preview-video');
            
            // حرکت موس برای پیش‌نمایش
            thumbnail.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const width = rect.width;
                
                // محاسبه زمان ویدیو بر اساس موقعیت موس
                const videoDuration = previewVideo.duration || 180; // 3 دقیقه پیش‌فرض
                const seekTime = (x / width) * videoDuration;
                
                // تنظیم زمان ویدیو
                previewVideo.currentTime = Math.min(seekTime, videoDuration - 1);
                
                // فعال کردن پیش‌نمایش
                this.classList.add('preview-active');
            });
            
            // وقتی موس خارج شد
            thumbnail.addEventListener('mouseleave', function() {
                this.classList.remove('preview-active');
                previewVideo.currentTime = 0;
            });
            
            // کلیک برای باز کردن صفحه ویدیو
            thumbnail.addEventListener('click', function() {
                const videoUrl = previewVideo.querySelector('source').src;
                
                // پنهان کردن محتوای اصلی و نمایش صفحه ویدیو
                mainContent.style.display = 'none';
                videoPage.classList.add('active');
                
                // تنظیم ویدیو برای پخش
                fullVideoPlayer.querySelector('source').src = videoUrl;
                fullVideoPlayer.load();
                fullVideoPlayer.play();
            });
        });
        
        // دکمه بازگشت
        backButton.addEventListener('click', function() {
            videoPage.classList.remove('active');
            mainContent.style.display = 'block';
            fullVideoPlayer.pause();
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

        // افکت حرکت موس روی قسمت‌ها
        episodeThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('mousemove', function(e) {
                if (this.classList.contains('preview-active')) return;
                
                const x = e.clientX - this.getBoundingClientRect().left;
                const y = e.clientY - this.getBoundingClientRect().top;
                
                const moveX = (x - this.offsetWidth / 2) / 20;
                const moveY = (y - this.offsetHeight / 2) / 20;
                
                this.style.transform = `perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
            });
            
            thumbnail.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });