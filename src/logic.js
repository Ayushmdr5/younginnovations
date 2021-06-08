const silhouette =
  "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg";

const logic = (currIndex, priority, imgArr, counter) => {
  // if none of source has valid url it returns silhouette
  if (counter === 0) {
    return { src: silhouette, ind: currIndex };
  }

  for (let i = currIndex; i <= priority.length; i++) {
    //   if photo from all valid source are not working, show photo from undefined source (if any)
    if (i === priority.length) {
      for (let j = 0; j < imgArr.length; j++) {
        if (!priority.includes(imgArr[j].source)) {
          return { src: imgArr[j].url, ind: i };
        }
      }
    }
    // returns url and index of matched source
    for (let j = 0; j < imgArr.length; j++) {
      if (imgArr[j].source === priority[i]) {
        return { src: imgArr[j].url, ind: i };
      }
    }
  }
};

export default logic;
