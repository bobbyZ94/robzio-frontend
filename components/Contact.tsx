import { ContactDataType } from '../typings.d'
import serialize from '../utils/serialize'
import { mailResponsive } from './SvgComponents'

export default function Contact({ ContactData }: { ContactData: ContactDataType }) {
  return (
    <div id="contact" className="flex flex-col items-center justify-center h-screen tracking-wider snap-start">
      <div className="px-5 prose-sm text-center lg:prose-xl prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline">
        {serialize(ContactData.text)}
      </div>
      <div className="duration-200 ease-in-out sm:mb-5 hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text">
        <a href={`mailto:${ContactData.email}`}>
          <span className="text-white">{mailResponsive}</span>
          {ContactData.email}
        </a>
      </div>
    </div>
  )
}
