//Declaring Variables for All Lab Project Pages!!
/*class Page {
    constructor(project, {
        why,
        goal,
        experience,
        outcome,
        myRole
    } = {}) {
        this.project = project;
        this.why = why;
        this.goal = goal;
        this.experience = experience;
        this.outcome = outcome;
        this.myRole = myRole;

    }
}

const myDashboard = new Page('myDashboard', {
    why: 'I wanted to make a Dashboard web application that I could look at every morning and at random parts of the day to see things like the weather, surf, reminders, unread messages and a simple to-do list!',
    goal: 'A web app that is clean, and easy to look at, since I am going to be looking at it everyday. I also wanted to make it easy to use so I am not the only one that would be able to use it!',
    experience: "This was my first time using react.js and API's. It was a new experience, but I got use to it! I became much more comfortable with design patterns, async functions and react.js in general.!!!!!!add some sketches!!!!",
    outcome: "In Progress! But here I would put how happy I am, what I would/plan to change",
    myRole: "I coded everything for this, and designed it! It was a fun side project!"
});

document.getElementById('why').innerHTML = myDashboard.why;*/

function clicked(clicked) {
  localStorage.setItem("lab-clicked", clicked);
}

let hiringHeadingCopy = "Here is why you should hire me:";

class PageContent {
  constructor(navItem, { title, why, theGoal, theExperience, theOutcome }) {
    this.createNavItem(navItem);
    this.createHeading(title);
    this.createWhy(why);
    this.createGoal(theGoal);
    this.createExperience(theExperience);
    this.createOutcome(theOutcome);
    this.main = document.getElementById("main");
  }

  createNavItem(navItem) {
    let heading = document.createElement("p");
    heading.innerHTML = navItem;
    heading.className = "current-link";
    let nav = document.getElementById("nav");
    nav.appendChild(heading);
  }

  createHeading(title) {
    let headerDiv = document.getElementById("header");
    let heading = document.createElement("h1");
    heading.innerHTML = title;
    heading.className = "title-heading";
    headerDiv.appendChild(heading);
  }

  createWhy(why) {
    let whyDivElem = document.createElement("div");
    whyDivElem.className = "why-div even";
    main.appendChild(whyDivElem);

    let whyH1Elem = document.createElement("h3");
    whyH1Elem.innerHTML = "What is this project about?";
    whyH1Elem.className = "why-h3";
    whyDivElem.appendChild(whyH1Elem);

    let whyPElem = document.createElement("p");
    whyPElem.innerHTML = why;
    whyPElem.className = "why-p";
    whyDivElem.appendChild(whyPElem);
  }

  createGoal(goal) {
    let goalDivElem = document.createElement("div");
    goalDivElem.className = "goal-div odd";
    main.appendChild(goalDivElem);

    let goalH1Elem = document.createElement("h3");
    goalH1Elem.innerHTML = "What was the goal of the project?";
    goalH1Elem.className = "goal-h3";
    goalDivElem.appendChild(goalH1Elem);

    let goalPElem = document.createElement("p");
    goalPElem.innerHTML = goal;
    goalPElem.className = "why-p";
    goalDivElem.appendChild(goalPElem);
  }

  createExperience(theExperience) {
    let experienceDivElem = document.createElement("div");
    experienceDivElem.className = "experience-div";
    main.appendChild(experienceDivElem);

    let experienceH1Elem = document.createElement("h3");
    experienceH1Elem.innerHTML =
      "What was the experience like working on the project?";
    experienceH1Elem.className = "experience-h3";
    experienceDivElem.appendChild(experienceH1Elem);

    let experiencePElem = document.createElement("p");
    experiencePElem.innerHTML = theExperience;
    experiencePElem.className = "experience-p";
    experienceDivElem.appendChild(experiencePElem);
  }

  createOutcome(theOutcome) {
    let outcomeDivElem = document.createElement("div");
    outcomeDivElem.className = "outcome-div odd";
    main.appendChild(outcomeDivElem);

    let outcomeH1Elem = document.createElement("h3");
    outcomeH1Elem.innerHTML = "What did you think of outcome of the project?";
    outcomeH1Elem.className = "outcome-h3";
    outcomeDivElem.appendChild(outcomeH1Elem);

    let outcomePElem = document.createElement("p");
    outcomePElem.innerHTML = theOutcome;
    outcomePElem.className = "outcome-p";
    outcomeDivElem.appendChild(outcomePElem);
  }
}

/*const thisSite = new PageContent("This Very Site", {
  heading: true,
});

const Dashboard = new PageContent("theDashboard", {
  heading: true,
});

const Morality = new PageContent("Morality English Project", {
  heading: true,
});*/

let pageName = localStorage.getItem("lab-clicked");

console.log(pageName);

if (pageName == "this-site") {
  const thisSite = new PageContent("This Very Site", {
    title: "www.jamesdpratt.com",
    why:
      "I wanted to code a site where people like you (whoever you are and whatever you are here to do!) could come to learn more about me and get in contact with me and possibly hire me to help them out with web development.",
    theGoal:
      "The goal was to portray my skills and abilities. The goal was to code the entire site with no frameworks, simply with HTML, CSS and js. I also wanted to stun everyone and make them all feel like my abilities are well worth their price!",
    theExperience:
      "it was a great experience, and this was the first site I made a somewhat interactive web app with vanilla js. I had fun learning about a bunch of Object Oriented Programming and more importantly Design Patterns. I learned a ton in the process. If you want to understand why this site is somewhat impressive, check the URL when you  go to the separate read more pages. They are the same, its all just based on which btn you press.",
    theOutcome:
      "I think it came out quite well, I worked really hard on it and the site does pretty much all I wanted it to do.",
  });
} else if (pageName === "dashboard") {
  const dashboard = new PageContent("theDashboard", {
    title: "theDashboard",
    why:
      "This project is a site I coded for an english assignment (don't worry it was within the guidelines). I wanted to treat the project like a job, like Mr. Reynolds was my Client and I was coding a site for him to answer the questions that he required for the project! I had 4 days to do it and this is what I came up with!",
    theGoal:
      "The goal was to answer the questions, apply a couple of cool animations, and make the site easy to use. I wanted to make Mr. Reynolds always know where to go! I also wanted to use a couple cool SVGs and learn how to use background images for div tags easily.",
    theExperience:
      "It was interesting, this project helped me understand that I didn't really have the skills to work as a freelancer, at least not yet. I learned that the base I built (of Pure Javascript) wasn't quite strong enough to move on to the fancy frameworks that I started using. So I decided that I would go back to the basics and improve my vanilla js.",
    theOutcome:
      "I think it came out quite well, I worked really hard on it and the site does pretty much all I wanted it to do.",
  });
} else if (pageName === "morality") {
  const morality = new PageContent("2020 English Projects", {
    title: "2020 English Projects",
    why:
      "This project is a site I coded for an english assignment (don't worry it was within the guidelines). I wanted to treat the project like a job, like Mr. Reynolds was my Client and I was coding a site for him to answer the questions that he required for the project! I had 4 days to do it and this is what I came up with!",
    theGoal:
      "The goal was to answer the questions, apply a couple of cool animations, and make the site easy to use. I wanted to make Mr. Reynolds always know where to go! I also wanted to use a couple cool SVGs and learn how to use background images for div tags easily.",
    theExperience:
      "It was interesting, this project helped me understand that I didn't really have the skills to work as a freelancer, at least not yet. I learned that the base I built (of Pure Javascript) wasn't quite strong enough to move on to the fancy frameworks that I started using. So I decided that I would go back to the basics and improve my vanilla js.",
    theOutcome:
      "I think it came out quite well, I worked really hard on it and the site does pretty much all I wanted it to do.",
  });
} else if (pageName === "success") {
  const Success = new PageContent("2020 English Projects", {
    title: "2020 English Projects",
    why:
      "This project is a site I coded for an english assignment (don't worry it was within the guidelines). I wanted to treat the project like a job, like Mr. Reynolds was my Client and I was coding a site for him to answer the questions that he required for the project! I had 4 days to do it and this is what I came up with!",
    theGoal:
      "The goal was to answer the questions, apply a couple of cool animations, and make the site easy to use. I wanted to make Mr. Reynolds always know where to go! I also wanted to use a couple cool SVGs and learn how to use background images for div tags easily.",
    theExperience:
      "It was interesting, this project helped me understand that I didn't really have the skills to work as a freelancer, at least not yet. I learned that the base I built (of Pure Javascript) wasn't quite strong enough to move on to the fancy frameworks that I started using. So I decided that I would go back to the basics and improve my vanilla js.",
    theOutcome:
      "With only 4 days to work on the project, I was able to get the basics down and make the web app work simply the way I wanted, but I didn't have the time to think of more things to add to the project (such cool animations and svg movements), but over all I am somewhat proud of this project. I think it was like 80% of what I hoped, I think it could of been better.",
  });
}
