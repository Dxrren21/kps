/*
  HOW TO ADD A NEW EVENT
  1. Save your event poster/graphic (the one you post to Facebook) into
     src/assets/events2026/ - e.g. src/assets/events2026/midnight-masquerade.jpg
  2. Import it at the top of this file, e.g.:
       import midnightMasquerade from "../assets/events2026/midnight-masquerade.jpg"
  3. Add a new object to the array below (newest first within its category).
     `category` controls which row it appears in (e.g. "Social Events",
     "Dance Workshops") - a new category name automatically creates a new
     row, no other setup needed.

  That's it - the carousel on the homepage picks it up automatically.
*/

import isacChampionship from "../assets/events2026/ISAC_Championship.png"
import weOnFire from "../assets/events2026/WeOnFire.jpeg"
import ateezBad from "../assets/events2026/ateez_bad.png"

export const events = [
    {
        category: "Social Events",
        date: "JUL 28, 2026",
        title: "ISAC Championship.",
        image: isacChampionship,
        facebookLink: "https://www.facebook.com/share/18wT62Rcin/",
    },
    {
        category: "Dance Workshops",
        date: "JUL 31, 2026",
        title: "Term 2 Week 9: &TEAM - We on Fire",
        image: weOnFire,
        facebookLink: "https://campus.hellorubric.com/?eid=70845",
    },
        {
        category: "Dance Workshops",
        date: "JUL 24, 2026",
        title: "Term 2 Week 8: ATEEZ - Bad",
        image: ateezBad,
        facebookLink: "https://fb.me/e/4C9siMR5q",
    },
]
