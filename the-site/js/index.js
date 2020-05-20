function clicked(clicked) {
    localStorage.setItem("clicked", clicked);
}

let header = document.createElement('p')
header.innerHTML = localStorage.getItem('clicked');
document.body.appendChild(header);

class PageContent {
    constructor(PageContext) {
        if (PageContext.hiringHeading) {
            this.createHiringHeading();
        }
        if (PageContext.meIntroOne) {
            this.createMeIntroOne();
        }
        if (PageContext.meIntroTwo) {
            this.createMeIntroTwo();
        }
        if (PageContext.skills) {
            this.createSkills();
        }
        if (PageContext.jobExp) {
            this.createJobExp();
        }
        if (PageContext.myProjects) {
            this.createMyProjects();
        }
        if (PageContext.contact) {
            this.createContact();
        }
    }

    createHiringHeading() {
        this.hiringHeading = "Here is why you should hire me:";
        let hiringHeadingHtml = document.createElement('p')
        hiringHeadingHtml.innerHTML = this.hiringHeading;
        document.body.appendChild(hiringHeadingHtml);
        return this
    }

    createMeIntroOne() {

        var obj = {
            line1: "I am only 18 years old.",
            line2: "Born and Raised on Kauai, Hawaii.",
            line3: "I graduted from Island School",
            line4: "I plan on attending Santa Clara University to major in Finance"
        }
        this.meIntroOne = obj
        let introDiv = document.createElement('div')
        Object.keys(obj).map(function (key, index) {
            let txt = obj[key]
            const elm = document.createElement('p').innerHTML = txt;
            introDiv.innerHTML += elm;
            console.log(txt);
        })
        document.body.appendChild(introDiv)
        return this
    }
    createMeIntroTwo() {
        var obj = {
            line1: "I write code from a designers perspective: to look good",
            line2: "I try to learn something new with every build",
            line3: "Turing a design into an actual product is the best part of coding"
        };
        this.meIntroTwo = obj;
        let introDiv = document.createElement('div')
        Object.keys(obj).map(function (key, index) {
            let txt = obj[key]
            const elm = document.createElement('p').innerHTML = txt;
            introDiv.innerHTML += elm;
            console.log(txt);
        })
        document.body.appendChild(introDiv)
        return this
    }
    createSkills() {
        var obj = {
            one: ['HTML', '95%'],
            two: ['CSS and Sass', '85%'],
            three: ['UI and UX Design', '70%'],
            four: ['JavaScript', '70%'],
            five: ['React.js', '50%']
        }
        this.skills = obj;
        let introDiv = document.createElement('div')
        Object.keys(obj).map(function (key, index) {
            let txt = obj[key]
            const skills = document.createElement('p').innerHTML = txt[0];
            const confidence = document.createElement('p').innerHTML = txt[1];
            introDiv.innerHTML += skills;
            introDiv.innerHTML += confidence;
            console.log(txt);
        })
        document.body.appendChild(introDiv)
        return this
    }
    createJobExp() {
        this.jobExp = {
            job1: 'Hokuala',
            job2: 'Nalukai'
        };
        return this
    }
    createMyProjects() {
        this.myProjects = {
            proj1: 'Randevu'
        };
        return this
    }
    createContact() {
        this.contact = 'Lets get in contact';
        return this
    }
}

class PageContext {
    constructor(pageTitle, {
        hiringHeading = false,
        meIntroOne = false,
        meIntroTwo = false,
        skills = false,
        workExp = false,
        projs = false,
        lab = false,
        contact = false,
        blog = false
    } = {}) {
        this.pageTitle = pageTitle;
        this.hiringHeading = hiringHeading;
        this.meIntroOne = meIntroOne;
        this.meIntroTwo = meIntroTwo;
        this.skills = skills;
        this.workExp = workExp;
        this.projs = projs;
        this.lab = lab;
        this.contact = contact;
        this.blog = blog;
    }
}
const hiring = new PageContext('I am interested in hiring you', {
    hiringHeading: true,
    meIntroOne: true,
    meIntroTwo: true,
    skills: true,
    workExp: true,
    projs: true,
    lab: true,
    contact: true
});

const page = new PageContent(hiring);