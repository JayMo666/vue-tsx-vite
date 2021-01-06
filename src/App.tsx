// export default () => {
//   return <div>hello world for tsx</div>
// }

import { defineComponent } from 'vue'
import V1 from './components/V1.vue'
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <div>aaa</div>
          <V1></V1>
        </div>
      )
    }
  }
})
