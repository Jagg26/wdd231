document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("responsive");
    });

    // Courses array
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: ['Python'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development.',
            technology: ['HTML', 'CSS'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers.',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects.',
            technology: ['C#'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'Students will learn to create dynamic websites that use JavaScript to respond to events.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'Students will focus on user experience, accessibility, compliance, performance optimization.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true
        }
    ];

    // Function to display courses
    function displayCourses(filteredCourses) {
        const certificateSection = document.querySelector(".certificates");
        certificateSection.innerHTML = ""; // Clear previous content

        filteredCourses.forEach(course => {
            const courseDiv = document.createElement("div");
            courseDiv.classList.add("certificate");
            if (course.completed) {
                courseDiv.classList.add("completed"); // Add a class for completed courses
            }
            courseDiv.innerHTML = `
                <h3>${course.subject} ${course.number} - ${course.title}</h3>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Technology:</strong> ${course.technology.join(", ")}</p>
            `;
            certificateSection.appendChild(courseDiv);
        });

        // Update total credits
        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        document.querySelector(".total-credits").textContent = `Total Credits: ${totalCredits}`;
    }

    // Filter functions
    document.querySelector("button[data-filter='all']").addEventListener("click", () => displayCourses(courses));
    document.querySelector("button[data-filter='CSE']").addEventListener("click", () => displayCourses(courses.filter(course => course.subject === 'CSE')));
    document.querySelector("button[data-filter='WDD']").addEventListener("click", () => displayCourses(courses.filter(course => course.subject === 'WDD')));

    // Initial display of all courses
    displayCourses(courses);

    // Set current year dynamically
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set last modified date dynamically
    document.getElementById('lastModified').textContent = 'Last Update: ' + document.lastModified;
});
