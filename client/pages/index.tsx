import type { NextPage } from "next";
import { StaticImageData } from "next/image";
import StandardButton from "../components/Button/Button";

const Home: NextPage = () => {
  return (
    <div className="">
      <BigImage />
      <SiteShowcase />
    </div>
  );
};

function BigImage() {
  return (
    <div className="relative z-10">
      <div className="m-auto flex text-center h-full">
        <div className="flex flex-col border-2 border-neutral-900 w-1/2 border-opacity-50 h-96 m-auto rounded-lg bg-black bg-opacity-40 shadow-2xl">
          <div className="m-auto flex flex-col items-center">
            <div className="w-2/3">
              <h1 className="text-3xl lg:text-5xl uppercase font-extrabold text-center m-auto justify-center text-white">
                att äta hälsosamt är en resa
              </h1>
              <div className="mt-4">
                <span className="text-xl lg:text-2xl font-bold text-center m-auto justify-center text-white">
                  Låt Gainoteket vara din guide!
                </span>
              </div>
            </div>
            <div className="my-8">
              <StandardButton
                url="/calculator"
                inverted={false}
                text="Sätt igång"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SiteShowcase() {
  const data: Array<{
    title: string;
    description: string;
    image: StaticImageData;
  }> = [
    {
      title: "1. Räkna ut ditt kaloribehov",
      description:
        "Med Gainotekets egna kaloriräknare räknar du enkelt ut vilka behov du har för dina mål.",
      image: require("../public/index_placeholder.jpg"),
    },
    {
      title: "2. Välj vad du vill äta",
      description:
        "Här väljer du vad du vill äta och ändrar näringsvärden för att passa det du valde i steg 1.",
      image: require("../public/index_placeholder.jpg"),
    },
    {
      title: "3. Kostplan färdig!",
      description: "Exportera din kostplan och nå dina mål!",
      image: require("../public/index_placeholder.jpg"),
    },
  ];
  return (
    <div className="flex justify-center bg-neutral-900 h-full">
      <div className="w-5/6 my-12">
        {data.map((item, index) => {
          return index % 2 === 0 ? (
            <div className="justify-center" key={index}>
              <div className="text-center py-2">
                <div className="bg-gray-200 flex m-auto w-3/4 h-56 my-6">
                  <span className="text-xl flex m-auto">Bild1</span>
                </div>
                <div className="m-auto">
                  <div className="mb-4 text-primary">
                    <span className="text-2xl font-bold my-4">
                      {item.title}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-lg text-white">
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="justify-center" key={index}>
              <div className="text-center py-2">
                <div className="bg-gray-200 flex m-auto w-3/4 h-56 my-6">
                  <span className="text-black text-xl flex m-auto">Bild1</span>
                </div>
                <div className="m-auto">
                  <div className="mb-4 text-primary">
                    <span className="text-2xl font-bold my-4">
                      {item.title}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-lg text-white">
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SiteShowcase2() {
  const data: Array<{
    title: string;
    description: string;
    image: StaticImageData;
  }> = [
    {
      title: "1. Räkna ut ditt kaloribehov",
      description:
        "Med prooly:s egna kaloriräknare räknar du enkelt ut vilka behov du har för dina mål.",
      image: require("../public/index_placeholder.jpg"),
    },
    {
      title: "2. Välj vad du vill äta",
      description:
        "Här väljer du vad du vill äta och ändrar näringsvärden för att passa det du valde i steg 1.",
      image: require("../public/index_placeholder.jpg"),
    },
    {
      title: "3. Kostplan färdig!",
      description: "Exportera din kostplan och nå dina mål!",
      image: require("../public/index_placeholder.jpg"),
    },
  ];
  return (
    <div className="py-12 pt-24">
      {data.map((item, index) => {
        return index % 2 === 0 ? (
          <div className="mb-32 w-3/4 flex m-auto justify-center" key={index}>
            <div className="text-center py-2 flex m-auto">
              <div className="bg-gray-200 w-96 h-60 flex m-auto">
                <span className="text-black text-4xl flex m-auto">Bild</span>
              </div>
              <div className="w-[30rem] m-auto ml-32">
                <div className="mb-4 text-secondary">
                  <span className="text-4xl font-bold my-4">{item.title}</span>
                </div>
                <div className="">
                  <span className="text-lg">{item.description}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-32 w-3/4 flex m-auto justify-center" key={index}>
            <div className="text-center py-2 flex m-auto">
              <div className="w-[30rem] m-auto mr-32">
                <div className="mb-4 text-secondary">
                  <span className="text-4xl font-bold my-4">{item.title}</span>
                </div>
                <div className="">
                  <span className="text-lg">{item.description}</span>
                </div>
              </div>
              <div className="bg-gray-200 w-96 h-56 flex m-auto">
                <span className="text-black text-4xl flex m-auto">Bild</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FormSection() {
  return (
    <div className="w-3/4 my-6 grid m-auto justify-center">
      <span className="text-2xl flex m-auto text-center w-3/4 my-4">
        Har du förslag på förbättringar? Vi vill gärna höra från dig!
      </span>
      <textarea
        className="w-full p-2 h-72 border-2 border-neutral-500 text-start shadow rounded-sm"
        placeholder="Jag har ett förslag om..."
      />
      <div className="justify-end w-full flex">
        <div className="w-40 justify-end m-4">
          <StandardButton text="skicka" url="/" inverted={true} />
        </div>
      </div>
    </div>
  );
}

export default Home;
