import Head from "next/head";
import Footer from "../component/Footertwo";
import { useRouter } from "next/router";
import Navbar from "../component/Navbar";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className=" ">
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Privacy Policy | Exploding Ideas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 lg:px-20 text-center">
          <h1 className="text-6xl font-bold pt-4 md:pt-0 lg:pt-24">
            Privacy Policy
          </h1>
          <p className="mt-2">Last updated: May 26, 2023</p>
          <h2>Introduction</h2>
          <div className="mt-6 text-justify text-xl  p-6 rounded-lg shadow-md">
          <p className="mt-2">
          Your Company ("us", "we", or "our") operates (add your website) (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
<br/>
We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
          </p>
            <h2 className="font-bold text-sm md:lg:text-2xl">
            Information Collection And Use
            </h2>
            <p className="mt-2">
            While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name and email address ("Personal Information").
          </p>
           
            <h2 className="font-bold text-sm md:lg:text-2xl">
            Log Data
            </h2>
            <p className="mt-2">
            Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
          </p>
            <h2 className="font-bold text-sm md:lg:text-2xl">
            Cookies
            </h2>
            <p className="mt-2">
            Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
<br/>
Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
          </p>
            <h2 className="font-bold text-sm md:lg:text-2xl">
            Security
            </h2>
            <p className="mt-2">
            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>
            <h2 className="font-bold text-sm md:lg:text-2xl">
            Changes To This Privacy Policy
            </h2>
            <p className="mt-2">
            This Privacy Policy is effective as of (add date) and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
            <br/>
            We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
          </p>
            <h2 className="font-bold text-sm md:lg:text-2xl">
            Contact Us
            </h2>
            <p className="mt-2">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
           
          </div>
        </main>

        <Footer></Footer>
        <footer className="flex items-center justify-center w-full h-24 ">
          <a
            className="flex items-center justify-center"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ©2023 Exploding Ideas
          </a>
        </footer>
      </div>
    </div>
  );
}
