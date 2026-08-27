import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='flex flex-col gap-6 p-2 md:p-4 min-h-screen '>
      <h1 className='font-bold text-4xl mb-2'>Privacy Policy</h1>
      <p className='text-sm text-slate-500 -mt-4 mb-4'>Last updated: August 27, 2026</p>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>1. Information We Collect</h2>
        <p className='text-base leading-relaxed'>
          We collect information you provide directly to us when creating an account or updating your profile. This includes your name, email address, contact details, employment history, education, skills, and any structural text or documents you upload, such as your existing resume or cover letter.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>2. How We Use Information</h2>
        <p className='text-base leading-relaxed'>
          We use your data to power the core functionality of our platform. This includes analyzing your professional history, generating personalized career optimization insights, tailoring resume improvements, managing your user account, communicating critical updates, and maintaining a secure, authenticated platform architecture.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>3. AI Processing</h2>
        <p className='text-base leading-relaxed'>
          Our platform processes your resume and profile data using advanced automated machine learning models. These algorithms parse structural content to score performance and suggest textual changes. Your data is isolated during processing, and we do not use your personal, identifiable career records to train public, third-party generative models.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>4. Data Storage</h2>
        <p className='text-base leading-relaxed'>
          Your uploaded records, generated metrics, and account credentials are stored securely on remote servers using robust infrastructure standards. We leverage modern distributed databases to keep your profile data accessible, structured, and completely isolated from other platform users.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>5. Cookies</h2>
        <p className='text-base leading-relaxed'>
          We use essential cookies and similar persistent tracking identifiers to remember your login state, secure your active sessions, and analyze broad performance metrics. You can adjust your local web browser preferences to disable non-essential trackers, though doing so may prevent certain platform features from loading correctly.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>6. Third-Party Services</h2>
        <p className='text-base leading-relaxed'>
          We may partner with trusted external sub-processors to facilitate essential elements of our service, including secure cloud hosting providers, authentication managers, and foundational AI API infrastructures. These third parties are bound by strict confidentiality mandates and are prohibited from using your data for any independent secondary purpose.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>7. Data Retention</h2>
        <p className='text-base leading-relaxed'>
          We retain your sensitive profile records and resume uploads only for as long as your registered user account remains active, or as long as necessary to fulfill our explicit service delivery obligations. If you request account closure, we initiate standard processes to purge or permanently anonymize your data from our active databases.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>8. Data Security</h2>
        <p className='text-base leading-relaxed'>
          We deploy industry-standard administrative, physical, and electronic security protocols to protect your personal history from unauthorized access, modification, or exposure. This includes end-to-end data encryption in transit and at rest. However, remember that no digital architecture or internet transmission can ever be guaranteed 100% secure.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>9. User Rights</h2>
        <p className='text-base leading-relaxed'>
          Depending on your location, you have strong structural rights regarding your personal information. These generally include the right to review the specific files we store, correct inaccuracies, download a portable copy of your account data, or request the total deletion of your active system records.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>10. Children's Privacy</h2>
        <p className='text-base leading-relaxed'>
          Our platform does not intentionally target, collect, or store any personal records from individuals under the age of 13. If we discover that an underage user has bypassed registration systems and submitted career details, we will take immediate internal steps to locate and delete that data from our environments.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>11. Changes to This Policy</h2>
        <p className='text-base leading-relaxed'>
          We reserves the right to revise this Privacy Policy to reflect changing application features or shifting regulatory guidelines. When changes occur, we will update the timeline tracking metrics at the top of this document. We encourage you to review this page periodically to remain informed about how we safeguard your data.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>12. Contact Information</h2>
        <p className='text-base leading-relaxed'>
          If you have any questions, regulatory requests, or feedback regarding your privacy, please connect directly with our application systems manager at the{' '}
          <Link href={"mailto:developer.jrts@gmail.com"} className='font-semibold text-blue-500 hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4'>
            Developer
          </Link>
          .
        </p>
      </Card>
    </div>
  )
}

export default PrivacyPolicy
