import Image from "next/image";

function Background() {
    return (
        <div className="absolute w-4/6 h-5/6 -z-10 block top-2 left-7">
            <Image src="/projectsSection_bg.png" layout="fill" objectFit="contain"/>
        </div>
    );
}

export default Background;