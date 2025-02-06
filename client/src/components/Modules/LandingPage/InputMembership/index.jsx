import EachUtils from "@/utils/eachUtils";
import DefaultButton from "@/components/Modules/LandingPage/DefaultButton";

import { useAtom } from "jotai";
import { emailAtom, languageAtom } from "@/jotai/atoms";
import { LIST_CTA_EN, LIST_CTA_ID } from "@/constants/listCTA";
import { useNavigate } from "react-router-dom";

const InputMembership = () => {
  const [language] = useAtom(languageAtom);
  const navigate = useNavigate();
  const [, setEmail] = useAtom(emailAtom);

  const handleEmail = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <form>
      <EachUtils
        of={language === "en" ? LIST_CTA_EN : LIST_CTA_ID}
        render={(item, index) => (
          <div key={index}>
            <h3 className="text-white text-2xl">{item.title}</h3>
            <div className="relative flex justify-center gap-2 py-4 items-center">
              <input
                type="email"
                placeholder={item.labelInput}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 bg-black/50 w-full rounded-md border-white/50 border peer placeholder-transparent"
              />
              <label className="absolute top-0 left-0 text-lg pl-5 peer-placeholder-shown:top-8 peer-focus:top-[16px] transition-all">
                {item.labelInput}
              </label>
              <DefaultButton
                onClick={handleEmail}
                text={item.buttonSubmit}
                isArrowIcon
                styles={
                  "flex py-4 px-4 w-1/2 flex justify-center text-xl items-center gap-2"
                }
              />
            </div>
          </div>
        )}
      />
    </form>
  );
};

export default InputMembership;
