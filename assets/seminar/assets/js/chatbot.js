/**
 * TechCADD Chatbot System
 * Clean, modern, and production-ready chatbot for TechCADD
 */

class TechCADDChatbot {
    constructor() {
        // Predefined responses
        this.responses = {
            greetings: [
                "Hello! 👋 Welcome to TechCADD Computer Education. How can I help today?",
                "Hi there! 🎉 Need details on courses, training, or demo booking?",
                "Welcome to TechCADD! 🚀 What would you like to know about our courses?",
            ],

            about: `✨ About TechCADD Computer Education:<br><br>
🏆 Leading IT training institute in Punjab with 10+ years of excellence<br>
✅ Industry-recognized certifications<br>
✅ 5000+ successful students placed in top companies<br>
✅ Expert faculty with real-world experience<br>
✅ Modern computer labs and live projects<br>
✅ Multiple branches across Punjab<br><br>
🎯 Our Mission: Empower students with practical IT skills for successful careers`,

            certificate: `🎓 Certifications with Every Course:<br><br>
✔ Industry-recognized institute certification<br>
✔ Valid for private sector opportunities<br>
✔ Valuable add-on for overseas IT roles<br>
✔ Completion certificate for all programs<br>
✔ Project completion certificates for practical work`,

            branches: `📍 TechCADD Branches Across Punjab:<br><br>
🏢 Main Branch: Jalandhar (Head Office)<br>
🏢 Other Locations: Ludhiana, Chandigarh, Phagwara, Maqsudan, Hoshiarpur<br><br>
📱 All branches have modern facilities and experienced trainers.`,

            faculty: `👨‍🏫 Our Expert Faculty Team:<br><br>
✅ Industry professionals with 5+ years experience<br>
✅ Certified instructors in their domains<br>
✅ Training on latest technologies<br>
✅ Hands-on project mentorship<br>
✅ Doubt clearing and career guidance`,

            facilities: `🖥 World-Class Infrastructure:<br><br>
💻 Modern computer labs with latest systems<br>
🌐 High-speed internet<br>
📊 Smart classrooms with projectors<br>
📚 Technical library resources<br>
☕ Student lounge and break areas<br>
🚗 Parking available`,

            timings: `🕒 Institute Timings & Class Schedule:<br><br>
🏢 Office Hours:<br>
• Monday - Saturday: 9:00 AM - 6:00 PM<br>
• Sunday: 10:00 AM - 4:00 PM<br><br>
📚 Class Timings:<br>
• Morning: 9:00 AM - 12:00 PM<br>
• Afternoon: 1:00 PM - 4:00 PM<br>
• Evening: 5:00 PM - 8:00 PM<br>
• Weekend: Saturday & Sunday batches`,

            coursesOverview: `🎓 Course Categories at TechCADD:<br><br>
💻 Programming & Development:<br>
• Python, Java, C/C++, Web Development, MERN/MEAN, PHP Full Stack, Kotlin<br><br>
📈 Digital Marketing:<br>
• SEO, Social Media, Google Ads, WordPress, Shopify<br><br>
🤖 Data Science & AI:<br>
• Machine Learning, Data Analytics, Power BI, Tableau, Deep Learning<br><br>
🔒 Cyber Security:<br>
• Ethical Hacking, Network Security, Cloud Security, Linux Admin<br><br>
🎯 Industrial Training:<br>
• 45 Days, 6 Weeks, 6 Months<br><br>
📚 After 12th Programs:<br>
• 6 Months Certificates & 1 Year Professional Programs<br><br>
Which category would you like to explore?`,

            courses: {
                programming: {
                    title: "Programming Courses 💻",
                    content: `We offer comprehensive programming courses:<br><br>
🔥 Popular Courses:<br>
• Python Programming (projects + APIs)<br>
• Java Development (OOP, Spring basics)<br>
• Web Development (HTML, CSS, JS, React basics)<br>
• MERN Stack (MongoDB, Express, React, Node.js)<br>
• PHP Full Stack (PHP + MySQL + frontend)<br>
• C/C++ Programming (fundamentals, DS basics)<br>
• Kotlin Development (Android basics)<br><br>
📚 You'll Learn:<br>
• Hands-on coding with real projects<br>
• Git/GitHub version control<br>
• Databases & basic API development<br>
• Portfolio building for jobs<br><br>
Which programming path interests you?`,
                },

                digitalMarketing: {
                    title: "Digital Marketing Courses 📈",
                    content: `Master Digital Marketing with practical training:<br><br>
🎯 Highlights:<br>
• Complete Digital Marketing<br>
• Social Media (FB/IG/LinkedIn)<br>
• Google Ads (PPC)<br>
• SEO (on-page/off-page)<br>
• WordPress & Shopify<br><br>
🏆 Benefits:<br>
• Live campaigns & tools<br>
• Real client projects<br>
• Expert mentorship<br>
• Interview preparation<br><br>
Ready to start digital marketing?`,
                },

                dataScience: {
                    title: "Data Science & AI Courses 🤖",
                    content: `Enter the world of AI & Data Science:<br><br>
🧠 Programs:<br>
• Data Science (Python, Stats fundamentals)<br>
• Machine Learning (algorithms, models)<br>
• Artificial Intelligence (intro to DL)<br>
• Power BI & Tableau (dashboards)<br>
• Data Analytics (Excel/BI tools basics)<br><br>
📊 Skills:<br>
• Python for data work<br>
• Visualizations & insights<br>
• Model building basics<br>
• Practical case studies<br><br>
Explore AI/Data career paths?`,
                },

                cyberSecurity: {
                    title: "Cyber Security Courses 🔒",
                    content: `Protect the digital world with cyber skills:<br><br>
🛡 Programs:<br>
• Cyber Security Fundamentals<br>
• Ethical Hacking (intro to pentesting)<br>
• Cloud Security (AWS/Azure basics)<br>
• Network Security (basics)<br>
• Linux Administration<br><br>
🎯 Learn:<br>
• Vulnerability awareness<br>
• Security tools basics<br>
• Incident response overview<br>
• Compliance fundamentals<br><br>
Interested in Cyber Security?`,
                },
            },

            placement: {
                title: "Excellent Placement Support 🎯",
                content: `Your career success matters to us:<br><br>
📈 Placement Support:<br>
• Strong placement assistance<br>
• Multiple hiring partners & drives<br>
• Alumni in reputed MNCs<br><br>
🎓 Career Services:<br>
• Resume building workshops<br>
• Mock interviews & soft skills<br>
• LinkedIn profile optimization<br>
• Portfolio guidance<br><br>
Ready to accelerate your career?`,
            },

            industrialTraining: {
                title: "Industrial Training Programs 🏭",
                content: `Gain real industry exposure:<br><br>
⏱ Durations:<br>
• 45 Days • 6 Weeks • 6 Months<br><br>
🎯 Benefits:<br>
• Live projects & mentorship<br>
• Exposure to current tools<br>
• Completion certificates<br>
• Career guidance<br><br>
Which duration suits you?`,
            },

            after12th: {
                title: "After 12th Career Programs 🎓",
                content: `Shape your career with focused programs:<br><br>
📚 6 Months Certificates:<br>
• Digital Marketing<br>
• Python Programming<br>
• ML & AI (certificate)<br>
• Cyber Security Basics<br><br>
🎓 1 Year Programs:<br>
• AI & Data Science (advanced)<br>
• Cloud Computing & DevOps (overview)<br>
• Full Stack Web Development<br>
• Digital Marketing & Communication<br><br>
Which path excites you?`,
            },

            admission: `📝 Simple Admission Process:<br><br>
1️⃣ Choose your course<br>
2️⃣ Fill registration form (online/offline)<br>
3️⃣ Submit required documents<br>
4️⃣ Complete enrollment<br><br>
✅ No entrance exam • Flexible batches • Guidance at every step`,

            documents: `📑 Documents Required for Admission:<br><br>
📄 Essential:<br>
• 2-3 passport-size photos<br>
• Govt ID (Aadhar etc.)<br>
• Last qualification certificate<br>
• Active phone & email<br><br>
📋 Optional:<br>
• Previous course certificates<br>
• Experience letters (if any)<br><br>
💡 Photocopies are acceptable`,

            eligibility: `🎯 Course Eligibility:<br><br>
📚 Most Courses:<br>
• 10+2 (any stream) • Basic computer knowledge • Willingness to learn<br><br>
🎓 Advanced Tracks:<br>
• Graduation preferred • Some background helpful<br><br>
👥 Ideal For:<br>
• Students • Graduates • Working professionals • Career changers`,

            offers: `🎁 Student Benefits:<br><br>
🏆 Possible Benefits:<br>
• Scholarships (merit-based)<br>
• Early enrollment advantages<br>
• Group/Referral benefits<br><br>
💡 Extras:<br>
• Free demo classes<br>
• Career counseling<br>
• Alumni network access`,

            modes: `💻 Flexible Learning Options:<br><br>
📚 Class Modes:<br>
• Classroom (hands-on)<br>
• Live online (interactive)<br>
• Hybrid (flexible)<br>
• Weekend batches<br><br>
⏰ Scheduling:<br>
• Morning/Afternoon/Evening<br>
• Weekend-only options<br>
• Recorded sessions (if provided)<br>
• Doubt-clearing support<br><br>
Which mode suits you?`,

            contact: `📞 Contact Information:<br><br>
☎ Phone: <a href="tel:+919888122255">+91 9888122255</a><br>
📧 Email: <a href="mailto:info@techcadd.com">info@techcadd.com</a><br>
📍 Address: TechCADD Computer Education, Jalandhar, Punjab<br><br>
🕒 Office Hours:<br>
Mon-Sat: 9:00 AM - 6:00 PM • Sun: 10:00 AM - 4:00 PM`,

            demo: `🎯 Book Your Free Demo Class:<br><br>
✅ 1-hour interactive session<br>
✅ Curriculum overview<br>
✅ Career guidance<br><br>
📅 Slots: Morning / Evening / Weekend<br>
🎁 Book today to secure your seat!<br><br>
Click here to book: <a href="modal.php">modal.php</a>`,
        };

        // Quick reply shortcuts
        this.quickReplies = [{
                text: "Course Information",
                action: "coursesOverview"
            },
            {
                text: "Admission Process",
                action: "admission"
            },
            {
                text: "Industrial Training",
                action: "industrialTraining"
            },
            {
                text: "Job Placement",
                action: "placement"
            },
            {
                text: "Programming Courses",
                action: "programming"
            },
            {
                text: "Digital Marketing",
                action: "digitalMarketing"
            },
            {
                text: "Data Science & AI",
                action: "dataScience"
            },
            {
                text: "Cyber Security",
                action: "cyberSecurity"
            },
            {
                text: "After 12th Programs",
                action: "after12th"
            },
            {
                text: "Contact Us",
                action: "contact"
            },
            {
                text: "Book Demo",
                action: "demo"
            },
        ];

        this.isTyping = false;
    }

    // Core
    getResponse(userInput) {
        const input = (userInput || "").toLowerCase().trim();

        // Greetings
        if (this.matchPatterns(input, ["hi", "hello", "hey", "namaste", "good morning", "good afternoon", "good evening"])) {
            return this.getRandomResponse(this.responses.greetings);
        }

        // About & Info
        if (this.matchPatterns(input, ["techcadd", "about techcadd", "institute"])) return this.responses.about;
        if (this.matchPatterns(input, ["certificate", "certification", "govt approved", "valid certificate"])) return this.responses.certificate;
        if (this.matchPatterns(input, ["branches", "locations", "address", "where located"])) return this.responses.branches;
        if (this.matchPatterns(input, ["faculty", "trainers", "teachers", "instructors"])) return this.responses.faculty;
        if (this.matchPatterns(input, ["facilities", "infrastructure", "labs", "equipment"])) return this.responses.facilities;
        if (this.matchPatterns(input, ["timings", "office hours", "working hours", "schedule"])) return this.responses.timings;

        // Courses by category
        if (this.matchPatterns(input, ["python", "java", "programming", "coding", "web development", "mern", "php", "c++", "kotlin"])) {
            return this.responses.courses.programming.content;
        }
        if (this.matchPatterns(input, ["digital marketing", "seo", "social media", "google ads", "marketing", "wordpress", "shopify"])) {
            return this.responses.courses.digitalMarketing.content;
        }
        if (this.matchPatterns(input, ["data science", "machine learning", "artificial intelligence", "ai", "ml", "data analyst", "power bi", "tableau"])) {
            return this.responses.courses.dataScience.content;
        }
        if (this.matchPatterns(input, ["cyber security", "ethical hacking", "security", "hacking", "network security", "cloud security", "linux"])) {
            return this.responses.courses.cyberSecurity.content;
        }

        // Summaries
        if (this.matchPatterns(input, ["course", "courses", "what courses", "available courses", "study", "learn"])) {
            return this.responses.coursesOverview;
        }

        // Training & After 12th
        if (this.matchPatterns(input, ["industrial training", "45 days", "6 weeks", "6 months training", "internship", "live projects"])) {
            return this.responses.industrialTraining.content;
        }
        if (this.matchPatterns(input, ["after 12th", "after 12", "12th courses", "career courses", "professional courses"])) {
            return this.responses.after12th.content;
        }

        // Placement
        if (this.matchPatterns(input, ["placement", "job", "career", "employment", "hiring", "job support"])) {
            return `${this.responses.placement.title}<br><br>${this.responses.placement.content}`;
        }
        if (this.matchPatterns(input, ["guarantee placement", "100% job guarantee", "job guarantee"])) {
            return `✅ We provide strong placement support with a solid track record.<br>
⚡ While no institute can promise 100% jobs, our students are working with reputed companies including TCS, Wipro, Infosys, Amazon, and more.`;
        }
        if (this.matchPatterns(input, ["internship", "intern", "training company"])) {
            return `📚 Internship & Live Project Opportunities:<br><br>
✔ Hands-on training<br>
✔ Industry mentorship<br>
✔ Real project experience for your resume`;
        }

        // Admissions
        if (this.matchPatterns(input, ["admission", "enroll", "join", "how to apply", "registration", "apply"])) return this.responses.admission;
        if (this.matchPatterns(input, ["documents required", "required documents", "papers for admission", "what documents"])) return this.responses.documents;
        if (this.matchPatterns(input, ["eligibility", "qualification", "requirements", "who can join"])) return this.responses.eligibility;
        if (this.matchPatterns(input, ["scholarship", "discount", "offer", "bonus", "benefits"])) return this.responses.offers;

        // Modes
        if (this.matchPatterns(input, ["online classes", "offline classes", "mode of study", "remote learning", "weekend batch", "flexible timings"])) {
            return this.responses.modes;
        }

        // Contact & Demo
        if (this.matchPatterns(input, ["contact", "phone", "number", "address", "location", "reach"])) return this.responses.contact;
        if (this.matchPatterns(input, ["demo", "free demo", "trial", "sample class", "preview"])) return this.responses.demo;

        // Default
        return `I can help with:<br><br>
• Course details and curriculum<br>
• Admission process and requirements<br>
• Industrial training and after 12th programs<br>
• Placement support and career services<br>
• Contact information and demo booking<br><br>
Quick Actions:<br>
• Type "courses" for all programs<br>
• Type "admission" for enrollment<br>
• Type "contact" for details<br>
• Type "demo" to book a free session`;
    }

    // Helpers
    matchPatterns(input, patterns) {
        return patterns.some((p) => input.includes(p));
    }

    getRandomResponse(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    formatMessage(message) {
        // Basic sanitation/formatting to HTML
        if (typeof message !== "string") return "";
        return message.replace(/\n/g, "<br>");
    }

    getQuickReplies(context = "general") {
        const map = {
            general: ["Course Information", "Admission Process", "Job Placement", "Book Demo"],
            courses: ["Programming Courses", "Digital Marketing", "Data Science & AI", "Cyber Security"],
            contact: ["Call Now", "Email Us", "Book Demo", "Visit Branch"],
        };
        return map[context] || map.general;
    }

    simulateTyping(callback, delay = 900) {
        this.isTyping = true;
        setTimeout(() => {
            this.isTyping = false;
            if (typeof callback === "function") callback();
        }, delay);
    }
}

// Export
if (typeof module !== "undefined" && module.exports) {
    module.exports = TechCADDChatbot;
} else {
    window.TechCADDChatbot = TechCADDChatbot;
}