import { footerLogo } from '../assets/images';

const Footer = () => {
  return (
    <section className="max-container flex max-md:flex-col gap-10 items-center justify-evenly">
      <div>
        <img src={footerLogo} alt="" />
        <p className="info-text mt-5 max-w-sm font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum distinctio corporis pariatur repudiandae
          recusandae ratione beatae consequatur voluptatem nemo.
        </p>
      </div>

      <div className="flex gap-10 info-text flex-wrap font-montserrat ">
        <ul>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
        <ul>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
        <ul>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
