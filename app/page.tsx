import About from '../components/About'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import { getGlobalsData, getData } from '../utils/getData'
import { FrontpageDataType, ShowcaseDataType } from '../typings.d'

export default async function Frontpage() {
  const FrontpageData: FrontpageDataType = await getGlobalsData('frontpage')
  return (
    <div className="h-screen overflow-scroll snap-y snap-mandatory snap-always scrollbar-none scroll-smooth">
      <About FrontpageData={FrontpageData} />
      {FrontpageData.showcases.map((ShowcaseData, index) => (
        <Showcase key={index} ShowcaseData={ShowcaseData} />
      ))}
      {/* @ts-expect-error Server Component */}
      <Footer />
    </div>
  )
}
