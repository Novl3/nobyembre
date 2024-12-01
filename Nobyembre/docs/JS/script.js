document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const heartTalkBtn = document.getElementById('heart-talk-btn');
    const aboutBtn = document.getElementById('about-btn');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    const homeSection = document.getElementById('home-section');
    const heartTalkSection = document.getElementById('heart-talk-section');
    const aboutSection = document.getElementById('about-section');

    const questions = [
        "Paano mo ilalarawan ang iyong kasalukuyang emosyon? (How would you describe your current emotion?)",
        "Ano ang pinaka-nakaka-stress sa'yo ngayon at bakit? (What is the most stressful thing for you right now and why?)",
        "Paano mo pinapangalagaan ang iyong mental na kalusugan sa araw-araw? (How do you take care of your mental health daily?)",
        "Ano ang mga hakbang na ginagawa mo kapag nakakaramdam ka ng burnout? (What steps do you take when you feel burnt out?)",
        "Anong mga bagay ang nagpapasaya sa'yo sa buhay? (What are the things that make you happy in life?)",
        "Paano ka nagre-react kapag may mga bagay na hindi ayon sa iyong plano? (How do you react when things dont go according to your plan?)",
        "Anong mga coping mechanisms ang ginagamit mo kapag ikaw ay stressed? (What coping mechanisms do you use when you are stressed?)",
        "Paano mo pinapalakas ang iyong sarili pagkatapos ng mahirap na araw? (How do you recharge after a tough day?)",
        "May mga pagkakataon bang nararamdaman mong hindi ka pinapansin o naiintindihan ng ibang tao? Paano mo ito hinaharap? (Are there times when you feel ignored or misunderstood by others? How do you deal with that?)",
        "Kumusta ang relasyon mo sa iyong sarili? (How is your relationship with yourself?)",
        "Ano ang mga bagay na mahirap para sa iyo na aminin sa ibang tao? (What are the things you find hard to admit to others?)",
        "Kumusta ang iyong self-worth sa ngayon? (How is your self-worth at the moment?)",
        "Anong mga bagay ang nagpapalakas sa iyong loob kapag ikaw ay nadidepress? (What helps lift your spirits when you feel depressed?)",
        "Ano ang isang bagay na gusto mong baguhin sa iyong buhay ngayon? (What is one thing you want to change in your life right now?)",
        "Paano mo hinaharap ang mga araw na pakiramdam mo ay walang saysay? (How do you handle days when you feel hopeless?)",
        "Ano ang pinakamahalagang bagay na natutunan mo mula sa iyong mga karanasan sa buhay? (What is the most important thing you've learned from your life experiences?)",
        "Kumusta ang iyong relasyon sa pamilya mo? (How is your relationship with your family?)",
        "Ano ang mga bagay na pinagsisisihan mo sa buhay, at paano mo ito tinanggap? (What are the things you regret in life, and how did you come to accept them?)",
        "Paano ka nagko-cope kapag nawawala ang iyong mga plano sa buhay? (How do you cope when your plans in life fall apart?)",
        "Ano ang iyong ginagawa upang magpatawad sa iyong sarili at sa iba? (What do you do to forgive yourself and others?)",
        "Paano mo hinaharap ang mga takot o pangarap na hindi mo pa natutupad? (How do you deal with fears or dreams you haven't achieved yet?)",
        "Ano ang iyong ginagawa kapag ikaw ay hindi komportable sa iyong nararamdaman? (What do you do when you feel uncomfortable with your emotions?)",
        "Paano mo nakikita ang iyong sarili sa hinaharap? (How do you see yourself in the future?)",
        "Ano ang pinakamalaking hamon na hinarap mo at paano mo ito nalampasan? (What is the biggest challenge youve faced, and how did you overcome it?)",
        "Paano mo tinitingnan ang iyong mga pagkatalo at pagkakamali? (How do you view your failures and mistakes?)",
        "Anong mga bagay ang iyong pinahahalagahan sa buhay? (What are the things you value most in life?)",
        "Kumusta ang iyong mental health ngayon kumpara sa nakaraan? (How is your mental health now compared to the past?)",
        "Paano ka nag-aalaga ng iyong mental na kalusugan kahit na abala ka sa ibang bagay? (How do you take care of your mental health even when you are busy with other things?)",
        "Kumusta ang iyong pagtingin sa sarili mong pisikal na anyo? (How do you view your physical appearance?)",
        "Ano ang mga pamamaraan mo upang manatiling kalmado sa gitna ng kaguluhan? (What methods do you use to stay calm in the middle of chaos?)",
        "Paano ka naglalabas ng iyong emosyon nang hindi nasasaktan ang iba? (How do you express your emotions without hurting others?)",
        "Ano ang isang bagay na nagpapaalala sa iyo na mahalaga ka? (What is one thing that reminds you that you are important?)",
        "Kumusta ang iyong relasyon sa mga kaibigan mo? (How is your relationship with your friends?)",
        "Ano ang isang bagay na nagpapalakas sa iyong loob kapag nawawala ka sa iyong direksyon? (What helps strengthen you when you feel lost in your direction?)",
        "Paano mo hinaharap ang mga pagkatalo at hindi pagkakaisa sa iyong buhay? (How do you handle setbacks and disunity in your life?)",
        "Anong mga hakbang ang ginagawa mo upang mapabuti ang iyong mental health? (What steps are you taking to improve your mental health?)",
        "Paano ka magtiwala muli pagkatapos mong masaktan? (How do you trust again after being hurt?)",
        "Ano ang pinaka-nagpapabigat sa iyong puso at paano mo ito hinaharap? (What weighs heavily on your heart and how do you deal with it?)",
        "Ano ang iyong ginagawa kapag ikaw ay nalulumbay? (What do you do when you feel down?)",
        "Paano mo pinapalakas ang iyong pananampalataya sa sarili? (How do you build your self-confidence?)",
        "Anong mga bagay ang nagpapasaya sa iyong araw-araw na buhay? (What things make you happy in your daily life?)",
        "Ano ang pinakamahalagang aral na natutunan mo sa buhay? (What is the most important lesson you've learned in life?)",
        "Paano mo hinaharap ang mga pagkatalo sa iyong buhay? (How do you cope with failure in your life?)",
        "Kumusta ang iyong mga relasyon sa iyong mga kamag-anak? (How are your relationships with your relatives?)",
        "Ano ang isang bagay na iyong ipinagmamalaki na nagawa mo sa buhay? (What is one thing you are proud to have achieved in your life?)",
        "Paano mo inaalagaan ang iyong emotional well-being? (How do you take care of your emotional well-being?)",
        "Ano ang isang bagay na gusto mong magawa, pero takot kang subukan? (What is something you want to do but are afraid to try?)",
        "Paano mo pinapahalagahan ang iyong sarili? (How do you value yourself?)",
        "Ano ang iyong ginagawa upang magpatawad sa iyong nakaraan? (What do you do to forgive your past?)",
        "Kumusta ang iyong pananaw sa buhay? (How is your outlook on life?)",
        "Ano ang pinaka-mahalagang bagay na gusto mong matutunan sa buhay? (What is the most important thing you want to learn in life?)",
        "Kumusta ang iyong mental state ngayong linggo? (How is your mental state this week?)",
        "Paano mo hinarap ang mga mahihirap na desisyon sa iyong buhay? (How have you dealt with difficult decisions in your life?)",
        "Ano ang pinakamahirap na emosyon na naranasan mo at paano mo ito nalampasan? (What is the hardest emotion youve felt, and how did you overcome it?)",
        "Paano mo nalalaman kung kailangan mo ng tulong para sa iyong mental health? (How do you know when you need help for your mental health?)",
        "Kumusta ang iyong mga paniniwala at pananampalataya sa ngayon? (How are your beliefs and faith at this moment?)",
        "Paano mo tinutulungan ang iyong sarili kapag feeling mo'y nag-iisa ka? (How do you help yourself when you feel lonely?)",
        "Ano ang pinaka-nagpapalakas sa iyong pag-iisip at katawan? (What strengthens your mind and body?)",
        "Paano ka nagpapatawad sa iyong mga pagkakamali? (How do you forgive your own mistakes?)",
        "Ano ang isang bagay na nais mong baguhin sa iyong sarili para sa mas mabuting kalusugan sa isip? (What is one thing you want to change in yourself for better mental health?)",
        "Ano ang pinakamalaking bagay na nakapagbigay sa'yo ng lakas sa mga pagsubok? (What is the biggest thing that has given you strength in the face of challenges?)",
        "Paano mo hinaharap ang mga araw na parang wala kang energy? (How do you deal with days when you feel low on energy?)",
        "Ano ang mga bagay na iyong ikinagagalak sa kabila ng mga problema? (What are the things that bring you joy despite the problems?)",
        "Paano mo nilalabanan ang mga negatibong kaisipan? (How do you combat negative thoughts?)",
        "Anong mga simpleng bagay sa buhay ang nagpapalakas ng iyong kalooban? (What simple things in life uplift your spirit?)",
        "Paano mo inaalagaan ang iyong emotional health kahit na abala sa trabaho o pag-aaral? (How do you take care of your emotional health amidst work or school?)",
        "Anong mga katangian sa isang tao ang nakatutulong upang mapalakas ang iyong mental health? (What qualities in a person contribute to strengthening your mental health?)",
        "Kumusta ang iyong relasyon sa mga malalapit sa iyo? (How is your relationship with the people close to you?)",
        "Paano ka bumangon mula sa pagkatalo o hamon? (How do you bounce back from defeats or challenges?)",
        "Ano ang iyong ginawa upang maghilom mula sa isang emotional na sugat? (What have you done to heal from an emotional wound?)",
        "Paano mo hinaharap ang mga insecurities na nararamdaman mo? (How do you handle the insecurities you feel?)",
        "Paano mo nire-recharge ang iyong sarili kapag puno ka ng stress? (How do you recharge when you are full of stress?)",
        "Anong mga bagay ang nagpapasaya sa iyong katawan at isipan? (What things make both your body and mind happy?)",
        "Anong mga maliliit na hakbang ang ginawa mo upang mapabuti ang iyong mental na kalusugan? (What small steps have you taken to improve your mental well-being?)",
        "Paano mo pinapalakas ang iyong self-esteem kapag pakiramdam mo ay nawala ito? (How do you boost your self-esteem when you feel like it is lost?)",
        "Ano ang isang bagay na natutunan mong pahalagahan dahil sa mga pagsubok sa buhay? (What is one thing youve learned to value because of life/'s challenges?)",
        "Paano mo pinaprioritize ang iyong mental health kumpara sa iyong pisikal na kalusugan? (How do you prioritize your mental health compared to your physical health?)",
        "Ano ang mga pamamaraan mo upang pamahalaan ang stress sa trabaho o paaralan? (What methods do you use to manage stress at work or school?)",
        "Ano ang natutunan mo mula sa iyong mga pagkatalo? (What have you learned from your failures?)",
        "Kumusta ang iyong emosyonal na estado sa kabila ng lahat ng nangyayari sa paligid mo? (How is your emotional state despite everything happening around you?)",
        "Anong mga bagay ang nagpaparamdam sa'yo na hindi ka nag-iisa? (What things make you feel like you're not alone?)",
        "Paano mo pinahahalagahan ang maliliit na tagumpay sa buhay? (How do you appreciate the small victories in life?)",
        "Paano mo nire-reassess ang iyong mga emosyon kapag pakiramdam mo/'y nadidepress ka? (How do you assess your emotions when you feel depressed?)",
        "Ano ang mga palatandaan na kailangan mo nang magpahinga at maglaan ng oras para sa sarili? (What are the signs that you need rest and time for yourself?)",
        "Paano mo pinapatawad ang mga taong nakasakit sa'yo? (How do you forgive those who have hurt you?)",
        "Anong mga bagay ang nagbibigay sa iyo ng lakas kapag ikaw ay natatakot? (What things give you strength when you are scared?)",
        "Paano mo tinutulungan ang iyong sarili na maging mas masaya? (How do you help yourself to be happier?)",
        "Ano ang pinakamahalagang aral na natutunan mo mula sa iyong pamilya? (What is the most important lesson youve learned from your family?)",
        "Paano mo ginagamit ang iyong mga lakas upang mapabuti ang iyong mental health? (How do you use your strengths to improve your mental health?)",
        "Kumusta ang iyong pananaw sa buhay sa kabila ng mga pagsubok? (How is your outlook on life despite the trials?)",
        "Paano mo natutunan ang sining ng pagpapatawad sa iyong sarili? (How have you learned the art of forgiving yourself?)",
        "Ano ang iyong ginagawa upang mapanatili ang iyong kapayapaan ng isipan? (What do you do to maintain your peace of mind?)",
        "Paano mo pinapatawad ang iyong sarili kapag hindi mo nasunod ang iyong mga plano? (How do you forgive yourself when you dont follow through on your plans?)",
        "Ano ang pinakamahirap na bagay na ginawa mo para sa iyong mental na kalusugan? (What is the hardest thing you/'ve done for your mental well-being?)",
        "Paano mo hinarap ang mga pagsubok na nagdulot ng matinding emosyonal na sakit? (How did you handle challenges that caused you intense emotional pain?)",
        "Ano ang iyong ginagawa upang mapabuti ang iyong relasyon sa iyong sarili? (What do you do to improve your relationship with yourself?)",
        "Paano mo hinaharap ang mga sitwasyon na pakiramdam mo ay parang gumuho ang lahat? (How do you cope when everything feels like it is falling apart?)",
        "Anong mga bagay ang nais mong matutunan upang mapabuti ang iyong mental na kalusugan? (What are things you want to learn to improve your mental health?)",
        "Paano ka bumangon mula sa mga mahihirap na karanasan? (How do you bounce back from difficult experiences?)",
        "Ano ang mga simpleng bagay na nagpapasaya sa'yo bawat araw? (What simple things make you happy each day?)",
        "Paano mo pinapahalagahan ang iyong mga kaibigan kapag ikaw ay dumadaan sa mahirap na panahon? (How do you value your friends when you are going through tough times?)",
        "Ano ang pinakamahalagang bagay na natutunan mo mula sa iyong mga kaibigan? (What is the most important thing you have learned from your friends?)",
        "Paano mo ipinapakita ang suporta sa mga kaibigan mo na dumadaan sa isang pagsubok? (How do you show support to friends who are going through something?)",
        "Paano mo hinaharap ang mga sitwasyon kapag hindi kayo nagkakasundo ng iyong mga kaibigan? (How do you handle situations when you disagree with your friends/' opinions?)",
        "Paano mo pinapabuti ang iyong relasyon sa mga kaibigan kapag may hindi pagkakaintindihan? (How do you improve your relationship with friends when theres a misunderstanding?)",
        "Paano mo tinutulungan ang iyong mga kaibigan kapag sila ay naliligaw? (How do you help your friends when they feel lost?)",
        "Paano mo pinaprioritize ang iyong mga kaibigan at ang iyong sarili kapag kailangan mong magdesisyon? (How do you prioritize your friends and yourself when you need to make a choice?)",
        "Paano mo tinutugunan ang mga pangangailangan o hinihingi ng iyong mga kaibigan? (How do you address the needs or demands of your friends?)",
        "Ano ang iyong mga limitasyon kapag humihingi ng mga bagay ang iyong mga kaibigan na sa tingin mo ay hindi tama para sa iyo? (What are your limits when friends ask for things that you feel are not right for you?)",
        "Paano mo ipinapakita ang iyong sarili sa mga bagong kaibigan o mga taong hindi mo pa kilala? (How do you present yourself to new friends or people you dont know yet?)",
        "Ano ang iyong unang reaksyon kapag ikaw ay bahagi ng isang bagong grupo o komunidad? (What is your first reaction when you are part of a new group or community?)",
        "Paano mo isinasama ang iyong sarili sa bagong grupo nang hindi nawawala ang iyong pagkakakilanlan? (How do you socialize with strangers without losing your sense of self?)",
        "Paano mo nararamdaman kapag kausap mo ang mga tao na hindi mo pa kilala? (How do you feel when talking to people you dont know yet?)",
        "Paano mo pinapalakas ang iyong self-confidence sa mga social gathering, lalo na kapag ikaw ay hindi komportable? (How do you boost your self-confidence in social gatherings, especially when you feel uncomfortable?)",
        "Paano mo ipinapakita ang interes sa mga tao, lalo na sa mga hindi mo pa kilala? (How do you show interest in people, especially those you dont know?)",
        "Paano mo pinahahalagahan ang iyong sarili kapag ikaw ay nasa isang bagong social circle? (How do you value yourself when you're in a new social circle?)",
        "Paano mo pinapabuti ang iyong mga social skills sa trabaho o paaralan? (How do you improve your social skills at work or school?)",
        "Paano mo hinaharap ang mga sitwasyon kapag tinutukso o minamaliit ka ng iba? (How do you handle situations when people tease or belittle you?)",
        "Paano mo tinutulungan ang iyong sarili kapag ikaw ay napapagod sa pakikisalamuha sa iba? (How do you help yourself when you are exhausted from socializing with others?)",
        "Paano mo pinapalakas ang iyong kakayahan sa komunikasyon kahit na ikaw ay nahihirapan? (How do you strengthen your ability to communicate with others even when you're struggling?)",
        "Paano mo tinutulungan ang iyong mga kaibigan na harapin ang kanilang mga takot o alalahanin? (How do you help your friends face their fears or concerns?)",
        "Paano mo pinapabuti ang iyong relasyon sa iyong mga kasamahan sa trabaho o paaralan? (How do you improve your relationships with colleagues or schoolmates?)",
        "Paano mo ipinapakita ang iyong pag-aalala para sa mga mahal mo sa buhay? (How do you show concern for the people you care about?)",
        "Paano mo pinahahalagahan ang iyong mga relasyon sa pamilya at kaibigan? (How do you value your relationships with family and friends?)",
        "Paano mo pinaprioritize ang mga tao sa iyong buhay kapag kinakailangan mong gumawa ng mahahalagang desisyon? (How do you prioritize people in your life when you need to make important decisions?)",
        "Paano mo pinapalaki ang iyong relasyon sa mga taong may malaking epekto sa iyong buhay? (How do you nurture your relationship with people who have a significant impact on your life?)"
    ];
    

    let displayedQuestions = [];
    let currentQuestionIndex = null;

    const mentalQuestionBox = document.getElementById('mental-question');
    const questionBox = document.getElementById('question-box');
    const startButton = document.getElementById('start-button');

    function getRandomQuestion() {
        const remainingQuestions = questions.filter((q, index) => !displayedQuestions.includes(index));

        if (remainingQuestions.length === 0) {
            displayedQuestions = [];
        }

        const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        const randomQuestion = remainingQuestions[randomIndex];
        currentQuestionIndex = questions.indexOf(randomQuestion);
        return randomQuestion;
    }

    startButton.addEventListener('click', () => {
        startButton.classList.add('hidden');
        document.getElementById('prompt-message').classList.add('hidden');
        questionBox.classList.remove('hidden');
        mentalQuestionBox.textContent = getRandomQuestion();
    });

    function changeSection(sectionToShow) {
        homeSection.classList.add('hidden');
        heartTalkSection.classList.add('hidden');
        aboutSection.classList.add('hidden');
        sectionToShow.classList.remove('hidden');
    }

    homeBtn.addEventListener('click', () => changeSection(homeSection));
    heartTalkBtn.addEventListener('click', () => changeSection(heartTalkSection));
    aboutBtn.addEventListener('click', () => changeSection(aboutSection));

    document.getElementById('next-button').addEventListener('click', () => {
        displayedQuestions.push(currentQuestionIndex);
        mentalQuestionBox.textContent = getRandomQuestion();
    });

    document.getElementById('prev-button').addEventListener('click', () => {
        // Ensure there are questions to go back to
        if (displayedQuestions.length > 1) {
            // Remove the current question index from the list
            displayedQuestions.pop();
    
            // Get the previous question index
            currentQuestionIndex = displayedQuestions[displayedQuestions.length - 1];
    
            // Display the previous question
            mentalQuestionBox.textContent = questions[currentQuestionIndex];
        } else if (displayedQuestions.length === 1) {
            // Special case: Display the first question if no earlier ones exist
            currentQuestionIndex = displayedQuestions[0];
            mentalQuestionBox.textContent = questions[currentQuestionIndex];
        } else {
            // If no previous questions at all
            mentalQuestionBox.textContent = "You are already at the beginning of the questions.";
        }
    });
    

    changeSection(homeSection);

    // Theme toggle functionality
    const toggleTheme = () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Light Mode';
        } else {
            themeToggleBtn.textContent = 'Dark Mode';
        }
    };

    themeToggleBtn.addEventListener('click', toggleTheme);
});
// Lightbox functionality
const photoLink = document.getElementById("photo-link");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

photoLink.addEventListener("click", (event) => {
    event.preventDefault();
    const photoSrc = event.target.src;
    lightboxImage.src = photoSrc;
    lightbox.classList.remove("hidden");
});

lightboxClose.addEventListener("click", () => {
    lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", (event) => {
    if (event.target !== lightboxImage) {
        lightbox.classList.add("hidden");
    }
});
