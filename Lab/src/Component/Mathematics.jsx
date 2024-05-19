function Mathematics() {
  const lessons = [
    {
      title: "Algebra Basics",
      description:
        "Learn the foundational concepts of algebra, including equations and inequalities.",
      instructor: "Prof. Alice Johnson",
    },
    {
      title: "Geometry Fundamentals",
      description:
        "Explore the principles of geometry, such as shapes, angles, and transformations.",
      instructor: "Dr. Bob Smith",
    },
    {
      title: "Calculus Essentials",
      description:
        "Discover the fundamental ideas of calculus, including limits, derivatives, and integrals.",
      instructor: "Prof. Charlie Brown",
    },
    // Insert more lessons here
    {
      title: "Trigonometry for Beginners",
      description:
        "Learn the basics of trigonometry, including sine, cosine, and tangent functions.",
      instructor: "Dr. Emily Davis",
    },
    {
      title: "Statistics Fundamentals",
      description:
        "Explore the basic concepts of statistics, including probability, distributions, and hypothesis testing.",
      instructor: "Prof. George Wilson",
    },
    {
      title: "Linear Algebra Introduction",
      description:
        "Discover the fundamental concepts of linear algebra, including vectors, matrices, and systems of equations.",
      instructor: "Dr. Hannah White",
    },
    {
      title: "Differential Equations",
      description:
        "Explore the theory and applications of differential equations in various fields.",
      instructor: "Prof. Isaac Martinez",
    },
    {
      title: "Advanced Calculus Topics",
      description:
        "Delve into advanced topics in calculus, such as multivariable calculus and differential equations.",
      instructor: "Dr. Jack Thompson",
    },
    {
      title: "Discrete Mathematics",
      description:
        "Learn about the mathematical structures and techniques used in computer science and cryptography.",
      instructor: "Prof. Kelly Johnson",
    },
    {
      title: "Mathematical Logic",
      description:
        "Explore the principles of mathematical logic, including propositional and predicate calculus.",
      instructor: "Dr. Laura Adams",
    },
  ];

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
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mathematics;
