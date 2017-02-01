/**
 * education object contain data about the schools and onlineCourses
 */
var education = {
    schools: [
        {
            name: 'VRS College',
            location: 'Villupuram',
            degree: 'BE',
            dates: '2009-2013',
            url: 'http://vrscet.in',
            majors: ['CompSci', 'French']
        },
        {
            name: 'Anna University',
            location: 'Chennai',
            degree: 'M.Tech',
            dates: '2014-2016',
            url: 'http://annauniv.edu',
            majors: ['CompSci']
        }
    ],
    onlineCourses: [
        {
            title: 'Intro to HTML and CSS',
            school: 'Udacity',
            date: 2005,
            url: 'https://classroom.udacity.com/courses/ud304/'
        },
        {
            title: 'JavaScript basics',
            school: 'Udacity',
            date: 2006,
            url: 'https://classroom.udacity.com/courses/ud804/'
        }
    ]
};
/**
 * work object contain data about the jobs
 */
var work = {
    jobs: [
        {
            employer: 'Infosys',
            title: 'Web Developer',
            location: 'Bangalore',
            dates: 'January 2016 - Present',
            description: 'Working in web design, development and optimization.'
        },
        {
            employer: 'Google',
            title: 'Web Developer (Internship)',
            location: 'Chennai',
            dates: 'October 2013 - March 2014',
            description: 'Developed web pages using javascript. Enhance those pages using jQuery, bootstrap.'
        }
    ]
};
/**
 * projects object cotains data about the projects
 */
var projects = {
    projects: [
        {
            title: 'Animal Trading Cards',
            dates: '2011 ',
            description: 'This project is simply contains the HTML,CSS. Designing card about the description animal in which HTML contains the contains about animal scientific name, mass, lifespan, other details & their structures of the page are described. CSS used to enhance the styles',
            images: ['images/projects-1.jpg']
        },
        {
            title: 'Build a Portfolio Site',
            dates: '2012',
            description: 'Project contains responsive design that will display images, descriptions and links includes bootstrap. ',
            images: ['images/projects-2.jpg']
        }
    ]
};
/**
 * bio object contains data about biography
 */
var bio = {
        name: 'Jayanthi Vijayan',
        role: 'Web Developer',
        welcomeMessage: 'Hi! I am proactive quick learner & crazy tech greek. Love to do Programming Challenges' ,
        biopic: 'images/biopic_1.jpg',
        contacts: {
            mobile: '9894155825',
            email: 'jayanthi1592@gmail.com',
            github: 'https://github.com/jayanthi',
            location: 'Chennai'
        },
        skills: ['Teaching', 'JS', 'HTML', 'css','Programming']
};
/**
 *  internationalizeButton contains the html for button 
 *  and gets appended to an element with id 'main'
 */
$('#main').append(internationalizeButton);
/**
 * googleMap contains the html for google maps and ge appended to an element 
 * with id 'mapDiv'
 */
$('#mapDiv').append(googleMap);
/**
 * bio.display() is a function attached to the bio object which is used to 
 * display biography data in UI/FrontEnd.
 */
bio.display=function(){
    $('#header').prepend(HTMLheaderRole.replace('%data%',bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%',bio.name));
    $('#topContacts,#footerContacts').append(HTMLmobile.replace('%data%',bio.contacts.mobile));
    $('#topContacts,#footerContacts').append(HTMLemail.replace('%data%',bio.contacts.email));
    $('#topContacts,#footerContacts').append(HTMLgithub.replace('%data%',bio.contacts.github));
    $('#topContacts,#footerContacts').append(HTMLlocation.replace('%data%',bio.contacts.location));
    $('#header').append(HTMLbioPic.replace('%data%',bio.biopic).replace('%altdata%',bio.name));
    $('#header').append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));
    if(bio.skills.length>0){
        $('#header').append(HTMLskillsStart);
        /**
        * Iterates through all the skills in bio object and append them as a 
        * children to '#skills' container
        */
        bio.skills.forEach(function(value,index){
            $('#skills').append(HTMLskills.replace('%data%',value));
        });
    }
};
/**
 * work.display() is a function attached to the work object which is used to 
 * display work experience data on UI/FrontEnd.
 */
work.display=function(){
    /**
     * Iterates through all the jobs and append them as a children to 
     * '.work-entry' container
     */
    work.jobs.forEach(function(value,index){
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer=HTMLworkEmployer.replace('%data%',value.employer);
        var formattedTitle=HTMLworkTitle.replace('%data%',value.title);
        var formattedWorkDates=HTMLworkDates.replace('%data%',value.dates);
        var formattedWorkLocation=HTMLworkLocation.replace('%data%',value.location);
        var formattedWorkDescription=HTMLworkDescription.replace('%data%',value.description);
        var formattedEmployerTitle=formattedEmployer+formattedTitle+formattedWorkDates+formattedWorkLocation+formattedWorkDescription;
        $('.work-entry:last').append(formattedEmployerTitle);
    });
};
/**
 * projects.display() is a function attached to the projects object which is used to 
 * display projects data on UI/FrontEnd.
 */
projects.display=function(){
    /**
     * Iterates through all the projects and append them as a children to 
     * '.project-entry' container
     */
    projects.projects.forEach(function(value,index){
        $('#projects').append(HTMLprojectStart);
        var formattedProjectTitle=HTMLprojectTitle.replace('%data%',value.title);
        var formattedProjectDates=HTMLprojectDates.replace('%data%',value.dates);
        var formattedProjectDescription=HTMLprojectDescription.replace('%data%',value.description);
        var formattedProjectimages='';
        value.images.forEach(function(image_value,image_index){
            formattedProjectimages+=HTMLprojectImage.replace('%data%',image_value).replace('%altdata%',value.title);
        });
        $('.project-entry:last').append(formattedProjectTitle+formattedProjectDates+formattedProjectDescription+formattedProjectimages);
    });
};
/**
 * education.display() is a function attached to the education object which is used to 
 * display education data like schools and onlinecources on UI/FrontEnd.
 */
education.display=function(){
    /**
     * Iterates through all the schools and append them as a children to 
     * '.education-entry' container
     */
    education.schools.forEach(function(value,index){
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName=HTMLschoolName.replace('%data%',value.name);
        var formattedSchoolDegree=HTMLschoolDegree.replace('%data%',value.degree);
        var formattedSchoolDates=HTMLschoolDates.replace('%data%',value.dates);
        var formattedSchoolLocation=HTMLschoolLocation.replace('%data%',value.location);
        var formattedSchoolMajor=HTMLschoolMajor.replace('%data%',value.majors);
        $('.education-entry:last').append(formattedSchoolName+formattedSchoolDegree+formattedSchoolDates+formattedSchoolLocation+formattedSchoolMajor);
    });
    $('#education').append(HTMLonlineClasses);
    /**
     * Iterates through all the onlineCourses and append them as a children to
     * '.education-entry' container
     */
    education.onlineCourses.forEach(function(value,index){
        $('#education').append(HTMLschoolStart);
        var formattedOnlineCoursesTitle=HTMLonlineTitle.replace('%data%',value.title);
        var formattedOnlineCoursesSchool=HTMLonlineSchool.replace('%data%',value.school);
        var formattedOnlineCoursesDates=HTMLonlineDates.replace('%data%',value.date);
        var formattedOnlineCoursesURL=HTMLonlineURL.replace('%data%',value.url);
        $('.education-entry:last').append(formattedOnlineCoursesTitle+formattedOnlineCoursesSchool+formattedOnlineCoursesDates+formattedOnlineCoursesURL);
    });
    
};
/**
 * inName() is a function which accepts name as parameter and capitalise each word 
 * and return them as a single string.
 */
function inName(name){
    var splitted_name=name.split(' ');
    var first=splitted_name[0];
    var second=splitted_name[1];
    var formattedFirstName=first.slice(0,1).toUpperCase()+first.slice(1).toLowerCase();
    var formattedLastName=second.slice(0).toUpperCase();
    return formattedFirstName+' '+formattedLastName;
}
/**
 * projects.display() is a function call which is attached in projects object
 */
projects.display();
/**
 * bio.display() is a function call which is attached in bio object
 */
bio.display();
/**
 * work.display() is a function call which is attached in work object
 */
work.display();
/**
 * education.display() is a function call which is attached in education object
 */
education.display();