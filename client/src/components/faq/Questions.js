import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

export default function Questions() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Container>
        <h2>
          <span>LOOKING FOR ANSWERS ABOUT CAMPTRACK?</span>
          <br></br>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <br></br>
        <p>
          For a lot of campers, CampTrack seems a bit misunderstood at first. So, we went through a list of common questions we receive about our service. If
          you’re unsure about something, you’ll probably find the answer below.
          If not, please feel free to start a chat discussion, and we’ll provide
          a response as quickly as we can. Thanks for your interest in
          CampTrack!
        </p>
        <div className="box-info">
          <Paper className="paper">
            <h3>ABOUT</h3>
            <Box className={scrolled ? "scrolled" : ""}>
              <Link href="#what's-all" underline="none">
                What’s all this campground tracking about?
              </Link>

              <br></br>

              <Link href="#how-does" underline="none">
                How does CAMPTRACK work?
              </Link>
              <br></br>

              <Link href="#can-you-help" underline="none">
                Can you help me book a spot when parks open up for reservations?
              </Link>
              <br></br>

              <Link href="#do-you-book" underline="none">
                Do you book a campsite for members?
              </Link>
              <br></br>

              <Link href="#who-made-this" underline="none">
                Who is behind this?
              </Link>
              <br></br>

              <Link href="#does-really" underline="none">
               Is CAMPTRACK really legit?
              </Link>
            </Box>
          </Paper>

          <Paper className="paper">
            <h3>PRICING</h3>
            <Box className={scrolled ? "scrolled" : ""}>
              <Link href="#is-free" underline="none">
                Is CAMPTRACK free?
              </Link>
              <br></br>

              <Link href="#how-much" underline="none">
                How much does it cost?
              </Link>
              <br></br>

              <Link href="#what-are" underline="none">
                What are the benefits of a CAMPTRACK membership?
              </Link>
              <br></br>

              <Link href="#can-cancel" underline="none">
                Can I cancel my membership at the end of the summer?
              </Link>
              <br></br>

              <Link href="#do-refund" underline="none">
                Do you refund me if I don’t receive any alerts?
              </Link>
              <br></br>

              <Link href="#is-worth" underline="none">
                Is CAMPTRACK worth it?
              </Link>
              <br></br>
            </Box>
          </Paper>

          <Paper className="paper">
            <h3>FEATURES</h3>
            <Box className={scrolled ? "scrolled" : ""}>
              <Link href="#benefits" underline="none">
                What are the benefits of CAMPTRACK?
              </Link>
              <br></br>

              <Link href="#can-scan" underline="none">
                Can I scan for a specific campsite?
              </Link>
              <br></br>

              <Link href="#wilderness" underline="none">
                Do you monitor wilderness permits?
              </Link>
              <br></br>

              <Link href="#can-send" underline="none">
                Can you send notifications about locked sites that are set to
                release?
              </Link>
              <br></br>

              <Link href="#can-filter" underline="none">
                Can I filter searches (ADA, hookups, etc.)?
              </Link>
              <br></br>

              <Link href="#unlocked" underline="none">
                I was there the exact moment a campsite was set to unlock, but
                it isn’t available. What gives?
              </Link>
            </Box>
          </Paper>
        </div>
      </Container>

      <div className="about">
        <Container>
          <h3>ABOUT</h3>
          <Box sx={{ padding: 4,  display: "flex" }}>
          <div className="about-info">
              <h4 id="what's-all">WHAT’S ALL THIS CAMPTRACK TRACKING ABOUT?</h4>
              <br></br>
              <p>
                Me and my husband hated how campsites were booked months in advance. We
                figured that if we could track cancellations, we could grab a
                spot for us. So, we made CAMPTRACK: a campsite
                availability tracker. Along the way, we realized that others
                might also benefit from it. This led us to share it with other
                campers—who also found success with it!
              </p>
              <br></br>

              <h4 id="how-does">HOW DOES IT WORK?</h4>
              <br></br>
              <p>
                You fill in the form on our homepage, noting your camping
                preferences. You also provide your mobile phone number,
                preferred scan/plan, and payment information. Once complete, we
                scan your selected park for a cancellation. If one comes
                available we send you a text message so you can grab it.
              </p>
              <br></br>
              <h4 id="do-you-book">DO YOU BOOK A CAMPSITE FOR ME?</h4>
              <br></br>
              <p>
                Nope. That’s not our deal. We just monitor the availability of
                spaces in campgrounds and let you know when there’s a vacancy.
                It’s up to you to research which one is right for you, and make
                the booking via the park’s reservations system.
              </p>
            </div>
            <br></br>
            <div className="about-info">
              <h4 id="does-really">IS CAMPTRACK REALLY LEGIT?</h4>
              <br></br>
              <p>
                Yes—CAMPTRACK absolutely works. It monitors parks for cancelations
                and sends you an alert when an opening matches your criteria.
                That said, it isn’t magic. The app doesn’t create
                availabilities. So, if no one cancels a spot that meets your
                criteria, you won’t receive an alert.
              </p>
              <br></br>
              <p>
                For this reason, we recommend putting the odds in your favor.
                Scan more than one park and try for multiple campgrounds within
                each park. Turn on Flexible Dates. Set a short minimum duration.
                Don’t add too many filters. Also, trying for mid-week openings
                can help.
              </p>
              <br></br>
              <h4 id="can-you-help">
                CAN YOU HELP ME BOOK A SPOT WHEN PARKS OPEN UP FOR RESERVATIONS?
              </h4>
              <br></br>
              <p>
                Unfortunately, no, that’s not what our service is about. In
                fact, CAMPTRACK provides no value to you on opening day. Instead,
                you’ll need to do your research, get up early on opening
                morning, be signed into the park’s site, and act fast. If you’re
                well prepared, you might not even need us at all. However, if
                you aren’t successful, that’s where CAMPTRACK comes in. You can
                use our service to spot campsite reservations that get canceled
                between opening morning and your preferred arrival date.
              </p>
              <br></br>
              <h4 id="who-made-this">WHO IS BEHIND THIS?</h4>
              <br></br>
              <p>My husband proposed this idea and I built this app as personal project being a Web Developer. We’re both active in the outdoors, climbing and
                love camping with our respective families in any given time available. 
              </p>
            </div>
          </Box>
        </Container>
      </div>

      <div className="pricing">
        <Container>
          <h3>PRICING</h3>
          <Box sx={{ padding: 4, margin: 2, display: "flex" }}>
            <div className="about-info">
              <h4 id="is-free">IS CAMPTRACK FREE?</h4>
              <br></br>
              <p>
                Nope. My husband and I have built a number of products over the years.
                We’ve learned that free products typically don’t last as the
                maintenance, support, and costs become onerous. Free products
                tend to fizzle out or (eventually) need to generate revenue.
                Some free products switch to a paid model. Others fill their
                pages with ads. Yet others sell access to your personal data.
              </p>
              <br></br>
              <p>
                We want to be around for the long run to help people like you
                get out camping more. When you pay for CAMPTRACK, you sponsor the
                ongoing development of our product. Your purchase goes to paying
                my wage as well as our technology costs to keep this app running. We look
                upon members like you as our patrons. Without you, it’d be
                impossible for us to do this work.
              </p>
              <br></br>

              <h4 id="is-worth">IS CAMPTRACK WORTH IT?</h4>
              <br></br>
              <p>
                The answer to this question depends on you. If you have spare
                time, you can avoid using CAMPTRACK and instead manually refresh
                parks’ booking pages to check for availabilities. If you don’t
                have the time to bother with that, CAMPTRACK helps you into the
                process. For some, this convenience is valuable. For others,
                it’s less so.
              </p>
              <br></br>
              <h4 id="what-are">
                WHAT ARE THE BENEFITS OF A CAMPTRACK MEMBERSHIP?</h4>
              
              <br></br>
              <p>
                Pay-per-use scans are fine for occasional campers. However,
                memberships offer a lot of added benefits to more regular
                outdoors-people
              </p>
              <br></br>
              <p>
                <b>Most notably, memberships allow you to:</b>
                <br></br>
                1. Run several ongoing scans at a lower overall cost<br></br>
                2. Edit your scans at any time<br></br>
                3. Scan for any date in the next 12 months<br></br>
                4. Filter by camping requirements and vehicle type<br></br>
                5. Scan for specific campsites<br></br>
                6. Get personalized support from a real human and sponsor
                ongoing development
              </p>
            </div>
            <br></br>
            <div className="about-info">
              <h4 id="how-much">HOW MUCH DOES IT COST?</h4>
              <br></br>
              <p>
                We offer two ways to use CAMPTRACK. The first is individual
                pay-per-use scans. These watch for vacancies at a specific park
                for a specific date. These work well if you know exactly when
                and where you're intending to camp. Pay-per-use scans cost $10 –
                $20, depending on how frequently you want us to check
                availability for you.
              </p>
              <br></br>
              <p>
                The second are memberships. These typically run monthly and are
                tailored to those who camp more frequently or are looking to
                maximize their chance of finding a site. A membership allows you
                to scan multiple parks and/or dates simultaneously. With
                memberships, you pay a monthly recurring fee ($10, $20, $30, or
                $50) depending on your needs.
              </p>
              <br></br>
              <h4 id="can-cancel">
                CAN I CANCEL MY MEMBERSHIP AT THE END OF THE SUMMER?
              </h4>
              <br></br>
              <p>
                Yes—you can cancel your monthly membership at any time. That
                said, we don’t refund for the current month (as you’ve used the
                service for part of it). Please do note, though, that this is a
                side-project we can only put so much time into. When you keep
                your membership active, you sponsor us in the ongoing
                development of CAMPTRACK. So, if you don’t cancel, we’re cool with
                that, too. 
              </p>
              <br></br>
              <h4 id="do-refund">
                DO YOU REFUND ME IF I DON’T RECEIVE ANY ALERTS?
              </h4>
              <br></br>
              <p>
                Nope. When you sign up for CAMPTRACK, you’re effectively hiring us
                to search on your behalf. That’s all. We don’t control the
                supply of campsites and can’t force someone to cancel. As such,
                we can’t say whether you’ll get any alerts.
              </p>
              <br></br>
              <p>
                Plus, you set the parameters of your scan. The way you do this
                plays a huge part in what results you’ll see. The more
                reasonable your criteria, the better your odds. We also can’t
                guarantee that you’ll book a campsite from an alert we send.
                Lots of people are looking, and someone might beat you to it.
                That said, those who are patient and persistent often do find
                success—even at super-popular campgrounds.
              </p>
            </div>
          </Box>
        </Container>
      </div>

      <div className="features">
        <Container>
          <h3>FEATURES</h3>
          <Box sx={{ padding: 4, margin: 2, display: "flex" }}>
            <div className="about-info">
              <h4 id="benefits"> WHAT ARE THE BENEFITS OF CAMPTRACK?</h4>
              <br></br>
              <p>
                Here are a handful of reasons why we consider CAMPTRACK
                special—and how these benefits makes a difference for campers
                like you.Camptrack allows you to scan a lot of different parks
              </p>
              <br></br>
              <p>
                There are many campgrounds out there, and we can scan for
                availabilities at many of them (currently 3,200 parks, 7,000
                campgrounds, and hundreds of permits). We have over 300,000
                campsites in our directory from parks in Canada as well as the
                United States, and we’re working to add more.
              </p>
              <br></br>

              <h4 id="can-scan">CAN I SCAN FOR A SPECIFIC CAMPSITE?</h4>
              <br></br>
              <p>
                YAAAS YOU CAN! We just added this feature, and it’s pretty
                handy. Site-specific scanning is useful if you want to know
                exactly which campsites you want to stay at. (Obviously, this
                reduces the number of alerts you can expect to receive.)
              </p>
              <br></br>
              <p>
                Site-specific scanning is available to all CAMPTRACK members on a
                plan. To set one up, create a scan from our homepage as you
                normally would. Select the park and campground. Then, click/tap
                “Specific sites” to choose the campsites you wish to monitor.
              </p>
              <br></br>
              <h4 id="wilderness">DO YOU MONITOR WILDERNESS PERMITS?</h4>
              <br></br>
              <p>
                We currently monitor a number of wilderness permits the United States for cancelations / new availabilities.
                That said, these are tricky because they’re often managed
                differently than campground reservations. As such, we haven’t
                added scanning for availabilities of all wilderness permits, but
                we do scan many hundreds of them.
              </p>
            </div>
            <br></br>
            <div className="about-info">
              <h4 id="can-send">
                CAN YOU SEND NOTIFICATIONS ABOUT LOCKED SITES THAT ARE SET TO
                RELEASE?
              </h4>
              <br></br>
              <p>
                Yes! We can now scan Reserve California and Florida State Parks
                for canceled campsite reservations that are locked. If we spot
                one that matches your requirements, we’ll send you a
                notification noting what time that campsite is set to unlock for
                booking. We’ll also send a heads-up message 30 minutes before
                the site is set to be unlocked.
              </p>
              <br></br>
              <p>
                These notifications won’t give you an advantage over other
                campers. You’ll still need to compete for these campsites.
                However, this feature can save you from needing to refresh the
                booking page all day long.
              </p>
              <br></br>
              <h4 id="can-filter">
                CAN I FILTER SEARCHES (ADA, STATES, ETC.)?
              </h4>
              <br></br>
              <p>
                You sure can! Start by creating your scan and selecting your
                desired park and campgrounds. Once you have, you’ll see the
                option to add filters to your campsite monitoring scan. (Please
                note that the available filters will vary from one park to the
                next, based on how that jurisdiction is set up.)
              </p>
              <br></br>
              <h4 id="unlocked">
                I WAS THERE THE EXACT MOMENT A CAMPSITE WAS SET TO UNLOCK, BUT
                IT ISN’T AVAILABLE. WHAT GIVES?
              </h4>
              <br></br>
              <p>
                Booking systems sometimes change release times for locked
                campsites. We report the most accurate information we can. that
                said, all information provided is subject to change. This
                feature is very new and still being beta tested. We’re doing our
                best to make it as accurate as possible, but it’ll take a while
                to iron out the kinks.
              </p>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}
