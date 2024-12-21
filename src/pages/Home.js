import Klogo from "../components/KLogo"
import ButtonsMenu from "../components/ButtonsMenu"

export default function Home() {
    return(
    <>
        <div className="App w-screen h-screen flex flex-col">
          <Klogo />
          <ButtonsMenu />
        </div>
    </>
    )
}