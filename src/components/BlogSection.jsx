 import { useState } from "react";
import { ChevronDown } from "lucide-react";

// --- DATA --- 
// This is where you'll fill in your real content later.
// Each month has a "text" (your writing) and 3 image URLs.

const blogData = {
  2025: {
    text: `2025, the year that changed everything. Starting spring 2025, I was projected to graduate in summer 2025, I never felt better, finally so close in reaching what I worked SO long for. That spring, an unforeseen tragic turn of events happened, it was worse than a nightmare. I had to drop that spring semester, suffered financially and personally, and the world I had in my hands, slipped away. By the end of April, I had no reason to continue. Graduating college seemed near impossible, I was constantly told its too late and “theres no point” of continuing chasing my dreams, and my mental health, was at an all time low. The thing is, I don’t know how to quit, I spent my whole life fighting for what I want. Through the peak of this storm, like some buzzer beater winning shot, I managed to secure a summer internship in the dying minutes right before summer started. I never stopped working hard, even the days where it felt like I was never going to even smile again. That summer, I worked 2 jobs, came up with a new game plan to graduate, and started the rebuild. With nothing but hope, right when I started to see a shed of light, like god was not done giving me character development, the most influential people in my life, the ones who loved, supported me the most, and were life role models to me, they all…left. Again, with nothing but hope, and no reason to even continue, there was one day in august, I was sat in my bed for hours, still…. alone, silence. Like being in the eye of a storm. I remember thinking, “well, this is it, its just you.. what are you going to do?”. From that day on, like a light switch, I marched out that storm and started a new life. My parents always showed me that with love, faith, hard work and dedication, anything was possible. I like to call this, the comeback season. I didn’t know how, but I was going to make it work, and come back as not just the old me, but rebirthed. I went with the game plan on finishing school, moved with purpose, stayed true to myself, always genuine, and woke up every day more dedicated than the day before. Though it was never easy, I started to attract great things in my life again. Not only was the storm clearing up, but I came out with strength and life experiences that will get me through ANY storm that will come my way. On December 31, 2025, I looked back at the journey all of 2025 became. Truth be told I never felt happier. At 11:59pm that day, I remember beginning shedding tears as I told myself…. “I’m proud of you, next year, is our year”
           `,
    images: [
      "/projects/2025_1.png",
      "/projects/2025_2.jpg",
      "/projects/2025_3.png",
    ],
  },
  2026: {
    January: {
      text: `I told myself that this year I was going to come out the shadows and show the world who I am, where I came from, and what I have to offer. Everything that happened in 2025 didn’t happen for nothing. I started the year with 2 part time internships for this semester and celebrating my birthday with my favs <3 I started a new journey, where I wanted to give back to my community, and make a difference in this world. I didn’t know where this journey would take me but I knew I had to start somewhere, and had to be willing to learn as much as I can. I started by volunteering for my state rep, Dr. Anna V. Eskamani. She had always been a very influential, strong, and genuine person in my life as she was someone I followed alot online. That same week, she was coming to UCF to speak at the NAACP club. I took my chance and went.. and had the honor of meeting her. I spoke with her and shared a part of my story as a dreamer. Cant lie to you.. I cried speaking to her. Anna went out of her way to not only give me words of encouragement, but connected with me, and connected me with others who she thought would be able to help me with this new journey I was on. Boy did she get it so right. She connected me with FLIC, who invited to be a guest speaker at a press conference AT THE FLORIDA STATE CAPITOL and share a part of my story as a dreamer student. It was not just the first time I did any public speaking of that degree, but first time EVER doing anything like this. I went to the capitol, unlocked stage freight I didn’t even know was possible, and delivered my speech. Anna you are forever a legend in my life now. That trip to the capitol, getting to come out the shadows and share my story to the world for the first time, it was hard, but I did it, and it connected me with SO SO many people who because of, have gotten me in involved in many orgnaziations and coalitions that give back to the people and believe in what I want to fight for as well, and many of the people I met that day are becoming good friends of mine now. This, this is only just the beginning of this new journey (:`,
      images: [
        "/projects/2026_Jan_1.jpeg",
        "/projects/2026_Jan_2.jpeg",
        "/projects/2026_Jan_3.jpeg",
      ],
    },
    February: {
      text: `10/10 month! Since new years, I have lost 10lb of fat while gaining muscle and running minimum 2 miles every day, never missing a day. I made a book club with friends and so far it’s been very fun! We also all went to Universal Knights together! I’ve built on January and have gotten involved with countless things in my community and meeting so many wonderful people. Shoutout my favorites People Power for Florida and Florida Student Power (FLSP). In fact, I got to go to Tallahassee again for 3 days with FLSP this month and it was a valuable experience and I learned a lot. The most significant one this month was that The DreamUS reached out to me and asked me to speak and share my story as a dreamer in a private press conference alongside some of the greatest leaders of education across this country!! Now for the best news.. after dedicating myself and working so hard everyday for so long….this summer….I… Alexander no middle name Vallejos….have secured an internship with Travel + Leisure Co!!! They have been amazing throughout the hiring process and I am VERY excited to be a part of the team! I am  blessed and thankful for everything in my life. It is so important to me to have a strong and positive mindset, always working on myself, and showing up. Every. Single. Day. `,
      images: [
        "/projects/2026_Feb_2.jpeg",
        "/projects/2026_Feb_1.jpeg",
        "/projects/2026_Feb_3.jpeg",
        "/projects/2026_Feb_4.jpeg",
        "/projects/2026_Feb_5.jpeg",
        "/projects/2026_Feb_6.jpeg",
      ],
    },
    March: {
      text: `currently living.. status: fate of ophelia`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
    April: {
      text: `April take your time`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
    May: {
      text: ` cant wait for cinco de mayo`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
    June: {
      text: `if i dont have a summer body and a 67 pack ima be mad`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
    July: {
      text: `ima prob have lost my abs by this point`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
    August: {
      text: `its basically christmas`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
    September: {
      text: `whats the point of september`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
    October: {
      text: `halloween horror nights no other answer`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
    November: {
      text: `semester is almost over and oh friendsgiving!!`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
    December: {
      text: `the most wonderful time of the year!`,
      images: [
        "/projects/temp.jpg",
        "/projects/temp.jpg",
        "/projects/temp.jpg",
      ],
    },
  },
};

// --- REUSABLE MONTH CONTENT ---
// This renders the text + 3 images inside any opened dropdown.
// We reuse this for both 2025 and each month in 2026.

const MonthContent = ({ text, images }) => {
  return (
    <div className="mt-4 space-y-4">
      {/* The text block */}
      <p className="text-foreground/80 whitespace-pre-line leading-relaxed">
        {text}
      </p>

      {/* The 3 images side by side */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Blog image ${i + 1}`}
            className="rounded-lg w-full object-cover aspect-square object-top"
          />
        ))}
      </div>
    </div>
  );
};

// --- MONTH ACCORDION (used inside the 2026 dropdown) ---
// Each one of these is a single month that can open/close.

const MonthAccordion = ({ monthName, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      {/* Clickable month header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-5 py-3 bg-card hover:bg-white/5 transition-colors duration-200"
      >
        <span className="font-medium text-foreground">{monthName}</span>
        {/* Arrow rotates when open */}
        <ChevronDown
          size={18}
          className={`text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content that shows/hides */}
      {isOpen && (
        <div className="px-5 pb-5 bg-card/50">
          <MonthContent text={data.text} images={data.images} />
        </div>
      )}
    </div>
  );
};

// --- MAIN BLOG SECTION ---

export const BlogSection = () => {
  const [open2025, setOpen2025] = useState(false);
  const [open2026, setOpen2026] = useState(false);

  const months = Object.keys(blogData[2026]); // Gets ["January", "February", ...]

  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl">

        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-4 text-center">
          My Fabulous <span className="text-primary">Blog</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12">
          Come live life with me :D
        </p>

        <div className="space-y-4">

          {/* ---- 2025 DROPDOWN ---- */}
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen2025((prev) => !prev)}
              className="w-full flex items-center justify-between px-6 py-4 bg-card hover:bg-white/5 transition-colors duration-200"
            >
              <span className="text-xl font-semibold text-foreground">2025</span>
              <ChevronDown
                size={20}
                className={`text-primary transition-transform duration-300 ${
                  open2025 ? "rotate-180" : ""
                }`}
              />
            </button>

            {open2025 && (
              <div className="px-6 pb-6 bg-card/50">
                <MonthContent
                  text={blogData[2025].text}
                  images={blogData[2025].images}
                />
              </div>
            )}
          </div>

          {/* ---- 2026 DROPDOWN ---- */}
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen2026((prev) => !prev)}
              className="w-full flex items-center justify-between px-6 py-4 bg-card hover:bg-white/5 transition-colors duration-200"
            >
              <span className="text-xl font-semibold text-foreground">2026</span>
              <ChevronDown
                size={20}
                className={`text-primary transition-transform duration-300 ${
                  open2026 ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* When 2026 is open, show all 12 month accordions */}
            {open2026 && (
              <div className="px-6 pb-6 bg-card/50 space-y-3 mt-2">
                {months.map((month) => (
                  <MonthAccordion
                    key={month}
                    monthName={month}
                    data={blogData[2026][month]}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};