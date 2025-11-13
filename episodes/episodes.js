 // اطلاعات قسمت‌ها با لینک‌های ویدیو
        const episodes = [
            {
                title: "ظهور لاک پشت ها - بخش اول",
                number: 1,
                duration: "22 دقیقه",
                description: "داستان منشأ لاک پشت های نینجا و نحوه تبدیل شدن آنها به جنگجویان نینجا روایت می‌شود.",
                turtle: "leonardo",
                videoUrl: "https://hw2.cdn.asset.aparat.com/aparat-video/9afd680a5ba0ba7a43c61751a3783ced17658546-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImU2MjUxOWQ3ZTY3ZTA0MmFhODdkZWVlN2FlNzdkMWIwIiwiZXhwIjoxNzYzMDczMjk2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.5VQtyrxVdusPxU89e4uRp2n4kOZjfhHG3Y_zAqgBPx8"
            },
            {
                title: "ظهور لاک پشت ها - بخش دوم",
                number: 2,
                duration: "22 دقیقه",
                description: "لاک پشت ها با اولین مأموریت خود روبرو می‌شوند و با شردر، دشمن اصلی خود آشنا می‌شوند.",
                turtle: "raphael",
                videoUrl: "https://hw20.cdn.asset.aparat.com/aparat-video/5d30b34b76c878220d76af8b082bb15717658571-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjdhODlkMGQ5YzU3N2FkMjNkYjZkMzc1NWI0ZDlmYWM1IiwiZXhwIjoxNzYzMDg2NDI0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.QokkkEnmFX64PqU6Kikn7Gwg8P4sLrwlswjnpiStELE"
            },
            {
                title: "تهدید موشکی",
                number: 3,
                duration: "22 دقیقه",
                description: "لاک پشت ها باید یک موشک را که توسط شردر برنامه‌ریزی شده متوقف کنند.",
                turtle: "donatello",
                videoUrl: "https://aspb23.cdn.asset.aparat.com/aparat-video/d98fca4adbb2678443f85d8a95a5e4c924804013-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImNhZmMwNjc1MDEwM2MzOWEzYmI5OTZkMTE1MTk4NDg5IiwiZXhwIjoxNzYzMDg2NDkwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.sfHkzztrHai1sVIuYU7TxIrmFWM8fswK07YEcHojNZE"
            },
            {
                title: "حمله به مخفیگاه",
                number: 4,
                duration: "22 دقیقه",
                description: "شردر مخفیگاه لاک پشت ها را پیدا می‌کند و به آنجا حمله می‌کند.",
                turtle: "michelangelo",
                videoUrl: "https://aspb15.cdn.asset.aparat.com/aparat-video/aec70432d2677f66032342e2ed2b9b8e17658620-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjE5YzRiZjgxODgxOTJjZTFiZTAzYTdhMDJmZmU4M2FjIiwiZXhwIjoxNzYzMDg2NzU1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.HqVakCOyXUoXmI1aYXCLyOgnzatPlOWJq_SuBwXxMXg"
            },
            {
                title: "پاانگ برمی‌گردد",
                number: 5,
                duration: "22 دقیقه",
                description: "پاانگ، یکی از شروران قدیمی، بازمی‌گردد و نقشه‌ای شیطانی دارد.",
                turtle: "leonardo",
                videoUrl: "https://aspb15.cdn.asset.aparat.com/aparat-video/1e6b3093e2c5c030b23e9044a44b5ffb16441632-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ1YjIyNGVlZTg1NGE5MWIyMWI3MTUyY2JiNTA0NWI0IiwiZXhwIjoxNzYzMDg2ODM4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.W7tKC2eBq-6OjKYLHEFzLn9m9tK2qvapeZKUzl9ions"
            },
            {
                title: "مهمان ناخوانده",
                number: 6,
                duration: "22 دقیقه",
                description: "یک موجود فضایی به نیویورک می‌آید و لاک پشت ها باید با آن مقابله کنند.",
                turtle: "raphael",
                videoUrl: "https://aspb11.cdn.asset.aparat.com/aparat-video/98af281d323e06c1c49464b17946a8d318635699-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjEyYmVjZjZlMmEwZTRmMzk5MjNiNDgzZTc4NDdhOWQ0IiwiZXhwIjoxNzYzMDg2ODc5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.MGbbFfFqUXut6S6SDczbdmngGO0jOBDU4uDUcx7f4SE"
            },
            {
                title: "بازگشت به گذشته",
                number: 7,
                duration: "22 دقیقه",
                description: "لاک پشت ها با سفر در زمان به گذشته سفر می‌کنند تا منشأ شردر را کشف کنند.",
                turtle: "donatello",
                videoUrl: "https://aspb2.cdn.asset.aparat.com/aparat-video/362d1d9f1a42a4efb085d950a6b54f2217658676-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjJiMDM5NWNlMjA2MzFmODgwNTFkOTdhMGEzZmQ4MGM3IiwiZXhwIjoxNzYzMDg2OTU2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.nMxC4GuqnR8HfYnlY6rA7ZZGVAE7uzBFB5EcgFqYYYg"
            },
            {
                title: "نبرد نهایی",
                number: 8,
                duration: "22 دقیقه",
                description: "لاک پشت ها برای نبرد نهایی با شردر آماده می‌شوند.",
                turtle: "michelangelo",
                videoUrl: "https://hw16.cdn.asset.aparat.com/aparat-video/e3f1dbfb2fa4e533f94bc9d2a6938cc918635683-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImY0ZjEzMmVlZjM2YTY5MTEzOGIzMDU0ODEwNjQ4NDM2IiwiZXhwIjoxNzYzMDg3MDQ1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.ovNRwRZ69-pvFMPajPPQ3DqRvF6ME8BNLR7aZ7IPuDk"
            },
            {
                title: "شهر تاریک",
                number: 9,
                duration: "22 دقیقه",
                description: "نیویورک در تاریکی فرو می‌رود و لاک پشت ها باید نور را به شهر بازگردانند.",
                turtle: "leonardo",
                videoUrl: "https://aspb18.cdn.asset.aparat.com/aparat-video/e2869635feb897e6b79e3e642bad249118635719-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFlODdkZGExMTU2YzhmZWQzYmIwNjgzOWRhMzAwMDNiIiwiZXhwIjoxNzYzMDg3MDgxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.9raKJjsU7vL1f9H98W7SNEDEsIeZNzsd_K_LK9uAjFA"
            },
            {
                title: "پایان داستان",
                number: 10,
                duration: "22 دقیقه",
                description: "فصل اول با یک پایان مهیج به پایان می‌رسد و زمینه را برای فصل بعدی آماده می‌کند.",
                turtle: "raphael",
                videoUrl: "https://aspb14.cdn.asset.aparat.com/aparat-video/00076b06d9e78dbf994474315801d3a016454296-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjU2ZjRiNTliYTYxZjFiZmJhZjczNjNkNjFhOWY4MmQxIiwiZXhwIjoxNzYzMDg3MTI3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.ZHsXTmnwErLi-i69hu14lz5jj7CGmdKW_8aVdTpSDaw"
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