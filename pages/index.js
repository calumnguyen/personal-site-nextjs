import Nav from '../components/nav'
 
export default function IndexPage() {
  const isHome = true
  return (
    <div>
      <Nav isHome={isHome}/>
      <div className="py-20 w-auto max-w-md">
        <h1 className="text-4xl text-left text-accent-1 ml-10 tracking-widest cursor-default ">
          Hello, I'm Calum.
        </h1>
      </div>
    </div>
  )
}
