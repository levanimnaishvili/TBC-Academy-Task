class CourseItem {
  constructor({ thumbnail, isOngoing, description, linkToDetails, title }) {
    this.thumbnail = thumbnail;
    this.isOngoing = isOngoing;
    this.description = description;
    this.linkToDetails = linkToDetails;
    this.title = title;
  }
  get courseItem() {
    let container = document.createElement("li");
    let thumbnail = document.createElement("div");

    let contentContainer = document.createElement("div");
    let title = document.createElement("h5");
    let description = document.createElement("p");

    let linkToDetails = document.createElement("a");
    let linkArrow = document.createElement("span");
    let linkWrapper = document.createElement("div");

    linkWrapper.classList.add("link-to-course-wrapper");
    linkArrow.classList.add("link-to-course-arrow");
    linkToDetails.classList.add("link-to-course");

    title.classList.add("course-item-title");
    description.classList.add("course-item-description");

    container.classList.add("course-item-container");

    thumbnail.classList.add("course-item-thumbnail");
    thumbnail.style.backgroundImage = `url(${this.thumbnail})`;

    contentContainer.classList.add("course-item-content");

    title.textContent = this.title;
    description.textContent = this.isOngoing
      ? this.description
      : "რეგისტრაცია დასრულებულია";
    linkToDetails.textContent = "კურსის დეტალები";
    linkToDetails.href = this.linkToDetails;

    linkArrow.appendChild(createBlueArrowSVG());
    linkWrapper.appendChild(linkArrow);
    linkWrapper.appendChild(linkToDetails);

    contentContainer.appendChild(title);
    contentContainer.appendChild(description);
    contentContainer.appendChild(linkWrapper);

    container.appendChild(thumbnail);
    container.appendChild(contentContainer);

    return container;
  }
}
