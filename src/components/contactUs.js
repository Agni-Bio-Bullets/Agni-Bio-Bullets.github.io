import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function ContactUs() {
  return (
    <div className="w-full bg-stone-900 text-white">
      <div className="w-full max-w-7xl m-auto py-10">
        <div className="text-3xl text-center mb-4 lg:hidden"> Get in touch</div>

        <div className="lg:flex">
          <div className="hidden w-1/3 lg:block text-5xl m-auto text-center"><span>Get in touch</span></div>
          <div className="w-full lg:w-2/3 px-20 flex flex-col items-center">
            <div className="flex w-full">
              <div className="w-1/2 space-y-2 p-4 text-right lg:text-left">
                <div className="text-2xl"> John Smith</div>
                <div className="text-xl"> Proprietor </div>
              </div>
              <div className="w-1/2 space-y-4 p-4">
                <div className="w-full flex justify-start items-start gap-4">
                  <PhoneIcon className="h-6 w-6 text-white"></PhoneIcon>
                  <a href="tel:+910000000000">+91 00000 00000</a>
                </div>
                <div className="w-full flex justify-start items-start gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-white"></EnvelopeIcon>
                  <a href="mailto:mail@example.com">mail.example.com</a>
                </div>
                <div className="w-full flex justify-start items-start gap-4">
                  <MapPinIcon className="h-6 w-6 text-white"></MapPinIcon>
                  <div className="">
                    <div className="">X-99 Aplha industrial town</div>
                    <div className="">Town</div>
                    <div className="">U.P. India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
