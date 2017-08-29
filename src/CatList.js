import React from "react"

class CatList extends React.Component {

  render(){

    const cats = this.props.catPics.map((cat, index) => <img src={cat.url} alt="cat." key={index}/>)

    return (
    <div>
      {cats}
    </div>
  )
  }
}

export default CatList;
