export default {
  default: {
    node: 'VAST',
    message: 'Error while parsing VAST Tag'
  },
  noVersion: {
    node: 'VAST',
    message: 'VAST Version is required',
  },
  noAdSystem: {
    message: 'AdSystem is required',
    node: 'InLine/Wrapper'
  },
  noAdTitle: {
    message: 'AdTitle is reuqired',
    node: 'InLine/Wrapper'
  },
  noImpression: {
    message: 'Impression Tracking URL is required',
    node: 'InLine/Wrapper'
  },
  noCreatives: {
    message: 'Creatives is required',
    node: 'InLine/Wrapper'
  },
  creativesNoChildren: {
    message: 'Creatives node cannot be empty',
    node: 'Creatives'
  },
  linearNoMediaFiles: {
    message: 'MediaFiles is required',
    node: 'Linear'
  },
  linearNoDuration: {
    message: 'Duration is required',
    node: 'Linear'
  },
  trackingEventNoEvent: {
    message: 'Event is required',
    node: 'TrackingEvent'
  },
  mediaFileNoURI: {
    message: 'URI is required',
    node: 'MediaFile'
  },
  mediaFileNoDelivery: {
    message: 'delivery is required',
    node: 'MediaFile'
  },
  mediaFileNoType: {
    message: 'type is required',
    node: 'MediaFile'
  },
  mediaFileNoWidth: {
    message: 'width is required',
    node: 'MediaFile'
  },
  mediaFileNoHeight: {
    message: 'height is required',
    node: 'MediaFile'
  },
  companionNoWidth: {
    message: 'width is required',
    node: 'Companion'
  },
  companionNoHeight: {
    message: 'height is required',
    node: 'Companion'
  },
  staticResourceNoType: {
    message: 'type is required',
    node: 'StaticResource'
  }
};
