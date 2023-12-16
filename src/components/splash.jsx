// Lavet af Victoria

import lottieOne from "../json/book.json"
import lottieTwo from "../json/bookStack.json"
import lottieThree from "../json/space.json"
import lottieFour from "../json/reading.json"
import lottieFive from "../json/waving.json"
import lottieSix from "../json/CloudReading.json"

import Lottie from "lottie-react"


export const Book = () => <Lottie animationData={lottieOne} loop={true}/>
export const BookStack = () => <Lottie animationData={lottieTwo} loop={true}/>
export const Space = () => <Lottie animationData={lottieThree} loop={true}/>
export const Reading = () => <Lottie animationData={lottieFour} loop={true}/> 
export const Waving = () => <Lottie animationData={lottieFive} loop={true}/>
export const CloudReading = () => <Lottie animationData={lottieSix} loop={true}/>       
  