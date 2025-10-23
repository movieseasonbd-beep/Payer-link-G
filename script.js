document.addEventListener('DOMContentLoaded', () => {
    // প্রয়োজনীয় সকল HTML এলিমেন্ট সিলেক্ট করা
    const videoLinkInput = document.getElementById('video-link');
    const posterLinkInput = document.getElementById('poster-link');
    const generateBtn = document.getElementById('generate-btn');
    const outputContainer = document.getElementById('output-container');
    const outputLinkInput = document.getElementById('output-link');
    const copyBtn = document.getElementById('copy-btn');

    // "লিঙ্ক তৈরি করুন" বাটনে ক্লিক করলে কী হবে
    generateBtn.addEventListener('click', () => {
        // ইনপুট থেকে ভিডিও এবং পোস্টার লিঙ্ক নেওয়া
        const videoLink = videoLinkInput.value.trim();
        const posterLink = posterLinkInput.value.trim();

        // যদি কোনো ইনপুট খালি থাকে, তাহলে ব্যবহারকারীকে জানানো
        if (!videoLink || !posterLink) {
            alert('অনুগ্রহ করে উভয় লিঙ্ক পূরণ করুন।');
            return;
        }

        // আপনার প্লেয়ারের মূল URL
        const basePlayerURL = 'https://movieseasonbd-beep.github.io/player/';

        // URL প্যারামিটারগুলো এনকোড করা, যাতে লিঙ্কে কোনো সমস্যা না হয়
        const encodedVideoLink = encodeURIComponent(videoLink);
        const encodedPosterLink = encodeURIComponent(posterLink);

        // চূড়ান্ত লিঙ্ক তৈরি করা
        const finalLink = `${basePlayerURL}?id=${encodedVideoLink}&poster=${encodedPosterLink}`;

        // তৈরি করা লিঙ্কটি আউটপুট বক্সে দেখানো
        outputLinkInput.value = finalLink;
        outputContainer.classList.remove('hidden'); // আউটপুট সেকশনটি দেখানো
    });

    // "কপি করুন" বাটনে ক্লিক করলে কী হবে
    copyBtn.addEventListener('click', () => {
        // আউটপুট বক্স থেকে লিঙ্কটি সিলেক্ট করা
        outputLinkInput.select();
        outputLinkInput.setSelectionRange(0, 99999); // মোবাইল ডিভাইসের জন্য

        // ক্লিপবোর্ডে লিঙ্কটি কপি করা
        navigator.clipboard.writeText(outputLinkInput.value).then(() => {
            // কপি সফল হলে বাটনের লেখা পরিবর্তন করা
            copyBtn.textContent = 'কপি হয়েছে!';
            // ২ সেকেন্ড পর আবার আগের লেখায় ফিরে আসা
            setTimeout(() => {
                copyBtn.textContent = 'কপি করুন';
            }, 2000);
        }).catch(err => {
            alert('লিঙ্কটি কপি করা যায়নি।');
            console.error('Copy failed', err);
        });
    });
});
