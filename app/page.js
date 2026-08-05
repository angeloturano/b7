"use client";

import { useEffect } from "react";

const crew = [
  "💰 Rex Diamond — Ponzi Artist",
  "🕴 Larry King — Puppetmaster",
  "💵 Saul Wosserman — Tax Collector",
  "🏦 Tim Shapiro — Swarthy Banker",
  "🥇 Cameron Buck — Precious Metals",
  "🤖 Jonah Jonah — AI Wizard",
  "🌎 Isaac Wiseman — Global Charity ",
  "🛠️ Ezekiel Katz — Offshore Drilling Rigs",
  "💍 Jebidiah Ackerman — Married into it",
  "⌚ Nathaniel Schwartz — Watch Collector",
  "🩺 Seth Rosenberg — Gynecologist",
  "🩺 Dr. Blaga — Chief Medical Officer",
  "🎬 Zev Finkle — OF Talent Manager",
  "📊 Evin Levitt — Accountant",
  "🏒 Aram Azarian — Hockey Agent",
];

const days = [
  {
    number: "01",
    day: "Thursday",
    date: "August 6",
    tag: "Arrival",
    title: "Convoy to Pittsburgh",
    events: [
      [
        "8:00 AM",
        "Meet at Sourdough Garden",
        "Everyone will receive a breakfast sandwich, coffee, and cookie. Zmou will get a pack of beef jerky.",
      ],
      ["8:30 AM", "Convoy down", "~5.5 hours on the road."],
      [
        "3:00 PM",
        "Check into Airbnb",
        "1824 Sidney Street. Settle In.",
      ],
      ["7:00 PM", "Dinner at Eddie V’s", "Steak and Seafood"],
      [
        "Night",
        "South Side bars",
        "Explore the South Side, Dee’s Cafe, Jekyll & Hyde’s karaoke, and scout the best spots for the weekend.",
      ],
    ],
  },
  {
    number: "02",
    day: "Friday",
    date: "August 7",
    tag: "Adventure",
    title: "Whitewater Day",
    events: [
      [
        "8:00 AM",
        "Wake up",
        "Departure by 8:15 AM for 103 Garrett Street, Ohiopyle.",
      ],
      [
        "10:00 AM",
        "Rafting begins",
        "A day on the river.",
      ],
      [
        "Drive Back",
        "Pizza Lupo",
        "Have a world-class pie on the way back.",
      ],
      [
        "5:00 PM",
        "Back at the Airbnb",
        "Rest, shower, and reset.",
      ],
      [
        "Evening",
        "rexhexy marathon - DRINK TO DAT",
      ],
      ["Night", "BET RIVERS CASINO", "Someone is due to win BIG."],
    ],
  },
  {
    number: "03",
    day: "Saturday",
    date: "August 8",
    tag: "Game Day",
    title: "Ball Game",
    events: [
      [
        "Morning to Afternoon",
        "Rest and reset",
        "Recover, eat, hydrate with purple Powerade, free day, mossmanz.",
      ],
      ["4:00 PM", "Mass at St. Paul Cathedral","mandatory."],
      [
        "6:40 PM",
        "Pirates game at PNC Park",
        "Ranked the #1 ballpark in America.",
      ],
      ["Night", "North Shore night", "Booth and bottles."],
    ],
  },
  {
    number: "04",
    day: "Sunday",
    date: "August 9",
    tag: "Home",
    title: "Back to Reality",
    events: [
      [
        "Morning",
        "Drive home",
        "Convoy back to Toronto with some good stories.",
      ],
    ],
  },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });

      observer.disconnect();
    };
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
          <h1>
            Pittsburgh
            <span>Bachelor Trip.</span>
          </h1>

          <p className="heroCopy">
            A wonderful weekend with my best friends in Steel City.
          </p>

          <a href="#plan" className="button">
            Begin the Weekend ↓
          </a>
        </div>

        <div className="heroFooter">
          <div className="pack">
            <small>ESSENTIALS</small>

            <ul>
              <li>🛂 Passport</li>
              <li>👔 Steakhouse Outfit</li>
              <li>🩳 Rafting Swimsuit</li>
              <li>🧥 Rain Jacket</li>
              <li>🍾 Club Clothes</li>
            </ul>
          </div>

          <div className="crew">
            <small>CREW</small>

            <ul>
              {crew.map((person) => (
                <li key={person}>{person}</li>
              ))}
            </ul>
          </div>

          <div className="homeBase">
            <small>HOME BASE</small>
            <strong>1824 Sidney Street</strong>
            <span>Pittsburgh, Pennsylvania</span>
          </div>
        </div>
      </section>

      <section id="plan" className="plan">
        <div className="cards">
          {days.map((day) => (
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
                {day.events.map(([time, title, text], eventIndex) => (
                  <div
                    className="event"
                    key={`${day.number}-${eventIndex}-${time}-${title}`}
                  >
                    <time>{time}</time>

                    <div>
                      <h4>{title}</h4>
                      {text && <p>{text}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>PITTSBURGH BACHELOR TRIP</span>
        <span>AUGUST 6–9, 2026</span>
      </footer>
    </main>
  );
}
