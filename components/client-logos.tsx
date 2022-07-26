import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="pb-5" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/visa.svg"
          width={150}
          height={50}
          alt="Visa"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/react.svg"
          width={150}
          height={50}
          alt="React"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/js.svg"
          width={150}
          height={50}
          alt="JS"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/typescript.svg"
          width={150}
          height={50}
          alt="TS"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/sass.svg"
          width={150}
          height={50}
          alt="Sass"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/express.svg"
          width={150}
          height={50}
          alt="Express"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/python.svg"
          width={150}
          height={50}
          alt="Python"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/c.svg"
          width={150}
          height={50}
          alt="C"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/mysql.svg"
          width={150}
          height={50}
          alt="MySQL"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/flutter.svg"
          width={150}
          height={50}
          alt="Flutter"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>

    <SliderContainer className="" contentWidth={1290} initialOffsetX={70}>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/angular.svg"
          width={150}
          height={50}
          alt="Angular"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/vue.svg"
          width={150}
          height={50}
          alt="Vue"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/tailwindcss.svg"
          width={150}
          height={50}
          alt="TailwindCSS"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/formspree.png"
          width={150}
          height={50}
          alt="Formspree"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/nodejs.svg"
          width={150}
          height={50}
          alt="NodeJS"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/jetbrains.svg"
          width={150}
          height={50}
          alt="JetBrains"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/mongodb.svg"
          width={150}
          height={50}
          alt="MongoDB"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/php.svg"
          width={150}
          height={50}
          alt="PHP"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/svelte.svg"
          width={150}
          height={50}
          alt="Svelte"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
