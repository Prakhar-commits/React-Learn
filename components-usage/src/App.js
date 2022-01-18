import React from 'react';
import Comments from "./Comments" 
import Card from "./Card" 

const App = () => (
  <div className='ui comments'>
  <div className='ui dividing header'>Comments</div>

    <Card >
      <Comments img="https://ui-avatars.com/api/?name=Test1" name="Test1" day="Today" text="lorem ipsium" />
    </Card>
    <Card >
      <Comments img="https://ui-avatars.com/api/?name=Test1" name="Test1" day="Today" text="lorem ipsium" />
    </Card>
    <Card >
      <Comments img="https://ui-avatars.com/api/?name=Test1" name="Test1" day="Today" text="lorem ipsium" />
    </Card>
  
  </div>
)

export default App