import EachUtils from "@/utils/eachUtils";
import InputMembership from "@/components/Modules/LandingPage/InputMembership";

import { useAtom } from "jotai";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FAQ_TITLE_EN,
  FAQ_TITLE_ID,
  LIST_FAQ_EN,
  LIST_FAQ_ID,
} from "@/constants/listFAQ";
import { languageAtom } from "@/jotai/atoms";

const SectionFAQ = () => {
  const [language] = useAtom(languageAtom);
  const [openContentIndex, setOpenContentIndex] = useState(null);

  return (
    <div className="w-full p-16 bg-black border-t-8 border-t-stone-900">
      <h2 className="text-5xl font-black text-white text-center">
        {language === "en" ? FAQ_TITLE_EN : FAQ_TITLE_ID}
      </h2>
      <ul className="flex flex-col gap-2 py-8">
        <EachUtils
          of={language === "en" ? LIST_FAQ_EN : LIST_FAQ_ID}
          render={(item, index) => (
            <li key={index}>
              <div className="bg-[#2d2d2d] hover:bg-[#414141] text-white">
                <button
                  onClick={() =>
                    setOpenContentIndex(
                      openContentIndex === index ? null : index
                    )
                  }
                  className="flex p-8 justify-between items-center w-full"
                >
                  <span className="font-semibold text-xl">{item.title}</span>
                  <motion.div
                    animate={{
                      rotate: openContentIndex === index ? 135 : 0,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      role="img"
                      aria-hidden="true"
                      className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </motion.div>
                </button>
              </div>
              <motion.div
                initial={{ translateY: -50 }}
                animate={{ translateY: openContentIndex === index ? 0 : -50 }}
                className="p-8 text-left text-white bg-[#2d2d2d] mt-1"
                style={{
                  display: openContentIndex === index ? "block" : "none",
                }}
              >
                <p className="text-xl">{item.desc}</p>
              </motion.div>
            </li>
          )}
        />
      </ul>
      <div className="max-w-2xl mx-auto mt-4 text-center">
        <InputMembership />
      </div>
    </div>
  );
};

export default SectionFAQ;
