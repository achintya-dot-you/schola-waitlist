import MarqueeText from "react-marquee-text";
import Marquee from "react-fast-marquee";


export default function MarqueeTextComp(){
    return(
        <div className="items-center justfy-center" data-aos="zoom-y-out" data-aos-delay={500}>
        <h1>
      <Marquee className="text-6xl"
      pauseOnHover={true}
      speed={100}
      gradient={true}
      gradientWidth={50}
      >
        Cornell • UPenn • UChicago • Princeton • UIUC • USC • UBC • Brown • Harvey Mudd • Kenyon • NYU • &nbsp;
      </Marquee>
    </h1>
    </div>
    );

}