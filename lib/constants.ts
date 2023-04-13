import { arbitrum, goerli, hardhat, mainnet, optimism, polygon, sepolia } from '@wagmi/chains'

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Application
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export const SITE_CANONICAL = 'https://slides.turboeth.xyz/'
export const SITE_EMOJI = '🐟'
export const SITE_NAME = 'Phishing'
export const SITE_TAGLINE = 'Jak nie dać się oszukać'
export const SITE_TITLE = 'Phishing - Prezentacja'
export const SITE_DESCRIPTION = 'Czy podejmiesz wyzwanie?'
export const SOCIAL_TWITTER = 'district_labs'
export const SOCIAL_GITHUB = 'turbo-eth/turbo-slides'

export const AUTHOR_NAME = '@DKWOC'
export const AUTHOR_URL = 'https://twitter.com/CyberWojska'
export const AUTHOR_IMAGE_URL = '/dkwoc_logo.png'

export const PRESENTATION_DATE = 'Q1 2023'
export const PRESENTATION_MODES = {
  SLIDESHOW: 'slideshow',
  SPEAKER: 'speaker',
}

export const APP_CONFIG = {
  canonical: SITE_CANONICAL,
  emoji: SITE_EMOJI,
  title: SITE_TITLE,
  site_name: SITE_NAME,
  description: SITE_DESCRIPTION,
  previewImg: `${SITE_CANONICAL}/preview.png`,
  locale: 'pl',
  twitter: SOCIAL_TWITTER,
}

export const DEPLOY_URL =
  'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Fturbo-slides&project-name=TurboSlides&repository-name=turbo-slides&demo-title=TurboSlides'

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Blockchain
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Override the default Goerli icon so it's not the same as the default Ethereum icon

// @ts-ignore
goerli.iconUrl = '/icons/NetworkEthereumTest.svg'
// @ts-ignore
sepolia.iconUrl = '/icons/NetworkEthereumTest.svg'

export const ETH_CHAINS = [mainnet, polygon, optimism, arbitrum, goerli]
export const ETH_CHAINS_PROD = [mainnet, polygon, optimism, arbitrum]
export const ETH_CHAINS_TEST = [mainnet, polygon, optimism, arbitrum, goerli, sepolia, hardhat]
