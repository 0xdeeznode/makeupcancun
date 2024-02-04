import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <>
      <footer className='px-8'>
        <div className="flex flex-col w-full gap-5 py-10">
          {/* INFO CONTAINER */}
          <div className='flex w-full gap-20 '>
            <Link href='/' className=''>
              <Image 
                src="/MClogo500.svg"
                alt='Makeup in Cancun logo'
                width={110}
                height={110}
              />
            </Link>
            {/* INFOContainer-Community */}
            <div className='flex justify-betweenn'>
              {FOOTER_LINKS.map((columns, columnIndex) => (
                <FooterColumn title={columns.title} key={columnIndex}>
                  <ul className='flex flex-col gap-4'>
                    {columns.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {columns.ref[linkIndex] && columns.ref[linkIndex] !== '' ? (
                          <a href={columns.ref[linkIndex]} target='_blank' rel='noopener noreferrer'>
                            <span className='font-bold text-gray-600 hover:text-gray-800'>{link}</span>
                          </a>
                        ) : (
                          <Link href='/'>
                            <span className='font-bold text-gray-600 hover:text-gray-800'>{link}</span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>
            {/* INFOContainer-Contact */}
            <div className='flex justify-betweenn'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, linkIndex) => (
                  <ul key={linkIndex} className='flex gap-4'>
                    <li className='font-bold text-gray-600 hover:text-gray-800'>{link.label}</li>
                    <li className='font-bold text-gray-600 hover:text-gray-800'>{link.value}</li>
                  </ul>
                ))}
              </FooterColumn>
            </div>
            {/* INFORContainer-Socials */}
            <div className='flex'>
              <FooterColumn title={SOCIALS.title}>
              <ul className='flex gap-5'>
                {SOCIALS.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={SOCIALS.ref[linkIndex]} target="_blank" rel="noopener noreferrer">
                      <Image 
                      src={link}
                      width={30}
                      height={30}
                      alt={`Social Icon ${linkIndex + 1}`}
                      />
                    </a>
                  </li>
                  ))}
              </ul>
              </FooterColumn>
            </div>
          </div>
          {/* Copyrights */}
          <div className="w-full border-t-2 bg-gray-20 pt-8">
            <p className='text-center text-rojo'>2024 &copy; Makeup In Cancun | All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className='flex flex-col gap-4 font-playFair'>
      <h4 className='text-lg whitespace-nowrap font-bold text-rojo'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer