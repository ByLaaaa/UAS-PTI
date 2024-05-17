import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Monas from '../../../assets/img/monasBener.png'
import { ScrollTrigger } from 'gsap/all';

function Carousel() {
  gsap.config({ trialWarn: false });
  gsap.registerPlugin(ScrollTrigger)

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
        t1.fromTo(
          ["#title-1", "#title-2", "#title-3", "#title-4"],
          {
            scrollTrigger : {
              trigger: ["#title-1", "#title-2", "title-3", "title-4"],
            },
            opacity: 0,
          },
          {
            scrollTrigger : {
              trigger: ["#title-1", "#title-2", "title-3", "title-4"],
              start : 'center center +=350',
              end : '+=500',
              toggleActions: 'restart none none restart'
            },
            opacity: isMobile ? "100%" : "100%",
            x: isMobile ? "+=20" : "+=320",
            stagger: isMobile ? 0.8 : 0.7,
          }
        ).fromTo(
          "#monas",{opacity: 0, x: isMobile ? "-=20" : "-=662", stagger: isMobile? 0.8 : 0.6}, {opacity: 1 ,x: isMobile ? "+=920" : "-=92", stagger: isMobile? 0.8 : 0.9}
        )
      }, comp);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
    <section className={`bg-cover bg-no-repeat bg-[url('../../../../public/assets/img/JakartaNight.jpg')] bg-gray-700 bg-blend-multiply h-screen w-cover`}>
      <div className="relative" ref={comp}>
        <div className="flex justify-center">
          <div className="flex justify-center my-48">
            <div className="flex flex-col">
              <span className="md:text-6xl font-bold text-white text-3xl" id="title-1">WELCOME</span>
              <span className="md:text-7xl font-bold text-white text-4xl" id="title-2">TO</span>
              <span className="md:text-8xl font-bold text-white text-5xl" id="title-3">JAKARTA</span>
              <span className="md:text-9xl font-bold text-white text-6xl" id="title-4">CULINARY</span>
            </div>
            <div className="flex flex-col">
              <img src={Monas} className='w-56 md:w-96' id='monas' alt="Monas" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Carousel;
