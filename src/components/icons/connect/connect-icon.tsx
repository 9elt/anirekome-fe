export default function ConnectIcon({size}: {size?: "small" | "medium" | "large"}) {

  const sizes = {
    small: {width: '1.2rem', height: '1.2rem'},
    medium: {width: '1.9rem', height: '1.9rem'},
    large: {width: '2.5rem', height: '2.5rem'},
  }

  return (
    <svg style={size? sizes[size] : sizes.medium} x="0px" y="0px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path d="M154.5,227.4H80.6V68.3h73.9c3.1,0,5.7-2.5,5.7-5.7s-2.5-5.7-5.7-5.7H74.9c-3.1,0-5.7,2.5-5.7,5.7v170.4c0,3.1,2.5,5.7,5.7,5.7h79.5c3.1,0,5.7-2.5,5.7-5.7C160.1,230,157.6,227.4,154.5,227.4z"/>
      <path d="M249.4,143.9l-39.2-39.8c-2.2-2.2-5.8-2.2-8,0c-2.2,2.2-2.2,5.9,0,8.1l29.5,30h-117c-3.1,0-5.7,2.6-5.7,5.7c0,3.2,2.5,5.7,5.7,5.7h117l-29.5,30c-2.2,2.2-2.2,5.9,0,8.1c2.2,2.2,5.8,2.2,8,0l39.2-39.8C251.6,149.8,251.6,146.1,249.4,143.9z"/>
    </svg>
  )
}