import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className='py-24'>
      <div className='flex items-center justify-center flex-col mt-14'>
        <SignIn />
      </div>
    </section>
  )
}