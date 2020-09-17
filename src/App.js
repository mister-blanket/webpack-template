import React from 'react'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
      <h1>Congratulations to the new <b>#SallyCrew!</b></h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>

      <h4>View Winner by Category:</h4>
      <div class="view-by-category">
          <a href="#" class="category-button" id="color"><p>Hair Color</p></a>
          <a href="#" class="category-button" id="texture"><p>Texture</p></a>
          <a href="#" class="category-button" id="nails"><p>Nails</p></a>
      </div>
      </>
    )
  }
}

export default App
