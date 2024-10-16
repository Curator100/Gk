let points = 0;
const gkFacts = [
  "বাংলাদেশের মুক্তিযুদ্ধ শুরু হয় ২৬ মার্চ ১৯৭১ সালে।",
  "মুক্তিযুদ্ধের প্রধান সেনাপতি ছিলেন জেনারেল আতাউল গনি ওসমানী।",
  "মুক্তিযুদ্ধের সময় বাংলাদেশকে ১১টি সেক্টরে ভাগ করা হয়েছিল।",
  "১৬ ডিসেম্বর ১৯৭১ সালে বিজয় দিবস পালিত হয়।",
  "৭ মার্চ ১৯৭১ সালে বঙ্গবন্ধু শেখ মুজিবুর রহমানের ভাষণ স্বাধীনতার দিকনির্দেশনা দেয়।",
  const gkFacts = [
  "বাংলাদেশের মুক্তিযুদ্ধ ২৬ মার্চ ১৯৭১ সালে শুরু হয় এবং ১৬ ডিসেম্বর ১৯৭১ সালে বিজয় অর্জিত হয়।",
  "বঙ্গবন্ধু শেখ মুজিবুর রহমানের ৭ মার্চের ভাষণ মুক্তিযুদ্ধের অন্যতম প্রধান অনুপ্রেরণা ছিল।",
  "মুক্তিযুদ্ধের সময় বাংলাদেশকে ১১টি সেক্টরে ভাগ করে যুদ্ধ পরিচালনা করা হয়।",
  "মুজিবনগর সরকার ১০ এপ্রিল ১৯৭১ সালে বাংলাদেশ সরকারের অস্থায়ী সদর দপ্তর হিসেবে গঠিত হয়।",
  "মুক্তিযুদ্ধের প্রধান সেনাপতি ছিলেন জেনারেল আতাউল গনি ওসমানী, যিনি মুক্তিযোদ্ধাদের নেতৃত্ব দেন।",
  "মুক্তিযুদ্ধের সময় প্রায় ৩০ লাখ মানুষ প্রাণ হারিয়েছিলেন এবং ২ লাখ নারী নির্যাতনের শিকার হয়েছিলেন।",
  "মুক্তিযুদ্ধের ৯ মাসে প্রায় ১ কোটি মানুষ ভারতে আশ্রয় নিয়েছিলেন শরণার্থী হিসেবে।",
  "অপারেশন সার্চলাইট ছিল পাকিস্তানি বাহিনীর একটি নিষ্ঠুর অভিযান যা ২৫ মার্চ ১৯৭১ সালে শুরু হয়।",
  "১৯৭১ সালে বাংলাদেশ মুক্তিযুদ্ধের সময় ভারতের তৎকালীন প্রধানমন্ত্রী ইন্দিরা গান্ধী বাংলাদেশকে সমর্থন জানান।",
  "১৯৭১ সালের ৩ ডিসেম্বর পাকিস্তান ভারত আক্রমণ করলে ভারত আনুষ্ঠানিকভাবে মুক্তিযুদ্ধে অংশগ্রহণ করে।",
  "মুক্তিযুদ্ধে ভারতীয় মিত্রবাহিনী এবং বাংলাদেশের মুক্তিযোদ্ধাদের সম্মিলিত প্রচেষ্টায় পাকিস্তান সেনাবাহিনী পরাজিত হয়।",
  "মুক্তিযুদ্ধের সময় মুক্তিযোদ্ধাদের বিভিন্ন ধরনের গেরিলা কৌশল ব্যবহারের জন্য প্রশিক্ষণ দেওয়া হয়েছিল।",
  "বিজয়ের পর ১৬ ডিসেম্বর ১৯৭১ সালে রেসকোর্স ময়দানে পাকিস্তানি বাহিনী আনুষ্ঠানিকভাবে আত্মসমর্পণ করে।",
  "মুক্তিযুদ্ধে ভারতের 'মিত্রবাহিনী' সক্রিয়ভাবে অংশগ্রহণ করে এবং প্রায় ১,৫০০ ভারতীয় সেনা প্রাণ হারায়।",
  "মুক্তিযুদ্ধের সময় পাকিস্তানী বাহিনীর বিরুদ্ধে স্বাধীন বাংলা বেতার কেন্দ্র থেকে মুক্তিযোদ্ধাদের অনুপ্রেরণা দেওয়া হতো।",
  "১৪ ডিসেম্বর ১৯৭১ সালে পাকিস্তানি বাহিনী ঢাকা শহরে বুদ্ধিজীবী হত্যাকাণ্ড পরিচালনা করে, যা বুদ্ধিজীবী দিবস হিসেবে পালিত হয়।",
  "মুক্তিযুদ্ধের সময় বাংলাদেশের বহু শিল্পী, সাহিত্যিক এবং সাংবাদিক পাকিস্তানি বাহিনীর আক্রমণের শিকার হন।",
  "মুক্তিযুদ্ধে বীরত্বপূর্ণ ভূমিকার জন্য বাংলাদেশ সরকার বীরশ্রেষ্ঠ উপাধিতে ৭ জন শহীদ মুক্তিযোদ্ধাকে সম্মানিত করেছে।",
  "মুক্তিযুদ্ধের সময় মুক্তিযোদ্ধারা তাজউদ্দীন আহমদের নেতৃত্বে মুজিবনগর সরকার পরিচালনা করেন।",
  "বাংলাদেশের মুক্তিযুদ্ধে পাকিস্তানি বাহিনীর নির্মমতাকে আন্তর্জাতিকভাবে তুলে ধরতে বিভিন্ন প্রচেষ্টা চালানো হয়েছিল।",
  "৭ ডিসেম্বর ১৯৭১ সালে মিত্রবাহিনী এবং মুক্তিযোদ্ধারা ঢাকা অভিমুখে অগ্রসর হতে থাকে।",
  "১৬ ডিসেম্বর ১৯৭১ সালে পাকিস্তানের জেনারেল নিয়াজি ভারতীয় এবং বাংলাদেশী বাহিনীর কাছে আত্মসমর্পণ করেন।",
  "মুক্তিযুদ্ধে মুজিবনগর সরকারের অস্থায়ী প্রেসিডেন্ট ছিলেন সৈয়দ নজরুল ইসলাম।",
  "মুক্তিযুদ্ধের সময় আন্তর্জাতিক গণমাধ্যমে পাকিস্তানী সেনাবাহিনীর নৃশংসতা তুলে ধরা হয়েছিল।",
  "মুক্তিযুদ্ধের একটি উল্লেখযোগ্য সেক্টর ছিল ২ নং সেক্টর, যার কমান্ডার ছিলেন মেজর খালেদ মোশাররফ।",
  "মুক্তিযুদ্ধের সময় গঠিত মুক্তিফৌজ মুক্তিযোদ্ধাদের জন্য একটি বৃহত্তর সামরিক বাহিনী হিসেবে কাজ করেছিল।",
  "মুক্তিযুদ্ধে বীরশ্রেষ্ঠ মতিউর রহমান পাকিস্তানি বিমানবাহিনীর একজন পাইলট ছিলেন, যিনি বাংলাদেশের স্বাধীনতার জন্য আত্মোৎসর্গ করেন।",
  "রানি মহলানবিশ মুক্তিযুদ্ধে গুরুত্বপূর্ণ ভূমিকা পালন করেন, বিশেষ করে শরণার্থীদের সেবায় কাজ করেন।",
  "মুক্তিযুদ্ধে অংশগ্রহণকারী নারীদের মধ্যে বীরপ্রতীক উপাধিপ্রাপ্ত তারামন বিবি অন্যতম।",
  "মুক্তিযুদ্ধে ভারতীয় নৌবাহিনী 'অপারেশন ট্রাইডেন্ট' পরিচালনা করে যা পাকিস্তানি নৌবহরে প্রচণ্ড আঘাত হানে।",
  "মুক্তিযুদ্ধের সময় বাংলাদেশে স্বাধীনতা আন্দোলনের সমর্থনে 'কনসার্ট ফর বাংলাদেশ' আয়োজন করেছিলেন জর্জ হ্যারিসন।",
  "১৯৭১ সালের ২৬ মার্চ বাংলাদেশকে স্বাধীন রাষ্ট্র হিসেবে ঘোষণা করা হয় এবং মুক্তিযুদ্ধ শুরু হয়।",
  "বঙ্গবন্ধু শেখ মুজিবুর রহমানের মুক্তির দাবিতে বিশ্বজুড়ে প্রতিবাদ এবং আন্দোলন সংগঠিত হয়েছিল।",
  "মুক্তিযুদ্ধের সময় 'জয় বাংলা' স্লোগানটি ছিল বাংলাদেশের স্বাধীনতার প্রতীক।",
  "মুক্তিযুদ্ধের সময় বিভিন্ন প্রবাসী বাংলাদেশি সংগঠন মুক্তিযোদ্ধাদের জন্য অর্থ সংগ্রহ করেছিল।",
  "বীরশ্রেষ্ঠ রুহুল আমিন ছিলেন বাংলাদেশ নৌবাহিনীর একজন নায়ক, যিনি আত্মোৎসর্গ করেন।",
  "মুক্তিযুদ্ধে অংশগ্রহণকারী রাঙ্গামাটির চিংকিৎ কুমার চাকমা ছিলেন বাংলাদেশের প্রথম আদিবাসী মুক্তিযোদ্ধা।",
  "মুক্তিযুদ্ধে ৪ নং সেক্টরের কমান্ডার ছিলেন সি আর দত্ত, যিনি ময়মনসিংহ এবং সিলেট অঞ্চলে যুদ্ধ পরিচালনা করেন।",
  "মুক্তিযুদ্ধে শহীদ জননী জাহানারা ইমাম তার সন্তানকে হারিয়েও স্বাধীনতার পক্ষে অবিচল থাকেন।",
  "মুক্তিযুদ্ধের সময় ঢাকা বিশ্ববিদ্যালয় ছিল পাকিস্তানি বাহিনীর হামলার মূল কেন্দ্রবিন্দু।",
  "মুক্তিযুদ্ধের সময় 'অপারেশন জ্যাকপট' ছিল মুক্তিবাহিনীর সবচেয়ে সফল নৌঅভিযান।",
  "মুক্তিযুদ্ধে সঙ্গীত ছিল একটি গুরুত্বপূর্ণ ভূমিকা পালনকারী মাধ্যম, বিশেষ করে স্বাধীন বাংলা বেতার কেন্দ্র।",
  "স্বাধীনতা যুদ্ধের সময় বাংলাদেশের জাতীয় সংগীত 'আমার সোনার বাংলা' ছিল মুক্তিযোদ্ধাদের মনোবল বাড়ানোর অন্যতম মাধ্যম।",
  "মুক্তিযুদ্ধে বীরশ্রেষ্ঠ নূর মোহাম্মদ শেখ যশোরে শত্রুপক্ষের বিরুদ্ধে লড়াই করতে গিয়ে শহীদ হন।",
  "৭ ডিসেম্বর ১৯৭১ সালে ঢাকা শহরের অদূরে টঙ্গীতে মুক্তিযোদ্ধারা পাকিস্তানি বাহিনীর সাথে একটি বড় সংঘর্ষে জড়িয়ে পড়ে।",
  "মুক্তিযুদ্ধের সময় তাজউদ্দীন আহমদ বাংলাদেশের প্রথম প্রধানমন্ত্রী ছিলেন।",
  "বীরশ্রেষ্ঠ মোহাম্মদ মোস্তফা কামাল মুক্তিযুদ্ধে কুমিল্লা অঞ্চলে শত্রুপক্ষের বিরুদ্ধে লড়াই করে শহীদ হন।",
  "১৯৭১ সালে মুক্তিযুদ্ধের সময় বঙ্গবন্ধু শেখ মুজিবুর রহমানকে পাকিস্তানে বন্দী করা হয়েছিল।",
  "মুক্তিযুদ্ধের সময় বীরশ্রেষ্ঠ হামিদুর রহমান কুষ্টিয়ার মাহেন্দ্রগঞ্জে যুদ্ধ করতে গিয়ে শহীদ হন।",
  "মুক্তিযুদ্ধের সময় চট্টগ্রামে একাত্তরের ১০ এপ্রিল স্বাধীন বাংলা পতাকা প্রথম উত্তোলিত হয়।",
  "বাংলাদেশের মুক্তিযুদ্ধের ইতিহাসের সাথে যুক্ত ১০ জানুয়ারি ১৯৭২ বঙ্গবন্ধুর স্বদেশ প্রত্যাবর্তনের দিনটি অত্যন্ত তাৎপর্যপূর্ণ।"
];// Add the rest of the 50 facts here
];

function getRandomFact() {
  return gkFacts[Math.floor(Math.random() * gkFacts.length)];
}

document.getElementById("tap-area").addEventListener("click", () => {
  points += 3;
  document.getElementById("points").textContent = points;
  document.getElementById("gk-fact").textContent = getRandomFact();
});
