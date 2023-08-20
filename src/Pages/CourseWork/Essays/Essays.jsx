import styled from "styled-components";

/* Component ---------------------------*/
import Essay from "./Essay";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS and JavaScript.">
                <p>
                    <b>HTML (Hypertext Markup Language)</b> is the
                    content/information of a website. It defines the headers,
                    paragraphs, images, and links that go on a website. HTML
                    takes care of what will be presented to a user on a site. It
                    has some capabilities of adjusting the color, text
                    alignment, and font size, however, those functions mainly
                    fall under CSS. Keywords: tags, hierarchy (h1, h2).
                </p>
                <p>
                    <b>CSS (Cascading Style Sheets)</b> is in charge of styling
                    and controls the design of a website. Without CSS a website
                    will lack visual appeal. JavaScript is the last piece of the
                    puzzle and while not necessary for creating a website, it
                    can greatly enhance it.
                </p>
                <p>
                    <b>JavaScript</b> adds interactivity to a website which can
                    be found in hover states of buttons, pop-ups, autofill,
                    carousels, and really any moving parts of a website. This
                    can help with making a website feel more responsive.
                </p>
            </Essay>
            <Essay question="Q2: What is the difference between Git and Github?">
                <b>Git</b>
                <ul>
                    <li>Version control software (VCS)</li>
                    <li>
                        Used as a command line tool and ran locally (on your
                        computer)
                    </li>
                    <li>Tracks code and version history</li>
                    <li>
                        Allows you to work on different versions/branches of a
                        code base
                    </li>
                    <li>
                        Helps to synchronize (merge) different versions of the
                        same code base (local code base, remote code base)
                    </li>
                </ul>
                <b>GitHub</b>
                <ul>
                    <li>A website/app that hosts remote git repositories</li>
                    <li>Owned by Microsoft</li>
                    <li>Deeply integrated with git</li>
                    <li>Provides extra functionality on top of git</li>
                    <li>Mainly used by teams of 2 or more</li>
                </ul>
                <b>Summary</b>
                <p>
                    Git tracks the changes made to your code and allows you to
                    revert back to earlier versions of your code. You can also
                    create a branch from your main line of code which allows you
                    to make changes to the code on that branch without affecting
                    the master branch.{" "}
                </p>
                <p>
                    You need to push and pull code to and from GitHub to keep
                    your local and remote repositories in sync and up to date.
                    the master branch.{" "}
                </p>
            </Essay>
            <Essay question="Q3: What is the difference between JQuery and React?">
                <b>jQuery</b>
                <ul>
                    <li>
                        A JavaScript (JS) library. Simplifies JavaScript with a
                        focus on utility
                        <ul>
                            <li>
                                Essentially jQuery <em>IS</em> JavaScript
                            </li>
                        </ul>
                    </li>
                    <li>Released in 2006</li>
                    <li>
                        Has features for :
                        <ul>
                            <li>HTML/DOM manipulation</li>
                            <li>CSS manipulation</li>
                            <li>HTML event methods</li>
                            <li>Effects and animations</li>
                            <li>AJAX</li>
                            <li>Utilities</li>
                        </ul>
                    </li>
                    <li>
                        Allows you to do the same functions as JS but in fewer
                        lines of code.
                    </li>
                    <li>
                        Not as necessary anymore, since the latest updates in
                        JS.
                    </li>
                    <li>
                        Basic syntax is: <b>$(selector).action()</b>
                        <ul>
                            <li>A $ sign to define/access jQuery</li>
                            <li>
                                A (<i>selector</i>) to "query (or find)" HTML
                                elements
                            </li>
                            <li>
                                A jQuery <i>action</i>() to be performed on the
                                element(s)
                            </li>
                        </ul>
                    </li>
                </ul>
                <b>React</b>
                <ul>
                    <li>
                        A JavaScript (JS) library for building user interfaces.
                    </li>
                    <li>Used to build single-page applications (SPA)</li>
                    <li>Developed at Facebook in 2011.</li>
                    <li>
                        Uses components. Independent, isolated, and reusable
                        components.
                    </li>
                    <li>
                        Components are implemented by a JS Class, a State, and a
                        Render method.
                        <ul>
                            <li>
                                <b>Class:</b> The name of the component.
                            </li>
                            <li>
                                <b>State:</b> the state we want to display when
                                the component is rendered.
                            </li>
                            <li>
                                <b>Render:</b> responsible for what the UI
                                should look like. Output is a React Element.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>React Element:</b> a plain JS object that maps the
                        DOM Element.
                    </li>
                    <li>
                        React keeps a lightweight representation of the DOM - a
                        virtual DOM in memory
                    </li>
                    <li>
                        When changing components, React compares this element to
                        previous versions and updates the real DOM
                    </li>
                </ul>
            </Essay>
            <Essay question="Q4: What is the difference between a Front-End and Back-End Developer?">
                <b>Front-End Developer</b>
                <ul>
                    <li>Client-side</li>
                    <li>Static website</li>
                    <li>
                        What you can see and interact with on a website
                        <ul>
                            <li>Layout</li>
                            <li>Font</li>
                            <li>Colors</li>
                            <li>Menu</li>
                            <li>Forms</li>
                        </ul>
                    </li>
                    <li>Coding languages: HTML, CSS, JavaScript</li>
                    <li>
                        Responsibilities:
                        <ul>
                            <li>Implementing layouts</li>
                            <li>
                                Building interactive and navigational elements
                            </li>
                            <li>Optimal display across devices/responsive</li>
                            <li>Usability tests</li>
                            <li>Fixing bugs</li>
                            <li>Maintaining software workflow management</li>
                        </ul>
                    </li>
                </ul>
                <b>Back-End Developer</b>
                <ul>
                    <li>Server-side</li>
                    <li>Dynamic website</li>
                    <li>
                        Storing and organzing data
                        <ul>
                            <li>Communicates with front-end</li>
                        </ul>
                    </li>
                    <li>
                        Tends to work in the abstract. Many elements are not
                        seen.{" "}
                    </li>
                    <li>
                        Coding languages: Ruby, PHP, Java, Python - JavaScript
                        (Node.js)
                    </li>
                    <li>
                        Responsibilities:
                        <ul>
                            <li>Maintaining functionality</li>
                            <li>
                                Ensure communication between the server,
                                application, and database
                            </li>
                            <li>
                                Creating, integrating, and managing the database
                            </li>
                            <li>Building server-side functions</li>
                            <li>
                                Developing and deploying content management
                                systems
                            </li>
                            <li>Building and integrating APIs</li>
                        </ul>
                    </li>
                </ul>
            </Essay>
            <Essay question="Q5: What is the difference between Absolute, Root and Document Relative linking?">
                <b>Absolute</b>
                <ul>
                    <li>
                        Best used for external links
                        <ul>
                            <li>Resources on other sites</li>
                            <li>Including style sheets</li>
                        </ul>
                    </li>
                    <li>
                        Includes the website's address
                        <ul>
                            <li>Global address of the resource</li>
                            <li>
                                Includes protocol (https) and host (google.com)
                            </li>
                        </ul>
                    </li>
                </ul>
                <b>Relative</b>
                <ul>
                    <li>Relative to the current directory you are in</li>
                    <li>
                        Path relative URL
                        <ul>
                            <li>Can be easily broken</li>
                        </ul>
                        <li>Root relative URL</li>
                        <ul>
                            <li>Always relative to the root of the site</li>
                            <li>Domains can change</li>
                        </ul>
                        <li>Protocol relative URL</li>
                        <li>
                            Document relative
                            <ul>
                                <li>Relative to the document you are on</li>
                                <li>
                                    More freedom when moving folders. All links
                                    within the folder stay the same
                                </li>
                            </ul>
                        </li>
                    </li>
                </ul>
            </Essay>
            <Essay question="Q6: What is the difference between jpg, gif, png and svg images?">
                <b>JPG (JPEG)</b>
                <ul>
                    <li>Joint Photographic Experts Group</li>
                    <li>High compatibility, widely used</li>
                    <li>
                        Lossy compression = Small files
                        <ul>
                            <li>Some image data gets discarded</li>
                        </ul>
                    </li>
                    <li>Great with photos</li>
                    <li>Quick loading times</li>
                    <li>Full-color spectrum</li>
                    <li>No layers, does not support transparency</li>
                </ul>
                <b>GIF</b>
                <ul>
                    <li>Graphics Interchange Format</li>
                    <li>Lossless compression</li>
                    <li>Supports animation</li>
                    <li>Limited to 256 colors</li>
                </ul>
                <b>PNG</b>
                <ul>
                    <li>Portable Network Graphics</li>
                    <li>Larger files</li>
                    <li>Better image quality than JPG</li>
                    <li>Supports transparency</li>
                    <li>No animations</li>
                </ul>
                <b>SVG</b>
                <ul>
                    <li>Scalable Vector Graphics</li>
                    <li>Created in text editors</li>
                    <li>Can be rendered to any size w/o loss in quality</li>
                    <li>Very sharp images, when small</li>
                    <li>Great for logos</li>
                </ul>
            </Essay>
            <Essay question="Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.">
                <p>
                    <b>Product Owner</b>
                </p>
                <p>
                    Product owners manage the product roadmap and prioritize the
                    backlog. They also define the product vision and manage
                    stakeholders. They have the authority to make key decisions
                    and in particular, are responsible for making sure the team
                    is working on the right items. It is helpful for the product
                    owner to be able to communicate effectively with
                    stakeholders.
                </p>
                <p>
                    <b>Product Manager</b>
                </p>
                <p>
                    A product manager is the person who identifies the customer
                    need and the larger business objectives that a product or
                    feature will fulfill, articulates what success looks like
                    for a product, and rallies a team to turn that vision into a
                    reality
                </p>
                <p>
                    <b>Business Analyst</b>
                </p>
                <p>
                    They are responsible for defining the problems that business
                    faces by conducting in-depth analysis and investigation of
                    the market and gathering valuable technical and
                    non-technical information. Once they fully understand the
                    challenges, they outline the requirements for a solution and
                    make sure that delivered proposals meet business
                    requirements.
                </p>
                <p>
                    <b>Scrum Master</b>{" "}
                </p>
                <p>
                    Scrum masters facilitate scrums – the Agile framework that
                    focuses on time-boxed iterations called sprints. Scrum
                    masters act as coaches to the rest of the team. They
                    facilitate daily stand-up meetings and oversee sprint
                    planning meetings where they help to keep the team focused
                    and prevent scope creep. They manage sprint reviews and
                    gather feedback, and they also remove roadblocks that could
                    hamper the team’s productivity.
                </p>
                <p>
                    <b>UX Designer</b>
                </p>
                <p>
                    The UX designer’s role is to make products, services, and
                    technology usable, enjoyable, and accessible for humans. UX
                    designers tend to work as part of a wider product team and
                    often find themselves bridging the gap between the user, the
                    development team, and key business stakeholders.
                </p>
                <p>
                    <b>Developer/Engineer</b>
                </p>
                <p>
                    The branch of computer science that deals with the design,
                    development, testing, and maintenance of software
                    applications. Software engineers apply engineering
                    principles and knowledge of programming languages to build
                    software solutions for end users. Developers will build your
                    product, and they are responsible for programming, testing,
                    and debugging the product.
                </p>
                <p>
                    <b>QA/SDET</b>
                </p>
                <p>
                    Responsible for inspecting, monitoring, and proposing areas
                    to correct or improve within a product or solution. By doing
                    so, the development team can follow the suggestions of a QA
                    Specialist and meet established quality standards with each
                    increment.
                </p>
                <p>
                    <b>DevOps</b>
                </p>
                <p>
                    DevOps is a set of practices, tools, and a cultural
                    philosophy that automate and integrate the processes between
                    software development and IT teams. It emphasizes team
                    empowerment, cross-team communication and collaboration, and
                    technology automation.
                </p>
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
