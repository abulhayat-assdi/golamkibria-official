# 📄 ব্লগ পোস্ট টেমপ্লেট | Blog Post Template

এই টেমপ্লেট ব্যবহার করে সহজেই নতুন ব্লগ পোস্ট তৈরি করুন।

---

## 🔷 বাংলা ব্লগ টেমপ্লেট | Bengali Blog Template

```javascript
{
    id: X, // পরবর্তী ID নাম্বার দিন (উদাহরণ: 4, 5, 6...)
    title: "আপনার ব্লগের আকর্ষণীয় শিরোনাম এখানে লিখুন",
    date: "February 1, 2026", // আজকের তারিখ (Month Day, Year ফরম্যাটে)
    category: "Technology", // ক্যাটাগরি নির্বাচন করুন
    tags: ["ট্যাগ ১", "ট্যাগ ২", "ট্যাগ ৩"], // ৩-৫টি সম্পর্কিত ট্যাগ
    image: "/images/blog-X.jpg", // ইমেজ পাথ (X = আপনার ব্লগ নাম্বার)
    excerpt: "আপনার ব্লগের সংক্ষিপ্ত বিবরণ এখানে লিখুন। এটি ২-৩ লাইনের মধ্যে রাখুন এবং পাঠকদের আগ্রহী করে তুলুন।"
},
```

### উদাহরণ:

```javascript
{
    id: 4,
    title: "ফ্রিল্যান্সিং ক্যারিয়ার শুরু করার ১০টি টিপস",
    date: "February 1, 2026",
    category: "Career",
    tags: ["Freelancing", "Career Tips", "Remote Work"],
    image: "/images/blog-4.jpg",
    excerpt: "ফ্রিল্যান্সিং শুরু করতে চান? এই ১০টি কার্যকর টিপস আপনার ক্যারিয়ার শুরু করতে সাহায্য করবে এবং সফল হতে পথ দেখাবে।"
},
```

---

## 🔶 ইংরেজি ব্লগ টেমপ্লেট | English Blog Template

```javascript
{
    id: X, // Next ID number (example: 4, 5, 6...)
    title: "Your Engaging Blog Title Here",
    date: "February 1, 2026", // Today's date (Month Day, Year format)
    category: "Technology", // Select a category
    tags: ["Tag 1", "Tag 2", "Tag 3"], // 3-5 relevant tags
    image: "/images/blog-X.jpg", // Image path (X = your blog number)
    excerpt: "Write a brief description of your blog post here. Keep it within 2-3 lines and make it engaging for readers."
},
```

### Example:

```javascript
{
    id: 5,
    title: "10 Essential Web Development Tools for 2026",
    date: "February 1, 2026",
    category: "Web Development",
    tags: ["Tools", "Productivity", "Development"],
    image: "/images/blog-5.jpg",
    excerpt: "Discover the most powerful and essential web development tools that will boost your productivity and help you build amazing websites in 2026."
},
```

---

## 📋 ফিল্ড ব্যাখ্যা | Field Explanations

### 1. **id** (আইডি)
- **কী**: প্রতিটি ব্লগের ইউনিক নাম্বার
- **কিভাবে**: শেষ ব্লগের ID + 1
- **উদাহরণ**: যদি শেষ ব্লগ id: 3 হয়, তাহলে নতুন ব্লগ id: 4

### 2. **title** (শিরোনাম)
- **কী**: ব্লগের মূল শিরোনাম
- **টিপস**: 
  - আকর্ষণীয় এবং বর্ণনামূলক হতে হবে
  - ৫০-৬০ অক্ষরের মধ্যে রাখুন
  - সংখ্যা ব্যবহার করলে ভালো (উদাহরণ: "১০টি টিপস")
- **উদাহরণ**: 
  - ✅ "রিঅ্যাক্ট শেখার ৫টি সহজ উপায়"
  - ❌ "রিঅ্যাক্ট"

### 3. **date** (তারিখ)
- **কী**: ব্লগ পাবলিশের তারিখ
- **ফরম্যাট**: "Month Day, Year"
- **উদাহরণ**: 
  - "February 1, 2026"
  - "December 25, 2025"

### 4. **category** (ক্যাটাগরি)
- **কী**: ব্লগের প্রধান বিষয়শ্রেণী
- **জনপ্রিয় ক্যাটাগরি**:
  - Technology (প্রযুক্তি)
  - Web Development (ওয়েব ডেভেলপমেন্ট)
  - Design (ডিজাইন)
  - Marketing (মার্কেটিং)
  - Business (ব্যবসা)
  - Career (ক্যারিয়ার)
  - Lifestyle (জীবনযাত্রা)
  - Tutorial (টিউটোরিয়াল)

### 5. **tags** (ট্যাগ)
- **কী**: ব্লগের সাথে সম্পর্কিত কীওয়ার্ড
- **কতগুলো**: ৩-৫টি ট্যাগ
- **টিপস**: নির্দিষ্ট এবং প্রাসঙ্গিক হতে হবে
- **উদাহরণ**: 
  ```javascript
  tags: ["React", "JavaScript", "Frontend Development"]
  tags: ["ফ্রিল্যান্সিং", "আয়", "অনলাইন ক্যারিয়ার"]
  ```

### 6. **image** (ইমেজ)
- **কী**: ব্লগের ফিচার ইমেজ
- **পাথ**: সবসময় `/images/` দিয়ে শুরু
- **ফরম্যাট**: `/images/blog-X.jpg` বা `/images/descriptive-name.jpg`
- **উদাহরণ**: 
  - `/images/blog-4.jpg`
  - `/images/web-development-guide.jpg`

### 7. **excerpt** (সংক্ষিপ্ত বিবরণ)
- **কী**: ব্লগের সংক্ষিপ্ত সারাংশ
- **দৈর্ঘ্য**: ২-৩ লাইন (১৫০-২০০ অক্ষর)
- **টিপস**:
  - মূল বিষয় হাইলাইট করুন
  - পাঠকদের আগ্রহী করুন
  - প্রশ্ন বা সমস্যা উল্লেখ করুন
- **উদাহরণ**:
  - ✅ "ওয়েব ডেভেলপমেন্ট শিখতে চান কিন্তু কোথা থেকে শুরু করবেন বুঝতে পারছেন না? এই গাইডে পাবেন ধাপে ধাপে সম্পূর্ণ দিকনির্দেশনা।"
  - ❌ "এটি ওয়েব ডেভেলপমেন্ট সম্পর্কে।"

---

## 🎨 ক্যাটাগরি এবং ট্যাগ সাজেশন | Category & Tag Suggestions

### প্রযুক্তি | Technology
**ক্যাটাগরি**: Technology, Web Development, Programming, Software  
**ট্যাগ উদাহরণ**: React, JavaScript, Python, AI, Machine Learning, Cloud Computing

### ডিজাইন | Design
**ক্যাটাগরি**: Design, UI/UX, Graphic Design  
**ট্যাগ উদাহরণ**: Figma, Adobe, Web Design, Mobile Design, Color Theory

### মার্কেটিং | Marketing
**ক্যাটাগরি**: Marketing, Digital Marketing, SEO  
**ট্যাগ উদাহরণ**: Social Media, Content Marketing, Email Marketing, Analytics

### ক্যারিয়ার | Career
**ক্যাটাগরি**: Career, Freelancing, Job Tips  
**ট্যাগ উদাহরণ**: Resume, Interview, Remote Work, Skill Development

### ব্যবসা | Business
**ক্যাটাগরি**: Business, Entrepreneurship, Startup  
**ট্যাগ উদাহরণ**: Business Strategy, Finance, Leadership, Growth

---

## ✅ চেকলিস্ট | Checklist

নতুন ব্লগ পোস্ট করার আগে এই চেকলিস্ট ফলো করুন:

- [ ] ইউনিক ID দিয়েছি
- [ ] আকর্ষণীয় শিরোনাম লিখেছি
- [ ] সঠিক তারিখ দিয়েছি
- [ ] উপযুক্ত ক্যাটাগরি নির্বাচন করেছি
- [ ] ৩-৫টি প্রাসঙ্গিক ট্যাগ যোগ করেছি
- [ ] ইমেজ `public/images/` ফোল্ডারে আপলোড করেছি
- [ ] সঠিক ইমেজ পাথ দিয়েছি
- [ ] আকর্ষণীয় excerpt লিখেছি (২-৩ লাইন)
- [ ] সকল কমা (`,`) এবং ব্র্যাকেট সঠিক আছে
- [ ] ফাইল সেভ করেছি
- [ ] ব্রাউজারে চেক করেছি

---

## 🚀 দ্রুত শুরু করুন | Quick Start

1. এই টেমপ্লেট কপি করুন
2. আপনার তথ্য দিয়ে পূরণ করুন
3. `src/data/blogData.js` ফাইলে পেস্ট করুন
4. সেভ করুন এবং দেখুন!

**Happy Blogging! 🎉**
