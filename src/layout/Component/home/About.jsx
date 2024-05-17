import Dummy from '../../../assets/img/KerakTelor.jpeg'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

function About() {
    
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
            ["#head"],
            {
              scrollTrigger : {
                trigger: ["#head"],
                start : 'center center +=700',
                markers: true,
                scrub: true,
                toggleActions: 'restart none none restart'
              },
              opacity: 0,
              x: isMobile ? "+=20" : "-=320",
            },
            {
              scrollTrigger : {
                trigger: ["#head"],
                start : 'center center -=700',
                markers: true,
                scrub: true,
                end : '+=320',
                toggleActions: 'restart none none restart'
              },
              opacity: isMobile ? "100%" : "100%",
              x: isMobile ? "+=20" : "0",
              duration: 3,
              stagger: isMobile ? 0.8 : 0.7,
            }
          ).fromTo(
            "#Img-Card-1",
            {
                scrollTrigger: {
                    trigger: ['#card-1'],
                    markers: true,
                    scrub: true,
                    toggleActions: 'restart none none restart'
                },
                opacity: 0, 
                x: isMobile ? "-=20" : "+=450",
            }, 
            {
                scrollTrigger: {
                    trigger: ['#card-1'],
                    markers: true,
                    scrub: true,
                    toggleActions: 'restart none none restart'
                },
                opacity: 1,
                x: isMobile ? "+=920" : '-=320',
                duration: 4,
                stagger: isMobile? 0.8 : 0.9}
          ).fromTo(
            "#Img-Card-2",
            {
                scrollTrigger: {
                    trigger: ['#card-1'],
                    markers: true,
                    scrub: true,
                    toggleActions: 'restart none none restart'
                },
                opacity: 0, 
                x: isMobile ? "-=20" : "-=750",
            }, 
            {
                scrollTrigger: {
                    trigger: ['#card-1'],
                    markers: true,
                    scrub: true,
                    toggleActions: 'restart none none restart'
                },
                opacity: 1,
                x: isMobile ? "+=920" : "+=690",
                duration: 4,
                stagger: isMobile? 0.8 : 0.9}
          )
        }, comp);
      });
  
      return () => ctx.revert();
    }, []);
    
    return (
        <>
        <section className='h-screen bg-black'>
            <div className='flex flex-col justify-center' ref={comp}>
                <div className="flex justify-center mt-4">
                    <span className="text-5xl mb-4 tracking-tight font-extrabold text-white font-jakarta md:text-6xl" id='head'>About Jakarta Culinary</span>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:flex-cols-2 sm:py-16 lg:px-6">
                        <div className="mt-4 md:mt-0">
                            <span className="text-4xl mb-4 tracking-tight font-extrabold text-white font-jakarta">About Jakarta</span>
                            <br />
                            <span className="mb-6 font-light md:text-lg font-jakarta text-white">
                            Jakarta adalah ibu kota dan pusat ekonomi Indonesia, dengan lebih dari 10 juta penduduk di pesisir barat laut Pulau Jawa. Kota ini dikenal dengan gedung-gedung pencakar langit, kantor pemerintahan, dan pusat perbelanjaan. Sebagai kota multikultural, Jakarta menampilkan keragaman suku, agama, dan tradisi. Tempat-tempat seperti Monumen Nasional dan Taman Mini Indonesia Indah menarik wisatawan. Meski mengalami kemacetan lalu lintas dan risiko banjir, Jakarta terus berupaya meningkatkan infrastruktur dan transportasi.
                            </span>
                        </div>
                        <img src={Dummy} className='w-screen rounded-2xl' alt="" id='Img-Card-1'/>
                    </div>
                    <div className="gap-2 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:flex-cols-2 sm:py-16 lg:px-6" id='Card-2'>
                        <img src={Dummy} className='w-screen rounded-2xl' alt="" id='Img-Card-2'/>
                        <div className="mt-4 md:mt-0">
                            <span className="text-4xl text-white mb-4 tracking-tight font-extrabold font-jakarta">About Culinary</span>
                            <br />
                            <span className="mb-6 font-light text-white md:text-lg font-jakarta">
                            Makanan tradisional Jakarta mencerminkan kekayaan budaya Betawi dan keragaman etnis di ibu kota. Soto Betawi adalah sup dengan kuah santan dan potongan daging sapi atau jeroan yang populer. Kerak telor, camilan dari ketan dan telur yang dipanggang dengan kelapa parut, menjadi ikon street food. Nasi uduk, nasi gurih dengan santan, disajikan dengan ayam goreng dan sambal. Ketoprak, hidangan tahu, lontong, dan saus kacang, juga digemari. Makanan-makanan ini menunjukkan kelezatan dan keragaman budaya di Jakarta.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default About;