const sliderItems = document.querySelectorAll(".slider-item");
const imageContainers = document.querySelectorAll(".image-container");
const sliderImages = document.querySelectorAll(".slider-image");
const sliderGroupDescs = document.querySelectorAll(".slider-group-desc");
const sliderPaginationButtons = document.querySelectorAll(".slider-pagination-button");

const backgroundPink = document.querySelector(".background-pink");
const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");


sliderNext.onclick = function () {

  if (backgroundPink.classList.contains("background-pink")) {
    backgroundPink.classList.replace("background-pink", "background-blue")
  } else if (backgroundPink.classList.contains("background-blue")) {
    backgroundPink.classList.replace("background-blue", "background-yellow")
  } else if (backgroundPink.classList.contains("background-yellow")) {
    backgroundPink.classList.replace("background-yellow", "background-pink")
  }

  for (let sliderItem of sliderItems) {
    if (sliderItem.classList.contains("slider-item-current")) {
      sliderItem.classList.replace("slider-item-current", "slider-item-prev")
    } else if (sliderItem.classList.contains("slider-item-prev")) {
      sliderItem.classList.replace("slider-item-prev", "slider-item-next")
    } else if (sliderItem.classList.contains("slider-item-next")) {
      sliderItem.classList.replace("slider-item-next", "slider-item-current")
    }
  }

  for (let imageContainer of imageContainers) {
    if (imageContainer.classList.contains("image-container-current")) {
      imageContainer.classList.replace("image-container-current", "image-container-prev")
    } else if (imageContainer.classList.contains("image-container-prev")) {
      imageContainer.classList.replace("image-container-prev", "image-container-next")
    } else if (imageContainer.classList.contains("image-container-next")) {
      imageContainer.classList.replace("image-container-next", "image-container-current")
    }
  }

  for (let sliderImage of sliderImages) {
    if (sliderImage.classList.contains("slider-image-current")) {
      sliderImage.classList.replace("slider-image-current", "slider-image-prev")
    } else if (sliderImage.classList.contains("slider-image-prev")) {
      sliderImage.classList.replace("slider-image-prev", "slider-image-next")
    } else if (sliderImage.classList.contains("slider-image-next")) {
      sliderImage.classList.replace("slider-image-next", "slider-image-current")
    }
  }

  for (let sliderPaginationButton of sliderPaginationButtons) {
    if (sliderPaginationButton.classList.contains("slider-pagination-button-current")) {
      sliderPaginationButton.classList.replace("slider-pagination-button-current", "slider-pagination-button-prev")
    } else if (sliderPaginationButton.classList.contains("slider-pagination-button-prev")) {
      sliderPaginationButton.classList.replace("slider-pagination-button-prev", "slider-pagination-button-next")
    } else if (sliderPaginationButton.classList.contains("slider-pagination-button-next")) {
      sliderPaginationButton.classList.replace("slider-pagination-button-next", "slider-pagination-button-current")
    }
  }

  for (let sliderGroupDesc of sliderGroupDescs) {
    if (sliderGroupDesc.classList.contains("slider-group-desc-current")) {
      sliderGroupDesc.classList.remove("slider-group-desc-current")
      sliderGroupDesc.classList.add("slider-group-desc-prev", "visually-hidden")
    } else if (sliderGroupDesc.classList.contains("slider-group-desc-prev")) {
      sliderGroupDesc.classList.remove("slider-group-desc-prev")
      sliderGroupDesc.classList.add("slider-group-desc-next", "visually-hidden")
    } else if (sliderGroupDesc.classList.contains("slider-group-desc-next")) {
      sliderGroupDesc.classList.remove("slider-group-desc-next", "visually-hidden")
      sliderGroupDesc.classList.add("slider-group-desc-current")
    }
  }
}

sliderPrev.onclick = function () {

  if (backgroundPink.classList.contains("background-pink")) {
    backgroundPink.classList.replace("background-pink", "background-yellow")
  } else if (backgroundPink.classList.contains("background-yellow")) {
    backgroundPink.classList.replace("background-yellow", "background-blue")
  } else if (backgroundPink.classList.contains("background-blue")) {
    backgroundPink.classList.replace("background-blue", "background-pink")
  }

  for (let sliderItem of sliderItems) {
    if (sliderItem.classList.contains("slider-item-current")) {
      sliderItem.classList.replace("slider-item-current", "slider-item-next")
    } else if (sliderItem.classList.contains("slider-item-next")) {
      sliderItem.classList.replace("slider-item-next", "slider-item-prev")
    } else if (sliderItem.classList.contains("slider-item-prev")) {
      sliderItem.classList.replace("slider-item-prev", "slider-item-current")
    }
  }

  for (let imageContainer of imageContainers) {
    if (imageContainer.classList.contains("image-container-current")) {
      imageContainer.classList.replace("image-container-current", "image-container-next")
    } else if (imageContainer.classList.contains("image-container-next")) {
      imageContainer.classList.replace("image-container-next", "image-container-prev")
    } else if (imageContainer.classList.contains("image-container-prev")) {
      imageContainer.classList.replace("image-container-prev", "image-container-current")
    }
  }

  for (let sliderImage of sliderImages) {
    if (sliderImage.classList.contains("slider-image-current")) {
      sliderImage.classList.replace("slider-image-current", "slider-image-next")
    } else if (sliderImage.classList.contains("slider-image-next")) {
      sliderImage.classList.replace("slider-image-next", "slider-image-prev")
    } else if (sliderImage.classList.contains("slider-image-prev")) {
      sliderImage.classList.replace("slider-image-prev", "slider-image-current")
    }
  }

  for (let sliderPaginationButton of sliderPaginationButtons) {
    if (sliderPaginationButton.classList.contains("slider-pagination-button-current")) {
      sliderPaginationButton.classList.replace("slider-pagination-button-current", "slider-pagination-button-next")
    } else if (sliderPaginationButton.classList.contains("slider-pagination-button-next")) {
      sliderPaginationButton.classList.replace("slider-pagination-button-next", "slider-pagination-button-prev")
    } else if (sliderPaginationButton.classList.contains("slider-pagination-button-prev")) {
      sliderPaginationButton.classList.replace("slider-pagination-button-prev", "slider-pagination-button-current")
    }
  }

  for (let sliderGroupDesc of sliderGroupDescs) {
    if (sliderGroupDesc.classList.contains("slider-group-desc-current")) {
      sliderGroupDesc.classList.remove("slider-group-desc-current")
      sliderGroupDesc.classList.add("slider-group-desc-next", "visually-hidden")
    } else if (sliderGroupDesc.classList.contains("slider-group-desc-next")) {
      sliderGroupDesc.classList.remove("slider-group-desc-next")
      sliderGroupDesc.classList.add("slider-group-desc-prev", "visually-hidden")
    } else if (sliderGroupDesc.classList.contains("slider-group-desc-prev")) {
      sliderGroupDesc.classList.remove("slider-group-desc-prev", "visually-hidden")
      sliderGroupDesc.classList.add("slider-group-desc-current")
    }
  }
}
