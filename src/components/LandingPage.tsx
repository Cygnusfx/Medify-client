import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage : React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-teal-500"></div>
            <span className="text-xl font-bold">Medify</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#"
              className="text-sm font-medium hover:text-teal-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-teal-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-teal-500 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-teal-500 transition-colors"
            >
              For Doctors
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-teal-500 transition-colors"
            >
              For Patients
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-teal-500 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600 transition-colors"
            >
              Register
            </Link>
            <button className="md:hidden rounded-md border border-gray-200 p-2">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <span className="inline-block rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600">
                    Healthcare Simplified
                  </span>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect Doctors & Patients Seamlessly
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Skip the waiting room. Book appointments online, consult via
                    video, and manage your healthcare journey all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600"
                  >
                    Register as Doctor
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100"
                  >
                    Book Appointment as Patient
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg bg-gray-200 h-[550px] w-[550px] flex items-center justify-center text-gray-500">
                  Hero Image Placeholder
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <span className="inline-block rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600 mx-auto">
                  Key Features
                </span>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need for modern healthcare
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects doctors and patients with powerful
                  features designed to make healthcare accessible and efficient.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <svg
                      className="h-6 w-6 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">
                    Easy Clinic Registration
                  </h3>
                </div>
                <p className="text-sm text-gray-500">
                  Doctors can register their clinics in minutes and start
                  accepting appointments right away.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <svg
                      className="h-6 w-6 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Real-time Availability</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Patients can see doctor availability in real-time and book
                  appointments without phone calls.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <svg
                      className="h-6 w-6 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Video Consultations</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Connect with your doctor remotely through secure, high-quality
                  video consultations.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <svg
                      className="h-6 w-6 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Auditable Prescriptions</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Receive digital prescriptions that are secure, traceable, and
                  can be sent directly to pharmacies.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <svg
                      className="h-6 w-6 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Flexible Scheduling</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Choose appointment times that work for you with flexible
                  scheduling options based on your preferences.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <svg
                      className="h-6 w-6 text-teal-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Transparent Pricing</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Clear pricing with just a 5% platform fee for patients. No
                  hidden charges or surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <span className="inline-block rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600 mx-auto">
                  Subscription Plans
                </span>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Choose the right plan for your practice
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible subscription options for doctors to manage their
                  patient load efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12 lg:grid-cols-2">
              {/* Plan 1 */}
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Basic</h3>
                  <p className="text-sm text-gray-500">For small practices</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold">500</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Up to 10 patients per day</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Basic scheduling tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Email support</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <button className="w-full rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Plan 2 */}
              <div className="flex flex-col rounded-lg border-2 border-teal-500 bg-white shadow-sm">
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Professional</h3>
                    <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-600">
                      Popular
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">For growing practices</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold">1000</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Up to 25 patients per day</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Advanced scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Video consultations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Priority support</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <button className="w-full rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Plan 3 */}
              {/* <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <p className="text-sm text-gray-500">For large clinics</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold">$199</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Unlimited patients</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Custom scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Dedicated account manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">API access</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <button className="w-full rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div> */}
            </div>
            <div className="text-center text-sm text-gray-500">
              <p>
                Patients pay only the doctor's fee plus a 5% platform fee. No
                hidden charges.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <span className="inline-block rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600 mx-auto">
                  Testimonials
                </span>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What our users say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from doctors and patients who have transformed their
                  healthcare experience with MediConnect.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="text-base font-bold">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Pediatrician</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  "MediConnect has revolutionized my practice. I can manage
                  appointments efficiently, and the video consultation feature
                  has been a game-changer for my young patients who can now see
                  me from the comfort of their homes."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="text-base font-bold">Michael Rodriguez</h3>
                    <p className="text-sm text-gray-500">Patient</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  "As someone with a busy schedule, being able to book
                  appointments online and have video consultations has saved me
                  countless hours. The transparent pricing means I know exactly
                  what I'm paying for."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="text-base font-bold">Dr. James Wilson</h3>
                    <p className="text-sm text-gray-500">Cardiologist</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  "The platform has helped me streamline my practice. I can
                  focus more on patient care rather than administrative tasks.
                  The digital prescription feature ensures my patients get their
                  medications without any confusion."
                </p>
              </div>

              {/* Testimonial 4 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="text-base font-bold">Emily Chen</h3>
                    <p className="text-sm text-gray-500">Patient</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  "Finding the right specialist used to be a challenge. With
                  MediConnect, I can see doctor profiles, read reviews, and book
                  appointments all in one place. It's made managing my family's
                  healthcare so much easier."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <span className="inline-block rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600">
                    Get Started Today
                  </span>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to transform your healthcare experience?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Join thousands of doctors and patients who are already
                    benefiting from our platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600"
                  >
                    Register as Doctor
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100"
                  >
                    Book Appointment as Patient
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg bg-gray-200 h-[400px] w-[500px] flex items-center justify-center text-gray-500">
                  Call to action image
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-teal-500"></div>
            <span className="text-xl font-bold">Medify</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a href="#" className="text-xs hover:underline underline-offset-4">
              About
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Terms
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
          <div className="flex gap-4">
            <a
              href="#"
              className="rounded-full p-2 bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="rounded-full p-2 bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="rounded-full p-2 bg-gray-100 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        <div className="container mx-auto mt-4 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} MediConnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage