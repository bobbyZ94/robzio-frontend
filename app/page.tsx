import About from '../components/About'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { getGlobalsData } from '../utils/getData'
import { FrontpageDataType, ContactDataType } from '../typings.d'

export default async function Frontpage() {
  const FrontpageData: FrontpageDataType = await getGlobalsData('frontpage')
  const ContactData: ContactDataType = await getGlobalsData('contact')
  return (
    <div className="h-screen overflow-scroll snap-y snap-mandatory snap-always snap scrollbar-none scroll-smooth">
      <About FrontpageData={FrontpageData} />
      {FrontpageData.showcases.map((ShowcaseData, index) => (
        <Showcase key={index} ShowcaseData={ShowcaseData} />
      ))}
      <Contact ContactData={ContactData} />
      {/* @ts-expect-error Server Component */}
      <Footer />
    </div>
  )
}
