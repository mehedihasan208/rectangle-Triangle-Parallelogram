// frist one work of Triangle
function CalculateTriangleArea(){
    const calculateFild = document.getElementById('calculator-title')
   const calculateFildString = calculateFild.value;
   const base = parseFloat(calculateFildString)
   console.log(base)
//    second other one 
const hightFild = document.getElementById('triangle-hight')
const hightFildString = hightFild.value
const hight = parseFloat(hightFildString)
// it is third part 
const area = 0.5 * base * hight
console.log(area)
// area calculation part 
  const Totalarea = document.getElementById('triangle-area')
  Totalarea.innerText = area

}

// it is two work of Triangle are 
// step 1 
function CalculateRectangleArea(){
const rectangleFild = document.getElementById('rectangle-title')
const rectangleString = rectangleFild.value;
const rect = parseFloat(rectangleString)

// step 2 
const rectangleHight = document.getElementById('rectangle-hight')
const retangleHightString = rectangleHight.value;
const react = parseFloat(retangleHightString)
// step 3 
const reArea = rect * react;
console.log(reArea)

const TotaRectangle = document.getElementById('rectangle-area')
TotaRectangle.innerText = reArea
}