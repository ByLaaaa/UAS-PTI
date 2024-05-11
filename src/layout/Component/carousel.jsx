import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Monas from '../../assets/img/monasBener.png'

function Carousel() {
  gsap.config({ trialWarn: false });

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add({
        isMobile: "(max-width: 500px)",
        isDesktop: "(min-width: 501px)",
      }, (context) => {
        console.log(context.conditions);
        let { isMobile, isDesktop } = context.conditions;

        const t1 = gsap.timeline();
        t1.from(
          ["#title-1", "#title-2", "#title-3", "#title-4"],
          {
            opacity: 0,
          }
        ).to(
          ["#title-1", "#title-2", "#title-3", "#title-4"],
          {
            opacity: isMobile ? "100%" : "100%",
            x: isMobile ? "+=20" : "+=320",
            stagger: isMobile ? 0.8 : 0.6,
          }
        ).from(
          "#monas",
          {
            opacity: 0,
            x: isMobile ? "-=20" : "-=900",
            stagger: isMobile? 0.8 : 0.6,
          }
        ).to(
          "#monas",
          {
            x: isMobile ? "-=20" : "-=820",
            stagger: isMobile? 0.8 : 0,
          }
        )
      }, comp);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen" ref={comp}>
      <div className="flex justify-center m-16">
        <div className="flex flex-col m-4">
          <span className="md:text-6xl font-bold text-3xl" id="title-1">WELCOME</span>
          <span className="md:text-7xl font-bold text-4xl" id="title-2">TO</span>
          <span className="md:text-8xl font-bold text-5xl" id="title-3">JAKARTA</span>
          <span className="md:text-9xl font-bold text-6xl" id="title-4">CULINARY</span>
        </div>
        <div className="flex flex-col">
          <img src={Monas} className='w-96' id='monas' alt="Monas" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
