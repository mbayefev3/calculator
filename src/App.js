import React from 'react'

import data from './Data'
import Travel from './Travel'
const App = () => {

  return (
    <div>
      <h1>Traveling Angency</h1>

      {
        data.map(dat => {

          return (
            <Travel location={dat.location}
              description={dat.description}
              imageUrl={dat.imageUrl}
              googleMapsUrl={dat.googleMapsUrl}

              title={dat.title}
            />
          )
        })
      }
    </div>
  )
}



export default App