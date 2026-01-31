# 📦 GitHub এ প্রজেক্ট আপলোড করার গাইড

## ⚠️ প্রয়োজনীয় সফটওয়্যার

আপনার সিস্টেমে **Git ইনস্টল করা নেই**। GitHub এ প্রজেক্ট আপলোড করার জন্য প্রথমে Git ইনস্টল করতে হবে।

---

## 🔧 অপশন ১: Git ইনস্টল করুন (সুপারিশকৃত)

### ধাপ ১: Git ডাউনলোড করুন
- **লিংক**: https://git-scm.com/download/win
- "64-bit Git for Windows Setup" ডাউনলোড করুন

### ধাপ ২: Git ইনস্টল করুন
1. ডাউনলোড করা ফাইল রান করুন
2. সব ডিফল্ট সেটিংস রাখুন (শুধু "Next" ক্লিক করতে থাকুন)
3. ইনস্টলেশন সম্পন্ন হলে "Finish" ক্লিক করুন

### ধাপ ৩: কম্পিউটার রিস্টার্ট করুন
- Git সঠিকভাবে কাজ করার জন্য রিস্টার্ট প্রয়োজন

### ধাপ ৪: আমাকে জানান
- রিস্টার্টের পর আমাকে জানান, আমি GitHub এ আপলোড করব

---

## 🖥️ অপশন ২: GitHub Desktop ব্যবহার করুন (সবচেয়ে সহজ)

GitHub Desktop একটি GUI টুল যা Git কমান্ড না জেনেও ব্যবহার করা যায়।

### ধাপ ১: GitHub Desktop ডাউনলোড করুন
- **লিংক**: https://desktop.github.com/
- "Download for Windows" ক্লিক করুন

### ধাপ ২: ইনস্টল এবং লগইন করুন
1. ডাউনলোড করা ফাইল রান করুন
2. GitHub Desktop খুলুন
3. "Sign in to GitHub.com" ক্লিক করুন
4. আপনার GitHub একাউন্ট দিয়ে লগইন করুন

### ধাপ ৩: লোকাল রিপোজিটরি যোগ করুন
1. "File" → "Add Local Repository" ক্লিক করুন
2. "Choose..." বাটনে ক্লিক করুন
3. আপনার প্রজেক্ট ফোল্ডার সিলেক্ট করুন:
   ```
   d:\Antigravity\GK - Portfolio
   ```
4. "Add Repository" ক্লিক করুন

### ধাপ ৪: Repository Initialize করুন
যদি "create a repository" অপশন আসে:
1. "Create a repository" ক্লিক করুন
2. Git Ignore: "Node" সিলেক্ট করুন
3. "Create Repository" ক্লিক করুন

### ধাপ ৫: Commit করুন
1. বাম দিকে সব পরিবর্তিত ফাইল দেখাবে
2. নিচে "Summary" বক্সে লিখুন: `Initial commit - Portfolio with blog system`
3. "Commit to main" বাটনে ক্লিক করুন

### ধাপ ৬: GitHub এ Publish করুন
1. উপরে "Publish repository" বাটনে ক্লিক করুন
2. **Repository URL** ফিল্ডে আপনার রিপোজিটরি নাম দিন: `golamkibria-official`
3. "Keep this code private" আনচেক করুন (যদি পাবলিক করতে চান)
4. "Publish Repository" ক্লিক করুন

### ধাপ ৭: যাচাই করুন
- https://github.com/abulhayat-assdi/golamkibria-official ভিজিট করুন
- আপনার সব ফাইল দেখতে পাবেন

---

## 📝 অপশন ৩: ম্যানুয়াল আপলোড (Git ছাড়া)

যদি Git ইনস্টল করতে না চান, তাহলে ম্যানুয়ালি আপলোড করতে পারেন:

### ধাপ ১: GitHub এ যান
- https://github.com/abulhayat-assdi/golamkibria-official এ যান

### ধাপ ২: ফাইল আপলোড করুন
1. "Add file" → "Upload files" ক্লিক করুন
2. আপনার প্রজেক্ট ফোল্ডার থেকে সব ফাইল সিলেক্ট করুন
3. ড্র্যাগ এন্ড ড্রপ করুন
4. "Commit changes" ক্লিক করুন

**⚠️ সতর্কতা**: এই পদ্ধতিতে `node_modules` এবং `dist` ফোল্ডার আপলোড করবেন না!

---

## 🎯 সুপারিশ

**সবচেয়ে সহজ**: **অপশন ২ (GitHub Desktop)** ব্যবহার করুন
- GUI ইন্টারফেস
- কমান্ড লাইন জানার প্রয়োজন নেই
- ভবিষ্যতে সহজে আপডেট করতে পারবেন

**সবচেয়ে পাওয়ারফুল**: **অপশন ১ (Git CLI)** ব্যবহার করুন
- সব ফিচার পাবেন
- কমান্ড লাইন থেকে কাজ করতে পারবেন
- প্রফেশনাল ডেভেলপমেন্টের জন্য ভালো

---

## 📞 পরবর্তী ধাপ

আপনি কোন অপশন বেছে নিয়েছেন তা আমাকে জানান:
1. **Git ইনস্টল করেছি** - আমি কমান্ড দিয়ে আপলোড করব
2. **GitHub Desktop ব্যবহার করব** - উপরের গাইড ফলো করুন
3. **ম্যানুয়াল আপলোড করব** - উপরের গাইড ফলো করুন

**আপনার GitHub Repository**: https://github.com/abulhayat-assdi/golamkibria-official
