import { memo } from "react";

function Footer() {
    return (
        <>
            <div id="footer-div" className="bg-dark py-5">
            <h2 className="text-center text-primary header mt-5 mb-5">LUCIDIFY IMAGE DEHAZER</h2>
                <div className="d-flex justify-content-around">
                    <div className="px-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.29021926133!2d72.87801001480955!3d22.680237685127427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5adf2c171355%3A0xe1e974ce083657fb!2sDHARMSINH%20DESAI%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1679944122555!5m2!1sen!2sin" width="400" height="300" style={{"border": 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-100">
                        <h3 className="text-light text-center header mb-4">About</h3>
                        <p style={{textAlign: "justify"}} className="text-grey px-4">
                        Introducing our cutting-edge image dehazer website! Say goodbye to hazy or foggy photos and hello to crisp and clear images. Our state-of-the-art algorithm removes haze, fog, and other atmospheric distortions from your photos, revealing their true colors and details. Our user-friendly platform makes it easy to upload your photos and receive the processed images in a matter of seconds. Perfect for photographers, travelers, or anyone looking to enhance their images, our website is your one-stop-shop for professional image dehazing. Try it out today and see the difference it can make for your photos!
                        </p>
                    </div>
                    <div className="w-100">
                        <h3 className="text-light text-center header mb-4">Creators</h3>
                        <p style={{textAlign: "justify"}} className="text-grey ps-3 pe-5">
                            This website was created by 3 university students studying in Dharmsinh Desai University, Nadiad, Gujarat, India: Shrey Naik, Krish Makadia, Murtaza Mister, in an attempt to master machine learning techniques on convoluted neural networks. This work done in the year 2022-23 is not for commerical applications as of now.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Footer);