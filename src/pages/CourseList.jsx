import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CourseList() {
  const { category, type } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/courses", {
        params: { category, type },
      })
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category, type]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        {type} Courses – {category}
      </h1>

      {courses.length === 0 ? (
        <p>No courses found</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c._id} className="border p-4 rounded">
              <h2 className="font-semibold">{c.title}</h2>
              <p>{c.description}</p>
              <p>{c.duration}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
