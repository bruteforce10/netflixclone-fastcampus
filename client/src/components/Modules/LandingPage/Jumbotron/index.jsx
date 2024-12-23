import EachUtils from "@/utils/eachUtils";

import { useAtom } from "jotai";
import {
  LIST_JUMBOTRON_EN,
  LIST_JUMBOTRON_ID,
} from "@/constants/listJumbotron";
import { languageAtom } from "@/jotai/atoms";
import { JUMBOTRON_IMAGE } from "@/constants/listAsset";
import InputMembership from "@mods/LandingPage/InputMembership";

const Jumbotron = () => {
  const [language] = useAtom(languageAtom);

  return (
    <div className="mb-24 px-8">
      <img
        src={JUMBOTRON_IMAGE}
        className="absolute top-0 left-0 object-cover h-[700px] w-full opacity-60"
        alt="netflix-bg"
      />
      <EachUtils
        of={language === "en" ? LIST_JUMBOTRON_EN : LIST_JUMBOTRON_ID}
        render={(item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center mt-44 items-center gap-4 text-center px-4 "
          >
            <h1 className="font-black text-white text-5xl">{item.title}</h1>
            <p className="text-white text-xl">{item.desc}</p>
            <InputMembership />
          </div>
        )}
      />
    </div>
  );
};

export default Jumbotron;
