// link js file into an html before end of body tag

//  Select body
const bodyElement = document.querySelector("body");

// now add Event listener

bodyElement.addEventListener("mousemove", (e) => {
  // console.log("Mouse is moved~"); just for checking
  // now we want x and y positions
  //    console.log(e.offsetX); left to right it is increase
  //    console.log(e.offsetY); top to bottom  it is increase
  //    console.log(e.offsetY); top to bottom  it is increase

  const x_position = e.offsetX;
  const y_position = e.offsetY;

  //    now create a new span in after      making we append in body so that in every position heart is making
  const new_Span_Elements = document.createElement("span");

  //   now add position in span and also write px , px is compulusory

  new_Span_Elements.style.left = x_position + "px";
  new_Span_Elements.style.top = y_position + "px";

  //   but you saw problem here it is intersect theriself and it is not good and also overflow problem

  //  so go to css and pointet_event to none

  //

  // now append
  bodyElement.append(new_Span_Elements);

  setTimeout(() => {
    new_Span_Elements.remove();
  }, 3000);

  //    for making different sze of heart we used a math.random
  const size=Math.random()*100

  new_Span_Elements.style.width=size+"px"
  new_Span_Elements.style.height=size+"px"
//   after this remove span in html
});
