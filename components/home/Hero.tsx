"use client";
import { LineText } from "@/components/LineText";

const Hero = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      > */}

      
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-2 text-center">
        <h1>
          {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
          {/* {siteConfig.description} */}
          {locale.description}
        </p>
      </section>
      <section className="weather-widget-container">
        <div>
          <iframe
            style={{ display: "block" }}
            src="https://cdnres.willyweather.com/widget/loadView.html?id=155859#uv"
            width="1000"
            height="520"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </section>
      {/* </motion.div> */}
      {/* <CTAButton locale={CTALocale}></CTAButton> */}
    </>
  );
};

export default Hero;
