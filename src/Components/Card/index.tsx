
function Card() {
    return (
        <div className="flex flex-col h-[233px] w-[340px] bg-white text-sm md:text-base lg:text-lg font-noto p-6 rounded-lg gap-4">
            <User />
            <div>
                <p className="text-base text-neutral-600">
                    I've been searching for high-quality abstract images for my design projects,
                    and I'm thrilled to have found this platform. The variety and depth of
                    creativity are astounding!
                </p>
            </div>
        </div>
    );
}

function User() {
    return (
        <div className="flex gap-4 h-12">
            <div className="h-12 w-12 ">
                <img src="./img/profile-thumbnail.png" alt="" className="bg-cover" />
            </div>
            <div className="flex flex-col justify-around">
                <h1 className="font-semibold text-lg text-neutral-900">
                    Sarah Dole
                </h1>
                <p className="text-neutral-600">
                    @sarahdole
                </p>
            </div>
        </div>
    );
}



export default Card;