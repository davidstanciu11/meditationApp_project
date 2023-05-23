
function Contact() {
  return (
    <>
      <section className="section-sm lg:pt-[250px]" id="Contact">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg: gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]">
            <div className="flex-1 flex flex-col justify-center pl-8">
              <h2 className="h2 mb-3 lg:mb-7">Get in Touch With Us</h2>
              <p className="mb-7 lg:mb-0 text-base">Contact us for more information or any help you need.</p>
            </div>
            <form className="flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-10">
                <input className="form-control text-sm" placeholder="First Name" type="text" required  name="user_firstname"/>
                <input className="form-control text-sm" placeholder="Last Name" type="text" required name="user_lastname"/>
                <input className="form-control text-sm" placeholder="Email" type="email" required name="user_email"/>
                <textarea className="form-control py-5 h-[165px] resize-none text-sm" placeholder="Message" name="user_message"></textarea>
                <button className="btn btn-lg btn-orange" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
