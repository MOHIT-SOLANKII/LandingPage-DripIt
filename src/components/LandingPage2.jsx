import { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import ellipse804 from "/ellipse-804.svg";
import ellipse805 from "/ellipse-805.svg";
import ellipse806 from "/ellipse-806.svg";
import image23 from "/image-23.png";
import image24 from "/image-24.png";
import image25 from "/image-25.png";
import image26 from "/image-26.png";
import image27 from "/image-27.png";
import iphone1 from "/iphone-1.png";
import iphone2 from "/iphone-2.png";
import mdiInstagram from "/mdi-instagram.svg";
import mingcuteSocialXLine from "/mingcute-social-x-line.svg";


export const LandingPage2 = () => {
  return (
    <div className="w-[1440px] h-[4327px] relative bg-neutral-50  overflow-hidden">
      <div className="w-[1440px] h-20 left-0 top-0 absolute">
        <div className="w-[1440px] h-[78.05px] left-0 top-0 absolute bg-gray-50" />
        <div className="w-[1140px] h-[78.05px] left-[150px] top-[1.95px] absolute justify-between items-center inline-flex">
          <div className="text-black text-[22.80px] font-normal font-['Agraham']">
            Drippit
          </div>
          <div className="justify-start items-center gap-8 flex">
            <div className="text-gray-500 text-base font-normal font-['Inter']">
              Features
            </div>
            <div className="text-gray-500 text-base font-normal font-['Inter']">
              Curations
            </div>
            <div className="text-gray-500 text-base font-normal font-['Inter']">
              FAQ
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-950 rounded-xl justify-center items-center flex">
            <div className="text-gray-50 text-base font-semibold font-['Inter'] tracking-tight">
              Get Early Access
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1151px] h-[520px] left-[148px] top-[176px] absolute">
        <div className="w-[647.97px] h-[445.32px] left-0 top-[51.92px] absolute">
          <div className="w-[579.97px] h-[40.94px] left-[1px] top-[149.77px] absolute text-gray-400 text-lg font-normal font-['Gilroy-Medium'] leading-7 tracking-wide">
            Drippit is where fashion meets swiping. Discover your style, one
            swipe at a time.
          </div>
          <div className="w-[647.97px] h-[102px] left-0 top-0 absolute flex-col justify-start items-start gap-14 inline-flex">
            <div className="self-stretch text-black text-2xl font-normal font-['Gilroy-Medium'] tracking-widest">
              Find Your Drip.
            </div>
            <div className="self-stretch text-black text-[42px] font-normal font-['Agraham'] tracking-wide">
              Swipe, Match, Slay. 🚀{" "}
            </div>
          </div>
          <div className="w-[610.97px] h-[73.89px] left-[1px] top-[238.63px] absolute">
            <div className="w-[610.97px] h-[73.89px] pr-9 py-6 left-0 top-0 absolute rounded-[14.21px] border border-gray-500" />
            <div className="w-[318.98px] h-[10.98px] left-[23px] top-[30.95px] absolute text-gray-900 text-base font-normal font-['Gilroy-Medium'] tracking-wide">
              Enter your email to join the drip squad 💌
            </div>
            <div className="w-[179.99px] h-[55.91px] p-5 left-[421.98px] top-[8.99px] absolute bg-gray-950 rounded-xl justify-center items-center gap-3 inline-flex">
              <div className="text-gray-50 text-base font-normal font-['Gilroy-SemiBold'] tracking-tight">
                Get Early Access 🔥
              </div>
            </div>
          </div>
          <div className="w-[437.98px] h-[68.89px] left-[1px] top-[376.42px] absolute">
            <div className="w-[124.99px] h-[37.48px] left-[312.98px] top-[14.98px] absolute">
              <div className="w-[124.99px] h-[12.98px] left-0 top-0 absolute text-gray-700 text-lg font-normal font-['Gilroy-Medium'] tracking-wide">
                299+ Drippers
              </div>
              <div className="w-[91.86px] h-[10.98px] left-0 top-[26.49px] absolute text-gray-400 text-base font-normal font-['Gilroy-Regular'] tracking-tight">
                On Waitlist
              </div>
            </div>
            <div className="w-[288.88px] h-[68.89px] left-0 top-0 absolute">
              <div className="w-[68.89px] h-[68.89px] left-0 top-0 absolute bg-[#ffc0cd] rounded-full border-4 border-gray-50" />
              <img
                className="w-[50px] h-[49.92px] left-[9.50px] top-[9.89px] absolute rounded-[36.23px]"
                src={image23}
              />
              <div className="w-[68.89px] h-[68.89px] left-[54.92px] top-0 absolute bg-[#ffe599] rounded-full border-4 border-gray-50" />
              <img
                className="w-[50px] h-[49.92px] left-[65.50px] top-[9.89px] absolute rounded-[36.23px]"
                src="https://via.placeholder.com/50x50"
              />
              <div className="w-[68.89px] h-[68.89px] left-[109.99px] top-0 absolute bg-[#b8d7ff] rounded-full border-4 border-gray-50" />
              <img
                className="w-[50px] h-[50px] left-[119.28px] top-[9.45px] absolute rounded-full"
                src="https://via.placeholder.com/50x50"
              />
              <div className="w-[68.89px] h-[68.89px] left-[164.99px] top-0 absolute bg-[#ffc7e0] rounded-full border-4 border-gray-50" />
              <img
                className="w-[50px] h-[50px] left-[174.19px] top-[9.45px] absolute rounded-full"
                src="https://via.placeholder.com/50x50"
              />
              <div className="w-[68.89px] h-[68.89px] left-[219.99px] top-0 absolute bg-[#ffdbb8] rounded-full border-4 border-gray-50" />
              <img
                className="w-[50px] h-[50px] left-[229.11px] top-[9.45px] absolute rounded-full"
                src="https://via.placeholder.com/50x50"
              />
            </div>
          </div>
        </div>
        <div className="w-[485.03px] h-[520px] left-[665.97px] top-0 absolute">
          <div className="w-[267.98px] h-[411.54px] left-0 top-0 absolute">
            <img
              className="w-[267.98px] h-[411.54px] left-0 top-0 absolute"
              src={iphone2}
            />
            <div className="w-[244.25px] h-[391.03px] left-[18.07px] top-[7.64px] absolute">
              <div className="w-[244.25px] h-[391.03px] left-0 top-0 absolute"></div>
            </div>
          </div>
          <div className="w-[303.36px] h-[384.50px] left-[181.68px] top-[135.50px] absolute">
            <img
              className="w-[303.36px] h-[384.50px] left-0 top-0 absolute"
              src={iphone1}
            />
            <div className="w-[280.13px] h-[359.13px] left-[7.79px] top-[6.27px] absolute">
              <div className="w-[280.13px] h-[359.13px] left-0 top-0 absolute"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[235px] left-0 top-[792px] absolute">
        <div className="w-[1440px] h-[235px] left-0 top-0 absolute bg-gray-950" />
        <div className="left-[603px] top-[40px] absolute text-gray-300 text-sm font-normal font-['Gilroy-SemiBold'] tracking-[7px]">
          TRUSTED PARTNERS
        </div>
        <div className="w-[1140px] h-[69px] left-[150px] top-[102px] absolute">
          <img
            className="w-[145.03px] h-[37.64px] left-[690.98px] top-[9.06px] absolute"
            src={image23}
          />
          <img
            className="w-[164.19px] h-[39.03px] left-[975.81px] top-[12.55px] absolute"
            src={image24}
          />
          <img
            className="w-[113.56px] h-[69px] left-[437.62px] top-0 absolute"
            src={image25}
          />
          <img
            className="w-[77.31px] h-[52.27px] left-[220.52px] top-[1.39px] absolute"
            src={image26}
          />
          <img
            className="w-[80.73px] h-[59.94px] left-0 top-0 absolute"
            src={image27}
          />
        </div>
      </div>
      <div className="w-[1440px] h-[357px] left-0 top-[3481px] absolute">
        <div className="w-[1440px] h-[357px] left-0 top-0 absolute bg-gray-950" />
        <div className="w-[576px] h-60 left-[432px] top-[47px] absolute">
          <div className="left-[48px] top-0 absolute text-gray-50 text-[22px] font-normal font-['Agraham'] tracking-wide">
            Don’t Miss Out on the Drip 🚀
          </div>
          <div className="w-[479px] left-[48px] top-[83px] absolute text-center text-gray-50 text-base font-normal font-['Gilroy-Medium'] leading-7 tracking-wide">
            Be the first to experience the future of shopping. Early access
            spots are filling fast!
          </div>
          <div className="w-[576px] h-[74px] left-0 top-[166px] absolute">
            <div className="w-[576px] h-[74px] pr-[35px] py-6 left-0 top-0 absolute rounded-[14.21px] border border-gray-50" />
            <div className="left-[21.67px] top-[32px] absolute text-gray-50 text-base font-normal font-['Gilroy-Medium'] tracking-wide">
              Enter your email to claim your spot 💌
            </div>
            <div className="h-[52px] p-5 left-[419px] top-[11px] absolute bg-gray-50 rounded-xl justify-center items-center gap-3 inline-flex">
              <div className="text-gray-950 text-base font-normal font-['Gilroy-SemiBold'] tracking-tight">
                Sign Me Up 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1140px] h-[1659px] left-[150px] top-[1619px] absolute">
        <div className="w-[430.45px] h-[65px] left-[354.78px] top-0 absolute flex-col justify-start items-center gap-7 inline-flex">
          <div className="text-center text-gray-400 text-xs font-normal font-['Gilroy-SemiBold'] tracking-[7px]">
            FEATURES
          </div>
          <div className="text-gray-950 text-[42px] font-normal font-['Gilroy-Medium']">
            Why You’ll Love Drippit
          </div>
        </div>
        <div className="w-[1138.03px] h-[400px] left-[0.98px] top-[199px] absolute justify-start items-center gap-[66px] inline-flex">
          <div className="w-[517px] h-[400px] bg-[#d9d9d9] rounded-[20px]" />
          <div className="w-[560px] h-[188px] relative">
            <div className="left-0 top-[34px] absolute text-black text-[40px] font-normal font-['Gilroy-Medium'] tracking-wide">
              Shopping, but make it fun! 🔥
            </div>
            <div className="w-[523.18px] left-0 top-[97px] absolute text-gray-400 text-lg font-normal font-['Gilroy-Medium'] leading-relaxed tracking-wide">
              Say goodbye to boring scrolling. With Drippit, shopping feels like
              a game. Swipe left to pass, swipe right to save, and build your
              dream wardrobe in seconds. Effortless, exciting, and tailored to
              you.
            </div>
            <div className="left-0 top-0 absolute text-gray-800 text-xs font-normal font-['Gilroy-Medium'] uppercase leading-7 tracking-[5px]">
              Swipe to Shop
            </div>
          </div>
        </div>
        <div className="w-[1140px] h-[400px] left-0 top-[729px] absolute justify-start items-center gap-[66px] inline-flex">
          <div className="w-[577px] h-[211.22px] relative">
            <div className="w-[577px] left-0 top-[35.22px] absolute text-black text-[40px] font-normal font-['Gilroy-Medium'] tracking-wide">
              Build the closet you’ve always wanted. 💅
            </div>
            <div className="left-0 top-0 absolute text-gray-800 text-xs font-normal font-['Gilroy-Medium'] uppercase leading-7 tracking-[5px]">
              Your Dream Closet
            </div>
            <div className="w-[553px] left-0 top-[146.22px] absolute text-gray-400 text-lg font-normal font-['Gilroy-Medium'] leading-relaxed tracking-wide">
              Every swipe you love gets added to your wishlist, turning your
              style dreams into reality. Save your favorites, organize by vibe,
              and access your curated closet anytime. No stress, just drip.
            </div>
          </div>
          <div className="w-[497px] h-[400px] bg-[#d9d9d9] rounded-[20px]" />
        </div>
        <div className="w-[1140px] h-[400px] left-0 top-[1259px] absolute justify-start items-center gap-[66px] inline-flex">
          <div className="w-[517px] h-[400px] bg-[#d9d9d9] rounded-[20px]" />
          <div className="w-[577px] h-[237.88px] relative">
            <div className="w-[577px] left-0 top-[34.88px] absolute text-black text-[40px] font-normal font-['Gilroy-Medium'] leading-[55px] tracking-wide">
              Fashion finds, powered by AI. 🤖✨
            </div>
            <div className="left-0 top-0 absolute text-gray-800 text-xs font-normal font-['Gilroy-Medium'] uppercase leading-7 tracking-[5px]">
              Smart AI Search
            </div>
            <div className="w-[555.67px] left-0 top-[146.88px] absolute text-gray-400 text-lg font-normal font-['Gilroy-Medium'] leading-relaxed tracking-wide">
              Looking for something specific? Let our AI search do the heavy
              lifting. Whether it’s “a black dress for a night out” or “trendy
              sneakers under $100,” Drippit finds the perfect match—just for
              you.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[482px] h-[198px] left-[479px] top-[3982px] absolute">
        <div className="left-0 top-0 absolute text-gray-950 text-2xl font-normal font-['Gilroy-Medium'] tracking-wide">
          Drippit—Find Your Drip, Swipe Your Style.
        </div>
        <div className="left-[56px] top-[140px] absolute text-gray-400 text-base font-normal font-['Gilroy-Medium'] tracking-wide">
          Privacy Policy | Terms of Service | Contact Us
        </div>
        <div className="left-[94px] top-[187px] absolute text-gray-700 text-base font-normal font-['Gilroy-Medium'] tracking-wide">
          Copyright 2025. All Rights Reserved
        </div>
        <div className="w-[38px] h-[38px] left-[267px] top-[57px] absolute  overflow-hidden">
          <div className="w-[28.50px] h-[32.96px] left-[4.75px] top-[4.75px] absolute"></div>
        </div>
        <div className="w-[38px] h-[38px] left-[177px] top-[57px] absolute  overflow-hidden" />
      </div>
      <div className="w-[1140px] h-[366px] left-[150px] top-[1140px] absolute">
        <div className="w-[1140px] h-[359px] left-0 top-[7px] absolute bg-white rounded-[20px] border-4 border-white" />
        <div className="w-[1140px] h-[359px] left-0 top-[7px] absolute bg-white rounded-[20px]" />
        <img
          className="w-[462.88px] h-[353px] left-[-103.19px] top-[127px] absolute"
          src="https://via.placeholder.com/463x353"
        />
        <img
          className="w-[368.53px] h-[281px] left-[855.98px] top-[131px] absolute"
          src="https://via.placeholder.com/369x281"
        />
        <img
          className="w-[128.83px] h-[98.93px] left-[238.22px] top-[257px] absolute origin-top-left rotate-[11.50deg]"
          src="https://via.placeholder.com/129x99"
        />
        <img
          className="w-[493.34px] h-[283px] left-[323.33px] top-[187px] absolute"
          src="https://via.placeholder.com/493x283"
        />
        <div className="w-[185px] h-[52px] px-[25px] py-5 left-[476px] top-[150px] absolute rounded-xl border border-gray-950 justify-center items-center gap-3 inline-flex">
          <div className="text-gray-950 text-base font-normal font-['Gilroy-SemiBold'] tracking-wide">
            View Curations 👀
          </div>
        </div>
        <div className="left-[480px] top-[49px] absolute text-gray-700 text-base font-normal font-['Gilroy-Regular'] tracking-wide">
          Not sure what to wear?
        </div>
        <div className="w-[566px] left-[287px] top-[76px] absolute text-center text-black text-[22px] font-normal font-['Gilroy-Medium'] tracking-wide">
          Drippit Curations brings together the hottest fashion trends in one
          place.
        </div>
        <div className="w-[42.26px] h-[42px] left-[798px] top-[200px] absolute  overflow-hidden" />
        <div className="w-[46.19px] h-[46px] left-[124.81px] top-[35px] absolute  overflow-hidden" />
        <div className="w-[114.23px] h-[112.80px] left-[996.68px] top-0 absolute origin-top-left rotate-[51.94deg]  overflow-hidden" />
        <div className="w-[112.51px] h-[114.53px] left-[308.69px] top-[137px] absolute origin-top-left rotate-[29.63deg]  overflow-hidden" />
      </div>
    </div>
  );
};
