// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(length,width,height){
        this.length = length;
        this.width = width;
        this.height = height;  
    }

    volume = function(length,width,height){
        return length * width * height;
      }

      surfaceArea(length,width,height){
        return 2 * (length * width + length * height + width * height);
      }
  }

  const cuboid = new CuboidMaker(4,5,5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(4,5,5)); // 100
console.log(cuboid.surfaceArea(4,5,5)); // 130

