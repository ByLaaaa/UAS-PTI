import Dummy from '../../../assets/img/KerakTelor.jpeg'


function About() {
    return (
        <>
        <div className='flex flex-col justify-center'>
            <div className="flex justify-center">
                <span className="text-5xl mb-4 tracking-tight font-extrabold font-jakarta md:text-6xl">About Jakarta Culinary</span>
            </div>
            <div className="flex flex-col justify-center">
                <div className="items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:flex-cols-2 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0">
                        <span className="text-4xl mb-4 tracking-tight font-extrabold font-jakarta">About Jakarta</span>
                        <br />
                        <span className="mb-6 font-light md:text-lg font-jakarta">
                        Jakarta adalah ibu kota dan pusat ekonomi Indonesia, dengan lebih dari 10 juta penduduk di pesisir barat laut Pulau Jawa. Kota ini dikenal dengan gedung-gedung pencakar langit, kantor pemerintahan, dan pusat perbelanjaan. Sebagai kota multikultural, Jakarta menampilkan keragaman suku, agama, dan tradisi. Tempat-tempat seperti Monumen Nasional dan Taman Mini Indonesia Indah menarik wisatawan. Meski mengalami kemacetan lalu lintas dan risiko banjir, Jakarta terus berupaya meningkatkan infrastruktur dan transportasi.
                        </span>
                    </div>
                    <img src={Dummy} className='w-screen rounded-2xl' alt="" />
                </div>
                <div className="gap-2 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:flex-cols-2 sm:py-16 lg:px-6">
                    <img src={Dummy} className='w-screen rounded-2xl' alt="" />
                    <div className="mt-4 md:mt-0">
                        <span className="text-4xl mb-4 tracking-tight font-extrabold font-jakarta">About Culinary</span>
                        <br />
                        <span className="mb-6 font-light md:text-lg font-jakarta">
                        Makanan tradisional Jakarta mencerminkan kekayaan budaya Betawi dan keragaman etnis di ibu kota. Soto Betawi adalah sup dengan kuah santan dan potongan daging sapi atau jeroan yang populer. Kerak telor, camilan dari ketan dan telur yang dipanggang dengan kelapa parut, menjadi ikon street food. Nasi uduk, nasi gurih dengan santan, disajikan dengan ayam goreng dan sambal. Ketoprak, hidangan tahu, lontong, dan saus kacang, juga digemari. Makanan-makanan ini menunjukkan kelezatan dan keragaman budaya di Jakarta.
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;