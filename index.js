//Find number that's between 10px & 50px below calculated container width
//..that's divisible by 3

//The calculated container width is set at 90% of the different media widthes 

function dynamicFlagSizeCalculator(num) {
  const fifty_px_below = num - 50;
  const ten_px_below = num - 10;

  for (let index = ten_px_below; index >= fifty_px_below; index--) {
    if((index % 3 === 0) && (index % 5 === 0)) {
      
      const height = index * (2/3);
      return [index, height];
    }
  }
} 



function getViewportWidth() {
  const currentViewportWidth = window.innerWidth;
  return currentViewportWidth;
}

const viewportWidth = window.addEventListener('resize', getViewportWidth);
console.log(viewportWidth);

//Listen for viewport width change before calculating the various container and stripe sizes

const flagWidthAndHeight = dynamicFlagSizeCalculator(viewportWidth);


// Select the root element prior to assigning the new containerWidth & containerHeight values
const containerAndStripeSizes = document.querySelector(':root');

function assignCalculatedFlagSizeToCssVariables(flagWidthAndHeight) {
  containerAndStripeSizes.style.setProperty('--containerWidth', flagWidthAndHeight[0]);
  containerAndStripeSizes.style.setProperty('--containerHeight', flagWidthAndHeight[1]);
}
