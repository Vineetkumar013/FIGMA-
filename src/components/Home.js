import React from "react";

const Home = () => {
  return (
    <>
      <div class="container mx-auto flex flex-col md:flex-row">
        <div class="md:w-1/2 flex items-center justify-center">
          <div>
            <h1 class="text-5xl font-bold pt-12">Shaping Skills</h1>
            <h1 class="text-5xl font-bold text-pink-500">
              For Brighter Future
            </h1>
            <p class="font-bold py-2">Powered By AI</p>
            <h4 class="font-medium">
              DEVELOPED BY RENOWNED <br />
              GLOBAL EDUCATORS TEAM.
            </h4>
            <h5 class="font-bold"></h5>
            <p class="text-sky-500 font-bold py-4">WITH LOVE FROM AI.</p>
            <button class="bg-purple-900 text-white px-8 py-1">Try Now</button>
          </div>
        </div>
        <div class="md:w-1/2 flex items-center justify-center">
          <img
            class="w-full rounded-lg"
            src="https://img.freepik.com/free-vector/future-interfaces-work-illustration_1284-34829.jpg?w=740&t=st=1681956569~exp=1681957169~hmac=8f506d8cf27be7a70fa2a5b6caadacfbd20ddb00b0600296cd020d51207217b1"
            alt="smartphones"
          />
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div>
          <h1 className="text-3xl font-bold text-sky-500">
            Configure Your Readiness
          </h1>
          <p className="font-semibold">
            Discover The Power of #Machinelearning And #AI With JRN
          </p>
          <p className="font-semibold pb-6">
            Unlocking the Capabilities Of Advanced Technology To Provide You
            With A Range Of Services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="rounded-lg"
              src="https://img.freepik.com/free-photo/happy-male-candidate-greeting-member-human-resource-team-job-interview-office_637285-6567.jpg?size=626&ext=jpg&uid=R100036633&semt=sph"
            />
            <div className="p-6">
              <h1 className="text-xl font-bold mb-2">Job Interview</h1>
              <p className="text-gray-700 text-base">
                Do job interviews scare you? Be industry ready to grab the
                opportunity to improve your chances to get job offers with our
                industry expert's guidance.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="rounded-t-lg"
              src="https://cdn.corporatefinanceinstitute.com/assets/public-speaking.jpeg"
            />
            <div className="p-6">
              <h1 className="text-xl font-bold mb-2">Public Speaking</h1>
              <p className="text-gray-700 text-base">
                Improve your public speaking skills with our industry expert's
                guidance and unlock your true potential.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-photo/portrait-young-male-enjoying-work_23-2148499804.jpg?w=740&t=st=1681990387~exp=1681990987~hmac=73d3553ecb07afbc90c6c84636e7bff9856cc1f140436ab7a76f2d241101646f"
            />
            <div className="p-6">
              <h1 className="text-xl font-bold mb-2">Influencing Skill</h1>
              <p className="text-gray-700 text-base">
                Master the art of influencing and negotiation with our industry
                expert's guidance and take your career to the next level.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-photo/portrait-adult-woman-working-from-office_23-2148499809.jpg?size=626&ext=jpg"
            />
            <div className="p-6">
              <h1 className="text-xl font-bold mb-2">Elevator Pitch</h1>
              <p className="text-gray-700 text-base">
                Learn how to create a powerful elevator pitch with our industry
                expert's guidance and make a lasting impression on potential
                employers or investors.
              </p>
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div class="">
              <div class="relative rounded-lg shadow-lg overflow-hidden">
                <img
                  class="w-full"
                  src="https://img.freepik.com/free-photo/facial-recognition-collage-concept_23-2150038894.jpg?w=740&t=st=1681961424~exp=1681962024~hmac=8987397f313fe9127bdf26595b62c5a9c9946dd50a4c4d3f452c287e6fcc5dea"
                  alt=""
                />
                <div class="absolute inset-0 bg-gradient-to-t from-indigo-500 opacity-75"></div>
              </div>
            </div>
            <div class="flex flex-col justify-center">
              <h1 class="text-4xl font-bold text-purple-900 mb-6">
                How JRN Works in 5 Steps
              </h1>
              <div class="flex flex-col gap-4">
                <div class="flex items-center">
                  <span class="text-2xl font-semibold mr-4">Step 01</span>
                  <span class="text-2xl font-semibold">Record Video</span>
                </div>
                <div class="flex items-center">
                  <span class="text-2xl font-semibold mr-4">Step 02</span>
                  <span class="text-2xl font-semibold">
                    Get Your AI Assessment Score
                  </span>
                </div>
                <div class="flex items-center">
                  <span class="text-2xl font-semibold mr-4">Step 03</span>
                  <span class="text-2xl font-semibold">
                    Get Your Global Rating Score
                  </span>
                </div>
                <div class="flex items-center">
                  <span class="text-2xl font-semibold mr-4">Step 04</span>
                  <span class="text-2xl font-semibold">Seek Feedback</span>
                </div>
                <div class="flex items-center">
                  <span class="text-2xl font-semibold mr-4">Step 05</span>
                  <span class="text-2xl font-semibold">
                    Consult with the Mentor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 py-4">
            Watch JRN.AI In Action
          </h1>
          <p className="font-semibold">Practice-Improve-Empower</p>
          <img
            className="mx-auto w-2/4"
            src="https://img.freepik.com/free-vector/hands-person-watching-family-children-photo_74855-6491.jpg?w=740&t=st=1681966661~exp=1681967261~hmac=0a52988d5a2beb2d82c0aea63e22ff2aa69d750e10731193a1e1205db46e46d6"
          />
          <h1 className="text-4xl font-bold text-blue-700 py-4">
            Watch JRN.AI In Deliver
          </h1>
          <p className="font-semibold">
            You Get A Detailed AI Based Report On 25+ Unique Parameters Across
            Three Major Areas: Body Language, <br /> Word Power & Voice The
            Subscription, Come Learning Video And Exercise To Help You Work On
            Your Areas Of Improvement.
          </p>
        </div>

        <div className="container mx-auto bg-gray-100 px-4 py-8 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mx-auto py-4 gap-8 lg:gap-20">
            <div className="mx-auto flex flex-col items-center">
              <img
                className="w-32 md:w-20"
                src="https://img.freepik.com/free-icon/two-stick-man-variants-shaking-hands_318-47665.jpg?size=626&ext=jpg&uid=R100036633&semt=ais"
                alt="Body Language icon"
              />
              <h1 className="text-lg md:text-2xl font-semibold mt-2">
                Body Language
              </h1>
            </div>
            <div className="mx-auto flex flex-col items-center">
              <img
                className="w-32 md:w-20"
                src="https://cdn-icons-png.flaticon.com/512/350/350710.png?w=740&t=st=1681967568~exp=1681968168~hmac=0b8745af688781910851662aa6fc990b4cd7fe381eefd4015c9881db87e71ef1"
                alt="Facial Expression icon"
              />
              <h1 className="text-lg md:text-2xl font-semibold mt-2">
                Facial Expression
              </h1>
            </div>
            <div className="mx-auto flex flex-col items-center">
              <img
                className="w-32 md:w-20"
                src="https://cdn-icons-png.flaticon.com/512/94/94913.png?w=740&t=st=1681967595~exp=1681968195~hmac=c9894e6a3b340b782c70de559c784b71319597f4eaff05009d5c1e2c1bb9e043"
                alt="Voice Tone icon"
              />
              <h1 className="text-lg md:text-2xl font-semibold mt-2">
                Voice Tone
              </h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mx-auto items-center mt-8 gap-10">
            <div className="lg:w-1/2">
              <h1 className="text-2xl md:text-4xl text-purple-900 font-bold mb-4">
                Body Language
              </h1>
              <p className="text-lg md:text-xl text-left mb-4 leading-relaxed">
                Are you looking to come across as a winner, bold and confident?
                Your body language is more important than how you sound or the
                words you use. Often, we don't know how we look and could have
                small mannerisms that we are unaware of.
              </p>
              <p className="text-lg md:text-xl text-left mb-4 leading-relaxed">
                JVN identifies your enabling and hindering micro-expressions,
                eye contact, frequency of smiling, hand, leg, and head movement.
                <br /> It measures 11 criteria to give you an overall body
                language score. Based on your score and evaluation, it will
                create a customized learning path for you which comprises
                learning videos, exercises, and quizzes.
              </p>
              <button className="text-white bg-blue-700 px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300 ease-in-out">
                Try JVN Now
              </button>
            </div>
            <div className="flex-1">
              <img
                className="rounded-full shadow-lg"
                src="https://img.freepik.com/free-vector/men-talking-concept-illustration_114360-8882.jpg?w=740&t=st=1681970176~exp=1681970776~hmac=74fd7e3255de4c82fec03196b218b52095790c697d516c9bc56628ee8fcd19d7"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto py-10">
          <div>
            <h1 className="text-4xl font-bold text-blue-700">
              Amazing Features
            </h1>
            <p className="font-semibold py-3">
              JRN Provides Real-Time, On-The-Job Personalized Coaching At <br />
              A Very Affordable Price. Our Feedback And Analysis Are Precise And
              Anaytical.
            </p>
          </div>
<div class="flex flex-col lg:flex-row justify-center items-center py-10 border-2 border-slate-700 shadow-xl px-10">
  <div class="lg:w-1/3 lg:pr-10">
    <img class="w-full rounded-lg" src="https://img.freepik.com/free-photo/facial-recognition-collage-concept_23-2150038885.jpg?w=740&t=st=1681971785~exp=1681972385~hmac=7da2ff862a0d3ca423d08f37965b5fd0496989f9455b09b8f552159243a5ca32" alt="facial recognition collage concept" />
  </div>
  <div class="flex flex-col lg:w-2/3">
    <div class="mb-8">
      <h1 class="text-2xl py-2 font-bold text-purple-900 lg:text-right">Holistic Instant Feedback</h1>
      <p>We use a unique combination of machine learning, NLP, and data to provide customized reminders on a daily or weekly basis. You can get a flexible and personalized notification based on your convenience and time.</p>
    </div>
    <div class="mb-8">
      <h1 class="text-2xl py-2 font-bold text-purple-900 lg:text-right">Practice Learning Lessons</h1>
      <p>Low scores on your video? Do not worry. We have our experts to guide you through a fun-filled online learning experience comprising videos, exercises, games, and quizzes.</p>
    </div>
    <div class="mb-8">
      <h1 class="text-2xl py-2 font-bold text-purple-900 lg:text-right">Download & Share</h1>
      <p>You can download your video PDF report on the spot. The same can be shared on social media platforms like Facebook, Instagram & WhatsApp.</p>
    </div>
    <div class="mb-8">
      <h1 class="text-2xl py-2 font-bold text-purple-900 lg:text-right">Keep On The Go</h1>
      <p>JRN can access your video anywhere on the go within a few minutes. We are a cloud-based service and have the latest infrastructure to support a speedy & secure delivery.</p>
    </div>
    <div class="mb-8">
      <h1 class="text-2xl py-2 font-bold text-purple-900 lg:text-right">Instant Transcript</h1>
      <p>JRN generates a highly accurate transcript of your spoken words in the video. This can be used as a speech-to-text converter.</p>
    </div>
  </div>
</div>
        </div>

        <div className="container mx-auto bg-gray-100 px-4 py-8 lg:p-16">
          <h1 className="text-4xl font-bold text-blue-700 text-center mb-12">
            Trusted By Today's Leading Brands
          </h1>
          <div className="flex justify-center items-center gap-16">
            <div>
              <img
                className="w-40"
                src="https://www.rider.edu/sites/default/files/2020-10/Logo%20Previews%20-%20University%20Logo.png"
                alt="Rider University logo"
              />
            </div>
            <div>
              <img
                className="w-48"
                src="https://images-platform.99static.com//tohKNqZ0lkloDNxVRd2o8GHAPqc=/347x366:1405x1424/fit-in/500x500/99designs-contests-attachments/76/76389/attachment_76389042"
                alt="Mountain Dew logo"
              />
            </div>
            <div>
              <img
                className="w-40"
                src="https://pbs.twimg.com/profile_images/580759031444197376/4esVDoUZ_400x400.jpg"
                alt="M&M's logo"
              />
            </div>
            <div>
              <img
                className="w-40"
                src="https://www.seekpng.com/png/detail/227-2275787_logo-citizen-tv-kenya-logo.png"
                alt="Citizen TV Kenya logo"
              />
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-7xl">
          <h1 class="text-4xl font-bold text-blue-700 text-center my-12 py-6">
            Testimonials
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-10">
            <div class="bg-green-100 rounded-xl p-8 shadow-xl">
              <div class="flex flex-col items-center ">
                <img
                  class="rounded-full w-40 h-40 mb-6 shadow-lg"
                  src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&uid=R100036633&semt=sph"
                  alt="WaranKhana"
                />
                <h2 class="font-bold text-xl mb-2">WaranKhana</h2>
                <p class="font-medium text-center">
                  "It is one of the best tools to assess the skills of the
                  candidate."
                </p>
              </div>
            </div>
            <div class="bg-red-100 rounded-xl p-8 shadow-xl">
              <div class="flex flex-col items-center">
                <img
                  class="rounded-full w-40 h-40 mb-6 shadow-lg"
                  src="https://as2.ftcdn.net/v2/jpg/03/60/65/47/1000_F_360654733_XLdxGRzW4DXbr3jWzj2uZTJG6Yq9nSDB.jpg"
                  alt="Tata Young"
                />
                <h2 class="font-bold text-xl mb-2">Tata Young</h2>
                <p class="font-medium text-center">
                  "This tool helped with the preparation for job interviews and
                  presenting myself in public."
                </p>
              </div>
            </div>
            <div class="bg-pink-100 rounded-xl p-8 shadow-xl">
              <div class="flex flex-col items-center">
                <img
                  class="rounded-full w-40 h-40 mb-6 shadow-lg"
                  src="https://img.freepik.com/free-photo/portrait-confident-happy-woman-with-short-hair-cross-arms-chest-like-professional-smiling-standing-against-white-wall_176420-34241.jpg?w=740&t=st=1681977682~exp=1681978282~hmac=eebcfcd3582a07ad058cea89e7dce0a810191f7fada60aa18b3f5e121dd8e288"
                  alt="Nune Waronuch"
                />
                <h2 class="font-bold text-xl mb-2">Nune Waronuch</h2>
                <p class="font-medium text-center">
                  "JRN AI tools helps in shortlisting the candidate who meets
                  our organization's criteria."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-7xl bg-gray-100 border-2 border-gray-300 mt-10 py-10 pb-10 shadow-xl">
          <h1 class="text-4xl font-bold text-blue-700 text-center py-10">
            Blogs
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div class="">
              <div class="flex flex-col items-center">
                <img
                  class="rounded-full w-40 h-40 mb-6 border-2 border-gray-600 shadow-lg"
                  src="https://img.freepik.com/free-photo/smiley-woman-using-virtual-reality-headset-home_23-2148956104.jpg?w=740&t=st=1681983601~exp=1681984201~hmac=6716aeb464cb4eecce094ae3bf60d98c36048385dfbbc00b7879b5041a4a8064"
                  alt="WaranKhana"
                />
                <h2 class="font-bold text-xl mb-2">WaranKhana</h2>
                <p class="font-medium text-center">
                  "It is one of the best tools to assess the skills of the
                  candidate."
                </p>
              </div>
            </div>
            <div class="">
              <div class="flex flex-col items-center">
                <img
                  class="rounded-full w-40 h-40 mb-6 border-2 border-gray-600 shadow-lg"
                  src="https://as2.ftcdn.net/v2/jpg/03/21/87/17/1000_F_321871791_I6DdiEL6qXp5iOxCaDHhuMcAS7oT2vHB.jpg"
                  alt="Tata Young"
                />
                <h2 class="font-bold text-xl mb-2">Tata Young</h2>
                <p class="font-medium text-center">
                  "This tool helped with the preparation for job interviews and
                  presenting myself in public."
                </p>
              </div>
            </div>
            <div class="">
              <div class="flex flex-col items-center">
                <img
                  class="rounded-full w-40 h-40 mb-6 border-2 border-gray-600 shadow-lg"
                  src="https://img.freepik.com/free-photo/boy-with-vr-headset_23-2148019047.jpg?w=740&t=st=1681984743~exp=1681985343~hmac=b1ae79029208c7f9b536a19319dd530a83e685757000fbd8fdd70588a0908b07"
                  alt="Nune Waronuch"
                />
                <h2 class="font-bold text-xl mb-2">Nune Waronuch</h2>
                <p class="font-medium text-center">
                  "JRN AI tools helps in shortlisting the candidate who meets
                  our organization's criteria."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h1 className="text-3xl font-bold text-sky-500">Pricing</h1>
          <p className="font-semibold">
            Discover The Power of #Machinelearning And #AI With JRN
          </p>
          <p className="font-semibold pb-6">
            Unlocking the Capabilities Of Advanced Technology To Provide You
            With A Range Of Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="rounded-lg"
              src="https://img.freepik.com/free-vector/electric-transport-car-concept-illustration_114360-2486.jpg?size=626&ext=jpg"
            />
            <div className="p-6">
              <h1 className="text-xl font-bold mb-2">Job Interview</h1>
              <p className="text-gray-700 text-base">
                Do job interviews scare you? Be industry ready to grab the
                opportunity to improve your chances to get job offers with our
                industry expert's guidance.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-vector/lying-arrow-concept-illustration_114360-8531.jpg?size=626&ext=jpg&uid=R100036633"
            />
            <div className="p-6">
              <h1 className="text-xl font-bold mb-2">Public Speaking</h1>
              <p className="text-gray-700 text-base">
                Improve your public speaking skills with our industry expert's
                guidance and unlock your true potential.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-vector/helping-partner-concept-illustration_114360-8867.jpg?w=740&t=st=1681985120~exp=1681985720~hmac=1eb3bc99931162d0433668965ae8a10bd9d79397f5c147b76c681eeb9820c9d9"
            />
            <div className="p-6">
              <h1 className="text-xl font-bold mb-2">Influencing Skill</h1>
              <p className="text-gray-700 text-base">
                Master the art of influencing and negotiation with our industry
                expert's guidance and take your career to the next level.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-vector/lying-arrow-concept-illustration_114360-8531.jpg?size=626&ext=jpg&uid=R100036633"
            />
            <div className="p-6">
              <h1 className="text-xl font-bold mb-2">Elevator Pitch</h1>
              <p className="text-gray-700 text-base">
                Learn how to create a powerful elevator pitch with our industry
                expert's guidance and make a lasting impression on potential
                employers or investors.
              </p>
            </div>
          </div>
        </div>

<div class="mx-auto py-10 bg-blue-100 rounded-xl">
  <h1 class="font-bold text-4xl text-center mb-8">Contact Us</h1>
  <p class="text-center mb-8">We'll get back to you as soon as possible.</p>
  <div class="flex flex-col lg:flex-row gap-8 mx-auto items-center justify-center">
    <div class="flex flex-col w-full lg:w-1/3">
      <label class="mb-2 font-bold" for="name">Name</label>
      <input class="border-2 border-current py-2 px-4 rounded-lg focus:outline-none focus:border-blue-500" type="text" id="name" name="name" placeholder="Name" required/>
    </div>
    <div class="flex flex-col w-full lg:w-1/3">
      <label class="mb-2 font-bold" for="phone">Phone</label>
      <input class="border-2 border-current py-2 px-4 rounded-lg focus:outline-none focus:border-blue-500" type="tel" id="phone" name="phone" placeholder="Phone" required/>
    </div>
    <div class="flex flex-col w-full lg:w-1/3">
      <label class="mb-2 font-bold" for="email">Email Address</label>
      <input class="border-2 border-current py-2 px-4 rounded-lg focus:outline-none focus:border-blue-500" type="email" id="email" name="email" placeholder="Email" required/>
    </div>
  </div>
</div>

<div className="bg-purple-900 text-white flex flex-col lg:flex-row lg:justify-between px-10 py-10">
  <div className="lg:mr-10">
    <h1 className="font-bold">About Us</h1>
    <p className="py-2">Language Learning Platform <br /> Powered By Artificial Intelligence</p>
    <button className="bg-yellow-600 rounded-xl px-10 mt-10">Know More</button>
  </div>
  <div className="flex flex-col lg:mr-10">
    <h1 className="font-bold">Featured Links</h1>
    <p className="py-2">Gallery</p>
    <p className="py-2">Blogs</p>
    <p className="py-2">Contact Us</p>
  </div>
  <div className="flex flex-col lg:mr-10">
    <h1 className="font-bold">Other Offerings</h1>
    <p className="py-2">jobreadynow.Ai</p>
    <p className="py-2">Hive Grad</p>
    <p className="py-2">Fakerz</p>
  </div>
  <div className="flex flex-col">
    <h1 className="font-bold">Contact Info</h1>
    <p className="py-2">+91-9560573049</p>
    <p className="py-2">Support@hivesteps.com</p>
    <h1>Social Media</h1>
  </div>
</div>
      </div>
    </>
  );
};

export default Home;
