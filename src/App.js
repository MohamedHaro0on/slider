import './App.css';
import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import Data from "./data";


const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let Slider = setInterval(() => {
      IncreamentHandler()
    }, 5000)

    return () => clearInterval(Slider);
  })

  const IncreamentHandler = () => {
    setIndex(prevState => (prevState + 1) % Data.length);
  }
  const DecreamentHandler = () => {
    setIndex(prevState => (prevState - 1 + Data.length) % Data.length);
  }
  let Output = [], ClassName = null;
  Data.map(({ name, image, title, quote , id}, idx) => {
    ClassName = index === idx ? "Active" : (idx === index - 1 || (index === 0 && idx === Data.length - 1)) ? "LastSlide" : "NextSlide";

    return Output.push(
      <article className={`Content ${ClassName}`} key = {id}>
        {/* left Arrow */}
        <div className="ArrowsContainer">
          <button onClick={DecreamentHandler} aria-label = "to the Left"><FiChevronLeft /></button>
        </div>
        {/* Content */}
        <div className="Info">
          <img src={image} title={name} alt={name} />
          <h2 className="Name">{name}</h2>
          <p className="Title">{title}</p>
          <p className="Quote">{quote}</p>
          <FaQuoteRight />
        </div>
        {/* Right Arrow */}
        <div className="ArrowsContainer">
          <button onClick={IncreamentHandler} aria-label = "To the Right"><FiChevronRight /></button>
        </div>

      </article>
    )
  })

  return (
    <main className="MainContainer">
      <h1 className="MainHeading">Reviews</h1>
      <section className="SectionCenter">
        {Output}
      </section>
    </main>
  )
}

export default App;
