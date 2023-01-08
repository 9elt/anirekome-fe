import Logo from "../logo/logo";

export default function Loader() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '22rem'}}>
      <Logo neon style={{width: '3rem'}}/>
    </div>
  )
}