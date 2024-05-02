import { Properties as CSSProperties } from 'csstype'
const loaderDefault = require('../assets/images/loader.gif');
export default (style?: CSSProperties) => {
   return (
      <div style={{
         position: 'absolute', top: 0, left: 0,
         backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '100%', height: '100%', zIndex: 999,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         ...style
      }}>
         <img width={'30%'} src={loaderDefault} />
      </div>
   )
}