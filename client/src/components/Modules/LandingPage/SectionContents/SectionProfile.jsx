import EachUtils from "@/utils/eachUtils";
import SectionLayout from "@/components/Layouts/SectionLayout";

import { useAtom } from "jotai";
import { languageAtom } from "@/jotai/atoms";
import { PROFILE_KIDS_IMAGE } from "@/constants/listAsset";
import { LIST_CONTENT_4_EN, LIST_CONTENT_4_ID } from "@/constants/listContent";

const SectionProfile = () => {
  const [language] = useAtom(languageAtom);

  return (
    <SectionLayout>
      <div>
        <img src={PROFILE_KIDS_IMAGE} alt="" />
      </div>
      <EachUtils
        of={language === "en" ? LIST_CONTENT_4_EN : LIST_CONTENT_4_ID}
        render={(item, index) => (
          <div key={index} className="px-8">
            <h2 className="text-5xl font-black">{item.title}</h2>
            <p className="text-2xl mt-4 ">{item.desc}</p>
          </div>
        )}
      />
    </SectionLayout>
  );
};

export default SectionProfile;
