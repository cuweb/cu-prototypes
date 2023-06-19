/* eslint-disable @next/next/no-img-element */
// import { styles } from './FooterSimple.Styles'
import { Button } from '@carletonuniversity/rds'
import { FooterSocial, FooterKeyLinks, FooterLinks } from './footerData'

const styles = {
  spacing: 'px-8 pt-8 md:pt-14 pb-24 md:pb-36 md:px-10',
  globalExists: `bg-cu-waves-red bg-[length:100.5%] bg-bottom bg-no-repeat`,
}

export const FooterSimple = () => {
  return (
    <footer
      className={`bg-cu-black-900 ${styles.spacing} ${styles.globalExists}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center md:justify-start">
          <img
            className="w-40 h-auto mb-6 md:w-52"
            src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logo-right-white-outline.svg"
            alt="Carleton University logo"
          />
        </div>

        <div className="flex justify-between gap-10 text-white">
          <div className="mx-auto text-base text-center md:pl-12 md:text-lg md:text-left md:mx-0">
            <p className="mb-1.5">Information Technology Services</p>
            <ul className="space-y-1 text-cu-black-400">
              <li>401 Robertson Hall</li>
              <li>1125 Colonel By Drive</li>
              <li>Ottawa, ON, K1S 5B6, Canada</li>
              <li>Phone: 1-613-520-2600</li>
            </ul>

            <ul className="flex justify-center gap-6 pt-8 md:justify-start">
              {FooterSocial.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`text-cu-black-200 ${item.hover}`}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon />
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex justify-center gap-6 mt-8 text-sm border-t pt-7 border-cu-black-800 md:text-base md:justify-start">
              {FooterKeyLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-cu-black-400 hover:text-white hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex md:gap-16">
            <div className="hidden lg:block">
              <p className="text-base md:text-lg mb-1.5">Quick Links</p>
              <ul className="space-y-1 text-base md:text-lg">
                {FooterLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-cu-black-400 hover:text-white hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden xl:block">
              <p className="text-base md:text-lg mb-1.5">Quick Links</p>
              <ul className="space-y-1 text-base md:text-lg">
                {FooterLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-cu-black-400 hover:text-white hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <Button title="cutheme Help Centre" />
              <Button title="Get IT Support" color="dark-grey" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
