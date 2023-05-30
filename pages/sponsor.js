import Head from 'next/head'
import Navbar from '../component/Navbar'
import WhySponsor from '../component/Whysponsor'
import Readers from '../component/Readers'
import Sponsorprice from '../component/Sponsorprice.js'
import Passionfroot from '../component/Passionfroot'
import Footertwo from '../component/Footertwo'

export default function Sponsorship() {
    return (<div className="bg-gradient-to-r from-yellow-300 to-yellow-50">
    <Navbar></Navbar>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Sponsorship | Exploding Ideas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

           <WhySponsor></WhySponsor>
           <Passionfroot></Passionfroot>
           {/* <Readers></Readers> */}
           {/* <Sponsorprice></Sponsorprice>  */}

            {/* <footer className="flex items-center justify-center w-full h-24">
                <a
                    className="flex items-center justify-center"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ©2023 Exploding Ideas
                </a>
            </footer> */}
            <Footertwo></Footertwo>
        </div></div>
    )
}
