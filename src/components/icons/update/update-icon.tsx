export default function UpdateIcon({size}: {size?: "small" | "medium" | "large"}) {

  const sizes = {
    small: {width: '1.2rem', height: '1.2rem'},
    medium: {width: '1.9rem', height: '1.9rem'},
    large: {width: '2.5rem', height: '2.5rem'},
  }

  return (
    <svg style={size? sizes[size] : sizes.medium} x="0px" y="0px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path d="M218.2,150c0,37.7-30.5,68.2-68.2,68.2 
          S81.8,187.7,81.8,150s30.5-68.2,68.2-68.2v24.9l62.2-35.9L150,34.9v26.8c-48.8,0-88.3,39.6-88.3,88.3s39.6,88.3,88.3,88.3
          s88.3-39.6,88.3-88.3H218.2z"/>
    </svg>
  )
}