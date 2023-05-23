import {MdEmail} from "react-icons/md";

function Newsletter() {
    return (<>
    <section className="section-sm lg:section-lg bg-green min-h-[520px]">
        <div className="container mx-auto">
            <div className="border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12 ">
                <h4 className="text-[26px] text-white font-bold mb-[14px]">Subscribe to Our Newsletter</h4>
                <p className="text-green-200 mb-12 ">Receive updates, sales and many more.</p>
                <form className="max-w-[752px] mx-auto relative flex flex-col p-4 lg:flex-row gap-y-6 lg:p-0 gap-x-4" action="">
                    <div className="w-full relative flex">
                        <div className="absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300">
                            <MdEmail/>
                        </div>
                        <input className="form-control w-full border border-green-300 bg-transparent 
                        outline-none placeholder:text-green-200 text-white pl-[60px]" placeholder="Enter your email address" type="text" />
                    </div>
                    <button className="btn bnt-lg btn-orange text-white w-full lg:max-w-[180px]">Get Started</button>
                </form>
            </div>
        </div>
    </section>
    </>)
}

export default Newsletter;