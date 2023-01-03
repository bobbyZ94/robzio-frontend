import About from '../components/About'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import { getGlobalsData } from '../utils/getData'
import { FrontpageDataType } from '../typings.d'

export default async function Frontpage() {
  const FrontpageData: FrontpageDataType = await getGlobalsData('frontpage')
  return (
    <div className="h-screen overflow-scroll snap-y snap-mandatory snap-always snap scrollbar-none">
      <About FrontpageData={FrontpageData} />
      {FrontpageData.showcases.map((ShowcaseData, index) => (
        <Showcase key={index} ShowcaseData={ShowcaseData} />
      ))}
      {/* @ts-expect-error Server Component */}
      <Footer />
    </div>
  )
}
