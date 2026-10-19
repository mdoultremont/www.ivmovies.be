import { Logo } from "./Logo";
import { Socials } from "./Socials";

export function AppFooter() {
  return (
    <footer className="p-8 pt-40">
      <div className="text-center">
        <Logo />
      </div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="mx-2 mb-4">
          <a href="tel:+32471637117" className="text-white">
            <span className="ml-2">Tel: +32 471 63 71 17</span>
          </a>
        </div>
        <div className="mx-2 mb-4">
          <a href="mailto:contact@ivmovies.be" className="text-white">
            <span className="ml-2">Email: contact@ivmovies.be</span>
          </a>
        </div>
        <div className="mx-2 mb-4">
          <span className="ml-2">TVA: BE0688 882 122</span>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Socials />
      </div>
    </footer>
  );
}
