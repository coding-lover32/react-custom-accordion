import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useState } from "react";

const slides = [
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/pure-nature-landscape-single-tree-in-green-field-free-photo.jpg?w=600&quality=80",
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  "https://img.freepik.com/premium-photo/panorama-small-tree-growing-with-sunrise-generative-ai_786587-5763.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701129600&semt=ais",
  "https://st3.depositphotos.com/1021722/33394/i/450/depositphotos_333943612-stock-photo-beautiful-nature-countryside-landscape-spring.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(slides.length - 1);
    }
  };

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-10">
      <h1 className="text-2xl md:text-3xl text-center font-medium text-gray-900 mt-10">
        Project: Carousel
      </h1>
      <div className="flex justify-between items-center gap-4 md:gap-6 my-8">

        {/* Previous Button */}
        <div>
          <button
            onClick={handlePrevious}
            className="text-gray-400 hover:text-gray-900"
          >
            <ArrowLeftCircle size={35} />
          </button>
        </div>

        {/* Slider Image */}
        <div className="w-full max-w-xl relative flex overflow-hidden">
          {
            slides.map((slide, idx) => idx == index && <img 
            key={idx}
            src={slide} 
            alt="" 
            className={`w-full h-auto transition-transform duration-300 ${idx === index ? 'transform translate-x-0' : ''}`} />)
          }
          {/* Dot Icons */}
          <div className="flex justify-center items-center gap-1 absolute bottom-2 w-full">
            {
              slides.map((slide, idx) => <p
                key={idx}
                className={`text-gray-400 text-3xl transition-all duration-200 ${idx === index && 'text-white'}`}
              >•</p>)
            }
          </div>
        </div>

        {/* Next Button */}
        <div>
          <button
            onClick={handleNext}
            className="text-gray-400 hover:text-gray-900"
          >
            <ArrowRightCircle size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
