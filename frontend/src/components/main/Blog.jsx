import React from 'react'

const Blog = () => {
  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white text-center">Related articles</h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 bg-blue-100">
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://res.cloudinary.com/dqyvomyqy/image/upload/v1669401112/GymWebsite/pexels-nappy-936094_krrmcn.jpg" className="mb-5 rounded-lg" alt="Image 1"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white ml-3">
                  <a href="#">7 Important Nutrition Tips for Bodybuilding</a>
              </h2>
              <p className="mb-4 font text-black-400 dark:text-black-400 ml-4"> 1. Consume enough high-quality protein <br/> 2. Eat at regular intervals throughout the day <br/> 3. Consume the right amount of carbohydrates <br/> 4. Don’t drop fat intake too low <br/> 5. Choose effective supplements <br/> 6. Don’t forget about micronutrients <br/> 7. Give yourself enough time</p>
              
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://res.cloudinary.com/dqyvomyqy/image/upload/v1669401112/GymWebsite/pexels-nappy-936094_krrmcn.jpg" className="mb-5 rounded-lg" alt="Image 2"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white mt-10">
                  <a href="#">High-Protein Vegeterian Sources</a>
              </h2>
              <p className="mb-4 font text-black-400 dark:text-black-400">1. Greek Yogurt <br/> 2. Lentils <br/> 3. Chia Seeds <br/> 4. Peanut Butter <br/> 5. Paneer <br/> 6. Tofu <br/> 7. Dry-Fruits <br/> 8. Quiona</p>
             
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered with Google</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
            
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
            
          </article>
      </div>
    </div>
  )
}

export default Blog
