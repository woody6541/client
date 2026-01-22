import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import meenu from "../assets/meenu.jpeg"
import avatar from "../assets/avatar.jpg"

const reviews = [
  {
    name: "Meenu Vijith",
    review: "Excellent.friendly classes and so...",
    rating: 5,
    image: meenu,
   
  },
  {
    name: "Ak Sm",
    review: "Good teaching and good atmosphere",
    rating: 5,
    image: avatar,
   
  },
  {
    name: "fathima fana",
    review: "Best IT training institution in nedumangadu",
    rating: 4,
    image: avatar,
    
  },
  {
    name: "Asiya Asii",
    review: "really impressed with the class and faculties they're truly talented. The teaching quality is excellent, and the faculties are knowledgeable, helpful, and supportive",
    rating: 5,
    image: avatar,
  
  },
  {
    name: "Adwaith AR",
    review: "Faculties are very friendly, and the management is very co operative thank you g tec nedumangad",
    rating: 5,
    image: avatar,
   
  },
  {
    name: "Jeeyas shams",
    review: "It's a excellent education centre. The teachers are amazing and very supportive. Also they have a great responsibility to their job. They are very experienced teachers. I took a course DIFA, which promotes Indian and Foreign Accounting very well. Those who are interested in Accounting sector this will be the best course for them and offers good jobs.",
    rating: 5,
    image: avatar,
   
  },
  {
    name: "Prakash S",
    review: "I had an outstanding experience at G-Tech Computer Education Center! From the moment I walked in, I was impressed by their professional environment and state-of-the-art facilities. The instructors are highly knowledgeable, patient, and truly dedicated to helping students succeed. The curriculum is well-structured and up-to-date, covering everything from basic computer skills to advanced programming and IT certifications. The hands-on training approach made it easy to grasp even complex concepts.",
    rating: 4,
    image: avatar,
    
  },
  {
    name: "Rahna Nissam",
    review: "I had a good experience learning in gtec nedumangadu center, the instructors were highly knowledgeable and patient, explaining complex concepts in ckear.... The lab facilities were modern and really available, i highly recommended this institute to anyone looking to enhance their computer literacy.....",
    rating: 5,
    image: avatar,
    
  },
  {
    name: "Aneeza Shanu",
    review: "I completed PDIFAS from hear.it’s a new g-tec in Nedumangad with good faculties and fresh atmosphere.From hear I learned MsOffice,Excel,PowerPoint,tally,Quickbook,Sage-50,SAP…….The faculties are highly skilled and Iam impressed with there classes.",
    rating: 4,
    image: avatar,
    
  },
  {
    name: "Amina",
    review: "G -TEC COMPUTER EDUCATION nedumangad offers excellent courses like MS OFFICE, FINANCIAL ACCOUNTING QUICKBOOK, TALLY COMPERNSIVE carrier services are super helpfull, and resources are always accessible. The courses prepare you very well for certification exam. Highly recommende.",
    rating: 5,
    image: avatar,
    
  },
  {
    name: "Jofna Joy",
    review: "A good computer institution in nedumangad. A well trained coaches, good atmosphere. I like this institution and a lot courses. Which is the best result for us..",
    rating: 5,
    image: avatar,
    
  },
  {
    name: "Gowri S",
    review: "Had a good training in gtec nedumangad. Almost all the topic where covered with practical. Good institute to learn courses.",
    rating: 5,
    image: avatar,
    
  },
  {
    name: "Libi V ",
    review: "Good institute to learn courses and the trainers were very initiative and gave regular feedback at end of the sectio.",
    rating: 5,
    image: avatar,
    
  },
  {
    name: "ANAKHA A S",
    review: "Had the privilege of learning with this great team with Gtec. I'm impressed with their practical and theory class.",
    rating: 4,
    image: avatar,
    
  },
  {
    name: "Vithul V",
    review: "I recently joining the DCA course at Gtec nedumangad..good teaching and provide in-depth knowledge....",
    rating: 5,
    image: avatar,
    
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [];
  for (let i = 0; i < 3; i++) {
    visibleReviews.push(reviews[(current + i) % reviews.length]);
  }

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mb-14">
          ⭐ 4.8 Google Rating • Based on real student experiences
        </p>

        <div className="relative flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() =>
              setCurrent(current === 0 ? reviews.length - 1 : current - 1)
            }
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-lg"
          >
            &#8592;
          </motion.button>

          <div className="flex gap-6 overflow-hidden w-full justify-center">
            <AnimatePresence mode="wait">
              {visibleReviews.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white rounded-3xl shadow-2xl p-7 w-72 flex-shrink-0 flex flex-col items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                  />

                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < item.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 italic text-sm text-center mb-4">
                    “{item.review}”
                  </p>

                  <p className="font-semibold text-gray-800">{item.name}</p>

               
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrent((current + 1) % reviews.length)}
            className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-lg"
          >
            &#8594;
          </motion.button>
        </div>
      </div>
    </section>
  );
}
