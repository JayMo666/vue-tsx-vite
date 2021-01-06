// export default () => {
//   return <div>hello world for tsx</div>
// }

import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => {
      return <div>aaa</div>
    }
  }
})
