
import { ArrowLeft } from "lucide-react";

const InsideCurationPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section*/}
      <div className="mb-8">
        <button className="flex items-center text-gray-600 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back</span>
        </button>
        <h1 className="text-2xl font-semibold mb-2">Moodboard Name 1</h1>
        <p className="text-gray-600">Name of the creator</p>
      </div>
      {/* Hero Banner */}
      <div className="w-full h-64 bg-[#A3A3A3] rounded-lg mb-8" />

      {/* Description */}
      <p className="text-gray-700 mb-8">
        janhvi kapoor is definitely owning the right to be one of the new gen
        'it girls'. her style is all about going extravagant even for the
        simplest of occasions, experimenting with new textures, and never shying
        away from a pop of drama. she makes even the simplest outfits feel bold,
        so let's break it down.
      </p>

      {/* Category 1 */}

      <div className="w-full mb-10 flex flex-col sm:flex-row gap-10">
      <h3 className="text-xl text-[#030712] block sm:hidden">Category Name 1</h3>
        <div className="w-full sm:w-1/3 sm:h-[450px] aspect-square bg-[#D9D9D9] rounded-xl" />
        <div className="w-full sm:w-2/3">
          <div className="w-full">
            <h3 className="text-xl text-[#030712] hidden sm:block">Category Name 1</h3>
            <p className="text-gray-700 text-justify mb-8">
              janhvi kapoor is definitely owning the right to be one of the new
              gen 'it girls'. her style is all about going extravagant even for
              the simplest of occasions, experimenting with new textures, and
              never shying away from a pop of drama. she makes even the simplest
              outfits feel bold,
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="max-w-[360px]">
              <div className="w-full min-w-[300px] sm:w-[360px] aspect-[4/5] bg-[#D9D9D9] rounded-xl" />
              <div className="flex flex-col sm:flex-row mt-4 justify-between">
                <div>
                  <p className="text-gray-900 text-xl">Name of the cloth</p>
                  <div className="flex justify-between items-start pr-16 sm:pr-8">
                    <p className="text-red">$1200</p>
                    <p className="text-gray-400 line-through">$1500</p>
                  </div>
                </div>
                <button className="flex items-center justify-center bg-black h-[40px] mt-2 sm:mt-0 sm:h-auto text-white text-base py-3 px-6 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="max-w-[360px]">
              <div className="w-full sm:w-[360px] aspect-[4/5] bg-[#D9D9D9] rounded-xl" />
              <div className="flex flex-col sm:flex-row mt-4 justify-between">
                <div>
                  <p className="text-gray-900 text-xl">Name of the cloth</p>
                  <div className="flex justify-between items-start pr-16 sm:pr-8">
                    <p className="text-red">$1200</p>
                    <p className="text-gray-400 line-through">$1500</p>
                  </div>
                </div>
                <button className="flex items-center justify-center bg-black h-[40px] mt-2 sm:mt-0 sm:h-auto text-white text-base py-3 px-6 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="max-w-[360px]">
              <div className="w-full sm:w-[360px] aspect-[4/5] bg-[#D9D9D9] rounded-xl" />
              <div className="flex flex-col sm:flex-row mt-4 justify-between">
                <div>
                  <p className="text-gray-900 text-xl">Name of the cloth</p>
                  <div className="flex justify-between items-start pr-16 sm:pr-8">
                    <p className="text-red">$1200</p>
                    <p className="text-gray-400 line-through">$1500</p>
                  </div>
                </div>
                <button className="flex items-center justify-center bg-black h-[40px] mt-2 sm:mt-0 sm:h-auto text-white text-base py-3 px-6 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="max-w-[360px]">
              <div className="w-full sm:w-[360px] aspect-[4/5] bg-[#D9D9D9] rounded-xl" />
              <div className="flex flex-col sm:flex-row mt-4 justify-between">
                <div>
                  <p className="text-gray-900 text-xl">Name of the cloth</p>
                  <div className="flex justify-between items-start pr-16 sm:pr-8">
                    <p className="text-red">$1200</p>
                    <p className="text-gray-400 line-through">$1500</p>
                  </div>
                </div>
                <button className="flex items-center justify-center bg-black h-[40px] mt-2 sm:mt-0 sm:h-auto text-white text-base py-3 px-6 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category 2 */}

      <div className="w-full mb-10 flex flex-col-reverse sm:flex-row gap-10">
      
        <div className="w-full sm:w-2/3">
          <div className="w-full">
            <h3 className="text-xl text-[#030712] hidden sm:block">Category Name 1</h3>
            <p className="text-gray-700 text-justify mb-8">
              janhvi kapoor is definitely owning the right to be one of the new
              gen 'it girls'. her style is all about going extravagant even for
              the simplest of occasions, experimenting with new textures, and
              never shying away from a pop of drama. she makes even the simplest
              outfits feel bold,
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="max-w-[360px]">
              <div className="w-full sm:w-[360px] aspect-[4/5] bg-[#D9D9D9] rounded-xl" />
              <div className="flex flex-col sm:flex-row mt-4 justify-between">
                <div>
                  <p className="text-gray-900 text-xl">Name of the cloth</p>
                  <div className="flex justify-between items-start pr-16 sm:pr-8">
                    <p className="text-red">$1200</p>
                    <p className="text-gray-400 line-through">$1500</p>
                  </div>
                </div>
                <button className="flex items-center justify-center bg-black h-[40px] mt-2 sm:mt-0 sm:h-auto text-white text-base py-3 px-6 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="max-w-[360px]">
              <div className="w-full sm:w-[360px] aspect-[4/5] bg-[#D9D9D9] rounded-xl" />
              <div className="flex flex-col sm:flex-row mt-4 justify-between">
                <div>
                  <p className="text-gray-900 text-xl">Name of the cloth</p>
                  <div className="flex justify-between items-start pr-16 sm:pr-8">
                    <p className="text-red">$1200</p>
                    <p className="text-gray-400 line-through">$1500</p>
                  </div>
                </div>
                <button className="flex items-center justify-center bg-black h-[40px] mt-2 sm:mt-0 sm:h-auto text-white text-base py-3 px-6 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="max-w-[360px]">
              <div className="w-full sm:w-[360px] aspect-[4/5] bg-[#D9D9D9] rounded-xl" />
              <div className="flex flex-col sm:flex-row mt-4 justify-between">
                <div>
                  <p className="text-gray-900 text-xl">Name of the cloth</p>
                  <div className="flex justify-between items-start pr-16 sm:pr-8">
                    <p className="text-red">$1200</p>
                    <p className="text-gray-400 line-through">$1500</p>
                  </div>
                </div>
                <button className="flex items-center justify-center bg-black h-[40px] mt-2 sm:mt-0 sm:h-auto text-white text-base py-3 px-6 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="max-w-[360px]">
              <div className="w-full sm:w-[360px] aspect-[4/5] bg-[#D9D9D9] rounded-xl" />
              <div className="flex flex-col sm:flex-row mt-4 justify-between">
                <div>
                  <p className="text-gray-900 text-xl">Name of the cloth</p>
                  <div className="flex justify-between items-start pr-16 sm:pr-8">
                    <p className="text-red">$1200</p>
                    <p className="text-gray-400 line-through">$1500</p>
                  </div>
                </div>
                <button className="flex items-center justify-center bg-black h-[40px] mt-2 sm:mt-0 sm:h-auto text-white text-base py-3 px-6 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 sm:h-[450px] aspect-square bg-[#D9D9D9] rounded-xl" />
        <h3 className="text-xl text-[#030712] block sm:hidden">Category Name 1</h3>
      </div>

      {/* <div className="w-full mb-10 flex gap-10">
        <div className="w-2/3">
          <div className="w-full">
            <h3 className="text-xl text-[#030712]">Category Name 1</h3>
            <p className="text-gray-700 mb-8">
              janhvi kapoor is definitely owning the right to be one of the new
              gen 'it girls'. her style is all about going extravagant even for
              the simplest of occasions, experimenting with new textures, and
              never shying away from a pop of drama. she makes even the simplest
              outfits feel bold, so let's break it down. janhvi kapoor is
              definitely owning the right to be one of the new gen 'it girls'.
              her style is all about going extravagant even for the simplest of
              occasions, experimenting with new textures,
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="max-w-[360px]">
                <div className="w-[360px] h-[450px] bg-[#D9D9D9] rounded-xl" />
                <div className="flex mt-4 justify-between">
                    <div className="">
                        <p className="text-gray-900 text-xl">Name of the cloth</p>
                        <div className="flex justify-between items-start">
                        <p className="text-red">$1200</p>
                        <p className="text-gray-400 line-through">$1500</p>
                        </div>
                        
                    </div>
                    <button className="bg-black text-white text-base py-3 px-6 rounded-xl">Buy Now</button>
                </div>
            </div>
            <div className="max-w-[360px]">
                <div className="w-[360px] h-[450px] bg-[#D9D9D9] rounded-xl" />
                <div className="flex mt-4 justify-between">
                    <div className="">
                        <p className="text-gray-900 text-xl">Name of the cloth</p>
                        <div className="flex justify-between items-start">
                        <p className="text-red">$1200</p>
                        <p className="text-gray-400 line-through">$1500</p>
                        </div>
                        
                    </div>
                    <button className="bg-black text-white text-base py-3 px-6 rounded-xl">Buy Now</button>
                </div>
            </div>
            <div className="max-w-[360px]">
                <div className="w-[360px] h-[450px] bg-[#D9D9D9] rounded-xl" />
                <div className="flex mt-4 justify-between">
                    <div className="">
                        <p className="text-gray-900 text-xl">Name of the cloth</p>
                        <div className="flex justify-between items-start">
                        <p className="text-red">$1200</p>
                        <p className="text-gray-400 line-through">$1500</p>
                        </div>
                        
                    </div>
                    <button className="bg-black text-white text-base py-3 px-6 rounded-xl">Buy Now</button>
                </div>
            </div>
            <div className="max-w-[360px]">
                <div className="w-[360px] h-[450px] bg-[#D9D9D9] rounded-xl" />
                <div className="flex mt-4 justify-between">
                    <div className="">
                        <p className="text-gray-900 text-xl">Name of the cloth</p>
                        <div className="flex justify-between items-start">
                        <p className="text-red">$1200</p>
                        <p className="text-gray-400 line-through">$1500</p>
                        </div>
                        
                    </div>
                    <button className="bg-black text-white text-base py-3 px-6 rounded-xl">Buy Now</button>
                </div>
            </div>

          </div>
        </div>

        <div className="w-1/3 h-[450px] bg-[#D9D9D9] rounded-xl" />
      </div> */}
    </div>
  );
};

export default InsideCurationPage;
