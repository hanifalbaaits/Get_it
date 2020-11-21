import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const ratioX = guidelineBaseWidth < 375 ? (guidelineBaseWidth < 320 ? 0.75 : 0.875) : 1
const baseUnit = 16 // base font size value
const unit = baseUnit * ratioX

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

function em(value) {
  return unit * value
}

export {scale, verticalScale, moderateScale, em};