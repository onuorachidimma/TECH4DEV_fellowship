var imageSlides = document.getElementById('sliding_img')
var Next = document.getElementById('right_angle')
var Previous = document.getElementById('left_angle')
var ImageNum = document.getElementById('img_num')
var imageArray = ['assets/images/image 3 (1).png', 'assets/images/image 2.png', 'assets/images/image 4.png', 'assets/images/image 5.png', 'assets/images/image 6.png', 'assets/images/image 7.png', 'assets/images/image 8.png', 'assets/images/image 9.png', 'assets/images/image 10.png', 'assets/images/image 11.png']

var Imagecounter =['Imagen 1','Imagen 2','Imagen 3','Imagen 4','Imagen 5','Imagen 6','Imagen 7','Imagen 8','Imagen 9','Imagen 10']
var startIndex = 0;
var CountIndex = 0;

function NextImages(){
    imageSlides.setAttribute("src", imageArray[startIndex]);
    NextCount();
    startIndex++;
    if (startIndex > 9) {
        startIndex = 0;
    }
}
function PreviousImages(){
    imageSlides.setAttribute("src", imageArray[startIndex]);
    PreviousCount();
    startIndex--;
    if (startIndex == 0) {
        startIndex = 9;
    }
}
function NextCount(){
    ImageNum.textContent = Imagecounter[CountIndex];
    CountIndex++;
    if (CountIndex > 9) {
        CountIndex = 0;
    }
}
function PreviousCount(){
    ImageNum.textContent = Imagecounter[CountIndex];
    CountIndex--;
    if (CountIndex < 0) {
        CountIndex = 9;
    }
}

// Next.onclick = NextImages;
Next.onclick = function(event) {
    NextImages();
    event.preventDefault(); // Prevent the default behavior of the anchor element which scrolls up the pag anytime I click the next icon
  };
Previous.onclick = function(event) {
    PreviousImages();
    event.preventDefault(); 
  };