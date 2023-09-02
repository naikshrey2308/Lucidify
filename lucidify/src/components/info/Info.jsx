import { memo } from "react";
import { BsRobot } from "react-icons/bs";
import { BiChip } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";

function Info() {
    return (
        <>
            <h2 className="text-center my-5 pt-5 text-primary header">WHY LUCIDIFY?</h2>
            <div className="container d-flex justify-content-evenly">
                <div className="py-3 px-5 w-50 text-center">
                    <BiChip className="text-primary" size={50}></BiChip>
                    <h3 className="mt-4 header">Swift</h3>
                    <p className="text-secondary">
                        High quality output processed and delivered to your screen within a matter of minutes.
                    </p>
                </div>
                <div className="py-3 px-5 w-50 text-center">
                    <BsRobot className="text-primary" size={50}></BsRobot>
                    <h3 className="mt-4 header">AI Powered</h3>
                    <p className="text-secondary">
                        Powerful AI techniques are deployed to remove the haze in your images.
                    </p>
                </div>
                <div className="py-3 px-5 w-50 text-center">
                    <AiOutlineDollar className="text-primary" size={50}></AiOutlineDollar>
                    <h3 className="mt-4 header">Free</h3>
                    <p className="text-secondary">
                        Yes, you read it right. It's absolutely free. No credit cards and no login required.
                    </p>
                </div>
            </div>
        </>
    );
}

export default memo(Info);