import { CSSProperties } from 'react'

export default function GitHubIcon(props: {
  style?: CSSProperties;
}) {

  return (
    <svg style={props.style} x="0px" y="0px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path d="M150.5,20.4c-76.3,0-138.2,61.8-138.2,138.2c0,61.1,39.5,112.8,94.5,131.1c6.9,1.2,9.5-2.9,9.5-6.6
        c0-3.3-0.2-14.2-0.2-25.7c-34.7,6.4-43.7-8.5-46.5-16.2c-1.6-4-8.3-16.2-14.2-19.5c-4.8-2.6-11.7-9-0.2-9.2
        c10.9-0.2,18.7,10,21.2,14.2c12.4,20.9,32.3,15,40.2,11.4c1.2-9,4.8-15,8.8-18.5c-30.7-3.5-62.9-15.4-62.9-68.2
        c0-15,5.4-27.5,14.2-37.1c-1.4-3.5-6.2-17.6,1.4-36.6c0,0,11.6-3.6,38,14.2c11.1-3.1,22.8-4.7,34.5-4.7c11.7,0,23.5,1.6,34.5,4.7
        c26.4-18,38-14.2,38-14.2c7.6,19,2.8,33.2,1.4,36.6c8.8,9.7,14.2,21.9,14.2,37.1c0,53-32.3,64.8-63,68.2c5,4.3,9.3,12.6,9.3,25.6
        c0,18.5-0.2,33.3-0.2,38c0,3.6,2.6,7.9,9.5,6.6c54.6-18.3,94.1-70.1,94.1-131.1C288.6,82.2,226.8,20.4,150.5,20.4z" />
    </svg>
  )
}