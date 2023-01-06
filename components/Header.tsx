import Link from "next/link"
import Image from "next/image"
import {EnvelopeIcon} from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href='/'>
          <Image
          className="rounded-full"
          width={50}
          height={50}
          src='https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/283956809_127733093248534_7653229262696720982_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hNOJfR4MvvIAX-sghVX&tn=RDbgt2tg8oRkdEul&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCI-54swLrkjWwC1ugS9MakNB5sAeGLAt-keFPc4_sVGQ&oe=63BCA9BF'
          alt="jeejy"
          />
        </Link>
        <h1>The JEEJY</h1>
      </div>
      <div>
        <Link 
        className="flex items-center space-x-2 px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] rounded-full text-center"
        href='https://www.linkedin.com/in/giorgi-gorgodze-88725b210/'>
          <EnvelopeIcon width={40}/> 
          <h2>Contact Me</h2>
        </Link>
      </div>
    </header>
  )
}

export default Header