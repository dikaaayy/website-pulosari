export const CarouselSetting = {
  dots: false,
  infinite: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: true,
      },
    },
  ],
};

export const CarouselMobileSetting = {
  dots: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
      },
    },
  ],
};

export const CarouselModalSetting = {
  dots: false,
  infinite: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function getRandomThreeFromArray(arr) {
  // Sort the array randomly using Math.random()
  const shuffledArray = arr.sort(() => Math.random() - 0.5);

  // Return the first three elements from the shuffled array
  return shuffledArray.slice(0, 3);
}

export function rearrangeArray(arr, targetIndex) {
  if (arr.length < 2 || targetIndex < 0 || targetIndex >= arr.length) {
    // Handle invalid inputs or arrays with less than 2 elements
    return arr;
  }

  // Extract the elements before and after the target element
  const beforeTarget = arr.slice(0, targetIndex);
  const afterTarget = arr.slice(targetIndex + 1);

  // Rearrange the array by concatenating the elements after the target followed by the target element and then elements before the target
  const rearrangedArray = afterTarget.concat(arr[targetIndex], beforeTarget);

  return rearrangedArray;
}
