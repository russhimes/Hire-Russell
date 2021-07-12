

    let slideText = [
    "<span style = \"font-size: 1.75em;\">Overview</span><br/><br/>Thank you for visiting.  My name is Russell Himes and I am an aspiring web/software developer.  For the past decade I have worked in the legal field, where I learned to collaborate between people, even if they have different interests or perspectives.  I discovered programming in my off time and knew that I had to do this for a living.  I love the process of breaking big problems into smaller parts, then watching those parts combine to do incredible things.  I am looking for a position where I can provide value to others by doing that every day.",
"<span style = \"font-size: 1.75em\">TechElevator&emsp;&emsp;&emsp;&emsp;<img src = \"resources/techelevatorlogo.png\" class = \"img-fluid\" style = \"max-width: 20%; height: auto\"></img></span><br/><br/>I am currently undergoing an intensive Java Web Application Development Bootcamp with Tech Elevator's National Live Remove Program.  This 14-week program focuses on web-based software using the JAva programming language and platform.",
"<span style = \"font-size: 1.75em\">Skills</span><br/><br/> <span style = \"font-weight: bold\">&emsp;Object-Oriented Programming:</span> Java<br/><span style = \"font-weight: bold\">&emsp;Web Application Development:</span> HTML, CSS, JavaScript, Responsive Design<br/><span style = \"font-weight: bold\">&emsp;Development Tools and Techniques:</span> IntelliJ, Git",
"<span style = \"font-size: 1.75em\">Education</span><br/><br/><span style = \"font-weight: bold\">&emsp;University of Richmond: Juris Doctor May 2013<br/><br/>&emsp;Longwood University: B.S. Communication Studies</span><br/>&emsp;&emsp;&emsp;Graduate of the Cormier Honors College<br/>&emsp;&emsp;&emsp;Spanish Minor",
"<span style = \"font-size: 1.75em;\">Professional Experience</span><br/><br/><span style = \"font-weight: bold\">&emsp;Blair Law Offices, October 2019-May 2021</span><br/>&emsp;&emsp;&emsp;At Blair Law Offices I practiced workers' compensation law, collaborating often between witnesses, opposing counsel, and administrative judges to ensure the best outcome for our clients.<br/><br/><span style = \"font-weight: bold\">&emsp;Dept. of Professional and Occupational Regulation, October 2014-October 2019</span><br/>&emsp;&emsp;&emsp;At the Virginia DPOR I was responsible for preparing Fact-Finding Hearings to determine whether individuals should be licensed in over 18 professions, including Real Estate brokers, barbers, contractors, and tradesmen.  As the members of the licensing Boards were experts in their own professions, I assisted in helping them draft Opinions in these cases that could both explain their reasoning for denial, and survive a legal challenge on appeal.<br/> <br/><span style = \"font-weight: bold\">&emsp;Stackhouse, Nexsen & Turietta, September 2013-September 2014</span><br/>&emsp;&emsp;&emsp;At Stackhouse, Nexsen & Turietta, I honed my writing and communication skills negotiating settlements, interviewing witnesses, drafting motions, and communicating with clients.  I also appeared in District and Circuit Court in civil and traffic matters on behalf of my clients",
"<span style = \"font-size: 1.75em;\">About Me</span><br/><br/>&emsp;I enjoy board games, hiking, beach weekends, and practicing the keyboard.  After graduating from law school in 2013, I married my high school sweetheart.  We now live in the Richmond, VA area with our beagle, Samwise Gamgee Himes..</span><br/>"
];
    currentSlide = 0;
function loadIn() {
    currentSlide = 0;
    document.getElementById("slideshow").innerHTML = slideText[0];
}
function backwards() {
    if (currentSlide > 0) {
        currentSlide -= 1;
        document.getElementById("slideshow").innerHTML = slideText[currentSlide];
    }
}
function forward() {
    if (currentSlide < slideText.length-1) {
        currentSlide +=1;
	    document.getElementById("slideshow").innerHTML = slideText[currentSlide];
	}
}