import { SettingsType } from '../typings.d'
import { getGlobalsData } from '../utils/getData'

export default async function Head() {
  const Settings: SettingsType = await getGlobalsData('settings')
  return (
    <>
      <title>{Settings.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="language" content="EN" />
      <meta name="description" content={Settings.description} />
      <meta name="author" content={Settings.author} />
      <meta name="keywords" content={Settings.keywords} />
      <meta name="url" content={Settings.web} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  )
}
