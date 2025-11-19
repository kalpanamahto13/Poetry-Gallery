
const englishPoems = [
            {
                title: "You can fall now ",
                preview: "I will catch you...",
                content: `
You have been so strong since the day I met you,
You can fall now, i will catch you

I know you are struggling with so many things 
And handling your emotions
But now it's my turn to handle it

Don't worry i will be the person you can rely on
I will be there if u want a shoulder to cry on

You may show people that you are enough
But deep down your inner child is suffering
Let me bloom your inner child
And make you a happy person you want to be 

You just can't be mature all the time
You say but you are not always fine
So let your childish behavior rule my heart

And finally get to know how it feels to be loved 
Bcuz i m gonna love you with the bottom of my heart
And will be with you when the things are falling apart

You have been with me at my worst
So let the world get to know your real worth

You just can't always forgive people who hurt you
Treat them how they should be treated 
I will accompany you.

Don't let them be the reason of your tears
I will make sure that you will be happy for years.

You are not good at expressing
I will learn how to read eyes..
Be with me and see how the bad time flies.

`
            },
            {
                title: "Ocean's Lullaby",
                preview: "Waves that sing to the shore...",
                content: `Endless blue stretches far and wide,
Waves dance with the moon's soft glow,
The ocean sings its ancient lullaby,
To shores that ebb and flow.

Seashells hold secrets untold,
Salt air fills the eager lungs,
Stories of mariners brave and bold,
In every song the ocean's sung.
`
            },
            {
                title: "Autumn's Embrace",
                preview: "Golden leaves falling gracefully...",
                content: `Leaves of amber, gold, and red,
Dance upon the autumn breeze,
Nature's carpet gently spread,
Beneath the aging trees.

The world prepares for winter's rest,
In colors warm and bright,
Each sunset painting east to west,
A masterpiece of light.`
            },
            {
                title: "Silent Night",
                preview: "Stars above, peace below...",
                content: `The stars emerge like diamonds bright,
Against the velvet sky,
The moon ascends in silver light,
As day waves its goodbye.

In silence deep and profound,
The world finds peace at last,
No hurried step, no frantic sound,
Just present, free from past.`
            },
            {
                title: "Journey Within",
                preview: "Exploring the soul's depths...",
                content: `Within the chambers of the soul,
Lie treasures yet untold,
A journey inward makes us whole,
More precious far than gold.

Through valleys dark and mountains high,
We search for who we are,
Beneath the vast and endless sky,
We follow our own star.`
            },
            {
                title: "Spring's Promise",
                preview: "New beginnings bloom eternal...",
                content: `Winter's chill begins to fade,
As spring returns once more,
Blossoms bloom in sunlit glade,
Nature opens up her door.

Life renewed in every seed,
Hope springs eternal here,
The world fulfills its destined need,
To birth another year.`
            }
        ];

        const hindiPoems = [
            {
                title: "सुबह की पहली किरण",
                preview: "सुबह की पहली किरण दिल को छूती है...",
                content: `सुबह की पहली किरण दिल को छूती है,
नई उम्मीदों का जादू बिखेरती है।

पंछियों की मीठी कूक सुनाई देती है,
नई सुबह का संगीत बजाया जाता है।

दुनिया जागती है धीरे-धीरे,
हर सांस नया जीवन देती है।`
            },
            {
                title: "समुद्र की लोरी",
                preview: "लहरें किनारे से बातें करती हैं...",
                content: `समुद्र की लहरें किनारे से बातें करती हैं,
चाँद की रोशनी में नाचती रहती हैं।

सीपों में छुपे राज़ खुलते जाते हैं,
नमकीन हवा फेफड़ों को भरती जाती है।

मल्लाहों की कहानियाँ सुनाई देती हैं,
हर गीत में समुद्र की आवाज़ मिलती है।`
            },
            {
                title: "पतझड़ की बाहें",
                preview: "सुनहरे पत्ते धीरे-धीरे गिरते हैं...",
                content: `पतझड़ की बाहें फैलती जाती हैं,
सुनहरे पत्ते धीरे-धीरे गिरते हैं।

प्रकृति की कालीन बिछती जाती है,
बूढ़ी हुई पेड़ों के नीचे फैलती है।

सर्दियों की तैयारी शुरू हो जाती है,
रंगों में गर्मी बिखेरती जाती है।`
            }
        ];

        const hindiShayari = [
            {
                title: "Dil Ki Baat",
                preview: "Mohabbat mein jo dard hai, woh sukoon bhi hai...",
                content: `Mohabbat mein jo dard hai, woh sukoon bhi hai,
Judaai ki yeh raat hai, toh milne ki subah bhi hai.

Khuda se maangi thi ek dua tumhare liye,
Magar uske jawaab mein, tum hi mile mujhe.

Aankhon mein teri tasveer, dil mein tera naam,
Har saans mein teri khushboo, yeh hai mera aaraam.`
            },
            {
                title: "Yaadein",
                preview: "Waqt ke saath sab kuch badal gaya...",
                content: `Waqt ke saath sab kuch badal gaya,
Magar teri yaad ka asar wohi raha.

Khamoshi mein bhi suna hai tumhe,
Har lafz mein tera pata chala.

Tere bina yeh safar adhoora hai,
Har raah mein tera intezaar hai.`
            },
            {
                title: "Ishq",
                preview: "Ishq ka rang aisa hai...",
                content: `Ishq ka rang aisa hai, jo dil se lipat jaaye,
Har ghadi, har pal, teri yaadon ka saath jaaye.

Tere bina yeh zindagi, ek veeran sa safar hai,
Tere saath har lamha, jannat ka ek nazar hai.

Mohabbat ki raah mein, mushkilein to aayengi,
Par teri muskaan dekhkar, sab khushiyan chhaa jayengi.`
            },
            {
                title: "Tanhai",
                preview: "Raaton ki tanhai mein...",
                content: `Raaton ki tanhai mein, teri yaad aati hai,
Chandni ki roshni mein, teri tasveer nazar aati hai.

Dil ki gehraaiyon mein, tera naam hai basaya,
Har khwab mein, har pal mein, tujhe hi paya.

Tanhaayi mein bhi, tera ehsaas hai saath,
Zindagi ke is safar mein, tu hai mera raaz.`
            }
        ];

        const hindiWriteups = [
            {
                title: "मन की बात",
                preview: "जिंदगी के सफर में कुछ सीखें...",
                content: `जिंदगी एक सफर है, जिसमें हर मोड़ पर कुछ नया सीखने को मिलता है। कभी खुशियाँ मिलती हैं, कभी दर्द, पर हर अनुभव हमें मजबूत बनाता है।

महत्वपूर्ण बात यह है कि हम कभी हार न मानें और अपने सपनों को पूरा करने के लिए लगातार प्रयास करते रहें।`
            },
            {
                title: "सपनों की दुनिया",
                preview: "सपने ही जीवन को रंग देते हैं...",
                content: `सपने वह खूबसूरत दुनिया हैं जहाँ सब कुछ संभव है। वे हमें प्रेरणा देते हैं और हमारे जीवन को एक नया अर्थ देते हैं।

हर सपना पूरा करने के लिए मेहनत और धैर्य की जरूरत होती है। याद रखें, सपने देखना आसान है, पर उन्हें पूरा करना ही असली चुनौती है।`
            },
            {
                title: "मित्रता की मिठास",
                preview: "सच्ची मित्रता जीवन की सबसे बड़ी संपत्ति है...",
                content: `सच्ची मित्रता वह रिश्ता है जो समय के साथ और मजबूत होती जाती है। एक अच्छा दोस्त हमेशा हमारे साथ खड़ा रहता है, चाहे हालात कुछ भी हों।

मित्रता में विश्वास और समझ का होना बहुत जरूरी है। एक अच्छे दोस्त को खोना आसान नहीं होता।`
            }
        ];

        const englishWriteups = [
            {
                title: "Thoughts on Life",
                preview: "Life's journey teaches us many lessons...",
                content: `Life is a journey where every turn brings something new to learn. Sometimes joys come, sometimes pains, but every experience makes us stronger.

The important thing is to never give up and keep striving to fulfill our dreams.`
            },
            {
                title: "The World of Dreams",
                preview: "Dreams are what color our lives...",
                content: `Dreams are that beautiful world where everything is possible. They inspire us and give new meaning to our lives.

Every dream requires hard work and patience to fulfill. Remember, dreaming is easy, but achieving them is the real challenge.`
            },
            {
                title: "The Sweetness of Friendship",
                preview: "True friendship is life's greatest treasure...",
                content: `True friendship is a relationship that grows stronger with time. A good friend always stands by you, no matter what the circumstances.

Trust and understanding are very important in friendship. Losing a good friend is not easy.`
            }
        ];

        
        const englishmsg = [
            {
                title: "Whispers of Dawn",
                preview: "A morning's gentle embrace unfolds...",
                content: `The sun peeks through the curtains,
Painting gold on sleepy walls,
A symphony of birdsong rises,
As morning gently calls.

The world awakens slowly,
Each breath a fresh new start,
With whispers soft and holy,
Dawn speaks straight to the heart.`
            },
            {
                title: "Ocean's Lullaby",
                preview: "Waves that sing to the shore...",
                content: `Endless blue stretches far and wide,
Waves dance with the moon's soft glow,
The ocean sings its ancient lullaby,
To shores that ebb and flow.

Seashells hold secrets untold,
Salt air fills the eager lungs,
Stories of mariners brave and bold,
In every song the ocean's sung.`
            },
            {
                title: "Autumn's Embrace",
                preview: "Golden leaves falling gracefully...",
                content: `Leaves of amber, gold, and red,
Dance upon the autumn breeze,
Nature's carpet gently spread,
Beneath the aging trees.

The world prepares for winter's rest,
In colors warm and bright,
Each sunset painting east to west,
A masterpiece of light.`
            },
            {
                title: "Silent Night",
                preview: "Stars above, peace below...",
                content: `The stars emerge like diamonds bright,
Against the velvet sky,
The moon ascends in silver light,
As day waves its goodbye.

In silence deep and profound,
The world finds peace at last,
No hurried step, no frantic sound,
Just present, free from past.`
            },
            {
                title: "Journey Within",
                preview: "Exploring the soul's depths...",
                content: `Within the chambers of the soul,
Lie treasures yet untold,
A journey inward makes us whole,
More precious far than gold.

Through valleys dark and mountains high,
We search for who we are,
Beneath the vast and endless sky,
We follow our own star.`
            },
            {
                title: "Spring's Promise",
                preview: "New beginnings bloom eternal...",
                content: `Winter's chill begins to fade,
As spring returns once more,
Blossoms bloom in sunlit glade,
Nature opens up her door.

Life renewed in every seed,
Hope springs eternal here,
The world fulfills its destined need,
To birth another year.`
            },
            {
                title: "Thoughts on Life",
                preview: "Life's journey teaches us many lessons...",
                content: `Life is a journey where every turn brings something new to learn. Sometimes joys come, sometimes pains, but every experience makes us stronger.

The important thing is to never give up and keep striving to fulfill our dreams.`
            },
            {
                title: "The World of Dreams",
                preview: "Dreams are what color our lives...",
                content: `Dreams are that beautiful world where everything is possible. They inspire us and give new meaning to our lives.

Every dream requires hard work and patience to fulfill. Remember, dreaming is easy, but achieving them is the real challenge.`
            },
            {
                title: "The Sweetness of Friendship",
                preview: "True friendship is life's greatest treasure...",
                content: `True friendship is a relationship that grows stronger with time. A good friend always stands by you, no matter what the circumstances.

Trust and understanding are very important in friendship. Losing a good friend is not easy.`
            }
        ];

        function enterGallery() {
            const landing = document.getElementById('landing');
            const gallery = document.getElementById('gallery');

            landing.style.animation = 'fadeOut 0.5s ease-out forwards';

            setTimeout(() => {
                landing.style.display = 'none';
                gallery.style.display = 'block';
                initializeEventListeners();
                updateDisplay();
            }, 500);
        }

        function initializeEventListeners() {
            // Language buttons
            document.getElementById('english-btn').addEventListener('click', () => {
                currentLanguage = 'english';
                currentSubcategory = 'poems';
                languageSelected = true;
                updateDisplay();
            });

            document.getElementById('hindi-btn').addEventListener('click', () => {
                currentLanguage = 'hindi';
                currentSubcategory = 'poems'; // Default to poems when switching to Hindi
                languageSelected = true;
                updateDisplay();
            });

            // Change Language button
            document.getElementById('change-language-btn').addEventListener('click', () => {
                languageSelected = false;
                updateDisplay();
            });

            // Subcategory buttons (for Hindi)
            const nazmBtn = document.getElementById('nazm-btn');
            const shayariBtn = document.getElementById('shayari-btn');
            const writeupBtn = document.getElementById('writeup-btn');

            if (nazmBtn) {
                nazmBtn.addEventListener('click', () => {
                    currentSubcategory = 'poems';
                    updateDisplay();
                });
            }

            if (shayariBtn) {
                shayariBtn.addEventListener('click', () => {
                    currentSubcategory = 'shayari';
                    updateDisplay();
                });
            }

            if (writeupBtn) {
                writeupBtn.addEventListener('click', () => {
                    currentSubcategory = 'writeups';
                    updateDisplay();
                });
            }

            // Subcategory buttons (for English)
            const englishPoemsBtn = document.getElementById('english-poems-btn');
            const englishWriteupsBtn = document.getElementById('english-writeups-btn');
            const englishMsgBtn = document.getElementById('english-msg-btn');

            if (englishPoemsBtn) {
                englishPoemsBtn.addEventListener('click', () => {
                    currentSubcategory = 'poems';
                    updateDisplay();
                });
            }

            if (englishWriteupsBtn) {
                englishWriteupsBtn.addEventListener('click', () => {
                    currentSubcategory = 'writeups';
                    updateDisplay();
                });
            }

            if (englishMsgBtn) {
                englishMsgBtn.addEventListener('click', () => {
                    currentSubcategory = 'messages';
                    updateDisplay();
                });
            }
        }

        let currentLanguage = 'english';
        let currentSubcategory = 'poems';
        let languageSelected = false;

        function loadPoems(poemsArray = englishPoems) {
            const grid = document.getElementById('poemsGrid');
            grid.innerHTML = '';

            poemsArray.forEach((poem, index) => {
                const card = document.createElement('div');
                card.className = 'poem-card';
                card.innerHTML = `
                    <h3>${poem.title}</h3>
                    <p class="poem-preview">${poem.preview}</p>
                `;
                card.onclick = () => openModal(poem);

                // Stagger animation
                card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;

                grid.appendChild(card);
            });
        }

        function loadShayaris(shayariArray = hindiShayari) {
            const grid = document.getElementById('shayariGrid');
            grid.innerHTML = '';

            shayariArray.forEach((shayari, index) => {
                const card = document.createElement('div');
                card.className = 'shayari-card';
                card.innerHTML = `
                    <h3>${shayari.title}</h3>
                    <p class="shayari-preview">${shayari.preview}</p>
                `;
                card.onclick = () => openModal(shayari);

                // Stagger animation
                card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;

                grid.appendChild(card);
            });
        }



        function updateDisplay() {
            const shayariSection = document.querySelector('.shayari-section');
            const poemsSection = document.querySelector('.poems-section');
            const subcategoryButtons = document.getElementById('subcategory-buttons');
            const englishSubcategoryButtons = document.getElementById('english-subcategory-buttons');
            const languageSelection = document.querySelector('.language-selection');
            const changeLanguageBtn = document.getElementById('change-language-btn');

            if (!languageSelected) {
                if (subcategoryButtons) subcategoryButtons.style.display = 'none';
                if (englishSubcategoryButtons) englishSubcategoryButtons.style.display = 'none';
                if (languageSelection) languageSelection.style.display = 'flex';
                if (changeLanguageBtn) changeLanguageBtn.style.display = 'none';
                shayariSection.style.display = 'none';
                poemsSection.style.display = 'none';
                return;
            }

            // Hide language selection and show change language button after language is chosen
            if (languageSelection) languageSelection.style.display = 'none';
            if (changeLanguageBtn) changeLanguageBtn.style.display = 'block';

            if (currentLanguage === 'english') {
                if (subcategoryButtons) subcategoryButtons.style.display = 'none';
                if (englishSubcategoryButtons) englishSubcategoryButtons.style.display = 'flex';
                shayariSection.style.display = 'none';
                poemsSection.style.display = 'block';
                if (currentSubcategory === 'poems') {
                    document.querySelector('.poems-title').textContent = 'Poems';
                    document.querySelector('.poems-subtitle').textContent = 'A collection of feelings and emotions';
                    loadPoems(englishPoems);
                } else if (currentSubcategory === 'writeups') {
                    shayariSection.style.display = 'block';
                    poemsSection.style.display = 'none';
                    document.querySelector('.shayari-title').textContent = 'Writeups';
                    document.querySelector('.shayari-subtitle').textContent = 'Thoughts and reflections';
                    loadPoems([]); // Clear poems grid
                    loadShayaris(englishWriteups);
                } else if (currentSubcategory === 'messages') {
                    shayariSection.style.display = 'block';
                    poemsSection.style.display = 'none';
                    document.querySelector('.shayari-title').textContent = 'Messages';
                    document.querySelector('.shayari-subtitle').textContent = ' Short and sweet messages';
                    loadPoems([]); // Clear poems grid
                    loadShayaris(englishmsg);
                }
            } else if (currentLanguage === 'hindi') {
                if (englishSubcategoryButtons) englishSubcategoryButtons.style.display = 'none';
                if (subcategoryButtons) subcategoryButtons.style.display = 'flex';
                if (currentSubcategory === 'poems') {
                    shayariSection.style.display = 'block';
                    poemsSection.style.display = 'none';
                    document.querySelector('.shayari-title').textContent = ' Poetries/Nazm';
                    document.querySelector('.shayari-subtitle').textContent = 'Words that speaks to the heart';
                    loadPoems([]); // Clear poems grid
                    loadShayaris(hindiPoems);
                } else if (currentSubcategory === 'shayari') {
                    shayariSection.style.display = 'block';
                    poemsSection.style.display = 'none';
                    document.querySelector('.shayari-title').textContent = 'Sher/Shayari';
                    document.querySelector('.shayari-subtitle').textContent = 'Poetry in Urdu tradition';
                    loadPoems([]); // Clear poems grid
                    loadShayaris(hindiShayari);
                } else if (currentSubcategory === 'writeups') {
                    shayariSection.style.display = 'block';
                    poemsSection.style.display = 'none';
                    document.querySelector('.shayari-title').textContent = 'Write Ups';
                    document.querySelector('.shayari-subtitle').textContent = 'Thoughts and reflections';
                    loadPoems([]); // Clear poems grid
                    loadShayaris(hindiWriteups);
                }
            }
        }

        function openModal(item) {
            document.getElementById('modalTitle').textContent = item.title;
            document.getElementById('modalPoem').textContent = item.content;
            document.getElementById('modal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(event) {
            if (!event || event.target.id === 'modal') {
                const modal = document.getElementById('modal');
                modal.style.animation = 'fadeOut 0.3s ease-out forwards';
                
                setTimeout(() => {
                    modal.style.display = 'none';
                    modal.style.animation = '';
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        }

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            // Load saved theme from localStorage
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.setAttribute('data-theme', 'dark');
                themeToggle.textContent = '☀️ ';
            } else {
                themeToggle.textContent = '🌙 ';
            }

            themeToggle.addEventListener('click', () => {
                const body = document.body;
                const currentTheme = body.getAttribute('data-theme');
                if (currentTheme === 'dark') {
                    body.removeAttribute('data-theme');
                    themeToggle.textContent = '🌙';
                    localStorage.setItem('theme', 'light');
                } else {
                    body.setAttribute('data-theme', 'dark');
                    themeToggle.textContent = '☀️';
                    localStorage.setItem('theme', 'dark');
                }
            });
        }

        // Add fadeOut animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    transform: scale(0.95);
                }
            }
        `;
        document.head.appendChild(style);
 