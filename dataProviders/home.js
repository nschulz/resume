exports.getModel = function() {
    return {
        page_title: this.getPageTitle(),
        body: this.getBodyData(),
        sections: [
            this.getObjective(),
            this.getWorkExperience(),
            this.getEducation()
        ]
    }
};
exports.getPageTitle = function() {
    return "Nate Schulz | Software Engineer | Home";
};
exports.getBodyData = function() {
    return {
        id: "page_home",
        cssClasses: "p_home"
    };
};
exports.getObjective = function() {
    return {
        title: "Objective",
        subtitle: "A SUBTITLE GOES HERE",
        body: "I am a software engineer with a design background who thrives in small business and excels in large companies. Regardless of the challenge in front of me, I'm driven by my experience as a musician. Performing on stage gives me the audacity to try new things while a foundation in math and science provides me the tenacity to finish what I start. I received my bachelor of science degree in Physics from the University of Nebraska - Lincoln, in 2009. I started my professional career as an interactive media producer in 2004. My desire is to work with a team of individuals who are as inspired as me to deliver cutting-edge experiences."
    };
};
exports.getWorkExperience = function() {
    return {
        title: "Work Experience",
        subtitle: "another subtitle",
        subsections: [
            {
                title:    "Software Development Engineer II",
                byline:   "April 2014 – Present (6 months) Orange County, California",
                subtitle: "Amazon",
                body:     "As a \"level two\" at Appstore, my responsibilities have grown to include:\
                        * Driving design and consensus for front-end interface components of Appstore\
                        * Performing regular candidate phone screens and on-site interviews\
                        * Enforcing reusable, and testable JavaScript design patterns\
                        * Optimizing rendering performance - time to first-paint, file sizes, asset delivery, etc.\
                        * Unifying all dialogs in Appstore by creating common dialog framework\
                        * Onboarding new hires"
            },
            {
                title:    "Web Development Engineer",
                byline:   "October 2012 – April 2014 (1 year 7 months) Orange County, California Area",
                subtitle: "Amazon",
                body:     "In my first year at Appstore, I learned a lot about maintaining a production codebase. Risks that seemed trivial in a startup environment became subject to greater scrutiny.\
                        \
                        My responsibilities included:\
                        • Scaling existing theme infrastructure (5x) to support the rapidly growing number of App Store experiences\
                        • Designing simplified asset delivery for improved performance and shortened development time\
                        • JavaScript cleanup and organization\
                        • Web accessibility features (aria labels, screen reader support, etc.)\
                        • Assisting in production deployments\
                        • Bringing my experience with webkit layers to improve interactions (60fps initiative)\
                        • Maintain UI styles and scaling across a large range of devices from 320x480 to 2560x1440 over networks ranging from spotty 2G cellular networks to robust wi-fi networks"
            },
            {
                title:    "Owner",
                byline:   "August 2009 - March 2013",
                subtitle: "Theoretical Media, LLC",
                body:     "I design and develop software for iOS mobile devices as well as develop web applications for both desktop and mobile platforms."
            },
            {
                title:    "Lead Front-End Web Architect",
                subtitle: "Green Vision Media",
                byline:   "January 2011 – October 2012 (1 year 10 months) Montreal, Canada Area",
                body:     "I worked as a consultant on GVM’s elite team for 18 months developing in-house web applications built using a branch of my own JavaScript framework. The framework powers GVM's unique web experiences on desktop and mobile devices."
            },
            {
                title:    "Live Event Switcher/Camera Operator",
                subtitle: "Mid America Video Images",
                byline:   "June 2002 – October 2012 (10 years 5 months) Lincoln, Nebraska Area",
                body:     "My responsibilities at Mid America initially included equipment setup/teardown, camera operating, and post-production editing. Eventually, I began switching for live events to be recorded and projected live on large format screens."
            },
            {
                title:    "UI Prototyper",
                subtitle: "Pen-Link",
                byline:   "May 2010 – January 2011 (9 months) Lincoln, Nebraska Area",
                body:     "My responsibilities at Mid America initially included equipment setup/teardown, camera operating, and post-production editing. Eventually, I began switching for live events to be recorded and projected live on large format screens."
            },
            {
                title:    "Lead Innovator",
                subtitle: "Nanonation",
                byline:   "June 2004 – August 2009 (5 years)",
                body:     "Responsibilities include: Interface Design & Research, 3D Animation & Modeling, Video Production, Web Development (CSS, XHTML, PHP, MySQL, JavaScript, Flash, XML), Hardware & Software Development, Client Communication..."
            }
        ]
    }
};
exports.getEducation = function() {
    return {
        title: "Education",
        subtitle: "University of Nebraska-Lincoln",
        body: "BS Physics (Math minor) 2009"
    }
};