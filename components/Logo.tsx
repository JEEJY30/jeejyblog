import Image from "next/image"

const Logo = (props: any) => {
  const {renderDefault, title} = props
  return (
    <div className="flex items-center space-x-2">
      <Image 
      className="rounded-full object-cover"
      width={50}
      height={50}
      src="https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/283956809_127733093248534_7653229262696720982_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hNOJfR4MvvIAX-sghVX&tn=RDbgt2tg8oRkdEul&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCI-54swLrkjWwC1ugS9MakNB5sAeGLAt-keFPc4_sVGQ&oe=63BCA9BF"
      alt="logo"
      priority
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo