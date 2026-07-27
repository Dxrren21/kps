import Profile from "../components/Profile";
import { useMemo } from "react"

function TeamRow({ title, members }) {
    return (
        <div className="w-full mb-12 last:mb-0">
            <h2 className="font-light uppercase text-center pt-2 pb-5 text-3xl tracking-widest text-ink">{title}</h2>
            <div className="flex items-center px-[4%] max-md:px-1">
                <div
                    className="no-scrollbar flex flex-wrap justify-center gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full py-2"
                >
                    {members.map((prof, index) => (
                        <div key={index} className="snap-start shrink-0">
                            <Profile
                                name={prof.profName}
                                link={prof.link}
                                role={prof.role}
                                ig={prof.ig}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Carousel() {

    const profiles = useMemo(() => [
        [
            {profName: "Grace", link: "grace.JPG", role: "President", ig:"graaacexia"}, 
            {profName: "Becca", link: "becca.jpg", role: "Vice President", ig:"_becca1201"}, 
            {profName: "Charlotte", link: "charlotte.jpg", role: "Secretary", ig:"charlottiewen_"}, 
            {profName: "Alexandra", link: "alex.jpg", role: "Treasurer", ig:"z__ndra"}, 
            {profName: "Emmy", link: "emmy.jpg", role: "Arc Delegate", ig:"luemyi"}
        ], 
        [
            {profName: "Advi", link: "advi.jpg", ig: "advika.ulhaan"}, 
            {profName: "Ethan", link: "ethan.JPG", ig: "xenn_060"}, 
            {profName: "Metta", link: "metta.jpeg", ig: "metta.jh"}, 
        ], 
        [
            {profName: "Jana", link: "jana.jpg", ig: "jjana_chan_"}, 
            {profName: "Zahra", link: "zahra_events.jpg", ig: "zahrahusssen"}, 
        ], 
        [
            {profName: "Howard", link: "howard.jpg", ig: "cptdankfish"}, 
            {profName: "Shelley", link: "shelley.jpg", ig: "z_xue.li"}, 
        ], 
        [
            {profName: "Helena", link: "helena.jpg", ig: "hashtag_helena"}, 
            {profName: "Minh", link: "minh.jpg", ig: "mnhkhngtu"}, 
            {profName: "Sen", link: "sen.jpg", ig: "s3n_timental"}, 
        ], 
        [
            {profName: "Olivia", link: "liv.jpg", ig: "k_liv1_"}, 
            {profName: "Zahra", link: "zahra_marketing.jpg", ig: "zahrxz"}, 
        ], 
        [
            {profName: "Alicia", link: "alicia.jpg", ig: "alishxr_"}, 
            {profName: "Talia", link: "talia.jpg", ig: "talia_loww"}, 
        ]

    ], []); 

    const kpsPort = useMemo(() => [
        "Executives ✨",
        "Dance Directors 🎵",
        "Events Directors 🎉",
        "Productions Directors 🎥",
        "Human Resources Directors 💖",
        "Marketing Directors 📰",
        "Creative Directors 🎨"
    ], []);

    useMemo(() => {
        profiles.flat().forEach((profile) => {
            const img = new Image();
            img.src = `/assets/${profile.link}`;
        });
        return null
    }, [profiles]);

    return(
        <div className="flex flex-col w-full m-auto items-center rounded-3xl">
            {profiles.map((group, index) => (
                <TeamRow key={kpsPort[index]} title={kpsPort[index]} members={group} />
            ))}
        </div>
    )
}
