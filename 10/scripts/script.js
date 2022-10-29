let sliderItems = document.querySelectorAll(".slider-item");
let imageContainers = document.querySelectorAll(".image-container");
let sliderImages = document.querySelectorAll(".slider-image");
let sliderGroupDescs = document.querySelectorAll(".slider-group-desc");
let sliderPaginationButtons = document.querySelectorAll(".slider-pagination-button");

let backgroundPink = document.querySelector(".background-pink");
let sliderNext = document.querySelector(".slider-next");
let sliderPrev = document.querySelector(".slider-prev");


sliderNext.onclick = function () {

  if (backgroundPink.classList.contains("background-pink")) {
    backgroundPink.classList.remove("background-pink")
    backgroundPink.classList.add("background-blue")
  } else if (backgroundPink.classList.contains("background-blue")) {
    backgroundPink.classList.remove("background-blue")
    backgroundPink.classList.add("background-yellow")
  } else if (backgroundPink.classList.contains("background-yellow")) {
    backgroundPink.classList.remove("background-yellow")
    backgroundPink.classList.add("background-pink")
  }

  for (let sliderItem of sliderItems) {
    if (sliderItem.classList.contains("slider-item-current")) {
      sliderItem.classList.remove("slider-item-current")
      sliderItem.classList.add("slider-item-prev")
    } else if (sliderItem.classList.contains("slider-item-prev")) {
      sliderItem.classList.remove("slider-item-prev")
      sliderItem.classList.add("slider-item-next")
    } else if (sliderItem.classList.contains("slider-item-next")) {
      sliderItem.classList.remove("slider-item-next")
      sliderItem.classList.add("slider-item-current")
    }
  }

  for (let imageContainer of imageContainers) {
    if (imageContainer.classList.contains("image-container-current")) {
      imageContainer.classList.remove("image-container-current")
      imageContainer.classList.add("image-container-prev")
    } else if (imageContainer.classList.contains("image-container-prev")) {
      imageContainer.classList.remove("image-container-prev")
      imageContainer.classList.add("image-container-next")
    } else if (imageContainer.classList.contains("image-container-next")) {
      imageContainer.classList.remove("image-container-next")
      imageContainer.classList.add("image-container-current")
    }
  }

  for (let sliderImage of sliderImages) {
    if (sliderImage.classList.contains("slider-image-current")) {
      sliderImage.classList.remove("slider-image-current")
      sliderImage.classList.add("slider-image-prev")
    } else if (sliderImage.classList.contains("slider-image-prev")) {
      sliderImage.classList.remove("slider-image-prev")
      sliderImage.classList.add("slider-image-next")
    } else if (sliderImage.classList.contains("slider-image-next")) {
      sliderImage.classList.remove("slider-image-next")
      sliderImage.classList.add("slider-image-current")
    }
  }

  for (let sliderPaginationButton of sliderPaginationButtons) {
    if (sliderPaginationButton.classList.contains("slider-pagination-button-current")) {
      sliderPaginationButton.classList.remove("slider-pagination-button-current")
      sliderPaginationButton.classList.add("slider-pagination-button-prev")
    } else if (sliderPaginationButton.classList.contains("slider-pagination-button-prev")) {
      sliderPaginationButton.classList.remove("slider-pagination-button-prev")
      sliderPaginationButton.classList.add("slider-pagination-button-next")
    } else if (sliderPaginationButton.classList.contains("slider-pagination-button-next")) {
      sliderPaginationButton.classList.remove("slider-pagination-button-next")
      sliderPaginationButton.classList.add("slider-pagination-button-current")
    }
  }

  for (let sliderGroupDesc of sliderGroupDescs) {
    if (sliderGroupDesc.classList.contains("slider-group-desc-current")) {
      sliderGroupDesc.classList.remove("slider-group-desc-current")
      sliderGroupDesc.classList.add("slider-group-desc-prev")
      sliderGroupDesc.classList.add("visually-hidden")
    } else if (sliderGroupDesc.classList.contains("slider-group-desc-prev")) {
      sliderGroupDesc.classList.remove("slider-group-desc-prev")
      sliderGroupDesc.classList.add("slider-group-desc-next")
      sliderGroupDesc.classList.add("visually-hidden")
    } else if (sliderGroupDesc.classList.contains("slider-group-desc-next")) {
      sliderGroupDesc.classList.remove("slider-group-desc-next")
      sliderGroupDesc.classList.add("slider-group-desc-current")
      sliderGroupDesc.classList.remove("visually-hidden")
    }
  }
}

sliderPrev.onclick = function () {

  if (backgroundPink.classList.contains("background-pink")) {
    backgroundPink.classList.remove("background-pink")
    backgroundPink.classList.add("background-yellow")
  } else if (backgroundPink.classList.contains("background-yellow")) {
    backgroundPink.classList.remove("background-yellow")
    backgroundPink.classList.add("background-blue")
  } else if (backgroundPink.classList.contains("background-blue")) {
    backgroundPink.classList.remove("background-blue")
    backgroundPink.classList.add("background-pink")
  }

  for (let sliderItem of sliderItems) {
    if (sliderItem.classList.contains("slider-item-current")) {
      sliderItem.classList.remove("slider-item-current")
      sliderItem.classList.add("slider-item-next")
    } else if (sliderItem.classList.contains("slider-item-next")) {
      sliderItem.classList.remove("slider-item-next")
      sliderItem.classList.add("slider-item-prev")
    } else if (sliderItem.classList.contains("slider-item-prev")) {
      sliderItem.classList.remove("slider-item-prev")
      sliderItem.classList.add("slider-item-current")
    }
  }

  for (let imageContainer of imageContainers) {
    if (imageContainer.classList.contains("image-container-current")) {
      imageContainer.classList.remove("image-container-current")
      imageContainer.classList.add("image-container-next")
    } else if (imageContainer.classList.contains("image-container-next")) {
      imageContainer.classList.remove("image-container-next")
      imageContainer.classList.add("image-container-prev")
    } else if (imageContainer.classList.contains("image-container-prev")) {
      imageContainer.classList.remove("image-container-prev")
      imageContainer.classList.add("image-container-current")
    }
  }

  for (let sliderImage of sliderImages) {
    if (sliderImage.classList.contains("slider-image-current")) {
      sliderImage.classList.remove("slider-image-current")
      sliderImage.classList.add("slider-image-next")
    } else if (sliderImage.classList.contains("slider-image-next")) {
      sliderImage.classList.remove("slider-image-next")
      sliderImage.classList.add("slider-image-prev")
    } else if (sliderImage.classList.contains("slider-image-prev")) {
      sliderImage.classList.remove("slider-image-prev")
      sliderImage.classList.add("slider-image-current")
    }
  }

  for (let sliderPaginationButton of sliderPaginationButtons) {
    if (sliderPaginationButton.classList.contains("slider-pagination-button-current")) {
      sliderPaginationButton.classList.remove("slider-pagination-button-current")
      sliderPaginationButton.classList.add("slider-pagination-button-next")
    } else if (sliderPaginationButton.classList.contains("slider-pagination-button-next")) {
      sliderPaginationButton.classList.remove("slider-pagination-button-next")
      sliderPaginationButton.classList.add("slider-pagination-button-prev")
    } else if (sliderPaginationButton.classList.contains("slider-pagination-button-prev")) {
      sliderPaginationButton.classList.remove("slider-pagination-button-prev")
      sliderPaginationButton.classList.add("slider-pagination-button-current")
    }
  }

  for (let sliderGroupDesc of sliderGroupDescs) {
    if (sliderGroupDesc.classList.contains("slider-group-desc-current")) {
      sliderGroupDesc.classList.remove("slider-group-desc-current")
      sliderGroupDesc.classList.add("slider-group-desc-next")
      sliderGroupDesc.classList.add("visually-hidden")
    } else if (sliderGroupDesc.classList.contains("slider-group-desc-next")) {
      sliderGroupDesc.classList.remove("slider-group-desc-next")
      sliderGroupDesc.classList.add("slider-group-desc-prev")
      sliderGroupDesc.classList.add("visually-hidden")
    } else if (sliderGroupDesc.classList.contains("slider-group-desc-prev")) {
      sliderGroupDesc.classList.remove("slider-group-desc-prev")
      sliderGroupDesc.classList.add("slider-group-desc-current")
      sliderGroupDesc.classList.remove("visually-hidden")
    }
  }
}
