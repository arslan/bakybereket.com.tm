import Image from "next/image";

function Background() {
    return (
        <div className="absolute w-4/6 h-4/6 -z-10 block top-36 left-7">
            <Image src="/mainSection_bg.png" layout="fill" objectFit="cover"/>
        </div>
    );
}

export default Background;