const searchParams = new URLSearchParams(window.location.search)


export const PRODUCTION = searchParams.get('production') === null
  ? process.env.REACT_APP_PRODUCTION === 'true'
  : searchParams.get('production') === 'true'

export const SDK_KEY = searchParams.get('sdk_key') || process.env.REACT_APP_SDK_KEY || ''
export const EVENT_ID = searchParams.get('event_id') || process.env.REACT_APP_EVENT_ID || ''

export const STUDIO_LINK = PRODUCTION ? `https://studio.streamlayer.io/events/all/id/${EVENT_ID}/moderation` : `https://studio.next.streamlayer.io/events/all/id/${EVENT_ID}/moderation`
export const FALLBACK_VIDEO = 'https://cdn.streamlayer.io/assets/sdk-web/Own%20The%20Game%201080p%20RF18.mp4'