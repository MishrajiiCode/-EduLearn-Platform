// Advanced EduLearn Platform - Complete Learning Management System
class AdvancedEduLearnApp {
    constructor() {
        // Base course data - this represents the available courses
        this.baseCourses = [
            {
                "id": 1,
                "title": "Python Programming Fundamentals",
                "category": "Programming",
                "difficulty": "Beginner",
                "duration": "4 hours",
                "instructor": "Dr. Sarah Johnson",
                "description": "Learn Python from scratch with hands-on coding exercises and real-world projects.",
                "thumbnail": "https://tse4.mm.bing.net/th/id/OIP.5Xyyck4fwrw6O2ecbdnbAgHaEK?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
                "rating": 4.8,
                "totalStudents": 12453,
                "price": 0,
                "prerequisites": [],
                "learningOutcomes": [
                    "Understand Python syntax and basic programming concepts",
                    "Write functions and work with data structures",
                    "Handle errors and exceptions",
                    "Build simple applications"
                ],
                "lessons": [
                    {
                        "id": 1,
                        "title": "Variables & Data Types | Lecture 1",
                        "duration": "1:22:18",
                        "video_url": "https://www.youtube.com/watch?v=t2_Q2BRzeEE&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
                        "description": "Overview of Python programming language and its applications",
                        "resources": ["Python installation guide", "Code examples"]
                    },
                    {
                        "id": 2,
                        "title": "Lecture 2 : Strings & Conditional Statements ",
                        "duration": "55:40",
                        "video_url": "https://www.youtube.com/watch?v=lIId8IDP6TU&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
                        "description": "Learn about different data types in Python",
                        "resources": ["Data types cheat sheet", "Practice exercises"]
                    },
                    {
                        "id": 3,
                        "title": "Lecture 3 : List & Tuple in Python",
                        "duration": "41:45",
                        "video_url": "https://www.youtube.com/watch?v=qVyvmzFxF_o&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
                        "description": "If statements, loops, and conditional logic",
                        "resources": ["Flow chart examples", "Coding challenges"]
                    },
                    {
                        "id": 4,
                        "title": "Lecture 4 : Dictionary & Set in Python ",
                        "duration": "54:31",
                        "video_url": "https://www.youtube.com/watch?v=078tYSD7K8E&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
                        "description": "Creating reusable code with functions",
                        "resources": ["Function examples", "Module documentation"]
                    },
                    {
                        "id": 5,
                        "title": "Lecture 5 : Loops in Python | While & For Loops ",
                        "duration": "1:03:50",
                        "video_url": "https://www.youtube.com/watch?v=S73thl0AyFU&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
                        "description": "Creating reusable code with functions",
                        "resources": ["Function examples", "Module documentation"]
                    },
                    {
                        "id": 6,
                        "title": "Lecture 6 : Functions & Recursion in Python ",
                        "duration": "01:01:48",
                        "video_url": "https://www.youtube.com/watch?v=OvTH-7ESoRA&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
                        "description": "Creating reusable code with functions",
                        "resources": ["Function examples", "Module documentation"]
                    },
                    {
                        "id": 7,
                        "title": "Lecture 7 : File Input/Output",
                        "duration": "50:47",
                        "video_url": "https://www.youtube.com/watch?v=jU0cndZziO0&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
                        "description": "Creating reusable code with functions",
                        "resources": ["Function examples", "Module documentation"]
                    },
                    {
                        "id": 8,
                        "title": "Lecture 8 : OOPS in Python | Object Oriented Programming | Classes & Objects ",
                        "duration": "56:39",
                        "video_url": "https://www.youtube.com/watch?v=HeW-D6KpDwY&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
                        "description": "Creating reusable code with functions",
                        "resources": ["Function examples", "Module documentation"]
                    },
                    {
                        "id": 9,
                        "title": "Lecture 9 : OOPS Part 2 | Object Oriented Programming",
                        "duration": "01:09:05",
                        "video_url": "https://www.youtube.com/watch?v=bAwmZVJeO5s&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
                        "description": "Creating reusable code with functions",
                        "resources": ["Function examples", "Module documentation"]
                    }
                    
                    
                    
                    

                ],
                "quizzes": [
                    {
                        "id": 1,
                        "title": "Python Basics Quiz",
                        "description": "Test your understanding of basic Python concepts",
                        "questions": [
                            {
                                "id": 1,
                                "type": "multiple_choice",
                                "question": "Which of the following is the correct way to declare a variable in Python?",
                                "options": ["var x = 5", "int x = 5", "x = 5", "declare x = 5"],
                                "correct_answer": 2,
                                "explanation": "In Python, variables are declared simply by assigning a value to them.",
                                "points": 10
                            },
                            {
                                "id": 2,
                                "type": "multiple_choice",
                                "question": "What is the output of print(type(10))?",
                                "options": ["<class 'int'>", "<class 'float'>", "<class 'string'>", "<class 'number'>"],
                                "correct_answer": 0,
                                "explanation": "The number 10 is an integer, so type(10) returns <class 'int'>.",
                                "points": 10
                            },
                            {
                                "id": 3,
                                "type": "true_false",
                                "question": "Python is case-sensitive.",
                                "correct_answer": true,
                                "explanation": "Yes, Python is case-sensitive. 'Variable' and 'variable' would be treated as different.",
                                "points": 10
                            }
                        ],
                        "time_limit": 300,
                        "passing_score": 70,
                        "max_attempts": 3
                    }
                ]
            },
            {
                "id": 2,
                "title": "Algebra Foundations",
                "category": "Mathematics",
                "difficulty": "Beginner",
                "duration": "6 hours",
                "instructor": "Prof. Michael Chen",
                "description": "Master the fundamentals of algebra with step-by-step explanations and practice problems.",
                "thumbnail": "https://via.placeholder.com/300x200/2196F3/white?text=Algebra+Course",
                "rating": 4.9,
                "totalStudents": 8967,
                "price": 29,
                "prerequisites": ["Basic arithmetic"],
                "learningOutcomes": [
                    "Solve linear equations and inequalities",
                    "Graph linear functions",
                    "Work with polynomials",
                    "Understand algebraic expressions"
                ],
                "lessons": [
                    {
                        "id": 1,
                        "title": "Introduction to Variables",
                        "duration": "18:45",
                        "video_url": "https://www.youtube.com/watch?v=Baut_P_cxl0",
                        "description": "Understanding variables and algebraic expressions",
                        "resources": ["Variable practice sheet", "Algebraic expressions guide"]
                    },
                    {
                        "id": 2,
                        "title": "Solving Linear Equations",
                        "duration": "22:30",
                        "video_url": "https://www.youtube.com/watch?v=l_32i_U8y6A",
                        "description": "Step-by-step approach to solving linear equations",
                        "resources": ["Equation solver tool", "Practice problems"]
                    },
                    {
                        "id": 3,
                        "title": "Graphing Linear Functions",
                        "duration": "28:15",
                        "video_url": "https://www.youtube.com/watch?v=2UrcUfBizyw",
                        "description": "Visual representation of linear functions",
                        "resources": ["Graphing paper", "Online graphing calculator"]
                    }
                ],
                "quizzes": [
                    {
                        "id": 2,
                        "title": "Linear Equations Quiz",
                        "description": "Test your equation solving skills",
                        "questions": [
                            {
                                "id": 1,
                                "type": "multiple_choice",
                                "question": "Solve for x: 2x + 5 = 13",
                                "options": ["x = 3", "x = 4", "x = 6", "x = 9"],
                                "correct_answer": 1,
                                "explanation": "2x + 5 = 13, so 2x = 8, therefore x = 4",
                                "points": 20
                            },
                            {
                                "id": 2,
                                "type": "multiple_choice",
                                "question": "What is the slope of the line y = 3x + 2?",
                                "options": ["2", "3", "3x", "5"],
                                "correct_answer": 1,
                                "explanation": "In the form y = mx + b, m represents the slope. Here m = 3.",
                                "points": 20
                            }
                        ],
                        "time_limit": 240,
                        "passing_score": 75,
                        "max_attempts": 2
                    }
                ]
            },
            {
                "id": 3,
                "title": "Web Development Basics",
                "category": "Programming",
                "difficulty": "Beginner",
                "duration": "8 hours",
                "instructor": "Lisa Rodriguez",
                "description": "Learn HTML, CSS, and JavaScript to build your first website from scratch.",
                "thumbnail": "https://via.placeholder.com/300x200/FF9800/white?text=Web+Dev+Course",
                "rating": 4.7,
                "totalStudents": 15623,
                "price": 49,
                "prerequisites": [],
                "learningOutcomes": [
                    "Build responsive websites with HTML and CSS",
                    "Add interactivity with JavaScript",
                    "Understand web development fundamentals",
                    "Deploy websites to the internet"
                ],
                "lessons": [
                    {
                        "id": 1,
                        "title": "HTML Structure and Semantics",
                        "duration": "25:00",
                        "video_url": "https://www.youtube.com/watch?v=kUMe1FH4CHE",
                        "description": "Learn the building blocks of web pages",
                        "resources": ["HTML reference", "Semantic HTML guide"]
                    },
                    {
                        "id": 2,
                        "title": "CSS Styling and Layout",
                        "duration": "35:30",
                        "video_url": "https://www.youtube.com/watch?v=yfoY53QXEnI",
                        "description": "Style your web pages with CSS",
                        "resources": ["CSS cheat sheet", "Layout examples"]
                    },
                    {
                        "id": 3,
                        "title": "JavaScript Fundamentals",
                        "duration": "40:15",
                        "video_url": "https://www.youtube.com/watch?v=W6NZfCO5SIk",
                        "description": "Add interactivity to your websites",
                        "resources": ["JavaScript basics", "Interactive examples"]
                    },
                    {
                        "id": 4,
                        "title": "Building Your First Website",
                        "duration": "45:20",
                        "video_url": "https://www.youtube.com/watch?v=rJesac0_Ftw",
                        "description": "Put it all together in a complete project",
                        "resources": ["Project template", "Deployment guide"]
                    }
                ],
                "quizzes": [
                    {
                        "id": 3,
                        "title": "HTML & CSS Quiz",
                        "description": "Test your web development knowledge",
                        "questions": [
                            {
                                "id": 1,
                                "type": "multiple_choice",
                                "question": "Which HTML tag is used to create a hyperlink?",
                                "options": ["<link>", "<a>", "<href>", "<url>"],
                                "correct_answer": 1,
                                "explanation": "The <a> tag with href attribute is used to create hyperlinks in HTML.",
                                "points": 15
                            },
                            {
                                "id": 2,
                                "type": "multiple_choice",
                                "question": "Which CSS property is used to change text color?",
                                "options": ["text-color", "font-color", "color", "text-style"],
                                "correct_answer": 2,
                                "explanation": "The 'color' property in CSS is used to change text color.",
                                "points": 15
                            }
                        ],
                        "time_limit": 300,
                        "passing_score": 70,
                        "max_attempts": 3
                    }
                    
                ]
            },
            {
                "id": 4,
                "title": "Time and work",
                "category": "Mathematics",
                "difficulty": "Beginner",
                "duration": "6 hours",
                "instructor": "Prof. Michael Chen",
                "description": "Master the fundamentals of algebra with step-by-step explanations and practice problems.",
                "thumbnail": "https://via.placeholder.com/300x200/2196F3/white?text=Algebra+Course",
                "rating": 4.9,
                "totalStudents": 8967,
                "price": 29,
                "prerequisites": ["Basic arithmetic"],
                "learningOutcomes": [
                    "Solve linear equations and inequalities",
                    "Graph linear functions",
                    "Work with polynomials",
                    "Understand algebraic expressions"
                ],
                "lessons": [
                    {
                        "id": 1,
                        "title": "Class - 01 Time and Work",
                        "duration": "01:02:14",
                        "video_url": "https://www.youtube.com/watch?v=5PVjY-pI-lU&list=PLmPfHSmN2KuIC09zKp8tATH-DoUYgfUz0",
                        "description": "Understanding variables and algebraic expressions",
                        "resources": ["Variable practice sheet", "Algebraic expressions guide"]
                    },
                    {
                        "id": 2,
                        "title": "Class - 02 Time and Work",
                        "duration": "53:59",
                        "video_url": "https://www.youtube.com/watch?v=-b4FtKJ5o-k&list=PLmPfHSmN2KuIC09zKp8tATH-DoUYgfUz0&index=2",
                        "description": "Step-by-step approach to solving linear equations",
                        "resources": ["Equation solver tool", "Practice problems"]
                    },
                    {
                        "id": 3,
                        "title": "Graphing Linear Functions",
                        "duration": "28:15",
                        "video_url": "https://www.youtube.com/watch?v=2UrcUfBizyw",
                        "description": "Visual representation of linear functions",
                        "resources": ["Graphing paper", "Online graphing calculator"]
                    }
                ],
                "quizzes": [
                    {
                        "id": 2,
                        "title": "Linear Equations Quiz",
                        "description": "Test your equation solving skills",
                        "questions": [
                            {
                                "id": 1,
                                "type": "multiple_choice",
                                "question": "Solve for x: 2x + 5 = 13",
                                "options": ["x = 3", "x = 4", "x = 6", "x = 9"],
                                "correct_answer": 1,
                                "explanation": "2x + 5 = 13, so 2x = 8, therefore x = 4",
                                "points": 20
                            },
                            {
                                "id": 2,
                                "type": "multiple_choice",
                                "question": "What is the slope of the line y = 3x + 2?",
                                "options": ["2", "3", "3x", "5"],
                                "correct_answer": 1,
                                "explanation": "In the form y = mx + b, m represents the slope. Here m = 3.",
                                "points": 20
                            }
                        ],
                        "time_limit": 240,
                        "passing_score": 75,
                        "max_attempts": 2
                    }
                ]
            },
        ];

        this.categories = [
            {
                "name": "Programming",
                "icon": "💻",
                "description": "Learn coding and software development",
                "color": "#4CAF50"
            },
            {
                "name": "Mathematics",
                "icon": "📊",
                "description": "Master mathematical concepts and problem-solving",
                "color": "#2196F3"
            },
            {
                "name": "Science",
                "icon": "🔬",
                "description": "Explore scientific principles and theories",
                "color": "#F44336"
            },
            {
                "name": "Language",
                "icon": "🗣️",
                "description": "Improve language skills and communication",
                "color": "#607D8B"
            }
        ];

        this.achievements = [
            {
                "id": 1,
                "title": "First Steps",
                "description": "Enrolled in your first course",
                "icon": "🎯",
                "points": 10,
                "type": "enrollment"
            },
            {
                "id": 2,
                "title": "Video Watcher",
                "description": "Completed your first lesson",
                "icon": "📺",
                "points": 15,
                "type": "lesson_completion"
            },
            {
                "id": 3,
                "title": "Quiz Master",
                "description": "Passed your first quiz",
                "icon": "🏆",
                "points": 20,
                "type": "quiz_completion"
            },
            {
                "id": 4,
                "title": "Course Conqueror",
                "description": "Completed your first course",
                "icon": "🎓",
                "points": 50,
                "type": "course_completion"
            },
            {
                "id": 5,
                "title": "Learning Streak",
                "description": "Learned for 7 consecutive days",
                "icon": "🔥",
                "points": 30,
                "type": "streak"
            },
            {
                "id": 6,
                "title": "Perfect Score",
                "description": "Got 100% on a quiz",
                "icon": "⭐",
                "points": 25,
                "type": "perfect_score"
            },
            {
                "id": 7,
                "title": "Time Master",
                "description": "Spent 10 hours learning",
                "icon": "⏰",
                "points": 35,
                "type": "time_milestone"
            },
            {
                "id": 8,
                "title": "Multi-Tasker",
                "description": "Enrolled in 3 courses",
                "icon": "📚",
                "points": 40,
                "type": "multiple_enrollments"
            }
        ];

        // Application state
        this.currentUser = null;
        this.currentCourse = null;
        this.currentLesson = null;
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.quizAnswers = [];
        this.quizTimer = null;
        this.videoProgress = 0;
        this.videoDuration = 0;
        this.isVideoPlaying = false;
        this.videoTimer = null;
        this.videoStartTime = null;
        this.isAdminMode = false;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupNavigation();
        this.setupMobileMenu();
        this.checkExistingUser();
    }

    // User Management System
    checkExistingUser() {
        const savedUser = this.getUserData();
        if (savedUser && savedUser.username) {
            this.currentUser = savedUser;
            this.updateLastActive();
            this.loadUserInterface();
        } else {
            this.showWelcomeModal();
        }
    }

    showWelcomeModal() {
        const modal = document.getElementById('welcome-modal');
        modal.classList.remove('hidden');

        const form = document.getElementById('welcome-form');
        form.onsubmit = (e) => {
            e.preventDefault();
            this.createNewUser();
        };
    }

    createNewUser() {
        const name = document.getElementById('user-name-input').value.trim();
        const email = document.getElementById('user-email-input').value.trim();

        if (!name) {
            this.showToast('Please enter your name', 'error');
            return;
        }

        const userData = {
            username: name,
            email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@edulearn.com`,
            joinDate: new Date().toISOString(),
            enrolledCourses: [],
            lessonProgress: {},
            quizProgress: {},
            unlockedAchievements: [],
            settings: {
                theme: 'light',
                language: 'en',
                notifications: true,
                autoplay: false
            },
            stats: {
                totalWatchTime: 0,
                coursesCompleted: 0,
                lessonsCompleted: 0,
                quizzesCompleted: 0,
                currentStreak: 0,
                longestStreak: 0,
                lastActiveDate: new Date().toISOString(),
                totalPoints: 0
            },
            recentActivity: []
        };

        this.currentUser = userData;
        this.saveUserData();
        this.hideWelcomeModal();
        this.loadUserInterface();
        this.showToast(`Welcome to EduLearn, ${name}! 🎉`, 'success');
        this.addActivity('user_registered', 'Welcome to EduLearn Platform!');
    }

    hideWelcomeModal() {
        document.getElementById('welcome-modal').classList.add('hidden');
    }

    loadUserInterface() {
        this.updateUserDisplay();
        this.loadHomePage();
        this.showAdminToggle();
        this.updateStreak();
    }

    updateUserDisplay() {
        const userName = this.currentUser.username;
        const enrolledCount = this.currentUser.enrolledCourses.length;
        
        document.getElementById('nav-user-name').textContent = userName;
        document.getElementById('user-stats').textContent = `${enrolledCount} courses enrolled`;
        document.getElementById('profile-user-name').textContent = userName;
        document.getElementById('profile-user-email').textContent = this.currentUser.email;
        document.getElementById('display-name').value = userName;
        document.getElementById('email').value = this.currentUser.email;
        
        const joinDate = new Date(this.currentUser.joinDate).toLocaleDateString();
        const lastActive = new Date(this.currentUser.stats.lastActiveDate).toLocaleDateString();
        document.getElementById('member-since').textContent = joinDate;
        document.getElementById('last-active').textContent = lastActive;
        
        document.getElementById('notifications-enabled').checked = this.currentUser.settings.notifications;
        document.getElementById('autoplay-enabled').checked = this.currentUser.settings.autoplay;
    }

    showAdminToggle() {
        document.getElementById('admin-toggle').classList.remove('hidden');
    }

    // Navigation and UI Management - Fixed
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.onclick = (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.navigateToSection(section);
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                document.getElementById('nav-menu').classList.remove('active');
            };
        });
    }

    setupMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        navToggle.onclick = () => {
            navMenu.classList.toggle('active');
        };
    }

    setupEventListeners() {
        // Admin mode toggle
        document.getElementById('toggle-admin-mode').onclick = () => {
            this.toggleAdminMode();
        };

        // Browse courses button
        document.getElementById('browse-courses-btn').onclick = () => {
            this.navigateToSection('courses');
            this.updateActiveNavLink('courses');
        };

        // Export progress button
        document.getElementById('export-progress-btn').onclick = () => {
            this.exportProgressData();
        };

        // Course detail navigation
        document.getElementById('back-to-courses').onclick = () => {
            this.navigateToSection('courses');
        };

        // Quiz navigation
        document.getElementById('back-to-quizzes').onclick = () => {
            this.navigateToSection('quizzes');
        };

        // Video player controls
        this.setupVideoPlayerControls();

        // Quiz controls
        this.setupQuizControls();

        // Tab switching
        this.setupTabSwitching();

        // Course filters
        this.setupCourseFilters();

        // Notes saving
        document.getElementById('save-notes').onclick = () => {
            this.saveNotes();
        };

        // Profile form
        document.getElementById('profile-form').onsubmit = (e) => {
            e.preventDefault();
            this.updateProfile();
        };

        // Reset all data
        document.getElementById('reset-all-data').onclick = () => {
            this.resetAllData();
        };

        // Achievement popup close
        document.getElementById('close-achievement-popup').onclick = () => {
            document.getElementById('achievement-popup').classList.add('hidden');
        };

        // Modal close handlers
        const closeEnrollmentModal = document.getElementById('close-enrollment-modal');
        if (closeEnrollmentModal) {
            closeEnrollmentModal.onclick = () => this.hideEnrollmentModal();
        }

        const cancelEnrollment = document.getElementById('cancel-enrollment');
        if (cancelEnrollment) {
            cancelEnrollment.onclick = () => this.hideEnrollmentModal();
        }

        // Admin tab switching
        this.setupAdminTabs();
    }

    updateActiveNavLink(section) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(l => l.classList.remove('active'));
        const targetLink = document.querySelector(`[data-section="${section}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }

    navigateToSection(section) {
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.classList.add('active');
            
            switch (section) {
                case 'home':
                    this.loadHomePage();
                    break;
                case 'courses':
                    this.loadCoursesPage();
                    break;
                case 'quizzes':
                    this.loadQuizzesPage();
                    break;
                case 'progress':
                    this.loadProgressPage();
                    break;
                case 'profile':
                    this.loadProfilePage();
                    break;
                case 'admin':
                    this.loadAdminPage();
                    break;
            }
        }
    }

    // Data Persistence System
    getUserData() {
        try {
            const data = localStorage.getItem('edulearn_user_data');
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading user data:', error);
            return null;
        }
    }

    saveUserData() {
        try {
            localStorage.setItem('edulearn_user_data', JSON.stringify(this.currentUser));
            this.exportToSimulatedFile();
        } catch (error) {
            console.error('Error saving user data:', error);
            this.showToast('Error saving progress', 'error');
        }
    }

    exportToSimulatedFile() {
        const dataString = this.generateProgressReport();
        console.log('Progress data saved:', dataString);
    }

    generateProgressReport() {
        const user = this.currentUser;
        let report = `EduLearn Progress Report for ${user.username}\n`;
        report += `Generated: ${new Date().toLocaleString()}\n\n`;
        report += `=== LEARNING STATISTICS ===\n`;
        report += `Total Watch Time: ${Math.floor(user.stats.totalWatchTime / 60)} minutes\n`;
        report += `Courses Completed: ${user.stats.coursesCompleted}\n`;
        report += `Lessons Completed: ${user.stats.lessonsCompleted}\n`;
        report += `Quizzes Passed: ${user.stats.quizzesCompleted}\n`;
        report += `Current Streak: ${user.stats.currentStreak} days\n`;
        report += `Total Points: ${user.stats.totalPoints}\n\n`;
        
        report += `=== ENROLLED COURSES ===\n`;
        user.enrolledCourses.forEach(courseId => {
            const course = this.baseCourses.find(c => c.id === courseId);
            if (course) {
                const progress = this.calculateCourseProgress(courseId);
                report += `${course.title}: ${progress}% complete\n`;
            }
        });
        
        report += `\n=== ACHIEVEMENTS ===\n`;
        user.unlockedAchievements.forEach(achievementId => {
            const achievement = this.achievements.find(a => a.id === achievementId);
            if (achievement) {
                report += `✓ ${achievement.title}: ${achievement.description}\n`;
            }
        });
        
        return report;
    }

    // Course Enrollment System
    enrollInCourse(courseId) {
        if (!this.currentUser) {
            this.showToast('Please log in first', 'error');
            return;
        }

        if (this.currentUser.enrolledCourses.includes(courseId)) {
            this.showToast('Already enrolled in this course', 'info');
            return;
        }

        const course = this.baseCourses.find(c => c.id === courseId);
        if (!course) {
            this.showToast('Course not found', 'error');
            return;
        }

        this.showEnrollmentModal(course);
    }

    showEnrollmentModal(course) {
        const modal = document.getElementById('enrollment-modal');
        const modalBody = document.getElementById('enrollment-modal-body');
        
        modalBody.innerHTML = `
            <div class="course-enrollment-details">
                <h4>${course.title}</h4>
                <p><strong>Instructor:</strong> ${course.instructor}</p>
                <p><strong>Duration:</strong> ${course.duration}</p>
                <p><strong>Difficulty:</strong> ${course.difficulty}</p>
                <p><strong>Lessons:</strong> ${course.lessons.length}</p>
                <p><strong>Quizzes:</strong> ${course.quizzes.length}</p>
                ${course.price > 0 ? `<p><strong>Price:</strong> $${course.price}</p>` : '<p class="text-success"><strong>Free Course</strong></p>'}
                <div class="learning-outcomes">
                    <h5>What you'll learn:</h5>
                    <ul>
                        ${course.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                    </ul>
                </div>
                ${course.prerequisites && course.prerequisites.length > 0 ? `
                    <div class="prerequisites">
                        <h5>Prerequisites:</h5>
                        <ul>
                            ${course.prerequisites.map(prereq => `<li>${prereq}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;

        modal.classList.remove('hidden');

        document.getElementById('confirm-enrollment').onclick = () => this.confirmEnrollment(course.id);
    }

    hideEnrollmentModal() {
        document.getElementById('enrollment-modal').classList.add('hidden');
    }

    confirmEnrollment(courseId) {
        this.currentUser.enrolledCourses.push(courseId);
        
        const course = this.baseCourses.find(c => c.id === courseId);
        this.addActivity('course_enrolled', `Enrolled in "${course.title}"`);
        this.checkAchievements('enrollment');
        
        this.saveUserData();
        this.hideEnrollmentModal();
        this.updateUserDisplay();
        
        this.showToast(`Successfully enrolled in "${course.title}"! 🎉`, 'success');
        
        this.loadAllCourses();
        this.loadHomePage();
    }

    // Progress Tracking System
    calculateCourseProgress(courseId) {
        const course = this.baseCourses.find(c => c.id === courseId);
        if (!course) return 0;

        const totalItems = course.lessons.length + course.quizzes.length;
        if (totalItems === 0) return 0;

        let completedItems = 0;

        course.lessons.forEach(lesson => {
            const progressKey = `${courseId}_lesson_${lesson.id}`;
            if (this.currentUser.lessonProgress[progressKey]?.completed) {
                completedItems++;
            }
        });

        course.quizzes.forEach(quiz => {
            const progressKey = `${courseId}_quiz_${quiz.id}`;
            const quizProgress = this.currentUser.quizProgress[progressKey];
            if (quizProgress?.completed && quizProgress?.passed) {
                completedItems++;
            }
        });

        return Math.round((completedItems / totalItems) * 100);
    }

    // Page Loading Functions
    loadHomePage() {
        this.loadDashboardStats();
        this.loadCategories();
        this.loadFeaturedCourses();
        this.loadRecentActivity();
        this.updateUserDisplay();
    }

    loadDashboardStats() {
        const container = document.getElementById('dashboard-stats');
        container.innerHTML = '';

        const stats = [
            {
                icon: '📚',
                value: this.currentUser.enrolledCourses.length,
                label: 'Enrolled Courses',
                color: 'var(--color-primary)'
            },
            {
                icon: '✅',
                value: this.currentUser.stats.coursesCompleted,
                label: 'Completed',
                color: 'var(--color-success)'
            },
            {
                icon: '⏱',
                value: `${Math.floor(this.currentUser.stats.totalWatchTime / 60)}m`,
                label: 'Watch Time',
                color: 'var(--color-warning)'
            },
            {
                icon: '🔥',
                value: this.currentUser.stats.currentStreak,
                label: 'Day Streak',
                color: 'var(--color-error)'
            },
            {
                icon: '⭐',
                value: this.currentUser.stats.totalPoints,
                label: 'Total Points',
                color: 'var(--color-info)'
            }
        ];

        stats.forEach(stat => {
            const statCard = document.createElement('div');
            statCard.className = 'dashboard-stat';
            statCard.innerHTML = `
                <div class="dashboard-stat-icon">${stat.icon}</div>
                <div class="dashboard-stat-value">${stat.value}</div>
                <div class="dashboard-stat-label">${stat.label}</div>
            `;
            container.appendChild(statCard);
        });
    }

    loadCategories() {
        const container = document.getElementById('categories-grid');
        container.innerHTML = '';

        this.categories.forEach(category => {
            const courseCount = this.baseCourses.filter(c => c.category === category.name).length;
            const categoryCard = this.createCategoryCard({...category, course_count: courseCount});
            container.appendChild(categoryCard);
        });
    }

    createCategoryCard(category) {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <div class="category-name">${category.name}</div>
            <div class="category-description">${category.description}</div>
            <div class="category-count">${category.course_count} courses</div>
        `;

        card.onclick = () => {
            this.navigateToSection('courses');
            this.updateActiveNavLink('courses');
            document.getElementById('category-filter').value = category.name;
            this.filterCourses();
        };

        return card;
    }

    loadFeaturedCourses() {
        const container = document.getElementById('featured-courses');
        container.innerHTML = '';

        this.baseCourses.slice(0, 3).forEach(course => {
            const courseCard = this.createCourseCard(course);
            container.appendChild(courseCard);
        });
    }

    loadRecentActivity() {
        const activitySection = document.getElementById('recent-activity-section');
        const container = document.getElementById('activity-feed');
        
        if (!this.currentUser.recentActivity || this.currentUser.recentActivity.length === 0) {
            activitySection.style.display = 'none';
            return;
        }
        
        activitySection.style.display = 'block';
        container.innerHTML = '';

        this.currentUser.recentActivity.slice(0, 5).forEach(activity => {
            const activityItem = this.createActivityItem(activity);
            container.appendChild(activityItem);
        });
    }

    createActivityItem(activity) {
        const item = document.createElement('div');
        item.className = 'activity-item';

        let icon = '📚';
        switch (activity.type) {
            case 'user_registered': icon = '🎉'; break;
            case 'course_enrolled': icon = '📝'; break;
            case 'lesson_completed': icon = '▶️'; break;
            case 'quiz_completed': icon = '✅'; break;
            case 'achievement_unlocked': icon = '🏆'; break;
            default: icon = '📚';
        }

        const timeAgo = this.getTimeAgo(activity.timestamp);

        item.innerHTML = `
            <div class="activity-icon">${icon}</div>
            <div class="activity-details">
                <div class="activity-text">${activity.description}</div>
                <div class="activity-time">${timeAgo}</div>
            </div>
        `;

        return item;
    }

    getTimeAgo(timestamp) {
        const now = new Date();
        const time = new Date(timestamp);
        const diffInSeconds = Math.floor((now - time) / 1000);
        
        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
    }

    loadCoursesPage() {
        this.loadAllCourses();
    }

    loadAllCourses() {
        const container = document.getElementById('all-courses');
        container.innerHTML = '';

        this.baseCourses.forEach(course => {
            const courseCard = this.createCourseCard(course);
            container.appendChild(courseCard);
        });
    }

    createCourseCard(course) {
        const card = document.createElement('div');
        const isEnrolled = this.isUserEnrolledInCourse(course.id);
        const progress = isEnrolled ? this.calculateCourseProgress(course.id) : 0;
        
        card.className = `course-card ${!isEnrolled ? 'not-enrolled' : ''}`;
        
        card.innerHTML = `
            <div class="course-thumbnail">
                <img src="${course.thumbnail}" alt="${course.title}" onerror="this.style.display='none';">
                <div class="course-difficulty">${course.difficulty}</div>
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <div class="course-instructor">By ${course.instructor}</div>
                <div class="course-description">${course.description}</div>
                <div class="course-meta">
                    <div class="course-rating">⭐ ${course.rating} (${course.totalStudents.toLocaleString()} students)</div>
                    <div class="course-duration">${course.duration}</div>
                    <div class="course-price ${course.price === 0 ? 'free' : ''}">${course.price === 0 ? 'Free' : '$' + course.price}</div>
                </div>
                ${isEnrolled ? `
                    <div class="course-progress">
                        <div class="progress-text">${progress}% complete</div>
                        <div class="progress-bar-container">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progress}%"></div>
                            </div>
                        </div>
                    </div>
                ` : ''}
                <div class="course-actions">
                    ${isEnrolled ? `
                        <span class="course-status course-status--${progress === 100 ? 'completed' : 'enrolled'}">
                            ${progress === 100 ? 'Completed' : 'Enrolled'}
                        </span>
                        <button class="btn btn--primary btn--sm continue-course-btn" data-course-id="${course.id}">
                            ${progress > 0 ? 'Continue Learning' : 'Start Course'}
                        </button>
                    ` : `
                        <button class="btn btn--primary btn--sm enroll-btn" data-course-id="${course.id}">
                            Enroll Now
                        </button>
                        <button class="btn btn--secondary btn--sm preview-btn" data-course-id="${course.id}">
                            Preview
                        </button>
                    `}
                </div>
            </div>
        `;

        // Add event listeners using event delegation
        card.onclick = (e) => {
            if (e.target.classList.contains('enroll-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const courseId = parseInt(e.target.dataset.courseId);
                this.enrollInCourse(courseId);
            } else if (e.target.classList.contains('continue-course-btn') || e.target.classList.contains('preview-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const courseId = parseInt(e.target.dataset.courseId);
                this.openCourseDetail(courseId);
            }
        };

        return card;
    }

    isUserEnrolledInCourse(courseId) {
        return this.currentUser && this.currentUser.enrolledCourses.includes(courseId);
    }

    openCourseDetail(courseId) {
        this.currentCourse = this.baseCourses.find(c => c.id === courseId);
        if (!this.currentCourse) return;

        this.navigateToSection('course-detail');
        this.loadCourseDetail();
    }

    loadCourseDetail() {
        const isEnrolled = this.isUserEnrolledInCourse(this.currentCourse.id);
        const progress = isEnrolled ? this.calculateCourseProgress(this.currentCourse.id) : 0;
        
        const enrollmentStatus = document.getElementById('enrollment-status');
        if (isEnrolled) {
            enrollmentStatus.className = 'enrollment-status enrolled';
            enrollmentStatus.innerHTML = `
                <h4>✅ Enrolled</h4>
                <p>You are enrolled in this course. Progress: ${progress}%</p>
                ${progress === 100 ? '<div class="status status--success">Course Completed! 🎉</div>' : ''}
            `;
        } else {
            enrollmentStatus.className = 'enrollment-status not-enrolled';
            enrollmentStatus.innerHTML = `
                <h4>📚 Course Preview</h4>
                <p>Enroll to access all lessons and track your progress.</p>
                <button class="btn btn--primary" onclick="app.enrollInCourse(${this.currentCourse.id})">
                    Enroll Now ${this.currentCourse.price === 0 ? '(Free)' : `($${this.currentCourse.price})`}
                </button>
            `;
        }

        const courseInfo = document.getElementById('course-info');
        courseInfo.innerHTML = `
            <h3>${this.currentCourse.title}</h3>
            <div class="course-info-item">
                <span>Instructor:</span>
                <span>${this.currentCourse.instructor}</span>
            </div>
            <div class="course-info-item">
                <span>Duration:</span>
                <span>${this.currentCourse.duration}</span>
            </div>
            <div class="course-info-item">
                <span>Difficulty:</span>
                <span>${this.currentCourse.difficulty}</span>
            </div>
            <div class="course-info-item">
                <span>Lessons:</span>
                <span>${this.currentCourse.lessons.length}</span>
            </div>
            <div class="course-info-item">
                <span>Quizzes:</span>
                <span>${this.currentCourse.quizzes.length}</span>
            </div>
            ${isEnrolled ? `
                <div class="course-info-item">
                    <span>Progress:</span>
                    <span>${progress}%</span>
                </div>
            ` : ''}
        `;

        this.loadLessonList(this.currentCourse.id);
        this.resetVideoPlayer();
    }

    loadLessonList(courseId) {
        const container = document.getElementById('lesson-list');
        const isEnrolled = this.isUserEnrolledInCourse(courseId);
        
        container.innerHTML = '<h4>Course Content</h4>';

        this.currentCourse.lessons.forEach((lesson, index) => {
            const lessonItem = document.createElement('div');
            const progressKey = `${courseId}_lesson_${lesson.id}`;
            const lessonProgress = this.currentUser.lessonProgress[progressKey];
            const isCompleted = lessonProgress?.completed || false;
            const isCurrent = this.currentLesson && this.currentLesson.id === lesson.id;
            const isLocked = !isEnrolled && index > 0;
            
            lessonItem.className = `lesson-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'active' : ''} ${isLocked ? 'locked' : ''}`;
            
            let statusClass = 'pending';
            let statusIcon = index + 1;
            
            if (isLocked) {
                statusClass = 'locked';
                statusIcon = '🔒';
            } else if (isCompleted) {
                statusClass = 'completed';
                statusIcon = '✓';
            } else if (isCurrent) {
                statusClass = 'current';
                statusIcon = '▶';
            }

            lessonItem.innerHTML = `
                <div class="lesson-status ${statusClass}">${statusIcon}</div>
                <div class="lesson-details">
                    <div class="lesson-title">${lesson.title}</div>
                    <div class="lesson-duration">${lesson.duration}</div>
                </div>
            `;

            if (!isLocked) {
                lessonItem.onclick = () => {
                    this.selectLesson(lesson, courseId);
                };
            } else {
                lessonItem.onclick = () => {
                    this.showToast('Please enroll to access this lesson', 'warning');
                };
            }

            container.appendChild(lessonItem);
        });
    }

    // Video Player and Lesson Management
    // ===============================
// Video Player and Lesson Management (Fixed)
// ===============================
selectLesson(lesson, courseId) {
    // Defensively re-fetch the course and lesson data to prevent stale references.
    // This is the key fix to ensure the correct video is loaded every time.
    const course = this.baseCourses.find(c => c.id === courseId);
    if (!course) {
        console.error("FATAL: Course not found for lesson selection.", { courseId });
        this.showToast("An error occurred. Could not find the course.", "error");
        return;
    }
    const freshLesson = course.lessons.find(l => l.id === lesson.id);
    if (!freshLesson) {
        console.error("FATAL: Lesson not found for lesson selection.", { lesson });
        this.showToast("An error occurred. Could not find the lesson.", "error");
        return;
    }

    if (!this.isUserEnrolledInCourse(courseId)) {
        this.showToast('Please enroll in this course first', 'warning');
        return;
    }

    this.currentLesson = freshLesson;
    this.loadLessonList(courseId);
    this.loadVideoLesson(freshLesson, courseId);

    const progressKey = `${courseId}_lesson_${freshLesson.id}`;
    const lessonProgress = this.currentUser.lessonProgress[progressKey];
    document.getElementById('lesson-notes').value = lessonProgress?.notes || '';

    this.loadLessonResources(freshLesson);

    if (this.isAdminMode) {
        this.loadLessonEditor(freshLesson, courseId);
    }
}

loadVideoLesson(lesson, courseId) {
    const videoControls = document.getElementById('video-controls');
    const videoContainer = document.getElementById('video-player');

    // Clear previous video or placeholder to prevent script errors
    videoContainer.innerHTML = '';

    // Calculate duration in seconds (for local files)
    const [minutes, seconds] = lesson.duration.split(':').map(Number);
    this.videoDuration = (minutes * 60) + seconds;

    // Detect YouTube URL
    const youtubeMatch = lesson.video_url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^?&]+)/);

    if (youtubeMatch) {
        // ✅ Embed YouTube
        const videoId = youtubeMatch[1];
        const iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        videoContainer.appendChild(iframe);

        // Hide custom controls for YouTube
        videoControls.classList.add('hidden');
        this.isVideoPlaying = false;
        this.clearTimerIfNeeded();

    } else if (lesson.video_url.endsWith('.mp4')) {
        // ✅ Local/hosted MP4 video
        const video = document.createElement('video');
        video.style.width = '100%';
        video.controls = true;
        video.src = lesson.video_url;

        // Handle load error
        video.onerror = () => {
            videoContainer.innerHTML = `
                <div class="text-center text-muted">
                    ⚠️ Could not load video: ${lesson.video_url}
                </div>
            `;
        };

        videoContainer.appendChild(video);

        // Show custom controls
        videoControls.classList.remove('hidden');
        this.isVideoPlaying = false;
        this.videoProgress = 0;
        this.clearTimerIfNeeded();

        // Sync progress
        video.addEventListener('timeupdate', () => {
            if (video.duration) {
                this.videoProgress = (video.currentTime / video.duration) * 100;
                this.updateVideoProgress();
                document.getElementById('time-display').textContent =
                    `${this.formatTime(Math.floor(video.currentTime))} / ${lesson.duration}`;
            }
        });

        video.addEventListener('ended', () => this.completeLesson());

        // Connect play/pause
        const playButton = document.getElementById('play-button');
        const playPauseBtn = document.getElementById('play-pause-btn');
        playButton.onclick = () => video.play();
        playPauseBtn.onclick = () => {
            if (video.paused) video.play();
            else video.pause();
        };
    } else {
        // ❌ Unsupported format
        videoContainer.innerHTML = `
            <div class="text-center text-muted">
                <h4>${lesson.title}</h4>
                <p>🚫 Unsupported video format or invalid URL.</p>
                <small>${lesson.video_url}</small>
            </div>
        `;
        videoControls.classList.add('hidden');
    }
}

clearTimerIfNeeded() {
    if (this.videoTimer) {
        clearInterval(this.videoTimer);
        this.videoTimer = null;
    }
}

    loadLessonResources(lesson) {
        const container = document.getElementById('resources-content');
        
        if (lesson.resources && lesson.resources.length > 0) {
            container.innerHTML = `
                <h4>Lesson Resources</h4>
                <ul>
                    ${lesson.resources.map(resource => `<li>${resource}</li>`).join('')}
                </ul>
                <div style="margin-top: 16px;">
                    <p><strong>Description:</strong> ${lesson.description}</p>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="text-center text-muted">
                    <p>📄 No additional resources for this lesson.</p>
                    <p><strong>Description:</strong> ${lesson.description}</p>
                </div>
            `;
        }
    }

    setupVideoPlayerControls() {
        const playButton = document.getElementById('play-button');
        const playPauseBtn = document.getElementById('play-pause-btn');
        const progressBar = document.getElementById('video-progress-bar');

        playButton.onclick = () => {
            this.toggleVideoPlayback();
        };

        playPauseBtn.onclick = () => {
            this.toggleVideoPlayback();
        };

        progressBar.onclick = (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = (clickX / rect.width) * 100;
            this.seekVideo(percentage);
        };
    }

    toggleVideoPlayback() {
        if (!this.currentLesson) return;

        this.isVideoPlaying = !this.isVideoPlaying;
        
        const playButton = document.getElementById('play-button');
        const playPauseBtn = document.getElementById('play-pause-btn');
        
        if (this.isVideoPlaying) {
            playButton.style.display = 'none';
            playPauseBtn.textContent = '⏸';
            this.videoStartTime = Date.now();
            this.startVideoTimer();
        } else {
            playPauseBtn.textContent = '▶';
            this.clearVideoTimer();
            this.recordWatchTime();
        }
    }

    startVideoTimer() {
        this.videoTimer = setInterval(() => {
            if (this.videoProgress < 100) {
                this.videoProgress += 0.5;
                this.updateVideoProgress();
                
                const currentTime = Math.floor((this.videoProgress / 100) * this.videoDuration);
                document.getElementById('time-display').textContent = 
                    `${this.formatTime(currentTime)} / ${this.currentLesson.duration}`;
            }
            
            if (this.videoProgress >= 100) {
                this.completeLesson();
            }
        }, 200);
    }

    clearVideoTimer() {
        if (this.videoTimer) {
            clearInterval(this.videoTimer);
            this.videoTimer = null;
        }
    }

    recordWatchTime() {
        if (this.videoStartTime) {
            const watchTime = (Date.now() - this.videoStartTime) / 1000;
            this.currentUser.stats.totalWatchTime += watchTime;
            this.checkAchievements('time_milestone');
            this.videoStartTime = null;
        }
    }

    completeLesson() {
        if (!this.currentLesson || !this.currentCourse) return;

        const progressKey = `${this.currentCourse.id}_lesson_${this.currentLesson.id}`;
        
        if (this.currentUser.lessonProgress[progressKey]?.completed) return;
        
        this.currentUser.lessonProgress[progressKey] = {
            completed: true,
            completedAt: new Date().toISOString(),
            progress: 100,
            notes: this.currentUser.lessonProgress[progressKey]?.notes || ''
        };

        this.currentUser.stats.lessonsCompleted++;
        this.isVideoPlaying = false;
        this.clearVideoTimer();
        this.recordWatchTime();
        
        this.addActivity('lesson_completed', `Completed "${this.currentLesson.title}" in ${this.currentCourse.title}`);
        
        this.checkAchievements('lesson_completion');
        this.checkAchievements('course_completion');
        
        this.saveUserData();
        this.showToast('Lesson completed! 🎉', 'success');
        this.loadLessonList(this.currentCourse.id);
        
        if (this.currentUser.settings.autoplay) {
            const currentIndex = this.currentCourse.lessons.findIndex(l => l.id === this.currentLesson.id);
            if (currentIndex < this.currentCourse.lessons.length - 1) {
                setTimeout(() => {
                    this.selectLesson(this.currentCourse.lessons[currentIndex + 1], this.currentCourse.id);
                }, 2000);
            }
        }
    }

    updateVideoProgress() {
        const progressFill = document.getElementById('video-progress-fill');
        progressFill.style.width = `${this.videoProgress}%`;
        
        if (this.currentLesson && this.currentCourse) {
            const progressKey = `${this.currentCourse.id}_lesson_${this.currentLesson.id}`;
            if (!this.currentUser.lessonProgress[progressKey]) {
                this.currentUser.lessonProgress[progressKey] = {};
            }
            this.currentUser.lessonProgress[progressKey].progress = this.videoProgress;
        }
    }

    seekVideo(percentage) {
        this.videoProgress = Math.max(0, Math.min(100, percentage));
        this.updateVideoProgress();
        
        const currentTime = Math.floor((this.videoProgress / 100) * this.videoDuration);
        document.getElementById('time-display').textContent = 
            `${this.formatTime(currentTime)} / ${this.currentLesson?.duration || '0:00'}`;
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    resetVideoPlayer() {
        const videoContainer = document.getElementById('video-player');
        if (videoContainer) {
            // Restore the original placeholder HTML to ensure a clean state
            videoContainer.innerHTML = `
                <div class="video-placeholder">
                    <div class="play-button" id="play-button">▶</div>
                    <div class="video-title" id="video-title">Select a lesson to start</div>
                    <div class="video-duration" id="video-duration"></div>
                </div>
            `;
        }
        
        this.isVideoPlaying = false;
        this.videoProgress = 0;
        this.clearVideoTimer();
        this.currentLesson = null; // Fully reset the lesson state
    }

    saveNotes() {
        if (!this.currentLesson || !this.currentCourse) return;

        const notes = document.getElementById('lesson-notes').value;
        const progressKey = `${this.currentCourse.id}_lesson_${this.currentLesson.id}`;
        
        if (!this.currentUser.lessonProgress[progressKey]) {
            this.currentUser.lessonProgress[progressKey] = {};
        }
        
        this.currentUser.lessonProgress[progressKey].notes = notes;
        this.saveUserData();
        
        this.showToast('Notes saved successfully! 📝', 'success');
    }

    // Course Filtering
    setupCourseFilters() {
        const categoryFilter = document.getElementById('category-filter');
        const difficultyFilter = document.getElementById('difficulty-filter');
        const searchInput = document.getElementById('search-courses');

        categoryFilter.innerHTML = '<option value="all">All Categories</option>';
        this.categories.forEach(cat => {
            categoryFilter.innerHTML += `<option value="${cat.name}">${cat.name}</option>`;
        });

        [categoryFilter, difficultyFilter, searchInput].forEach(element => {
            element.onchange = () => this.filterCourses();
            element.oninput = () => this.filterCourses();
        });
    }

    filterCourses() {
        const categoryFilter = document.getElementById('category-filter').value;
        const difficultyFilter = document.getElementById('difficulty-filter').value;
        const searchTerm = document.getElementById('search-courses').value.toLowerCase();

        let filteredCourses = this.baseCourses;

        if (categoryFilter !== 'all') {
            filteredCourses = filteredCourses.filter(course => course.category === categoryFilter);
        }

        if (difficultyFilter !== 'all') {
            filteredCourses = filteredCourses.filter(course => course.difficulty === difficultyFilter);
        }

        if (searchTerm) {
            filteredCourses = filteredCourses.filter(course => 
                course.title.toLowerCase().includes(searchTerm) ||
                course.description.toLowerCase().includes(searchTerm) ||
                course.instructor.toLowerCase().includes(searchTerm)
            );
        }

        this.displayFilteredCourses(filteredCourses);
    }

    displayFilteredCourses(courses) {
        const container = document.getElementById('all-courses');
        container.innerHTML = '';

        if (courses.length === 0) {
            container.innerHTML = '<div class="text-center text-muted">No courses found matching your criteria.</div>';
            return;
        }

        courses.forEach(course => {
            const courseCard = this.createCourseCard(course);
            container.appendChild(courseCard);
        });
    }

    // Tab and UI Setup
    setupTabSwitching() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.onclick = () => {
                const tabName = btn.dataset.tab;
                
                const parentContainer = btn.closest('.lesson-tabs') || btn.closest('.admin-tabs');
                const contentContainer = btn.closest('.tab-content') || btn.closest('.admin-content');
                
                if (parentContainer) {
                    parentContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                }
                
                if (contentContainer) {
                    contentContainer.querySelectorAll('.tab-pane').forEach(pane => {
                        pane.classList.remove('active');
                    });
                    
                    const targetPane = contentContainer.querySelector(`#${tabName}-tab`);
                    if (targetPane) {
                        targetPane.classList.add('active');
                    }
                }
            };
        });
    }

    setupAdminTabs() {
        const adminTabs = document.querySelectorAll('.admin-tabs .tab-btn');
        adminTabs.forEach(tab => {
            tab.onclick = () => {
                const tabName = tab.dataset.tab;
                
                adminTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                document.querySelectorAll('.admin-content .tab-pane').forEach(pane => {
                    pane.classList.remove('active');
                });
                
                const targetPane = document.getElementById(`${tabName}-tab`);
                if (targetPane) {
                    targetPane.classList.add('active');
                    
                    if (tabName === 'student-analytics') {
                        this.loadStudentAnalytics();
                    } else if (tabName === 'course-management') {
                        this.loadCourseManagement();
                    } else if (tabName === 'content-editor') {
                        this.loadContentEditor();
                    }
                }
            };
        });
    }

     // Quiz System
    startQuiz(quiz, courseId) {
        if (!this.isUserEnrolledInCourse(courseId)) {
            this.showToast('Please enroll in this course first', 'warning');
            return;
        }

        // Check attempts
        const progressKey = `${courseId}_quiz_${quiz.id}`;
        const quizProgress = this.currentUser.quizProgress[progressKey];
        const attempts = quizProgress?.attempts || 0;

        if (attempts >= quiz.max_attempts) {
            this.showToast(`You have reached the maximum attempts (${quiz.max_attempts}) for this quiz`, 'warning');
            return;
        }

        this.currentQuiz = quiz;
        this.currentCourse = this.baseCourses.find(c => c.id === courseId);
        this.currentQuestionIndex = 0;
        this.quizAnswers = new Array(quiz.questions.length).fill(null);
        
        this.navigateToSection('quiz-taking');
        this.loadQuiz();
        this.startQuizTimer();
    }

    loadQuiz() {
        document.getElementById('quiz-title').textContent = this.currentQuiz.title;
        
        // Update attempts display
        const progressKey = `${this.currentCourse.id}_quiz_${this.currentQuiz.id}`;
        const attempts = this.currentUser.quizProgress[progressKey]?.attempts || 0;
        document.getElementById('quiz-attempts').textContent = 
            `Attempt ${attempts + 1} of ${this.currentQuiz.max_attempts}`;
        
        this.loadQuestion();
        this.updateQuizProgress();
    }

    loadQuestion() {
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        const container = document.getElementById('question-container');
        
        container.innerHTML = `
            <div class="question-text">${question.question}</div>
            <div class="answer-options" id="answer-options"></div>
        `;

        const optionsContainer = document.getElementById('answer-options');
        
        if (question.type === 'multiple_choice') {
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'answer-option';
                optionElement.innerHTML = `
                    <input type="radio" name="answer" value="${index}" id="option-${index}">
                    <label for="option-${index}">${option}</label>
                `;

                optionElement.addEventListener('click', () => {
                    document.getElementById(`option-${index}`).checked = true;
                    this.selectAnswer(index);
                    
                    optionsContainer.querySelectorAll('.answer-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    optionElement.classList.add('selected');
                });

                optionsContainer.appendChild(optionElement);
            });
        } else if (question.type === 'true_false') {
            [true, false].forEach((value, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'answer-option';
                optionElement.innerHTML = `
                    <input type="radio" name="answer" value="${value}" id="option-${value}">
                    <label for="option-${value}">${value ? 'True' : 'False'}</label>
                `;

                optionElement.addEventListener('click', () => {
                    document.getElementById(`option-${value}`).checked = true;
                    this.selectAnswer(value);
                    
                    optionsContainer.querySelectorAll('.answer-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    optionElement.classList.add('selected');
                });

                optionsContainer.appendChild(optionElement);
            });
        }

        // Restore previous answer if exists
        const savedAnswer = this.quizAnswers[this.currentQuestionIndex];
        if (savedAnswer !== null) {
            if (question.type === 'multiple_choice') {
                const radio = document.getElementById(`option-${savedAnswer}`);
                if (radio) {
                    radio.checked = true;
                    radio.closest('.answer-option').classList.add('selected');
                }
            } else if (question.type === 'true_false') {
                const radio = document.getElementById(`option-${savedAnswer}`);
                if (radio) {
                    radio.checked = true;
                    radio.closest('.answer-option').classList.add('selected');
                }
            }
        }

        this.updateNavigationButtons();
    }

    selectAnswer(answer) {
        this.quizAnswers[this.currentQuestionIndex] = answer;
    }

    submitQuiz() {
        if (this.quizTimer) {
            clearInterval(this.quizTimer);
        }

        const score = this.calculateQuizScore();
        const passed = score >= this.currentQuiz.passing_score;
        
        // Update quiz progress
        const progressKey = `${this.currentCourse.id}_quiz_${this.currentQuiz.id}`;
        if (!this.currentUser.quizProgress[progressKey]) {
            this.currentUser.quizProgress[progressKey] = {
                attempts: 0,
                bestScore: 0,
                completed: false,
                passed: false
            };
        }
        
        const quizProgress = this.currentUser.quizProgress[progressKey];
        quizProgress.attempts++;
        quizProgress.lastScore = score;
        quizProgress.lastAttemptDate = new Date().toISOString();
        
        if (score > quizProgress.bestScore) {
            quizProgress.bestScore = score;
        }
        
        if (passed && !quizProgress.passed) {
            quizProgress.completed = true;
            quizProgress.passed = true;
            this.currentUser.stats.quizzesCompleted++;
            
            // Add to activity
            this.addActivity('quiz_completed', `Scored ${score}% on "${this.currentQuiz.title}" in ${this.currentCourse.title}`);
            
            // Check achievements
            this.checkAchievements('quiz_completion');
            if (score === 100) {
                this.checkAchievements('perfect_score');
            }
            this.checkAchievements('course_completion');
        }
        
        this.saveUserData();
        this.showQuizResults(score, passed);
        this.navigateToSection('quiz-results');
    }

    calculateQuizScore() {
        let totalPoints = 0;
        let earnedPoints = 0;
        
        this.currentQuiz.questions.forEach((question, index) => {
            totalPoints += question.points || 10;
            const userAnswer = this.quizAnswers[index];
            const correctAnswer = question.correct_answer;
            
            if (userAnswer === correctAnswer) {
                earnedPoints += question.points || 10;
            }
        });

        return totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
    }

    showQuizResults(score, passed) {
        const scoreElement = document.getElementById('final-score');
        const scoreCircle = scoreElement.closest('.score-circle');
        const summaryElement = document.getElementById('results-summary');
        
        scoreElement.textContent = `${score}%`;
        
        if (passed) {
            scoreCircle.classList.remove('fail');
            summaryElement.innerHTML = `
                <div class="results-summary passed">
                    <h3>ðŸŽ‰ Congratulations!</h3>
                    <p>You passed with ${score}%! You needed ${this.currentQuiz.passing_score}% to pass.</p>
                </div>
            `;
        } else {
            scoreCircle.classList.add('fail');
            summaryElement.innerHTML = `
                <div class="results-summary failed">
                    <h3>Keep Learning!</h3>
                    <p>You scored ${score}%. You need ${this.currentQuiz.passing_score}% to pass. Review the material and try again!</p>
                </div>
            `;
        }

        // Show detailed results
        const resultsContent = document.getElementById('results-content');
        resultsContent.innerHTML = '';

        this.currentQuiz.questions.forEach((question, index) => {
            const userAnswer = this.quizAnswers[index];
            const correctAnswer = question.correct_answer;
            const isCorrect = userAnswer === correctAnswer;

            const resultItem = document.createElement('div');
            resultItem.className = 'card';
            
            let userAnswerText = '';
            let correctAnswerText = '';
            
            if (question.type === 'multiple_choice') {
                userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'Not answered';
                correctAnswerText = question.options[correctAnswer];
            } else {
                userAnswerText = userAnswer !== null ? userAnswer.toString() : 'Not answered';
                correctAnswerText = correctAnswer.toString();
            }

            resultItem.innerHTML = `
                <div class="card__body">
                    <div class="question-text" style="margin-bottom: 16px;">${question.question}</div>
                    <div class="answer-review">
                        <div class="status ${isCorrect ? 'status--success' : 'status--error'}" style="margin-bottom: 12px;">
                            ${isCorrect ? '✅ Correct' : '✖️ Incorrect'} (${question.points || 10} points)
                        </div>
                        <div style="margin-bottom: 8px;"><strong>Your answer:</strong> ${userAnswerText}</div>
                        <div style="margin-bottom: 8px;"><strong>Correct answer:</strong> ${correctAnswerText}</div>
                        <div style="color: var(--color-text-secondary); font-style: italic;">${question.explanation}</div>
                    </div>
                </div>
            `;

            resultsContent.appendChild(resultItem);
        });
    }

    // Achievement System
    checkAchievements(type) {
        const newAchievements = [];
        
        this.achievements.forEach(achievement => {
            if (this.currentUser.unlockedAchievements.includes(achievement.id)) {
                return; // Already unlocked
            }
            
            let unlocked = false;
            
            switch (achievement.type) {
                case 'enrollment':
                    if (this.currentUser.enrolledCourses.length >= 1) unlocked = true;
                    break;
                    
                case 'lesson_completion':
                    if (this.currentUser.stats.lessonsCompleted >= 1) unlocked = true;
                    break;
                    
                case 'quiz_completion':
                    if (this.currentUser.stats.quizzesCompleted >= 1) unlocked = true;
                    break;
                    
                case 'course_completion':
                    const completedCourses = this.currentUser.enrolledCourses.filter(courseId => 
                        this.calculateCourseProgress(courseId) === 100
                    );
                    this.currentUser.stats.coursesCompleted = completedCourses.length;
                    if (completedCourses.length >= 1) unlocked = true;
                    break;
                    
                case 'perfect_score':
                    const perfectScores = Object.values(this.currentUser.quizProgress)
                        .filter(progress => progress.bestScore === 100);
                    if (perfectScores.length >= 1) unlocked = true;
                    break;
                    
                case 'time_milestone':
                    const hoursWatched = this.currentUser.stats.totalWatchTime / 3600;
                    if (hoursWatched >= 10) unlocked = true;
                    break;
                    
                case 'multiple_enrollments':
                    if (this.currentUser.enrolledCourses.length >= 3) unlocked = true;
                    break;
                    
                case 'streak':
                    if (this.currentUser.stats.currentStreak >= 7) unlocked = true;
                    break;
            }
            
            if (unlocked) {
                this.currentUser.unlockedAchievements.push(achievement.id);
                this.currentUser.stats.totalPoints += achievement.points;
                newAchievements.push(achievement);
                
                this.addActivity('achievement_unlocked', `Unlocked "${achievement.title}" achievement`);
            }
        });
        
        // Show achievement notifications
        newAchievements.forEach((achievement, index) => {
            setTimeout(() => {
                this.showAchievementPopup(achievement);
            }, index * 1000);
        });
    }

    showAchievementPopup(achievement) {
        const popup = document.getElementById('achievement-popup');
        document.getElementById('achievement-popup-icon').textContent = achievement.icon;
        document.getElementById('achievement-popup-title').textContent = achievement.title;
        document.getElementById('achievement-popup-description').textContent = achievement.description;
        
        popup.classList.remove('hidden');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 5000);
    }

    updateLastActive() {
        this.currentUser.stats.lastActiveDate = new Date().toISOString();
        this.saveUserData();
    }

    updateStreak() {
        const lastActive = new Date(this.currentUser.stats.lastActiveDate);
        const today = new Date();
        const daysDiff = Math.floor((today - lastActive) / (1000 * 60 * 60 * 24));
        
        if (daysDiff === 1) {
            // Consecutive day
            this.currentUser.stats.currentStreak++;
            if (this.currentUser.stats.currentStreak > this.currentUser.stats.longestStreak) {
                this.currentUser.stats.longestStreak = this.currentUser.stats.currentStreak;
            }
            this.checkAchievements('streak');
        } else if (daysDiff > 1) {
            // Streak broken
            this.currentUser.stats.currentStreak = 1;
        }
        // daysDiff === 0 means same day, no change needed
    }

    addActivity(type, description) {
        const activity = {
            type: type,
            description: description,
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString()
        };
        
        this.currentUser.recentActivity = this.currentUser.recentActivity || [];
        this.currentUser.recentActivity.unshift(activity);
        
        // Keep only last 10 activities
        if (this.currentUser.recentActivity.length > 10) {
            this.currentUser.recentActivity = this.currentUser.recentActivity.slice(0, 10);
        }
    }

    // Navigation and UI Management
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.navigateToSection(section);
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                document.getElementById('nav-menu').classList.remove('active');
            });
        });
    }

    setupMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    setupEventListeners() {
        // Admin mode toggle
        document.getElementById('toggle-admin-mode').addEventListener('click', () => {
            this.toggleAdminMode();
        });

        // Browse courses button
        document.getElementById('browse-courses-btn').addEventListener('click', () => {
            this.navigateToSection('courses');
            document.querySelector('[data-section="courses"]').classList.add('active');
            document.querySelector('[data-section="home"]').classList.remove('active');
        });

        // Export progress button
        document.getElementById('export-progress-btn').addEventListener('click', () => {
            this.exportProgressData();
        });

        // Course detail navigation
        document.getElementById('back-to-courses').addEventListener('click', () => {
            this.navigateToSection('courses');
        });

        // Quiz navigation
        document.getElementById('back-to-quizzes').addEventListener('click', () => {
            this.navigateToSection('quizzes');
        });

        // Video player controls
        this.setupVideoPlayerControls();

        // Quiz controls
        this.setupQuizControls();

        // Tab switching
        this.setupTabSwitching();

        // Course filters
        this.setupCourseFilters();

        // Notes saving
        document.getElementById('save-notes').addEventListener('click', () => {
            this.saveNotes();
        });

        // Profile form
        document.getElementById('profile-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateProfile();
        });

        // Reset all data
        document.getElementById('reset-all-data').addEventListener('click', () => {
            this.resetAllData();
        });

        // Achievement popup close
        document.getElementById('close-achievement-popup').addEventListener('click', () => {
            document.getElementById('achievement-popup').classList.add('hidden');
        });

        // Admin tab switching
        this.setupAdminTabs();
    }

    navigateToSection(section) {
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.classList.add('active');
            
            switch (section) {
                case 'home':
                    this.loadHomePage();
                    break;
                case 'courses':
                    this.loadCoursesPage();
                    break;
                case 'quizzes':
                    this.loadQuizzesPage();
                    break;
                case 'progress':
                    this.loadProgressPage();
                    break;
                case 'profile':
                    this.loadProfilePage();
                    break;
                case 'admin':
                    this.loadAdminPage();
                    break;
            }
        }
    }

    setupVideoPlayerControls() {
        const playButton = document.getElementById('play-button');
        const playPauseBtn = document.getElementById('play-pause-btn');
        const progressBar = document.getElementById('video-progress-bar');

        playButton.addEventListener('click', () => {
            this.toggleVideoPlayback();
        });

        playPauseBtn.addEventListener('click', () => {
            this.toggleVideoPlayback();
        });

        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = (clickX / rect.width) * 100;
            this.seekVideo(percentage);
        });
    }

    seekVideo(percentage) {
        this.videoProgress = Math.max(0, Math.min(100, percentage));
        this.updateVideoProgress();
        
        const currentTime = Math.floor((this.videoProgress / 100) * this.videoDuration);
        document.getElementById('time-display').textContent = 
            `${this.formatTime(currentTime)} / ${this.currentLesson?.duration || '0:00'}`;
    }

    setupQuizControls() {
        document.getElementById('prev-question').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-question').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('submit-quiz').addEventListener('click', () => {
            this.submitQuiz();
        });

        document.getElementById('retake-quiz').addEventListener('click', () => {
            this.retakeQuiz();
        });

        document.getElementById('back-to-course').addEventListener('click', () => {
            if (this.currentCourse) {
                this.openCourseDetail(this.currentCourse.id);
            } else {
                this.navigateToSection('courses');
            }
        });
    }

    setupTabSwitching() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.dataset.tab;
                
                // Handle both regular tabs and admin tabs
                const parentContainer = btn.closest('.lesson-tabs') || btn.closest('.admin-tabs');
                const contentContainer = btn.closest('.tab-content') || btn.closest('.admin-content');
                
                if (parentContainer) {
                    parentContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                }
                
                if (contentContainer) {
                    contentContainer.querySelectorAll('.tab-pane').forEach(pane => {
                        pane.classList.remove('active');
                    });
                    
                    const targetPane = contentContainer.querySelector(`#${tabName}-tab`);
                    if (targetPane) {
                        targetPane.classList.add('active');
                    }
                }
            });
        });
    }

    setupCourseFilters() {
        const categoryFilter = document.getElementById('category-filter');
        const difficultyFilter = document.getElementById('difficulty-filter');
        const searchInput = document.getElementById('search-courses');

        // Populate category filter
        categoryFilter.innerHTML = '<option value="all">All Categories</option>';
        this.categories.forEach(cat => {
            categoryFilter.innerHTML += `<option value="${cat.name}">${cat.name}</option>`;
        });

        // Add event listeners
        [categoryFilter, difficultyFilter, searchInput].forEach(element => {
            element.addEventListener('change', () => this.filterCourses());
            element.addEventListener('input', () => this.filterCourses());
        });
    }

    setupAdminTabs() {
        const adminTabs = document.querySelectorAll('.admin-tabs .tab-btn');
        adminTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                
                adminTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                document.querySelectorAll('.admin-content .tab-pane').forEach(pane => {
                    pane.classList.remove('active');
                });
                
                const targetPane = document.getElementById(`${tabName}-tab`);
                if (targetPane) {
                    targetPane.classList.add('active');
                    
                    // Load specific admin content
                    if (tabName === 'student-analytics') {
                        this.loadStudentAnalytics();
                    } else if (tabName === 'course-management') {
                        this.loadCourseManagement();
                    } else if (tabName === 'content-editor') {
                        this.loadContentEditor();
                    }
                }
            });
        });
    }

    // Page Loading Functions
    loadHomePage() {
        this.loadDashboardStats();
        this.loadCategories();
        this.loadFeaturedCourses();
        this.loadRecentActivity();
        this.updateUserDisplay();
    }

    loadDashboardStats() {
        const container = document.getElementById('dashboard-stats');
        container.innerHTML = '';

        const stats = [
            {
                icon: '📚',
                value: this.currentUser.enrolledCourses.length,
                label: 'Enrolled Courses',
                color: 'var(--color-primary)'
            },
            {
                icon: '✅',
                value: this.currentUser.stats.coursesCompleted,
                label: 'Completed',
                color: 'var(--color-success)'
            },
            {
                icon: '⏱',
                value: `${Math.floor(this.currentUser.stats.totalWatchTime / 60)}m`,
                label: 'Watch Time',
                color: 'var(--color-warning)'
            },
            {
                icon: '🔥',
                value: this.currentUser.stats.currentStreak,
                label: 'Day Streak',
                color: 'var(--color-error)'
            },
            {
                icon: '⭐',
                value: this.currentUser.stats.totalPoints,
                label: 'Total Points',
                color: 'var(--color-info)'
            }
        ];

        stats.forEach(stat => {
            const statCard = document.createElement('div');
            statCard.className = 'dashboard-stat';
            statCard.innerHTML = `
                <div class="dashboard-stat-icon">${stat.icon}</div>
                <div class="dashboard-stat-value">${stat.value}</div>
                <div class="dashboard-stat-label">${stat.label}</div>
            `;
            container.appendChild(statCard);
        });
    }

    loadCategories() {
        const container = document.getElementById('categories-grid');
        container.innerHTML = '';

        this.categories.forEach(category => {
            const courseCount = this.baseCourses.filter(c => c.category === category.name).length;
            const categoryCard = this.createCategoryCard({...category, course_count: courseCount});
            container.appendChild(categoryCard);
        });
    }

    createCategoryCard(category) {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <div class="category-name">${category.name}</div>
            <div class="category-description">${category.description}</div>
            <div class="category-count">${category.course_count} courses</div>
        `;

        card.addEventListener('click', () => {
            this.navigateToSection('courses');
            document.getElementById('category-filter').value = category.name;
            this.filterCourses();
        });

        return card;
    }

    loadFeaturedCourses() {
        const container = document.getElementById('featured-courses');
        container.innerHTML = '';

        this.baseCourses.slice(0, 3).forEach(course => {
            const courseCard = this.createCourseCard(course);
            container.appendChild(courseCard);
        });
    }

    loadRecentActivity() {
        const activitySection = document.getElementById('recent-activity-section');
        const container = document.getElementById('activity-feed');
        
        if (!this.currentUser.recentActivity || this.currentUser.recentActivity.length === 0) {
            activitySection.style.display = 'none';
            return;
        }
        
        activitySection.style.display = 'block';
        container.innerHTML = '';

        this.currentUser.recentActivity.slice(0, 5).forEach(activity => {
            const activityItem = this.createActivityItem(activity);
            container.appendChild(activityItem);
        });
    }

    createActivityItem(activity) {
        const item = document.createElement('div');
        item.className = 'activity-item';

        let icon = '🎀';
        switch (activity.type) {
            case 'user_registered': icon = '✅️'; break;
            case 'course_enrolled': icon = '🎬'; break;
            case 'lesson_completed': icon = '🗡️'; break;
            case 'quiz_completed': icon = '💐'; break;
            case 'achievement_unlocked': icon = '💥'; break;
            default: icon = '🔛';
        }

        const timeAgo = this.getTimeAgo(activity.timestamp);

        item.innerHTML = `
            <div class="activity-icon">${icon}</div>
            <div class="activity-details">
                <div class="activity-text">${activity.description}</div>
                <div class="activity-time">${timeAgo}</div>
            </div>
        `;

        return item;
    }

    getTimeAgo(timestamp) {
        const now = new Date();
        const time = new Date(timestamp);
        const diffInSeconds = Math.floor((now - time) / 1000);
        
        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
    }

    loadCoursesPage() {
        this.loadAllCourses();
    }

    loadAllCourses() {
        const container = document.getElementById('all-courses');
        container.innerHTML = '';

        this.baseCourses.forEach(course => {
            const courseCard = this.createCourseCard(course);
            container.appendChild(courseCard);
        });
    }

    createCourseCard(course) {
        const card = document.createElement('div');
        const isEnrolled = this.isUserEnrolledInCourse(course.id);
        const progress = isEnrolled ? this.calculateCourseProgress(course.id) : 0;
        
        card.className = `course-card ${!isEnrolled ? 'not-enrolled' : ''}`;
        
        card.innerHTML = `
            <div class="course-thumbnail">
                <img src="${course.thumbnail}" alt="${course.title}" onerror="this.style.display='none';">
                <div class="course-difficulty">${course.difficulty}</div>
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <div class="course-instructor">By ${course.instructor}</div>
                <div class="course-description">${course.description}</div>
                <div class="course-meta">
                    <div class="course-rating">â­ ${course.rating} (${course.totalStudents.toLocaleString()} students)</div>
                    <div class="course-duration">${course.duration}</div>
                    <div class="course-price ${course.price === 0 ? 'free' : ''}">${course.price === 0 ? 'Free' : '$' + course.price}</div>
                </div>
                ${isEnrolled ? `
                    <div class="course-progress">
                        <div class="progress-text">${progress}% complete</div>
                        <div class="progress-bar-container">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progress}%"></div>
                            </div>
                        </div>
                    </div>
                ` : ''}
                <div class="course-actions">
                    ${isEnrolled ? `
                        <span class="course-status course-status--${progress === 100 ? 'completed' : 'enrolled'}">
                            ${progress === 100 ? 'Completed' : 'Enrolled'}
                        </span>
                        <button class="btn btn--primary btn--sm continue-course-btn" data-course-id="${course.id}">
                            ${progress > 0 ? 'Continue Learning' : 'Start Course'}
                        </button>
                    ` : `
                        <button class="btn btn--primary btn--sm enroll-btn" data-course-id="${course.id}">
                            Enroll Now
                        </button>
                        <button class="btn btn--secondary btn--sm preview-btn" data-course-id="${course.id}">
                            Preview
                        </button>
                    `}
                </div>
            </div>
        `;

        // Add event listeners
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('enroll-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const courseId = parseInt(e.target.dataset.courseId);
                this.enrollInCourse(courseId);
            } else if (e.target.classList.contains('continue-course-btn') || e.target.classList.contains('preview-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const courseId = parseInt(e.target.dataset.courseId);
                this.openCourseDetail(courseId);
            }
        });

        return card;
    }

    filterCourses() {
        const categoryFilter = document.getElementById('category-filter').value;
        const difficultyFilter = document.getElementById('difficulty-filter').value;
        const searchTerm = document.getElementById('search-courses').value.toLowerCase();

        let filteredCourses = this.baseCourses;

        if (categoryFilter !== 'all') {
            filteredCourses = filteredCourses.filter(course => course.category === categoryFilter);
        }

        if (difficultyFilter !== 'all') {
            filteredCourses = filteredCourses.filter(course => course.difficulty === difficultyFilter);
        }

        if (searchTerm) {
            filteredCourses = filteredCourses.filter(course => 
                course.title.toLowerCase().includes(searchTerm) ||
                course.description.toLowerCase().includes(searchTerm) ||
                course.instructor.toLowerCase().includes(searchTerm)
            );
        }

        this.displayFilteredCourses(filteredCourses);
    }

    displayFilteredCourses(courses) {
        const container = document.getElementById('all-courses');
        container.innerHTML = '';

        if (courses.length === 0) {
            container.innerHTML = '<div class="text-center text-muted">No courses found matching your criteria.</div>';
            return;
        }

        courses.forEach(course => {
            const courseCard = this.createCourseCard(course);
            container.appendChild(courseCard);
        });
    }

    isUserEnrolledInCourse(courseId) {
        return this.currentUser && this.currentUser.enrolledCourses.includes(courseId);
    }

    openCourseDetail(courseId) {
        this.currentCourse = this.baseCourses.find(c => c.id === courseId);
        if (!this.currentCourse) return;

        this.navigateToSection('course-detail');
        this.loadCourseDetail();
    }

    loadCourseDetail() {
        const isEnrolled = this.isUserEnrolledInCourse(this.currentCourse.id);
        const progress = isEnrolled ? this.calculateCourseProgress(this.currentCourse.id) : 0;
        
        // Load enrollment status
        const enrollmentStatus = document.getElementById('enrollment-status');
        if (isEnrolled) {
            enrollmentStatus.className = 'enrollment-status enrolled';
            enrollmentStatus.innerHTML = `
                <h4>🎀 Enrolled</h4>
                <p>You are enrolled in this course. Progress: ${progress}%</p>
                ${progress === 100 ? '<div class="status status--success">Course Completed! ðŸŽ‰</div>' : ''}
            `;
        } else {
            enrollmentStatus.className = 'enrollment-status not-enrolled';
            enrollmentStatus.innerHTML = `
                <h4>👆 Course Preview</h4>
                <p>Enroll to access all lessons and track your progress.</p>
                <button class="btn btn--primary" onclick="app.enrollInCourse(${this.currentCourse.id})">
                    Enroll Now ${this.currentCourse.price === 0 ? '(Free)' : `($${this.currentCourse.price})`}
                </button>
            `;
        }

        // Load course info
        const courseInfo = document.getElementById('course-info');
        courseInfo.innerHTML = `
            <h3>${this.currentCourse.title}</h3>
            <div class="course-info-item">
                <span>Instructor:</span>
                <span>${this.currentCourse.instructor}</span>
            </div>
            <div class="course-info-item">
                <span>Duration:</span>
                <span>${this.currentCourse.duration}</span>
            </div>
            <div class="course-info-item">
                <span>Difficulty:</span>
                <span>${this.currentCourse.difficulty}</span>
            </div>
            <div class="course-info-item">
                <span>Lessons:</span>
                <span>${this.currentCourse.lessons.length}</span>
            </div>
            <div class="course-info-item">
                <span>Quizzes:</span>
                <span>${this.currentCourse.quizzes.length}</span>
            </div>
            ${isEnrolled ? `
                <div class="course-info-item">
                    <span>Progress:</span>
                    <span>${progress}%</span>
                </div>
            ` : ''}
        `;

        this.loadLessonList(this.currentCourse.id);
        this.resetVideoPlayer();
    }

    loadLessonList(courseId) {
        const container = document.getElementById('lesson-list');
        const isEnrolled = this.isUserEnrolledInCourse(courseId);
        
        container.innerHTML = '<h4>Course Content</h4>';

        this.currentCourse.lessons.forEach((lesson, index) => {
            const lessonItem = document.createElement('div');
            const progressKey = `${courseId}_lesson_${lesson.id}`;
            const lessonProgress = this.currentUser.lessonProgress[progressKey];
            const isCompleted = lessonProgress?.completed || false;
            const isCurrent = this.currentLesson && this.currentLesson.id === lesson.id;
            const isLocked = !isEnrolled && index > 0; // Show first lesson as preview
            
            lessonItem.className = `lesson-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'active' : ''} ${isLocked ? 'locked' : ''}`;
            
            let statusClass = 'pending';
            let statusIcon = index + 1;
            
            if (isLocked) {
                statusClass = 'locked';
                statusIcon = '❗';
            } else if (isCompleted) {
                statusClass = 'completed';
                statusIcon = '💯';
            } else if (isCurrent) {
                statusClass = 'current';
                statusIcon = '🔖';
            }

            lessonItem.innerHTML = `
                <div class="lesson-status ${statusClass}">${statusIcon}</div>
                <div class="lesson-details">
                    <div class="lesson-title">${lesson.title}</div>
                    <div class="lesson-duration">${lesson.duration}</div>
                </div>
            `;

            if (!isLocked) {
                lessonItem.addEventListener('click', () => {
                    this.selectLesson(lesson, courseId);
                });
            } else {
                lessonItem.addEventListener('click', () => {
                    this.showToast('Please enroll to access this lesson', 'warning');
                });
            }

            container.appendChild(lessonItem);
        });
    }

    loadLessonResources(lesson) {
        const container = document.getElementById('resources-content');
        
        if (lesson.resources && lesson.resources.length > 0) {
            container.innerHTML = `
                <h4>Lesson Resources</h4>
                <ul>
                    ${lesson.resources.map(resource => `<li>${resource}</li>`).join('')}
                </ul>
                <div style="margin-top: 16px;">
                    <p><strong>Description:</strong> ${lesson.description}</p>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="text-center text-muted">
                    <p>❗ No additional resources for this lesson.</p>
                    <p><strong>Description:</strong> ${lesson.description}</p>
                </div>
            `;
        }
    }

    loadLessonEditor(lesson, courseId) {
        if (!this.isAdminMode) return;
        
        document.getElementById('edit-lesson-title').value = lesson.title;
        document.getElementById('edit-lesson-description').value = lesson.description;
        document.getElementById('edit-lesson-resources').value = lesson.resources ? lesson.resources.join('\n') : '';
        
        // Setup save handler
        document.getElementById('save-lesson-changes').onclick = () => {
            this.saveLessonChanges(lesson, courseId);
        };
    }

    saveLessonChanges(lesson, courseId) {
        const newTitle = document.getElementById('edit-lesson-title').value;
        const newDescription = document.getElementById('edit-lesson-description').value;
        const newResources = document.getElementById('edit-lesson-resources').value.split('\n').filter(r => r.trim());
        
        // Update lesson data
        lesson.title = newTitle;
        lesson.description = newDescription;
        lesson.resources = newResources;
        
        this.showToast('Lesson updated successfully! 🚩', 'success');
        this.loadLessonList(courseId);
        this.loadLessonResources(lesson);
    }

    resetVideoPlayer() {
        const videoTitle = document.getElementById('video-title');
        const videoControls = document.getElementById('video-controls');
        
        videoTitle.textContent = 'Select a lesson to start';
        videoControls.classList.add('hidden');
        
        this.isVideoPlaying = false;
        this.videoProgress = 0;
        this.clearVideoTimer();
    }

    saveNotes() {
        if (!this.currentLesson || !this.currentCourse) return;

        const notes = document.getElementById('lesson-notes').value;
        const progressKey = `${this.currentCourse.id}_lesson_${this.currentLesson.id}`;
        
        if (!this.currentUser.lessonProgress[progressKey]) {
            this.currentUser.lessonProgress[progressKey] = {};
        }
        
        this.currentUser.lessonProgress[progressKey].notes = notes;
        this.saveUserData();
        
        this.showToast('Notes saved successfully! 💯', 'success');
    }

    loadQuizzesPage() {
        const container = document.getElementById('quizzes-grid');
        container.innerHTML = '';

        // Populate quiz course filter
        const quizCourseFilter = document.getElementById('quiz-course-filter');
        quizCourseFilter.innerHTML = '<option value="all">All Courses</option>';
        this.baseCourses.forEach(course => {
            quizCourseFilter.innerHTML += `<option value="${course.id}">${course.title}</option>`;
        });

        // Add filter event listener
        quizCourseFilter.addEventListener('change', () => this.filterQuizzes());

        // Load all quizzes
        this.baseCourses.forEach(course => {
            course.quizzes.forEach(quiz => {
                const quizCard = this.createQuizCard(quiz, course);
                container.appendChild(quizCard);
            });
        });
    }

    createQuizCard(quiz, course) {
        const card = document.createElement('div');
        const isEnrolled = this.isUserEnrolledInCourse(course.id);
        const progressKey = `${course.id}_quiz_${quiz.id}`;
        const quizProgress = this.currentUser.quizProgress[progressKey];
        const attempts = quizProgress?.attempts || 0;
        const bestScore = quizProgress?.bestScore || 0;
        const isLocked = !isEnrolled;
        
        card.className = `quiz-card ${isLocked ? 'locked' : ''}`;
        
        card.innerHTML = `
            <h3>${quiz.title}</h3>
            <p><strong>Course:</strong> ${course.title}</p>
            <p><strong>Questions:</strong> ${quiz.questions.length}</p>
            <p><strong>Time Limit:</strong> ${Math.floor(quiz.time_limit / 60)} minutes</p>
            <p><strong>Passing Score:</strong> ${quiz.passing_score}%</p>
            ${quizProgress ? `
                <p><strong>Best Score:</strong> ${bestScore}%</p>
                <div class="quiz-attempts">Attempts: ${attempts}/${quiz.max_attempts}</div>
                ${quizProgress.passed ? '<div class="status status--success">🎖️ Passed</div>' : ''}
            ` : ''}
            <button class="btn btn--primary take-quiz-btn ${isLocked || attempts >= quiz.max_attempts ? 'btn--secondary' : ''}" 
                    data-quiz-id="${quiz.id}" data-course-id="${course.id}"
                    ${isLocked || attempts >= quiz.max_attempts ? 'disabled' : ''}>
                ${isLocked ? 'Enroll Required' : attempts >= quiz.max_attempts ? 'Max Attempts Reached' : 'Take Quiz'}
            </button>
        `;

        if (!isLocked && attempts < quiz.max_attempts) {
            const takeBtn = card.querySelector('.take-quiz-btn');
            takeBtn.addEventListener('click', () => {
                this.startQuiz(quiz, course.id);
            });
        }

        return card;
    }

    filterQuizzes() {
        const courseFilter = document.getElementById('quiz-course-filter').value;
        const container = document.getElementById('quizzes-grid');
        container.innerHTML = '';

        this.baseCourses.forEach(course => {
            if (courseFilter === 'all' || course.id.toString() === courseFilter) {
                course.quizzes.forEach(quiz => {
                    const quizCard = this.createQuizCard(quiz, course);
                    container.appendChild(quizCard);
                });
            }
        });
    }

    startQuizTimer() {
        let timeLeft = this.currentQuiz.time_limit;
        const timerElement = document.getElementById('quiz-timer');
        
        this.quizTimer = setInterval(() => {
            timeLeft--;
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Add warning color when time is running out
            if (timeLeft <= 60) {
                timerElement.classList.add('danger');
            }
            
            if (timeLeft <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateQuizProgress() {
        const progressText = document.getElementById('question-progress');
        const progressFill = document.getElementById('quiz-progress-fill');
        
        progressText.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.currentQuiz.questions.length}`;
        
        const percentage = ((this.currentQuestionIndex + 1) / this.currentQuiz.questions.length) * 100;
        progressFill.style.width = `${percentage}%`;
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-question');
        const nextBtn = document.getElementById('next-question');
        const submitBtn = document.getElementById('submit-quiz');
        
        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        if (this.currentQuestionIndex === this.currentQuiz.questions.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
            this.updateQuizProgress();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
            this.updateQuizProgress();
        }
    }

    retakeQuiz() {
        this.currentQuestionIndex = 0;
        this.quizAnswers = new Array(this.currentQuiz.questions.length).fill(null);
        this.navigateToSection('quiz-taking');
        this.loadQuiz();
        this.startQuizTimer();
    }

    loadProgressPage() {
        // Update progress stats
        document.getElementById('enrolled-count').textContent = this.currentUser.enrolledCourses.length;
        document.getElementById('completed-count').textContent = this.currentUser.stats.coursesCompleted;
        document.getElementById('lessons-completed-count').textContent = this.currentUser.stats.lessonsCompleted;
        document.getElementById('watch-time').textContent = `${Math.floor(this.currentUser.stats.totalWatchTime / 3600)}h`;
        document.getElementById('streak-count').textContent = this.currentUser.stats.currentStreak;
        document.getElementById('total-points').textContent = this.currentUser.stats.totalPoints;

        this.loadProgressCourses();
        this.loadUserAchievements();
    }

    loadProgressCourses() {
        const container = document.getElementById('progress-courses');
        container.innerHTML = '';

        if (this.currentUser.enrolledCourses.length === 0) {
            container.innerHTML = `
                <div class="text-center text-muted">
                    <p>‼️ No enrolled courses yet.</p>
                    <button class="btn btn--primary" onclick="app.navigateToSection('courses')">Browse Courses</button>
                </div>
            `;
            return;
        }

        this.currentUser.enrolledCourses.forEach(courseId => {
            const course = this.baseCourses.find(c => c.id === courseId);
            if (!course) return;

            const progress = this.calculateCourseProgress(courseId);
            const progressCourse = document.createElement('div');
            progressCourse.className = 'progress-course';
            
            progressCourse.innerHTML = `
                <div class="progress-course-header">
                    <h4>${course.title}</h4>
                    <span>${progress}% complete</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
                <div class="course-stats">
                    <small class="text-muted">
                        Lessons: ${this.getCompletedLessons(courseId)}/${course.lessons.length} | 
                        Quizzes: ${this.getCompletedQuizzes(courseId)}/${course.quizzes.length}
                    </small>
                </div>
            `;

            progressCourse.addEventListener('click', () => {
                this.openCourseDetail(courseId);
            });

            container.appendChild(progressCourse);
        });
    }

    getCompletedLessons(courseId) {
        const course = this.baseCourses.find(c => c.id === courseId);
        if (!course) return 0;

        return course.lessons.filter(lesson => {
            const progressKey = `${courseId}_lesson_${lesson.id}`;
            return this.currentUser.lessonProgress[progressKey]?.completed;
        }).length;
    }

    getCompletedQuizzes(courseId) {
        const course = this.baseCourses.find(c => c.id === courseId);
        if (!course) return 0;

        return course.quizzes.filter(quiz => {
            const progressKey = `${courseId}_quiz_${quiz.id}`;
            const progress = this.currentUser.quizProgress[progressKey];
            return progress?.completed && progress?.passed;
        }).length;
    }

    loadUserAchievements() {
        const container = document.getElementById('achievements-grid');
        container.innerHTML = '';

        this.achievements.forEach(achievement => {
            const isUnlocked = this.currentUser.unlockedAchievements.includes(achievement.id);
            const achievementCard = document.createElement('div');
            achievementCard.className = `achievement-card ${isUnlocked ? 'earned' : ''}`;
            
            achievementCard.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-description">${achievement.description}</div>
                <div class="achievement-points">+${achievement.points}</div>
            `;

            container.appendChild(achievementCard);
        });
    }

    loadProfilePage() {
        // Profile data is already updated in updateUserDisplay()
        const learningGoals = this.currentUser.learningGoals || '';
        document.getElementById('learning-goals').value = learningGoals;
    }

    updateProfile() {
        const newName = document.getElementById('display-name').value.trim();
        const newEmail = document.getElementById('email').value.trim();
        const learningGoals = document.getElementById('learning-goals').value.trim();
        const notifications = document.getElementById('notifications-enabled').checked;
        const autoplay = document.getElementById('autoplay-enabled').checked;

        if (!newName) {
            this.showToast('Name cannot be empty', 'error');
            return;
        }

        // Update user data
        this.currentUser.username = newName;
        this.currentUser.email = newEmail;
        this.currentUser.learningGoals = learningGoals;
        this.currentUser.settings.notifications = notifications;
        this.currentUser.settings.autoplay = autoplay;

        this.saveUserData();
        this.updateUserDisplay();
        
        this.showToast('Profile updated successfully! 🎉', 'success');
    }

    resetAllData() {
        if (confirm('Are you sure you want to reset all your progress? This action cannot be undone.')) {
            localStorage.removeItem('edulearn_user_data');
            location.reload();
        }
    }

    exportProgressData() {
        const progressReport = this.generateProgressReport();
        const blob = new Blob([progressReport], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `edulearn_progress_${this.currentUser.username}_${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showToast('Progress report downloaded! 🎉', 'success');
    }

    // Admin Functions
    toggleAdminMode() {
        this.isAdminMode = !this.isAdminMode;
        const body = document.body;
        const toggleText = document.getElementById('admin-mode-text');
        
        if (this.isAdminMode) {
            body.classList.add('admin-mode');
            toggleText.textContent = 'Disable Admin Mode';
            this.showToast('Admin mode enabled 🎉', 'info');
        } else {
            body.classList.remove('admin-mode');
            toggleText.textContent = 'Enable Admin Mode';
            this.showToast('Admin mode disabled', 'info');
        }
    }

    loadAdminPage() {
        if (!this.isAdminMode) {
            this.showToast('Please enable admin mode first', 'warning');
            return;
        }
        
        this.loadStudentAnalytics();
    }

    loadStudentAnalytics() {
        // Update analytics numbers
        document.getElementById('total-students').textContent = '1'; // Current user
        document.getElementById('total-completions').textContent = this.currentUser.stats.coursesCompleted;
        
        // Calculate average score
        const quizScores = Object.values(this.currentUser.quizProgress)
            .filter(p => p.bestScore > 0)
            .map(p => p.bestScore);
        const avgScore = quizScores.length > 0 ? 
            Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;
        document.getElementById('average-score').textContent = avgScore > 0 ? `${avgScore}%` : '-';
        
        // Load student progress table
        const tableContainer = document.getElementById('student-progress-table');
        tableContainer.innerHTML = `
            <h4>Student Progress Overview</h4>
            <div class="student-data">
                <div class="student-row">
                    <strong>${this.currentUser.username}</strong>
                    <div class="student-stats">
                        <span>Enrolled: ${this.currentUser.enrolledCourses.length} courses</span>
                        <span>Completed: ${this.currentUser.stats.lessonsCompleted} lessons</span>
                        <span>Points: ${this.currentUser.stats.totalPoints}</span>
                        <span>Streak: ${this.currentUser.stats.currentStreak} days</span>
                    </div>
                </div>
            </div>
        `;
    }

    loadCourseManagement() {
        const container = document.getElementById('admin-course-list');
        container.innerHTML = '';

        this.baseCourses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'admin-course-item';
            
            const enrolledCount = this.baseCourses.reduce((count, c) => {
                return count + (this.isUserEnrolledInCourse(c.id) ? 1 : 0);
            }, 0);
            
            courseItem.innerHTML = `
                <div>
                    <h4>${course.title}</h4>
                    <p>Lessons: ${course.lessons.length} | Quizzes: ${course.quizzes.length}</p>
                    <small>Enrolled students: ${this.isUserEnrolledInCourse(course.id) ? '1' : '0'}</small>
                </div>
                <div>
                    <button class="btn btn--secondary btn--sm" onclick="app.editCourse(${course.id})">Edit</button>
                </div>
            `;
            
            container.appendChild(courseItem);
        });
    }

    loadContentEditor() {
        const selector = document.getElementById('admin-course-selector');
        selector.innerHTML = '<option value="">Select a course to edit...</option>';
        
        this.baseCourses.forEach(course => {
            selector.innerHTML += `<option value="${course.id}">${course.title}</option>`;
        });
        
        selector.addEventListener('change', (e) => {
            const courseId = parseInt(e.target.value);
            if (courseId) {
                this.loadCourseEditor(courseId);
            }
        });
    }

    loadCourseEditor(courseId) {
        const course = this.baseCourses.find(c => c.id === courseId);
        if (!course) return;
        
        const container = document.getElementById('selected-course-editor');
        container.innerHTML = `
            <h4>Editing: ${course.title}</h4>
            <div class="form-group">
                <label class="form-label">Course Title</label>
                <input type="text" class="form-control" id="edit-course-title" value="${course.title}">
            </div>
            <div class="form-group">
                <label class="form-label">Description</label>
                <textarea class="form-control" id="edit-course-description" rows="4">${course.description}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Instructor</label>
                <input type="text" class="form-control" id="edit-course-instructor" value="${course.instructor}">
            </div>
            <button class="btn btn--primary" onclick="app.saveCourseChanges(${courseId})">Save Course Changes</button>
            
            <hr style="margin: 32px 0;">
            
            <h5>Lessons</h5>
            <div id="lessons-editor">
                ${course.lessons.map((lesson, index) => `
                    <div class="lesson-editor-item" style="margin-bottom: 16px; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
                        <h6>Lesson ${index + 1}: ${lesson.title}</h6>
                        <button class="btn btn--secondary btn--sm" onclick="app.editLessonInAdmin(${courseId}, ${lesson.id})">Edit Lesson</button>
                    </div>
                `).join('')}
            </div>
            
            <button class="btn btn--primary" onclick="app.addNewLesson(${courseId})">Add New Lesson</button>
        `;
    }

    saveCourseChanges(courseId) {
        const course = this.baseCourses.find(c => c.id === courseId);
        if (!course) return;
        
        course.title = document.getElementById('edit-course-title').value;
        course.description = document.getElementById('edit-course-description').value;
        course.instructor = document.getElementById('edit-course-instructor').value;
        
        this.showToast('Course updated successfully! 🎉', 'success');
        this.loadCourseManagement();
    }

    // Utility Functions
    showToast(message, type = 'success') {
        const toastContainer = document.getElementById('toast-container');
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 4000);
    }

    showLoading() {
        document.getElementById('loading-overlay').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loading-overlay').classList.add('hidden');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AdvancedEduLearnApp();
});
