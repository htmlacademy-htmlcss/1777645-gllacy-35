const sliderItems = document.querySelectorAll(".slider-item");
const imageContainers = document.querySelectorAll(".image-container");
const sliderImages = document.querySelectorAll(".slider-image");
const sliderGroupDescs = document.querySelectorAll(".slider-group-desc");
const sliderPaginationButtons = document.querySelectorAll(".slider-pagination-button");
const buttonSlider = document.querySelectorAll(".button-slider")

const backgroundPink = document.querySelector(".background-pink");
const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");

const buttonFeedback = document.querySelector(".button-feedback");
const feedbackModal = document.querySelector(".feedback-modal");
const feedbackModalCloseButton = document.querySelector(".feedback-modal-close-button");

sliderNext.onclick = function () {

  if (backgroundPink.classList.contains("background-pink")) {
    backgroundPink.classList.replace("background-pink", "background-blue")
  } else if (backgroundPink.classList.contains("background-blue")) {
    backgroundPink.classList.replace("background-blue", "background-yellow")
  } else if (backgroundPink.classList.contains("background-yellow")) {
    backgroundPink.classList.replace("background-yellow", "background-pink")
  }

  for (let buttonSlide of buttonSlider) {
    if (buttonSlide.classList.contains("button-slider-current")) {
      buttonSlide.classList.replace("button-slider-current", "button-slider-prev")
    } else if (buttonSlide.classList.contains("button-slider-prev")) {
      buttonSlide.classList.replace("button-slider-prev", "button-slider-next")
    } else if (buttonSlide.classList.contains("button-slider-next")) {
      buttonSlide.classList.replace("button-slider-next", "button-slider-current")
    }
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

  for (let buttonSlide of buttonSlider) {
    if (buttonSlide.classList.contains("button-slider-current")) {
      buttonSlide.classList.replace("button-slider-current", "button-slider-next")
    } else if (buttonSlide.classList.contains("button-slider-next")) {
      buttonSlide.classList.replace("button-slider-next", "button-slider-prev")
    } else if (buttonSlide.classList.contains("button-slider-prev")) {
      buttonSlide.classList.replace("button-slider-prev", "button-slider-current")
    }
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

buttonFeedback.addEventListener("click", (event) => {
  event.preventDefault();
  feedbackModal.classList.toggle("feedback-modal-opened");
});

feedbackModalCloseButton.addEventListener("click", () => {
  feedbackModal.classList.toggle("feedback-modal-opened");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (feedbackModal.classList.contains("feedback-modal-opened")) {
      event.preventDefault();
      feedbackModal.classList.remove("feedback-modal-opened");
    };
  };
});
