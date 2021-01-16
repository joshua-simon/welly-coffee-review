export const convertToStars = (stars) => {
    const num = parseInt(stars);
    const star = <i>★</i>;
    const arr = [];
    for (let i = 0; i <= num; i++) {
      if (arr.length < num) {
        arr.push(star);
      }
    }
    return arr;
  }

  
  export const averageStarRating = (data) => {
    if(data.length){
    let arr = data.map(item => parseInt(item.stars))
    let total = arr.reduce((x,y) => x+y)
    let average = total/data.length
    let roundedAverage = Math.round(average)
    let averageStars = convertToStars(roundedAverage)
    return averageStars
    } else return null
  }



