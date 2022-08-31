import React from "react";
import { ImLocation } from "react-icons/im";
import { BsCalendarWeekFill } from "react-icons/bs";
import { MdOutlineSports } from "react-icons/md";
import { MdSportsMotorsports } from "react-icons/md";
import { FaHorseHead } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { IoIosCash } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ApplePay from "../assets/pay_apple_pay.png";
import { useNavigate } from "react-router-dom";
export default function Pay() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-start flex-col p-3 relative ">
      <div className="w-full  fixed top-0 left-0 z-10 flex justify-center items-center flex-row p-4 bg-white ">
        <button className="p-2 self-start " onClick={() => navigate(-1)}>
          <IoIosArrowBack className="text-2xl" />
        </button>
        <h1 className="text-center text-2xl text-prim font-bold  flex-1 pe-5">
          Payment
        </h1>
      </div>
      <ul className="steps mt-4 text-white ">
        <li className="step  step-primary" />
        <li className="step step-primary" />
        <li className="step step-primary" />
      </ul>
      <div className="flex flex-col gap-4 mt-7 ">
        <h1 className="text-xl font-bold">Booking Details</h1>
        <div className="flex flex-col gap-3 bg-gray-200 p-5 rounded-2xl">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <ImLocation className="text-sm text-prim" />
                <p className="text-xs font-bold">location:</p>
              </div>
              <p className="text-sm">Giza Sporting Club, Zamalek</p>
            </div>
            <p className="text-sm font-bold ">
              200 <span className="text-2xs font-thin ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <BsCalendarWeekFill className="text-sm text-prim" />
                <p className="text-xs font-bold">Date:</p>
              </div>
              <p className="text-sm">2022, Aug 21st, 6:00 pm</p>
            </div>
            <p className="text-sm font-bold ">
              200 <span className="text-2xs font-thin ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <MdOutlineSports className="text-sm text-prim" />
                <p className="text-xs font-bold">Coach:</p>
              </div>
              <p className="text-sm">Ali Munir</p>
            </div>
            <p className="text-sm font-bold ">
              200 <span className="text-2xs font-thin ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <FaHorseHead className="text-sm text-prim" />
                <p className="text-xs font-bold">Horse:</p>
              </div>
              <p className="text-sm">Gemanistica</p>
            </div>
            <p className="text-sm font-bold ">
              200 <span className="text-2xs font-thin ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <MdSportsMotorsports className="text-sm text-prim" />
                <p className="text-xs font-bold">Equipment:</p>
              </div>
              <p className="text-sm">Helmet, Club</p>
            </div>
            <p className="text-sm font-bold ">
              400 <span className="text-2xs font-thin ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <p className="text-sm font-bold">Sub Total</p>
              </div>
            </div>
            <p className="text-sm font-bold ">
              1200 <span className="text-2xs font-thin ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <p className="text-sm font-bold">VAT (14%)</p>
              </div>
            </div>
            <p className="text-sm font-bold ">
              168 <span className="text-2xs font-thin ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <p className="text-lg font-bold">Total</p>
              </div>
            </div>
            <p className="text-lg font-bold ">
              1368 <span className="text-2xs font-thin ">SAR</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-7">
        <h1 className="text-xl font-bold">Payment Methods</h1>
        <div className="flex flex-col gap-3 mt-4">
          <label className="flex flex-row items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              className="radio radio-primary w-5 h-5"
            />
            <div className="rounded-full p-1.5 bg-gray-200">
              <BsApple className="text-lg" />
            </div>
            <p className="font-semibold">Pay with Apple</p>
          </label>
          <label className="flex flex-row items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              className="radio radio-primary w-5 h-5"
            />
            <div className="rounded-full p-1.5 bg-gray-200">
              <BsCreditCard2Back className="text-lg" />
            </div>
            <p className="font-semibold">Pay with Credit Card</p>
          </label>
        </div>
        <div className="divider h-3 m-1" />
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-1">
            <IoIosCash className="text-xl text-prim" />
            <p className="font-semibold text-xl">Total</p>
          </div>
          <p className="text-lg font-bold ">
            1368 <span className="text-2xs font-thin ">SAR</span>
          </p>
        </div>
        <label className="flex flex-row items center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary w-5 h-5"
          />
          <p className="font-semibold text-sm">
            I agree to the{" "}
            <label htmlFor="TCModal" className="text-prim link">
              Terms and Conditions
            </label>
          </p>
        </label>
        <div className="flex items-center justify-center mt-10">
          <img src={ApplePay} alt="" className="w-56" />
        </div>
      </div>
      <input type="checkbox" id="TCModal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-4">
            Terms and Conditions
          </h3>
          <div className="overflow-y-auto h-[300px] text-justify">
            Introduction These Website Standard Terms and Conditions written on
            this webpage shall manage your use of our website, Webiste Name
            accessible at Website.com. These Terms will be applied fully and
            affect to your use of this Website. By using this Website, you
            agreed to accept all terms and conditions written in here. You must
            not use this Website if you disagree with any of these Website
            Standard Terms and Conditions. Minors or people below 18 years old
            are not allowed to use this Website. Intellectual Property Rights
            Other than the content you own, under these Terms, Company Name
            and/or its licensors own all the intellectual property rights and
            materials contained in this Website. You are granted limited license
            only for purposes of viewing the material contained on this Website.
            Restrictions You are specifically restricted from all of the
            following: publishing any Website material in any other media;
            selling, sublicensing and/or otherwise commercializing any Website
            material; publicly performing and/or showing any Website material;
            using this Website in any way that is or may be damaging to this
            Website; using this Website in any way that impacts user access to
            this Website; using this Website contrary to applicable laws and
            regulations, or in any way may cause harm to the Website, or to any
            person or business entity; engaging in any data mining, data
            harvesting, data extracting or any other similar activity in
            relation to this Website; using this Website to engage in any
            advertising or marketing. Certain areas of this Website are
            restricted from being access by you and Company Name may further
            restrict access by you to any areas of this Website, at any time, in
            absolute discretion. Any user ID and password you may have for this
            Website are confidential and you must maintain confidentiality as
            well. Your Content In these Website Standard Terms and Conditions,
            “Your Content” shall mean any audio, video text, images or other
            material you choose to display on this Website. By displaying Your
            Content, you grant Company Name a non-exclusive, worldwide
            irrevocable, sub licensable license to use, reproduce, adapt,
            publish, translate and distribute it in any and all media. Your
            Content must be your own and must not be invading any third-party's
            rights. Company Name reserves the right to remove any of Your
            Content from this Website at any time without notice. No warranties
            This Website is provided “as is,” with all faults, and Company Name
            express no representations or warranties, of any kind related to
            this Website or the materials contained on this Website. Also,
            nothing contained on this Website shall be interpreted as advising
            you. Limitation of liability In no event shall Company Name, nor any
            of its officers, directors and employees, shall be held liable for
            anything arising out of or in any way connected with your use of
            this Website whether such liability is under contract. Company Name,
            including its officers, directors and employees shall not be held
            liable for any indirect, consequential or special liability arising
            out of or in any way related to your use of this Website.
            Indemnification You hereby indemnify to the fullest extent Company
            Name from and against any and/or all liabilities, costs, demands,
            causes of action, damages and expenses arising in any way related to
            your breach of any of the provisions of these Terms. Severability If
            any provision of these Terms is found to be invalid under any
            applicable law, such provisions shall be deleted without affecting
            the remaining provisions herein. Variation of Terms Company Name is
            permitted to revise these Terms at any time as it sees fit, and by
            using this Website you are expected to review these Terms on a
            regular basis. Assignment The Company Name is allowed to assign,
            transfer, and subcontract its rights and/or obligations under these
            Terms without any notification. However, you are not allowed to
            assign, transfer, or subcontract any of your rights and/or
            obligations under these Terms. Entire Agreement These Terms
            constitute the entire agreement between Company Name and you in
            relation to your use of this Website, and supersede all prior
            agreements and understandings. Governing Law & Jurisdiction These
            Terms will be governed by and interpreted in accordance with the
            laws of the State of Country, and you submit to the non-exclusive
            jurisdiction of the state and federal courts located in Country for
            the resolution of any disputes.
          </div>
          <div className="modal-action">
            <label for="TCModal" className="btn btn-primary">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
