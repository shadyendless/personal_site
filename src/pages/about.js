import React from 'react';
import AboutLeft from '../components/AboutLeft';

const AboutPage = ({ data }) => {
    return (
        <div className="aboutpage">
            <AboutLeft data={data} />
            <h1 className="about-header" id="overview">
                Overview
            </h1>
            <div className="about-text">
                <p className="about-text__para">
                    I'm a <span id="my-age" /> year old developer currently living in Southern Oregon who loves to learn new things every day. I have
                    been programming for over 10 years and have experience with the entire web stack, from mockups to server deployments. My interest
                    in design started a couple of years ago when I decided that I wanted to broaden my skillset outside of programming. You can write
                    the most beautiful, efficient code imaginable but if it's not presented in a clean, straight-forward way then your users aren't
                    going to care—this is yet another problem that I want to be able to solve.
                </p>
            </div>
            <h1 className="about-header" id="beginnings">
                Beginnings
            </h1>
            <div className="about-text">
                <p className="about-text__para">
                    I've had a computer for as long as I can remember. My parents were both into technology, so as soon as it was possible to have a
                    PC in the house they did. I remember watching my dad tweak with the computer (either upgrading the hardware or just general use)
                    and playing with things like Kid Pix to try and create fun things. Kid Pix was quite limited back then, but with a kid's
                    imagination you really could make whatever you wanted. While Kid Pix and Mavis Beacon were enjoyable, and kept me distracted for a
                    long time, eventually I lost interest. It wasn't until I was introduced to video games that I really got excited about what worlds
                    computers would let people escape to.
                </p>
                <p className="about-text__para">
                    I had been playing video games for awhile on the NES and SNES (mostly on the SNES), but it wasn't until I experienced{' '}
                    <em>Age of Empires</em> and <em>Diablo</em> that my mind was truly blown. The, what seemed like, infinite possibilities of{' '}
                    <em>Age of Empires</em> and the ever-expanding world of <em>Diablo</em> presented something that I never experienced before. Ever
                    since then, games have been a mainstay of my life—the way I stay in touch with old friends and how I make new friends. At this
                    point, you may be wondering why I'm a web developer and not a game developer. Well, the interest in one seamlessly led into the
                    other.
                </p>
            </div>
            <h1 className="about-header" id="webandcpp">
                Web &amp; C++
            </h1>
            <div className="about-text">
                <p className="about-text__para">
                    My parents and I have always played MMORPGs together, starting with <em>Ultima Online</em> and playing everything through the{' '}
                    <em>Final Fantasy XIV</em>. In 2002, while looking for our next world to immerse ourselves in, we came across{' '}
                    <em>Final Fantasy XI</em>. There's not a concise way to explain the impact that <em>Final Fantasy XI</em> had on my life, but if
                    you'd like to talk more about it then I'd be more than willing. While playing <em>FFXI</em> we formed a linkshell (you may be more
                    familiar with the term guild or clan) and decided that we needed a website (this was the early 2000s, everyone had websites then).
                    Nobody knew how to make anything and so I decided to step up and try. Enter Yahoo! GeoCities.
                </p>
                <p className="about-text__para">
                    There's not a lot to say about Yahoo! GeoCities. It did exactly what it wanted to, and allowed me to create an awesome website for
                    my group of friends. While GeoCities wasn't real development, it was enough to pique my interest in what more could be done. At
                    this point my early interest in games started to crawl back (not playing them, but making them) and I thought, "Making a website
                    is super easy, making a game should be just as easy, right?"
                </p>
                <p className="about-text__para">
                    Wrong. After researching what I would need to know to make games, I settled on learning C++. Understanding that I wouldn't be
                    getting into games right away, I was content with just working through the basics. C++ is where I learned the majority of my
                    basic-understanding of how programming works. I learned about variables, control structures, classes, pointers, memory management,
                    everything that most other languages build upon. It was at this point that I tried to get my friends to learn C++ with me, I made
                    a text adventure and hoped that they would think it was so cool they couldn't refuse. As you can imagine, none of them cared—C++
                    isn't pretty. You know what is pretty, though? Websites.
                </p>
                <p className="about-text__para">
                    Not wanting everything I had taught myself to go to waste, I began looking for ways to use my C++ knowledge to make websites. I
                    couldn't find anything that was helpful, but I did come across C# and something called ASP.NET. C# looked familiar enough to me
                    after learning C++ that I quickly picked it up and decided that it was going to be what I focused on. I went by TheASPKid for
                    awhile but decided to drop it when I started college.
                </p>
            </div>
            <h1 className="about-header" id="college">
                College
            </h1>
            <div className="about-text">
                <p className="about-text__para">
                    I went to the Oregon Institute of Technology after touring the campus and realizing that it was the best place for me. I wanted to
                    be taught in a hands-on environment so that I would be able to immediately apply anything I had learned in class to the
                    real-world, which they delivered in spades. Since I had already taught myself C++ (the language that OIT teaches), I decided that
                    I would take this opportunity to dual-major in hardware engineering to learn more about what happens under the hood.
                </p>
                <p className="about-text__para">
                    During my time at OIT, I learned about how operating systems worked, the importance of design patterns, how CPUs actually process
                    all of the data we throw at them, and how to structure applications so that they maintain their stability and ease of use. I also
                    spent a large portion of time assisting the professors in their classes and labs as well as teaching C++ for a term the year that
                    I graduated.
                </p>
            </div>
            <h1 className="about-header" id="today">
                Today
            </h1>
            <div className="about-text">
                <p className="about-text__para">
                    If you've read everything up to here then you'll notice that I haven't had any formal training in web development or design. This
                    almost entirely underscores who I am and what I do—I am an autodidact trying to better myself so that I can help better those
                    around me. I belive the ultimate reason that the web ended up grabbing my attention was because of the size of the audience and
                    the impact of the platform.
                </p>
                <p className="about-text__para">
                    I've mostly worked alone or in a small team (2-3 people) up to this point, and have worked on understanding as much as I can about
                    the entire development process, from the design of a page to the servers and databases that will bring it to life, and up through
                    the code to make it visible to the world.
                </p>
                <p className="about-text__para">
                    Currently I am looking to help people bring their ideas to life, either as a freelance developer or as part of a larger team, as
                    well as passing along the knowledge that I have acquired over the past decade of stalking books, the Internet, and school. If you
                    have an idea you'd like to see realized or if I sound like someone you would like to work with, please get in touch and I look
                    forward to talking with you!
                </p>
            </div>
        </div>
    );
};

export const query = graphql`
    query AboutQuery {
        allMarkdownRemark(filter: { frontmatter: { section: { eq: "About" } } }, sort: { fields: [frontmatter___order], order: ASC }) {
            edges {
                node {
                    frontmatter {
                        id
                        title
                        order
                    }
                    html
                }
            }
        }
    }
`;

export default AboutPage;
