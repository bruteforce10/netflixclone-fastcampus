import { useAtom } from "jotai";
import { LIST_FOOTER_EN } from "../../../constants/listFooter";
import EachUtils from "../../../utils/eachUtils";
import OptionLanguage from "../optionLanguage";
import { languageAtom } from "../../../jotai/atoms";

const Footer = () => {
  const [language] = useAtom(languageAtom);

  return (
    <footer className="w-full bg-black text-white border-t-8 border-t-stone-900 p-8">
      <div>
        Question? Call <a href="">123-456-789</a>
      </div>
      <ul className="grid sm:grid-cols-4 gap-4 py-8">
        <EachUtils
          of={language === "en" ? LIST_FOOTER_EN : LIST_FOOTER_EN}
          render={(item, index) => (
            <li key={index}>
              <a href={item.url} className="underline">
                {item.title}
              </a>
            </li>
          )}
        />
      </ul>

      <OptionLanguage />
      <p className="mt-4">Netflix Indonesia</p>
    </footer>
  );
};

export default Footer;
