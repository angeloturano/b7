"use client";

import { useEffect } from "react";

const days = [
  {
    number: "01",
    day: "Thursday",
    date: "August 6",
    tag: "Arrival",
    title: "Convoy to Pittsburgh",
    events: [
      ["8:00 AM", "Meet at Sourdough Garden", "Breakfast sandwich, coffee, and cookie for everyone. Al will get a pack of beef jerky."],
      ["8:30 AM", "Convoy down", "Approximately 5.5 hours on the road. Target arrival at the Airbnb by 3:00 PM."],
      ["3:00 PM", "Check in", "1824 Sidney Street. Unpack & settle in."],
      ["7:00 PM", "Dinner at Eddie V’s"],
      ["Night", "South Side Bars", "Explore the South Side, Dee's Cafe, Karaoke, Scout the best spots for the weekend, ."]
    ]
  },
  {
    number: "02",
    day: "Friday",
    date: "August 7",
    tag: "Adventure",
    title: "Whitewater day",
    events: [
      ["8:00 AM", "Wake up", "Departure by 8:30 AM for 103 Garrett Street, Ohiopyle."],
      ["10:00 AM", "Rafting begins", "Whitewater rafting and a full day on the river."],
      ["5:00 PM", "Back at the Airbnb", "Rest, shower, and reset."],
      ["Night", "Rivers Casino", "Casino night on the North Shore."]
    ]
  },
  {
    number: "03",
    day: "Saturday",
    date: "August 8",
    tag: "Game Day",
    title: "Baseball + bottles",
    events: [
      ["Daytime", "Rest and reset", "Recover, eat, hydrate, and prepare for the main event."],
      ["4:00 PM", "Mass at St. Paul Cathedral", "A calm moment before the evening gets louder."],
      ["6:40 PM", "Pirates game at PNC Park", "Baseball with one of the best skyline views in the city."],
      ["Night", "North Shore night", "Booth, bottles, and the official bachelor-party send-off."]
    ]
  },
  {
    number: "04",
    day: "Sunday",
    date: "August 9",
    tag: "Recovery",
    title: "The journey home",
    events: [
      ["Morning", "Tough morning", "Water, coffee, breakfast, and a slow inventory of everyone’s belongings."],
      ["After", "Drive home", "Convoy back to Toronto with stories that will improve over time."]
    ]
  }
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="heroImage" />
        <div className="heroShade" />

        <nav>
          <span className="brand">★ PITTSBURGH 2026</span>
          <span>AUGUST 6–9</span>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">BLACK & GOLD WEEKEND</p>
          <h1>
            Pittsburgh
            <span>Bachelor Trip.</span>
          </h1>
          <p className="heroCopy">
            Breakfast sandwiches. Whitewater. Baseball. Bottles.
            One final send-off in the Steel City.
          </p>
          <a href="#plan" className="button">View itinerary ↓</a>
        </div>

        <div className="heroFooter">
          <div>
            <small>HOME BASE</small>
            <strong>1824 Sidney Street</strong>
          </div>
          <div className="mark">04</div>
        </div>
      </section>

      <section id="plan" className="plan">
        <div className="intro reveal">
          <p className="eyebrow">THE PLAN</p>
          <h2>Four days.<br />Zero wasted time.</h2>
        </div>

        <div className="cards">
          {days.map(day => (
            <article className="dayCard reveal" key={day.number}>
              <div className="dayTop">
                <div className="dayMeta">
                  <span className="dayNumber">{day.number}</span>
                  <div>
                    <p>{day.day}</p>
                    <small>{day.date}</small>
                  </div>
                </div>
                <span className="tag">{day.tag}</span>
              </div>

              <h3>{day.title}</h3>

              <div className="events">
                {day.events.map(([time, title, text]) => (
                  <div className="event" key={`${time}-${title}`}>
                    <time>{time}</time>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="closing reveal">
          <p className="eyebrow">THE SEND-OFF</p>
          <h2>
            Good times.<br />
            Great friends.<br />
            <span>Unforgettable memories.</span>
          </h2>
        </section>
      </section>

      <footer>
        <span>BLACK & GOLD WEEKEND</span>
        <span>PITTSBURGH · 2026</span>
      </footer>
    </main>
  );
}
