
const Hero = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co.com/q76grTc/top-view-tasty-sandwiches-arrangement.jpg')] bg-cover bg-center rounded-xl mt-7 h-[470px] w-11/12 m-auto">
            <div className="text-center mt-10 p-20">
                <h1 className="text-lg lg:text-3xl font-semibold text-white ">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-white text-sm lg:text-lg font-normal lg:px-48 mt-4">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

                <div className="mt-20 flex lg:block">
                    <button className="btn btn-success rounded-full">Explore Now</button>
                    <button className="btn btn-outline text-white btn-secondary rounded-full ml-3">Our Feedback</button>
                </div>
            </div>
            

        </div>

        <div className="m-auto mt-11 text-center p-9">
                <h1 className="text-3xl font-sans font-bold">Our Recipes</h1>
                <p className="text-sm lg:px-24 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio perspiciatis corporis voluptates possimus quasi aperiam, laudantium perferendis similique quam sapiente harum, reiciendis esse dolor velit aspernatur odit minus voluptate architecto!</p>
            </div>
        </div>
    );
};

export default Hero;