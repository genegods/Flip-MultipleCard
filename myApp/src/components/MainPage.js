import React, {useState} from 'react'
import {CardFrontData} from '../data/CardData'
import {CardBackData} from '../data/CardData'

const MainPage = () => {

    const [activeCard, setActiveCard] = useState(false)

    const handleFlip = () => {
        setActiveCard(!activeCard)
      }
  return (
    <React.Fragment>
    <main>
      <div className="centered md:w-8/12 md:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4" >
            {
                CardFrontData.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="w-60 h-96 card">
                                <img src={item.img} alt='image' className='w-60 h-96 front'/>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className="absolute top-0 grid grid-cols-2 md:grid-cols-4">
            {
                CardBackData.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="w-60 h-96 card">
                                <img src={item.img} alt='image' className='w-60 h-96 back'/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
       
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage