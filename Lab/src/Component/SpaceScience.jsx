function SpaceScience() {
  const lessons = [
    {
      title: "Introduction to Space Science",
      description:
        "Explore the fundamentals of space science and its importance.",
      instructor: "Dr. John Doe",
    },
    {
      title: "The Solar System",
      description:
        "Learn about the planets, moons, and other objects in our solar system.",
      instructor: "Prof. Jane Smith",
    },
    {
      title: "Galaxies and Beyond",
      description:
        "Discover the vastness of the universe, including galaxies, nebulae, and black holes.",
      instructor: "Dr. Alex Johnson",
    },
    // Insert more lessons here
    {
      title: "Exploring Exoplanets",
      description:
        "Investigate planets outside our solar system and their potential for habitability.",
      instructor: "Dr. Sarah Lee",
    },
    {
      title: "Astrophotography Basics",
      description:
        "Learn the techniques and equipment used for capturing stunning images of celestial objects.",
      instructor: "Prof. David Brown",
    },
    {
      title: "The Big Bang Theory",
      description:
        "Understand the origins of the universe and the evidence supporting the Big Bang theory.",
      instructor: "Dr. Emily White",
    },
    {
      title: "Life in the Universe",
      description:
        "Explore the possibility of extraterrestrial life and the search for it.",
      instructor: "Prof. Michael Johnson",
    },
    {
      title: "Black Holes: Mysteries of the Universe",
      description:
        "Delve into the physics and mysteries surrounding black holes.",
      instructor: "Dr. Andrew Carter",
    },
    {
      title: "Space Exploration Technologies",
      description:
        "Learn about the technologies driving space exploration and colonization efforts.",
      instructor: "Prof. Emma Wilson",
    },
    {
      title: "The Future of Space Travel",
      description:
        "Explore the possibilities and challenges of future space travel.",
      instructor: "Dr. James Anderson",
    },
  ];

  const addToCart = (lesson, index) => {
    console.log(lesson);
  };

  return (
    <div className="lesson-container">
      {lessons.map((lesson, index) => (
        <div
          className="card"
          style={{ width: "18rem", marginRight: "10px" }}
          key={index}
        >
          <img
            src="..."
            className="card-img-top"
            alt="..."
            style={{ height: "150px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{lesson.title}</h5>
            <p className="card-text">
              {lesson.description} - By - {lesson.instructor}
            </p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                className="btn btn-primary"
                style={{ padding: "10px", border: "1px solid #ccc" }}
              >
                Overview
              </div>
              <div
                className="btn btn-primary"
                style={{ padding: "10px", border: "1px solid #ccc" }}
                onClick={() => addToCart(lesson, index)}
              >
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpaceScience;
