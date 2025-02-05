import { ChevronLeft } from "lucide-react";

const SingleCuration = () => {
  return (
    <div>
      <div className="max-w-7xl h-full rounded-xl flex flex-col mx-auto mt-5">
        {/* Heading */}
        <div className="flex flex-col space-y-6 pl-5">
          <div className="flex opacity-50">
            <ChevronLeft />
            <span>Back</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Moodboard Name 1</span>
            <span className="opacity-50">Name of the creator</span>
          </div>
        </div>

        {/* Banner */}

        <div className="bg-[#D9D9D9] rounded-xl h-[300px] mt-5 mb-3 mx-5">
          
        </div>
        <span className="opacity-50 pl-5">
          janhvi kapoor is definitely owning the right to be one of the new gen
          ‘it girls’. her style is all about going extravagant even for the
          simplest of occasions, experimenting with new textures, and never
          shying away from a pop of drama. she makes even the simplest outfits
          feel bold, so let’s break it down.
        </span>

        {/* Grid Section */}

        <div className="h-[1120px] mt-5 rounded-xl flex justify-center items-center gap-4">
          <div className="w-[35%] h-full flex justify-center">
            <div className="bg-[#D9D9D9] w-[400px] h-[450px] rounded-xl"></div>
          </div>
          <div className="w-[65%] h-full flex flex-col rounded-xl gap-4">
            <div className="h-[160px] rounded-xl flex flex-col">
              <span className="text-xl font-bold">Category Name 1</span>
              <span className="opacity-50 pr-5">
                janhvi kapoor is definitely owning the right to be one of the
                new gen ‘it girls’. her style is all about going extravagant
                even for the simplest of occasions, experimenting with new
                textures, and never shying away from a pop of drama. she makes
                even the simplest outfits feel bold, so let’s break it down.
                janhvi kapoor is definitely owning the right to be one of the
                new gen ‘it girls’. her style is all about going extravagant
                even for the simplest of occasions, experimenting with new
                textures,
              </span>
            </div>
            <div className="h-full rounded-xl">
              <div className="grid grid-cols-2 place-content-stretch gap-4">
              <div className="w-[380px] h-[450px] rounded-xl mb-5">
                  <div className="flex flex-col">
                    <div className="bg-[#D9D9D9] h-[400px] rounded-xl"></div>
                    <div className="h-[50px] flex justify-between mt-3">
                      <div className="flex flex-col">
                        <div className="text-sm font-bold">
                          Name of the cloth
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold">$1200</div>
                          <div className="text-sm font-bold opacity-50 pr-10">
                            $00
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <button className="bg-black text-white px-5 py-3 rounded-xl">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[380px] h-[450px] rounded-xl mb-5">
                  <div className="flex flex-col">
                    <div className="bg-[#D9D9D9] h-[400px] rounded-xl"></div>
                    <div className="h-[50px] flex justify-between mt-3">
                      <div className="flex flex-col">
                        <div className="text-sm font-bold">
                          Name of the cloth
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold">$1200</div>
                          <div className="text-sm font-bold opacity-50 pr-10">
                            $00
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <button className="bg-black text-white px-5 py-3 rounded-xl">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[380px] h-[450px] rounded-xl mb-5">
                  <div className="flex flex-col">
                    <div className="bg-[#D9D9D9] h-[400px] rounded-xl"></div>
                    <div className="h-[50px] flex justify-between mt-3">
                      <div className="flex flex-col">
                        <div className="text-sm font-bold">
                          Name of the cloth
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold">$1200</div>
                          <div className="text-sm font-bold opacity-50 pr-10">
                            $00
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <button className="bg-black text-white px-5 py-3 rounded-xl">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[380px] h-[450px] rounded-xl mb-5">
                  <div className="flex flex-col">
                    <div className="bg-[#D9D9D9] h-[400px] rounded-xl"></div>
                    <div className="h-[50px] flex justify-between mt-3">
                      <div className="flex flex-col">
                        <div className="text-sm font-bold">
                          Name of the cloth
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold">$1200</div>
                          <div className="text-sm font-bold opacity-50 pr-10">
                            $00
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <button className="bg-black text-white px-5 py-3 rounded-xl">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCuration;
