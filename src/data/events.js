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
import bts2 from "../assets/events2026/bts2.png"
import iconicByMistake from "../assets/events2026/iconicbymistake.jpg"
import itzyNoNo from "../assets/events2026/itzythatsanono.png"
import kozyKorner from "../assets/events2026/kozykorner.png"
import H2HRude from "../assets/events2026/rudeh2h.png"
import girlsetTweak from "../assets/events2026/tweak.png"
import zb1Top5 from "../assets/events2026/zb1top5.png"
import cortisRedRed from "../assets/events2026/cortisredred.jpg"
import skyfallCruise from "../assets/events2026/skyfallcruise.jpg"

export const events = [
    {
        category: "Social Events",
        date: "JUL 28, 2026",
        title: "ISAC Championship.",
        image: isacChampionship,
        facebookLink: "https://www.facebook.com/share/18wT62Rcin/",
    },
    {
        category: "Social Events",
        date: "JUL 16, 2026",
        title: "Skyfall Cruise [UNSW x USYD x MQU]",
        image: skyfallCruise,
        facebookLink: "https://campus.hellorubric.com/?eid=66898",
    },
    {
        category: "Social Events",
        date: "JUN 30, 2026",
        title: "Kozy Korner",
        image: kozyKorner,
        facebookLink: "https://campus.hellorubric.com/?eid=68138",
    },
    {
        category: "Dance Workshops",
        date: "AUG 7, 2026",
        title: "Term 2 Week 10: Iconic By Mistake",
        image: iconicByMistake,
        facebookLink: "https://campus.hellorubric.com/?eid=71455",
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
    {
        category: "Dance Workshops",
        date: "JUL 17, 2026",
        title: "Term 2 Week 7: HEARS2HEARTS - Rude",
        image: H2HRude,
        facebookLink: "https://campus.hellorubric.com/?eid=69115",
    },
    {
        category: "Dance Workshops",
        date: "JUL 3, 2026",
        title: "Term 2 Week 5: ZB1 - Top 5",
        image: zb1Top5,
        facebookLink: "https://campus.hellorubric.com/?eid=68009",
    },
    {
        category: "Dance Workshops",
        date: "JUN 26, 2026",
        title: "Term 2 Week 3: BTS - 2.0 ",
        image: bts2,
        facebookLink: "https://campus.hellorubric.com/?eid=67419",
    },
    {
        category: "Dance Workshops",
        date: "JUN 19, 2026",
        title: "Term 2 Week 3: CORTIS - RedRed",
        image: cortisRedRed,
        facebookLink: "https://campus.hellorubric.com/?eid=66898",
    },
    {
        category: "Dance Workshops",
        date: "JUN 12, 2026",
        title: "Term 2 Week 2: ITZY - That's a No No",
        image: itzyNoNo,
        facebookLink: "https://campus.hellorubric.com/?eid=66032",
    },
    {
        category: "Dance Workshops",
        date: "JUN 6, 2026",
        title: "Term 2 Week 1: GIRLSET - Tweak",
        image: girlsetTweak,
        facebookLink: "https://campus.hellorubric.com/?eid=64697",
    },
]
