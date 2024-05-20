import Masakan from '../../../assets/img/Masakan.jpeg';

function About() {
    return (
        <>
            <section className={`bg-cover bg-no-repeat bg-[url(${Masakan})] bg-gray-700 bg-blend-multiply min-h-screen flex items-center`}>
                <div className="mx-auto max-w-screen-xl text-center py-20 lg:py-40 px-4">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white sm:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 sm:text-xl lg:text-2xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#cards_1" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg className="w-3.5 h-3.5 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>  
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
