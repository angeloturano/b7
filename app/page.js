"use client";

import { useEffect, useState } from "react";

const crew = [
  "💰 Rex",
  "🕴 Coop",
  "💵 Doug",
  "🏦 Tim",
  "🥇 Buck",
  "🤖 Janis",
  "🌎 Borsk ",
  "🛠️ Big Pete",
  "💍 Pezi",
  "⌚ Tommy",
  "🩺 Robloo",
  "🩺 Vic",
  "🎬 AL",
  "📊 Evin",
  "🏒 Mel",
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
      [
        "Vehicles",
        "4 Cars",
        "1. Rex, Vic, Mel, Buck | 2. Pete, Borsk, Doug, Coop | 3. Tommy, Evan, Tim, Pezi | 4. Zmou, Rob, Janis",
      ],
      ["8:30 AM", "Convoy down", "~5.5 hours on the road."],
      [
        "3:00 PM",
        "Check into Airbnb",
        "1824 Sidney Street. Settle In.",
      ],
      ["7:00 PM", "Dinner at Eddie V’s", "Steak and Seafood."],
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
      ["Evening", "rexhexy marathon - DRINK TO DAT"],
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
      ["4:00 PM", "Mass at St. Paul Cathedral", "Mandatory. I want to see 15 mans there for a 45 min mass."],
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

function getTimeRemaining() {
  const tripStart = new Date("2026-08-06T08:00:00-04:00").getTime();
  const difference = tripStart - Date.now();

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  return {
    days: String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0"),

    hours: String(
      Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      )
    ).padStart(2, "0"),

    minutes: String(
      Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      )
    ).padStart(2, "0"),

    seconds: String(
      Math.floor((difference % (1000 * 60)) / 1000)
    ).padStart(2, "0"),
  };
}

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(getTimeRemaining());
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
            A weekend with my best friends in Steel City.
          </p>

          <div className="countdownWrap">
            <p className="countdownTitle">The weekend begins in</p>

            <div className="countdown">
              <div className="countdownItem">
                <strong>{countdown.days}</strong>
                <span>Days</span>
              </div>

              <div className="countdownItem">
                <strong>{countdown.hours}</strong>
                <span>Hours</span>
              </div>

              <div className="countdownItem">
                <strong>{countdown.minutes}</strong>
                <span>Minutes</span>
              </div>

              <div className="countdownItem">
                <strong>{countdown.seconds}</strong>
                <span>Seconds</span>
              </div>
            </div>
          </div>

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
