import About from '../components/About'
import { getGlobalsData } from '../utils/getData'
import { FrontpageType } from '../typings.d'

export default async function Frontpage() {
  const Frontpage: FrontpageType = await getGlobalsData('frontpage')
  return <About Frontpage={Frontpage} />
}
