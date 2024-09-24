import { DownloadIcon } from "../assets/svg-icons";
import { downloadNewsArticles } from "../services/services";

const LatestNewsComponent = () => {
  
  const printFormTemplate = async (file: string) => {
    try {
      await downloadNewsArticles(file);
    } catch (error: any) {
      throw error;
    }
  };

  return (
    <section className="container mx-auto py-10 px-10">
      <h2 className="text-4xl font-bold text-[#0a0391] text-center mb-10">
        Latest News
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <article className="bg-white p-4 shadow rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#0f4c81]">
              THE HIDDEN DANGERS OF PUBLIC WI-FI: WHY YOU SHOULD THINK TWICE
              BEFORE CONNECTING
            </h3>
            <p className="text-gray-600 mt-2">
              In our increasingly connected world, public Wi-Fi networks are
              everywhere— cafes, airports, hotels, and even public parks offer
              free internet access. While it's convenient to check emails,
              browse social media, or get some work done on the go, using public
              Wi-Fi comes with significant risks that many people are unaware
              of....
            </p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => {
                printFormTemplate("hidden-dangers-of-public-wifi");
              }}
              className="font-semibold flex justify-end text-[#0f4c81] items-center gap-2"
            >
              <DownloadIcon />
              Download the Full Documents
            </button>
          </div>
        </article>

        <article className="bg-white p-4 shadow rounded-lg flex flex-col justify-between">
          {/* <h3 className="text-2xl font-bold text-[#0f4c81]">Article Title 2</h3>
          <p className="text-gray-600 mt-2">Brief summary of the article...</p> */}
          <div className="flex flex-col gap-4">
            <div className="bg-cover w-96 h-80 min-h-[6rem] rounded-xl bg-[url('src/assets/images/news-article-02.png')]"></div>
          </div>
          <button
            onClick={() => {
              printFormTemplate("hackers-exploit-default-credentials");
            }}
            className="font-semibold flex justify-end text-[#0f4c81] items-center gap-2"
          >
            <DownloadIcon />
            Download the Full Documents
          </button>
        </article>

        <article className="bg-white p-4 shadow rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#0f4c81] py-2">
              Phishing and Social Engineering
            </h3>
            <div className="bg-cover w-full h-80 min-h-[6rem] rounded-xl bg-[url('src/assets/images/article-03.png')]"></div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => {
                printFormTemplate("phishing-and-social-engineering");
              }}
              className="font-semibold flex justify-end text-[#0f4c81] items-center gap-2"
            >
              <DownloadIcon />
              Download the Full Documents
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default LatestNewsComponent;
