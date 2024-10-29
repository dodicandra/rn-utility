declare module 'react-native/Libraries/Text/TextAncestor' {
  import React from 'react'
  const TextAncestor: React.Context<boolean>
  export default TextAncestor
}

declare module 'react-native/Libraries/Components/View/ViewNativeComponent' {
  import React from 'react'
  import {ViewProps,View} from 'react-native'
  const ViewNativeComponent: React.ForwardRefExoticComponent<React.PropsWithRef<ViewProps> & React.RefAttributes<View>>
  export default ViewNativeComponent
}