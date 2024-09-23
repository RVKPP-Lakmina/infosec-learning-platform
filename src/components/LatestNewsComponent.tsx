import { DownloadIcon } from "../assets/svg-icons";

const LatestNewsComponent = () => {
  return (
    <section className="container mx-auto py-12 px-8">
      <h2 className="text-4xl font-semibold text-[#0a0391] mb-8 text-center">
        Latest News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-customBlue p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-[#0f4c81] mb-4">
            THE HIDDEN DANGERS OF PUBLIC WI-FI: WHY YOU SHOULD THINK TWICE
            BEFORE CONNECTING
          </h3>
          <p className="text-gray-700 mb-4">
            In our increasingly connected world, public Wi-Fi networks are
            everywhere—cafes, airports, hotels, and even public parks offer free
            internet access. While it's convenient to check emails, browse
            social media, or get some work done on the go, using public Wi-Fi
            comes with significant risks that many people are unaware of....
          </p>
          <div className="flex justify-end">
            <button className="mt-4 bg-[#ffd700] py-2 px-4 rounded-lg font-semibold text-[#0f4c81] hover:bg-[#fdd700]">
              See More
            </button>
          </div>
        </article>

        <article className="bg-customBlue p-6 shadow-lg rounded-lg flex flex-col">
          <div
            className="bg-cover w-full h-48 rounded-lg mb-4"
            style={{
              backgroundImage: "url('src/assets/images/news-article-02.png')",
            }}
          ></div>
          <div className="flex justify-end mt-auto">
            <button className="font-semibold text-[#0f4c81] flex items-center gap-2 hover:text-[#063362]">
              <DownloadIcon />
              Download the Full Document
            </button>
          </div>
        </article>

        <article className="bg-customBlue p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-[#0f4c81] mb-4">
            Phishing and Social Engineering
          </h3>
          <div
            className="bg-cover w-full h-48 rounded-lg mb-4"
            style={{
              backgroundImage: "url('src/assets/images/article-03.png')",
            }}
          ></div>
          <div className="flex justify-end">
            <button className="font-semibold text-[#0f4c81] flex items-center gap-2 hover:text-[#063362]">
              <DownloadIcon />
              Download the Full Document
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default LatestNewsComponent;
