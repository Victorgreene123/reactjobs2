import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'
import { toast } from 'react-toastify'



const JobPage = ({ deleteJob }) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const jobs = [
      {
        "id": "1",
        "title": "Senior React Developer",
        "type": "Full-Time",
        "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
        "location": "Boston, MA",
        "salary": "$70K - $80K",
        "company": {
          "name": "NewTek Solutions",
          "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
          "contactEmail": "contact@teksolutions.com",
          "contactPhone": "555-555-5555"
        }
      },
      {
        "id": "2",
        "title": "Front-End Engineer (React & Redux)",
        "type": "Full-Time",
        "location": "Miami, FL",
        "description": "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
        "salary": "$70K - $80K",
        "company": {
          "name": "Veneer Solutions",
          "description": "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
          "contactEmail": "contact@loremipsum.com",
          "contactPhone": "555-555-5555"
        }
      },
      {
        "id": "3",
        "title": "React.js Dev",
        "type": "Full-Time",
        "location": "Brooklyn, NY",
        "description": "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
        "salary": "$70K - $80K",
        "company": {
          "name": "Dolor Cloud",
          "description": "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
          "contactEmail": "contact@dolorsitamet.com",
          "contactPhone": "555-555-5555"
        }
      },
      {
        "id": "4",
        "title": "React Front-End Developer",
        "type": "Part-Time",
        "description": "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
        "location": "Pheonix, AZ",
        "salary": "$60K - $70K",
        "company": {
          "name": "Alpha Elite",
          "description": "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
          "contactEmail": "contact@adipisicingelit.com",
          "contactPhone": "555-555-5555"
        }
      },
      {
        "id": "5",
        "title": "Full Stack React Developer",
        "type": "Full-Time",
        "description": "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
        "location": "Atlanta, GA",
        "salary": "$90K - $100K",
        "company": {
          "name": "Browning Technologies",
          "description": "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
          "contactEmail": "contact@consecteturadipisicing.com",
          "contactPhone": "555-555-5555"
        }
      },
      {
        "id": "6",
        "title": "React Native Developer",
        "type": "Full-Time",
        "description": "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
        "location": "Portland, OR",
        "salary": "$100K - $110K",
        "company": {
          "name": "Port Solutions INC",
          "description": "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
          "contactEmail": "contact@ipsumlorem.com",
          "contactPhone": "555-555-5555"
        }
      }
    ]
    const job = jobs.find((item) => item.id == id)

    const onDeleteCLick = (jobId) => { 
      const confirm = window.confirm('Are you sure you want to delet this listing?')
      if (!confirm) return;

      deleteJob(jobId)

      toast.success('Job deleted successfully');

      navigate('/jobs')
    }
  
    

    return ( 
        <>
          <section>
                <div className="container mx-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className='mr-2' /> Back to Job Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container mx-auto py-10 px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <div className="text-gray-500 mb-4">{job.type}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {job.title}
                                </h1>
                                <div className="text-gray-500 mb-4 flex items-center">
                                    <FaMapMarker className='text-lg text-orange-700 mr-2' />
                                    <p className="text-orange-700">{job.location}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>
                                <p className="mb-4">
                                    {job.description}
                                </p>
                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
                                <p>{job.salary}</p>
                            </div>
                        </main>

                        <aside className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-6">Company Info</h3>
                            <h2 className="text-2xl mb-2">{job.company.name}</h2>
                            <p className="my-2">
                                {job.company.description}
                            </p>
                            <hr className="my-4" />
                            <h3 className="text-xl font-bold mb-2">Contact Email:</h3>
                            <p className="my-2 bg-indigo-100 p-2 font-bold">
                                {job.company.contactEmail}
                            </p>
                            <h3 className="text-xl font-bold mb-2">Contact Phone:</h3>
                            <p className="my-2 bg-indigo-100 p-2 font-bold">
                                {job.company.contactPhone}
                            </p>
                            <div className="mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                <Link
                                    to={`/edit-job/${job.id}`}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full block mb-4"
                                >
                                    Edit Job
                                </Link>
                                <button
                                    onClick={() => onDeleteClick(job.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full block"
                                >
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

// making use of the react-router dataLoader to fetch data




export { JobPage as default}

